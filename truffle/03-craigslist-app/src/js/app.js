App = {

  web3Provider: null,
  contracts: {},

  init: function () {

    // Show an item by default
    var itemsRow = $('#itemsRow');
    var itemTemplate = $('#itemTemplate');

    itemTemplate.find('.panel-title').text("iPhone 7");
    itemTemplate.find('.item-description').text("Smartphone with the most jacked up price. But you should still buy it.");
    itemTemplate.find('.item-price').text("10.23");
    itemTemplate.find('.item-seller').text("0x01234567890123456789012345678901");

    itemsRow.append(itemTemplate.html());

    return App.initWeb3();
  },

  initWeb3: function () {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: function () {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function () {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function (adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function (event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function () {
  $(window).load(function () {
    App.init();
  });
});