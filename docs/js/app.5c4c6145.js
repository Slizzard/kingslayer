(function(e){function n(n){for(var r,a,u=n[0],c=n[1],s=n[2],l=0,p=[];l<u.length;l++)a=u[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(p.length)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},i=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"994ccd4d"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var i,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(e),i=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,t[1](a)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,c.appendChild(s)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var f=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"0ae4":function(e,n,t){"use strict";var r=t("8d36"),o=t.n(r);o.a},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),o=t.n(r);o.a},"5e27":function(e,n,t){},"8d36":function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n      "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},i=[],a=(t("5c0b"),t("2877")),u={},c=Object(a["a"])(u,o,i,!1,null,null,null);c.options.__file="App.vue";var s=c.exports,l=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("Description",{attrs:{msg:"Kingslayer"}})],1)},p=[],d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"description"},[t("h1",[e._v(e._s(e.msg))]),t("p",[e._v("A text adventure game written in Rust.")])])},v=[],m=r["a"].extend({name:"Description",props:{msg:String}}),b=m,g=(t("0ae4"),Object(a["a"])(b,d,v,!1,null,"4d7108b8",null));g.options.__file="Description.vue";var h=g.exports,w=r["a"].extend({name:"home",components:{Description:h}}),_=w,y=Object(a["a"])(_,f,p,!1,null,null,null);y.options.__file="Home.vue";var j=y.exports;r["a"].use(l["a"]);var O=new l["a"]({routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]}),x=t("2f62");r["a"].use(x["a"]);var k=new x["a"].Store({state:{},mutations:{},actions:{}}),P=t("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:O,store:k,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.5c4c6145.js.map