define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");

  var Myselezione = Utils.Page.extend({

    constructorName: "Myselezione",
    id: "file1",
    className: "i-g page",

    events: {
      "tap #salta": "avanti"
    },

    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.myselezione;
      // here we  can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.log(data);
      //   });
      // });
      // this.listenTo(this, "removing", mostrabarradeltitolo);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

    render: function() {
      $(this.el).html(this.template());
      return this;
    },
    avanti: function() {
      Backbone.history.navigate("homepage", {
        trigger: true
      });
    }
  
  });

  return Myselezione;

});