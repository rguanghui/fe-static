!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BackTop=t():e.BackTop=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(9),i=n(o);t["default"]=i["default"]},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(7),i=n(o);t["default"]={props:{activeHeight:{type:Number,"default":document.documentElement.clientHeight/2}},data:function(){return{show:!1,BackTop:i["default"]}},ready:function(){var e=this;this.__listenEvent="ontouchmove"in window?"touchmove":"scroll";var t=function(){return document.body.scrollTop||document.documentElement.scrollTop};this.__listenAction=function(){e.activeHeight<t()?e.show||(e.show=!0):e.show&&(e.show=!1)};var r;document.addEventListener(this.__listenEvent,function(){r&&clearTimeout(r),r=setTimeout(function(){return e.__listenAction()},30)})},destroyed:function(){document.removeEventListener(this.__listenEvent,this.__listenAction)},methods:{back:function(){document.body.scrollTop=document.documentElement.scrollTop=0}}}},function(e,t){"use strict";!function(t){function r(){var e=this;a.forEach(function(t){e[t]={name:s,version:[],versionString:s}})}function n(e,t,r){i[t].forEach(function(n){var i=n[0],a=n[1],c=r.match(i);c&&(e[t].name=a,c[2]?(e[t].versionString=c[2],e[t].version=[]):c[1]?(e[t].versionString=c[1].replace(/_/g,"."),e[t].version=o(c[1])):(e[t].versionString=s,e[t].version=[]))})}function o(e){return e.split(/[\._]/).map(function(e){return parseInt(e)})}var i={browser:[[/msie ([\.\_\d]+)/,"ie"],[/trident\/.*?rv:([\.\_\d]+)/,"ie"],[/firefox\/([\.\_\d]+)/,"firefox"],[/chrome\/([\.\_\d]+)/,"chrome"],[/version\/([\.\_\d]+).*?safari/,"safari"],[/mobile safari ([\.\_\d]+)/,"safari"],[/android.*?version\/([\.\_\d]+).*?safari/,"com.android.browser"],[/crios\/([\.\_\d]+).*?safari/,"chrome"],[/opera/,"opera"],[/opera\/([\.\_\d]+)/,"opera"],[/opera ([\.\_\d]+)/,"opera"],[/opera mini.*?version\/([\.\_\d]+)/,"opera.mini"],[/opios\/([a-z\.\_\d]+)/,"opera"],[/blackberry/,"blackberry"],[/blackberry.*?version\/([\.\_\d]+)/,"blackberry"],[/bb\d+.*?version\/([\.\_\d]+)/,"blackberry"],[/rim.*?version\/([\.\_\d]+)/,"blackberry"],[/iceweasel\/([\.\_\d]+)/,"iceweasel"],[/edge\/([\.\d]+)/,"edge"]],os:[[/linux ()([a-z\.\_\d]+)/,"linux"],[/mac os x/,"macos"],[/mac os x.*?([\.\_\d]+)/,"macos"],[/os ([\.\_\d]+) like mac os/,"ios"],[/openbsd ()([a-z\.\_\d]+)/,"openbsd"],[/android/,"android"],[/android ([a-z\.\_\d]+);/,"android"],[/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/,"firefoxos"],[/windows\s*(?:nt)?\s*([\.\_\d]+)/,"windows"],[/windows phone.*?([\.\_\d]+)/,"windows.phone"],[/windows mobile/,"windows.mobile"],[/blackberry/,"blackberryos"],[/bb\d+/,"blackberryos"],[/rim.*?os\s*([\.\_\d]+)/,"blackberryos"]],device:[[/ipad/,"ipad"],[/iphone/,"iphone"],[/lumia/,"lumia"],[/htc/,"htc"],[/nexus/,"nexus"],[/galaxy nexus/,"galaxy.nexus"],[/nokia/,"nokia"],[/ gt\-/,"galaxy"],[/ sm\-/,"galaxy"],[/xbox/,"xbox"],[/(?:bb\d+)|(?:blackberry)|(?: rim )/,"blackberry"]]},s="Unknown",a=Object.keys(i);r.prototype.sniff=function(e){var t=this,r=(e||navigator.userAgent||"").toLowerCase();a.forEach(function(e){n(t,e,r)})},"undefined"!=typeof e&&e.exports?e.exports=r:(t.Sniffr=new r,t.Sniffr.sniff(navigator.userAgent))}(void 0)},function(e,t,r){"use strict";var n=r(5),o=new n;document.body?o.elem=o.render(document.body):document.addEventListener("DOMContentLoaded",function(){o.elem=o.render(document.body)},!1),e.exports=o},function(e,t,r){"use strict";function n(e){return Array.prototype.slice.call(e,0)}function o(e){return e.replace(/\(|\)/g,"\\$&")}function i(e,t,r){var i=e.querySelectorAll(l);i&&n(i).forEach(function(e){e.attributes&&n(e.attributes).forEach(function(n){var i=n.localName.toLowerCase();if(-1!==c.indexOf(i)){var s=d.exec(e.getAttribute(i));if(s&&0===s[1].indexOf(t)){var a=o(r+s[1].split(t)[1]);e.setAttribute(i,"url("+a+")")}}})})}function s(){var e=document.getElementsByTagName("base")[0],t=window.location.href.split("#")[0],r=e&&e.href;this.urlPrefix=r&&r!==t?t+f:f;var o=new a;o.sniff(),this.browser=o.browser,this.content=[],"ie"!==this.browser.name&&r&&window.addEventListener("spriteLoaderLocationUpdated",function(e){var t=this.urlPrefix,r=e.detail.newUrl.split(f)[0]+f;if(i(this.svg,t,r),this.urlPrefix=r,"firefox"===this.browser.name||"edge"===this.browser.name||"chrome"===this.browser.name&&this.browser.version[0]>=49){var o=n(document.querySelectorAll("use[*|href]"));o.forEach(function(e){var n=e.getAttribute(p);n&&0===n.indexOf(t)&&e.setAttributeNS(h,p,r+n.split(f)[1])})}}.bind(this))}var a=r(3),c=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke"],l="["+c.join("],[")+"]",d=/^url\((.*)\)$/,u=function(e){for(var t=e.querySelector("defs"),r=e.querySelectorAll("symbol linearGradient, symbol radialGradient, symbol pattern"),n=0,o=r.length;o>n;n++)t.appendChild(r[n])},f="#",p="xlink:href",h="http://www.w3.org/1999/xlink",v='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="'+h+'"',m="</svg>",b="{content}";s.styles=["position:absolute","width:0","height:0","visibility:hidden"],s.spriteTemplate=v+' style="'+s.styles.join(";")+'"><defs>'+b+"</defs>"+m,s.symbolTemplate=v+">"+b+m,s.prototype.content=null,s.prototype.add=function(e,t){return this.svg&&this.appendSymbol(e),this.content.push(e),f+t},s.prototype.wrapSVG=function(e,t){var r=t.replace(b,e),n=(new DOMParser).parseFromString(r,"image/svg+xml").documentElement;return"ie"!==this.browser.name&&this.urlPrefix&&i(n,f,this.urlPrefix),n},s.prototype.appendSymbol=function(e){var t=this.wrapSVG(e,s.symbolTemplate).childNodes[0];this.svg.querySelector("defs").appendChild(t),"firefox"===this.browser.name&&u(this.svg)},s.prototype.toString=function(){var e=document.createElement("div");return e.appendChild(this.render()),e.innerHTML},s.prototype.render=function(e,t){e=e||null,t="boolean"==typeof t?t:!0;var r=this.wrapSVG(this.content.join(""),s.spriteTemplate);return"firefox"===this.browser.name&&u(r),e&&(t&&e.childNodes[0]?e.insertBefore(r,e.childNodes[0]):e.appendChild(r)),this.svg=r,r},e.exports=s},function(e,t,r){t=e.exports=r(1)(),t.push([e.id,".backtop-container[_v-4cf10976]{position:fixed;bottom:2rem;right:.4rem}.backtop[_v-4cf10976]{width:1.133333rem;height:1.133333rem}",""])},function(e,t,r){var n=r(4),o='<symbol viewBox="0 0 32 32" id="backtop_cf48aa32" ><path fill="#999" d="M16 31.767c8.708 0 15.767-7.059 15.767-15.767S24.708.233 16 .233C7.292.233.233 7.292.233 16S7.292 31.767 16 31.767zm0-.261C7.436 31.506.494 24.564.494 16S7.436.494 16 .494 31.506 7.436 31.506 16 24.564 31.506 16 31.506z"/><path fill="#999" d="M15.739 18.893c0 .56.782.56.782 0v-8.878c0-.56-.782-.56-.782 0v8.878z"/><path fill="#999" d="M11.331 14.646l4.703-4.503c.091-.095.258-.282.249-.272-.017.018-.046.04-.165.04s-.148-.021-.165-.04c-.009-.01.157.177.236.259l4.769 4.517.538-.568-4.755-4.503a17.801 17.801 0 0 1-.215-.238c-.132-.143-.225-.21-.408-.21s-.275.068-.408.21c0 0-.161.181-.229.252l-4.691 4.49.541.565zM11.118 8.838h10.001v-.782H11.118v.782zM13.184 21.797v.364h1.101a5.835 5.835 0 0 1-.068.545h-.883v2.473h.364v-2.125h1.574v2.114h.369v-2.462h-1.044c.031-.177.052-.358.068-.545h1.148v-.364h-2.629zm1.725 3.403l-.255.239c.395.322.701.623.93.904l.27-.275a6.815 6.815 0 0 0-.945-.868zm-.629-1.839v.925c-.016.442-.125.8-.332 1.075-.218.265-.603.478-1.158.639l.203.317c.577-.177.992-.416 1.247-.717.26-.322.395-.764.41-1.314v-.925h-.369zm-2.348 2.909c.296 0 .447-.156.447-.462v-3.647h.623v-.364h-1.808v.364h.8v3.553c0 .145-.068.223-.192.223-.171 0-.353-.01-.54-.021l.083.353h.587zm5.149-3.636l-.343.125c.13.229.239.478.332.748h-.701v.364h2.603v-.364h-.629c.135-.234.255-.499.364-.795l-.348-.119a5.784 5.784 0 0 1-.384.914h-.545a5.06 5.06 0 0 0-.348-.873zm2.129-.842v4.535h.364v-4.192h.93a14.672 14.672 0 0 1-.509 1.46c.405.499.613.899.618 1.205-.005.187-.031.312-.083.379-.052.062-.171.099-.358.109-.099 0-.218-.01-.364-.021l.119.395c.426 0 .712-.068.857-.192.135-.125.203-.348.203-.67-.005-.312-.203-.717-.592-1.205.187-.468.358-.977.519-1.522v-.281H19.21zm-2.742.286v.364h2.468v-.364h-1.06a8.404 8.404 0 0 0-.171-.535l-.384.068c.068.14.13.296.192.468h-1.044zm2.264 2.265h-2.068v1.958h.369v-.291h1.33v.291h.369v-1.958zm-1.698 1.314v-.961h1.33v.961h-1.33z"/></symbol>';e.exports=n.add(o,"backtop_cf48aa32")},function(e,t){e.exports='<div class=backtop-container _v-4cf10976=""> <svg class=backtop v-if=show @click.stop=back() _v-4cf10976=""> <use :xlink:href=BackTop _v-4cf10976=""></use> </svg> </div>'},function(e,t,r){var n,o;r(11),n=r(2),o=r(8),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=u[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],t))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(c(n.parts[i],t));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],s=o[1],a=o[2],c=o[3],l={css:s,media:a,sourceMap:c};r[i]?r[i].parts.push(l):t.push(r[i]={id:i,parts:[l]})}return t}function i(e,t){var r=h(),n=b[b.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e,t){var r,n,o;if(t.singleton){var i=m++;r=v||(v=a(t)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else r=a(t),n=d.bind(null,r),o=function(){s(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function l(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function d(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s],c=u[a.id];c.refs--,i.push(c)}if(e){var l=o(e);n(l,t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete u[c.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(6);"string"==typeof n&&(n=[[e.id,n,""]]);r(10)(n,{});n.locals&&(e.exports=n.locals)}])});