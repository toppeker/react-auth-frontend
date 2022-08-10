import { Log, UserManager, WebStorageStateStore } from 'oidc-client';
export class AuthService {
    constructor() {
        const settings = {
            authority: 'https://localhost:5001/',
            client_id: 'demo-react-app',
            client_secret: 'secret',
            redirect_uri: 'http://localhost:3001/signin-callback.html',
            monitorSession: false,
            post_logout_redirect_uri: 'http://localhost:3001/',
            response_type: 'code',
            scope: 'openid profile email',
            userStore: new WebStorageStateStore({ store: window.localStorage }) // set this to save user info in localStorage
        };
        this.userManager = new UserManager(settings);
        Log.logger = console;
        Log.level = Log.INFO;
    }
    getUser() {
        return this.userManager.getUser();
    }
    login() {
        return this.userManager.signinRedirect();
    }
    logout() {
        return this.userManager.signoutRedirect();
    }
}