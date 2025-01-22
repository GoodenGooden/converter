class searchView {
  #parentEl = document.querySelector(".input");

  getQueryfrom() {
    const queryfrom = this.#parentEl.querySelector(".input-from").value;
    this.#parentEl.querySelector(".input-from").value = "";
    return queryfrom;
  }

  getQueryto() {
    const queryfrom = this.#parentEl.querySelector(".input-to").value;
    this.#parentEl.querySelector(".input-to").value = "";
    return queryfrom;
  }

  getQueryamount() {
    const queryamount = this.#parentEl.querySelector(".input-amount").value;
    this.#parentEl.querySelector(".input-amount").value = "";
    return queryamount;
  }
}

export default new searchView();
