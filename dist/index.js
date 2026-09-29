"use strict";var j=function(o,a){return function(){try{return a||o((a={exports:{}}).exports,a),a.exports}catch(l){throw (a=0, l)}};};var p=j(function(N,F){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/strided-base-reinterpret-complex64/dist');function H(o,a,l,m,e,c,b,s,R,x,w,t){var i,y,d,h,u,g,v,n,q,r,f;if(o<=0||a<=0)return-1;if(i=E(l,0),y=E(b,0),m*=2,e*=2,c*=2,s*=2,R*=2,G([m,e])){for(u=a,g=o,f=0;f<g;f++){for(v=c+f*m,q=R,r=0;r<u&&!(i[v]!==y[q]||i[v+1]!==y[q+1]);r++)v+=e,q+=s;if(r===u)return f}return-1}for(u=o,g=a,d=m,h=e-u*m,n=t,r=0;r<u;r++)x[n]=1,n+=w;for(v=c,q=R,f=0;f<g;f++){for(n=t,r=0;r<u;r++)(i[v]!==y[q]||i[v+1]!==y[q+1])&&(x[n]=0),v+=d,n+=w;v+=h,q+=s}for(n=t,r=0;r<u&&x[n]!==1;r++)n+=w;return r===u?-1:r}F.exports=H
});var T=j(function(W,_){
var I=require('@stdlib/blas-base-layout-resolve-str/dist'),J=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),S=require('@stdlib/strided-base-stride2offset/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),P=p();function Q(o,a,l,m,e,c,b,s,R){var x,w,t,i;if(i=I(o),i===null)throw new TypeError(V('2eZFx',o));if(J(i)?(t=l,x=e,w=1):(t=a,x=1,w=e),e<K(1,t))throw new RangeError(V('2eZIR',t,e));return P(a,l,m,x,w,0,c,b,S(l,b),s,R,S(a,R))}_.exports=Q
});var B=j(function(X,z){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=T(),Y=p();U(k,"ndarray",Y);z.exports=k
});var Z=require("path").join,$=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=B(),O,C=$(Z(__dirname,"./native.js"));L(C)?O=M:O=C;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
