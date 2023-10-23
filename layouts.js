const POP_UP_FULL_WIDTH = 250;
const POP_UP_FULL_HEIGHT = 150;
const x = window.innerWidth / 2;
const y = window.innerHeight / 2;

function singleWordDiv() {
  var h1 = document.createElement("div");
  h1.style.cssText =
    "padding-left: 3px; color:black;font-size: 20px;z-index:10001;";
  return h1;
}

function imgDiv() {
  var img = document.createElement("img");
  img.setAttribute("src", "https://bolor-toli.com/icons/logo.svg");
  img.style.cssText = "cursor:pointer;";
  img.style.width = "18px";
  img.style.height = "20px";
  img.style.borderRadius = "3px";
  return img;
}

function getImg() {
  var img = document.getElementById("img_bolor_toli_extension");
  return img;
}

function createEmptyDiv() {
  var empty = document.createElement("div");
  empty.style.cssText = "padding: 5px;";
  const empty_text = document.createTextNode("Олдсонгүй");
  empty.appendChild(empty_text);
  return empty;
}

function createErrorDiv() {
  var empty = document.createElement("div");
  empty.style.cssText = "padding: 5px;";
  const empty_text = document.createTextNode("Алдаа гарлаа");
  empty.appendChild(empty_text);
  return empty;
}

function getExtendedPopUp() {
  var extended_pop_up = document.getElementById("extended_pop_up");
  return extended_pop_up;
}
