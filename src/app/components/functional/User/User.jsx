export const User = ({ formData, userData }) => {
    console.log("Form data:", formData);
    console.log("User data:", userData);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const formEmail = formData.email;
            if(formEmail=== userData.email) {
                resolve({
                    formEmail
                    
                });
               
              
                
            }   
            else {
                reject("Login failed");
                alert("Login failed");
            }
        }, 2000);

    })};