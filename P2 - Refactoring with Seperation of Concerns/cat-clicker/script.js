//IIFE
$(function(){
  // model contains cat's name and clickCount
  // not concerned with where (which node) to display the data
  // JUST HOLDS THE APP'S DATA
  let model = {
    cats: [],
    imageUrls: [
      'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0',
      'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0',
      'https://cdn.pixabay.com/photo/2016/04/16/23/07/cat-1333926_960_720.jpg',
      'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg'
    ],
    init(){
       this.cats = [
        { name: "KITTY", clickCount: 0, url: this.imageUrls[0], img: "img1" },
        { name: "BILLY", clickCount: 0, url: this.imageUrls[1], imgId: "img2" },
        { name: "ALEXIS", clickCount: 0, url: this.imageUrls[2], imgId: "img3" },
        { name: "ROBERTS", clickCount: 0, url: this.imageUrls[3], imgId: "img4" }
      ];
    },
    getAllCats(){
      return this.cats;
    },

  };

  // Link Model and View Here
  let octopus = {

    getCats(){
      return model.getAllCats();
    },
    displayCat(self){
      let cats = this.getCats();
      $(".cat").hide();
      cats.forEach(function(cat, index){
        if(self.textContent === cat.name){
          $("#cat"+(index+1)).show();
        }
      });
    },
    countClicks(self){
      //let cats = this.getCats();
      // console.log(cats);
      //cats[0].clickCount++;
      console.log(self[0].id);
    }

  };

  // View Starts
  let view = {

      init(){
        this.catNode = $('.cats');
        this.btnNode = $('.list');
        let buttons = '';
        let catDiv = '';
        // render button
        octopus.getCats().forEach(function(cat, index){
            buttons += '<button class="btn" id="btn'+(index+1)+'">'+
                          cat.name +'</button>';
            catDiv += '<div id="cat'+(index+1)+'" class="cat">'+
                          '<p class="name">NAME: <span id="name'+(index+1)+'">'+cat.name+'</span></p>'+
                          '<img src="'+cat.url+'" id="img'+(index+1)+'" class="pic" />' +
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

        view.render();
      },

      render(){

      }

  };

  model.init();
  view.init();

  //model.init();
}());
