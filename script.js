function createMeasureDiv(id, top, left, width, height) {
  var measure = document.createElement("div");
  measure.textContent = " ";
  measure.setAttribute("id", id);
  measure.style.cssText = `position:absolute;height:${height}px;width:${width}px;top:${top}px;left:${left}px;overflow:none;z-index:-100;`;
  document.body.appendChild(measure);
  return measure;
}

function createExtendedPopUp(top, left, width, height) {
  var extended_pop_up = document.createElement("div");
  extended_pop_up.setAttribute("id", "full_bolor");
  extended_pop_up.style.cssText = `position:absolute;display:block;top:${top}px;left:${left}px;width:${width}px;height:${height}px;background: white; border-radius: 10px; border: 1px solid grey;overflow: auto;z-index:10000`;
  document.body.appendChild(extended_pop_up);
  return extended_pop_up;
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

function singleWordDiv() {
  var h1 = document.createElement("div");
  h1.style.cssText =
    "padding-left: 3px; color:black;font-size: 20px;z-index:10001;";
  return h1;
}

var measure_left = createMeasureDiv("cal1", 100, 100, 0, 0);
var measure_right = createMeasureDiv("cal2", 0, 0, 0, 0);

const SELECTION_TEXT = window.getSelection();

const MEASURE_LEFT_RANGE = document.createRange();
MEASURE_LEFT_RANGE.selectNode(document.getElementById("cal1"));

const MEASURE_RIGHT_RANGE = document.createRange();
MEASURE_RIGHT_RANGE.selectNode(document.getElementById("cal2"));
var GLOBAL_IS_MOUSE_OVER = false;
var regex = /[.,\s]|'s/g;


const POP_UP_FULL_WIDTH = 250;
const POP_UP_FULL_HEIGHT = 150;
const x = window.innerWidth / 2;
const y = window.innerHeight / 2;

window.addEventListener("mouseup", () => {
  if (!SELECTION_TEXT.isCollapsed) {
    let selection_text_area =
      SELECTION_TEXT.getRangeAt(0).getBoundingClientRect();
    let measured_left_range_rect = MEASURE_LEFT_RANGE.getBoundingClientRect();
    let measured_right_range_rect = MEASURE_RIGHT_RANGE.getBoundingClientRect();
    console.log(selection_text_area);

    var top =
      ((selection_text_area.bottom - measured_right_range_rect.top) * 100) /
        (measured_left_range_rect.top - measured_right_range_rect.top) +
      10;
    var left =
      ((selection_text_area.left - measured_right_range_rect.left) * 100) /
      (measured_left_range_rect.left - measured_right_range_rect.left);
    var img = document.createElement("img");
    img.setAttribute("id", "img_bolor_toli_extension");
    img.setAttribute("src", "https://bolor-toli.com/icons/logo.svg");
    img.style.cssText = "cursor:pointer;";
    img.style.width = "18px";
    img.style.height = "20px";
    img.style.borderRadius = "3px";

    img.onclick = async function () {
      let left =
        selection_text_area.left +
        selection_text_area.width / 2 -
        POP_UP_FULL_HEIGHT / 2;

      let extended_pop_up = createExtendedPopUp(
        top,
        left,
        POP_UP_FULL_WIDTH,
        POP_UP_FULL_HEIGHT
      );
      document.body.appendChild(extended_pop_up);
      var get_extended_pop_up = document.getElementById("full_bolor");
      var rect = get_extended_pop_up.getBoundingClientRect();

      var isOut = isOutOfViewport(get_extended_pop_up);
      console.log(isOut);
      if (y < selection_text_area.y) {
        get_extended_pop_up.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.top) {
        get_extended_pop_up.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.bottom) {
        get_extended_pop_up.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.left) {
        get_extended_pop_up.style.left = 10 + "px";
      }
      if (isOut.right) {
        get_extended_pop_up.style.left = null;
        get_extended_pop_up.style.right = 10 + "px";
      }
      console.log(SELECTION_TEXT.toString());
      var sending_text = SELECTION_TEXT.toString().toLowerCase().trim();
      sending_text = sending_text.replace(regex, '');
      var data = getData(sending_text)
        .then((data) => {
          return JSON.parse(data);
        })
        .catch((e) => console.log(e));

      var fetchedData = await data;

      console.log(fetchedData);
      if (fetchedData.type == "error") {
        var error = createErrorDiv();
        get_extended_pop_up.appendChild(error);
      } else if (fetchedData.data.er_cnt == 0 && fetchedData.data.sr_cnt == 0) {
        var empty = createEmptyDiv();
        get_extended_pop_up.appendChild(empty);
      } else if (fetchedData.data.er_cnt != 0) {
        var translates = fetchedData.data.er;
        for (var i = 0; i < translates.length; i++) {
          var words = translates[i].w.vars[0].w;
          var h1 = singleWordDiv();
          const textNode = document.createTextNode(words);
          h1.appendChild(textNode);
          get_extended_pop_up.appendChild(h1);
        }
      } else {
        var suggestions = fetchedData.data.sr;
        console.log("suggestions");
        for (var i = 0; i < suggestions.length; i++) {
          var row = document.createElement("div");
          var column_1 = document.createElement("div");
          var column_2 = document.createElement("div");
          row.style.cssText = "display: flex;";
          column_1.style.cssText =
            "flex: 50%;padding: 2px;height: auto;color:black;";
          column_2.style.cssText =
            "flex: 50%;padding: 2px;height: auto;color:black;";
          const suggest_w = document.createTextNode(suggestions[i].t.vars[0].w);
          const suggest_t_w = document.createTextNode(
            suggestions[i].w.vars[0].w
          );
          column_1.appendChild(suggest_w);
          column_2.appendChild(suggest_t_w);
          row.appendChild(column_1);
          row.appendChild(column_2);
          get_extended_pop_up.appendChild(row);

          console.log(suggestions[i].t.vars[0].w);
          console.log(suggestions[i].w.vars[0].w);
        }
      }
    };
    var pop_up = document.createElement("div");
    pop_up.setAttribute("id", "popup");

    pop_up.style.cssText = `position:absolute;border:grey solid 1px; border-radius: 5px; background:white;top:${
      top + "px"
    };left:${left + "px"};z-index: 1000;width:20px;height:23px;`;
    pop_up.appendChild(img);

    pop_up.addEventListener("mouseover", function () {
      GLOBAL_IS_MOUSE_OVER = true;
    });
    pop_up.addEventListener("mouseout", function () {
      GLOBAL_IS_MOUSE_OVER = false;
    });
    if (GLOBAL_IS_MOUSE_OVER == false) {
      document.body.appendChild(pop_up);
    } else {
      pop_up.remove();
    }
  }
});
function checkElementAndRemove(element) {
  if (typeof element != "undefined" && element != null) {
    element.remove();
  }
}
window.addEventListener("mousedown", function () {
  let full_bolor = document.getElementById("full_bolor");
  let popup = document.getElementById("popup");
  let img = document.getElementById("img_bolor_toli_extension");
  checkElementAndRemove(full_bolor);
  console.log(GLOBAL_IS_MOUSE_OVER);
  if (!GLOBAL_IS_MOUSE_OVER) {
    checkElementAndRemove(popup);
    checkElementAndRemove(img);
  }
});
var isOutOfViewport = function (pop_up) {
  // Get element's bounding
  var bounding = pop_up.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  var out = {};
  out.m_right =
    (window.innerWidth || document.documentElement.clientWidth) -
    bounding.right;
  out.m_left = bounding.left;
  out.top_w = bounding.top;
  out.bottom_w =
    (window.innerHeight || document.documentElement.clientHeight) -
    bounding.bottom;
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom =
    bounding.bottom >
    (window.innerHeight || document.documentElement.clientHeight);
  out.right =
    bounding.right >
    (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  out.all = out.top && out.left && out.bottom && out.right;

  return out;
};
function Hash() {
  Hash.prototype.getSHA256Hash = async function (input) {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest(
      "SHA-256",
      textAsBuffer
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");
    return hash;
  };

  Hash.prototype.printValue = function (s) {
    let result = 50;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
      counter++;
      result += s.codePointAt(i) + 1;
    }
    return result.toString();
  };
  Hash.prototype.getHash = function (s) {
    const x = this.printValue(s);
    return this.getSHA256Hash(x).then((hash) => {
      return hash;
    });
  };
}
async function getData(word) {
  var hash = new Hash();
  var hashtxt = "";
  await hash.getHash(word).then((data) => (hashtxt = data));
  console.log(hashtxt);
  const response = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word: word,
  });
  // do something with response here, not outside the function
  return JSON.stringify(response);
}
