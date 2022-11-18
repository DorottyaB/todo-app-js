(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,":root {\r\n  --background-color: #f4f7fd;\r\n  --primary-color: #02c39a;\r\n  --gradient-1: #05668d;\r\n  --gradient-2: #028090;\r\n  --gradient-3: #00a896;\r\n  --color-danger: #b73026;\r\n  --peach: #ec8a83;\r\n  --peach-light: rgba(236, 138, 131, 0.25);\r\n  --orange: #ffad85;\r\n  --orange-light: rgba(255, 174, 133, 0.25);\r\n  --yellow: #f9f176;\r\n  --yellow-light: rgba(249, 241, 118, 0.25);\r\n  --purple: #a983d8;\r\n  --purple-light: rgba(134, 106, 168, 0.25);\r\n  --blue: #6ab4f1;\r\n  --blue-light: rgba(106, 180, 241, 0.25);\r\n  --green: #8be59d;\r\n  --green-light: rgba(139, 229, 157, 0.25);\r\n  --light-gray-1: #cccccc;\r\n  --light-gray-2: #bababa;\r\n  --shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Rubik', sans-serif;\r\n  padding: 30px;\r\n  position: relative;\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: max-content auto max-content;\r\n  grid-template-columns: 1fr;\r\n  gap: 40px;\r\n}\r\n\r\nbutton {\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton:focus-visible {\r\n  border: none;\r\n  outline: 2px solid #038f70;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  z-index: 100;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.flex-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\nh1 {\r\n  font-size: 40px;\r\n  font-weight: 300;\r\n}\r\n\r\n.btn {\r\n  background-color: var(--primary-color);\r\n  color: #fff;\r\n  box-shadow: var(--shadow);\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.btn.circle {\r\n  width: 48px;\r\n  height: 48px;\r\n  border-radius: 50%;\r\n  font-size: 32px;\r\n}\r\n\r\n.btn-submit {\r\n  padding: 10px;\r\n  border-radius: 100px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* NEW TASK FORM */\r\n.new-task-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  background-color: #fff;\r\n  border-radius: 8px;\r\n  padding: 25px;\r\n  width: 340px;\r\n}\r\n\r\n.form-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.form-header h2 {\r\n  font-size: 20px;\r\n}\r\n\r\n.close-icon {\r\n  align-self: flex-end;\r\n  font-size: 28px;\r\n  font-weight: 300;\r\n  color: rgba(55, 55, 55, 0.565);\r\n  cursor: pointer;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\ninput,\r\n#priority,\r\n#project,\r\n#color {\r\n  border: 1px solid var(--light-gray-1);\r\n  border-radius: 4px;\r\n  padding: 10px;\r\n  color: #1f1f1f;\r\n  font-size: 16px;\r\n}\r\n\r\ninput:focus,\r\n#priority:focus,\r\n#project:focus,\r\n#color:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\n/* NAVIGATION */\r\nnav {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 200;\r\n}\r\n\r\n.navigation {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: var(--background-color);\r\n  padding: 30px;\r\n  min-height: 250px;\r\n  width: 70vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 26px;\r\n  z-index: 100;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-item > p {\r\n  font-size: 20px;\r\n}\r\n\r\n.upcoming {\r\n  stroke: var(--gradient-1);\r\n}\r\n\r\n.today {\r\n  stroke: var(--gradient-2);\r\n}\r\n\r\n.star {\r\n  stroke: var(--gradient-3);\r\n}\r\n\r\n.expand {\r\n  stroke: var(--primary-color);\r\n}\r\n\r\n.add-project {\r\n  font-size: 24px;\r\n  margin-left: 40px;\r\n  align-self: flex-end;\r\n}\r\n\r\n/* ADD PROJECT FORM */\r\n.add-project-popup {\r\n  margin-top: 20px;\r\n}\r\n\r\n.add-project-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.add-project-form .form-group {\r\n  gap: 5px;\r\n}\r\n\r\n#name,\r\n#color {\r\n  padding: 0.5rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n#color option#orange {\r\n  color: var(--orange);\r\n}\r\n\r\n#color option#green {\r\n  color: var(--green);\r\n}\r\n\r\n#color option#purple {\r\n  color: var(--purple);\r\n}\r\n\r\n#color option#blue {\r\n  color: var(--blue);\r\n}\r\n\r\n#color option#peach {\r\n  color: var(--peach);\r\n}\r\n\r\n#color option#yellow {\r\n  color: var(--yellow);\r\n}\r\n\r\n.btn-close-popup {\r\n  color: var(--color-danger);\r\n  border: none;\r\n  cursor: pointer;\r\n  box-shadow: none;\r\n  background-color: transparent;\r\n}\r\n\r\n/* PROJECTS DROPDOWN */\r\n.dropdown {\r\n  padding-left: 35px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  margin-top: 25px;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.dropdown-item {\r\n  font-size: 20px;\r\n  display: grid;\r\n  align-items: center;\r\n  grid-template-columns: 20px 112px max-content;\r\n}\r\n\r\n.dropdown-item::before {\r\n  content: '';\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.delete:link,\r\n.delete:visited {\r\n  justify-self: end;\r\n  font-size: 20px;\r\n  color: rgba(96, 96, 96, 0.8);\r\n}\r\n\r\n#orange::before {\r\n  background-color: var(--orange);\r\n}\r\n#green::before {\r\n  background-color: var(--green);\r\n}\r\n#purple::before {\r\n  background-color: var(--purple);\r\n}\r\n#blue::before {\r\n  background-color: var(--blue);\r\n}\r\n#yellow::before {\r\n  background-color: var(--yellow);\r\n}\r\n#peach::before {\r\n  background-color: var(--peach);\r\n}\r\n\r\n/* HEADER */\r\nh2.category {\r\n  font-weight: 400;\r\n  font-size: 24px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid var(--light-gray-2);\r\n  text-transform: capitalize;\r\n}\r\n\r\n/* MAIN */\r\nmain {\r\n  margin-top: 20px;\r\n}\r\n\r\n/* TASK LIST */\r\n.task-list {\r\n  padding: 35px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n/* LIST ITEMS */\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-left: 6px solid var(--light-gray-1);\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 15px;\r\n  position: relative;\r\n}\r\n\r\n.list-item__orange {\r\n  border-left-color: var(--orange);\r\n}\r\n\r\n.list-item__peach {\r\n  border-left-color: var(--peach);\r\n}\r\n\r\n.list-item__yellow {\r\n  border-left-color: var(--yellow);\r\n}\r\n\r\n.list-item__purple {\r\n  border-left-color: var(--purple);\r\n}\r\n\r\n.list-item__blue {\r\n  border-left-color: var(--blue);\r\n}\r\n\r\n.list-item__green {\r\n  border-left-color: var(--green);\r\n}\r\n\r\n.right-side,\r\n.left-side {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.left-side {\r\n  gap: 10px;\r\n}\r\n\r\n.edit-container {\r\n  background-color: #fff;\r\n  padding: 15px 20px;\r\n  border-radius: 8px;\r\n  position: absolute;\r\n  top: 100%;\r\n  right: 0;\r\n  z-index: 10;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  box-shadow: var(--shadow);\r\n  font-size: 18px;\r\n}\r\n\r\n.remove:link,\r\n.remove:visited {\r\n  color: var(--color-danger);\r\n}\r\n\r\n.ellipsis {\r\n  rotate: 90deg;\r\n}\r\n\r\n.todo {\r\n  font-size: 18px;\r\n}\r\n\r\n.due-date {\r\n  font-size: 16px;\r\n  color: rgba(31, 31, 31, 0.7);\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  background: #fff;\r\n  border: 1px solid var(--light-gray-2);\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n  border-radius: 100%;\r\n  vertical-align: text-bottom;\r\n  position: relative;\r\n}\r\n\r\ninput[type='checkbox']::before {\r\n  content: '';\r\n  position: absolute;\r\n  margin: auto;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n  top: 0;\r\n}\r\n\r\ninput[type='checkbox']:hover,\r\ninput[type='checkbox']:focus {\r\n  border: 1px solid var(--primary-color);\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type='checkbox']:checked {\r\n  background-color: var(--primary-color);\r\n  border: 1px solid var(--primary-color);\r\n}\r\n\r\ninput[type='checkbox']:checked::before {\r\n  border-right: 3px solid #fff;\r\n  border-bottom: 3px solid #fff;\r\n  height: 55%;\r\n  width: 30%;\r\n  transform: rotate(45deg) translateY(-10%) translateX(-25%);\r\n}\r\n\r\n/* NO TASK MESSAGE */\r\n.no-tasks-msg {\r\n  text-align: center;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  color: var(--light-gray-2);\r\n}\r\n\r\n/* FOOTER */\r\nfooter {\r\n  padding-top: 15px;\r\n  border-top: 1px solid var(--light-gray-2);\r\n  text-align: center;\r\n  width: 100%;\r\n  color: #646464;\r\n  font-size: 13px;\r\n}\r\n\r\nfooter a:link,\r\nfooter a:visited {\r\n  color: var(--gradient-1);\r\n}\r\n\r\n/* HIDE ELEMENT */\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  body {\r\n    display: grid;\r\n    grid-template-columns: 25vw 1fr;\r\n    grid-template-rows: max-content 1fr max-content;\r\n    gap: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  header {\r\n    grid-area: 1 / 1 / 2 / 3;\r\n    padding: 0;\r\n  }\r\n\r\n  h1 {\r\n    user-select: none;\r\n  }\r\n\r\n  .logo-container {\r\n    width: 25vw;\r\n    padding: 30px 40px;\r\n    background-color: var(--background-color);\r\n  }\r\n\r\n  .flex-container {\r\n    padding: 30px 60px;\r\n  }\r\n\r\n  nav {\r\n    grid-area: 2 / 1 / 4 / 2;\r\n    position: relative;\r\n    background-color: var(--background-color);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n  }\r\n\r\n  .navigation {\r\n    position: relative;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: transparent;\r\n    padding: 30px 40px;\r\n    min-height: 250px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 26px;\r\n    z-index: 1;\r\n  }\r\n\r\n  .nav-item:hover > p,\r\n  .nav-item:hover svg {\r\n    filter: brightness(130%);\r\n  }\r\n\r\n  .add-project {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n\r\n  .projects:hover .add-project {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n\r\n  .dropdown-item:hover {\r\n    filter: brightness(110%);\r\n  }\r\n\r\n  .delete:link,\r\n  .delete:visited {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n\r\n  .dropdown-item:hover .delete:link,\r\n  .dropdown-item:hover .delete:visited {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n\r\n  .delete:link:hover,\r\n  .delete:visited:hover {\r\n    color: var(--color-danger);\r\n  }\r\n\r\n  .btn:hover {\r\n    filter: brightness(110%);\r\n  }\r\n\r\n  .btn:active,\r\n  .btn-submit:active {\r\n    transform: scale(0.95);\r\n  }\r\n\r\n  main {\r\n    grid-area: 2 / 2 / 3 / 3;\r\n    padding: 20px 60px 20px 35px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  h2.category {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .list-item:hover {\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .list-item__orange:hover {\r\n    background-color: var(--orange-light);\r\n  }\r\n\r\n  .list-item__peach:hover {\r\n    background-color: var(--peach-light);\r\n  }\r\n  .list-item__yellow:hover {\r\n    background-color: var(--yellow-light);\r\n  }\r\n\r\n  .list-item__purple:hover {\r\n    background-color: var(--purple-light);\r\n  }\r\n\r\n  .list-item__blue:hover {\r\n    background-color: var(--blue-light);\r\n  }\r\n\r\n  .list-item__green:hover {\r\n    background-color: var(--green-light);\r\n  }\r\n\r\n  .list-item {\r\n    padding-right: 15px;\r\n  }\r\n\r\n  .right-side,\r\n  .left-side {\r\n    gap: 15px;\r\n  }\r\n\r\n  .ellipsis {\r\n    cursor: pointer;\r\n    rotate: 180deg;\r\n  }\r\n\r\n  .ellipsis:hover > span {\r\n    color: #626262;\r\n  }\r\n\r\n  .edit:hover,\r\n  .remove:hover {\r\n    filter: brightness(120%);\r\n  }\r\n\r\n  footer {\r\n    grid-area: 3 / 1 / 4 / -1;\r\n    border-top: none;\r\n    padding-bottom: 15px;\r\n  }\r\n}\r\n",""]);const c=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var l=0;l<r.length;l++){var s=[].concat(r[l]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],c=0;c<r.length;c++){var d=r[c],l=t.base?d[0]+t.base:d[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=e(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var d=t(r,o),l=0;l<i.length;l++){var s=e(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=d}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},31:(r,n,e)=>{e.d(n,{zd:()=>L,j4:()=>M,t2:()=>A,xD:()=>w,K0:()=>y,BQ:()=>S,tv:()=>k,b9:()=>q,jO:()=>C,zT:()=>I,xM:()=>E});var t=e(75),o=e(152),i=e(617),a=e(379),c=e.n(a),d=e(795),l=e.n(d),s=e(569),p=e.n(s),u=e(565),m=e.n(u),f=e(216),g=e.n(f),h=e(589),v=e.n(h),x=e(426),b={};function y(){const r=document.getElementById("content");if(""===r.innerHTML){const n=document.createElement("h4");n.classList.add("no-tasks-msg"),n.textContent="There are no tasks",r.appendChild(n)}}function k(){const r=document.getElementById("project");r.innerHTML="";for(let n of t.q){const e=document.createElement("option");e.classList.add("option"),e.value=n.name,e.innerHTML=n.name,r.appendChild(e)}}function w(r){const n=document.createElement("div"),e=document.createElement("div"),i=document.createElement("div"),a=document.createElement("input"),c=document.createElement("p"),d=document.createElement("p"),l=document.createElement("a"),s=document.createElement("a");a.setAttribute("type","checkbox"),n.classList.add("list-item");for(let e of t.q)r.project===e.name&&n.classList.add(`list-item__${e.color}`);e.classList.add("right-side"),i.classList.add("left-side"),c.classList.add("todo"),d.classList.add("due-date"),l.classList.add("edit"),s.classList.add("remove"),a.onclick=function(){a.checked&&(r.isDone=!0,c.style.color="#bababa",c.style.textDecoration="line-through",e.removeChild(d),e.removeChild(u),a.disabled=!0,setTimeout((function(){document.querySelector("#content").removeChild(n);const e=(0,t.xt)();e.removeTask(r.title),(0,t.jt)(e),y()}),2e3))},l.onclick=o.eT,s.onclick=o.F6,c.textContent=r.title,l.textContent="Edit",l.setAttribute("href","#"),s.textContent="Remove",s.setAttribute("href","#");const p=r.date.replaceAll("-",".");d.textContent=`${p}.`;const u=document.createElement("div");u.classList.add("ellipsis");const m=document.createElement("span");m.textContent="•••",u.appendChild(m);const f=document.createElement("div");f.classList.add("hidden","edit-container"),u.onclick=()=>{f.classList.toggle("hidden")},i.appendChild(a),i.appendChild(c),f.appendChild(l),f.appendChild(s),e.appendChild(d),e.append(u),e.appendChild(f),n.appendChild(i),n.appendChild(e),document.querySelector("#content").appendChild(n)}function S(){document.querySelector(".new-task-form").classList.remove("hidden"),document.querySelector(".overlay").classList.remove("hidden")}function L(){document.querySelector(".new-task-form").classList.add("hidden"),document.querySelector(".overlay").classList.add("hidden")}function E(r){const n=document.getElementById("main-btn"),e=document.getElementById("formTitle"),t=document.getElementById("closeForm");"edit"===r?(n.textContent="Save",e.textContent="Edit Task",t.classList.add("hidden")):(document.querySelector("#addTask").value="",document.querySelector("#date").value="",n.textContent="Add Task",e.textContent="Add New Task",t.classList.remove("hidden"))}b.styleTagTransform=v(),b.setAttributes=m(),b.insert=p().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g(),c()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;const T=document.getElementById("dropdown");function C(){T.classList.toggle("hidden"),T.classList.contains("hidden")?document.getElementById("expand").setAttribute("d","M19.5 8.25l-7.5 7.5-7.5-7.5"):document.getElementById("expand").setAttribute("d","M4.5 15.75l7.5-7.5 7.5 7.5")}const j=document.getElementById("new-project");function q(r){r.stopPropagation(),j.classList.remove("hidden"),document.getElementById("name").focus(),document.querySelector(".add-project").classList.add("hidden")}function M(){j.classList.add("hidden"),document.querySelector(".add-project").classList.remove("hidden")}document.querySelector(".btn-close-popup").onclick=M;const z=document.querySelector(".category");function I(){"Upcoming"===z.innerHTML?(0,o.xL)():"Today"===z.innerHTML?(0,o.O9)():"High Priority"===z.innerHTML?(0,o.Ww)():(0,o.io)(z.innerHTML)}function A(r){const n=document.createElement("li");n.classList.add("dropdown-item"),n.setAttribute("id",r.color);const e=document.createElement("a");e.textContent=r.name,e.setAttribute("href","#"),e.classList.add("dropdown-item-link");const t=document.createElement("a");t.textContent="×",t.setAttribute("href","#"),t.title="delete",t.classList.add("delete"),n.appendChild(e),n.appendChild(t),document.getElementById("dropdown").appendChild(n),e.onclick=_,t.onclick=i.t}function _(r){const n=r.target.textContent;(0,o.io)(n),y()}document.querySelector(".add-project-form").onsubmit=i.B},138:(r,n,e)=>{var t=e(152),o=e(31),i=e(75);if((0,o.tv)(),(0,i.lA)(),(0,o.K0)(),window.innerWidth<1024){const a=document.querySelector("nav");function c(){a.classList.remove("hidden")}function d(){a.classList.add("hidden")}document.getElementById("navIcon").addEventListener("click",c),document.getElementById("closeNav").addEventListener("click",d),document.querySelectorAll("li.nav-item").forEach((r=>r.addEventListener("click",d))),document.querySelectorAll(".dropdown-item-link").forEach((r=>r.addEventListener("click",d)))}document.getElementById("openForm").addEventListener("click",o.BQ),document.getElementById("closeForm").addEventListener("click",o.zd),Date.prototype.toDateInputValue=function(){let r=new Date(this);return r.setMinutes(this.getMinutes()-this.getTimezoneOffset()),r.toJSON().slice(0,10)},document.getElementById("date").value=(new Date).toDateInputValue(),document.querySelector(".upcoming").addEventListener("click",(()=>{(0,t.xL)(),(0,o.K0)()})),document.querySelector(".today").addEventListener("click",(()=>{(0,t.O9)(),(0,o.K0)()})),document.querySelector(".high-priority").addEventListener("click",(()=>{(0,t.Ww)(),(0,o.K0)()})),document.querySelector(".projects").addEventListener("click",o.jO),document.querySelector(".add-project").addEventListener("click",o.b9)},617:(r,n,e)=>{e.d(n,{B:()=>d,t:()=>l});var t=e(75),o=e(31),i=e(152);class a{constructor(r,n){this.name=r,this.color=n}}const c=document.querySelector(".add-project-form");function d(r){r.preventDefault();const n=document.querySelector("#name").value,e=document.querySelector("#color").value,i=new a(n,e);t.q.forEach((r=>{if(r.name===i.name)return alert("Project already exists"),void(i.name="")})),(0,t.Sv)(i),(0,o.t2)(i),(0,o.j4)(),c.reset(),(0,o.tv)()}function l(r){const n=r.target.previousElementSibling.textContent;(0,t.XP)(n);const e=(0,t.xt)();for(let r of e.tasks)r.project===n&&e.removeTask(r.title);(0,t.jt)(e);const a=r.target.parentNode;document.getElementById("dropdown").removeChild(a),document.querySelector(".category").innerHTML!==n?(0,o.zT)():(0,i.xL)(),(0,o.tv)()}},75:(r,n,e)=>{e.d(n,{CW:()=>d,Sv:()=>u,XP:()=>m,_X:()=>l,f1:()=>c,jt:()=>i,lA:()=>f,q:()=>p,xt:()=>a});var t=e(31),o=e(152);function i(r){localStorage.setItem("todoList",JSON.stringify(r))}function a(){return Object.assign(new o.zk,JSON.parse(localStorage.getItem("todoList")))}function c(r){const n=a();n.addTask(r),i(n)}function d(r){const n=a();n.removeTask(r),i(n)}function l(r){return a().getTask(r)}function s(){localStorage.setItem("projects",JSON.stringify(p))}let p=JSON.parse(localStorage.getItem("projects"))||[];function u(r){p.push(r),s()}function m(r){p=p.filter((n=>n.name!==r)),s()}function f(){const r=a();document.querySelector(".category").innerHTML="Upcoming",document.querySelector("#content").innerHTML="";for(let n of r.tasks)(0,t.xD)(n);document.getElementById("dropdown").innerHTML="";for(let r of p)(0,t.t2)(r)}},152:(r,n,e)=>{e.d(n,{F6:()=>m,O9:()=>s,Ww:()=>p,eT:()=>f,io:()=>u,xL:()=>l,zk:()=>i});var t=e(31),o=e(75);class i{constructor(){this.tasks=[]}addTask(r){this.tasks.push(r)}removeTask(r){this.tasks=this.tasks.filter((n=>n.title!==r))}removeTaskByProjectName(r){this.tasks=this.tasks.filter((n=>n.project!==r))}getTask(r){return this.tasks.find((n=>n.title===r))}}class a{constructor(r,n,e,t){this.title=r,this.date=n,this.priority=e,this.project=t,this.isDone=!1}}const c=document.querySelector(".new-task-form"),d=document.querySelector(".category");function l(){(0,o.lA)()}function s(){d.innerHTML="Today",document.querySelector("#content").innerHTML="";let r=new Date,n=String(r.getDate()).padStart(2,"0"),e=String(r.getMonth()+1).padStart(2,"0"),i=r.getFullYear();r=i+"-"+e+"-"+n;const a=(0,o.xt)();for(let n of a.tasks)n.date===r&&(0,t.xD)(n)}function p(){d.innerHTML="High Priority",document.querySelector("#content").innerHTML="";const r=(0,o.xt)();for(let n of r.tasks)"high"===n.priority&&(0,t.xD)(n)}function u(r){d.innerHTML=r,document.querySelector("#content").innerHTML="";const n=(0,o.xt)();for(let e of n.tasks)e.project===r&&(0,t.xD)(e)}function m(r){const n=r.target.parentNode.parentNode.parentNode.firstChild.lastChild.innerHTML;console.log(n),(0,o.CW)(n),(0,t.zT)()}function f(r){const n=r.target.parentNode.parentNode.parentNode.firstChild.lastChild.innerHTML,e=(0,o._X)(n);document.querySelector("#addTask").value=e.title,document.querySelector("#addTask").focus(),document.querySelector("#date").value=e.date,document.querySelector("#priority").value=e.priority,document.querySelector("#project").value=e.project,(0,t.xM)("edit"),(0,t.BQ)(),(0,o.CW)(n),(0,t.zT)()}c.onsubmit=function(r){r.preventDefault();const n=function(){const r=document.querySelector("#addTask").value,n=document.querySelector("#date").value,e=document.querySelector("#priority").value,t=document.querySelector("#project").value;return new a(r,n,e,t)}();(0,o.f1)(n),(0,t.xM)("add"),(0,t.zd)(),(0,t.zT)()}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,e(138),e(31),e(152),e(617)})();