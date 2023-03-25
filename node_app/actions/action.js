const wrap = require('express-async-wrapper');
const nodemailer = require('nodemailer');

const get_OTP = () =>{
	let otp = Math.ceil(((Math.random()*10000)+1000)%9999);
	return otp;
}

const send_mail = wrap(async (usr_email, otp) => {
  const transporter= nodemailer.createTransport({
      service : "Gmail",
      auth :{
          user:"harsharmassignment@gmail.com",
          pass:"lwpfnnuoykwapdnl"
      }
  })
  const options={
      from :"harsharmassignment@gmail.com",
      to:`${usr_email}`,
      subject:"OTP FOR VERIFICATION",
      text: `${otp}`,
    }
 
  transporter.sendMail(options, function(err,info){
      if(err){
          console.log(err);
          return;
      }
      console.log("Sent" +info.response)
  })
})

module.exports = {get_OTP, send_mail};
