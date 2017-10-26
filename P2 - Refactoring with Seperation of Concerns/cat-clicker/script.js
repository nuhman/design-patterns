//IIFE
$(function(){

  // HOLDS THE APP'S DATA
  let model = {    
    // not concerned with where (which node) to display the data    

    currentCat: null,

    cats: [
      { name: "KITTY", clickCount: 0, url: 'images/kitty.jpg' },
      { name: "BILLY", clickCount: 0, url: 'images/billy.jpg' },
      { name: "ALEXIS", clickCount: 0, url: 'images/alexis.jpg' },
      { name: "ROBERTS", clickCount: 0, url: 'images/roberts.jpg' }
    ]

  };

  // Link Model and View Here
  let octopus = {
    
    init(){
      model.currentCat =  model.cats[0];
      catListView.init();
      catView.init();
    },

    getCurrentCat(){
      return model.currentCat;
    },
    getCats(){
      return model.cats;
    },
    setCurrentCat(cat){
      model.currentCat = cat;
    },
    incrementCounter(){
      model.currentCat.clickCount++;
      catView.render();
    }    
  };
// VIEWS

  let catView = {
    init(){  

      $('.pic').click(function(){
        octopus.incrementCounter();
      });

      this.render();
    },
    render(){
      let currentCat = octopus.getCurrentCat();
      $('.name').text(currentCat.name);
      $('.pic').attr('src', currentCat.url);
      $('.score').text(currentCat.clickCount);
    }
  };

  let catListView = {
    init(){       
      this.render();
    },
    render(){
      let cats = octopus.getCats();
      cats.forEach(function(cat, index){
        $('.list').append("<button class='btn' id='"+index+"' >"+cat.name+"</button>");
        $('#'+index).click(function(){
          octopus.setCurrentCat(cat);
          catView.render();
        })
      });
    }
  };
  
  octopus.init();
  
}());