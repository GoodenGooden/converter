import convertview from "./view/convertview.js";
import navview from "./view/navview.js";
import searchview from "./view/searchview.js";
import * as model from "./model.js";
import display from "./view/display.js";
import toggleView from "./view/toggleView.js";
import messDisplay from "./view/messDisplay.js";

const currencyController = async function () {
  try {
    const querygetFrom = searchview.getQueryfrom();
    if (!querygetFrom)  {
      renderError('insert a valid number')
      return;
    };
     
    

    //await model.currency(querygetFrom);

    const querygetTo = searchview.getQueryto();
    if (!querygetTo) {
       renderError('insert a valid number')
       return;
    }

      

    //await model.currency(querygetTo);

    const querygetAmount = searchview.getQueryamount();
    if (!querygetAmount) {
      renderError('insert a valid number')
      return;
    }

      
    

    const data = await model.currency(querygetFrom, querygetTo, querygetAmount);

    if (!data ) {
      // If no valid data or 'name' is missing, display an error message
      messDisplay.renderError('insert a valid number');
    return;
  }

  display.render(data);
    console.log({ data} )
  } catch (err) {
    messDisplay.renderError();
  }
};

 currencyController();



const init = function () {
  convertview.addHandlerConverter(currencyController); 
  // console.log("Hello world")
};

init();


"fix this"