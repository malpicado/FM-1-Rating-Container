const button = document.querySelector("#button");
const options = document.querySelectorAll('input[name="score"]');

button.addEventListener("click", mostrarCardGracias)

function mostrarCardGracias () {
    document.querySelector(".card-thanks").style.display = "flex";
    document.querySelector("#main-container").style.display = "none";
    
    let selectedOption;

    for (const option of options) {
        if(option.checked){
            selectedOption = option.value;
            break;
        }
    }
rank.innerText = selectedOption ? `You selected ${selectedOption} out of 5` : `You haven't selected`;
}
