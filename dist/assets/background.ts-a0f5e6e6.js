import{T as r}from"./Serialization-cdc6a098.js";async function c(t,a){console.log("fetch request",a);const e=new URLSearchParams({word:a.word,direction:a.direction}),o=new Headers({"API-Key":a.hash});console.log(`https://bolor-toli.com/pub/${t}?${e.toString()}`);const s=await fetch(`https://bolor-toli.com/pub/${t}?${e.toString()}`,{method:"GET",headers:o});if(!s.ok)throw new Error(`Failed to fetch ${t}`);return t==="translate"?s.json():s.text()}function l(t,a){return t.type==="search-suggest"||t.type==="translate"?(c(t.type,t).then(e=>{a({status:r.OK,data:e}),i(e,t.word)}).catch(e=>{a({status:r.ERROR,message:e.toString()})}),!0):(a({status:r.INVALID,message:"Invalid request"}),!1)}chrome.runtime.onMessage.addListener((t,a,e)=>{if(t.type==="translate"||t.type==="search-suggest")return console.log("incoming request translate or search-suggest",t),l(t,e)});function i(t,a){chrome.storage.local.get("savedData",e=>{let o=e.savedData||[];o.some(n=>n.text===a)||(o.push({data:t,text:a}),console.log("savedData",o),chrome.storage.local.set({savedData:o}))})}function h(){return new Promise(t=>{chrome.storage.local.get("savedData",a=>{t(a.savedData||[])})})}function m(){chrome.storage.local.remove("savedData")}export{m as clearSavedData,h as getSavedData};
