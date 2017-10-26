//IIFE
$(function(){

  // HOLDS THE APP'S DATA
  let model = {    
    // not concerned with where (which node) to display the data    

    cats: [],   

    imageUrls: [
      'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0',
      'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0',
      'https://cdn.pixabay.com/photo/2016/04/16/23/07/cat-1333926_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg'
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