

 async function createUser (){



     let resSports = "";
     let resPronomen = "";
     let checkboxes = document.getElementsByClassName('sportCheck');



     for (let i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
             let idTo = checkboxes[i].id + "rangeValue";
             idTo = idTo[0].toUpperCase() + idTo.slice(1);
             console.log(idTo);
             let check = document.getElementById(idTo).textContent;
             resSports += " | "+ checkboxes[i].value + " " + check;
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




        gender: document.querySelector('input[name="kön"]:checked').value,
        genderPreference: resPronomen,

        /*mainImg: document.getElementById("1").src,*/


    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin','*');

    const url = "http://localhost:8080/register/";


     const createUserRequest = new Request (url, {
         method: 'POST',
         redirect: 'follow',
         body: JSON.stringify(data),
         headers: headers,
         cache: "default",
         mode: "no-cors"
     });
     console.log(createUserRequest);
     console.log("DATA:  " , data)

    await fetch(createUserRequest)
         .then((response) => {
             if(!response.ok){
                 alert("Det går icke")
                 throw new Error("BAJSKORV")
             }
             return response.json();
         })
         .then((response) =>{
             console.log(response)
         })
         .catch((error) => {
             console.error('Error ', error);
         });


}

 
