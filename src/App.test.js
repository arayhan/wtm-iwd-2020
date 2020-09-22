import React from 'react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';
import firebase from 'firebase';
import {shallow} from "enzyme";

let component;

jest.mock('firebase', () => ({
  initializeApp: jest.fn(),
  analytics: jest.fn(),
  signInOptions: {},
  auth: jest.fn(),
  onAuthStateChanged: jest.fn(),
}));

jest.mock('./Config/Congfig', () => ({
  uiConfig: {},
}));

jest.mock('./Config/Recognition', () => ({
  recognition: {},
}));

beforeEach(() => {
  firebase.auth.mockReturnValue({
    onAuthStateChanged: jest.fn()
  });
  component = shallow(<App/>);
});

describe('render', () => {
  it('should render loading section when isSignedIn state is null', () => {
    component.setState({isSignedIn: null});

    const loadingSection = component.find('#loading-section');

    expect(loadingSection).toHaveLength(1);
  });

  it('should render login section when isSignedIn state is false', () => {
    component.setState({isSignedIn: false});

    const loginSection = component.find('#login-section');

    expect(loginSection).toHaveLength(1);
  });

  it('should render dashboard section when isSignedIn state is true', () => {
    component.setState({isSignedIn: true});

    const dashboardSection = component.find('#dashboard-section');

    expect(dashboardSection).toHaveLength(1);
  });
});


describe('snapshot', () => {
  it('should same like snapshot', () => {
    const shallowRenderer = new ShallowRenderer();
    const result = shallowRenderer.render(<App/>);
    expect(result).toMatchSnapshot();
  });
});

describe('componentDidMount', () => {
  it('should set state isSignedIn to true when user auth state has been changed to true', () => {
    firebase.auth().onAuthStateChanged.mockImplementationOnce(() =>{
      component.setState({
        isSignedIn: true,
      })
    });

    component.instance().componentDidMount();

    expect(component.state().isSignedIn).toEqual(true);
  });
});
