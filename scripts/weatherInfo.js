const town = document.querySelector('#town');
const temperature = document.querySelector('#temperature');
const icon = document.querySelector('#tempIcon');
const description = document.querySelector('#tempDescription');
const api = `8c29bc14e5193a605c5a2d1af205e2aa`;
const my_Lat = '4.97497';
const my_Lon = '8.31618';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${my_Lat}&lon=${my_Lon}&units=metric&appid=${api}`;

async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(response.text());
        }
    } catch (error) {

    }
}

function displayResults(data) {
    const iconImg = document.createElement('img');
    town.textContent = `${data.name}, ${data.sys.country}`;
    temperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    iconImg.setAttribute('src', iconsrc);
    iconImg.setAttribute('alt', desc);
    icon.appendChild(iconImg);
    description.textContent = desc;

}

getData(url);