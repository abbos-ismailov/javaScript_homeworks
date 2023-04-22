async function getProducts() {
      try {
            let response = await fetch(`https://rare-plants-decide-213-230-120-170.loca.lt/api/user`)
            let result = await response.json();
            return result;
      } catch (error) {
            console.log('error chiqdi');
      }
}

console.log(getProducts());