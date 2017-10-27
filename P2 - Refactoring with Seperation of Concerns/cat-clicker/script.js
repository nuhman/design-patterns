//IIFE
$(function(){

  // HOLDS THE APP'S DATA
  let model = {    
    // not concerned with where (which node) to display the data    

    currentCat: null,
    showingAdmin: false,

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
      adminView.init();      
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
      adminView.render();
    },

    // ADMIN OPTIONS
    toggleAdmin(){      
      if(model.showingAdmin){
        $(".admin-options").hide(1000);
        model.showingAdmin = false;
      } else {
        $(".admin-options").show(1000);
        model.showingAdmin = true;
      }
    },

    updateDetails(name, url, clicks){
        name = name.trim();
        url = url.trim();
        clicks = clicks.trim();        
        if(name && url && clicks){
          cat = model.currentCat;
          cat.name = name;
          cat.url = url;
          cat.clickCount = clicks;
          catListView.render();
          catView.render();
          adminView.render(); 
        }
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
      $('.list').html('');
      let cats = octopus.getCats();
      cats.forEach(function(cat, index){
        $('.list').append("<button class='btn' id='"+index+"' >"+cat.name+"</button>");
        $('#'+index).click(function(){
          octopus.setCurrentCat(cat);
          catView.render();
          adminView.render();
        })
      });
    }
  };

  let adminView = {
    init(){      
      $(".admin-options").hide();

      $("#admin").click(function(){
        octopus.toggleAdmin();
      });
      $("#admin-cancel").click(function(){        
        octopus.toggleAdmin();        
      });
      $("#admin-save").click(function(){                
        let name = $("#edit-name-input").val();
        let url = $("#edit-url-input").val();
        let click = $("#edit-click-input").val();
        octopus.updateDetails(name, url, click); 
        octopus.toggleAdmin();               
      });

      this.render();
    },
    render(){
      let cat = model.currentCat;
      $("#edit-name-input").val(cat.name);
      $("#edit-url-input").val(cat.url);
      $("#edit-click-input").val(cat.clickCount);
    }    
  };
  
  octopus.init();
}());