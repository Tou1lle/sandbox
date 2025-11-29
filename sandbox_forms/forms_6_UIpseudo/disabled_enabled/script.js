//Wait for the page load to finnish
document.addEventListener("DOMContentLoaded", () => {
  //Attach change event listener to checkbox
  document.querySelector("#billing-checkbox").addEventListener("change", toggleBilling);
}, false);

function toggleBilling() {
  //Select the billing text fields
  const billingItems = document.querySelectorAll("#billing input[type='text']");

  //Toggle the billing fields
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}