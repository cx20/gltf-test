/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.131
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as k}from"./chunk-KTDI3TD2.js";import{a as N,c as w}from"./chunk-PQSWZ6QE.js";import"./chunk-RQ3X5FSK.js";import"./chunk-KORWG3CG.js";import"./chunk-BGQDOF2W.js";import"./chunk-SPVHGWGM.js";import{a as v,b as G}from"./chunk-6EFYFFBI.js";import{a as q}from"./chunk-I3XHKING.js";import"./chunk-N6G72L23.js";import"./chunk-HLFNWOQ4.js";import"./chunk-YDUNCXSU.js";import{a as g}from"./chunk-LNFOIPBT.js";import{a as O}from"./chunk-7IBY6LYM.js";import{b as A,c as R,d as S}from"./chunk-BDLVVHOG.js";import{d as C}from"./chunk-VMOPYKP4.js";import"./chunk-DGGIK7AD.js";import{a as b}from"./chunk-5EZKANRV.js";import{a as d,c as y,d as s,f as D}from"./chunk-FCVV6A2F.js";import{a as T}from"./chunk-PO64KPKA.js";import"./chunk-JOXXXMPE.js";import"./chunk-7RJW35V3.js";import{a}from"./chunk-R3KD5ZAI.js";import{e as u}from"./chunk-GBI3IATP.js";function W(o,i){let t=new O;t.position=new S({componentDatatype:b.DOUBLE,componentsPerAttribute:3,values:o});let e=i.length,r=t.position.values.length/3,f=o.length/3/e,p=g.createTypedArray(r,2*e*(f+1)),m,n,l=0;m=0;let h=m*e;for(n=0;n<e-1;n++)p[l++]=n+h,p[l++]=n+h+1;for(p[l++]=e-1+h,p[l++]=h,m=f-1,h=m*e,n=0;n<e-1;n++)p[l++]=n+h,p[l++]=n+h+1;for(p[l++]=e-1+h,p[l++]=h,m=0;m<f-1;m++){let L=e*m,U=L+e;for(n=0;n<e;n++)p[l++]=n+L,p[l++]=n+U}return new R({attributes:t,indices:g.createTypedArray(r,p),boundingSphere:C.fromVertices(o),primitiveType:A.LINES})}function P(o){o=o??D.EMPTY_OBJECT;let i=o.polylinePositions,t=o.shapePositions;if(!u(i))throw new a("options.polylinePositions is required.");if(!u(t))throw new a("options.shapePositions is required.");this._positions=i,this._shape=t,this._ellipsoid=s.clone(o.ellipsoid??s.default),this._cornerType=o.cornerType??N.ROUNDED,this._granularity=o.granularity??T.RADIANS_PER_DEGREE,this._workerName="createPolylineVolumeOutlineGeometry";let e=1+i.length*d.packedLength;e+=1+t.length*y.packedLength,this.packedLength=e+s.packedLength+2}P.pack=function(o,i,t){if(!u(o))throw new a("value is required");if(!u(i))throw new a("array is required");t=t??0;let e,r=o._positions,c=r.length;for(i[t++]=c,e=0;e<c;++e,t+=d.packedLength)d.pack(r[e],i,t);let f=o._shape;for(c=f.length,i[t++]=c,e=0;e<c;++e,t+=y.packedLength)y.pack(f[e],i,t);return s.pack(o._ellipsoid,i,t),t+=s.packedLength,i[t++]=o._cornerType,i[t]=o._granularity,i};var B=s.clone(s.UNIT_SPHERE),_={polylinePositions:void 0,shapePositions:void 0,ellipsoid:B,height:void 0,cornerType:void 0,granularity:void 0};P.unpack=function(o,i,t){if(!u(o))throw new a("array is required");i=i??0;let e,r=o[i++],c=new Array(r);for(e=0;e<r;++e,i+=d.packedLength)c[e]=d.unpack(o,i);r=o[i++];let f=new Array(r);for(e=0;e<r;++e,i+=y.packedLength)f[e]=y.unpack(o,i);let p=s.unpack(o,i,B);i+=s.packedLength;let m=o[i++],n=o[i];return u(t)?(t._positions=c,t._shape=f,t._ellipsoid=s.clone(p,t._ellipsoid),t._cornerType=m,t._granularity=n,t):(_.polylinePositions=c,_.shapePositions=f,_.cornerType=m,_.granularity=n,new P(_))};var F=new k;P.createGeometry=function(o){let i=o._positions,t=q(i,d.equalsEpsilon),e=o._shape;if(e=w.removeDuplicatesFromShape(e),t.length<2||e.length<3)return;G.computeWindingOrder2D(e)===v.CLOCKWISE&&e.reverse();let r=k.fromPoints(e,F),c=w.computePositions(t,e,r,o,!1);return W(c,e)};var E=P;function M(o,i){return u(i)&&(o=E.unpack(o,i)),o._ellipsoid=s.clone(o._ellipsoid),E.createGeometry(o)}var he=M;export{he as default};
