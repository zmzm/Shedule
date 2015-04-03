var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "shedule"	: "list"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function (id) {
        if (!this.homeView) {
            this.homeView = new HomeView();
        }
        $('#content').html(this.homeView.el);
        this.headerView.selectMenuItem('home-menu');
    },

	list: function() {
        var sheduleList = new SheduleCollection();
        sheduleList.fetch({success: function(){
            $("#content").html(new SheduleListView({model: sheduleList}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    }
});

utils.loadTemplate(['HomeView', 'HeaderView', 'SheduleView', 'SheduleListItemView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});
