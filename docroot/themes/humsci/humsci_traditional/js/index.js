(()=>{var e={418:()=>{function e(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function t(e,t){"closeAll"===t?e.forEach((function(e){e.removeAttribute("open")})):e.forEach((function(e){e.setAttribute("open","")}))}function r(e,t){e.forEach((function(e){e.innerText="closeAll"===t?"Expand All":"Collapse All"}))}var n=e(document.querySelectorAll("details"));if(n.length>=1){var o=!1;n.forEach((function(e){if(e.classList.contains("hb-accordion_toggle-all")){var t=function(){var e=document.createElement("Button");return e.innerText="Expand All",e.classList.add("hb-link"),e.classList.add("hb-accordion-toggle-all"),e}();e.parentNode.insertBefore(t,e)}}));var a=e(document.querySelectorAll(".hb-accordion-toggle-all"));a.forEach((function(e){e.addEventListener("click",(function(){o?(t(n,"closeAll"),r(a,"closeAll"),o=!1):(t(n,"openAll"),r(a,"openAll"),o=!0)}))}))}},356:()=>{var e,t=!1,r=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},n=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e=document.querySelectorAll(".hb-experimental"))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),o=[".hb-hero-overlay",".hb-hero-overlay__text",".hb-hero-overlay__image-wrapper",".field-hs-hero-image",".hb-gradient-hero",".hb-gradient-hero__text",".hb-gradient-hero__image-wrapper",".field-hs-gradient-hero-image",".hs-font-splash"];n.length&&o.push([".hs-font-lead"]);var a=document.querySelectorAll(o);document.querySelectorAll(".hb-has-animation-enhancements").length&&function e(){a.forEach((function(e){var r,n;r=e.getBoundingClientRect(),n=r.bottom-.18*r.bottom,r.top>=0&&n<=(window.innerHeight||document.documentElement.clientHeight)&&e.classList.add("animate"),function(){for(var e=0;e<a.length;e++){if(!a[e].classList.contains("animate")){t=!1;break}t=!0}}(),t&&window.cancelAnimationFrame})),r(e)}()},642:()=>{var e,t=document.querySelectorAll(".paragraph--type--hs-carousel, .paragraph--type--hs-gradient-hero-slider, .paragraph--type--hs-sptlght-slder"),r=function(e,t){return e.setAttribute("style","min-height: ".concat(t,"px"))},n=function(){var e,n;t.forEach((function(t){e=[0];var o,a=t.querySelectorAll(".hb-hero-overlay__text, .hb-gradient-hero__text, .hb-spotlight__text");a.forEach((function(t){t.removeAttribute("style");var r=t.offsetHeight;r=parseInt(r,10),e.push(r)})),n=Math.max.apply(Math,function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(o=e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),window.innerWidth>768&&a.forEach((function(e){return r(e,n)})),a.forEach((function(e){return function(e){return e.classList.contains("hb-spotlight__text")}(e)&&r(e,n)}))}))};t.length>0&&(n(),window.addEventListener("resize",(function(){clearTimeout(e),e=setTimeout(n,250)})))},808:()=>{var e=document.querySelectorAll(".field-media-oembed-video");if(e&&e.length>0)for(var t=0;t<e.length;t++){var r=e[t];if(r.parentNode&&r.parentNode.parentNode&&"FIGURE"===r.parentNode.parentNode.nodeName){var n=r.parentNode.parentNode;n.classList.contains("caption")&&(n.style.width="100%")}}},638:()=>{function e(e,t){for(var r=0;r<e.length;r++)e[r].setAttribute("scope",t)}e(document.querySelectorAll("thead th"),"col"),e(document.querySelectorAll("tbody th"),"row")},965:()=>{var e=document.querySelectorAll("".concat("div.hb-table-pattern__header > div.hb-table-pattern__row > div",", ").concat("div.hb-table-pattern__header > div.hb-table-pattern__row > span",", ").concat("div.hb-table-pattern__header > div.hb-table-pattern__row > p")),t=document.querySelectorAll(".hb-table-row");if(t)for(var r=0;r<t.length;r+=1)for(var n=t[r].querySelectorAll(".hb-table-row__heading"),o=0;o<n.length;o+=1)n[o].innerHTML=e[o].innerHTML},42:()=>{function e(e){var t=document.createElement("div");t.className="hb-table-wrap",e.parentNode.insertBefore(t,e),t.appendChild(e)}for(var t=document.querySelectorAll("table"),r=document.querySelectorAll(".hb-table-pattern"),n=0;n<t.length;n++)e(t[n]);for(var o=0;o<r.length;o++)e(r[o])},227:()=>{document.querySelectorAll(".hb-timeline__collapsed").forEach((function(e){e.querySelectorAll(".hb-timeline-item").forEach((function(e){e.removeAttribute("open")})),e.querySelectorAll(".hb-timeline-item__summary").forEach((function(e){e.setAttribute("aria-expanded","false"),e.setAttribute("aria-pressed","false")}))}));var e=document.querySelectorAll(".hb-timeline-item");e&&e.forEach((function(e){var t=e.querySelector(".hb-timeline-item__summary"),r=t.getAttribute("aria-expanded");t.addEventListener("click",(function(){"true"===r?(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-pressed","false")):(t.setAttribute("aria-expanded","true"),t.setAttribute("aria-pressed","true")),r=t.getAttribute("aria-expanded")}))}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{"use strict";r(642),r(42),r(638),r(965);const e=function(e,t,r){e.setAttribute("aria-expanded",r),t.setAttribute("aria-hidden",!r)};var t,n,o=document.querySelector(".hb-main-nav__toggle"),a=document.querySelector(".hb-main-nav__menu-lv1");o&&(o.addEventListener("click",(function(){var t="true"===o.getAttribute("aria-expanded");e(o,a,!t)})),window.addEventListener("resize",(function(){(t=window.innerWidth)>=992&&!n&&(e(o,a,!0),n=!0),t<992&&n&&(e(o,a,!1),n=!1)})));const i=function(t,r,n){t.preventDefault();var o="true"===t.target.getAttribute("aria-expanded");e(r,n,!o)};var l=document.querySelectorAll(".hb-nested-toggler");if(l)for(var c=function(t){var r=window.innerWidth,n=l[t],o=n.getAttribute("id"),a=document.querySelector('[aria-labelledby="'.concat(o,'"]')),c=n.parentNode;if(!a)return"continue";n.addEventListener("click",(function(e){return i(e,n,a)})),n.addEventListener("keydown",(function(t){if(32===t.which){t.preventDefault();var r="true"===t.target.getAttribute("aria-expanded");e(n,a,!r)}})),window.addEventListener("resize",(function(){(r=window.innerWidth)>=992&&e(n,a,!1)})),["focusin","click"].forEach((function(t){document.body.addEventListener(t,(function(t){r>=992&&!c.contains(t.target)&&e(n,a,!1)}),!1)}))},u=0;u<l.length;u+=1)c(u);var d=document.querySelector(".hb-main-nav__toggle"),s=document.querySelector(".hb-main-nav__menu-lv1"),h=document.querySelectorAll(".hb-nested-toggler"),f=window.innerWidth<992;if(f&&e(d,s,!1),h)for(var m=0;m<h.length;m+=1){var b=h[m],p=b.getAttribute("id"),v=document.querySelector('[aria-labelledby="'.concat(p,'"]')),g=!!b.parentNode.classList.contains("hb-main-nav__item--active-trail");v&&e(b,v,!(!g||!f))}document.querySelector(".hb-main-nav--is-still-loading").classList.remove("hb-main-nav--is-still-loading");var y=document.querySelectorAll(".hb-secondary-toggler");if(y)for(var A=function(t){var r=y[t],n=r.getAttribute("id"),o=document.querySelector('[aria-labelledby="'.concat(n,'"]')),a=r.parentNode.classList.contains("hb-secondary-nav__item--active-trail");if(!o)return"continue";a||e(r,o,!1),r.addEventListener("click",(function(e){return i(e,r,o)}))},w=0;w<y.length;w+=1)A(w);const _=function(e){if(e.length>0){var t=Array.prototype.map.call(e,(function(e){return e.scrollHeight}));return new Promise((function(r){var n=Math.max.apply(null,t),o=t.indexOf(n);Array.prototype.forEach.call(e,(function(e,t){t!==o&&(e.style.minHeight="".concat(n,"px"))})),r()}))}},S=function(e){e.forEach((function(e){e.style.minHeight="auto"}))};function E(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var q=function(){var e=document.querySelector(".hb-stretch-vertical-linked-cards"),t=E(document.querySelectorAll(".hb-vertical-linked-card__title")),r=E(document.querySelectorAll(".hb-vertical-linked-card"));e&&r.length>0&&S(r),e&&t.length>0&&S(t),e&&window.innerWidth>=576&&(t.length>0?_(t).then((function(){return _(r)})).catch((function(e){return console.error("issue loading equal height cards",e)})):r.length>0&&_(r))};setTimeout((function(){q()}),1e3),window.addEventListener("resize",(function(){setTimeout((function(){q()}),500)})),r(808),r(356),r(227),r(418)})()})();