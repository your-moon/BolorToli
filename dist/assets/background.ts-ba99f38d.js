function a(r,t){return!r.word||!r.hash?(t({type:"error",message:"Invalid request"}),!1):(o(r).then(e=>{t({type:"ok",data:e})}).catch(e=>{t({type:"error",message:e.toString()})}),!0)}async function o(r){const t=new URLSearchParams({word:r.word,direction:"1"}),e=new Headers({"API-Key":r.hash}),n=await fetch("https://bolor-toli.com/pub/translate?"+t.toString(),{method:"GET",headers:e});if(!n.ok)throw new Error("Failed to fetch translation");return n.json()}chrome.runtime.onMessage.addListener((r,t,e)=>a(r,e));
