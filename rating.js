const ratingForm = document.querySelector("#ratingForm");
const thankYouPage = document.querySelector("#thankYouPage");
const selectedRating = document.querySelector("#selectedRating");
const ratingCard = document.querySelector("#rating-card");

//escuchar el evento para el botón "submit"
ratingForm.addEventListener("submit", (event) =>{
    event.preventDefault()

    const selectedOption = event.target.elements?.rating?.value || 0
    const ratingValue = selectedOption;
    selectedRating.innerHTML = ratingValue;
    
   //ocultar la card de calificación
    ratingCard.style.display = "none";

   //mostar la pagina de "gracias"
    thankYouPage.style.display = "block";
})
