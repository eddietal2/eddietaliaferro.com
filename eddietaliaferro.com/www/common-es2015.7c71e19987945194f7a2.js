"use strict";(self.webpackChunkeddietaliaferro_com=self.webpackChunkeddietaliaferro_com||[]).push([[8592],{8225:function(t,e,n){n.d(e,{c:function(){return s}});var o=n(3150),i=n(2954),r=n(9461);const s=(t,e)=>{let n,s;const c=(t,o,i)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,o);r&&e(r)?r!==n&&(a(),l(r,i)):a()},l=(t,e)=>{n=t,s||(s=n);const i=n;(0,o.c)(()=>i.classList.add("ion-activated")),e()},a=(t=!1)=>{if(!n)return;const e=n;(0,o.c)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return(0,r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,i.a),onMove:t=>c(t.currentX,t.currentY,i.b),onEnd:()=>{a(!0),(0,i.h)(),s=void 0}})}},7330:function(t,e,n){n.d(e,{a:function(){return r},d:function(){return s}});var o=n(8239),i=n(2377);const r=function(){var t=(0,o.Z)(function*(t,e,n,o,r){if(t)return t.attachViewToDom(e,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),yield new Promise(t=>(0,i.c)(s,t)),s});return function(e,n,o,i,r){return t.apply(this,arguments)}}(),s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},2954:function(t,e,n){n.d(e,{a:function(){return r},b:function(){return s},c:function(){return i},d:function(){return l},h:function(){return c}});const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{o.selection()},r=()=>{o.selectionStart()},s=()=>{o.selectionChanged()},c=()=>{o.selectionEnd()},l=t=>{o.impact(t)}},6575:function(t,e,n){n.d(e,{s:function(){return o}});const o=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!s()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,l.forEach(t=>{const n=e.querySelectorAll(t);for(let o=n.length-1;o>=0;o--){const t=n[o];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=r(t);for(let e=0;e<s.length;e++)i(s[e])}});const o=r(e);for(let t=0;t<o.length;t++)i(o[t]);const c=document.createElement("div");c.appendChild(e);const a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),o=e.name;if(!c.includes(o.toLowerCase())){t.removeAttribute(o);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(o)}const e=r(t);for(let n=0;n<e.length;n++)i(e[n])},r=t=>null!=t.children?t.children:t.childNodes,s=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},c=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]},408:function(t,e,n){n.d(e,{S:function(){return o}});const o={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const o=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const o=e/n,i=t*o-t+"ms",r=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},1269:function(t,e,n){n.d(e,{c:function(){return r},g:function(){return s},h:function(){return i},o:function(){return l}});var o=n(8239);const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,l=function(){var t=(0,o.Z)(function*(t,e,n,o){if(null!=t&&"#"!==t[0]&&!c.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,o)}return!1});return function(e,n,o,i){return t.apply(this,arguments)}}()},4575:function(t,e,n){n.d(e,{l:function(){return a}});var o=n(8720),i=n(7823),r=n(8583);function s(t,e){1&t&&o._UZ(0,"img",4)}function c(t,e){1&t&&o._UZ(0,"img",5)}function l(t,e){1&t&&o._UZ(0,"img",5)}let a=(()=>{class t{constructor(t){this.modalController=t}ngOnInit(){"register"===this.page&&(this.message=`Thanks for joining my my site, ${this.firstName}. When you login in, use your email: networkbiz92@gmail.com`),"donate"===this.page&&(this.message="Thanks for Donating! I really, really appreciate you for taking the time to do that!"),"contact"===this.page&&(this.message="Thanks for contacting me! I will contact you at my earliest convenience at the email you've given me in this form.")}dismiss(){this.modalController.dismiss({dismissed:!0})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(i.IN))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-success-modal"]],inputs:{firstName:"firstName",picture:"picture",fullName:"fullName",email:"email",page:"page"},decls:8,vars:4,consts:[["id","wrapper"],["height","200","src","../../../assets/Default-Profile-Picture.svg","alt","","srcset","",4,"ngIf"],["height","200","src","../../../assets/gold-logo.svg","alt","","srcset","",4,"ngIf"],["expand","full",1,"green-mobile-button",3,"click"],["height","200","src","../../../assets/Default-Profile-Picture.svg","alt","","srcset",""],["height","200","src","../../../assets/gold-logo.svg","alt","","srcset",""]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.YNc(1,s,1,0,"img",1),o.YNc(2,c,1,0,"img",2),o.YNc(3,l,1,0,"img",2),o.TgZ(4,"h5"),o._uU(5),o.qZA(),o.TgZ(6,"ion-button",3),o.NdJ("click",function(){return e.dismiss()}),o._uU(7," login "),o.qZA(),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngIf","register"===e.page),o.xp6(1),o.Q6J("ngIf","contact"===e.page),o.xp6(1),o.Q6J("ngIf","donate"===e.page),o.xp6(2),o.hij("",e.message," "))},directives:[r.O5,i.YG],styles:["#wrapper[_ngcontent-%COMP%]{text-align:center;margin-top:15%}ion-button[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%}@media only screen and (min-width: 700px){#wrapper[_ngcontent-%COMP%]{padding:2em}ion-button[_ngcontent-%COMP%]{margin:0 auto}}"]}),t})()},4329:function(t,e,n){n.d(e,{y:function(){return c}});var o=n(2340),i=n(8720),r=n(1841),s=n(7823);let c=(()=>{class t{constructor(t,e){this.http=t,this.toast=e,this.BACKEND_URL=o.N.url}getMessages(){return this.http.get(`${this.BACKEND_URL}/contact/get-contact-messages`)}deleteMessage(t){return this.http.post(`${this.BACKEND_URL}/contact/delete-contact-message`,{id:t})}sendMessage(t){return this.http.post(`${this.BACKEND_URL}/contact/send-contact-message`,t)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(r.eN),i.LFG(s.yF))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},7775:function(t,e,n){n.d(e,{b:function(){return i}});var o=n(8720);let i=(()=>{class t{constructor(){this.invokeAdminBlogsPageRefresh=new o.vpe}resetAdminBlogs(){console.log("Reseting Admin Blogs Page"),this.invokeAdminBlogsPageRefresh.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1311:function(t,e,n){n.d(e,{G:function(){return s}});var o=n(2340),i=n(8720),r=n(1841);let s=(()=>{class t{constructor(t){this.http=t,this.BACKEND_URL=o.N.url}blogPictureUpload(t){return console.log("blog picture uploading"),console.log(t),this.http.post(`${this.BACKEND_URL}/pictures/upload-blog-picture`,t)}blogThumbnailUpload(t){return console.log("blog thumbnail uploading"),console.log(t),this.http.post(`${this.BACKEND_URL}/pictures/upload-blog-thumbnail`,t)}projectThumbnailUpload(t){return console.log("project thumbnail uploading"),console.log(t),this.http.post(`${this.BACKEND_URL}/pictures/upload-project-thumbnail`,t)}userProfilePictureUpload(t){return console.log("user profile picture uploading"),console.log(t),this.http.post(`${this.BACKEND_URL}/pictures/upload-user-profile-picture`,t)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(r.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4439:function(t,e,n){n.d(e,{Y:function(){return l}});var o=n(2340),i=n(5304),r=n(5917),s=n(8720),c=n(1841);let l=(()=>{class t{constructor(t){this.http=t,this.BLOG_BACKEND_URL=o.N.url}getProjects(){return console.log("Getting Projects from Project Service"),this.http.get(`${this.BLOG_BACKEND_URL}/project/get-project-posts`).pipe((0,i.K)(t=>(console.log(t),(0,r.of)([]))))}getLatestProjectPosts(){return console.log("Getting Projects from Project Service"),this.http.get(`${this.BLOG_BACKEND_URL}/project/get-latest-project-posts`).pipe((0,i.K)(t=>(console.log(t),(0,r.of)([]))))}getProjectInfo(t){return console.log(t),this.http.post(`${this.BLOG_BACKEND_URL}/project/get-project-info`,{id:t}).pipe((0,i.K)(t=>(console.log(t),(0,r.of)([]))))}submitProject(t){return console.log("Submitting Projects ..."),this.http.post(`${this.BLOG_BACKEND_URL}/project/add-project`,t)}editProject(t){return console.log(t),console.log("Editting Projects ..."),this.http.post(`${this.BLOG_BACKEND_URL}/project/edit-project`,t)}deleteProject(t){return console.log("Deleting Project ..."),this.http.post(`${this.BLOG_BACKEND_URL}/project/delete-project`,{id:t})}projectVisibility(t,e,n){return console.log("Visibility ..."),this.http.post(`${this.BLOG_BACKEND_URL}/project/toggle-visibility`,{id:t,visible:n,title:e})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(c.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);