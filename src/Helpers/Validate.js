

validateField(fieldName, value) {

    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let fullnameValid = this.state.fullnameValid;
    let jobValid = this.state.jobValid;

    switch (fieldName) {
        case "email":
            emailValid = value.match(/([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? "" : " is invalid (e.g. mail@example.com)";
            break;
        case "fullname":
            fullnameValid = value.match(/([\D])$/i) && value.length >= 2;
            fieldValidationErrors.fullname = fullnameValid ? "" : " does not contain numbers and must be longer than 2 characters";
            break;
        case "job":
            jobValid = value.match(/([\D])$/i) && value.length >= 3;
            fieldValidationErrors.job = jobValid ? "" : " does not contain numbers and must be longer than 3 characters";
            break;
        default:
            break;
    }
    this.setState(
        {
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            fullnameValid: fullnameValid,
            jobValid: jobValid
        },
        this.validateForm
    );
}

validateForm() {
    this.setState(
        {
            formValid: this.state.emailValid && this.state.fullnameValid && this.state.jobValid
        }
    );
}
