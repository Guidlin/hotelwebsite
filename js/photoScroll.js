let largeTitle = document.getElementById("home_large_title");

var x = 1;                  

function photoLoop(i) {     
  if (i > 3) {
    i = 1;
  }

  largeTitle.style = "background-image: url('img/home/titlepicture"+i+".jpg')";

  setTimeout(() => {
    i++;

    photoLoop(i);
  }, 5000);
}
  
photoLoop(x);