

let darkModeValue = sessionStorage.getItem("darkMode");
let labels = document.querySelectorAll('.label');
let isDark = true;
let iframe = document.getElementsByTagName('iframe')[0];
/**
 Gör att man kan göra program till dark mode
 */
function darkMode(){

    if(isDark) {

        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.add("dark-mode");
        }

        document.body.classList.toggle('dark-mode');
        document.documentElement.style.setProperty('color', 'white');
        document.documentElement.style.setProperty('--background-color',  '#252323');

        if (document.querySelector('#reg') != null){
            document.querySelector('#reg').style.setProperty('filter', 'invert(1)');
        }

        if(document.getElementById("cards") != null){
            document.getElementById("cards").style.setProperty('--background-color',  '#252323')
        }

        if(document.getElementById("containerlogin") != null){
            document.getElementById("containerlogin").style.setProperty('--background-color',  'black')
        }

        if(document.getElementById("Date") != null){
        let dateElement = document.getElementById("Date");
        let textElements = document.getElementsByClassName("text");
        let navbarElement = document.querySelector(".navbar");
            dateElement.style.color = "whitesmoke";
            navbarElement.style.backgroundColor = "#252323";

        for (let i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "whitesmoke";
        }
        }


        
        if(document.getElementById("result") != null){
            let res = document.getElementById("result");

            let allLi = res.querySelectorAll('li');

            for(let i = 0; i < allLi.length; i++){
                allLi[i].style.backgroundColor = "#252323";
            }
        }
            
        dropDownUl(isDark);
        settings(isDark)


        document.documentElement.style.setProperty('--background-color', 'whitesmoke');

        sessionStorage.setItem("darkMode", "enabled");

    } 
    if(!isDark) {
        document.body.classList.remove('dark-mode');
        document.documentElement.style.setProperty('color', 'black');

        if (document.querySelector('#reg') != null){
        document.querySelector('#reg').style.setProperty('--background-color', 'whitesmoke');
        document.querySelector('#reg').style.removeProperty('filter', 'invert(1)');
        }

        if(document.getElementById("cards") != null){
            document.getElementById("cards").style.setProperty('--background-color',  'whitesmoke')
        }


        if(document.getElementById("containerlogin") != null){
            document.getElementById("containerlogin").style.setProperty('--background-color',  'whitesmoke')
        }

        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.remove("dark-mode");
        }

        sessionStorage.setItem("darkMode", "disabled");

        if(document.getElementById("Date") != null){
        let dateElement = document.getElementById("Date");
        let textElements = document.getElementsByClassName("text");
        let navbarElement = document.querySelector(".navbar");
            dateElement.style.color = "#252323";
        

            navbarElement.style.backgroundColor = "whitesmoke";

        for (var i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "#252323";
        }

        }


        if(document.getElementById("result") != null){
            let res = document.getElementById("result");

            let allLi = res.querySelectorAll('li');

            for(let i = 0; i < allLi.length; i++){
                allLi[i].style.backgroundColor = "whitesmoke";
            }
        }
        
        dropDownUl(isDark);
        settings(isDark)
        

        
        

    }
    isDark = !isDark;
    
}

window.addEventListener('popstate', function(event) {
    if (sessionStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add('dark-mode');
        document.documentElement.style.setProperty('color', 'white');
        document.documentElement.style.setProperty('--background-color',  '#252323');
        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.add("dark-mode");
        }
        isDark = true;
    }
})


$(document).ready(function(){
    if(darkModeValue === "enabled") {
        isDark = true;
        darkMode();
    }if(darkModeValue === "disabled"){
        isDark = false;
        darkMode();
    }
})



function dropDownUl(dark){
    if(dark){
        if(document.querySelector(".dropdown-ul") != null){

            let ulElement = document.querySelector(".dropdown-ul");
            let liElements = document.querySelectorAll(".dropdown-li");
            let iElements = document.querySelectorAll(".fa-solid, .fa-regular");
            let aElements = ulElement.getElementsByTagName("a");

            for (let i = 0; i < liElements.length; i++) {
                liElements[i].style.backgroundColor = "#252323";
                liElements[i].style.transition = "background-color 0.2s ease-in-out";
            }

            for (let i = 1; i < iElements.length; i++) {
                iElements[i].style.backgroundColor = "whitesmoke";
            }

            for (let i = 0; i < aElements.length; i++) {
                aElements[i].style.color = "whitesmoke";
            }

            for (let i = 0; i < liElements.length; i++) {
                liElements[i].addEventListener("mouseover", function() {
                liElements[i].style.backgroundColor = "#d25f0d";
                });
                liElements[i].addEventListener("mouseout", function() {
                liElements[i].style.backgroundColor = "#252323";
                });
            }
        }
    }
    else if(!dark){
        if(document.querySelector(".dropdown-ul") != null){

            let ulElement = document.querySelector(".dropdown-ul");
            let liElements = document.querySelectorAll(".dropdown-li");
            let iElements = document.querySelectorAll(".fa-solid, .fa-regular");
            let aElements = ulElement.getElementsByTagName("a");

            for (let i = 0; i < liElements.length; i++) {
                liElements[i].style.backgroundColor = "whitesmoke";
                liElements[i].style.transition = "background-color 0.2s ease-in-out";
            }

            for (let i = 1; i < iElements.length; i++) {
                iElements[i].style.backgroundColor = "#252323";
            }

            for (let i = 0; i < aElements.length; i++) {
                aElements[i].style.color = "#252323";
            }

            for (let i = 0; i < liElements.length; i++) {
                liElements[i].addEventListener("mouseover", function() {
                liElements[i].style.backgroundColor = "#d25f0d";
                });
                liElements[i].addEventListener("mouseout", function() {
                liElements[i].style.backgroundColor = "whitesmoke";
                });
            }
        }
    }
}


function settings(dark){
    if(dark){
        if (document.getElementById('settings')  != null){
            const elementsToInvert = document.querySelectorAll('.settings *:not(button):not(:hover):not(.modelcontent)');
            document.getElementById("settings").style.backgroundColor = "#252323";
            elementsToInvert.forEach((element) => {
            element.style.filter = 'invert(1)';
        });

        
            const elements = document.querySelectorAll("h4, label, input[type='text'], input[type='email'], textarea");

            elements.forEach((element) => {
                element.style.color = "whitesmoke"; 
            });
        }


        if (document.getElementsByClassName("grid-item") != null) {
        let gridItem = document.getElementsByClassName("grid-item");


            for(let i = 0; i < gridItem.length; i++){
                gridItem[i].onmouseover = function() {
                    if (!this.querySelector("input").checked){
                        this.querySelector("span").style.color = "orange";
                        this.querySelector("label").style.color = "orange";
                    }
                }

                gridItem[i].onmouseout = function() {
                    if (this.querySelector("input").checked) {
                        this.querySelector("span").style.color = "black";
                        this.querySelector("label").style.color = "black";
                    }
                    else{
                        this.querySelector("span").style.color = "white";
                        this.querySelector("label").style.color = "white";
                    }
                }
            }
        }
    }
    else if(!dark){
        if (document.getElementById('settings') != null){
            let elementsToInvert = document.querySelectorAll('.settings *:not(button):not(:hover):not(.modelcontent)');
            document.getElementById("settings").style.backgroundColor = "whitesmoke";
            elementsToInvert.forEach((element) => { 
            element.style.filter =  'none';
            });

            const elements = document.querySelectorAll("h4, label, input[type='text'], input[type='email'], textarea");

            elements.forEach((element) => {
                element.style.color = "#252323"; 
            });
        }

        if (document.getElementsByClassName("grid-item") != null){
            let gridItem = document.getElementsByClassName("grid-item");

            for(let i = 0; i < gridItem.length; i++){
                gridItem[i].onmouseover = function() {
                    if (!this.querySelector("input").checked){
                        this.querySelector("span").style.color = "orange";
                        this.querySelector("label").style.color = "orange";
                    }
                }

                gridItem[i].onmouseout = function() {
                    if (this.querySelector("input").checked) {
                        this.querySelector("span").style.color = "white";
                        this.querySelector("label").style.color = "white";
                    }
                    else{
                        this.querySelector("span").style.color = "black";
                        this.querySelector("label").style.color = "black";  
                    }
                }
            }
        }
        
    }
}
