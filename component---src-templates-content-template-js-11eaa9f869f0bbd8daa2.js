(self.webpackChunkashley_website=self.webpackChunkashley_website||[]).push([[482],{9662:function(t,e,n){var r=n(614),o=n(6330);t.exports=function(t){if(r(t))return t;throw TypeError(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111);t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(7466),i=n(1400),c=function(t){return function(e,n,c){var a,l=r(e),u=o(l.length),f=i(c,u);if(t&&n!=n){for(;u>f;)if((a=l[f++])!=a)return!0}else for(;u>f;f++)if((t||f in l)&&l[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),c=n(5112)("toStringTag"),a="Arguments"==i(function(){return arguments}());t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),c))?n:a?i(e):"Object"==(r=i(e))&&o(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(6656),o=n(3887),i=n(1236),c=n(3070);t.exports=function(t,e){for(var n=o(e),a=c.f,l=i.f,u=0;u<n.length;u++){var f=n[u];r(t,f)||a(t,f,l(e,f))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),c=n(8113),a=i.process,l=i.Deno,u=a&&a.versions||l&&l.version,f=u&&u.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),c=n(1320),a=n(3505),l=n(9920),u=n(4705);t.exports=function(t,e){var n,f,s,p,d,m=t.target,g=t.global,v=t.stat;if(n=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype)for(f in e){if(p=e[f],s=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!u(g?f:m+(v?".":"#")+f,t.forced)&&void 0!==s){if(typeof p==typeof s)continue;l(p,s)}(t.sham||s&&s.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},6530:function(t,e,n){var r=n(9781),o=n(6656),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),l=a&&"something"===function(){}.name,u=a&&(!r||r&&c(i,"name").configurable);t.exports={EXISTS:a,PROPER:l,CONFIGURABLE:u}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},647:function(t,e,n){var r=n(7908),o=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,l,u,f){var s=n+t.length,p=l.length,d=a;return void 0!==u&&(u=r(u),d=c),i.call(f,d,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(s);case"<":c=u[i.slice(1,-1)];break;default:var a=+i;if(0===a)return r;if(a>p){var f=o(a/10);return 0===f?r:f<=p?void 0===l[f-1]?i.charAt(1):l[f-1]+i.charAt(1):r}c=l[a-1]}return void 0===c?"":c}))}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(t,e,n){var r=n(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,e,n){var r=n(614),o=n(5465),i=Function.toString;r(o.inspectSource)||(o.inspectSource=function(t){return i.call(t)}),t.exports=o.inspectSource},9909:function(t,e,n){var r,o,i,c=n(8536),a=n(7854),l=n(111),u=n(8880),f=n(6656),s=n(5465),p=n(6200),d=n(3501),m="Object already initialized",g=a.WeakMap;if(c||s.state){var v=s.state||(s.state=new g),y=v.get,x=v.has,h=v.set;r=function(t,e){if(x.call(v,t))throw new TypeError(m);return e.facade=t,h.call(v,t,e),e},o=function(t){return y.call(v,t)||{}},i=function(t){return x.call(v,t)}}else{var w=p("state");d[w]=!0,r=function(t,e){if(f(t,w))throw new TypeError(m);return e.facade=t,u(t,w,e),e},o=function(t){return f(t,w)?t[w]:{}},i=function(t){return f(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!l(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,c=function(t,e){var n=l[a(t)];return n==f||n!=u&&(o(e)?r(e):!!e)},a=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},l=c.data={},u=c.NATIVE="N",f=c.POLYFILL="P";t.exports=c},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:function(t,e,n){var r=n(614),o=n(5005),i=n(3307);t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return r(e)&&Object(t)instanceof e}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),c=r.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(9670),c=n(4948),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e),i(n),o)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(5296),i=n(9114),c=n(5656),a=n(4948),l=n(6656),u=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=a(e),u)try{return f(t,e)}catch(n){}if(l(t,e))return i(!o.f.call(t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(6656),o=n(5656),i=n(1318).indexOf,c=n(3501);t.exports=function(t,e){var n,a=o(t),l=0,u=[];for(n in a)!r(c,n)&&r(a,n)&&u.push(n);for(;e.length>l;)r(a,n=e[l++])&&(~i(u,n)||u.push(n));return u}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(614),o=n(111);t.exports=function(t,e){var n,i;if("string"===e&&r(n=t.toString)&&!o(i=n.call(t)))return i;if(r(n=t.valueOf)&&!o(i=n.call(t)))return i;if("string"!==e&&r(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(8006),i=n(5181),c=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},1320:function(t,e,n){var r=n(7854),o=n(614),i=n(6656),c=n(8880),a=n(3505),l=n(2788),u=n(9909),f=n(6530).CONFIGURABLE,s=u.get,p=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,l){var u,s=!!l&&!!l.unsafe,m=!!l&&!!l.enumerable,g=!!l&&!!l.noTargetGet,v=l&&void 0!==l.name?l.name:e;o(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||f&&n.name!==v)&&c(n,"name",v),(u=p(n)).source||(u.source=d.join("string"==typeof v?v:""))),t!==r?(s?!g&&t[e]&&(m=!0):delete t[e],m?t[e]=n:c(t,e,n)):m?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return o(this)&&s(this).source||l(this)}))},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854);t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:function(t,e,n){var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,e,n){var r=n(111),o=n(2190),i=n(8173),c=n(2140),a=n(5112)("toPrimitive");t.exports=function(t,e){if(!r(t)||o(t))return t;var n,l=i(t,a);if(l){if(void 0===e&&(e="default"),n=l.call(t,e),!r(n)||o(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:String(e)}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(648);t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},6330:function(t){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},9711:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(6656),c=n(9711),a=n(133),l=n(3307),u=o("wks"),f=r.Symbol,s=l?f:f&&f.withoutSetter||c;t.exports=function(t){return i(u,t)&&(a||"string"==typeof u[t])||(a&&i(f,t)?u[t]=f[t]:u[t]=s("Symbol."+t)),u[t]}},8757:function(t,e,n){"use strict";var r=n(2109),o=n(4488),i=n(614),c=n(7850),a=n(1340),l=n(8173),u=n(7066),f=n(647),s=n(5112),p=n(1913),d=s("replace"),m=RegExp.prototype,g=Math.max,v=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,s,y,x,h,w,b,S=o(this),E=0,O=0,j="";if(null!=t){if((n=c(t))&&!~a(o("flags"in m?t.flags:u.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(r=l(t,d))return r.call(t,S,e);if(p&&n)return a(S).replace(t,e)}for(s=a(S),y=a(t),(x=i(e))||(e=a(e)),h=y.length,w=g(1,h),E=v(s,y,0);-1!==E;)b=x?a(e(y,E,s)):f(y,s,E,[],void 0,e),j+=s.slice(O,E)+b,O=E+h,E=v(s,y,E+w);return O<s.length&&(j+=s.slice(O)),j}})},7207:function(t,e,n){n(8757)},5610:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(7294),o={display:"flex",flexDirection:"row",alignItems:"center",width:"100%",backgroundColor:"#000000"},i={color:"#FFFFFF",fontFamily:"Poppins",fontSize:11,fontWeight:600,flexGrow:1,letterSpacing:"0.24em",marginLeft:90},c={color:"#FFFFFF",fontFamily:"Poppins",fontSize:12,fontWeight:300,letterSpacing:"0.24em",marginRight:50,flexGrow:0};function a(){return r.createElement("main",{style:o},r.createElement("h1",{style:i},"DESIGNED BY ASHLEY WONG"),r.createElement("h1",{style:c},":)"))}},9219:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(7294),o=n(5444),i={fontFamily:"Poppins",fontWeight:700,fontSize:15,flexGrow:2,textDecoration:"none",color:"#000000",marginLeft:90},c={display:"flex",flexDirection:"horizontal",height:"160px",alignItems:"center",flexGrow:1,borderBottomStyle:"solid",borderWidth:1},a={display:"flex",flexGrow:0,marginRight:"50px"},l={flexDirection:"row",gap:"10px 60px"},u={flexDirection:"column",gap:"0px 0px"},f={fontFamily:"Poppins",fontSize:14,fontWeight:400,textDecoration:"none",color:"#000000"};function s(t){return r.createElement("main",{style:c},r.createElement(o.rU,{to:"/",style:i},"ashley wong"),r.createElement("div",{style:Object.assign({},a,t.narrowWindow?u:l)},r.createElement(o.rU,{to:"/",style:f},"projects"),r.createElement(o.rU,{to:"/",style:f},"resume"),r.createElement(o.rU,{to:"/about",style:f},"about")))}},9738:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(7294),o={display:"flex",alignSelf:"stretch",alignItems:"center",justifyContent:"center",flexDirection:"column",width:90,flexGrow:0,flexShrink:0},i={borderRightStyle:"solid",borderColor:"black",borderWidth:1},c={borderRightStyle:"solid",borderWidth:1,borderColor:"black",backgroundColor:"#4F89D6"};function a(t){return r.createElement("div",{style:Object.assign({},o,t.style,t.isHovered?c:i)},t.children)}a.defaultProps={isHovered:!1}},5414:function(t,e,n){"use strict";function r(){var t="undefined"!=typeof window?"not null":"null";return console.log("isNarrowWindow called, window is "+t),"undefined"!=typeof window&&(console.log("window width is "+window.innerWidth),window.innerWidth<=1e3)}n.d(e,{Z:function(){return r}})},8009:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return L}});var r=n(7294),o=n(3817),i=n(9219),c=n(5610),a=n(9738),l={fontFamily:"Poppins",fontSize:14,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.24em"},u={fontFamily:"Roboto",fontSize:18,fontWeight:400,marginTop:0,whiteSpace:"pre-line"},f={textDecoration:"none",color:"#4F89D6",fontWeight:"bold"};function s(t){return r.createElement("div",null,r.createElement("h1",{style:l},t.title),r.createElement("p",{style:u},t.body.split(" ").map((function(e){var n=t.links.find((function(t){return t.keyword===e}));return void 0!==n?r.createElement("a",{href:n.address,style:f},e+" "):e+" "}))))}s.defaultProps={links:[]};var p={display:"flex",width:"100%",justifyContent:"space-between"},d={flexDirection:"row",gap:"5%"},m={flexDirection:"column",gap:"0px 0px",justifyContent:"center"},g={flexGrow:0};function v(t){return r.createElement("div",{style:Object.assign({},p,t.narrowWindow?m:d)},t.content.map((function(t){return r.createElement("div",{style:g},F(t))})))}var y={display:"flex",flexDirection:"column",width:"100%"},x={fontFamily:"Poppins",fontSize:14,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.24em"},h={fontFamily:"Roboto",fontSize:18,fontWeight:400,marginTop:0};function w(t){return r.createElement("div",{style:y},r.createElement("h1",{style:x},t.title),r.createElement("p",{style:h},t.items.join(", ")))}var b={display:"flex",flexGrow:1,alignItems:"center",gap:50},S={fontFamily:"Roboto",fontWeight:400},E={width:"60%",border:0};function O(t){return r.createElement("div",{style:Object.assign({},b,{margin:t.narrowWindow?"0px 0px 0px 0px":"-90px -105px -100px 0px"})},r.createElement("h1",{style:Object.assign({},S,{fontSize:t.narrowWindow?20:25})},t.title),t.narrowWindow?r.createElement("div",null):r.createElement("img",{src:t.src,alt:t.alt,style:E}))}var j={width:"100%"};function W(t){return r.createElement("div",null,r.createElement("img",{src:t.src,alt:t.alt,style:j}))}function F(t,e){switch(t.type){case"TextBody":return r.createElement(s,{title:t.title,body:t.body,links:t.links,narrowWindow:e});case"TextImage":return r.createElement(O,{title:t.title,src:t.imageName,alt:t.alt,narrowWindow:e});case"Group":return r.createElement(v,{content:t.content,narrowWindow:e});case"TextList":return r.createElement(w,{title:t.title,items:t.items});case"Image":return r.createElement(W,{src:t.imageName,alt:t.alt});default:return r.createElement("p",null,t.type)}}var T={display:"flex",flexDirection:"row",alignItems:"center",width:"100%",borderBottomStyle:"solid",borderWidth:1},P={display:"flex",flexDirection:"column",gap:25},k={padding:"90px 105px 100px 105px"},D={padding:"20px 20px 20px 20px"},C={fontFamily:"Poppins",fontWeight:600,letterSpacing:"0.24em",fontSize:14,textTransform:"uppercase",textAlign:"right",transform:"rotate(180deg)",writingMode:"vertical-lr"},z={justifyContent:"right"};function I(t){return r.createElement("main",{style:T},r.createElement(a.Z,{style:Object.assign({},z,{paddingTop:t.narrowWindow?"20px":"100px"})},r.createElement("h1",{style:C},t.title)),r.createElement("div",{style:Object.assign({},P,t.narrowWindow?D:k)},t.content.map((function(e){return F(e,t.narrowWindow)}))))}n(7207);var G={display:"flex",alignItems:"center",flexGrow:1,width:"100%",height:85,borderBottomStyle:"solid",borderWidth:1},A={fontFamily:"Mogena",fontSize:25,fontWeight:400,flexGrow:1,flexShrink:1,color:"#4F89D6",textTransform:"lowercase"};function M(t){return r.createElement("main",{style:G},r.createElement(a.Z,{isHovered:!0}),r.createElement("h1",{style:Object.assign({},A,{margin:t.narrowWindow?"10px 0px 10px 20px":"10px 0px 10px 105px"})},t.title.replaceAll(".","")))}var R=n(5414),L=function(t){var e=t.pageContext,n=e.pageSections,a=e.pageTitle,l=(0,r.useState)((0,R.Z)()),u=l[0],f=l[1];return"undefined"!=typeof window&&(window.addEventListener("resize",(function(){return f((0,R.Z)())})),window.addEventListener("load",(function(){return f((0,R.Z)())}))),r.createElement("main",{style:o.Z},r.createElement("title",null,a),r.createElement(i.Z,{narrowWindow:u}),r.createElement(M,{title:a,narrowWindow:u}),n.map((function(t,e){return r.createElement(I,{title:t.title,content:t.content,narrowWindow:u})})),r.createElement(c.Z,null))}},3817:function(){}}]);
//# sourceMappingURL=component---src-templates-content-template-js-11eaa9f869f0bbd8daa2.js.map