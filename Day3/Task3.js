fetch('https://restcountries.com/v2/all')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(`Country: ${country.name}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-Region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });