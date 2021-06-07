(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(8),o=(n(0),n(345)),l={id:"exitAnimations",title:"Exiting Animations",sidebar_label:"Exiting Animations"},r={unversionedId:"api/LayoutAnimations/exitAnimations",id:"version-2.3.0-alpha.1/api/LayoutAnimations/exitAnimations",isDocsHomePage:!1,title:"Exiting Animations",description:"In React Native during unmounting of components from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using Exiting Animations. Reanimated make a pretty animation of disappearing of component for you.",source:"@site/versioned_docs/version-2.3.0-alpha.1/api/LayoutAnimations/ExitAnimations.md",slug:"/api/LayoutAnimations/exitAnimations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/exitAnimations",version:"2.3.0-alpha.1",sidebar_label:"Exiting Animations",sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"Entering Animations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations"},next:{title:"Layout Transitions",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/layoutTransitions"}},b=[{value:"How to use predefined exiting animation?",id:"how-to-use-predefined-exiting-animation",children:[{value:"1. Import chosen animation",id:"1-import-chosen-animation",children:[]},{value:"2. Choose Animated Component which exiting you want to animate",id:"2-choose-animated-component-which-exiting-you-want-to-animate",children:[]},{value:"3. Customize the animation",id:"3-customize-the-animation",children:[]},{value:"4. Make sure that your animated component is under an AnimatedLayout. If it&#39;s not then add AnimatedLayout somewhere above the component.",id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component",children:[]}]},{value:"Predefined Animations",id:"predefined-animations",children:[{value:"Fade",id:"fade",children:[]},{value:"Bounce",id:"bounce",children:[]},{value:"Flip",id:"flip",children:[]},{value:"Stretch",id:"stretch",children:[]},{value:"Zoom",id:"zoom",children:[]},{value:"Slide",id:"slide",children:[]}]}],m={toc:b};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In React Native during unmounting of components from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using ",Object(o.b)("inlineCode",{parentName:"p"},"Exiting Animations"),". Reanimated make a pretty animation of disappearing of component for you."),Object(o.b)("h4",{id:"how-it-is-possible"},"How it is possible?"),Object(o.b)("p",null,"Reanimated listen on changes in tree of views and if detect that some of component should disappear in next frame, It replaces this process with exiting animation. It is easy and fast. You can use predefined animations - examples below or you can define your own custom animation."),Object(o.b)("h2",{id:"how-to-use-predefined-exiting-animation"},"How to use predefined exiting animation?"),Object(o.b)("h3",{id:"1-import-chosen-animation"},"1. Import chosen animation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"    // AnimationName is just an example and should be replaced by real animation. For Instance FadeOut\n    import { AnimationName } from 'react-native-reanimated';\n")),Object(o.b)("h3",{id:"2-choose-animated-component-which-exiting-you-want-to-animate"},"2. Choose Animated Component which exiting you want to animate"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"    // AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n    <AnimatedComponent exiting={AnimationName} >\n")),Object(o.b)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),Object(o.b)("p",null,"Different type of entering animations can be customized differently. For the complete list of option please refer to the paragraph specific to the particulr animation type."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"    <AnimatedComponent exiting={AnimationName.duration(3000).otherModifier()} >\n")),Object(o.b)("h3",{id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component"},"4. Make sure that your animated component is under an AnimatedLayout. If it's not then add AnimatedLayout somewhere above the component."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"    <AnimatedLayout> // +\n        <View> sth </View>\n        <View> \n            <AnimatedComponent exiting={AnimationName}>\n        </View>\n    </AnimatedLayout> // +\n")),Object(o.b)("h2",{id:"predefined-animations"},"Predefined Animations"),Object(o.b)("p",null,"Below we listed all of the currently available predefined entering animations grouped by their type. Each group contains all of its modifiers and a video presenting what it looks like when applied to a simple button."),Object(o.b)("p",null,"If you cannot find an animation that suits you then you can create a custom one. If you think that the animation should be here, please open an issue or create a pull request.  "),Object(o.b)("h3",{id:"fade"},"Fade"),Object(o.b)("p",null,"Simple animation based on changing of opacity."),Object(o.b)("h4",{id:"animations"},"Animations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"FadeOut"),Object(o.b)("li",{parentName:"ul"},"FadeOutRight"),Object(o.b)("li",{parentName:"ul"},"FadeOutLeft"),Object(o.b)("li",{parentName:"ul"},"FadeOutUp"),Object(o.b)("li",{parentName:"ul"},"FadeOutDown")),Object(o.b)("h4",{id:"modifiers"},"Modifiers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(o.b)("inlineCode",{parentName:"li"},"withTiming")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001")),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317304-c1824380-c2de-11eb-8aed-4c83cfe2f2cc.mov",controls:"controls",muted:"muted"}),Object(o.b)("h3",{id:"bounce"},"Bounce"),Object(o.b)("p",null,"Animation based on smoothly shaking of component."),Object(o.b)("h4",{id:"animations-1"},"Animations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"BounceOut"),Object(o.b)("li",{parentName:"ul"},"BounceOutRight"),Object(o.b)("li",{parentName:"ul"},"BounceOutLeft"),Object(o.b)("li",{parentName:"ul"},"BounceOutUp"),Object(o.b)("li",{parentName:"ul"},"BounceOutDown")),Object(o.b)("h4",{id:"modifiers-1"},"Modifiers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0")),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317374-d52daa00-c2de-11eb-9fc5-320dfaf50440.mov",controls:"controls",muted:"muted"}),Object(o.b)("h3",{id:"flip"},"Flip"),Object(o.b)("p",null,"3D animation based on flipping object over specific axis."),Object(o.b)("h4",{id:"animations-2"},"Animations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"FlipOutYRight"),Object(o.b)("li",{parentName:"ul"},"FlipOutYLeft"),Object(o.b)("li",{parentName:"ul"},"FlipOutXUp"),Object(o.b)("li",{parentName:"ul"},"FlipOutXDown"),Object(o.b)("li",{parentName:"ul"},"FlipOutEasyX"),Object(o.b)("li",{parentName:"ul"},"FlipOutEasyY")),Object(o.b)("h4",{id:"modifiers-2"},"Modifiers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(o.b)("inlineCode",{parentName:"li"},"withTiming")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001")),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317439-e971a700-c2de-11eb-89d7-1a934922b7fd.mov",controls:"controls",muted:"muted"}),Object(o.b)("h3",{id:"stretch"},"Stretch"),Object(o.b)("p",null,"Animation based on changing width or height of object."),Object(o.b)("h4",{id:"animations-3"},"Animations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"StretchOutX"),Object(o.b)("li",{parentName:"ul"},"StretchOutY")),Object(o.b)("h4",{id:"modifiers-3"},"Modifiers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(o.b)("inlineCode",{parentName:"li"},"withTiming")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001")),Object(o.b)("h4",{id:"example-3"},"Example"),Object(o.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317500-fbebe080-c2de-11eb-9901-693aa4ad0ba0.mov",controls:"controls",muted:"muted"}),Object(o.b)("h3",{id:"zoom"},"Zoom"),Object(o.b)("p",null,"Animation based on changing scale of object."),Object(o.b)("h4",{id:"animations-4"},"Animations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ZoomOut"),Object(o.b)("li",{parentName:"ul"},"ZoomOutRotate"),Object(o.b)("li",{parentName:"ul"},"ZoomOutRight"),Object(o.b)("li",{parentName:"ul"},"ZoomOutLeft"),Object(o.b)("li",{parentName:"ul"},"ZoomOutUp"),Object(o.b)("li",{parentName:"ul"},"ZoomOutDown"),Object(o.b)("li",{parentName:"ul"},"ZoomOutEasyUp"),Object(o.b)("li",{parentName:"ul"},"ZoomOutEadyDown")),Object(o.b)("h4",{id:"modifiers-4"},"Modifiers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(o.b)("inlineCode",{parentName:"li"},"withTiming")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001")),Object(o.b)("h4",{id:"example-4"},"Example"),Object(o.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317554-0efeb080-c2df-11eb-88cf-6ec47778dccb.mov",controls:"controls",muted:"muted"}),Object(o.b)("h3",{id:"slide"},"Slide"),Object(o.b)("p",null,"Animation based on horizontal or vertical moving of object."),Object(o.b)("h4",{id:"animations-5"},"Animations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SlideOutRight"),Object(o.b)("li",{parentName:"ul"},"SlideOutLeft"),Object(o.b)("li",{parentName:"ul"},"SlideOutUp"),Object(o.b)("li",{parentName:"ul"},"SlideOutDown")),Object(o.b)("h4",{id:"modifiers-5"},"Modifiers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(o.b)("inlineCode",{parentName:"li"},"withTiming")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001")),Object(o.b)("h4",{id:"example-5"},"Example"),Object(o.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317603-22118080-c2df-11eb-9083-b5ba3f043dbc.mov",controls:"controls",muted:"muted"}))}c.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),c=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=b(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,s=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(s,r(r({ref:t},m),{},{components:n})):a.a.createElement(s,r({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var m=2;m<o;m++)l[m]=n[m];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);