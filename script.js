const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement= document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container');

//array to populate the select tags with these countries
const countries = [ 
    { code: "USD", name: "United States Dollar" },
    { code: "INR", name: "Indian Rupee" },
    { code: "Afghanistan", name: "Afghani" },
    { code: "Albania", name: "Lek" },
    { code: "Algeria", name: "Dinar" },
    { code: "Andorra", name: "Euro" },
    { code: "Angola", name: "New Kwanza" },
    { code: "Antigua and Barbuda", name: "East Caribbean dollar" },
    { code: "Argentina", name: "Peso" },
    

];
//Showing countries from array to select tags
countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;
    fromCurrencyElement.appendChild(option1);
 toCurrencyElement.appendChild(option2);
 //default value
 fromCurrencyElement.value = "USD";
 toCurrencyElement.value = "INR";
});

//function to get exchange rate ising API
const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;
    
    //fetch data from API
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
const data = await response.json();

const conversionRate = data.rates[toCurrency];
const convertedAmount = (amount * conversionRate).toFixed(2);
convertedAmountElement.value = convertedAmount;
resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}

    
// Fetching exchange rate when user inputs the amount
fromAmountElement.addEventListener('input', getExchangeRate);
// Fetching exchange rate when user change currency
fromCurrencyElement.addEventListener('change' , getExchangeRate);
toCurrencyElement.addEventListener('input' , getExchangeRate);

window.addEventListener('load' , getExchangeRate);