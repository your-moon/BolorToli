import{T as v}from"./Serialization-cdc6a098.js";import{g as w,a as _}from"./data-32ef2572.js";function x(){var t=document.createElement("div");return t.setAttribute("id","single_word_div"),t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","row"),t.style.setProperty("justify-content","space-between"),t.style.setProperty("padding","2px"),t.style.setProperty("gap","5px"),t}function P(){var t=document.getElementById("img_bolor_toli_extension");return t}function E(){var t=document.createElement("img");return t.setAttribute("src","https://bolor-toli.com/icons/logo.svg"),t.setAttribute("id","img_bolor_toli_extension"),t}function b(){var t=document.createElement("div");t.setAttribute("id","empty_div");const n=document.createTextNode("Олдсонгүй");return t.appendChild(n),t}function C(){var t=document.createElement("div");t.setAttribute("id","error_div");const n=document.createTextNode("Алдаа гарлаа");return t.appendChild(n),t}function y(){let t=document.createElement("div");return t.style.setProperty("flex","50%"),t.style.setProperty("padding","2px"),t.style.setProperty("height","auto"),t.style.setProperty("color","black"),t}function R(){let t=document.createElement("div");return t.setAttribute("id","suggestion_row"),t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","row"),t.style.setProperty("justify-content","space-between"),t}function h(t,n,e,o,i){var r=document.createElement("div");return r.textContent=" ",r.setAttribute("id",t),r.style.setProperty("position","absolute"),r.style.setProperty("height",`${i}px`),r.style.setProperty("width",`${o}px`),r.style.setProperty("top",`${n}px`),r.style.setProperty("left",`${e}px`),r.style.setProperty("overflow","none"),r.style.setProperty("z-index","-100"),document.body.appendChild(r),r}var L=/[.,\s]|'s/g;function a(t){typeof t<"u"&&t!=null&&t.remove()}var B=function(t){var n=t.getBoundingClientRect(),e={m_right:0,m_left:0,top_w:0,bottom_w:0,top:!1,left:!1,bottom:!1,right:!1,any:!1,all:!0};return e.m_right=(window.innerWidth||document.documentElement.clientWidth)-n.right,e.m_left=n.left,e.top_w=n.top,e.bottom_w=(window.innerHeight||document.documentElement.clientHeight)-n.bottom,e.top=n.top<0,e.left=n.left<0,e.bottom=n.bottom>(window.innerHeight||document.documentElement.clientHeight),e.right=n.right>(window.innerWidth||document.documentElement.clientWidth),e.any=e.top||e.left||e.bottom||e.right,e.all=e.top&&e.left&&e.bottom&&e.right,e};const D=window.innerHeight/2;function U(){var t=document.getElementById("extended_pop_up");return t}function I(t,n){var e=document.createElement("div");return e.setAttribute("id","extended_pop_up"),e.style.cssText=`top:${t}px;left:${n}px;min-width:${z}px;min-height:${l}px;`,document.body.appendChild(e),e}function N(t,n,e){var o=B(e);console.log(o),D<t.y&&(e.style.top=n-10-t.height-l-5+"px"),o.top&&(e.style.top=n-10-t.height-l-5+"px"),o.bottom&&(e.style.top=n-10-t.height-l-5+"px"),o.left&&(e.style.left="10px"),o.right&&(e.style.left="",e.style.right="10px")}function O(t,n){var e=document.createElement("div");return e.setAttribute("id","popup"),e.style.cssText=`top:${t+"px"};left:${n+"px"};`,e.addEventListener("mouseover",function(){p(!0)}),e.addEventListener("mouseout",function(){p(!1)}),e}function $(t){let n=u.getBoundingClientRect(),e=m.getBoundingClientRect();var o=(t.bottom-e.top)*100/(n.top-e.top)+10,i=(t.left-e.left)*100/(n.left-e.left);return{top:o,left:i}}function A(t){f?t.remove():document.body.appendChild(t)}function H(){f||(a(U()),a(document.getElementById("popup")),a(P()))}const S=t=>t.left+t.width/2-l/2;async function W(t,n){let e=S(t);const o=I(n,e);N(t,n,o);let i=c.toString().toLowerCase().trim();i=i.replace(L,"");const s=await w(i,"1").then(d=>JSON.parse(d)).catch(d=>console.log(d));k(s,o)}async function k(t,n){const e=await M(t);e&&n.appendChild(e),n.addEventListener("mouseover",function(){p(!0)}),n.addEventListener("mouseout",function(){p(!1)})}const M=async t=>{if(t.type===v.ERROR)return C();if(t.data.er_cnt===0&&t.data.sr_cnt===0)return b();if(t.data.er_cnt!==0){const n=await _(t),e=document.createElement("div");return e.setAttribute("id","single_word_wrapper"),n.forEach(o=>{const i=x(),r=document.createElement("div");r.appendChild(document.createTextNode(o.word));const s=document.createElement("div");s.style.setProperty("color","black"),s.style.setProperty("font-size","small"),s.style.setProperty("padding-left","4px"),s.style.setProperty("padding-right","4px"),s.style.setProperty("border-radius","8px"),s.style.setProperty("background-color","#f0f0f0"),s.style.setProperty("min-width","50px"),s.style.setProperty("text-align","center"),s.appendChild(document.createTextNode(o.tag)),i.append(r,s),e.appendChild(i)}),e}if(t.data.sr_cnt!==0){const n=document.createElement("div");return t.data.sr.forEach(o=>{const i=R(),r=y(),s=y(),d=document.createTextNode(o.t.vars[0].w),g=document.createTextNode(o.w.vars[0].w);r.appendChild(d),s.appendChild(g),i.appendChild(r),i.appendChild(s),n.appendChild(i)}),n}return null};function T(t){const n=u.getBoundingClientRect(),e=m.getBoundingClientRect();return(t.bottom-e.top)*100/(n.top-e.top)+10}const F=()=>{if(!(c!=null&&c.isCollapsed)){const t=c.getRangeAt(0).getBoundingClientRect(),n=T(t),e=E();e.addEventListener("click",function(){W(t,n)});const o=$(t),i=O(o.top,o.left);i.appendChild(e),A(i)}};function j(){H()}const z=250,l=150;h("cal1",100,100,0,0);h("cal2",0,0,0,0);const c=window.getSelection(),u=document.createRange();u.selectNode(document.getElementById("cal1"));const m=document.createRange();m.selectNode(document.getElementById("cal2"));let f=!1;function p(t){f=t}window.addEventListener("mouseup",()=>{F()});window.addEventListener("mousedown",function(){j()});export{l as POP_UP_FULL_HEIGHT,z as POP_UP_FULL_WIDTH,c as SELECTION_TEXT,f as isMouseOver,u as measureLeftRange,m as measureRightRange,p as setMouseOver};
