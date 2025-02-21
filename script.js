document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const consent = document.getElementById("consent").checked;

    document.getElementById("fnameError").innerText = "";
    document.getElementById("lnameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("consentError").innerText = "";

    if (fname === "") {
        document.getElementById("fnameError").innerText = "First name is required.";
        isValid = false;
    }
    if (lname === "") {
        document.getElementById("lnameError").innerText = "Last name is required.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    }
    if (!consent) {
        document.getElementById("consentError").innerText = "You must agree to the terms.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});
