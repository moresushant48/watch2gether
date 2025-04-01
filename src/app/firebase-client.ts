import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// const clientCredentials = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     databaseUrl: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyA7Fa8F6SafiLVVJIq6fNU-7NLY2InZIr4",
    authDomain: "watch-2-gether.firebaseapp.com",
    databaseURL: "https://watch-2-gether-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "watch-2-gether",
    storageBucket: "watch-2-gether.firebasestorage.app",
    messagingSenderId: "617457129028",
    appId: "1:617457129028:web:58633b72ee9c8b8c0c0e11",
    measurementId: "G-L435KWH5Q3"
};

const fbClientApp = initializeApp(firebaseConfig);

const rtdb = getDatabase(fbClientApp);

const rtdbRooms = (roomId: string) => ref(rtdb, `rooms/${roomId}`);

const rtdbRoomPlayerStateListener = (roomId: string) => ref(rtdb, `rooms/${roomId}/playState`);

const rtdbRoomCurrentTimeListener = (roomId: string) => ref(rtdb, `rooms/${roomId}/currentTime`);

export { fbClientApp, rtdb, rtdbRooms, rtdbRoomPlayerStateListener, rtdbRoomCurrentTimeListener }
