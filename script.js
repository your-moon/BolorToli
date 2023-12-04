function createMeasureDiv(id, top, left, width, height) {
  var measure = document.createElement("div");
  measure.textContent = " ";
  measure.setAttribute("id", id);
  measure.style.cssText = `position:absolute;height:${height}px;width:${width}px;top:${top}px;left:${left}px;overflow:none;z-index:-100;`;
  document.body.appendChild(measure);
  return measure;
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

    var img = createImgDiv();

    img.onclick = async function () {
      let left =
        selection_text_area.left +
        selection_text_area.width / 2 -
        POP_UP_FULL_HEIGHT / 2;

      let extendedPopUp = createExtendedPopUp(
        top,
        left,
        POP_UP_FULL_WIDTH,
        POP_UP_FULL_HEIGHT,
      );
      document.body.appendChild(extendedPopUp);
      extendedPopUp = getExtendedPopUp();

      var isOut = isOutOfViewport(extendedPopUp);
      if (y < selection_text_area.y) {
        extendedPopUp.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.top) {
        extendedPopUp.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.bottom) {
        extendedPopUp.style.top =
          top - 10 - selection_text_area.height - POP_UP_FULL_HEIGHT - 5 + "px";
      }
      if (isOut.left) {
        extendedPopUp.style.left = 10 + "px";
      }
      if (isOut.right) {
        extendedPopUp.style.left = null;
        extendedPopUp.style.right = 10 + "px";
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
        extendedPopUp.appendChild(error);
      } else if (fetchedData.data.er_cnt == 0 && fetchedData.data.sr_cnt == 0) {
        var empty = createEmptyDiv();
        extendedPopUp.appendChild(empty);
      } else if (fetchedData.data.er_cnt != 0) {
        var translates = fetchedData.data.er;
        for (var i = 0; i < translates.length; i++) {
          var words = translates[i].w.vars[0].w;
          var h1 = createSingleWordDiv();
          const textNode = document.createTextNode(words);
          h1.appendChild(textNode);
          extendedPopUp.appendChild(h1);
        }
      } else {
        var suggestions = fetchedData.data.sr;
        console.log("suggestions");
        for (var i = 0; i < suggestions.length; i++) {
          var row = createSuggestionRow();
          var column_1 = createSuggestionColumn();
          var column_2 = createSuggestionColumn();
          const suggest_w = document.createTextNode(suggestions[i].t.vars[0].w);
          const suggest_t_w = document.createTextNode(
            suggestions[i].w.vars[0].w,
          );
          column_1.appendChild(suggest_w);
          column_2.appendChild(suggest_t_w);
          row.appendChild(column_1);
          row.appendChild(column_2);
          extendedPopUp.appendChild(row);

          console.log(suggestions[i].t.vars[0].w);
          console.log(suggestions[i].w.vars[0].w);
        }
      }

      extendedPopUp.addEventListener("mouseover", function () {
        GLOBAL_IS_MOUSE_OVER = true;
      });
      extendedPopUp.addEventListener("mouseout", function () {
        GLOBAL_IS_MOUSE_OVER = false;
      });
    }; // end of img.onclick;

    let popUp = createPopUp(top, left);
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
  if (!GLOBAL_IS_MOUSE_OVER) {
    checkElementAndRemove(extendedPopUp);
    checkElementAndRemove(popup);
    checkElementAndRemove(img);
  }
});
