(function () {
  var categories = [{ type: 1 }, { type: 2 }, { type: 3 }];
  var offerItems = [
    { type: 1, items: ["Pani Puri", "Momos"] },
    { type: 2, items: ["Icecream", "50 Rs. Discount"] },
    { type: 3, items: ["2 x Chicken Rolls", "4 x Cheese Momos"] },
  ];

  var itemTitle = document.getElementById("item-name");
  itemTitle.innerText = `You get a free: ${offerItems[0].items}`;
})();
