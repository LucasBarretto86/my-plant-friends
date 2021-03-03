"use strict";

import App from "./app";

const app = new App();

const search = (e) => {
    app.updateTerm(e.target.name, e.target.value);
    app.search();
}

document.querySelector(".selection-bar__form").addEventListener('change', search);