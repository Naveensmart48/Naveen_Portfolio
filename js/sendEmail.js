window.addEventListener("load", () => {
    var btn = document.querySelector('#submitbtns');

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // console.log("sijdbf"); -- 896d84b5-6676-4155-acdb-20a69b9caedc
        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var message = document.querySelector('#message').value;

        console.log(name, email, message)

        Email.send({
            SecureToken: "b553b8dd-2e06-4465-8ebf-f24d02796ca5",
            To: email,
            From: "naveenkumarrv48@gmail.com",
            Subject: "You have a Message from your Portfolio...",
            Body: message
        }).then(
            message => alert("Your message have been sent successfully! Thank you for reaching out!!")
        );

    })

})