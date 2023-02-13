const form = document.getElementById("loginid")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginDTO = {
      username: document.getElementById("usn").value,
      password: document.getElementById("psw").value
    };
    
    fetch("http://127.0.0.1:8080/login/", {
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
  })