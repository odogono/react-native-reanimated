(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{296:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(345)),i={id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},l={unversionedId:"api/nativeMethods/scrollTo",id:"version-2.3.0-alpha.1/api/nativeMethods/scrollTo",isDocsHomePage:!1,title:"scrollTo",description:"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags(which might occur when it would be asynchronous and based on a lot of events).",source:"@site/versioned_docs/version-2.3.0-alpha.1/api/nativeMethods/scrollTo.md",slug:"/api/nativeMethods/scrollTo",permalink:"/react-native-reanimated/docs/api/nativeMethods/scrollTo",version:"2.3.0-alpha.1",sidebar_label:"scrollTo",sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"measure",permalink:"/react-native-reanimated/docs/api/nativeMethods/measure"},next:{title:"<AnimatedLayout>",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/animatedLayout"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags(which might occur when it would be asynchronous and based on a lot of events)."),Object(a.b)("p",null,"This function is implemented on native platforms only. On the web it's sufficient to use a standard version of the ",Object(a.b)("inlineCode",{parentName:"p"},"scrollTo")," which comes with a ",Object(a.b)("inlineCode",{parentName:"p"},"ScrollView")," component(it's ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/aebccd3f923c920bd85fb9e5fbdd2a8a75d3ad3d/Libraries/Components/ScrollView/ScrollView.js#L834"},"here"),"). In such a case it should be invoked in the following way:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const aref = useAnimatedRef();\naref.current.scrollTo({ x, y });\n")),Object(a.b)("h3",{id:"arguments"},"Arguments"),Object(a.b)("h4",{id:"animatedref"},Object(a.b)("inlineCode",{parentName:"h4"},"animatedRef")),Object(a.b)("p",null,"The product of ",Object(a.b)("a",{parentName:"p",href:"../useAnimatedRef"},Object(a.b)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is a Reanimated's extension of a standard React's ref(delivers view tag on the UI thread)."),Object(a.b)("h3",{id:"returns"},"Returns"),Object(a.b)("p",null,"void"),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n  const scroll = useSharedValue(0);\n\n  useDerivedValue(() => {\n    scrollTo(aref, 0, scroll.value * 100, true);\n  });\n\n  const items = Array.from(Array(10).keys());\n\n  return (\n    <View>\n      <Button\n        title=\"scroll down\"\n        onPress={() => {\n          scroll.value = scroll.value + 1;\n          if (scroll.value >= 10) scroll.value = 0;\n        }}\n      />\n      <View style={{ width: 120, height: 200, backgroundColor: 'green' }}>\n        <ScrollView\n          ref={aref}\n          style={{ backgroundColor: 'orange', width: 120 }}>\n          {items.map((_, i) => (\n            <View\n              key={i}\n              style={{\n                backgroundColor: 'white',\n                width: 100,\n                height: 100,\n                margin: 10,\n              }}\n            />\n          ))}\n        </ScrollView>\n      </View>\n    </View>\n  );\n};\n")))}u.isMDXComponent=!0},345:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return t?o.a.createElement(m,l(l({ref:n},s),{},{components:t})):o.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);