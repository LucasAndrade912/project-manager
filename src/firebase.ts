import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
	authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
	projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
	storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
	messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
	appId: String(import.meta.env.VITE_FIREBASE_APP_ID)
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()
const storage = getStorage(app)

export { app, auth, provider, storage }