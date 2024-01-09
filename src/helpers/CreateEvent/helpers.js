/**
   * 
   * @param {stateObject} formData 
   * @param {stateFunction} setErrors 
   * @returns boolean
   * @description Ensures that all of the inputs are valid and have no errors. If there are errors, then the user will not be able to move onto the next step and will be displayed the error. 
   */
  export const validateForm = (formData, setErrors) => {
    let valid = true;
    let newErrors = {};

    // Event Title
    if (!formData.eventTitle) {
        newErrors.eventTitle = 'Event title is required';
        valid = false;
    }
    
    // Date
    if (!formData.date) {
        newErrors.date = 'Date is required';
        valid = false;
    }
    
    // Start Time
    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required';
      valid = false;
    }

    // End Time
    if (!formData.endTime) {
      newErrors.endTime = 'End time is required';
      valid = false;
    }

    // location
    if (!formData.location) {
      newErrors.location = 'Location is required';
      valid = false;
    }
    
    // Capacity
    if (formData.capacity === 0) {
      newErrors.capacity = 'Capacity is required';
      valid = false;
    }

    // Description
    if (!formData.description) {
      newErrors.description = 'Description is required';
      valid = false;
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
    
    if (inputName === 'eventTitle') {
      // deletes email from the shallow copy of state (currentErrors)
      const { eventTitle, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'date') {
      // deletes password from the shallow copy of state (currentErrors)
      const { date, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'startTime') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { startTime, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'endTime') {
      // deletes email from the shallow copy of state (currentErrors)
      const { endTime, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'location') {
      // deletes password from the shallow copy of state (currentErrors)
      const { location, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'capacity') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { capacity, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
    if (inputName === 'description') {
      // deletes passwordConfirm from the shallow copy of state (currentErrors)
      const { description, ...updatedErrors } = currentErrors;
      setErrors(updatedErrors);
    }
}
