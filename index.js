class Navbar {
  constructor(target, menu) {
    if (target instanceof HTMLElement && menu instanceof HTMLElement) {
      this.btn = target;
      this.menu = menu;

      this.btn.addEventListener("click", () => {
        this.open();
      });
    } else {
      throw new TypeError(
        "The Target and Menu arguments must be a DOM element."
      );
    }
  }
  open() {
    if (this.isopen) {
      this.menu.classList.add("nav-hidden");
    } else {
      this.menu.classList.remove("nav-hidden");
    }

    this.isopen = !this.isopen;
  }
}
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var para1 = document.querySelector(".para1");
var para2 = document.querySelector(".para2");
var ro1 = document.querySelector(".ro1");
var ro2 = document.querySelector(".ro2");
var nav_part = document.querySelector(".nav-part");
var card_part = document.querySelector(".card-part");
var card_part2 = document.querySelector(".card-part2");

fetch("./file.json")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    result.map((item) => {
      box1.innerHTML +=
        '<div class="box_info"><img src=' +
        item.box1img +
        '  class="box1_img"><span class="box1_info">' +
        item.box1heading +
        "</span></div>";
      box2.innerHTML +=
        '<div class="box_info"><img src=' +
        item.box2img +
        ' class="box2_img"><span class="box2_info">' +
        item.box2heading +
        "</span></div>";
      box3.innerHTML +=
        '<div class="box_info"><img src=' +
        item.box3img +
        ' class="box3_img"><span class="box3_info">' +
        item.box3heading +
        "</span></div>";
      para1.innerHTML +=
        '<div class="ele"><h2>' +
        item.para1heading +
        '</h2></div><p class="para1_info">' +
        item.para1para +
        "</p>";
      para2.innerHTML +=
        '<div class="hea"><h2>' +
        item.para2heading +
        '</h2></div> <h5 class="p2">' +
        item.para2para +
        "</h5>";
      ro1.innerHTML +=
        '<div class="f1"><i class="lni lni-checkmark-circle"></i>  <span class="point">' +
        item.f1heading +
        '</span></div><div class="s1"><i class="lni lni-checkmark-circle"></i>  <span class="point">' +
        item.s1heading +
        "</span></div>";
      ro2.innerHTML +=
        '<div class="f2"><i class="lni lni-checkmark-circle"></i>  <span class="point">' +
        item.f2heading +
        '</span></div><div class=" s2"><i class="lni lni-checkmark-circle"></i>  <span class="point">' +
        item.s2heading +
        "</span></div>";
      nav_part.innerHTML +=
        '<div class="heading"><div class="heading-text">' +
        item.headingText +
        '</div></div><p class="works">' +
        item.works +
        '<span class="main"> <a class="link" onclick="one()"><span class="navigate active">' +
        item.navigate +
        '</span></a ><a class="link"  onclick="two()"><span class="other-navigate">' +
        item.otherNavigate +
        "</span></a></span></p>";

      for (var i = 0; i < item.cards.length / 2; i++) {
        card_part.innerHTML +=
          '<div class="float-container"><div class="card1 float-child"><div class="card-data"><p class="card-desc">' +
          item.cards[i].cardDesc +
          '</p><p class="card-desc-sec">' +
          item.cards[i].cardDescSec +
          '</p><span class="group"><span class="keyword">' +
          item.cards[i].keyword +
          '</span><span class="keyword">' +
          item.cards[i].keyword1 +
          '</span><span class="keyword">' +
          item.cards[i].keyword2 +
          '</span></span></div><div class="image"><img class="card-img"src="' +
          item.cards[i].src +
          '"alt=""/></div></div></div>';
      }
      for (var i = item.cards.length / 2; i < item.cards.length; i++) {
        card_part.innerHTML +=
          '<div class="float-container2"><div class="card1 float-child"><div class="card-data"><p class="card-desc">' +
          item.cards[i].cardDesc +
          '</p><p class="card-desc-sec">' +
          item.cards[i].cardDescSec +
          '</p><span class="group"><span class="keyword">' +
          item.cards[i].keyword +
          '</span><span class="keyword">' +
          item.cards[i].keyword1 +
          '</span><span class="keyword">' +
          item.cards[i].keyword2 +
          '</span></span></div><div class="image"><img class="card-img"src="' +
          item.cards[i].src +
          '"alt=""/></div></div></div>';
      }

      for (var i = 0; i < item.cardsWeb.length / 2; i++) {
        card_part2.innerHTML +=
          '<div class="float-container"><div class="card1 float-child"><div class="card-data"><p class="card-desc">' +
          item.cardsWeb[i].cardDesc +
          '</p><p class="card-desc-sec">' +
          item.cardsWeb[i].cardDescSec +
          '</p><span class="group"><span class="keyword">' +
          item.cardsWeb[i].keyword +
          '</span><span class="keyword">' +
          item.cardsWeb[i].keyword1 +
          '</span><span class="keyword">' +
          item.cardsWeb[i].keyword2 +
          '</span></span></div><div class="image"><img class="card-img"src="' +
          item.cardsWeb[i].src +
          '"alt=""/></div></div></div>';
      }
      for (var i = item.cardsWeb.length / 2; i < item.cardsWeb.length; i++) {
        card_part2.innerHTML +=
          '<div class="float-container2"><div class="card1 float-child"><div class="card-data"><p class="card-desc">' +
          item.cardsWeb[i].cardDesc +
          '</p><p class="card-desc-sec">' +
          item.cardsWeb[i].cardDescSec +
          '</p><span class="group"><span class="keyword">' +
          item.cardsWeb[i].keyword +
          '</span><span class="keyword">' +
          item.cardsWeb[i].keyword1 +
          '</span><span class="keyword">' +
          item.cardsWeb[i].keyword2 +
          '</span></span></div><div class="image"><img class="card-img"src="' +
          item.cardsWeb[i].src +
          '"alt=""/></div></div></div>';
      }
    });
  });

document.getElementById("card2").style.display = "none";

var x = document.getElementById("card1");
var y = document.getElementById("card2");
function two() {
  x.style.display = "none";
  y.style.display = "block";
}
function one() {
  y.style.display = "none";
  x.style.display = "block";
}
