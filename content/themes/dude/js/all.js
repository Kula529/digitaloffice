/*! dude2019 25-05-2019 17:48 - Digitoimisto Dude Oy (moro@dude.fi) */
/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);var MoveTo=function(){var t={tolerance:0,duration:800,easing:"easeOutQuart",container:window,callback:function(){}};function e(t,e,n,o){return t/=o,-n*(--t*t*t*t-1)+e}function n(t,e){var n={};return Object.keys(t).forEach(function(e){n[e]=t[e]}),Object.keys(e).forEach(function(t){n[t]=e[t]}),n}function o(t){return t instanceof HTMLElement?t.scrollTop:t.pageYOffset}function a(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(t,o),this.easeFunctions=n({easeOutQuart:e},a)}return a.prototype.registerTrigger=function(t,e){var o=this;if(t){var a=t.getAttribute("href")||t.getAttribute("data-target"),s=a&&"#"!==a?document.getElementById(a.substring(1)):document.body,r=n(this.options,function(t,e){var n={};return Object.keys(e).forEach(function(e){var o=t.getAttribute("data-mt-".concat(e.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})));o&&(n[e]=isNaN(o)?o:parseInt(o,10))}),n}(t,this.options));"function"==typeof e&&(r.callback=e);var i=function(t){t.preventDefault(),o.move(s,r)};return t.addEventListener("click",i,!1),function(){return t.removeEventListener("click",i,!1)}}},a.prototype.move=function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===t||t){a=n(this.options,a);var s,r="number"==typeof t?t:t.getBoundingClientRect().top,i=o(a.container),c=null;r-=a.tolerance;window.requestAnimationFrame(function n(u){var l=o(e.options.container);c||(c=u-1);var d=u-c;if(s&&(r>0&&s>l||r<0&&s<l))return a.callback(t);s=l;var h=e.easeFunctions[a.easing](d,i,r,a.duration);a.container.scroll(0,h),d<a.duration?window.requestAnimationFrame(n):(a.container.scroll(0,r+i),a.callback(t))})}},a.prototype.addEaseFunction=function(t,e){this.easeFunctions[t]=e},a}();"undefined"!=typeof module?module.exports=MoveTo:window.MoveTo=MoveTo,function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("whatInput",[],e):"object"==typeof exports?exports.whatInput=e():t.whatInput=e()}(this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={exports:{},id:o,loaded:!1};return t[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e){"use strict";t.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var t=document.documentElement,e=null,n="initial",o=n,a=Date.now();try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(o=window.sessionStorage.getItem("what-intent"))}catch(t){}var s=["button","input","select","textarea"],r=[],i=[16,17,18,91,93],c=[],u={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},l=!1,d={x:null,y:null},h={2:"touch",3:"touch",4:"mouse"},p=!1;try{var f=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,f)}catch(t){}var m=function(){var t=!!p&&{passive:!0};window.PointerEvent?(window.addEventListener("pointerdown",g),window.addEventListener("pointermove",v)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",g),window.addEventListener("MSPointerMove",v)):(window.addEventListener("mousedown",g),window.addEventListener("mousemove",v),"ontouchstart"in window&&(window.addEventListener("touchstart",g,t),window.addEventListener("touchend",g))),window.addEventListener(M(),v,t),window.addEventListener("keydown",g),window.addEventListener("keyup",g),window.addEventListener("focusin",w),window.addEventListener("focusout",b)},g=function(t){var e=t.which,a=u[t.type];"pointer"===a&&(a=I(t));var r=!c.length&&-1===i.indexOf(e),l=c.length&&-1!==c.indexOf(e),d="keyboard"===a&&e&&(r||l)||"mouse"===a||"touch"===a;if(x(a)&&(d=!1),d&&n!==a){n=a;try{window.sessionStorage.setItem("what-input",n)}catch(t){}y("input")}if(d&&o!==a){var h=document.activeElement;if(h&&h.nodeName&&-1===s.indexOf(h.nodeName.toLowerCase())||"button"===h.nodeName.toLowerCase()&&!C(h,"form")){o=a;try{window.sessionStorage.setItem("what-intent",o)}catch(t){}y("intent")}}},y=function(e){t.setAttribute("data-what"+e,"input"===e?n:o),_(e)},v=function(t){var e=u[t.type];if("pointer"===e&&(e=I(t)),k(t),!l&&!x(e)&&o!==e){o=e;try{window.sessionStorage.setItem("what-intent",o)}catch(t){}y("intent")}},w=function(n){n.target.nodeName?(e=n.target.nodeName.toLowerCase(),t.setAttribute("data-whatelement",e),n.target.classList&&n.target.classList.length&&t.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):b()},b=function(){e=null,t.removeAttribute("data-whatelement"),t.removeAttribute("data-whatclasses")},I=function(t){return"number"==typeof t.pointerType?h[t.pointerType]:"pen"===t.pointerType?"touch":t.pointerType},x=function(t){var e=Date.now(),o="mouse"===t&&"touch"===n&&e-a<200;return a=e,o},M=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},_=function(t){for(var e=0,a=r.length;e<a;e++)r[e].type===t&&r[e].fn.call(void 0,"input"===t?n:o)},k=function(t){d.x!==t.screenX||d.y!==t.screenY?(l=!1,d.x=t.screenX,d.y=t.screenY):l=!0},C=function(t,e){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return t.closest(e);do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(u[M()]="mouse",m(),y("input"),y("intent")),{ask:function(t){return"intent"===t?o:n},element:function(){return e},ignoreKeys:function(t){i=t},specificKeys:function(t){c=t},registerOnChange:function(t,e){r.push({fn:t,type:e||"input"})},unRegisterOnChange:function(t){var e=function(t){for(var e=0,n=r.length;e<n;e++)if(r[e].fn===t)return e}(t);(e||0===e)&&r.splice(e,1)}}}()}])}),function(t){var e,n,o,a,s,r,i,c,u,l,d,h,p=t(".nav-container"),f=p.find(".nav-toggle"),m=p.find("#main-navigation-wrapper"),g=p.find("#nav"),y=t("<button />",{class:"dropdown-toggle","aria-expanded":!1}).append(t("<span />",{class:"screen-reader-text",text:dude_screenReaderText.expand}));if(f.length&&(f.add(g).attr("aria-expanded","false"),f.on("click",function(){t(this).add(m).toggleClass("toggled-on"),t(this).toggleClass("toggled-on"),t("body").toggleClass("js-nav-active"),t(this).add(g).attr("aria-expanded","false"===t(this).add(g).attr("aria-expanded")?"true":"false")})),t(".menu-item-has-children > a").after(y),m.find(".menu-item-has-children").attr("aria-haspopup","true"),m.find(".dropdown-toggle").click(function(e){screenReaderSpan=t(this).find(".screen-reader-text"),dropdownMenu=t(this).nextAll(".sub-menu"),e.preventDefault(),t(this).toggleClass("toggled-on"),dropdownMenu.toggleClass("toggled-on"),t(this).attr("aria-expanded","false"===t(this).attr("aria-expanded")?"true":"false"),screenReaderSpan.text(screenReaderSpan.text()===dude_screenReaderText.expand?dude_screenReaderText.collapse:dude_screenReaderText.expand)}),t(".sub-menu .menu-item-has-children").parent(".sub-menu").addClass("has-sub-menu"),t(".menu-item a, button.dropdown-toggle").on("keydown",function(e){if(-1!=[37,38,39,40].indexOf(e.keyCode))switch(e.keyCode){case 37:e.preventDefault(),e.stopPropagation(),t(this).hasClass("dropdown-toggle")?t(this).prev("a").focus():t(this).parent().prev().children("button.dropdown-toggle").length?t(this).parent().prev().children("button.dropdown-toggle").focus():t(this).parent().prev().children("a").focus(),t(this).is("ul ul ul.sub-menu.toggled-on li:first-child a")&&t(this).parents("ul.sub-menu.toggled-on li").children("button.dropdown-toggle").focus();break;case 39:e.preventDefault(),e.stopPropagation(),t(this).next("button.dropdown-toggle").length?t(this).next("button.dropdown-toggle").focus():t(this).parent().next().children("a").focus(),t(this).is("ul.sub-menu .dropdown-toggle.toggled-on")&&t(this).parent().find("ul.sub-menu li:first-child a").focus();break;case 40:e.preventDefault(),e.stopPropagation(),t(this).next().length?t(this).next().find("li:first-child a").first().focus():t(this).parent().next().children("a").focus(),t(this).is("ul.sub-menu a")&&t(this).next("button.dropdown-toggle").length&&t(this).parent().next().children("a").focus(),t(this).is("ul.sub-menu .dropdown-toggle")&&t(this).parent().next().children(".dropdown-toggle").length&&t(this).parent().next().children(".dropdown-toggle").focus();break;case 38:e.preventDefault(),e.stopPropagation(),t(this).parent().prev().length?t(this).parent().prev().children("a").focus():t(this).parents("ul").first().prev(".dropdown-toggle.toggled-on").focus(),t(this).is("ul.sub-menu .dropdown-toggle")&&t(this).parent().prev().children(".dropdown-toggle").length&&t(this).parent().prev().children(".dropdown-toggle").focus()}}),(o=document.getElementById("nav"))&&void 0!==(a=document.getElementById("nav-toggle")))if(e=document.getElementsByTagName("html")[0],n=document.getElementsByTagName("body")[0],s=o.getElementsByTagName("ul")[0],r=document.getElementById("main-navigation-wrapper"),void 0!==s)for(s.setAttribute("aria-expanded","false"),-1===s.className.indexOf("nav-menu")&&(s.className+=" nav-menu"),a.onclick=function(){-1!==o.className.indexOf("is-active")?v():(e.className+=" disable-scroll",n.className+=" js-nav-active",o.className+=" is-active",a.className+=" is-active",a.setAttribute("aria-expanded","true"),s.setAttribute("aria-expanded","true"),l=o.querySelectorAll(["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])']),d=l[0],h=l[l.length-1],console.log(l),h.addEventListener("keydown",function(t){9!==t.keyCode||t.shiftKey||(t.preventDefault(),a.focus())}),d.addEventListener("keydown",function(t){9===t.keyCode&&t.shiftKey&&(t.preventDefault(),a.focus())}),a.addEventListener("keydown",function(t){9===t.keyCode&&t.shiftKey&&(t.preventDefault(),h.focus())}))},document.addEventListener("keyup",function(t){27==t.keyCode&&-1!==o.className.indexOf("is-active")&&v()}),r.onclick=function(t){t.target==r&&-1!==o.className.indexOf("is-active")&&v()},i=s.getElementsByTagName("a"),s.getElementsByTagName("ul"),c=0,u=i.length;c<u;c++)i[c].addEventListener("focus",w,!0),i[c].addEventListener("blur",w,!0);else a.style.display="none";function v(){e.className=e.className.replace(" disable-scroll",""),n.className=n.className.replace(" js-nav-active",""),o.className=o.className.replace(" is-active",""),a.className=a.className.replace(" is-active",""),a.setAttribute("aria-expanded","false"),s.setAttribute("aria-expanded","false"),a.focus()}function w(){for(var t=this;-1===t.className.indexOf("nav-menu");)"li"===t.tagName.toLowerCase()&&(-1!==t.className.indexOf("focus")?t.className=t.className.replace(" focus",""):t.className+=" focus"),t=t.parentElement}}(jQuery),function(){"use strict";var t={"circ-in":function(t){return-1*(Math.sqrt(1-t*t)-1)},"circ-out":function(t){return Math.sqrt(1-(t-=1)*t)},"circ-in-out":function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},"cubic-in":function(t){return t*t*t},"cubic-out":function(t){return--t*t*t+1},"cubic-in-out":function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},"elastic-in":function(t){var e=1.70158,n=0,o=1;if(0==t)return 0;if(1==t)return 1;if(n||(n=.3),o<Math.abs(1)){o=1;e=n/4}else e=n/(2*Math.PI)*Math.asin(1/o);return-o*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)},"elastic-out":function(t){var e=1.70158,n=0,o=1;if(0==t)return 0;if(1==t)return 1;if(n||(n=.3),o<Math.abs(1)){o=1;e=n/4}else e=n/(2*Math.PI)*Math.asin(1/o);return o*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1},"elastic-in-out":function(t){var e=1.70158,n=0,o=1;if(0==t)return 0;if(2==(t/=.5))return 1;if(n||(n=.3*1.5*1),o<Math.abs(1)){o=1;e=n/4}else e=n/(2*Math.PI)*Math.asin(1/o);return t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:o*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1},"expo-in":function(t){return 0==t?0:Math.pow(2,10*(t-1))},"expo-out":function(t){return 1==t?1:1-Math.pow(2,-10*t)},"expo-in-out":function(t){return 0==t?0:1==t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},linear:function(t){return t},"quad-in":function(t){return t*t},"quad-out":function(t){return t*(2-t)},"quad-in-out":function(t){return t<.5?2*t*t:(4-2*t)*t-1},"quart-in":function(t){return t*t*t*t},"quart-out":function(t){return 1- --t*t*t*t},"quart-in-out":function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},"quint-in":function(t){return t*t*t*t*t},"quint-out":function(t){return 1+--t*t*t*t*t},"quint-in-out":function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},"sine-in":function(t){return 1-Math.cos(t*(Math.PI/2))},"sine-out":function(t){return Math.sin(t*(Math.PI/2))},"sine-in-out":function(t){return.5*(1-Math.cos(Math.PI*t))}},e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,n=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.oCancelAnimationFrame;function o(t,e,n){var o,a={};for(o in t)switch(o){case"fill":case"stroke":a[o]=c(t[o]),a[o].r=t[o].r+(e[o].r-t[o].r)*n,a[o].g=t[o].g+(e[o].g-t[o].g)*n,a[o].b=t[o].b+(e[o].b-t[o].b)*n,a[o].opacity=t[o].opacity+(e[o].opacity-t[o].opacity)*n;break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":a[o]=t[o]+(e[o]-t[o])*n}return a}function a(t){var e,n={};for(e in t)switch(e){case"fill":case"stroke":n[e]=k(t[e]);break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":n[e]=t[e]}return n}function s(t,e){var n,o=[{},{}];for(n in t)switch(n){case"fill":case"stroke":o[0][n]=N(t[n]),void 0===e[n]&&(o[1][n]=N(t[n]),o[1][n].opacity=0);break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":o[0][n]=t[n],void 0===e[n]&&(o[1][n]=1)}for(n in e)switch(n){case"fill":case"stroke":o[1][n]=N(e[n]),void 0===t[n]&&(o[0][n]=N(e[n]),o[0][n].opacity=0);break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":o[1][n]=e[n],void 0===t[n]&&(o[0][n]=1)}return o}function r(t,e,n){var o={};for(var a in t)switch(a){case"rotate":o[a]=[0,0,0];for(var s=0;s<3;s++)o[a][s]=t[a][s]+(e[a][s]-t[a][s])*n}return o}function i(t,e,n){for(var o=[],a=0,s=t.length;a<s;a++){o.push([t[a][0]]);for(var r=1,i=t[a].length;r<i;r++)o[a].push(t[a][r]+(e[a][r]-t[a][r])*n)}return o}function c(t){var e;if(t instanceof Array){e=[];for(var n=0,o=t.length;n<o;n++)e[n]=c(t[n]);return e}if(t instanceof Object){for(var a in e={},t)t.hasOwnProperty(a)&&(e[a]=c(t[a]));return e}return t}var u="\t\n\v\f\r   ᠎             　\u2028\u2029",l=new RegExp("([a-z])["+u+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+u+"]*,?["+u+"]*)+)","ig"),d=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+u+"]*,?["+u+"]*","ig"),h=function(t,e){for(var n=[],o=0,a=t.length;a-2*!e>o;o+=2){var s=[{x:+t[o-2],y:+t[o-1]},{x:+t[o],y:+t[o+1]},{x:+t[o+2],y:+t[o+3]},{x:+t[o+4],y:+t[o+5]}];e?o?a-4==o?s[3]={x:+t[0],y:+t[1]}:a-2==o&&(s[2]={x:+t[0],y:+t[1]},s[3]={x:+t[2],y:+t[3]}):s[0]={x:+t[a-2],y:+t[a-1]}:a-4==o?s[3]=s[2]:o||(s[0]={x:+t[o],y:+t[o+1]}),n.push(["C",(-s[0].x+6*s[1].x+s[2].x)/6,(-s[0].y+6*s[1].y+s[2].y)/6,(s[1].x+6*s[2].x-s[3].x)/6,(s[1].y+6*s[2].y-s[3].y)/6,s[2].x,s[2].y])}return n},p=function(t,e,n,o,a){if(null==a&&null==o&&(o=n),t=+t,e=+e,n=+n,o=+o,null!=a)var s=Math.PI/180,r=t+n*Math.cos(-o*s),i=t+n*Math.cos(-a*s),c=[["M",r,e+n*Math.sin(-o*s)],["A",n,n,0,+(a-o>180),0,i,e+n*Math.sin(-a*s)]];else c=[["M",t,e],["m",0,-o],["a",n,o,0,1,1,0,2*o],["a",n,o,0,1,1,0,-2*o],["z"]];return c},f=function(t){if(!(t=function(t){if(!t)return null;if(typeof t==typeof[])return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},n=[];return String(t).replace(l,function(t,o,a){var s=[],r=o.toLowerCase();if(a.replace(d,function(t,e){e&&s.push(+e)}),"m"==r&&s.length>2&&(n.push([o].concat(s.splice(0,2))),r="l",o="m"==o?"l":"L"),"o"==r&&1==s.length&&n.push([o,s[0]]),"r"==r)n.push([o].concat(s));else for(;s.length>=e[r]&&(n.push([o].concat(s.splice(0,e[r]))),e[r]););}),n}(t))||!t.length)return[["M",0,0]];var e,n=[],o=0,a=0,s=0,r=0,i=0;"M"==t[0][0]&&(s=o=+t[0][1],r=a=+t[0][2],i++,n[0]=["M",o,a]);for(var c,u,f=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),m=i,g=t.length;m<g;m++){if(n.push(c=[]),(e=(u=t[m])[0])!=e.toUpperCase())switch(c[0]=e.toUpperCase(),c[0]){case"A":c[1]=u[1],c[2]=u[2],c[3]=u[3],c[4]=u[4],c[5]=u[5],c[6]=+u[6]+o,c[7]=+u[7]+a;break;case"V":c[1]=+u[1]+a;break;case"H":c[1]=+u[1]+o;break;case"R":for(var y=[o,a].concat(u.slice(1)),v=2,w=y.length;v<w;v++)y[v]=+y[v]+o,y[++v]=+y[v]+a;n.pop(),n=n.concat(h(y,f));break;case"O":n.pop(),(y=p(o,a,u[1],u[2])).push(y[0]),n=n.concat(y);break;case"U":n.pop(),n=n.concat(p(o,a,u[1],u[2],u[3])),c=["U"].concat(n[n.length-1].slice(-2));break;case"M":s=+u[1]+o,r=+u[2]+a;default:for(v=1,w=u.length;v<w;v++)c[v]=+u[v]+(v%2?o:a)}else if("R"==e)y=[o,a].concat(u.slice(1)),n.pop(),n=n.concat(h(y,f)),c=["R"].concat(u.slice(-2));else if("O"==e)n.pop(),(y=p(o,a,u[1],u[2])).push(y[0]),n=n.concat(y);else if("U"==e)n.pop(),n=n.concat(p(o,a,u[1],u[2],u[3])),c=["U"].concat(n[n.length-1].slice(-2));else for(var b=0,I=u.length;b<I;b++)c[b]=u[b];if("O"!=(e=e.toUpperCase()))switch(c[0]){case"Z":o=+s,a=+r;break;case"H":o=c[1];break;case"V":a=c[1];break;case"M":s=c[c.length-2],r=c[c.length-1];default:o=c[c.length-2],a=c[c.length-1]}}return n},m=function(t,e,n,o){return[t,e,n,o,n,o]},g=function(t,e,n,o,a,s){return[1/3*t+2/3*n,1/3*e+2/3*o,1/3*a+2/3*n,1/3*s+2/3*o,a,s]},y=function(t,e,n,o,a,s,r,i,c,u){var l,d=120*Math.PI/180,h=Math.PI/180*(+a||0),p=[],f=function(t,e,n){return{x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)}};if(u)_=u[0],k=u[1],x=u[2],M=u[3];else{t=(l=f(t,e,-h)).x,e=l.y,i=(l=f(i,c,-h)).x,c=l.y;Math.cos(Math.PI/180*a),Math.sin(Math.PI/180*a);var m=(t-i)/2,g=(e-c)/2,v=m*m/(n*n)+g*g/(o*o);v>1&&(n*=v=Math.sqrt(v),o*=v);var w=n*n,b=o*o,I=(s==r?-1:1)*Math.sqrt(Math.abs((w*b-w*g*g-b*m*m)/(w*g*g+b*m*m))),x=I*n*g/o+(t+i)/2,M=I*-o*m/n+(e+c)/2,_=Math.asin(((e-M)/o).toFixed(9)),k=Math.asin(((c-M)/o).toFixed(9));_=t<x?Math.PI-_:_,k=i<x?Math.PI-k:k,_<0&&(_=2*Math.PI+_),k<0&&(k=2*Math.PI+k),r&&_>k&&(_-=2*Math.PI),!r&&k>_&&(k-=2*Math.PI)}var C=k-_;if(Math.abs(C)>d){var E=k,N=i,A=c;k=_+d*(r&&k>_?1:-1),i=x+n*Math.cos(k),c=M+o*Math.sin(k),p=y(i,c,n,o,a,0,r,N,A,[k,E,x,M])}C=k-_;var L=Math.cos(_),T=Math.sin(_),q=Math.cos(k),S=Math.sin(k),P=Math.tan(C/4),F=4/3*n*P,O=4/3*o*P,D=[t,e],j=[t+F*T,e-O*L],R=[i+F*S,c-O*q],B=[i,c];if(j[0]=2*D[0]-j[0],j[1]=2*D[1]-j[1],u)return[j,R,B].concat(p);for(var G=[],V=0,z=(p=[j,R,B].concat(p).join().split(",")).length;V<z;V++)G[V]=V%2?f(p[V-1],p[V],h).y:f(p[V],p[V+1],h).x;return G},v=function(t,e){for(var n=f(t),o=e&&f(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},r=function(t,e,n){var o,a;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(y.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"==n||"S"==n?(o=2*e.x-e.bx,a=2*e.y-e.by):(o=e.x,a=e.y),t=["C",o,a].concat(t.slice(1));break;case"T":"Q"==n||"T"==n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(g(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(g(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(m(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(m(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(m(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(m(e.x,e.y,e.X,e.Y))}return t},i=function(t,e){if(t[e].length>7){t[e].shift();for(var a=t[e];a.length;)u[e]="A",o&&(l[e]="A"),t.splice(e++,0,["C"].concat(a.splice(0,6)));t.splice(e,1),v=Math.max(n.length,o&&o.length||0)}},c=function(t,e,a,s,r){t&&e&&"M"==t[r][0]&&"M"!=e[r][0]&&(e.splice(r,0,["M",s.x,s.y]),a.bx=0,a.by=0,a.x=t[r][1],a.y=t[r][2],v=Math.max(n.length,o&&o.length||0))},u=[],l=[],d="",h="",p=0,v=Math.max(n.length,o&&o.length||0);p<v;p++){n[p]&&(d=n[p][0]),"C"!=d&&(u[p]=d,p&&(h=u[p-1])),n[p]=r(n[p],a,h),"A"!=u[p]&&"C"==d&&(u[p]="C"),i(n,p),o&&(o[p]&&(d=o[p][0]),"C"!=d&&(l[p]=d,p&&(h=l[p-1])),o[p]=r(o[p],s,h),"A"!=l[p]&&"C"==d&&(l[p]="C"),i(o,p)),c(n,o,a,s,p),c(o,n,s,a,p);var w=n[p],b=o&&o[p],I=w.length,x=o&&b.length;a.x=w[I-2],a.y=w[I-1],a.bx=parseFloat(w[I-4])||a.x,a.by=parseFloat(w[I-3])||a.y,s.bx=o&&(parseFloat(b[x-4])||s.x),s.by=o&&(parseFloat(b[x-3])||s.y),s.x=o&&b[x-2],s.y=o&&b[x-1]}return o?[n,o]:n},w=function(t,e,n,o,a,s,r,i){for(var c,u,l,d,h,p,f,m,g=[],y=[[],[]],v=0;v<2;++v)if(0==v?(u=6*t-12*n+6*a,c=-3*t+9*n-9*a+3*r,l=3*n-3*t):(u=6*e-12*o+6*s,c=-3*e+9*o-9*s+3*i,l=3*o-3*e),Math.abs(c)<1e-12){if(Math.abs(u)<1e-12)continue;0<(d=-l/u)&&d<1&&g.push(d)}else f=u*u-4*l*c,m=Math.sqrt(f),f<0||(0<(h=(-u+m)/(2*c))&&h<1&&g.push(h),0<(p=(-u-m)/(2*c))&&p<1&&g.push(p));for(var w,b=g.length,I=b;b--;)w=1-(d=g[b]),y[0][b]=w*w*w*t+3*w*w*d*n+3*w*d*d*a+d*d*d*r,y[1][b]=w*w*w*e+3*w*w*d*o+3*w*d*d*s+d*d*d*i;return y[0][I]=t,y[1][I]=e,y[0][I+1]=r,y[1][I+1]=i,y[0].length=y[1].length=I+2,{min:{x:Math.min.apply(0,y[0]),y:Math.min.apply(0,y[1])},max:{x:Math.max.apply(0,y[0]),y:Math.max.apply(0,y[1])}}},b=function(t){for(var e,n=0,o=0,a=[],s=[],r=0,i=t.length;r<i;r++)if("M"==(e=t[r])[0])n=e[1],o=e[2],a.push(n),s.push(o);else{var c=w(n,o,e[1],e[2],e[3],e[4],e[5],e[6]);a=a.concat(c.min.x,c.max.x),s=s.concat(c.min.y,c.max.y),n=e[5],o=e[6]}var u=Math.min.apply(0,a),l=Math.min.apply(0,s);return function(t,e,n,o){return null==t&&(t=e=n=o=0),null==e&&(e=t.y,n=t.width,o=t.height,t=t.x),{x:t,y:e,w:n,h:o,cx:t+n/2,cy:e+o/2}}(u,l,Math.max.apply(0,a)-u,Math.max.apply(0,s)-l)},I=/,?([a-z]),?/gi,x={hs:1,rg:1},M=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,_=new RegExp("["+u+"]*,["+u+"]*"),k=function(t){var e=Math.round;return"rgba("+[e(t.r),e(t.g),e(t.b),+t.opacity.toFixed(2)]+")"},C=function(t){var e=window.document.getElementsByTagName("head")[0]||window.document.getElementsByTagName("svg")[0],n="rgb(255, 0, 0)";return(C=function(t){if("red"==t.toLowerCase())return n;e.style.color=n,e.style.color=t;var o=window.document.defaultView.getComputedStyle(e,"").getPropertyValue("color");return o==n?null:o})(t)},E=function(t,e,n,o){return{r:t=Math.round(255*t),g:e=Math.round(255*e),b:n=Math.round(255*n),opacity:isFinite(o)?o:1}},N=function(t){if(!t||(t=String(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,opacity:-1,error:1};if("none"==t)return{r:-1,g:-1,b:-1,opacity:-1};if(!x.hasOwnProperty(t.toLowerCase().substring(0,2))&&"#"!=t.charAt()&&(t=C(t)),!t)return{r:-1,g:-1,b:-1,opacity:-1,error:1};var e,n,o,a,s,r,i,c,u,l,d,h,p,f,m,g=t.match(M);return g?(g[2]&&(o=parseInt(g[2].substring(5),16),n=parseInt(g[2].substring(3,5),16),e=parseInt(g[2].substring(1,3),16)),g[3]&&(o=parseInt((s=g[3].charAt(3))+s,16),n=parseInt((s=g[3].charAt(2))+s,16),e=parseInt((s=g[3].charAt(1))+s,16)),g[4]&&(r=g[4].split(_),e=parseFloat(r[0]),"%"==r[0].slice(-1)&&(e*=2.55),n=parseFloat(r[1]),"%"==r[1].slice(-1)&&(n*=2.55),o=parseFloat(r[2]),"%"==r[2].slice(-1)&&(o*=2.55),"rgba"==g[1].toLowerCase().slice(0,4)&&(a=parseFloat(r[3])),r[3]&&"%"==r[3].slice(-1)&&(a/=100)),g[5]?(r=g[5].split(_),e=parseFloat(r[0]),"%"==r[0].slice(-1)&&(e/=100),n=parseFloat(r[1]),"%"==r[1].slice(-1)&&(n/=100),o=parseFloat(r[2]),"%"==r[2].slice(-1)&&(o/=100),("deg"==r[0].slice(-3)||"°"==r[0].slice(-1))&&(e/=360),"hsba"==g[1].toLowerCase().slice(0,4)&&(a=parseFloat(r[3])),r[3]&&"%"==r[3].slice(-1)&&(a/=100),c=n,u=o,l=a,typeof(i=e)==typeof{}&&"h"in i&&"s"in i&&"b"in i&&(u=i.b,c=i.s,l=(i=i.h).o),i=(i*=360)%360/60,f=(m=u*c)*(1-Math.abs(i%2-1)),d=h=p=u-m,E(d+=[m,f,0,0,f,m][i=~~i],h+=[f,m,m,f,0,0][i],p+=[0,0,f,m,m,f][i],l)):g[6]?(r=g[6].split(_),e=parseFloat(r[0]),"%"==r[0].slice(-1)&&(e/=100),n=parseFloat(r[1]),"%"==r[1].slice(-1)&&(n/=100),o=parseFloat(r[2]),"%"==r[2].slice(-1)&&(o/=100),("deg"==r[0].slice(-3)||"°"==r[0].slice(-1))&&(e/=360),"hsla"==g[1].toLowerCase().slice(0,4)&&(a=parseFloat(r[3])),r[3]&&"%"==r[3].slice(-1)&&(a/=100),function(t,e,n,o){var a,s,r,i,c;return typeof t==typeof{}&&"h"in t&&"s"in t&&"l"in t&&(n=t.l,e=t.s,t=t.h),(t>1||e>1||n>1)&&(t/=360,e/=100,n/=100),t=(t*=360)%360/60,i=(c=2*e*(n<.5?n:1-n))*(1-Math.abs(t%2-1)),a=s=r=n-c/2,E(a+=[c,i,0,0,i,c][t=~~t],s+=[i,c,c,i,0,0][t],r+=[0,0,i,c,c,i][t],o)}(e,n,o,a)):(e=Math.min(Math.round(e),255),n=Math.min(Math.round(n),255),o=Math.min(Math.round(o),255),a=Math.min(Math.max(a,0),1),(g={r:e,g:n,b:o}).opacity=isFinite(a)?a:1,g)):{r:-1,g:-1,b:-1,opacity:-1,error:1}};function A(t,n,o){if(!t)throw new Error('SVGMorpheus > "element" is required');if("string"==typeof t&&!(t=document.querySelector(t)))throw new Error('SVGMorpheus > "element" query is not related to an existing DOM node');if(n&&typeof n!=typeof{})throw new Error('SVGMorpheus > "options" parameter must be an object');if(n=n||{},o&&"function"!=typeof o)throw new Error('SVGMorpheus > "callback" parameter must be a function');var a=this;this._icons={},this._curIconId=n.iconId||"",this._toIconId="",this._curIconItems=[],this._fromIconItems=[],this._toIconItems=[],this._morphNodes=[],this._morphG,this._startTime,this._defDuration=n.duration||750,this._defEasing=n.easing||"quad-in-out",this._defRotation=n.rotation||"clock",this._defCallback=o||function(){},this._duration=this._defDuration,this._easing=this._defEasing,this._rotation=this._defRotation,this._callback=this._defCallback,this._rafid,this._fnTick=function(t){a._startTime||(a._startTime=t);var n=Math.min((t-a._startTime)/a._duration,1);a._updateAnimationProgress(n),n<1?a._rafid=e(a._fnTick):""!=a._toIconId&&a._animationEnd()},"SVG"===t.nodeName.toUpperCase()?this._svgDoc=t:this._svgDoc=t.getSVGDocument(),this._svgDoc?a._init():t.addEventListener("load",function(){a._svgDoc=t.getSVGDocument(),a._init()},!1)}A.prototype._init=function(){if("SVG"!==this._svgDoc.nodeName.toUpperCase()&&(this._svgDoc=this._svgDoc.getElementsByTagName("svg")[0]),this._svgDoc){var t,e,n,o,a,s,r,i="";for(t=this._svgDoc.childNodes.length-1;t>=0;t--){var c=this._svgDoc.childNodes[t];if("G"===c.nodeName.toUpperCase()&&(e=c.getAttribute("id"))){for(n=[],a=0,s=c.childNodes.length;a<s;a++){var u=c.childNodes[a];switch(o={path:"",attrs:{},style:{}},u.nodeName.toUpperCase()){case"PATH":o.path=u.getAttribute("d");break;case"CIRCLE":var l=1*u.getAttribute("cx"),d=1*u.getAttribute("cy"),h=1*u.getAttribute("r");o.path="M"+(l-h)+","+d+"a"+h+","+h+" 0 1,0 "+2*h+",0a"+h+","+h+" 0 1,0 -"+2*h+",0z";break;case"ELLIPSE":l=1*u.getAttribute("cx"),d=1*u.getAttribute("cy");var p=1*u.getAttribute("rx"),f=1*u.getAttribute("ry");o.path="M"+(l-p)+","+d+"a"+p+","+f+" 0 1,0 "+2*p+",0a"+p+","+f+" 0 1,0 -"+2*p+",0z";break;case"RECT":var m=1*u.getAttribute("x"),g=1*u.getAttribute("y"),y=1*u.getAttribute("width"),v=1*u.getAttribute("height");p=1*u.getAttribute("rx"),f=1*u.getAttribute("ry");o.path=p||f?"M"+(m+p)+","+g+"l"+(y-2*p)+",0a"+p+","+f+" 0 0,1 "+p+","+f+"l0,"+(v-2*f)+"a"+p+","+f+" 0 0,1 -"+p+","+f+"l"+(2*p-y)+",0a"+p+","+f+" 0 0,1 -"+p+",-"+f+"l0,"+(2*f-v)+"a"+p+","+f+" 0 0,1 "+p+",-"+f+"z":"M"+m+","+g+"l"+y+",0l0,"+v+"l-"+y+",0z";break;case"POLYGON":for(var w=u.getAttribute("points").split(/\s+/),b="",I=0,x=w.length;I<x;I++)b+=(I?"L":"M")+w[I];o.path=b+"z";break;case"LINE":var M=1*u.getAttribute("x1"),_=1*u.getAttribute("y1"),k=1*u.getAttribute("x2"),C=1*u.getAttribute("y2");o.path="M"+M+","+_+"L"+k+","+C+"z"}if(""!=o.path){I=0;for(var E=u.attributes.length;I<E;I++){var N=u.attributes[I];if(N.specified){var A=N.name.toLowerCase();switch(A){case"fill":case"fill-opacity":case"opacity":case"stroke":case"stroke-opacity":case"stroke-width":o.attrs[A]=N.value}}}for(var L=0,T=u.style.length;L<T;L++){var q=u.style[L];switch(q){case"fill":case"fill-opacity":case"opacity":case"stroke":case"stroke-opacity":case"stroke-width":o.style[q]=u.style[q]}}n.push(o)}}n.length>0&&(r={id:e,items:n},this._icons[e]=r),this._morphG?this._svgDoc.removeChild(c):(i=e,this._morphG=document.createElementNS("http://www.w3.org/2000/svg","g"),this._svgDoc.replaceChild(this._morphG,c))}}var S=this._curIconId||i;""!==S&&(this._setupAnimation(S),this._updateAnimationProgress(1),this._animationEnd())}},A.prototype._setupAnimation=function(t){if(t&&this._icons[t]){var e,n;for(this._toIconId=t,this._startTime=void 0,this._fromIconItems=c(this._curIconItems),this._toIconItems=c(this._icons[t].items),e=0,n=this._morphNodes.length;e<n;e++){var o=this._morphNodes[e];o.fromIconItemIdx=e,o.toIconItemIdx=e}var r,i=Math.max(this._fromIconItems.length,this._toIconItems.length);for(e=0;e<i;e++)if(this._fromIconItems[e]||(this._toIconItems[e]?(r=b(v(this._toIconItems[e].path)),this._fromIconItems.push({path:"M"+r.cx+","+r.cy+"l0,0",attrs:{},style:{},trans:{rotate:[0,r.cx,r.cy]}})):this._fromIconItems.push({path:"M0,0l0,0",attrs:{},style:{},trans:{rotate:[0,0,0]}})),this._toIconItems[e]||(this._fromIconItems[e]?(r=b(v(this._fromIconItems[e].path)),this._toIconItems.push({path:"M"+r.cx+","+r.cy+"l0,0",attrs:{},style:{},trans:{rotate:[0,r.cx,r.cy]}})):this._toIconItems.push({path:"M0,0l0,0",attrs:{},style:{},trans:{rotate:[0,0,0]}})),!this._morphNodes[e]){var u=document.createElementNS("http://www.w3.org/2000/svg","path");this._morphG.appendChild(u),this._morphNodes.push({node:u,fromIconItemIdx:e,toIconItemIdx:e})}for(e=0;e<i;e++){var l=this._fromIconItems[e],d=this._toIconItems[e],h=v(this._fromIconItems[e].path,this._toIconItems[e].path);l.curve=h[0],d.curve=h[1];var p=s(this._fromIconItems[e].attrs,this._toIconItems[e].attrs);l.attrsNorm=p[0],d.attrsNorm=p[1],l.attrs=a(l.attrsNorm),d.attrs=a(d.attrsNorm);var f=s(this._fromIconItems[e].style,this._toIconItems[e].style);l.styleNorm=f[0],d.styleNorm=f[1],l.style=a(l.styleNorm),d.style=a(d.styleNorm),r=b(d.curve),d.trans={rotate:[0,r.cx,r.cy]};var m,g=this._rotation;switch("random"===g&&(g=Math.random()<.5?"counterclock":"clock"),g){case"none":l.trans.rotate&&(d.trans.rotate[0]=l.trans.rotate[0]);break;case"counterclock":l.trans.rotate?(d.trans.rotate[0]=l.trans.rotate[0]-360,m=-l.trans.rotate[0]%360,d.trans.rotate[0]+=m<180?m:m-360):d.trans.rotate[0]=-360;break;default:l.trans.rotate?(d.trans.rotate[0]=l.trans.rotate[0]+360,m=l.trans.rotate[0]%360,d.trans.rotate[0]+=m<180?-m:360-m):d.trans.rotate[0]=360}}this._curIconItems=c(this._fromIconItems)}},A.prototype._updateAnimationProgress=function(e){var n,s,c,u,l,d;for(e=t[this._easing](e),n=0,u=this._curIconItems.length;n<u;n++)this._curIconItems[n].curve=i(this._fromIconItems[n].curve,this._toIconItems[n].curve,e),this._curIconItems[n].path=this._curIconItems[n].curve.join(",").replace(I,"$1"),this._curIconItems[n].attrsNorm=o(this._fromIconItems[n].attrsNorm,this._toIconItems[n].attrsNorm,e),this._curIconItems[n].attrs=a(this._curIconItems[n].attrsNorm),this._curIconItems[n].styleNorm=o(this._fromIconItems[n].styleNorm,this._toIconItems[n].styleNorm,e),this._curIconItems[n].style=a(this._curIconItems[n].styleNorm),this._curIconItems[n].trans=r(this._fromIconItems[n].trans,this._toIconItems[n].trans,e),this._curIconItems[n].transStr=(l=this._curIconItems[n].trans,d=void 0,d="",l.rotate&&(d+="rotate("+l.rotate.join(" ")+")"),d);for(n=0,u=this._morphNodes.length;n<u;n++){var h=this._morphNodes[n];h.node.setAttribute("d",this._curIconItems[n].path);var p=this._curIconItems[n].attrs;for(s in p)h.node.setAttribute(s,p[s]);var f=this._curIconItems[n].style;for(c in f)h.node.style[c]=f[c];h.node.setAttribute("transform",this._curIconItems[n].transStr)}},A.prototype._animationEnd=function(){for(var t=this._morphNodes.length-1;t>=0;t--){var e=this._morphNodes[t];this._icons[this._toIconId].items[t]?e.node.setAttribute("d",this._icons[this._toIconId].items[t].path):(e.node.parentNode.removeChild(e.node),this._morphNodes.splice(t,1))}this._curIconId=this._toIconId,this._toIconId="",this._callback()},A.prototype.to=function(t,o,a){if(t!==this._toIconId){if(o&&typeof o!=typeof{})throw new Error('SVGMorpheus.to() > "options" parameter must be an object');if(o=o||{},a&&"function"!=typeof a)throw new Error('SVGMorpheus.to() > "callback" parameter must be a function');n(this._rafid),this._duration=o.duration||this._defDuration,this._easing=o.easing||this._defEasing,this._rotation=o.rotation||this._defRotation,this._callback=a||this._defCallback,this._setupAnimation(t),this._rafid=e(this._fnTick)}},A.prototype.registerEasing=function(e,n){t[e]=n},"function"==typeof define&&define.amd?define(function(){return A}):"undefined"!=typeof module&&void 0!==module.exports?module.exports=A:window.SVGMorpheus=A}(),document.body.classList.remove("no-js"),document.body.classList.add("js"),function(t){t(window).scroll(function(){t(this).scrollTop()>300?t(".top").addClass("is-visible"):t(".top").removeClass("is-visible"),t(this).scrollTop()>1200?t(".top").addClass("fade-out"):t(".top").removeClass("fade-out")}),t(function(){var e=document;if(t("#service-switcher").length)for(var n=e.getElementById("service-switcher").getElementsByTagName("button"),o=e.getElementById("highlight"),a=0,s=n.length;a<s;a++)n[a].addEventListener("mouseover",function(t){var n=t.target;e.getElementById("init");o.style.top=n.offsetTop+"px"}),n[a].addEventListener("mouseout",function(t){var n=t.target,a=e.getElementById("init"),s=document.getElementsByClassName("clicked");if(void 0!==s)var r=s[0].offsetTop+"px";n.classList.contains("clicked")?(o.style.top=r,n.classList.add("has-focus")):(void 0!==r?o.style.top=r:(o.style.top=0,a.classList.add("has-focus")),n.classList.remove("clicked"))}),n[a].addEventListener("click",function(e){var n=e.target;jQuery(".service-switcher button").removeClass("has-focus clicked"),n.classList.add("clicked"),n.classList.add("has-focus"),o.style.top=n.offsetTop+"px";var a=n.getAttribute("data-tab");jQuery(".content-tab").fadeOut(600,function(){t(this).removeClass("is-visible")}),jQuery("#"+a).addClass("animating"),jQuery("#"+a).fadeIn(600,function(){t(this).addClass("is-visible"),t(this).removeClass("animating")})});t(".dude-nav-more a").hover(function(){t(this).parent().parent().addClass("fade-out")},function(){t(this).parent().parent().removeClass("fade-out")}),setTimeout(function(){t(".opacity-on-load").addClass("fade-in")},500),setTimeout(function(){t(".block-hero").addClass("block-hero-enable-transition")},3e3),t(".opacity-on-load-instant").addClass("fade-in");var r=new MoveTo,i=document.getElementById("target");r.move(i);var c=document.getElementsByClassName("js-trigger")[0];r.registerTrigger(c)})}(jQuery);