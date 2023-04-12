async function getResponse(cityName) {
   let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&language=en&count=10&format=json`);
   let content = await response.json();
   console.log(content);

   const ul = document.getElementById('resultList');
   ul.innerHTML = '';

   for (let key in content) {
      if (Array.isArray(content[key])) {
         for (let i = 0; i < content[key].length; i++) {
            const li = document.createElement('li');
            li.textContent = Object.values(content[key][i]).join(', ');

            ul.appendChild(li);
         }
      }
   }
}

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');

searchButton.addEventListener('click', function() {
   const cityName = cityInput.value;
   getResponse(cityName);
});

getResponse ();