const jokeContnt = document.querySelector(".jokeContent");
const btn = document.querySelector(".btn");
const hearBtn = document.querySelector("#hearBtn");

const getData = (jokeContent) => {
    jokeContnt.innerHTML = jokeContent;
}

const generateJoke = async () => {
    const URL = "https://hindi-jokes-api.onrender.com/jokes?api_key=a7ac4a98b86ebf43296138eacab2"
    const response = await fetch(URL);
    const data = await response.json();
    getData(data.jokeContent);
};

btn.addEventListener("click", generateJoke);

const hearJoke = () => {
    const joke = jokeContnt.textContent;
    const speech = new SpeechSynthesisUtterance(joke);
    speech.lang = 'hi-IN';
    window.speechSynthesis.speak(speech);
}

hearBtn.addEventListener("click", hearJoke);

generateJoke();