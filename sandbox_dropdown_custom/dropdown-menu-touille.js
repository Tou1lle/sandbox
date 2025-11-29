/**
 * Dropdown menu mostly are triggered by
 * either CLICK or HOVER
 * 
 * Click only need button.
 * 
 * Hover only needs container (container is parent of the list
 * otherwise the list would disappear when hovered away from btn)
 */
const EVENT_TYPES = {
  "click": function (ddContainer, ddBtn, ddNav) {
    ddBtn.addEventListener("click", e => {
      toggleNav(ddNav);
    });
  },
  "hover": function (ddContainer, ddBtn, ddNav) {
    ddContainer.addEventListener("mouseover", e => {
      showNav(ddNav);
    });
    ddContainer.addEventListener("mouseout", e => {
      hideNav(ddNav);
    });
  },
}

/**
 * @param {Element} ddNav The <nav> element containing <ul>/<ol> and <li>
 * @returns false - not used but to show that nav is hidden
 */
function hideNav(ddNav) {
  ddNav.style.maxHeight = "0px";
  ddNav.style.overflow = "hidden";
  return false;
}

/**
 * @param {Element} ddNav The <nav> element containing <ul>/<ol> and <li>
 * @returns true - not used but to shot that nav is shown
 */
function showNav(ddNav) {
  ddNav.style.maxHeight = ddNav.scrollHeight + "px";
  return true;
}

/**
 * @param {Element} ddNav  Toggle the visibility od the dropdown
 */
function toggleNav(ddNav) {
  const navState = ddNav.style.maxHeight === "0px"
    ? showNav(ddNav)
    : hideNav(ddNav);
}

/**
 * @param {Element} ddMenuContainer The element containing <button> and <nav>
 * @param {Event} event The clicked target
 * @returns If the clicked target is a child of the outermost menu container then true, else false
 */
function clickedMenuContainer(ddMenuContainer, event) {
  return ddMenuContainer.contains(event.target);
}

/**
 * @param {Element} ddMenuContainer The element containing <button> and <nav>
 * @param {Element} ddMenuNav The <nav> element containing <ul>/<ol> and <li>
 */
function closeFromPage(ddMenuContainer, ddMenuNav) {
  document.addEventListener("click", e => {
    if (clickedMenuContainer(ddMenuContainer, e)) return;
    hideNav(ddMenuNav);
  });
}

/**
 * This function creates from container (its children button and nav)
 * a desired dropdown menu
 * - hides the nav on initial run
 * - click/hover on button/container shows dropdown menu
 * - click on page hides dropdown menu
 * 
 * @param {Event} eventType for this case either "click" or "hover"
 * @param {Element} ddContainer The <div> containing the whole menu structure
 * @param {Element} ddBtn The button that the user clicks on
 * @param {Element} ddNav The nav the is shown when needed
 */
function createDropdownMenu(eventType, ddContainer, ddBtn, ddNav) {
  closeFromPage(ddContainer, ddNav);
  EVENT_TYPES[eventType](ddContainer, ddBtn, ddNav);

  //Make sure to hide the list on initial load
  hideNav(ddNav);
}

export { createDropdownMenu }

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}