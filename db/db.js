import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js;

const firebaseConfig = {
  apiKey: "AIzaSyBgYTE3WtYTDnAR4nImXYTboSmstPAWUBQ",
  authDomain: "fn-tabungan.firebaseapp.com",
  projectId: "fn-tabungan",
  storageBucket: "fn-tabungan.appspot.com",
  messagingSenderId: "621884081895",
  appId: "1:621884081895:web:d9afc19472de0f7902c442"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginButton = document.getElementById('loginButton');

window.login = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider);
    } catch (error) {
        console.log('Error...')
    }
};

window.handleRedirectResult = async () => {
    try {
        const result = await getRedirectResult(auth);

        if (result && result.user) {
            const user = result.user;

            localStorage.setItem('userPhoto', user.photoURL);
            localStorage.setItem('userName', user.displayName);
            localStorage.setItem('userEmail', user.email);


            window.location.href = '../page/first.html'
        }
    } catch (error) {
        console.log('Error...')
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.handleRedirectResult()
});

loginButton.addEventListener('click', () => {
    window.login()
});

function logout() {
    localStorage.removeItem('userPhoto');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');

    window.location.href = '../index.html';
}