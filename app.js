const btn = document.querySelector("button");
const quote = document.querySelector("q");
const id = document.querySelector("span");

async function generateQuote() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    quote.textContent = data.slip.advice;
    id.textContent = data.slip.id;
  } catch {
    quote.innerText = "Something went wrong";
  }
}
generateQuote();
btn.addEventListener("click", generateQuote);
