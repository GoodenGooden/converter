

class Convert {
  #data;
  #parentEl = document.querySelector(".converter");
  #button = document.querySelector(".button-converter");
  #inputTo = document.querySelector(".input-to");
  #inputFrom = document.querySelector(".input-from");

  addHandlerConverter(handler) {
    this.#button.addEventListener("click", (e) => {
      const inputToValue = this.#inputTo.value.trim();
      const inputFromValue = this.#inputFrom.value.trim();

      // If either input is empty, prevent the handler from executing
      if (!inputToValue.length || !inputFromValue.length) {
        e.preventDefault(); // Prevent the default click behavior
        return; // Stop the handler from being called
      }
      
      // If inputs are valid, call the handler function
      handler();
    });
  }
}

export default new Convert();

"button should not click when no input "




/*
class Convert {
  #data;
  #parentEl = document.querySelector(".converter");
  #button = document.querySelector(".button-converter");

  
  addHandlerConverter(handler) {
    this.#button.addEventListener("click", function (e) {

      e.preventDefault();
    //   console.log(handler)
      handler();
    // console.log("hello")
    
      
    }
  });
};
  
export default new Convert();

*/