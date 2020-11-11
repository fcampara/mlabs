import Firebase from 'firebase/app'
import 'firebase/storage'
import { FIREBASE_CONFIG } from 'src/constants/firebase'

Firebase.initializeApp(FIREBASE_CONFIG)

export default Firebase
