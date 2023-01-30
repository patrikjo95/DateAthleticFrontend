

 async function createUser (){


    const data = {
        firstname: document.getElementById("förnamn").value,
        lastname: document.getElementById("efternamn").value,
        username: document.getElementById("användarnamn").value,
        email: document.getElementById("email").value,
        password: document.getElementById("lösenord2").value,
        city: document.getElementById("stad").value,
       /*'DoB': null,
                 year: document.getElementById('år').value,
                 month: document.getElementById('månad').value,
                 day: document.getElementById('dag').value
        },*!/
        'gender': null,
                              man: document.getElementById('name'),
                              kvinna: document.getElementById('kvinna'),
                              anpassat: { pronomen: document.getElementsByName("pronomen").values,
                                          valfritt: document.getElementsByClassName('first').item(0)
                              }.pronomen(),

        },*/
       /* 'interests': document.getElementById('formTvå').value,*/
        /*  'genderPreferences': null, {
               men: document.getElementById('valMän'),
               women: document.getElementById('valKvinnor'),
               other: document.getElementById('valÖvrigt'),
           }.men.women.other.values,*/

        'bio': document.getElementById('myTextarea').value


    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = "http://localhost:8080/api/v1/user/register/";


     const createUserRequest = new Request (url, {
         method: 'POST',
         redirect: 'follow',
         body: JSON.stringify(data),
         headers: headers,
         cache: "default"

     });

     console.log(createUserRequest);

    await fetch(createUserRequest)
         .then(response => response.json())
         .then(response => console.log(response))
         .catch((error) => console.error('Error ', error)
         )

eraseText();

}

 function eraseText() {
     document.getElementById("förnamn").value = "";
     document.getElementById("efternamn").value = "";
     document.getElementById("användarnamn").value = "";
     document.getElementById("email").value = "";
     document.getElementById("lösenord2").value = "";
     document.getElementById("stad").value = "";
     document.getElementById('myTextarea').value ="";
 }

