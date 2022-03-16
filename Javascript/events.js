function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromname").value,
        to_name: document.getElementById("toemail").value,
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
