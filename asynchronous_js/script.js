'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
    const html = `

        <article class="country ${className}">   
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
                <p class="country__row"><span>💰</span>${Object.keys(data.currencies).join(', ')}</p>
            </div>
        </article>
        `;
        
        countriesContainer.insertAdjacentHTML('beforeend', html);
        // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}


///////////////////////////////////////
// const getCountryAndNeighbor = function (country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);
        
//         // Get neighbor country (2nd request) 
//         const neighbor = data.borders?.[0];

//         if (!neighbor) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const [data2] = JSON.parse(this.responseText);
//             renderCountry(data2, 'neighbor');
//         });
//     });
// };

// // getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');




const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            renderCountry(data[0]);
            const neighbor = data[0].borders[0];

            if (!neighbor) return;

            return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
        })
        .then(response => response.json())
        .then(data => renderCountry(data[0], 'neighbor'))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', function () {
    getCountryData('portugal');
});