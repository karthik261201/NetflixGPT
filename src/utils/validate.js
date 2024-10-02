export const checkValidData = (email, password) => {
    const errors = {
        email: null,
        password: null,
    };

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!isEmailValid) {
        errors.email = "Please enter a valid email address";
    }
    if (!isPassValid) {
        errors.password = "Please enter a valid password";
    }

    return errors;
};