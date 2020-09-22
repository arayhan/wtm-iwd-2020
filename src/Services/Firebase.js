import firebase from 'firebase'

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyAkJi5IxqRMCWCeZQMsyyRuDq_8uSbBfms",
  authDomain: "internationalwomensday-2020.firebaseapp.com",
  databaseURL: "https://internationalwomensday-2020.firebaseio.com",
  projectId: "internationalwomensday-2020",
  storageBucket: "internationalwomensday-2020.appspot.com",
  messagingSenderId: "704931099341",
  appId: "1:704931099341:web:be9112eee414b76f3aaf84",
  measurementId: "G-ZBN9ECRD2C"
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const auth = firebase.auth
export const db = firebase.database()
