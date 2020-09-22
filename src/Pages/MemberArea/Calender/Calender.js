import React, {Component} from "react";
import {Calendar, Badge} from 'antd';
import {Fade} from "react-reveal";

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  getListData(value) {
    let listData;
    if (value.month() === 4) {
      switch (value.date()) {
        case 9:
          listData = [
            {type: 'success', content: `International Women's Day 1`},
          ];
          break;
        case 10:
          listData = [
            {type: 'success', content: `International Women's Day 2`},
          ];
          break;
        case 16:
          listData = [
            {type: 'success', content: `International Women's Day 3`},
          ];
          break;
        case 17:
          listData = [
            {type: 'success', content: `International Women's Day 4`},
          ];
          break;
        default:
      }
    }
    return listData || [];
  }

  dateCellRender = (value) => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content}/>
          </li>
        ))}
      </ul>
    );
  };

  getMonthData = (value) => {
  };

  monthCellRender = (value) => {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  render() {
    return (
      <div>
        <Fade>
          <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender}/>
        </Fade>
      </div>
    )
  }
}

export default Calender;
