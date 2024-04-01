import { TranslationSerde, TranslationStatus } from "../Serialization";
import {
  createEmptyDiv,
  createErrorDiv,
  createSingleWordDiv,
  createSuggestionColumn,
  createSuggestionRow,
} from "../popUpComponents/elements";
import {
  createExtendedPopUpAppend,
  extendedPopUpOverflowHandle,
} from "../popUpComponents/extendedPopUp";
import { getData, getWordsFromData } from "../utils/data";
import { regex } from "../utils/util";
import { POP_UP_FULL_HEIGHT, SELECTION_TEXT, setMouseOver } from "./content";

const leftPosition = (selectionTextAreaRect: DOMRect) => {
  let extendedPopUpLeftPosition =
    selectionTextAreaRect.left +
    selectionTextAreaRect.width / 2 -
    POP_UP_FULL_HEIGHT / 2;
  return extendedPopUpLeftPosition;
};

export async function handleImgClick(
  selectionTextAreaRect: DOMRect,
  selectionAreaTopPosition: number,
) {
  let extendedPopUpLeftPosition = leftPosition(selectionTextAreaRect);

  const extendedPopUp = createExtendedPopUpAppend(
    selectionAreaTopPosition,
    extendedPopUpLeftPosition,
  );

  extendedPopUpOverflowHandle(
    selectionTextAreaRect,
    selectionAreaTopPosition,
    extendedPopUp,
  );
  let sendingText = SELECTION_TEXT!.toString().toLowerCase().trim();
  sendingText = sendingText.replace(regex, "");

  const data = getData(sendingText, "1")
    .then((data) => {
      const parsed: TranslationSerde = JSON.parse(data);
      return parsed;
    })
    .catch((e) => console.log(e));

  const fetchedData = await data;

  populateExtendedPopUp(fetchedData, extendedPopUp);
}

const translationRenderer = async (data: TranslationSerde) => {
  if (data.type === TranslationStatus.ERROR) {
    const error = createErrorDiv();
    return error;
  }

  if (data.data.er_cnt === 0 && data.data.sr_cnt === 0) {
    const empty = createEmptyDiv();
    return empty;
  }

  if (data.data.er_cnt !== 0) {
    const words = await getWordsFromData(data);
    const div = document.createElement("div");
    div.setAttribute("id", "single_word_wrapper");

    words.forEach((word) => {
      const h1 = createSingleWordDiv();
      const textNode = document.createTextNode(word.word);
      h1.appendChild(textNode);
      div.appendChild(h1);
    });
    return div;
  }

  if (data.data.sr_cnt !== 0) {
    const div = document.createElement("div");
    const suggestions = data.data.sr;

    suggestions.forEach((suggestion) => {
      const row = createSuggestionRow();
      const column1 = createSuggestionColumn();
      const column2 = createSuggestionColumn();
      const suggest_w = document.createTextNode(suggestion.t.vars[0].w);
      const suggest_t_w = document.createTextNode(suggestion.w.vars[0].w);
      column1.appendChild(suggest_w);
      column2.appendChild(suggest_t_w);
      row.appendChild(column1);
      row.appendChild(column2);
      div.appendChild(row);
    });
    return div;
  }
  return null;
};
async function populateExtendedPopUp(
  fetchedData: any,
  extendedPopUp: HTMLElement,
) {
  const render = await translationRenderer(fetchedData);
  if (render) {
    extendedPopUp.appendChild(render);
  }
  extendedPopUp.addEventListener("mouseover", function () {
    setMouseOver(true);
  });
  extendedPopUp.addEventListener("mouseout", function () {
    setMouseOver(false);
  });
}
