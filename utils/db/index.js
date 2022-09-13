import admin from 'firbase-admin'
import serviceAccount  from '.serviceAccountKey.json'

if (!admin.apps.length) {
    try { 
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } catch {
        console.log('Firebase admin initialization error'. error.stack);
    }
}

export default admin.firestore();