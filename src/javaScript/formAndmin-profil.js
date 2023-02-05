const sports = [
    {
        id: "styrketräning",
        name: "Styrketräning",
        icon: "fitness_center"
    },
    {
        id: "löpning",
        name: "Löpning",
        icon: "sprint"
    },
    {
        id: "kampsport",
        name: "Kampsport",
        icon: "sports_martial_arts"
    }
    ,
    {
        id: "esport",
        name: "E-sport",
        icon: "sports_esports"
    },
    {
        id: "klättring",
        name: "Klättring",
        icon: "altitude"
    },
    {
        id: "basket",
        name: "Basket",
        icon: "sports_basketball"
    },

    {
        id: "racketsport",
        name: "Racketsport",
        icon: "sports_tennis"
    },
    {
        id: "golf",
        name: "Golf",
        icon: "golf_course"
    }
    ,
    {
        id: "fotboll",
        name: "Fotboll",
        icon: "sports_soccer"
    },
    {
        id: "dans",
        name: "Dans",
        icon: "emoji_people"
    }
    ,
    {
        id: "volleyboll",
        name: "Volleyboll",
        icon: "sports_volleyball"
    },
    {
        id: "hockey",
        name: "Hockey",
        icon: "sports_hockey"
    },
    {
        id: "simning",
        name: "Simning",
        icon: "pool"
    }
    ,
    {
        id: "cyklning",
        name: "Cyklning",
        icon: "directions_bike"
    },
    {
        id: "biljard",
        name: "Biljard",
        icon: "sports_bar"
    },
    {
        id: "skidåkning",
        name: "Skidåkning",
        icon: "downhill_skiing"
    },
    {
        id: "fiske",
        name: "Fiske",
        icon: "phishing"
    },
    {
        id: "vandring",
        name: "Vandring",
        icon: "hiking"
    },
    {
        id: "handboll",
        name: "Handboll",
        icon: "sports_handball"
    },
    {
        id: "skateboarding",
        name: "Skateboarding",
        icon: "skateboarding"
    }
    ,
    {
        id: "yoga",
        name: "Yoga",
        icon: "self_improvement"
    },
    {
        id: "segling",
        name: "Segling",
        icon: "sailing"
    },
    {
        id: "surfing",
        name: "Surfing",
        icon: "surfing"
    },
    {
        id: "snowboarding",
        name: "Snowboarding",
        icon: "snowboarding"
    }
    ,
    {
        id: "skridskor",
        name: "Skridskor",
        icon: "ice_skating"
    },
    {
        id: "kayak",
        name: "Kayak",
        icon: "kayaking"
    },
    {
        id: "brännboll",
        name: "Brännboll",
        icon: "sports_baseball"
    },
    {
        id: "rullskridskor",
        name: "Rullskridskor",
        icon: "roller_skating"
    }
];

window.onload = function() {
    let gridContainer = document.querySelector(".grid-container");

    for (let sport of sports) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.onclick = function(){
            document.getElementById(this.querySelector('input').id).checked = document.getElementById(this.querySelector('input').id).checked ? false : true;
            printCheckedSport(this.querySelector('input').id);
        };

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = sport.id;
        checkbox.classList.add("checkbox");
        checkbox.onclick = function (){
            document.getElementById(this.id).checked = document.getElementById(this.id).checked ? false : true;
        }

        let label = document.createElement("label");
        label.htmlFor = sport.id;
        label.innerText = " " + sport.name + " ";
        label.onclick = function(){
            document.getElementById(this.parentNode.querySelector('input').id).checked = document.getElementById(this.parentNode.querySelector('input').id).checked ? false : true;
            printCheckedSport(this.parentNode.querySelector('input').id);
        };


        let icon = document.createElement("span");
        icon.classList.add("material-symbols-outlined");
        icon.innerText = sport.icon;


        gridItem.appendChild(checkbox);
        gridItem.appendChild(label);
        gridItem.appendChild(icon);

        gridContainer.appendChild(gridItem);

        gridItem.onmouseover = function() {
            if (!this.querySelector("input").checked){
                this.querySelector("span").style.color = "orange";
                this.querySelector("label").style.color = "orange";
            }
        }

        gridItem.onmouseout = function() {
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