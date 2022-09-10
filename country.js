let country = document.getElementById("country");
let submit = document.getElementById("submit");
let app = document.querySelector(".app");
app.style.display = "none";
async function get() {
    let name = document.getElementById("name");
    let img = document.getElementById("img");
    let capital = document.getElementById("capital");
    let continent = document.getElementById("continent");
    let population = document.getElementById("population");
    let msg = document.getElementById("msg");
    const response = await fetch(`https://restcountries.com/v3.1/name/${country.value.trim()}?fullText=true`);
    const data = await response.json();
    if (data.length > 0 && country.value.trim().toString().toLowerCase()!= "israel") {
        if (country.value.trim().toString().toLowerCase() == "palestine") {
            name.innerHTML = data[0].name.common;
            img.src = data[0].flags.png;
            img.alt = data[0].name.common;
            capital.innerHTML = "Jerusalem";
            continent.innerHTML = data[0].continents;
            population.innerHTML = data[0].population;
            msg.innerHTML = "";
        } else {
            name.innerHTML = data[0].name.common;
            img.src = data[0].flags.png;
            img.alt = data[0].name.common;
            capital.innerHTML = data[0].capital;
            continent.innerHTML = data[0].continents;
            population.innerHTML = data[0].population;
            msg.innerHTML = "";
        }
    } else {
        app.style.display = "none";
        msg.innerHTML = "Not found check that you write in english or you write an exist country";
    }
}
submit.onclick = () => {
    app.style.display = "block";
    get();
};
