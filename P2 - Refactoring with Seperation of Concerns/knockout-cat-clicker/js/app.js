var Cat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Kitty");
    this.imgSrc = ko.observable("img/kitty.jpg");
    this.title = ko.observable("new born");
    this.nicknames = ko.observableArray([
    "Tom","Cruise","Jeffy Kitty"
    ]);
    this.updateTitle = ko.computed(function( ){
        if(this.clickCount() > 10 && this.clickCount() < 20) this.title("infant");
        else if(this.clickCount() >= 20) this.title("teenager");
    }, this);
}

var viewModel = function(){    
    let self = this;
    self.currentCat = ko.observable(new Cat());
    self.incrementCounter = function(){
        self.currentCat().clickCount( self.currentCat().clickCount() + 1);        
    };
     
};
console.log("Running...");

ko.applyBindings(new viewModel());