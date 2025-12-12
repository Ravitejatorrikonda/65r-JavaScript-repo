/**
 * 
 * 
 */
 // When user clicks Convert button
  document.getElementById("convertBtn").addEventListener("click", convertCurrency);

  function convertCurrency() {
    let amount = document.getElementById("amount").value;  
    let from = document.getElementById("from").value;       
    let to = document.getElementById("to").value;           

    
    let url = `https://api.exchangerate-api.com/v4/latest/${from}`;

    // Fetch API call
    fetch(url)
      .then(response => response.json())       // Convert API response into JSON
      .then(data => {
        let rate = data.rates[to];             // Get selected currency rate
        let converted = amount * rate;         // Convert amount using rate

        document.getElementById("result").textContent =
          `${amount} ${from} =   ${converted.toFixed(2)} ${to}`;
      })
      .catch(() => {
        document.getElementById("result").textContent = "Error fetching data!";
      });
  }