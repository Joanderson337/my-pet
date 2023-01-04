import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAml7voo0DkbvQlQovQJP6bgM0A1E50E-0',
  authDomain: 'petshop-d50bf.firebaseapp.com',
  projectId: 'petshop-d50bf',
  storageBucket: 'petshop-d50bf.appspot.com',
  messagingSenderId: '854316184642',
  appId: '1:854316184642:web:1c7b8d18fbd37d7af0a9db'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});
