"use strict";var j=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var p=j(function(W,F){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),d=require('@stdlib/strided-base-reinterpret-complex64/dist');function H(e,a,s,f,i,w,b,R,l,m,x,o){var c,y,h,E,u,g,v,n,t,r,q;if(e<=0||a<=0)return-1;if(c=d(s,0),y=d(b,0),f*=2,i*=2,w*=2,R*=2,l*=2,G([f,i])){for(u=a,g=e,q=0;q<g;q++){for(v=w+q*f,t=l,r=0;r<u&&!(c[v]!==y[t]||c[v+1]!==y[t+1]);r++)v+=i,t+=R;if(r===u)return q}return-1}for(u=e,g=a,h=f,E=i-u*f,n=o,r=0;r<u;r++)m[n]=1,n+=x;for(v=w,t=l,q=0;q<g;q++){for(n=o,r=0;r<u;r++)(c[v]!==y[t]||c[v+1]!==y[t+1])&&(m[n]=0),v+=h,n+=x;v+=E,t+=R}for(n=o,r=0;r<u&&m[n]!==1;r++)n+=x;return r===u?-1:r}F.exports=H
});var C=j(function(X,_){
var I=require('@stdlib/blas-base-assert-is-layout/dist'),J=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),K=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),S=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=p();function U(e,a,s,f,i,w,b,R,l){var m,x,o;if(!I(e))throw new TypeError(V('nullFx',e));if(J(e)?o=s:o=a,i<P(1,o))throw new RangeError(V('nullIR',o,i));return K(e)?(m=1,x=i):(m=i,x=1),Q(a,s,f,m,x,0,w,b,S(s,b),R,l,S(a,l))}_.exports=U
});var z=j(function(A,k){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=C(),Z=p();Y(T,"ndarray",Z);k.exports=T
});var $=require("path").join,M=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=z(),O,B=M($(__dirname,"./native.js"));L(B)?O=D:O=B;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
