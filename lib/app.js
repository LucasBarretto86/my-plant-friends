"use strict";
import 'regenerator-runtime/runtime';

import GreenThumb from './green_thumb';
import Plant from './plant';

export default class App {
    constructor() {
        this.terms = { sun: "", water: "", pets: "" };
        this.plants = [];
    }

    updateTerm(key, value) {
        this.terms[key] = value
    }

    isReadyToSubmit() {
        return (!Object.values(this.terms).some(value => { return (value === "") }));
    }

    parametrize(terms) {
        return Object.entries(terms).map(entry => entry.join("=")).join("&");
    }

    async search() {
        if (!this.isReadyToSubmit()) return;

        this.plantsContentTarget().innerHTML = "";
        this._plants = await GreenThumb.searchGreenFriends(this.parametrize(this.terms));

        this.render();
    }

    hasPlants() {
        return (this.plants.length > 0)
    }

    displayResults() {
        if (this.hasPlants()) {
            this.plantsTarget().classList.toggle("hidden", !this.hasPlants());
            this.noPlantsTarget().classList.toggle("hidden", this.hasPlants());
        }

        this.resultsTarget().classList.remove("hidden");
        this.resultsTarget().scrollIntoView({ behavior: "smooth", block: "start" });
    }

    render() {
        if (this.hasPlants()) {
            this.plants.forEach(plant => {
                this.plantsContentTarget().innerHTML += Plant.render(plant);
            });
        }

        this.displayResults();
    }

    // HTML TARGETS
    resultsTarget() {
        return document.querySelector("#selection-results")
    }

    plantsContentTarget() {
        return document.querySelector(".plants__content");
    }

    plantsTarget() {
        return document.querySelector("#plants");
    }

    noPlantsTarget() {
        return document.querySelector("#no-plants");
    }

    // GETTERS AND SETTERS


    get terms() {
        return this._terms;
    }

    get plants() {
        return this._plants;
    }

    set terms(terms) {
        this._terms = terms;
    }

    set plants(plants) {
        this._plants = plants
    }
}