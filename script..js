document.getElementById("jokeBtn").addEventListener("click", getJoke);
async function getJoke() {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = "Loading joke..";
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokeElement.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    console.error("Error fetching joke:", error);
    jokeElement.textContent = "Oops! Couldn't fetch a joke right now.";
  }
}

