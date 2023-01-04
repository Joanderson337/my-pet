import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_QQXOEL_RA2wXubjuwV3YHswaeqhd2qI',
  authDomain: 'pet-hotel-accd3.firebaseapp.com',
  projectId: 'pet-hotel-accd3',
  storageBucket: 'pet-hotel-accd3.appspot.com',
  messagingSenderId: '432571266153',
  appId: '1:432571266153:web:d32b0fb98ce31ccffddef8'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});
