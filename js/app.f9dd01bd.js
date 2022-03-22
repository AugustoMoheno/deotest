(function(){"use strict";var e={7135:function(e,t,n){var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},i=[],u={name:"App",data:()=>({})},a=u,c=n(1001),l=n(3453),f=n.n(l),s=n(7524),d=n(1009),v=(0,c.Z)(a,o,i,!1,null,null,null),p=v.exports;f()(v,{VApp:s.Z,VMain:d.Z});var m=n(1910);r.Z.use(m.Z);var b=new m.Z({}),h=n(8345),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("item-nom"),n("item-nom"),n("item-nom"),n("item-nom"),n("item-nom"),[n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",large:"",fab:"",color:"blue accent-4"},on:{click:e.generatePDF}},[n("v-icon",[e._v("mdi-pencil")])],1)],1)]],2)},y=[],w=n(5917);function Z(){const e=new w.kH;e.text("Pdf generado con exito!",10,10),e.save("PDF.pdf")}var O={create:Z},_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto my-12",attrs:{outlined:"",loading:e.loading,"max-width":"374"}},[n("v-card-title",[e._v("1. Norma")]),n("v-card-text",[n("div",[e._v("Descripción del item")])]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"blue accent-4 white--text",column:""},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[n("v-chip",[e._v("Cumple")]),n("v-chip",[e._v("No Cumple")]),n("v-chip",[e._v("No aplica")])],1)],1)],1)},x=[],j={name:"ItemBasic",data:()=>({loading:!1,selection:1}),methods:{}},C=j,k=n(26),P=n(7118),E=n(5424),V=n(2884),T=n(1418),N=(0,c.Z)(C,_,x,!1,null,null,null),A=N.exports;f()(N,{VCard:k.Z,VCardText:P.ZB,VCardTitle:P.EB,VChip:E.Z,VChipGroup:V.Z,VDivider:T.Z});var S={name:"IndexView",components:{ItemNom:A},data(){return{drawer:null,items:[{title:"Home",icon:"mdi-view-dashboard"},{title:"About",icon:"mdi-forum"}]}},methods:{generatePDF(){O.create()}}},B=S,D=n(680),F=n(6428),M=(0,c.Z)(B,g,y,!1,null,null,null),I=M.exports;f()(M,{VBtn:D.Z,VIcon:F.Z}),r.Z.use(h.Z);const $=[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,9030))}],H=new h.Z({routes:$});var L=H,q=n(629);r.Z.use(q.ZP);var G=new q.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.Z.config.productionTip=!1,new r.Z({vuetify:b,router:L,store:G,render:e=>e(p)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){u[e]=function(){return r[e]}}));return u["default"]=function(){return r},n.d(i,u),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{120:"1e13e5f9",443:"b08d9dd4",856:"8d547ba7",939:"e89335c9"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="deo:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/deotest/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(t&&t(r);l<u.length;l++)i=u[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkdeo"]=self["webpackChunkdeo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7135)}));r=n.O(r)})();
//# sourceMappingURL=app.f9dd01bd.js.map