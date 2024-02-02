function showabout() {
    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideInLeft");
    }, 800);
}
function closeabout() {
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display", "none");
    }, 800);
}
function showwork() {
    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideInRight");
    }, 800);
}
function closework() {
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display", "none");
    }, 800);
}
function showcontact() {
    $("#contact_container").css("display", "inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideInUp");
    }, 800);
}
function closecontact() {
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display", "none");
    }, 800);
}
//create a function that when the contact with id sendEmail button it will create an email taking the text from the three fields and send it to my email use window.open to open an email app auto fil in the body field with the id of message
var emailButton = document.getElementById("sendEmail");
emailButton.addEventListener("click", sendEmail);
function sendEmail() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailBody = "Name: " + name + "%0D%0A" + "Message: " + message;
    window.open("mailto:suchirp14@gmail.com?subject=Portfolio%20Email&body=" + emailBody, "_self");
}


var button = document.getElementById("ChaChing");
var buttonAPT = document.getElementById("aptBTN");
var buttonClicked = false;
button.addEventListener("click", changeText);
function changeText() {
    if (!buttonClicked) {
        var element = document.getElementById("text-element");
        element.classList.add("animate__animated", "animate__bounceOut");
        setTimeout(function () {
            element.innerHTML = "Cha-Ching is a crypto hub app that offers an all-in-one platform for crypto enthusiasts. The app includes features such as live coin prices, historical graphs, real-time news updates, and the ability to save favorite coins. It utilizes APIs from CoinMarketCap and CryptoCompare and technologies such as Volley, Fragments, Glide, Material, JJoe64 GraphView and Picasso to deliver an seamless user experience. It allows users to search for specific coins, read recent crypto-related news, and view the 30-day historical data of a coin. It is built with android studio.";
            element.classList.remove("animate__animated", "animate__bounceOut");
            element.classList.add("animate__animated", "animate__bounceIn");
        }, 1000);

        var elementz = document.getElementById("title-element");
        elementz.classList.add("animate__animated", "animate__bounceOut");
        setTimeout(function () {
            elementz.innerHTML = "Cha-Ching";
            elementz.classList.remove("animate__animated", "animate__bounceOut");
            elementz.classList.add("animate__animated", "animate__bounceIn");
        }, 1000);

        var icon1 = document.getElementById("icon1");
        setTimeout(function () {
            icon1.innerHTML = "<i class='fas fa-circle'></i>" + "&nbsp;Android Studio";
        }, 1000);
        var icon2 = document.getElementById("icon2");
        setTimeout(function () {
            icon2.innerHTML = "<i class='fas fa-circle'></i>" + " Java";
        }, 1000);
        var icon3 = document.getElementById("icon3");
        setTimeout(function () {
            icon3.innerHTML = "<i class='fas fa-circle'></i>" + "&nbsp;XML";
        }, 1000);

        var icon4 = document.getElementById("icon4");
        setTimeout(function () {
            icon4.innerHTML = "<i class='fas fa-circle'></i>" + "&nbsp;APIs";
        }, 1000);

        var icon5 = document.getElementById("icon5");
        setTimeout(function () {
            icon5.innerHTML = "<i class='fas fa-circle'></i>" + "&nbsp;Python";
        }, 1000);
        buttonClicked = true;
        ifButtonClickedTwo = false;
        ifButtonClickedThree = false;

        //change the background color of the button to white and the text color to color:rgb(255, 50, 50); and set padding padding:8px 40px;
        button.style.backgroundColor = "white";
        button.style.color = "rgb(255, 50, 50)";
        //change the backgroiund color of the Apt button to  background:transparent; and white text color
        buttonAPT.style.backgroundColor = "transparent";
        buttonAPT.style.color = "white";
        buttonthree.style.backgroundColor = "transparent";
        buttonthree.style.color = "white";



    }

}

var ifButtonClickedTwo = true;
buttonAPT.addEventListener("click", changeTextTwo);
function changeTextTwo() {
    if (!ifButtonClickedTwo) {
        var element = document.getElementById("text-element");
        element.classList.add("animate__animated", "animate__bounceOut");
        setTimeout(function () {
            element.innerHTML = "As a college student using the well-known university website Canvas, I noticed several accessibility and usability issues. To address these concerns for myself and fellow students, I initiated a personal project called CanvasCraft. I've already introduced useful features, such as Dark Mode, a Custom Online File Viewer, and a Google OAuth 2.0 integration with the Google Calendar API for importing Canvas assignments. Looking ahead, I intend to enhance Canvas notifications by implementing Firebase Cloud Messaging, ensuring I never miss another assignment."
            element.classList.remove("animate__animated", "animate__bounceOut");
            element.classList.add("animate__animated", "animate__bounceIn");
        }, 1000);
        var elementz = document.getElementById("title-element");
        elementz.classList.add("animate__animated", "animate__bounceOut");
        setTimeout(function () {
            elementz.innerHTML = "CanvasCraft";
            elementz.classList.remove("animate__animated", "animate__bounceOut");
            elementz.classList.add("animate__animated", "animate__bounceIn");
        }, 1000);

        var icon1 = document.getElementById("icon1");
        setTimeout(function () {
            icon1.innerHTML = "<i class='fas fa-circle'></i>" + "&nbsp;HTML5";
        }, 1000);
        var icon2 = document.getElementById("icon2");
        setTimeout(function () {
            icon2.innerHTML = "<i class='fas fa-circle'></i>" + " CSS3";
        }, 1000);
        var icon3 = document.getElementById("icon3");

        setTimeout(function () {
            icon3.innerHTML = "<i class='fas fa-circle'></i>" + " Javascript";
        }, 1000);

        var icon4 = document.getElementById("icon4");
        setTimeout(function () {
            icon4.innerHTML = "<i class='fas fa-circle'></i>" + " Python";
        }, 1000);

        var icon5 = document.getElementById("icon5");
        setTimeout(function () {
            icon5.innerHTML = "<i class='fas fa-circle'></i>" + " Google Cloud";
        }, 1000);
        ifButtonClickedTwo = true;
        buttonClicked = false;
        ifButtonClickedThree = false;
        buttonAPT.style.backgroundColor = "white";
        buttonAPT.style.color = "rgb(255, 50, 50)";
        //change the backgroiund color of the Apt button to  background:transparent; and white text color
        button.style.backgroundColor = "transparent";
        buttonthree.style.backgroundColor = "transparent";
        buttonthree.style.color = "white";
        button.style.color = "white";



    }
}

var buttonthree = document.getElementById("ScarletRider");
var ifButtonClickedThree = true;
buttonthree.addEventListener("click", changeTextThree);
function changeTextThree() {
    if (!ifButtonClickedThree) {
        var element = document.getElementById("text-element");
        element.classList.add("animate__animated", "animate__bounceOut");
        setTimeout(function () {
            element.innerHTML = "Recognizing the inefficiency of the existing Rutgers app for bus information, I sought a more convenient solution and decided to experiment with new technology by creating an Alexa skill. Built using the Alexa Developer Console, the skill currently retrieves bus ETA times from a custom API developed by Piemadd, with plans to implement additional features. Furthermore, I am working towards integrating AWS serverless architecture to enhance scalability and potentially extend the skill's use to multiple college campuses."
            element.classList.remove("animate__animated", "animate__bounceOut");
            element.classList.add("animate__animated", "animate__bounceIn");
        }, 1000);
        var elementz = document.getElementById("title-element");
        elementz.classList.add("animate__animated", "animate__bounceOut");
        setTimeout(function () {
            elementz.innerHTML = "ScarletRider";
            elementz.classList.remove("animate__animated", "animate__bounceOut");
            elementz.classList.add("animate__animated", "animate__bounceIn");
        }, 1000);

        var icon1 = document.getElementById("icon1");
        setTimeout(function () {
            icon1.innerHTML = "<i class='fas fa-circle'></i>" + "Javacscript";
        }, 1000);
        var icon2 = document.getElementById("icon2");
        setTimeout(function () {
            icon2.innerHTML = "<i class='fas fa-circle'></i>" + " AWS";
        }, 1000);
        var icon3 = document.getElementById("icon3");

        setTimeout(function () {
            icon3.innerHTML = "<i class='fas fa-circle'></i>" + " Alexa Developer Console";
        }, 1000);

        //hide other two icons so they dont show up
        var icon4 = document.getElementById("icon4");
        setTimeout(function () {
            icon4.innerHTML = "<i class='fas fa-circle'></i>" + " RESTful API";
        }, 1000);

        var icon5 = document.getElementById("icon5");
        setTimeout(function () {
            icon5.innerHTML = "<i class='fas fa-circle'></i>" + " Python";
        }, 1000);




        ifButtonClickedThree = true;
        buttonClicked = false;
        ifButtonClickedTwo = false;
        buttonthree.style.backgroundColor = "white";
        buttonthree.style.color = "rgb(255, 50, 50)";

        button.style.backgroundColor = "transparent";
        button.style.color = "white";
        buttonAPT.style.backgroundColor = "transparent";
        buttonAPT.style.color = "white";



    }
}


setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
        $("#box").css("display", "none");
        $("#about").removeClass("animated fadeIn");
        $("#contact").removeClass("animated fadeIn");
        $("#work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);

