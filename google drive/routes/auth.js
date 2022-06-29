/*eslint-disable*/
const { Router } = require('express')
const passport = require('passport')
const KEYS = require('../configs/keys')
// init router for auth
const TOKEN_PATH = 'token.json';
const fs =require("fs")
let router = Router()
const { google } = require('googleapis')
router.get('/login', function (req, res) {

    if (req.user) res.redirect('/dashboard') // if auth
    else res.redirect('/auth/login/google') // if not auth

})


// login redirect
router.get('/login/google', passport.authenticate("google", {
    scope: ['profile', "https://www.googleapis.com/auth/drive.file", "email"]
}))



// function authorize(req,res){
//     const oauth2Client = new google.auth.OAuth2(
//         KEYS.googleOauth.clientID,
//         KEYS.googleOauth.clientSecret,
//         KEYS.googleOauth.callback
//     )
//     fs.readFile(TOKEN_PATH, (err, token) => {
//         if (err) res.redirect('/auth/login/google');
//         oauth2Client.setCredentials(JSON.parse(token));
//         console.log("read token file")
//         console.log(token)
//       });
// }

// function getAccessToken(code){
//     const oauth2Client = new google.auth.OAuth2(
//         KEYS.googleOauth.clientID,
//         KEYS.googleOauth.clientSecret,
//         KEYS.googleOauth.callback
//     )

//     oauth2Client.getToken(code, (err, token) => {
//         if (err) return console.error('Error retrieving access token', err);
//         oauth2Client.setCredentials(token);
//         // Store the token to disk for later program executions
//         fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//           if (err) return console.error(err);
//           console.log('Token stored to', TOKEN_PATH);
//         });
// })
// }

// callback from google oauth (with token)
router.get('/google/redirect', passport.authenticate('google'), function (req, res) {
// console.log("authenticated response")
//     console.log(req.query)
//     console.log("params")
//     console.log(req.params)
//     console.log("user")
//     console.log(req.user)

    fs.writeFile(TOKEN_PATH, req.user.accesstoken, (err) => {
        if (err) return console.error(err);
        // console.log('Token stored to', TOKEN_PATH);
      });
    //   getAccessToken(req.query.code)
    //   authorize(req,res)
    res.send("logged success")
    // res.redirect('/dashboard')
})

// logout
router.get('/logout', function (req, res) {
    req.logOut();
    fs.unlink(TOKEN_PATH,(err)=>{

        console.log("file deleted")
    })
    res.json({ 
        success:true
    })
    // res.redirect('/')
})
// router.get('/logout', function (req, res) {
//     req.logOut();
//     res.redirect('/')
// })
module.exports = router