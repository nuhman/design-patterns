var viewModel = function(){
    // model
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Kitty");
    this.imgSrc = ko.observable("img/kitty.jpg");
    this.title = ko.observable("new born");

    this.incrementCounter = function(){
        this.clickCount( this.clickCount() + 1);        
    };

    this.updateTitle = ko.computed(function( ){
        if(this.clickCount() > 10 && this.clickCount() < 20) this.title("infant");
        else if(this.clickCount() >= 20) this.title("teenager");
    }, this);
    
};
console.log("Running...");
ko.applyBindings(new viewModel());