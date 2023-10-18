fetch('https://restcountries.com/v2/all')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(`Country: ${country.name}, Flag: ${country.flags[0]}`);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });