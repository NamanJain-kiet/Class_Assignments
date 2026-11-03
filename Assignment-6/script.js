
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get all field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ageText = document.getElementById("age").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const course = document.getElementById("course").value;
    const terms = document.getElementById("terms").checked;

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    const studyMode = document.querySelector(
        'input[name="studyMode"]:checked'
    );

    // 1. Name validation
    if (name === "") {
        alert("Name is required. Please enter your full name.");
        document.getElementById("name").focus();
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Invalid name! Use letters and spaces only.");
        document.getElementById("name").focus();
        return;
    }

    if (name.replace(/\s/g, "").length < 3) {
        alert("Name must contain at least 3 letters.");
        document.getElementById("name").focus();
        return;
    }

    // 2. Email validation
    if (email === "") {
        alert("Email is required. Please enter your email address.");
        document.getElementById("email").focus();
        return;
    }

    const emailPattern =
        /^[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

    if (!emailPattern.test(email)) {
        alert(
            "Invalid email address!\n\n" +
            "Please enter a complete email, such as student@example.com.\n" +
            "Check for a missing username, @ symbol, or domain."
        );
        document.getElementById("email").focus();
        return;
    }

    // 3. Age validation
    if (ageText === "") {
        alert("Age is required. Please enter your age.");
        document.getElementById("age").focus();
        return;
    }

    const age = Number(ageText);

    if (!Number.isInteger(age) || age < 18 || age > 60) {
        alert("Invalid age! Enter a whole number between 18 and 60.");
        document.getElementById("age").focus();
        return;
    }

    // 4. Gender validation
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // 5. Course validation
    if (course === "") {
        alert("Please select a course, such as MCA or BCA.");
        document.getElementById("course").focus();
        return;
    }

    // 6. Study mode validation
    if (!studyMode) {
        alert("Please select Regular or Distance study mode.");
        return;
    }

    // 7. Password validation
    if (password === "") {
        alert("Password is required. Please enter a password.");
        document.getElementById("password").focus();
        return;
    }

    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        document.getElementById("password").focus();
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        document.getElementById("password").focus();
        return;
    }

    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter.");
        document.getElementById("password").focus();
        return;
    }

    if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one number.");
        document.getElementById("password").focus();
        return;
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        alert("Password must contain at least one special character.");
        document.getElementById("password").focus();
        return;
    }

    // 8. Confirm password validation
    if (confirmPassword === "") {
        alert("Please enter your password again in Confirm Password.");
        document.getElementById("confirmPassword").focus();
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match!");
        document.getElementById("confirmPassword").focus();
        return;
    }

    // 9. Terms and conditions validation
    if (!terms) {
        alert("You must accept the Terms and Conditions to register.");
        document.getElementById("terms").focus();
        return;
    }

    // 10. Registration successful
    alert(
        "REGISTRATION SUCCESSFUL!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Age: " + age + "\n" +
        "Gender: " + gender.value + "\n" +
        "Course: " + course + "\n" +
        "Study Mode: " + studyMode.value + "\n\n" +
        "All fields have been validated successfully."
    );

    form.reset();
});

// Optional reset confirmation
form.addEventListener("reset", function () {
    console.log("Form has been reset.");
});
