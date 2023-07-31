console.log(window.sessionStorage);
console.log(window.localStorage);
console.log(document.cookie);

let siteUrl = "https://magento2";
jQuery.ajax({
  url: siteUrl + "/rest/V1/customers/me",
  type: "get",
  error: function(e) {
    console.log("TESTING ERROR", e);
  },
  success: function(resp) {
    console.log("testing response", resp.id);
    getCart(resp.id);
  }
});


function getCart(customerId) {
  const url = siteUrl + "/rest/V1/carts/mine?customer_id=" + customerId;
  $.ajax({
    url: url,
    type: "POST",
    error: function(e) {
      console.log("TESTING ERROR", e);
    },
    success: function(resp) {
      console.log("testing cart data", resp);
    }
  });
}