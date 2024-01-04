const getData = async () => {
  try {
  const response = await fetch('./advices.json');
  if (!response.ok) {
    throw new Error(`Erreur lors de la récupération du fichier JSON : ${response.status}`);
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Erreur :', error);
}

}


const adviceNumber = document.querySelector("#advice-number");
const adviceText = document.querySelector("#advice-text");
const authorName = document.querySelector("#author-name");
const nextAdviceBtn = document.querySelector(".next-advice-btn");


async function displayAdvice() {
  try {
    const advices = await getData();
    const randomIndice = Math.floor(Math.random() * advices.length);
    adviceNumber.innerText = `${advices[randomIndice].id}`;
    adviceText.innerText = `${advices[randomIndice].description}`;
    authorName.innerText = `${advices[randomIndice].author}`;
  } catch (error) {
    console.error('Erreur lors de l\'affichage des conseils :', error);
  }
}

displayAdvice();

nextAdviceBtn.addEventListener("click", displayAdvice);
