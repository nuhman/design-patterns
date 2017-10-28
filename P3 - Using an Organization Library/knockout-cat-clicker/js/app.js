var catsData = [
    {name: "Billy", img: "billy.jpg", clicks: 0, nicknames: ["jeff", "tom"]},
    {name: "Kitty", img: "kitty.jpg", clicks: 0, nicknames: ["Cutie", "Taco"]},
    {name: "Katie", img: "katie.jpg", clicks: 0, nicknames: ["kat"]},
    {name: "Roberts", img: "roberts.jpg", clicks: 0, nicknames: ["rob"]},    
];

var Cat = function(data){
    this.clickCount = ko.observable(data.clicks);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable("img/"+data.img);    
    this.nicknames = ko.observableArray(data.nicknames);
    this.title = ko.computed(function(){
        let title;
        let clicks = this.clickCount();
        if(clicks < 10) title = "New Born";
        else if(clicks < 20) title = "Child";
        else if(clicks < 30) title = "Teen";
        else if(clicks < 40) title = "Voter";
        else title = "Ninja";
        return title;
    }, this);
};

//TODO: show up list of cats in front page

var viewModel = function(){    
    let self = this;   
    self.catList = ko.observableArray([]);    
    catsData.forEach(function(cat){
        self.catList.push( new Cat(cat) );
    });
    self.currentCat = ko.observable( self.catList()[0] );
    self.incrementCounter = function(){
        self.currentCat().clickCount( self.currentCat().clickCount() + 1);        
    };
    self.changeCat = function(cat){        
        self.currentCat(cat);
    }        
};

ko.applyBindings(new viewModel());