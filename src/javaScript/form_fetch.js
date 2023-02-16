

let url1 = ""
let url2 = ""
let url3 = ""
let url4 = ""
let url5 = ""

 async function createUser () {
     const image = document.querySelector("#containerBild > :first-child img").src;
     let container = document.getElementById("containerBild");
     let children = container.children;
     let urlCounter = 1;
     for (let i = 1; i < children.length; i++) {
         let child = children[i].querySelector("img");
         if (child != null) {
             let src = child.src;
             switch (urlCounter) {
                 case 1:
                     url1 = src;
                     break;
                 case 2:
                     url2 = src;
                     break;
                 case 3:
                     url3 = src;
                     break;
                 case 4:
                     url4 = src;
                     break;
                 case 5:
                     url5 = src;
                     break;
             }
             urlCounter++;

         }
     }

     let genus = document.querySelector('input[name="kön"]:checked').value

     if (genus === "ANPASSAT"){
         genus += "| " + document.getElementById("selectKön").value + "| " + document.getElementById("textKön").value;
     }


         let resSports = "";
         let resPronomen = "";
         let checkboxes = document.getElementsByClassName('sportCheck');


         for (let i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].checked) {
                 let idTo = checkboxes[i].id + "rangeValue";
                 idTo = idTo[0].toUpperCase() + idTo.slice(1);
                 let check = document.getElementById(idTo).textContent;
                 resSports += " | " + checkboxes[i].value + " " + check;
             }
         }

         let pronomen = document.getElementsByClassName('pronomen');

         for (let i = 0; i < pronomen.length; i++) {
             if (pronomen[i].checked) {
                 resPronomen += " | " + pronomen[i].value;
             }
         }


         const data = {


             username: document.getElementById("användarnamn").value,
             email: document.getElementById("email").value,
             password: document.getElementById("lösenord2").value,
             firstname: document.getElementById("förnamn").value,
             lastname: document.getElementById("efternamn").value,
             doB:
                 document.getElementById('år').value + '-' +
                 document.getElementById('månad').value + '-' +
                 document.getElementById('dag').value,

             city: document.getElementById("stad").value,
             bio: document.getElementById('myTextarea').value,
             interests: resSports,


             gender: genus,
             genderPreference: resPronomen,

             imageUrlsDto: {
                 mainImg: image,
                 url1: url1,
                 url2: url2,
                 url3: url3,
                 url4: url4,
                 url5: url5
             }


         }

         const headers = new Headers();
         headers.append('Content-Type', 'application/json');

         const url = "http://localhost:8080/register/";


         const createUserRequest = new Request(url, {
             method: 'POST',
             redirect: 'follow',
             body: JSON.stringify(data),
             headers: headers,
             cache: "default",
         });


         await fetch(createUserRequest)
             .then((response) => {
                 if (!response.ok) {
                     alert("Det funkar inte")
                     throw new Error("error")
                 }
                 return response.json();
             })
             .then((response) => {
                 console.log(response)
             })

}

async function checkUserAndEmail(n){

    const data = {

        username: document.getElementById("användarnamn").value,
        email: document.getElementById("email").value

    }



 const url = "http://localhost:8080/check/";

const headers = new Headers();
headers.append("Content-Type", "application/json")

const checkForUserRequest = new Request(url, {
    method: "POST",
    redirect: "follow",
    body: JSON.stringify(data),
    headers: headers,
    cache: "default"
});

await fetch(checkForUserRequest)
    .then((response) => {
        if (response.status === 409) {
            // Om statuskoden är 409, visa meddelandet i svaret i en alert
            response.text().then((text) => {
                alert(text);
            });
            throw new Error(response.statusText);
        } else if (response.ok) {
            // Om statuskoden är OK, gå vidare till nästa steg
            nextStep(n);
        } else {
            // För alla andra statuskoder, visa meddelandet i svaret i en alert
            response.text().then((text) => {
                alert(text);
            });
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then((response) => {
        console.log(response);
    })}
