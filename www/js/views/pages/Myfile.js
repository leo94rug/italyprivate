define(function(require) {

  var Backbone = require("backbone");
  var Utils = require("utils");

  var Myfile = Utils.Page.extend({

    constructorName: "Myfile",
    id: "file1",
    className: "i-g page",

    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.file1;
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.log(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },


    render: function() {
      $(this.el).html(this.template());
      return this;
    },

  
  });

  return Myfile;

});