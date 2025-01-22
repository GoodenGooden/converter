import convertview from "./view/convertview.js";
import navview from "./view/navview.js";
import searchview from "./view/searchview.js";
import * as model from "./model.js";
import display from "./view/display.js";
import toggleView from "./view/toggleView.js";

const currencyController = async function () {
  try {
    const querygetFrom = searchview.getQueryfrom();
    if (!querygetFrom) return;

    //await model.currency(querygetFrom);

    const querygetTo = searchview.getQueryto();
    if (!querygetTo) return;


    //await model.currency(querygetTo);

    const querygetAmount = searchview.getQueryamount();
    if (!querygetAmount) return;

  

    const data = await model.currency(querygetFrom, querygetTo, querygetAmount);

    display.render(data);

    console.log({ data} )
  } catch (err) {
    console.log(err);
  }
};

 currencyController();



const init = function () {
  convertview.addHandlerConverter(currencyController); 
  // console.log("Hello world")
};

init();
