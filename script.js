document.querySelector(".record").addEventListener("click", function() {
    let countries = ["Japan", "Brazil", "France", "USA", "India"];
    let randomCountry = countries[Math.floor(Math.random() * countries.length)];
    document.querySelector(".label").innerText = randomCountry;
});
