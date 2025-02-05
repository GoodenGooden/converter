
class messageView {
    #messDiv = document.querySelector('.currency-converted')
#errorMessage = 'pls try again later!';


renderError (message = this.#errorMessage) {

    const markup = `
     could not fetch! pls try again!
  
      `
    this.clearMessage ();
    this.#messDiv.insertAdjacentHTML('afterbegin', markup);
}

clearMessage () {
    this.#messDiv.innerHTML = '';
}

}

export default new messageView ();

