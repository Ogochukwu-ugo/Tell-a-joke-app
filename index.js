let setup = document.getElementById("setUp");
let punchlinebtn = document.getElementById("punchlineBtn");
let punchline = document.getElementsByClassName("punchline")[0];
let jokeImg =document.getElementById("joke-img");
let joke = {};

const tellAJoke = () =>{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(
        data => (
            (setup.innerHTML = data.setup), (punchlinebtn.style.display = 'block'), joke = data
        )
    )
    
    .catch(err => console.log(err));
};

const tellPunchline = () => {
    punchline.innerHTML = joke.punchline;
    (jokeImg.src = "https://i.pinimg.com/originals/f0/05/39/f00539302feb966bfbf8530377d22bdb.png");
    setTimeout(() => {
        resetPage();
    }, 4000);
}

// The setup, punchline, with the empty string, &  joke with an empty object, tells the browser to return to an inactive state after the punchline has been read.
let resetPage = () => {
    setup.innerHTML = "";
    punchlinebtn.style.display = "none";
    punchline.innerHTML = "";
    jokeImg.src = "https://thumbs.gfycat.com/BestGoodnaturedBlesbok-size_restricted.gif";
    joke = {};
}

