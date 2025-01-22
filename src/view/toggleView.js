class ToggleView {
    #countryTo = document.querySelector('.country-to');
    #countryFrom = document.querySelector('.country-from');
    #inputTo = this.#countryTo.querySelector('.input-to');
    //#countryText = countryTo.querySelectorAll('.country-text');
    #inputFrom = this.#countryFrom.querySelector('.input-from');
    #countryOptions = this.#countryTo.querySelectorAll('.country-option');
    #countryOptioner = this.#countryFrom.querySelectorAll('.country-options')

    
constructor () {
   this. #addEventHandler ()
  this. #addEventHandlerClick()
}

#addEventHandler() {
    this.#countryOptions.forEach(countryoption => {
        countryoption.addEventListener('click', () => {
            let selectedOption = countryoption.querySelector('.country-text').innerText;
            this.#inputTo.value = selectedOption;
            console.log(selectedOption)

    
        })
      })

}

#addEventHandlerClick() {
    this.#countryOptioner.forEach(countryopt => {
        countryopt.addEventListener('click', () => {
            let optionSelected = countryopt.querySelector('.text-country').innerText;
            this.#inputFrom.value = optionSelected;
        })
    })
}



}

export default new ToggleView();





