// tady je místo pro náš program

let odstavec = document.querySelector('.lev');

function cervenePismo() {
  odstavec.classList.toggle('cervene');
}

let velikostFontu = 18;

function vetsiPismo() {
  velikostFontu = velikostFontu + 1;
  odstavec.style.fontSize = velikostFontu + 'px';
}

let zvuk;
zvuk = document.querySelector('#zvuk');

function prehraj() {
  zvuk.play();
}

function zastav() {
  zvuk.pause();
}

function nastavZvukJedna() {
  zvuk.volume = 1;
}

function nastavZvukPul() {
  zvuk.volume = 0.5;
}

function nastavZvukNula() {
  zvuk.volume = 0;
}

function prehrajOdZacatku() {
  zvuk.load();
  zvuk.play();
}

// nastavení zvuku na 0, 0.5 a 1
// vrácení se na začátek


// function ztucni(udalost){
//   udalost.target.classList.add('tucny');
//   udalost.target.style.fontWeight = 'bold';
// }