/**
   * 
   * @param {number} step 
   * @param {stateObject} formData 
   * @param {stateFunction} setErrors 
   * @returns boolean
   * @description Ensures that all of the inputs are valid and have no errors. If there are errors, then the user will not be able to move onto the next step and will be displayed the error. 
   */
  export const validateForm = (step, formData, setErrors) => {
    let valid = true;
    let newErrors = {};

  if (step === 1) {
    // Email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'invalid';
      valid = false;
    }
  
    // Password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'lengthError';
      valid = false;
    }
  
    // Confirm Pasword
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmation is required';
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'noMatch';
      valid = false;
    }
  }

  if (step === 2) { 
    // First Name
    if (!formData.firstName) {
        newErrors.firstName = 'Name is required';
        valid = false;
    }
    
    // Last Name
    if (!formData.lastName) {
        newErrors.lastName = 'Name is required';
        valid = false;
    }
    
    // Phone Number
    if (!formData.phoneNum) {
      newErrors.phoneNum = 'Phone number is required';
      valid = false;
    } else {
      const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      if (!phoneRegex.test(formData.phoneNum)) {
        newErrors.phoneNum = 'invalid'
        valid = false;
      }
    }

    // Address
    if (!formData.address) {
      newErrors.address = 'Address is required';
      valid = false;
    }
    
    // City
    if (!formData.city) {
      newErrors.city = 'City is required';
      valid = false;
    }

    // State
    if (!formData.state) {
      newErrors.state = 'State is required';
      valid = false;
    }

    // Zip Code
    if (!formData.zipCode) {
      newErrors.zipCode = 'Zip is required';
      valid = false;
    } else {
      const zipCodeRegex = /^\d{5}(-\d{4})?$/;
      if (!zipCodeRegex.test(formData.zipCode)) {
        newErrors.zipCode = 'invalid';
        valid = false;
      }
    }

    // Selected Option (Are you Black?)
    if (!formData.selectedOption) {
      newErrors.selectedOption = 'Choice is required';
      valid = false;
    }
  }

  if (step === 3) {
    // Occupation
    if (!formData.occupation) {
      newErrors.occupation = 'Occupation is required';
      valid = false;
    }

    // Date of Birth
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
      valid = false;
    }
  }

    setErrors(newErrors);
    return valid;
}
  
/**
   * 
   * @param {string} inputName
   * @description Clears the errors for whatever input name is passed in.
   */
  export const clearError = (inputName, errors, setErrors) => {
    let currentErrors = {...errors};
    
    if (inputName === 'email') {
      // deletes email from the shallow copy of state (currentErrors)
      const { email, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'password') {
      // deletes password from the shallow copy of state (currentErrors)
      const { password, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'confirmPassword') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { confirmPassword, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'firstName') {
      // deletes email from the shallow copy of state (currentErrors)
      const { firstName, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'lastName') {
      // deletes password from the shallow copy of state (currentErrors)
      const { lastName, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'phoneNum') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { phoneNum, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'address') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { address, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'address2') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { address2, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'city') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { city, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'state') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { state, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'zipCode') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { zipCode, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'selectedOption') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { selectedOption, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'occupation') {
      // deletes email from the shallow copy of state (currentErrors)
      const { occupation, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'dateOfBirth') {
      // deletes password from the shallow copy of state (currentErrors)
      const { dateOfBirth, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'bio') {
      // deletes password from the shallow copy of state (currentErrors)
      const { bio, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
  }