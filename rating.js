const ratingForm = document.querySelector("#ratingForm");
const thankYouPage = document.querySelector("#thankYouPage");
const selectedRating = document.querySelector("#selectedRating");
const ratingCard = document.querySelector("#rating-card");

//escuchar el evento para el botón "submit"
ratingForm.addEventListener("submit", (event) =>{
    event.preventDefault()

   const selectedOption = document.querySelector(`input[name="rating"]:checked`);
   const ratingValue = selectedOption.value;
   selectedRating.innerHTML = ratingValue;
   
   //ocultar la card de calificación
   ratingCard.style.display = "none";

   //mostar la pagina de "gracias"
    thankYouPage.style.display = "block";
})
