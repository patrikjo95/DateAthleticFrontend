

 async function createUser (){

/*    let res;
     let checkboxes = document.getElementsByClassName('checkbox');
     for (let i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
             res += checkboxes[i].value
                 + ", ";
         }
     }*/

     let res = "";
     let int = 1;
     let checkboxes = document.getElementsByClassName('sportCheck');

     for (let i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
             res += int + ":"+ checkboxes[i].value + " ";
             int += 1;
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
        interests: res,




        gender: document.querySelector('input[name="kön"]:checked').value,
        genderPreference: "",


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

    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = "http://localhost:8080/register/";


     const createUserRequest = new Request (url, {
         method: 'POST',
         redirect: 'follow',
         body: JSON.stringify(data),
         headers: headers,
         cache: "default"
     });
     console.log(createUserRequest);
     console.log("DATA:  " , data)

    await fetch(createUserRequest)
         .then((response) => {
             if(!response.ok){
                 alert("FITTAAAAA")
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

