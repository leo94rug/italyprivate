define(function(require) {

  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var Utils = require("utils");

  var MyPresentazione = Utils.Page.extend({

    constructorName: "MyPresentazione",
 
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.presentazione;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.log(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

    id: "mypresentazione",
    className: "i-g page",

    events: {
      "tap #presentazione": "avanti"
    },

    render: function() {
      $("#menusup").hide();
      $(this.el).html(this.template());
      return this;
    },

    avanti: function(e) {
      Backbone.history.navigate("myselezione", {
        trigger: true
      });
    }
  });

  return MyPresentazione;

});