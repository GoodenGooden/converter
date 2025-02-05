
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
  });
      
    }
 
};
  
export default new Convert();


