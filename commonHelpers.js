import{i as a,S as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=s=>(n.style.display="block",fetch(`https://pixabay.com/api/?key=41717891-03a798ff6847d2641a93432cc&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`)),u=document.querySelector(".form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";u.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements.query.value.trim();m(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(n.style.display="none",r.hits.length===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const l=r.hits.map(e=>`<li class="gallery-item">
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
            </li>`).join("");f.insertAdjacentHTML("beforeend",l),new c(".gallery-item a"),console.log(r)}).catch(r=>{n.style.display="none",a.error({position:"topRight",message:"Sorry. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
