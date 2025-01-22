

class Navview {
  #data;
  #burgerIcon = document.querySelector('.burger-icon');
  #burgerNav = document.querySelector('.burger-nav');
  #closeIcon = document.querySelector('.close-icon');
  #countryNav = document.querySelector('.country-nav');
  #countryNavv = document.querySelector('.country-navv');
  #countryIcon = document.querySelector('.country-icon');
  #countryIconn = document.querySelector('.country-iconn');
  #countrycloseicon = document.querySelector('.countryclose-icon');
  #countrycloseiconn = document.querySelector('.countrycloser-icon');
  #buttonConverter = document.querySelector('.button-converter');
  #currencyConverted = document.querySelector('.currency-converted');
  #buttonConverted = document.querySelector('.button-converted');
 


  constructor() {
    this.#addHandlerclosenav();
    this.#addHandleropennav();
    this.#addHandlerEventopen();
    this.#addHandlerEventclose();
    this.#addHandlerConvertbutton();
  }

  toggleWindowopen() {
    this.#burgerNav.classList.remove('hidden');
    this.#burgerIcon.classList.add('hidden');
    this.#closeIcon.classList.remove('hidden');
  }

  toggleWindowclose() {
    this.#burgerNav.classList.add('hidden')
    this.#burgerIcon.classList.remove('hidden')
    this.#closeIcon.classList.add('hidden')

  }

  toggleWindowiconopen() {
    this.#countryIcon.classList.add('hidden');
    this.#countrycloseicon.classList.remove('hidden');
    this.#countryNav.classList.remove('hidden');
  }

  toggleWindowiconopener() {
    this.#countryIconn.classList.add('hidden');
    this.#countrycloseiconn.classList.remove('hidden');
    this.#countryNavv.classList.remove('hidden');

  }

  toggleWindownavopen() {
    this.#countryIcon.classList.remove('hidden');
    this.#countrycloseicon.classList.add('hidden');
    this.#countryNav.classList.add('hidden');

  }

  toggleWindownavclose() {
    this.#countryIconn.classList.remove('hidden');
    this.#countrycloseiconn.classList.add('hidden');
    this.#countryNavv.classList.add('hidden');

  }

  toggleConvertbutton() {
    this.#currencyConverted.classList.remove('hidden');
    this.#buttonConverted.classList.remove('hidden');
    this.#buttonConverter.classList.add('hidden'); 
  }


  #addHandlerclosenav() {
    this.#burgerIcon.addEventListener('click', this.toggleWindowopen.bind(this))
  }

  #addHandleropennav() {
    this.#closeIcon.addEventListener('click', this.toggleWindowclose.bind(this))
  }

  //this for the country navigation in the input

  #addHandlerEventopen() {
    this.#countryIcon.addEventListener('click', this.toggleWindowiconopen.bind(this))
    this.#countryIconn.addEventListener('click', this.toggleWindowiconopener.bind(this))

  }

  #addHandlerEventclose() {
    this.#countrycloseicon.addEventListener('click', this.toggleWindownavopen.bind(this))
    this.#countrycloseiconn.addEventListener('click', this.toggleWindownavclose.bind(this))

  }

  #addHandlerConvertbutton() {
    this.#buttonConverter.addEventListener('click', this.toggleConvertbutton.bind(this))

  }

 
}

export default new Navview();







/*
class Navview {
    #burgerIcon = document.querySelector('.burger-icon');
    #burgerNav = document.querySelector('.burger-nav');
    #closeIcon = document.querySelector('.close-icon');

    constructor() {
        this.#addEventHandlers(); //you can do it this method also
    }

    toggleWindowOpen() {
        this.#burgerNav.classList.remove('hidden');
        this.#burgerIcon.classList.add('hidden');
        this.#closeIcon.classList.remove('hidden');
    }

    toggleWindowClose() {
        this.#burgerNav.classList.add('hidden');
        this.#burgerIcon.classList.remove('hidden');
        this.#closeIcon.classList.add('hidden');
    }

    #addEventHandlers() {
        this.#burgerIcon.addEventListener('click', this.toggleWindowOpen.bind(this));
        this.#closeIcon.addEventListener('click', this.toggleWindowClose.bind(this));
    }
}

export default new Navview();

*/


