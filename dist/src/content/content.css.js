import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/content.css.js");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/vendor/vite-client.js"
const __vite__id = "/Users/munkherdene/project/chrome_extension/react_bolor_toli/src/content/content.css"
const __vite__css = "#single_word_div {\n  font-size: 20px;\n  padding-left: 3px;\n  color: black;\n  z-index: 10001;\n}\n\n#img_bolor_toli_extension {\n  cursor: pointer;\n  width: 18px;\n  height: 20px;\n  border-radius: 3px;\n}\n\n#empty_div {\n  padding: 5px;\n}\n\n#error_div {\n  padding: 5px;\n}\n\n#popup {\n  position: absolute;\n  border: black solid 2px;\n  border-radius: 5px;\n  background: white;\n  z-index: 1000;\n  width: 25px;\n  height: 28px;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
import.meta.hot.accept()
export default __vite__css
import.meta.hot.prune(() => __vite__removeStyle(__vite__id))