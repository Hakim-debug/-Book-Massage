// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD8X5-tO3DvwWq9iEFyAWPZGj_z6WSXS1M",
    authDomain: "massageform-86827.firebaseapp.com",
    databaseURL: "https://massageform-86827.firebaseio.com",
    projectId: "massageform-86827",
    storageBucket: "massageform-86827.appspot.com",
    messagingSenderId: "501374351677",
    appId: "1:501374351677:web:d476298770a9ecd421ed54",
    measurementId: "G-ZKHW22WCWD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database().ref('messages').set;


/* skicka funtionen */
document.getElementById('contactForm').addEventListener('submit', submitForm);

/* Sumbit form */
function submitForm(e) {
    e.preventDefault();

    console.table(127);

    /* Alla värden */
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    console.log(name);
    /* Spara medellandet */
    saveMassage(name, company, email, phone, message);

}


/* Futionen som tar värdet ifrån contactForm till Firebase */

function getInputVal(id) {

    return document.getElementById(id).value;


}

/* Spara meddelande till firebase */

function saveMassage(name, company, email, phone, message) {

    let newMassageRef = massagesRef.push();
    /* Sätter in datta i objetet till firebase */
    newMassageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message



    });


}