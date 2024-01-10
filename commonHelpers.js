import{i as a,S as m}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=s=>(i.style.display="block",fetch(`https://pixabay.com/api/?key=41717891-03a798ff6847d2641a93432cc&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`)),f=document.querySelector(".form"),c=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";f.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements.query.value.trim();u(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(i.style.display="none",r.hits.length===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.innerHTML="";const n=r.hits.map(e=>`<li class="gallery-item">
                <a class="gallery-link" href="${e.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${e.webformatURL}"
                        alt="${e.tags}"
                    />
                    <ul class="list">
                        <li class="list-item"><h3>likes</h3><span>${e.likes}</span></li>
                        <li class="list-item"><h3>views</h3><span>${e.views}</span></li>
                        <li class="list-item"><h3>comments</h3><span>${e.comments}</span></li>
                        <li class="list-item"><h3>downloads</h3><span>${e.downloads}</span></li>
                    </ul>
                </a>
            </li>`).join("");c.insertAdjacentHTML("beforeend",n),new m(".gallery-item a")}).catch(r=>{i.style.display="none",a.error({position:"topRight",message:"Sorry. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
