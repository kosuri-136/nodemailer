var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user:'kosuriravikanth553@gmail.com',
        pass:'cjdxrprvwvmzcifj'
    }
   
})
var options = {
    from:'kosuriravikanth553@gmail.com',
    // to :'kosuriravikanth@gmail.com',
    to :'devisuryaprakash07@gmail.com',
    subject:'hahahhaha',
    text:'hi sury prakash'
}
transporter.sendMail(options ,(err,info)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log('email is sent ' + info.response)
    }
})
