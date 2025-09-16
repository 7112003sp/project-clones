import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { 
  getFirestore, 
  addDoc, 
  collection 
} from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJdgexirmco6boINa_-ZnzbNPEvZ7ACmw",
  authDomain: "sample1-8aedf.firebaseapp.com",
  projectId: "sample1-8aedf",
  storageBucket: "sample1-8aedf.firebasestorage.app",
  messagingSenderId: "815176579231",
  appId: "1:815176579231:web:8839122b4d025731d8caaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async(name,email,password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,

        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const login = async(email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))      
    }
}


const logout = ()=>{
    signOut(auth)
}

export  { auth,db,login,signUp,logout}