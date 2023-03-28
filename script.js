var rel1_t = document.createElement("div");
rel1_t.textContent = " ";
rel1_t.setAttribute("id", "cal1");
rel1_t.style.cssText =
  "position:absolute;height:0px;width:0px;top:100px;left:100px;overflow:none;z-index:-100;";
document.body.appendChild(rel1_t);

var rel2_t = document.createElement("div");
rel2_t.textContent = " ";
rel2_t.setAttribute("id", "cal2");
rel2_t.style.cssText =
  "position:absolute;height:0px;width:0px;top:0px;left:0px;overflow:none;z-index:-100;";
document.body.appendChild(rel2_t);

var sel = window.getSelection();
console.log(sel);
var rel1 = document.createRange();
rel1.selectNode(document.getElementById("cal1"));
var rel2 = document.createRange();
rel2.selectNode(document.getElementById("cal2"));
let isMouseOver = false;
var pop_up_full_width = 250;
var pop_up_full_height = 150;
window.addEventListener("mouseup", () => {
  if (!sel.isCollapsed) {
    var r = sel.getRangeAt(0).getBoundingClientRect();
    var rb1 = rel1.getBoundingClientRect();
    var rb2 = rel2.getBoundingClientRect();
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    console.log(r);

    var top = ((r.bottom - rb2.top) * 100) / (rb1.top - rb2.top) + 10; 
    var left = ((r.left - rb2.left) * 100) / (rb1.left - rb2.left); 
    var img = document.createElement("img");
    img.setAttribute("id", "img_bolor_toli_extension");
    img.setAttribute("src", "https://bolor-toli.com/icons/logo.svg");
    img.onclick = async function () {
      var pop_up_full = document.createElement("div");
      pop_up_full.setAttribute("id", "full_bolor");
      pop_up_full.style.cssText = `position:absolute;display:block;top:${
        top + "px"
      };left:${r.left + r.width / 2 - pop_up_full_width / 2 + "px"};width:${
        pop_up_full_width + "px"
      };height:${
        pop_up_full_height + "px"
      };background: white; border: 1px solid grey;overflow: auto;z-index:10000`;
      document.body.appendChild(pop_up_full);
      var pop_up_ful_z = document.getElementById("full_bolor");
      var rect = pop_up_ful_z.getBoundingClientRect();

      var isOut = isOutOfViewport(pop_up_ful_z);
      console.log(isOut);
      if (y < r.y) {
        pop_up_ful_z.style.top =
          top - 10 - r.height - pop_up_full_height - 5 + "px";
      }
      if (isOut.top) {
        pop_up_ful_z.style.top =
          top - 10 - r.height - pop_up_full_height - 5 + "px";
      }
      if (isOut.bottom) {
        pop_up_ful_z.style.top =
          top - 10 - r.height - pop_up_full_height - 5 + "px";
      }
      if (isOut.left) {
        pop_up_ful_z.style.left = 10 + "px";
      }
      if (isOut.right) {
        pop_up_ful_z.style.left = null;
        pop_up_ful_z.style.right = 10 + "px";
      }
      console.log(sel.toString())
      var data = getData(sel.toString().toLowerCase()).then((data) => {
        return JSON.parse(data);
      }).catch(e => console.log(e));
      
      var fetchedData = await data;
      console.log(fetchedData)
      if(fetchedData.data.er_cnt == 0 && fetchedData.data.sr_cnt == 0 ) {
        var empty = document.createElement("div");
        empty.style.cssText = "padding: 5px;"
        const empty_text = document.createTextNode("Олдсонгүй");
        empty.appendChild(empty_text)
        pop_up_ful_z.appendChild(empty);
      }
      else if(fetchedData.data.er_cnt != 0) {
        var translates = fetchedData.data.er;
        for (var i = 0; i < translates.length; i++) {
          var words = translates[i].w.vars[0].w;
          var h1 = document.createElement("div");
          h1.style.cssText="color:black;font-size: 20px;z-index:10001;"
          const textNode = document.createTextNode(words);
          h1.appendChild(textNode);
          pop_up_ful_z.appendChild(h1);
        }
      }
      else {
        var suggestions = fetchedData.data.sr;
        console.log("suggestions");
        for(var i =0; i< suggestions.length; i++) {
          var row = document.createElement("div");
          var column_1 = document.createElement("div");
          var column_2 = document.createElement("div");
          row.style.cssText = "display: flex;"
          column_1.style.cssText = "flex: 50%;padding: 2px;height: auto;color:black;"
          column_2.style.cssText = "flex: 50%;padding: 2px;height: auto;color:black;"
          const suggest_w = document.createTextNode(suggestions[i].t.vars[0].w);
          const suggest_t_w = document.createTextNode(suggestions[i].w.vars[0].w);
          column_1.appendChild(suggest_w)
          column_2.appendChild(suggest_t_w)
          row.appendChild(column_1)
          row.appendChild(column_2)
          pop_up_ful_z.appendChild(row);

          console.log(suggestions[i].t.vars[0].w);
          console.log(suggestions[i].w.vars[0].w);
        }
      }
      
    };
    img.style.cssText = "cursor:pointer;";
    img.style.width = "20px";
    img.style.height = "20px";

    var elem = document.createElement("div");
    elem.setAttribute("id", "popup");

    elem.style.cssText = `position:absolute;border:grey solid 1px;background:white;top:${
      top + "px"
    };left:${left + "px"};z-index: 1000;width:20px;height:23px;`;
    elem.appendChild(img);

    elem.addEventListener("mouseover", function () {
      isMouseOver = true;
    });
    elem.addEventListener("mouseout", function () {
      isMouseOver = false;
    });
    if (isMouseOver == false) {
      document.body.appendChild(elem);
    } else {
      elem.remove();
      let img = document.getElementById("img_bolor_toli_extension");
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
  console.log(isMouseOver);
  if (!isMouseOver) {
    checkElementAndRemove(popup);
    checkElementAndRemove(img);
  }
});
var isOutOfViewport = function (elem) {
  // Get element's bounding
  var bounding = elem.getBoundingClientRect();

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
