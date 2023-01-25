let setup = document.getElementById("setUp");
let punchlinebtn = document.getElementById("punchlineBtn");
let punchline = document.getElementsByClassName("punchline")[0];
let jokeImg =document.getElementById("joke-img");
let resetbtn = document.getElementById("resetBtn");
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
    resetbtn.style.display = 'block';
    // setTimeout(() => {
    //     resetPage(); If I am to use this codes, the page resets automatically,
    // }, 4000); after few seconds.
}

// The setup, punchline, with the empty string, &  joke with an empty object, tells the browser to return to an inactive state after the punchline has been read.
// let resetPage = () => { I will use these line of codes if I do not include the reset button to the app,
//     setup.innerHTML = "";  and wants the page the page to reset automatically.
//     punchlinebtn.style.display = "none";
//     punchline.innerHTML = "";
//     jokeImg.src = "https://thumbs.gfycat.com/BestGoodnaturedBlesbok-size_restricted.gif";
//     joke = {};
// }

const resetPage = () => {
    setup.innerHTML = "";
    punchlinebtn.style.display = "none";
    punchline.innerHTML = "";
    jokeImg.src = "https://thumbs.gfycat.com/BestGoodnaturedBlesbok-size_restricted.gif";
    joke = {};
    resetbtn.style.display = "none";
}

