document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email"); 
    const mobileInput = document.getElementById("mobile");

    form.addEventListener("submit", function (event) {       
    const errors = []; 

     // Validation for email (must be a valid email format)       
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;        
      if (!emailRegex.test(emailInput.value)) {           
         errors.push("Please enter a valid email address."); 
      }
     
        // If there are any validation errors, display them to the user
        if (errors.length > 0) {
            event.preventDefault();
            alert(`${errors}`);
            }
            
    });
    });