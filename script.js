function SendMail(){
    var params = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_h2pksy4"
    const templateID = "template_7p2fh2r"
    emailjs
    .send(serviceID,templateID, params)
    .then((res) => {
        document.getElementById("name").value = "",
        document.getElementById("email").value ="",
        document.getElementById("number").value ="",
        document.getElementById("message").value = "",
        console.log(res);
        alert("Your Message Sent Successfully!")
    })
    .catch((err) => console.log(err));
    }