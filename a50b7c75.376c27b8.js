(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{220:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(9),a=(t(0),t(267)),c={},i={id:"version-1.x.x/nodes/cond",title:"cond",description:"cond",source:"@site/versioned_docs/version-1.x.x/nodes/cond.md",permalink:"/react-native-reanimated/docs/1.x.x/nodes/cond",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/nodes/cond.md",version:"1.x.x",sidebar:"version-1.x.x/docs",previous:{title:"concat",permalink:"/react-native-reanimated/docs/1.x.x/nodes/concat"},next:{title:"debug",permalink:"/react-native-reanimated/docs/1.x.x/nodes/debug"}},d=[{value:"<code>cond</code>",id:"cond",children:[]}],u={rightToc:d};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"cond"},Object(a.b)("inlineCode",{parentName:"h2"},"cond")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"cond(conditionNode, ifNode, [elseNode]);\n")),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"conditionNode"),' evaluates to "truthy" value the node evaluates ',Object(a.b)("inlineCode",{parentName:"p"},"ifNode")," node and returns its value, otherwise it evaluates ",Object(a.b)("inlineCode",{parentName:"p"},"elseNode")," and returns its value. ",Object(a.b)("inlineCode",{parentName:"p"},"elseNode")," is optional."))}s.isMDXComponent=!0},267:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=s(t),b=r,f=l["".concat(c,".").concat(b)]||l[b]||p[b]||a;return t?o.a.createElement(f,i(i({ref:n},u),{},{components:t})):o.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);