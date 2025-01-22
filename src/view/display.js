
class Display {
    #data;
    #currencyConverted = document.querySelector('.currency-converted');

    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this.#currencyConverted.innerHTML = '';
        this.#currencyConverted.insertAdjacentHTML('afterbegin', markup);
   
        
if (!data) {
  return
}

      }
      #generateMarkup () {                                   
       return` 

         <p class="mb-2 font-bold text-gray-600"> ${this.#data.amount} = </p>
            <p class="mb-2 text-3xl font-bold text-gray-700">${Math.round(this.#data.convertedAmount * 100) / 100}</p>
            <div class="flex mb-2 gap-1 text-gray-500 text-sm">
              <p> ${this.#data.fromCurrency} </p>
              <p>=</p>
              <p>${this.#data.toCurrency} </p>
            </div>
            <div class="flex gap-1 text-gray-500 text-sm">
              <p> ${this.#data.toCurrency}</p>
              <p>=</p>
              <p> ${this.#data.fromCurrency}</p>
            </div>
        `
          }

}

export default new Display();


