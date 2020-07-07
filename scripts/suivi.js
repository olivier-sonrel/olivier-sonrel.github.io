window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// $(document).ready(function(){

//     $("#competence").hover(function(){
//         $(".competence").css("background-color", "#1E8EDA");
//     },function(){
//         $(".competence").css("background-color", "#1fe0");
//     });
// });
// script coloration menu selon position du navigateur
//
// -----------rend fond ecran sur lequel on click vert--------
// --------exemple recup element ou on click---------

// TODO: a modif pour que la barre nav soit le declencheur

// document.querySelector('main').addEventListener('click',(el) => {
//     var el = el.target;
//    // console.log(el);  // pour debug
//     el.classList.add('green');
// })

// //onmouseover recup element id $name
// var section = document.getElementsByTagName("section");
// var name = section.getAttribute("id");
// var navbar = ["presentation","realisation","activite","competence","contact"]
// while(navbar.includes(name)) {
// //    modif class $name to hover
// var button = document.getElementsByClassName(name);
// button.style.backgroundColor = "#020202";
// }
// else
// all class concerned defaul

