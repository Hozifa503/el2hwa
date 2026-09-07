const contactForm = document.getElementById("contact-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const persons = document.getElementById("persons");
const date = document.getElementById("date");
const time = document.getElementById("time");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const serviceID = "service_8dv10vy"; 
    const templateID = "template_2451hxi";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            console.log("SUCCESS! Table Hacked & Email Sent.");
            alert("Reservation sent successfully!");
            contactForm.reset();
        }, (error) => {
            console.log("FAILED...", error);
            alert("Failed to send reservation, please try again.");
        });
});