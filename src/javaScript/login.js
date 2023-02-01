const form = document.getElementById("loginid")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginDTO = {
      username: document.getElementById("usn").value,
      password: document.getElementById("psw").value
    };
    
    fetch("http://localhost:8080/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginDTO),
      })
      .then((response) => {
        if (!response.ok) {
            alert("Felaktiga inloggningsuppgifter!")
          throw new Error("Bad credentails");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data)
        window.location.href = "../html/min-profil.html";
      })
      .catch((error) => {
        console.log(error);
      });

  })

  //Vi ska sedan redirecta till en profil sida i package namnet 'inloggad'