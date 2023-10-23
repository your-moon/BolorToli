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

function createPopUp(top, left) {
  var popUp = document.createElement("div");
  popUp.setAttribute("id", "popup");

  popUp.style.cssText = `position:absolute;border:grey solid 1px; border-radius: 5px; background:white;top:${
    top + "px"
  };left:${left + "px"};z-index: 1000;width:20px;height:23px;`;
  return popUp;
}

function createSuggestionColumn() {
  let column = document.createElement("div");
  column.style.cssText = "flex: 50%;padding: 2px;height: auto;color:black;";
  return column;
}

function createSuggestionRow() {
  let row = document.createElement("div");
  row.style.cssText =
    "display: flex;flex-direction: row;justify-content: space-between;";
  return row;
}

function createExtendedPopUp(top, left, width, height) {
  var extended_pop_up = document.createElement("div");
  extended_pop_up.setAttribute("id", "extended_pop_up");
  extended_pop_up.style.cssText = `position:absolute;display:block;top:${top}px;left:${left}px;width:${width}px;height:${height}px;background: white; border-radius: 10px; border: 1px solid grey;overflow: auto;z-index:10000`;
  document.body.appendChild(extended_pop_up);
  return extended_pop_up;
}
