import auth0 from 'auth0-js';
import clientUrl from './clientUrl'

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines use the domain from auth0
      domain: 'dev-nwd0sag5.auth0.com',
      audience: 'https://dev-nwd0sag5.auth0.com/userinfo',
      clientID: 'ygju2CmiNLwycry41b5db7wO4Z8rxxo3',
      redirectUri: clientUrl + '/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    this.auth0.authorize();
  }
//
//   handleAuthentication() {
//     return new Promise((resolve, reject) => {
//       this.auth0.parseHash((err, authResult) => {
//         if (err) return reject(err);
//         if (!authResult || !authResult.idToken) {
//           return reject(err);
//         }
//         this.idToken = authResult.idToken;
//         this.profile = authResult.idTokenPayload;
//         // set the time that the id token will expire at
//         this.expiresAt = authResult.idTokenPayload.exp * 1000;
//         resolve();
//       });
//     })
//   }
//
//   signOut() {
//     // clear id token, profile, and expiration
//     this.idToken = null;
//     this.profile = null;
//     this.expiresAt = null;
//   }
// }

handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        // history.replace('/')
        resolve();
      });
    })
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // set the time that the id token will expire at
    this.expiresAt = authResult.idTokenPayload.exp * 1000;
  }

  signOut() {
    this.auth0.logout({
      returnTo: clientUrl,
      clientID: 'ygju2CmiNLwycry41b5db7wO4Z8rxxo3',
    });
  }

  silentAuth() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) return reject(err);
        this.setSession(authResult);
        resolve();
      });
    });
  }
}

const auth0Client = new Auth();

export default auth0Client;
