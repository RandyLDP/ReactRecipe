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
const getSearchField = () => document.querySelector("input");
const handleSearchClickEvent = () => console.log("Something was typed.");

const searchField = getSearchField();

if (searchField) {
    console.log("Search field found:", searchField);
} else {
    console.error("Search field not found on the page");
}
searchField.addEventListener("focusin", handleSearchClickEvent);
searchField.addEventListener("focusout", handleSearchClickEvent);
//searchField.addEventListener("keyup", handleTypeEvent);
