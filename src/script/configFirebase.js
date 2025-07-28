import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBOY3sjtepsQ9IjDu3zm2kcp02nyISWSCA",
  authDomain: "pagos-nx-6ec06.firebaseapp.com",
  projectId: "pagos-nx-6ec06",
  storageBucket: "pagos-nx-6ec06.firebasestorage.app",
  messagingSenderId: "1071726610999",
  appId: "1:1071726610999:web:093270a1739b95d12f0db2",
  databaseURL: 'https://pagos-nx-6ec06-default-rtdb.firebaseio.com/'
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();


const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false
});

const rtdb = getDatabase(app);

export { db, rtdb };