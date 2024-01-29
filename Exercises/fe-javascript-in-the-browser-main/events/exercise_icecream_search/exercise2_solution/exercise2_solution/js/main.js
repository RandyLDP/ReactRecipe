/*
Events:
* input field is clicked into/out of
* user types

State areas:
* input has focus
* updateSearchState

Effects:
1. input field has background color
2. "", ✅ or ❌ before input
3. results div is shown/hidden
4. results div shows "found" or "not found"
5. results div shows flavour
*/
const flavours = ["chocolate", "vanilla", "strawberry", "lemon"];

const getSearchField = () => document.querySelector("input.flavour-search");

// Events
const handleSearchClickEvent = () => {
    console.log("The input field gained or lost focus.");
};
const handleTypeEvent = () => {
    console.log("Something was typed.");
};

// Effects
// Effects
const setSearchFieldFocus = () => {
    const inputField = getSearchField();
    inputField.classList.add("has-focus");
};
const unsetSearchFieldFocus = () => {
    const inputField = getSearchField();
    inputField.classList.remove("has-focus");
};

const setCharacterBeforeInput = character => {
    const searchFieldContainer = document.querySelector(".before-search-field");
    searchFieldContainer.textContent = character;
};

const showResults = () => {
    document.querySelector(".search-results").classList.remove("hidden");
};

const hideResults = () => {
    document.querySelector(".search-results").classList.add("hidden");
};

const showFlavourFound = () => {
    document.querySelector(".flavour-found").classList.remove("hidden");
};

const hideFlavourFound = () => {
    document.querySelector(".flavour-found").classList.add("hidden");
};

const showFlavourNotFound = () => {
    document.querySelector(".flavour-not-found").classList.remove("hidden");
};

const hideFlavourNotFound = () => {
    document.querySelector(".flavour-not-found").classList.add("hidden");
};

const showTypedInValue = typedInValue => {
    // Show in both spans
    const spans = document.querySelectorAll(
        ".flavour-found span, .flavour-not-found span"
    );
    spans.forEach(span => (span.textContent = typedInValue));
};

const searchField = getSearchField();
searchField.addEventListener("focusin", handleSearchClickEvent);
searchField.addEventListener("focusout", handleSearchClickEvent);
searchField.addEventListener("keyup", handleTypeEvent);