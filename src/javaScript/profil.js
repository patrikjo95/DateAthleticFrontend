let dropdownUl = document.querySelector(".dropdown-ul");
let btn = document.querySelector(".profil-btn");

let token = localStorage.getItem("token")
console.log(token);



const toggle = () => dropdownUl.classList.toggle("active");

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) dropdownUl.classList.remove("active");
});


function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

const name = document.getElementById("name")
const username = document.getElementById("username")
const bio = document.getElementById("bio")
const profilePic = document.getElementById("profilePic")


fetch('http://localhost:8080/user/profile/', {
  headers:{
    'Authorization': 'Bearer ' + token,
  }
    })
      .then((response) => response.json())
      .then((data) => {
       var rawInfo = JSON.stringify(data)
       var info = JSON.parse(rawInfo)
       console.log(info);
       if(data.firstname){
        name.textContent = data.firstname
        username.textContent = data.username
        bio.textContent = data.bio  
        profilePic.src = "/" + info.imagePath[0]    
       }   
      })