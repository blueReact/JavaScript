var content = document.getElementById("content");
var button = document.getElementById("showMore");

button.onmouseover = function() {

  if(content.className === 'open') {
    content.className = '';
    button.innerHTML = 'Show More';
  }

};

button.onmouseout = function() {
  if(content.className === '') { 
    content.className = 'open';
    button.innerHTML = 'Show Less';
  }
};


// window.onload = function() {
  
}