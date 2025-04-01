import * as admin from 'firebase-admin';

// Your base64 encoded service account JSON string
const base64ServiceAccount: string = process.env.FIREBASE_ADMIN_KEY;

// Decode the base64 string to get the JSON
const serviceAccountJson: string = Buffer.from(base64ServiceAccount, 'base64').toString('utf8');

// Parse the decoded JSON string into a JavaScript object
const serviceAccount: admin.ServiceAccount = JSON.parse(serviceAccountJson);

// Initialize the Firebase Admin SDK only once
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
    console.log("Firebase Admin SDK initialized using base64 encoded service account");
}

export default admin;
