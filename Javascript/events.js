function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromname").value,
        message_5: document.getElementById("toemail").value,
        message: document.getElementById("thetitle").value,
        message_1: document.getElementById("date").value,
        message_2: document.getElementById("appt").value,
        message_3: document.getElementById("e-type").value,
        message_4: document.getElementById("url").value,
    };

    emailjs.send('service_qffsm07', 'template_i7gqjmq', tempParams)
    .then(function(res) {
        console.log("success", res.status);
    })
}

function validate() {
      
    if( document.myForm.fromname.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.toemail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if( document.myForm.thetitle.value == "" ) {
        alert( "Please provide your Event Title!" );
        document.myForm.Name.focus() ;
        return false;
    }
    if( document.myForm.e-type.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.Name.focus() ;
        return false;
    }
    if( document.myForm.url.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.Name.focus() ;
        return false;
    }
    
    return( true );
 }

 function checkOk(){
    if (validate() == true) {
        return sendMail();
    }
    else {
        return false;
    }
}
