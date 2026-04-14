import{a as q,S as E,i as n}from"./assets/vendor-Cu43xbyG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const M="https://pixabay.com/api/",B="42823339-1ca31e44a0bb15197c26bd0aa";async function f(r,t){return(await q.get(M,{params:{key:B,q:r,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more"),R=new E(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const t=r.map(({webformatURL:s,largeImageURL:l,tags:e,likes:o,views:a,comments:S,downloads:v})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b><span>${o}</span></p>
            <p class="info-item"><b>Views</b><span>${a}</span></p>
            <p class="info-item"><b>Comments</b><span>${S}</span></p>
            <p class="info-item"><b>Downloads</b><span>${v}</span></p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",t),R.refresh()}function $(){m.innerHTML=""}function y(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}function L(){h.classList.remove("hidden")}function c(){h.classList.add("hidden")}const w=document.querySelector(".form"),x=document.querySelector(".load-more");let d="",i=1,u=0;const P=15;w.addEventListener("submit",O);x.addEventListener("click",A);async function O(r){r.preventDefault();const t=r.currentTarget.elements["search-text"].value.trim();if(!t){n.error({message:"Please fill in the search field!",position:"topRight"});return}d=t,i=1,$(),c(),y();try{const s=await f(d,i);if(u=s.totalHits,!s.hits||s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(s.hits),u>P?L():c()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b(),w.reset()}}async function A(){i+=1,c(),y();try{const r=await f(d,i);g(r.hits);const t=Math.ceil(u/P);i>=t?(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L(),H()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}}function H(){const r=document.querySelector(".gallery-item");if(!r)return;const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
