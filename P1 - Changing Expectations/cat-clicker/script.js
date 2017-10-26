var names = ["KITTY", "BILLY", "ROBERTS", "ALEXIS"];

// HTML IDs looks like this img1, img2, ... , score1, score2,... , name1, name2, ....
var tags = names.map( (name, index) => {
  return {
    image: document.getElementById("img"+(index+1)),
    score: document.getElementById("score"+(index+1)),
    name: document.getElementById("name"+(index+1)),
    btn: document.getElementById("btn"+(index+1)),
    cat: document.getElementById("cat"+(index+1))
  }
});


var toggle = (node) => {
  // this function shows one cat div (the div associated with the clicked button)
  // and hides all other by adding/removing the 'hidden' CSS classList.
  // 'hidden' class is initially applied to all cat divs
  tags.map((tag) => {
    if(tag.btn !== node){
        (tag.cat).classList.add("hidden");
    } else{
      (tag.cat).classList.remove("hidden");
    }
  });
}


tags.map((tag, index) => {

  let name = tag.name;
  let image = tag.image;
  let score = tag.score;
  let btn = tag.btn;
  let cat = tag.cat;

  name.innerHTML = names[index];
  btn.textContent = names[index];
  //console.log(btn.value);
  image.addEventListener('click', () => {
    var x = parseInt(score.innerHTML);
    score.innerHTML = x + 1;
  }, false);

  btn.addEventListener('click', () => {
    return toggle(btn);
  }, false);

});

// make the first div appear
tags[0].btn.click();
