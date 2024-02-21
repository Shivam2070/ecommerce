const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-list');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         document.getElementById("login-popup").style.display = "block";
//     }, 5000); // 5000 milliseconds = 5 seconds

//     document.getElementById("close-popup").addEventListener("click", function () {
//         document.getElementById("login-popup").style.display = "none";
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    // Define variables
    var loginPopup = document.getElementById("login-popup");
    var closeButton = document.getElementById("close-popup");

    // Show the login pop-up after 5 seconds
    setTimeout(function () {
        loginPopup.style.display = "block";
    }, 5000);

    // Close the login pop-up when the close button is clicked
    closeButton.addEventListener("click", function () {
        loginPopup.style.display = "none";
    });
});
