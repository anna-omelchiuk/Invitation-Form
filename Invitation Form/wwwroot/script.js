document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inviteForm");
    const errorDiv = document.getElementById("error-message");

    if (form) {
        form.addEventListener("submit", (event) => {
            const name = document.getElementById("name").value.trim();
            const age = parseInt(document.getElementById("age").value);
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            let errors = [];

            if (name.length < 2) {
                errors.push("The name is too short.");
            }

            if (isNaN(age) || age < 18 || age > 110) {
                errors.push("The age must be between 18 and 150 years.");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.push("Enter a valid email address.");
            }

            const phoneRegex = /^[\+]?[\d\s-]{10,}$/;
            if (!phoneRegex.test(phone)) {
                errors.push("Enter a valid phone number.");
            }

            if (errors.length > 0) {
                event.preventDefault();
                errorDiv.style.display = "block";
                errorDiv.innerHTML = errors.join("<br>");
            } else {
                errorDiv.style.display = "none";
            }
        });
    }
});