const haveValidEmail = (email) => { const regex = /\S+@\S+\.\S+/; return regex.test(email); };

export default haveValidEmail;

// Reference Source - stackoverflow
// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
