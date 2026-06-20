"use strict";var j=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(f){throw (a=0, f)}};};var p=j(function(W,F){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist'),d=require('@stdlib/strided-base-reinterpret-complex64/dist');function H(e,a,f,m,i,w,b,R,s,x,l,o){var c,y,h,E,u,g,v,n,t,r,q;if(e<=0||a<=0)return-1;if(c=d(f,0),y=d(b,0),m*=2,i*=2,w*=2,R*=2,s*=2,G([m,i])){for(u=a,g=e,q=0;q<g;q++){for(v=w+q*m,t=s,r=0;r<u&&!(c[v]!==y[t]||c[v+1]!==y[t+1]);r++)v+=i,t+=R;if(r===u)return q}return-1}for(u=e,g=a,h=m,E=i-u*m,n=o,r=0;r<u;r++)x[n]=1,n+=l;for(v=w,t=s,q=0;q<g;q++){for(n=o,r=0;r<u;r++)(c[v]!==y[t]||c[v+1]!==y[t+1])&&(x[n]=0),v+=h,n+=l;v+=E,t+=R}for(n=o,r=0;r<u&&x[n]!==1;r++)n+=l;return r===u?-1:r}F.exports=H
});var C=j(function(X,_){
var I=require('@stdlib/blas-base-assert-is-layout/dist'),J=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),K=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),S=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=p();function U(e,a,f,m,i,w,b,R,s){var x,l,o;if(!I(e))throw new TypeError(V('2eZFx',e));if(J(e)?o=f:o=a,i<P(1,o))throw new RangeError(V('2eZIR',o,i));return K(e)?(x=1,l=i):(x=i,l=1),Q(a,f,m,x,l,0,w,b,S(f,b),R,s,S(a,s))}_.exports=U
});var z=j(function(A,k){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=C(),Z=p();Y(T,"ndarray",Z);k.exports=T
});var $=require("path").join,M=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=z(),O,B=M($(__dirname,"./native.js"));L(B)?O=D:O=B;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
