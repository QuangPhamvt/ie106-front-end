import{r as y}from"./index-c013ead5.js";import{g as h}from"./_commonjsHelpers-725317a4.js";var _={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=y,C=Symbol.for("react.element"),g=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,O=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function b(o,r,n){var e,s={},t=null,a=null;n!==void 0&&(t=""+n),r.key!==void 0&&(t=""+r.key),r.ref!==void 0&&(a=r.ref);for(e in r)F.call(r,e)&&!S.hasOwnProperty(e)&&(s[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)s[e]===void 0&&(s[e]=r[e]);return{$$typeof:C,type:o,key:t,ref:a,props:s,_owner:O.current}}l.Fragment=g;l.jsx=b;l.jsxs=b;_.exports=l;var d=_.exports,x={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var r={}.hasOwnProperty;function n(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var a=typeof t;if(a==="string"||a==="number")e.push(t);else if(Array.isArray(t)){if(t.length){var p=n.apply(null,t);p&&e.push(p)}}else if(a==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)r.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}o.exports?(n.default=n,o.exports=n):window.classNames=n})()})(x);var j=x.exports;const k=h(j),c=({className:o,backGroundColor:r,name:n,status:e="active"})=>{const s=`bg-[${r}]`;return d.jsx("button",{children:d.jsx("div",{className:k("p-[10px_20px] rounded-lg border-solid border-2",{"font-bold":!0,[`${s} hover:bg-[#00CBFE] active:bg-[#00BDFE]`]:e==="active","bg-[#D8F2FF]":e==="disable"},o),children:n})})};try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"Success"'},{value:'"Cancel"'},{value:'"Click"'}]}},backGroundColor:{defaultValue:null,description:"",name:"backGroundColor",required:!0,type:{name:"string"}},status:{defaultValue:{value:"active"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"disable"'},{value:'"active"'}]}}}}}catch{}const N={tags:["autodocs"],title:"Component/Atoms/Button",component:c},u={args:{name:"Click",backGroundColor:"#5ADEFF",status:"active"}};var m,f,v;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'Click',
    backGroundColor: '#5ADEFF',
    status: 'active'
  }
}`,...(v=(f=u.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const w=["ButtonDefault"];export{u as ButtonDefault,w as __namedExportsOrder,N as default};
//# sourceMappingURL=button.stories-ff0b4d3d.js.map
