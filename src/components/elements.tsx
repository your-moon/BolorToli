import { setMouseOver } from "../content/content";

function createSingleWordDiv() {
  var h1 = document.createElement("div");
  h1.setAttribute("id", "single_word_div");
  return h1;
}

function getImg() {
  var img = document.getElementById("img_bolor_toli_extension");
  return img;
}

function createImgDiv() {
  var img = document.createElement("img");

  img.setAttribute("src", "https://bolor-toli.com/icons/logo.svg");
  img.setAttribute("id", "img_bolor_toli_extension");
  return img;
}

function createEmptyDiv() {
  var empty = document.createElement("div");
  empty.setAttribute("id", "empty_div");
  const empty_text = document.createTextNode("Олдсонгүй");
  empty.appendChild(empty_text);
  return empty;
}

function createErrorDiv() {
  var error = document.createElement("div");
  error.setAttribute("id", "error_div");
  const empty_text = document.createTextNode("Алдаа гарлаа");
  error.appendChild(empty_text);
  return error;
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
function createMeasureDiv(
  id: string,
  top: number,
  left: number,
  width: number,
  height: number,
) {
  var measure = document.createElement("div");
  measure.textContent = " ";
  measure.setAttribute("id", id);
  measure.style.cssText = `position:absolute;height:${height}px;width:${width}px;top:${top}px;left:${left}px;overflow:none;z-index:-100;`;
  document.body.appendChild(measure);
  return measure;
}

function createPopUpElement(top: number, left: number) {
  var popUp = document.createElement("div");
  popUp.setAttribute("id", "popup");

  popUp.style.cssText = `position:absolute;border:grey solid 1px; border-radius: 5px; background:white;top:${
    top + "px"
  };left:${left + "px"};z-index: 1000;width:20px;height:23px;`;

  popUp.addEventListener("mouseover", function () {
    setMouseOver(true);
  });
  popUp.addEventListener("mouseout", function () {
    setMouseOver(false);
  });

  return popUp;
}

export {
  createSingleWordDiv,
  createImgDiv,
  createEmptyDiv,
  createErrorDiv,
  createSuggestionColumn,
  createSuggestionRow,
  createMeasureDiv,
  createPopUpElement,
  getImg,
};
