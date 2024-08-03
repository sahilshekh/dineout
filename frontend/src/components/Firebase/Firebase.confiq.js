import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCQ938GLP4-VSYGpLTKGQzZv02k15GXkpc",
    authDomain: "dineout-auth-1274b.firebaseapp.com",
    projectId: "dineout-auth-1274b",
    storageBucket: "dineout-auth-1274b.appspot.com",
    messagingSenderId: "772220783630",
    appId: "1:772220783630:web:9dec9f921f36995a8fc05f",
    measurementId: "G-4K0V8V09MV"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);