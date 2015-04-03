window.Shedule = Backbone.Model.extend({

    urlRoot: "/shedule",

    defaults: {
        cours:"",
        group: "",
        date: ""
    }
});

window.SheduleCollection = Backbone.Collection.extend({

    model: Shedule,

    url: "/shedule"

});