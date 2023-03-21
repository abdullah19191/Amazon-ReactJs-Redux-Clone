

const Validation = (value) => {
    let errors = {}
   
    if(!value.email){
     errors.email = "Please Enter Email"
     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
       errors.email = 'Invalid email address';
     }
     if(!value.password){
       errors.password = "Please Enter Password"
     }else if (value.password.length < 8) {
       errors.password = 'Password length must be atleast 8 characters';
     }else if (value.password.length > 15) {
       errors.password = 'Password length exceeds 15 characters';
     }
     return errors;
   };

   export default Validation;