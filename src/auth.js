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


const firebaseConfig = {
  apiKey: "AIzaSyDPzdCH-ultPXpC_GxhBBe4NyvfHBVs1J8",
  authDomain: "netflixclone-c652d.firebaseapp.com",
  projectId: "netflixclone-c652d",
  storageBucket: "netflixclone-c652d.firebasestorage.app",
  messagingSenderId: "1088438896915",
  appId: "1:1088438896915:web:9501f3e854be040f4232e6"
};

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