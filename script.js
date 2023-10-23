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
  extended_pop_up.setAttribute("id", "extended_pop_up");
  extended_pop_up.style.cssText = `position:absolute;display:block;top:${top}px;left:${left}px;width:${width}px;height:${height}px;background: white; border-radius: 10px; border: 1px solid grey;overflow: auto;z-index:10000`;
  document.body.appendChild(extended_pop_up);
  return extended_pop_up;
}

var measure_left = createMeasureDiv("cal1", 100, 100, 0, 0);
var measure_right = createMeasureDiv("cal2", 0, 0, 0, 0);

const SELECTION_TEXT = window.getSelection();

const MEASURE_LEFT_RANGE = document.createRange();
MEASURE_LEFT_RANGE.selectNode(document.getElementById("cal1"));

const MEASURE_RIGHT_RANGE = document.createRange();
MEASURE_RIGHT_RANGE.selectNode(document.getElementById("cal2"));
var GLOBAL_IS_MOUSE_OVER = false;

window.addEventListener("mouseup", () => {
  createDiv();
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

    var img = imgDiv();

    img.onclick = async function () {
      let left =
        selection_text_area.left +
        selection_text_area.width / 2 -
        POP_UP_FULL_HEIGHT / 2;

      let extendedPopUp = createExtendedPopUp(
        top,
        left,
        POP_UP_FULL_WIDTH,
        POP_UP_FULL_HEIGHT
      );
      document.body.appendChild(extendedPopUp);
      var getExtendedPopUp = document.getElementById("extended_pop_up");

      var isOut = isOutOfViewport(getExtendedPopUp);
      // console.log(isOut);
      if (y < selection_text_area.y) {
        getExtendedPopUp.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.top) {
        getExtendedPopUp.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.bottom) {
        getExtendedPopUp.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.left) {
        getExtendedPopUp.style.left = 10 + "px";
      }
      if (isOut.right) {
        getExtendedPopUp.style.left = null;
        getExtendedPopUp.style.right = 10 + "px";
      }
      var sending_text = SELECTION_TEXT.toString().toLowerCase().trim();
      sending_text = sending_text.replace(regex, "");

      var data = getData(sending_text)
        .then((data) => {
          return JSON.parse(data);
        })
        .catch((e) => console.log(e));

      var fetchedData = await data;

      console.log(fetchedData);
      if (fetchedData.type == "error") {
        var error = createErrorDiv();
        getExtendedPopUp.appendChild(error);
      } else if (fetchedData.data.er_cnt == 0 && fetchedData.data.sr_cnt == 0) {
        var empty = createEmptyDiv();
        getExtendedPopUp.appendChild(empty);
      } else if (fetchedData.data.er_cnt != 0) {
        var translates = fetchedData.data.er;
        for (var i = 0; i < translates.length; i++) {
          var words = translates[i].w.vars[0].w;
          var h1 = singleWordDiv();
          const textNode = document.createTextNode(words);
          h1.appendChild(textNode);
          getExtendedPopUp.appendChild(h1);
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
          getExtendedPopUp.appendChild(row);

          console.log(suggestions[i].t.vars[0].w);
          console.log(suggestions[i].w.vars[0].w);
        }
      }
    }; // end of img.onclick;

    var popUp = document.createElement("div");
    popUp.setAttribute("id", "popup");

    popUp.style.cssText = `position:absolute;border:grey solid 1px; border-radius: 5px; background:white;top:${
      top + "px"
    };left:${left + "px"};z-index: 1000;width:20px;height:23px;`;
    popUp.appendChild(img);

    popUp.addEventListener("mouseover", function () {
      GLOBAL_IS_MOUSE_OVER = true;
    });
    popUp.addEventListener("mouseout", function () {
      GLOBAL_IS_MOUSE_OVER = false;
    });
    if (GLOBAL_IS_MOUSE_OVER == false) {
      document.body.appendChild(popUp);
    } else {
      popUp.remove();
    }
  }
});
window.addEventListener("mousedown", function () {
  let extendedPopUp = getExtendedPopUp();

  let popup = document.getElementById("popup");
  let img = getImg();
  checkElementAndRemove(extendedPopUp);
  if (!GLOBAL_IS_MOUSE_OVER) {
    checkElementAndRemove(popup);
    checkElementAndRemove(img);
  }
});
