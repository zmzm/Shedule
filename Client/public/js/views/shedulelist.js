window.SheduleListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        var shedules = this.model.models;
        var len = shedules.length;

        $(this.el).html('<ul class="thumbnails"></ul>');

            $('.thumbnails', this.el).append(new SheduleListItemView({model: shedules[i]}).render().el);

        return this;
    }
});

window.SheduleListItemView = Backbone.View.extend({

    tagName: "li",

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});
