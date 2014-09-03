var app = {
//Find employes by Name
findByName: function() {
    var self = this;
    this.store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(self.employeeLiTpl(employees));
    });
},
    //Just for sample of showing alert
    showAlert: function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
},
 
 //Used to render the view to hTML Code
    renderHomeView: function() {
    $('body').html(this.homeTpl());
    $('.search-key').on('keyup', $.proxy(this.findByName, this));
}, 
//Initialize the renderings
initialize: function() {
    var self = this;
    this.homeTpl = Handlebars.compile($("#home-tpl").html());
    this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
    this.store = new MemoryStore(function() {
        self.renderHomeView();
    });
}
};
//ru
app.initialize();