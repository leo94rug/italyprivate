define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var AnteprimaView = Backbone.View.extend({

    constructorName: "AnteprimaView",

    id: "ciao",

    events: {
      "tap #loading": "avanti",
    },

    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.anteprima;
      //this.on("inTheDOM", this.rendered);
      // bind the back event to the goBack function
      //document.getElementById("back").addEventListener("back", this.goBack(), false);
    },

    render: function() {
      // load the template
      this.el.innerHTML = this.template({});
      // cache a reference to the content element
      this.contentElement = this.$el.find('#content')[0];
      return this;
    },

    // rendered: function(e) {
    // },

    // generic go-back function

    avanti: function(event) {
      Backbone.history.navigate("homepage", {
        trigger: true
      });
    }
  });

  return AnteprimaView;

});