const loginBox = document.getElementById("loginBox");
const loginIcon = document.getElementById("loginIcon");
const closeBtn = document.getElementById("closeBtn");
const closePet = document.getElementById("closeBtnPet");
const card = document.querySelectorAll(".card").length;
const displayPet = document.getElementById("displayPet");

function scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

loginIcon.addEventListener("click", function(){
    loginBox.classList.remove("hide");
});

closeBtn.addEventListener("click", function(){
    loginBox.classList.add("hide");
});

for (let i = 0; i < card; i++) {

    // Pega a imagem do card
    document.querySelectorAll(".card")[i].addEventListener("click", function(){

        window.scroll({top: 0, left: 0, behavior: 'smooth'});
        displayPet.classList.remove("hide");
 
        var displayImg = this.querySelectorAll("img")[0].src;
        var displayName = this.querySelectorAll("h3")[0].innerText;


    // Coloca a imagem no display
        document.getElementById("fotoPet").setAttribute("src", displayImg);
        document.getElementById("nomePet").innerText = displayName;
    });

};

closePet.addEventListener("click", function(){
    displayPet.classList.add("hide");
})