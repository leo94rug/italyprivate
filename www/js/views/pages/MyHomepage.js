define(function(require) {

  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var Utils = require("utils");

  var MyHomepage = Utils.Page.extend({

    constructorName: "MyHomepage",
 
    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.homepage;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.log(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

    id: "myhomepage",
    className: "i-g page",

    events: {

    },

    render: function() {
      $("#menusup").show();
      $(this.el).html(this.template());
      return this;
    },

  });

  return MyHomepage;

});