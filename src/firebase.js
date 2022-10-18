import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDKDslA2DAJ3wWWYrXd6f8LnLA-fDTISBM",
    authDomain: "login-register-web-ws.firebaseapp.com",
    projectId: "login-register-web-ws",
    storageBucket: "login-register-web-ws.appspot.com",
    messagingSenderId: "736428429740",
    appId: "1:736428429740:web:a3e17f1676bf7d20766a09",
    measurementId: "G-ZJDNFBFTM8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

