const { addDoc, collection } = require('firebase/firestore');
const { getFirestore } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
  apiKey: 'AIzaSyAml7voo0DkbvQlQovQJP6bgM0A1E50E-0',
  authDomain: 'petshop-d50bf.firebaseapp.com',
  projectId: 'petshop-d50bf',
  storageBucket: 'petshop-d50bf.appspot.com',
  messagingSenderId: '854316184642',
  appId: '1:854316184642:web:1c7b8d18fbd37d7af0a9db'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const petshop = [
  {
    name: 'hats',
    type: 'gato',
    old: '15',
    breed: 'Sphynx',
    imageUrl:
    'https://media.istockphoto.com/id/1451702194/photo/gato-mimoso.jpg?b=1&s=170667a&w=0&k=20&c=SDOiuSo05XmKeyDMloO4xiheh3dXgmaOJv0VNg9ub0Q=',
    nameDono: 'João',
    telephoneDono: '81991485234'
  },
  {
    name: 'hats',
    type: 'gato',
    old: '15',
    breed: 'Sphynx',
    imageUrl:
    'https://media.istockphoto.com/id/1451702194/photo/gato-mimoso.jpg?b=1&s=170667a&w=0&k=20&c=SDOiuSo05XmKeyDMloO4xiheh3dXgmaOJv0VNg9ub0Q=',
    nameDono: 'João',
    telephoneDono: '81991485234'
  }
];

const main = async () => {
  await Promise.all(
    petshop.map(async (pets) => {
      await addDoc(collection(db, 'petshop'), pets);
    })
  );
};

main().then(() => process.exit());
