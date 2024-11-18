document.getElementById('login-button').addEventListener('click', () => {
    const auth0 = new auth0.WebAuth({
        domain: 'TU_DOMINIO.auth0.com',
        clientID: 'TU_CLIENT_ID',
        redirectUri: window.location.origin,
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    auth0.authorize();
});
