(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(119)),o={},c={type:"mdx",permalink:"/mining",source:"@site/src/pages/mining.md"},p=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Mining Software",id:"mining-software",children:[]},{value:"Mining Pools",id:"mining-pools",children:[]},{value:"Articles",id:"articles",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"mining"},"Mining"),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Mining is a great way to get involved with Ycash. To effectively mine Bitcoin or\nZcash, you need to purchase an expensive, specialized computer called an ASIC.\nIn contrast, you can effectively mine Ycash with a commodity graphics processing\nunit (GPU) that you may already have in your computer."),Object(i.b)("p",null,"To get started mining Ycash, you need a ",Object(i.b)("a",{parentName:"p",href:"/wallets"},"Ycash address"),", a GPU with at least 3 GB of memory, and mining software that supports Ycash's Equihash(92,7) mining algorithm."),Object(i.b)("h2",{id:"mining-software"},"Mining Software"),Object(i.b)("p",null,"Several different GPU mining software packages support Equihash(192,7), including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://miniz.ch/"},"miniZ")," (Nvidia) (Linux/Windows) (mandatory 2% dev fee)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://bitcointalk.org/index.php?topic=4724735.0"},"lolMiner")," (AMD) (Linux/Windows) (mandatory 1% dev fee)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://bitcointalk.org/index.php?topic=5034735.0"},"Gminer")," (Nvidia/AMD) (Linux/Windows) (mandatory 2% dev fee)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://bitcointalk.org/index.php?topic=4466962.0"},"EWBF's Cuda Equihash Miner")," (Nvidia) (Linux/Windows) (optional dev fee, 2% by default)"))),Object(i.b)("h2",{id:"mining-pools"},"Mining Pools"),Object(i.b)("p",null,"For a well-maintained list of Ycash pools, check out ",Object(i.b)("a",{parentName:"p",href:"https://miningpoolstats.stream/ycash"},"MiningPoolStats"),"."),Object(i.b)("h2",{id:"articles"},"Articles"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://medium.com/@nultinator/how-to-mine-ycash-with-gminer-e80fa871bf4b"},'"How to Mine Ycash with Gminer"')," by Jacob Nulty"))}u.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);