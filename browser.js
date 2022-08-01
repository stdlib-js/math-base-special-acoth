// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",f=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,f,u,a;if(null==n)return o.call(n);r=n[i],a=i,t=null!=(u=n)&&e.call(u,a);try{n[i]=void 0}catch(t){return o.call(n)}return f=o.call(n),t?n[i]=r:delete n[i],f}:function(n){return o.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=t,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;c=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var v,U=c,d="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,w="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var n,t,r;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,256,257]),r=t,n=(d&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?w:function(){throw new Error("not implemented")};var s,h=v,N="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(N&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?I:function(){throw new Error("not implemented")};var S,T={uint16:s,uint8:h};(S=new T.uint16(1))[0]=4660;var g=52===new T.uint8(S.buffer)[0],j=!0===g?1:0,E=new U(1),O=new l(E.buffer);function x(n){return E[0]=n,O[j]}var P=!0===g?1:0,V=new U(1),Y=new l(V.buffer);function _(n,t){return V[0]=n,Y[P]=t>>>0,V[0]}var G=Number.POSITIVE_INFINITY,k=Number.NEGATIVE_INFINITY,q=.6931471803691238,z=1.9082149292705877e-10;function B(t){var r,o,e,i,f,u,a,y,c,l;if(t<-1||n(t))return NaN;if(-1===t)return k;if(t===G)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,i=t,o=1)}return 0!==l&&(e<9007199254740992?(f=(l=((o=x(c=1+t))>>20)-1023)>0?1-(c-t):t-(c-1),f/=c):(l=((o=x(c=t))>>20)-1023,f=0),(o&=1048575)<434334?c=_(c,1072693248|o):(l+=1,c=_(c,1071644672|o),o=1048576-o>>2),i=c-1),r=.5*i*i,0===o?0===i?l*q+(f+=l*z):l*q-((y=r*(1-.6666666666666666*i))-(l*z+f)-i):(y=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(r-u*(r+y)):l*q-(r-(u*(r+y)+(l*z+f))-i))}return function(t){return function(t){var r,o;return n(t)||t<-1||t>1?NaN:1===t?G:-1===t?k:(t<0&&(r=!0,t=-t),t<3.725290298461914e-9?r?-t:t:(o=t<.5?.5*B((o=t+t)+o*t/(1-t)):.5*B((t+t)/(1-t)),r?-o:o))}(1/t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).acoth=t();
//# sourceMappingURL=browser.js.map
