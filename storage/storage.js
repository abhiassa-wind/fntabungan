var userProfileImage = document.getElementById('userProfileImage');
var nameUser = document.getElementById('nameUser');
var emailUser = document.getElementById('emailUser');

var userImage = localStorage.getItem('userPhoto');
var userName = localStorage.getItem('userName');
var userEmail = localStorage.getItem('userEmail');

if (userName && userEmail) {
    nameUser.innerText = userName;
    emailUser.innerText = userEmail;

   
    if (userImage) {
        userProfileImage.src = userImage;
    } else {
        userProfileImage.src = '';   
    }

} else {
    nameUser.innerText = 'Hi User';
    emailUser.innerText = 'Menabung pangkal kaya';
};