const c=async function(a){const t=new TextEncoder().encode(a),s=await window.crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(s)).map(o=>o.toString(16).padStart(2,"0")).join("")},g=function(a,t){let s=0;t===1?s=50:t===3?s=52:t===4?s=53:t===5?s=54:t===7?s=56:t===8&&(s=57),console.log("hashdirection",t),console.log("result",s);for(let e=0;e<a.length;e++)s+=a.codePointAt(e)+1;return s.toString()},h=async function(a,t){const s=g(a,t);return c(s).then(e=>e)};async function l(a,t){var s="";return await h(a,parseInt(t)).then(n=>s=n),await chrome.runtime.sendMessage({hash:s,word:a,type:"search-suggest",direction:t})}async function u(a,t){console.log("getData direction",t);var s="";await h(a,parseInt(t)).then(n=>s=n),console.log(s);const e=await chrome.runtime.sendMessage({hash:s,word:a,type:"translate",direction:t});return console.log("getData response",e),JSON.stringify(e)}async function f(a){const t=[],s=JSON.parse(a);console.log("parsedData",s);const e=s.data.er;return e==null||e.forEach(n=>{var o,r;s.data.to_mn===!0?t.push({word:n.w.vars[0].w,tag:((o=n.t.vars[0].tags)==null?void 0:o.class)||"none"}):t.push({word:n.t.vars[0].w,tag:((r=n.t.vars[0].tags)==null?void 0:r.class)||"none"})}),console.log(t),t}export{f as a,l as b,u as g};
