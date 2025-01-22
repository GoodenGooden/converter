export const currency = async function (currencyfrom, currencyto, amount) {
   // console.log({currencyfrom, currencyto, amount });

  try {
    const res = await fetch(
      //('https://Exchange-Rate.proxy-production.allthingsdev.co/ExchangeRate?fromCurrency=INR&toCurrency=USD&amount=200', {
      `https://Exchange-Rate.proxy-production.allthingsdev.co/ExchangeRate?fromCurrency=${currencyfrom}&toCurrency=${currencyto}&amount=${amount}`,
      {
        method: "GET",
        headers: {
          "x-apihub-key": "W5xxZcXfh18EcLVgttQ8CavhMABYoRif0LkfpMgXqVMMBnRjGL",
          "x-apihub-host": "Exchange-Rate.allthingsdev.co",
          "x-apihub-endpoint": "c9207840-b078-4940-be6f-ffb3034ac644",
        },
      }
    );

    const data = await res.json();
    // console.log (data);
    return data;
  } catch (err) {
    console.error("Error fetching currency data:", err); 
  }
};


