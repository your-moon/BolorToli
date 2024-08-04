function createSingleWordDiv() {
  var word = document.createElement("div");
  word.setAttribute("id", "single_word_div");
  word.style.setProperty("display", "flex");
  word.style.setProperty("flex-direction", "row");
  word.style.setProperty("justify-content", "space-between");
  word.style.setProperty("padding", "2px");
  word.style.setProperty("gap", "5px");
  return word;
}

function getImg() {
  var img = document.getElementById("img_bolor_toli_extension");
  return img;
}

function bolorLogo() {
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

  column.style.setProperty("flex", "50%");
  column.style.setProperty("padding", "2px");
  column.style.setProperty("height", "auto");
  column.style.setProperty("color", "black");

  return column;
}

function createSuggestionRow() {
  let row = document.createElement("div");

  row.setAttribute("id", "suggestion_row");
  row.style.setProperty("display", "flex");
  row.style.setProperty("flex-direction", "row");
  row.style.setProperty("justify-content", "space-between");

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

  measure.style.setProperty("position", "absolute");
  measure.style.setProperty("height", `${height}px`);
  measure.style.setProperty("width", `${width}px`);
  measure.style.setProperty("top", `${top}px`);
  measure.style.setProperty("left", `${left}px`);
  measure.style.setProperty("overflow", "none");
  measure.style.setProperty("z-index", "-100");

  document.body.appendChild(measure);
  return measure;
}
export {
  createSingleWordDiv,
  createEmptyDiv,
  bolorLogo,
  createErrorDiv,
  createSuggestionColumn,
  createSuggestionRow,
  createMeasureDiv,
  getImg,
};
