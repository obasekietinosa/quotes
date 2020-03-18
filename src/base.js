import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCt-6sZl2i9zclHA1rXANgSrfGV2h5EDN8",
    authDomain: "etin-obaseki.firebaseapp.com",
    databaseURL: "https://etin-obaseki.firebaseio.com",
    projectId: "etin-obaseki",
    storageBucket: "etin-obaseki.appspot.com",
    messagingSenderId: "132253073025",
    appId: "1:132253073025:web:9ddb9693630f532a"
  })

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base