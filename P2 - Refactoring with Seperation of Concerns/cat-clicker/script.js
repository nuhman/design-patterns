//IIFE
$(function(){

  // HOLDS THE APP'S DATA
  let model = {    
    // not concerned with where (which node) to display the data    

    cats: [],   

    imageUrls: [
      'images/kitty.jpg',
      'images/billy.jpg',
      'images/alexis.jpg',
      'images/roberts.jpg'      
    ],

    init(){
       this.cats = [
        { name: "KITTY", clickCount: 0, url: this.imageUrls[0] },
        { name: "BILLY", clickCount: 0, url: this.imageUrls[1] },
        { name: "ALEXIS", clickCount: 0, url: this.imageUrls[2] },
        { name: "ROBERTS", clickCount: 0, url: this.imageUrls[3] }
      ];
    },

    getAllCats(){
      return this.cats;
    }

  };

  // Link Model and View Here
  let octopus = {
    
    getCats(){
      return model.getAllCats();
    },

    // display the cat that was clicked
    displayCat(self){      
      $(".cat").hide();
      this.getCats().forEach(function(cat, index){
        if(self.textContent === cat.name){
          $("#cat"+(index+1)).show();
        }
      });
    },

    // increment the clickCount of model, and update the view
    countClicks(self){
      let id = parseInt(self[0].id);     
      $("#score"+(id+1)).text( ++(this.getCats()[id]).clickCount );      
    }    

  };
  
  // View Starts
  let view = {

      init(){
        this.catNode = $('.cats');
        this.btnNode = $('.list');        

        view.render();
      },

      render(){
        let buttons = '';
        let catDiv = '';
        // render button
        octopus.getCats().forEach(function(cat, index){
            buttons += '<button class="btn" id="btn'+(index+1)+'" >'+
                          cat.name +'</button>';
            catDiv += '<div id="cat'+(index+1)+'" class="cat">'+
                          '<p class="name">NAME: <span id="name'+(index+1)+'">'+cat.name+'</span></p>'+
                          '<img src="'+cat.url+'" id="'+index+'" class="pic" />' +
                          '<p class="score">CLICKS: <span id="score'+(index+1)+'">'+cat.clickCount+'</span></p>' +
                      '</div>';
        });

        this.catNode.html(catDiv);
        this.btnNode.html(buttons);

        $('.btn').click(function(e){
          octopus.displayCat(this);
        });

        $('.pic').click(function(e){
          octopus.countClicks($(this));
        });
      }

  };
  
  model.init(); // initialize data here!!
  view.init(); // render view
  
}());