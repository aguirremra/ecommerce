var webAuth = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: AUTH0_CALLBACK_URL,
    audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile',
    leeway: 60
});
var authSignUp = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: AUTH0_CALLBACK_URL,
    audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile',
    leeway: 60,
});
var loginStatus = $('.container h4');
var loginView = $('#login-view');
var homeView = $('#home-view');

// buttons and event listeners
var homeViewBtn = $('#btn-home-view');
var loginBtn = $('#btn-login');
var logoutBtn = $('#btn-logout');
var signUpBtn = $('#btn-signUp');
var createAcc = $('#createAcc');

var userProfile;

function authOnReady() {
    var content = $('.content');
    var loadingSpinner = $('#loading');
    content.css('display', 'block');
    loadingSpinner.css('display', 'none');

    homeViewBtn.click(function() {
        homeView.css('display', 'inline-block');
        loginView.css('display', 'none');
    });

    signUpBtn.click(function(e) {
        e.preventDefault();
        // console.log("SIGN UP CLICKED");
        webAuth.authorize();

        var lock = new Auth0Lock(clientId, domain);
        //     auth: {
        //         redirectUrl: AUTH0_CALLBACK_URL,
        //         responseType: 'code',
        //         params: {
        //             scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
        //         }
        //     },
        // options: {
        //     initialScreen: 'signUp'

        //         logo: 'https: //www.thesun.co.uk/wp-content/uploads/2017/01/gettyimages-185071735.jpg?strip=all&w=960'

        // }
        // lock.getUserInfo(authResult.accessToken, function(error, profile) {
        //     if (error) {
        //         // Handle error
        //         return;
        //     }

        // Save token and profile locally
        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
        console.log("Im here");
        lock.getUserInfo(accessToken, function(error, profile) {
            if (error) {
                console.error('ERR - Something went wrong fetching the User Info');
                console.log('ERR', error);
                return;
            }
            alert("hello " + profile.name);
            console.log(profile);
        })
        lock.show({
            icon: 'https: //www.thesun.co.uk/wp-content/uploads/2017/01/gettyimages-185071735.jpg?strip=all&w=960'
        });

        // var webAuth = new auth0.WebAuth({
        //     // ...
        //     scope: 'openid profile'
        // });
    });

    loginBtn.click(function(e) {
        e.preventDefault();
        webAuth.authorize();
    });

    createAcc.click(function(e) {
        e.preventDefault();
        webAuth.authorize();
    });

    logoutBtn.click(logout);


}

function setSession(authResult) {
    // Set the time that the access token will expire at
    var expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
}

function logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    displayButtons();
}

function isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
}

function handleAuthentication() {
    console.log("Enter handleAuthentication:");
    webAuth.parseHash(function(err, authResult) {
        console.log("Enter Parse hash:", authResult);
        if (err) {
            homeView.css('display', 'inline-block');
            console.error('ERR - Something went wrong with the Parse Hase');
            console.log('ERR', err);
            return;
        }
        if (authResult && authResult.accessToken && authResult.idToken) {
            console.log('Using authResult');
            window.location.hash = '';
            setSession(authResult);
            getProfile();
            loginBtn.css('display', 'none');
            homeView.css('display', 'inline-block');
        }
        displayButtons();
    });
}

function getProfile() {
    if (!userProfile) {
        var accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
            console.log('Access token must exist to fetch profile');
        }

        webAuth.client.userInfo(accessToken, function(err, profile) {
            if (err) {
                console.error('ERR - Something went wrong fetching the Auth0 Profile');
                console.log('ERR', err);
            }
            if (profile) {
                userProfile = profile;
                displayProfile(profile);
                console.log(userProfile);
                $("#nickName").text("  " + userProfile.name).addClass("nick");
                $("#avatar").attr("src", userProfile.picture).addClass("ava");
            }
        });
    } else {
        displayProfile();
    }
}

function displayProfile(profile) {
    // display the profile
    if (!profile) {
        // profile = {
        //     nickname: nick,
        //     picture: pic
        // };
    }
    $('#profile-view .nickname').text(profile.nickname);
    $('#profile-view .full-profile').text(JSON.stringify(profile, null, 2));
    $('#profile-view img').attr('src', profile.picture);
};

function displayButtons() {
    if (isAuthenticated()) {
        loginBtn.css('display', 'none');
        logoutBtn.css('display', 'inline-block');
        loginStatus.text('You are logged in!');
    } else {
        loginBtn.css('display', 'inline-block');
        logoutBtn.css('display', 'none');
        loginStatus.text('You are not logged in! Please log in to continue.');
    }
}