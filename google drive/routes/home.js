/*eslint-disable*/
const { Router } = require('express')
const passport = require('passport')
const { google } = require('googleapis')
const KEYS = require('../configs/keys')
var cors = require('cors')
const fs =require("fs")
const router = Router()
const TOKEN_PATH = 'token.json';

router.get('/', function (req, res) {
    res.render('home.html', { 'title': 'Application Home' })
})


router.get('/check_user',(req,res)=>{
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err){
        // res.status(200)
        res.json({
          user:''
        }) 


    }else{
    // res.status(200)
    res.json({
      user:'exist',
    })
}

      });

    // if (typeof req.user == "undefined") {

        // res.status(200)
        // res.json({
        //   user:''
        // })
    // }
    // else{
    //     res.status(200)
    //     res.json({
    //       user:'exist',
    //       userData:res.user,
    //       name: req.user.name,
    //       avatar: req.user.pic_url,
    //       email: req.user.email
    //     })
    // }

})

router.get('/dashboard', function (req, res) {

    // if not user
    if (typeof req.user == "undefined") res.redirect('/auth/login/google')
    else {

        let parseData = {
            title: 'DASHBOARD',
            googleid: req.user._id,
            name: req.user.name,
            avatar: req.user.pic_url,
            email: req.user.email
        }

        // if redirect with google drive response
        if (req.query.file !== undefined) {

            // successfully upload
            if (req.query.file == "upload") parseData.file = "uploaded"
            else if (req.query.file == "notupload") parseData.file = "notuploaded"
        }

        res.render('dashboard.html', parseData)
    }
})


router.get('/successfull', function (req, res) {

    // if not user
    if (typeof req.user == "undefined") res.redirect('/auth/login/google')
    else {

        let parseData = {
            title: 'DASHBOARD',
            googleid: req.user._id,
            name: req.user.name,
            avatar: req.user.pic_url,
            email: req.user.email
        }

        // if redirect with google drive response
        if (req.query.file !== undefined) {

            // successfully upload
            if (req.query.file == "upload") parseData.file = "uploaded"
            else if (req.query.file == "notupload") parseData.file = "notuploaded"
        }
        res.send('logged Success')

        // res.render('successfull.html', parseData)
    }
})


router.post('/upload',cors(), function (req, res) {

    // console.log(req.files)
    console.log(req.user.accessToken)
    // not auth
    // if (!req.user) res.redirect('/auth/login/google')
    // else {
        // auth user
        fs.readFile(TOKEN_PATH, (err, token) => {
            if (err){
            res.status(200)
            res.json({
              user:''
            }) 
    
    
        }
       // config google drive with client token
       const oauth2Client = new google.auth.OAuth2(
        KEYS.googleOauth.clientID,
        KEYS.googleOauth.clientSecret,
        KEYS.googleOauth.callback
    )


    oauth2Client.setCredentials({
        'access_token': token
    });
    // console.log(oauth2Client)

    const drive = google.drive({
        version: 'v3',
        auth: oauth2Client
    });

    //move file to google drive

    let { name: filename, mimetype, data } = req.files.file_upload

    const driveResponse = drive.files.create({
        requestBody: {
            name: filename,
            mimeType: mimetype
        },
        media: {
            mimeType: mimetype,
            body: Buffer.from(data).toString()
        }
    });

    driveResponse.then(data => {
        res.status(200)
        res.json({name:'googledrive'})

        // if (data.status == 200) res.redirect('/dashboard?file=upload') // success
        // else res.redirect('/dashboard?file=notupload') // unsuccess

    }).catch(err => { 
        
        
        console.log(err)
        // throw new Error(err)
     })
    
          });
    
    
 
    // }
})



module.exports = router

