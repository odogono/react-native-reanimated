(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{345:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(345)),o={id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},l={unversionedId:"api/withDecay",id:"version-2.2.0/api/withDecay",isDocsHomePage:!1,title:"withDecay",description:'Starts a velocity based "scroll" animation.',source:"@site/versioned_docs/version-2.2.0/api/withDecay.md",slug:"/api/withDecay",permalink:"/react-native-reanimated/docs/2.2.0/api/withDecay",version:"2.2.0",sidebar_label:"withDecay",sidebar:"version-2.2.0/docs",previous:{title:"withSpring",permalink:"/react-native-reanimated/docs/2.2.0/api/withSpring"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/2.2.0/api/cancelAnimation"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Starts a velocity based "scroll" animation.'),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"options-object"},Object(i.b)("inlineCode",{parentName:"h4"},"options")," ","[object]"),Object(i.b)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Options"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"velocity"),Object(i.b)("td",{parentName:"tr",align:null},"0"),Object(i.b)("td",{parentName:"tr",align:null},"Initial velocity")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"deceleration"),Object(i.b)("td",{parentName:"tr",align:null},"0.998"),Object(i.b)("td",{parentName:"tr",align:null},"Rate of decay")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"clamp"),Object(i.b)("td",{parentName:"tr",align:null},"[]"),Object(i.b)("td",{parentName:"tr",align:null},"Array of two animation boundaries (optional)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"velocityFactor"),Object(i.b)("td",{parentName:"tr",align:null},"1"),Object(i.b)("td",{parentName:"tr",align:null},"Factor to modify velocity unit (optional)")))),Object(i.b)("h5",{id:"velocityfactor"},Object(i.b)("inlineCode",{parentName:"h5"},"velocityFactor")),Object(i.b)("p",null,"The default unit of velocity in decay is pixel per second but it can be problematic when you want to animate value not related to pixels for example opacity ",Object(i.b)("inlineCode",{parentName:"p"},"[0, 1]")," or progress bar ",Object(i.b)("inlineCode",{parentName:"p"},"[0, 1]"),". In this case, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"velocityFactor")," property with value ",Object(i.b)("inlineCode",{parentName:"p"},"< 1")," to modify the velocity of change to more matched for the required domain."),Object(i.b)("h4",{id:"callback-functionoptional"},Object(i.b)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),Object(i.b)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",Object(i.b)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(i.b)("a",{parentName:"p",href:"useAnimatedStyle"},Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: (evt) => {\n      x.value = withDecay({\n        velocity: evt.velocityX,\n        clamp: [0, 200], // optionally define boundaries for the animation\n      });\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}p.isMDXComponent=!0}}]);