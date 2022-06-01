// Get the Joke from the API
async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
        Accept: "application/json",
    },
    });
    const data = response.json();
    return data;
}

// Write the joke to the joke container
async function writeJoke() {
    let {joke} = await fetchJoke();
    let jokeContainer = document.getElementById("joke");
    jokeContainer.textContent = joke; 
}

// Save joke to object
function saveJoke() {
    let jokeText = document.getElementById('joke').textContent;
    let reviewText = document.getElementById('review').value;
    reviewedJoke = {
        joke: jokeText,
        review: reviewText,
    }
    document.getElementById('review').value = '';
    list.push(reviewedJoke);
    return reviewedJoke;
}

// Adds joke to article below.
function writeJokeBelow(joke) {
    article = document.createElement('article');
    header = document.createElement('h3');
    p = document.createElement('p');
    
    header.textContent = joke.joke;
    p.textContent = joke.review;

    article.appendChild(header);
    article.appendChild(p);
    document.getElementById('storedReviews').appendChild(article);
}

// Save to local storage.
function toLocal() {
    localStorage.setItem('jokes', JSON.stringify(list));
}

// Load from local storage
function fromLocal() {
    return JSON.parse(localStorage.getItem('jokes'));
}

// Save the current joke to the webpage and local storage, then write a new joke to be reviewed.
async function newJoke() {
    joke = saveJoke();
    writeJokeBelow(joke);
    toLocal();
    await writeJoke();
}

// When the webpage is loaded, this is the first thing we are going to do.
try {
    var list = fromLocal();
    list.forEach(writeJokeBelow);
}
catch (exception_var) {
    var list = []
}
writeJoke();
document.getElementById("newJoke").addEventListener("click", newJoke);




