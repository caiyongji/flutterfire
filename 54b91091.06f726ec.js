(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var r,o=n(2),a=n(9),i=(n(0),n(186)),c={title:"Remote Config",sidebar_label:"Overview"},l={id:"remote-config/overview",title:"Remote Config",description:"What does it do?",source:"@site/../docs/remote-config/overview.mdx",permalink:"/docs/remote-config/overview",editUrl:"https://github.com/FirebaseExtended/flutterfire/edit/master/docs/../docs/remote-config/overview.mdx",sidebar_label:"Overview",sidebar:"main",previous:{title:"Realtime Database",permalink:"/docs/database/overview"},next:{title:"Performance Monitoring",permalink:"/docs/performance/overview"}},d=[{value:"What does it do?",id:"what-does-it-do",children:[]},{value:"Installation",id:"installation",children:[{value:"1. Add dependency",id:"1-add-dependency",children:[]},{value:"2. Download dependency",id:"2-download-dependency",children:[]},{value:"3. (Web Only) Add the SDK",id:"3-web-only-add-the-sdk",children:[]},{value:"4. Rebuild your app",id:"4-rebuild-your-app",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],p=(r="YouTube",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),u={rightToc:d};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-does-it-do"},"What does it do?"),Object(i.b)("p",null,"Firebase Remote Config is a cloud service that lets you change the behavior and appearance of your app without requiring users to\ndownload an app update. When using Remote Config, you create in-app default values that control the behavior and appearance of your\napp. Then, you can later use the Firebase console or the Remote Config backend APIs to override in-app default values for all app\nusers or for segments of your user base. Your app controls when updates are applied, and it can frequently check for updates and\napply them with a negligible impact on performance."),Object(i.b)(p,{id:"_CXXVFPO6f0",mdxType:"YouTube"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"1-add-dependency"},"1. Add dependency"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'{5} title="pubspec.yaml"',"{5}":!0,title:'"pubspec.yaml"'}),'dependencies:\n  flutter:\n    sdk: flutter\n  firebase_core: "^{{ plugins.firebase_core }}"\n  firebase_remote_config: "^{{ plugins.firebase_remote_config }}"\n')),Object(i.b)("h3",{id:"2-download-dependency"},"2. Download dependency"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"$ flutter pub get\n")),Object(i.b)("h3",{id:"3-web-only-add-the-sdk"},"3. (Web Only) Add the SDK"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Web is currently not supported. See the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/FirebaseExtended/flutterfire/issues/2582"}),"FlutterFire roadmap"),".")),Object(i.b)("h3",{id:"4-rebuild-your-app"},"4. Rebuild your app"),Object(i.b)("p",null,"Once complete, rebuild your Flutter application:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ flutter run\n")),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Once installed, you're ready to start using Remote Config in your Flutter Project."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Additional documentation will be available once the Firebase Remote Config plugin update lands as part of the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/FirebaseExtended/flutterfire/issues/2582"}),"FlutterFire roadmap"),".")))}b.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,f=u["".concat(i,".").concat(s)]||u[s]||b[s]||a;return n?o.a.createElement(f,c(c({ref:t},d),{},{components:n})):o.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);