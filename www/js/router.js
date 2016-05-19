define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var StructureView = require("views/StructureView");
  var MyPresentazione = require("views/pages/MyPresentazione");
  var MapView = require("views/pages/MapView");
  var MySelezione = require("views/pages/MySelezione");
  var MyHomepage = require("views/pages/MyHomepage");

  var AppRouter = Backbone.Router.extend({

    constructorName: "AppRouter",

    routes: {
      // the default is the structure view
      "": "showStructure",
      "mypresentazione": "Mypresentazione",
      "map": "map",
      "myselezione": "myselezione",
      "homepage": "homepage"
    },

    firstView: "mypresentazione",

    homepage: function(){
      var page = new MyHomepage();
      this.changePage(page);

    },

    myselezione: function(){
      var page = new MySelezione();
      this.changePage(page);
    },


    initialize: function(options) {
      this.currentView = undefined;
    },

    Mypresentazione: function() {
      // create the view
      var page = new MyPresentazione();
      // show the view
      this.changePage(page);
    },

    map: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav2");
      // create the view and show it
      var page = new MapView();
      this.changePage(page);
    },

    // load the structure view
    showStructure: function() {
      if (!this.structureView) {
        this.structureView = new StructureView();
        // put the el element of the structure view into the DOM
        document.body.appendChild(this.structureView.render().el);
        this.structureView.trigger("inTheDOM");
      }
      // go to first view
      this.navigate(this.firstView, {trigger: true});
    },

  });

  return AppRouter;

});