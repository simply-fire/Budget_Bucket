require("dotenv").config();
let path = process.env.APP_PATH;
var action =  require(path+"\\actions\\action.js");
var express = require('express');
var router = express.Router();
var sha256 = require('js-sha256').sha256;

let otp_hash = '';
var User = require(path + "\\connection\\connection.js")
console.log(path + '\\Frontend\\Login_page\\');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(path + '\\Frontend\\Login_page\\index.html');
});

router.get('/style.css', function(req, res, next){
	res.sendFile(path + '\\Frontend\\Login_page\\style.css');
});

router.get('/script.js', function(req, res, next){
	res.sendFile(path + '\\Frontend\\Login_page\\script.js');
});

router.post('/get_otp', function(req, res, next){
	let otp = action.get_OTP();
	otp_hash = sha256(String(otp));
	let usr = req.body;
	action.send_mail(usr["email"], otp);
	let otp_obj = {};
	otp_obj.hash = otp_hash;
	res.json(otp_obj);
});

router.post('/register_user', function(req, res, next){
	let usr = req.body;
	console.log(usr);
	console.log(otp_hash);
	if (sha256(String(usr.otp)) == otp_hash){
		delete(usr.otp);
		usr.psswd = sha256(usr.password);
		const user = new User(usr);
		user.save();
	}
});

router.post('/ping',function(req, res, next){
	res.send("Accessible");
	}
);

router.post('/validate_user_login',function(req, res, next){
	let usr = req.body;
	User.findOne({'username': usr.username},'psswd', function(err, user){
		if(user.psswd == usr.password){
			res.send("Verified");
		}
		else{
			res.send("Incorrect password")
		}
		console.log(user)
	});

});
module.exports = router;
