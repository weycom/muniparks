(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(e,t,M){"use strict";M.r(t);var a=M(0),N=M.n(a),j=M(177);t.default=function(){return N.a.createElement(j.a,null,N.a.createElement("div",null,N.a.createElement("h1",null,"NOT FOUND"),N.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},175:function(e,t,M){"use strict";M.d(t,"b",function(){return r});var a=M(0),N=M.n(a),j=M(5),u=M.n(j),n=M(40),L=M.n(n);M.d(t,"a",function(){return L.a});M(176);var c=N.a.createContext({});function i(e){var t=e.staticQueryData,M=e.data,a=e.query,j=e.render,u=M?M.data:t[a]&&t[a].data;return N.a.createElement(N.a.Fragment,null,u&&j(u),!u&&N.a.createElement("div",null,"Loading (StaticQuery)"))}var r=function(e){var t=e.data,M=e.query,a=e.render,j=e.children;return N.a.createElement(c.Consumer,null,function(e){return N.a.createElement(i,{data:t,query:M,render:a||j,staticQueryData:e})})};r.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},176:function(e,t,M){var a;e.exports=(a=M(178))&&a.default||a},177:function(e,t,M){"use strict";var a=M(0),N=M.n(a),j=M(184),u=M(8),n=M.n(u),L=M(175),c=(M(179),M(180),M(181),M(182),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return N.a.createElement("div",{id:"footer"},N.a.createElement("footer",{className:"footer"},N.a.createElement("div",{className:"footer-contents"},N.a.createElement("ul",null,N.a.createElement("li",null,N.a.createElement(L.a,{to:"/",className:"navbar-item"},"Home")),N.a.createElement("li",null,N.a.createElement(L.a,{className:"navbar-item",to:"/about"},"About"))))))},t}(N.a.Component)),i=(M(185),M(5)),r=M.n(i);function l(e){var t=e.className;e.fill;return N.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1222.7 248.7",className:t},N.a.createElement("text",{transform:"translate(285.015 188.297)","font-size":"200","font-family":"Avenir-Medium"},"Muniparks"),N.a.createElement("circle",{cx:"119.2",cy:"118.2",r:"116.7"}))}l.propTypes={className:r.a.string,fill:r.a.string},l.defaultProps={className:void 0,fill:"#000"};var y=l,I=function(e){function t(t){var M;return(M=e.call(this,t)||this).state={active:!1,navBarActiveClass:""},M}return n()(t,e),t.prototype.render=function(){return N.a.createElement("section",null,N.a.createElement("input",{id:"main-menu-checkbox",type:"checkbox"}),N.a.createElement("header",null,N.a.createElement("label",{for:"main-menu-checkbox",className:"menu-toggle"},N.a.createElement("span",{className:"sr-only"},"Open main menu"),N.a.createElement("span",{className:"fa fa-bars","aria-hidden":"true"})),N.a.createElement(L.a,{to:"/",className:"logo hide-desktop",title:"Logo"},N.a.createElement(y,null)),N.a.createElement("nav",{id:"main-menu",role:"navigation",className:"main-menu","aria-expanded":"false","aria-label":"Main menu"},N.a.createElement(L.a,{to:"/",className:"logo",title:"Logo"},N.a.createElement(y,null)),N.a.createElement("label",{for:"main-menu-checkbox",className:"menu-close"},N.a.createElement("span",{className:"sr-only"},"Close main menu"),N.a.createElement("span",{className:"fa fa-close","aria-hidden":"true"})),N.a.createElement("ul",null,N.a.createElement("li",null,N.a.createElement("a",{className:"navbar-item",href:"https://community.muniparks.com"},"Community")),N.a.createElement("li",null,N.a.createElement(L.a,{className:"navbar-item",to:"/research-briefs"},"Research Briefs")),N.a.createElement("li",null,N.a.createElement(L.a,{className:"navbar-item",to:"/pro-voices"},"Pro Voices")))),N.a.createElement("label",{for:"main-menu-checkbox",className:"backdrop",tabindex:"-1","aria-hidden":"true",hidden:!0})))},t}(N.a.Component),g=M(183),D=function(){return g.data.site.siteMetadata};t.a=function(e){var t=e.children,M=D(),a=M.title,u=M.description;return N.a.createElement("div",{className:"page-wrapper"},N.a.createElement(j.Helmet,null,N.a.createElement("html",{lang:"en"}),N.a.createElement("title",null,a),N.a.createElement("meta",{name:"description",content:u}),N.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),N.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-32x32.png",sizes:"32x32"}),N.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-16x16.png",sizes:"16x16"}),N.a.createElement("link",{rel:"mask-icon",href:"/img/safari-pinned-tab.svg",color:"#ff4400"}),N.a.createElement("meta",{name:"theme-color",content:"#fff"}),N.a.createElement("meta",{property:"og:type",content:"business.business"}),N.a.createElement("meta",{property:"og:title",content:a}),N.a.createElement("meta",{property:"og:url",content:"/"}),N.a.createElement("meta",{property:"og:image",content:"{title}/img/og-image.jpg"})),N.a.createElement(I,null),N.a.createElement("div",{id:"wrap"},t),N.a.createElement(c,null))}},178:function(e,t,M){"use strict";M.r(t);M(41);var a=M(0),N=M.n(a),j=M(5),u=M.n(j),n=M(64),L=function(e){var t=e.location,M=e.pageResources;return M?N.a.createElement(n.a,Object.assign({location:t,pageResources:M},M.json)):null};L.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=L},179:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},180:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzguNzQgMCA4LjMzMy4wMTUgNy4wNTMuMDcyIDUuNzc1LjEzMiA0LjkwNS4zMzMgNC4xNC42M2MtLjc4OS4zMDYtMS40NTkuNzE3LTIuMTI2IDEuMzg0Uy45MzUgMy4zNS42MyA0LjE0Qy4zMzMgNC45MDUuMTMxIDUuNzc1LjA3MiA3LjA1My4wMTIgOC4zMzMgMCA4Ljc0IDAgMTJzLjAxNSAzLjY2Ny4wNzIgNC45NDdjLjA2IDEuMjc3LjI2MSAyLjE0OC41NTggMi45MTMuMzA2Ljc4OC43MTcgMS40NTkgMS4zODQgMi4xMjYuNjY3LjY2NiAxLjMzNiAxLjA3OSAyLjEyNiAxLjM4NC43NjYuMjk2IDEuNjM2LjQ5OSAyLjkxMy41NThDOC4zMzMgMjMuOTg4IDguNzQgMjQgMTIgMjRzMy42NjctLjAxNSA0Ljk0Ny0uMDcyYzEuMjc3LS4wNiAyLjE0OC0uMjYyIDIuOTEzLS41NTguNzg4LS4zMDYgMS40NTktLjcxOCAyLjEyNi0xLjM4NC42NjYtLjY2NyAxLjA3OS0xLjMzNSAxLjM4NC0yLjEyNi4yOTYtLjc2NS40OTktMS42MzYuNTU4LTIuOTEzLjA2LTEuMjguMDcyLTEuNjg3LjA3Mi00Ljk0N3MtLjAxNS0zLjY2Ny0uMDcyLTQuOTQ3Yy0uMDYtMS4yNzctLjI2Mi0yLjE0OS0uNTU4LTIuOTEzLS4zMDYtLjc4OS0uNzE4LTEuNDU5LTEuMzg0LTIuMTI2QzIxLjMxOSAxLjM0NyAyMC42NTEuOTM1IDE5Ljg2LjYzYy0uNzY1LS4yOTctMS42MzYtLjQ5OS0yLjkxMy0uNTU4QzE1LjY2Ny4wMTIgMTUuMjYgMCAxMiAwem0wIDIuMTZjMy4yMDMgMCAzLjU4NS4wMTYgNC44NS4wNzEgMS4xNy4wNTUgMS44MDUuMjQ5IDIuMjI3LjQxNS41NjIuMjE3Ljk2LjQ3NyAxLjM4Mi44OTYuNDE5LjQyLjY3OS44MTkuODk2IDEuMzgxLjE2NC40MjIuMzYgMS4wNTcuNDEzIDIuMjI3LjA1NyAxLjI2Ni4wNyAxLjY0Ni4wNyA0Ljg1cy0uMDE1IDMuNTg1LS4wNzQgNC44NWMtLjA2MSAxLjE3LS4yNTYgMS44MDUtLjQyMSAyLjIyNy0uMjI0LjU2Mi0uNDc5Ljk2LS44OTkgMS4zODItLjQxOS40MTktLjgyNC42NzktMS4zOC44OTYtLjQyLjE2NC0xLjA2NS4zNi0yLjIzNS40MTMtMS4yNzQuMDU3LTEuNjQ5LjA3LTQuODU5LjA3LTMuMjExIDAtMy41ODYtLjAxNS00Ljg1OS0uMDc0LTEuMTcxLS4wNjEtMS44MTYtLjI1Ni0yLjIzNi0uNDIxLS41NjktLjIyNC0uOTYtLjQ3OS0xLjM3OS0uODk5LS40MjEtLjQxOS0uNjktLjgyNC0uOS0xLjM4LS4xNjUtLjQyLS4zNTktMS4wNjUtLjQyLTIuMjM1LS4wNDUtMS4yNi0uMDYxLTEuNjQ5LS4wNjEtNC44NDQgMC0zLjE5Ni4wMTYtMy41ODYuMDYxLTQuODYxLjA2MS0xLjE3LjI1NS0xLjgxNC40Mi0yLjIzNC4yMS0uNTcuNDc5LS45Ni45LTEuMzgxLjQxOS0uNDE5LjgxLS42ODkgMS4zNzktLjg5OC40Mi0uMTY2IDEuMDUxLS4zNjEgMi4yMjEtLjQyMSAxLjI3NS0uMDQ1IDEuNjUtLjA2IDQuODU5LS4wNmwuMDQ1LjAzem0wIDMuNjc4Yy0zLjQwNSAwLTYuMTYyIDIuNzYtNi4xNjIgNi4xNjIgMCAzLjQwNSAyLjc2IDYuMTYyIDYuMTYyIDYuMTYyIDMuNDA1IDAgNi4xNjItMi43NiA2LjE2Mi02LjE2MiAwLTMuNDA1LTIuNzYtNi4xNjItNi4xNjItNi4xNjJ6TTEyIDE2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHptNy44NDYtMTAuNDA1YzAgLjc5NS0uNjQ2IDEuNDQtMS40NCAxLjQ0LS43OTUgMC0xLjQ0LS42NDYtMS40NC0xLjQ0IDAtLjc5NC42NDYtMS40MzkgMS40NC0xLjQzOS43OTMtLjAwMSAxLjQ0LjY0NSAxLjQ0IDEuNDM5eiIvPjwvc3ZnPg=="},181:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},182:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VmltZW8gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk3NyA2LjQxNmMtLjEwNSAyLjMzOC0xLjczOSA1LjU0My00Ljg5NCA5LjYwOS0zLjI2OCA0LjI0Ny02LjAyNiA2LjM3LTguMjkgNi4zNy0xLjQwOSAwLTIuNTc4LTEuMjk0LTMuNTUzLTMuODgxTDUuMzIyIDExLjRDNC42MDMgOC44MTYgMy44MzQgNy41MjIgMy4wMSA3LjUyMmMtLjE3OSAwLS44MDYuMzc4LTEuODgxIDEuMTMyTDAgNy4xOTdjMS4xODUtMS4wNDQgMi4zNTEtMi4wODQgMy41MDEtMy4xMjhDNS4wOCAyLjcwMSA2LjI2NiAxLjk4NCA3LjA1NSAxLjkxYzEuODY3LS4xOCAzLjAxNiAxLjEgMy40NDcgMy44MzguNDY1IDIuOTUzLjc4OSA0Ljc4OS45NzEgNS41MDcuNTM5IDIuNDUgMS4xMzEgMy42NzQgMS43NzYgMy42NzQuNTAyIDAgMS4yNTYtLjc5NiAyLjI2NS0yLjM4NSAxLjAwNC0xLjU4OSAxLjU0LTIuNzk3IDEuNjEyLTMuNjI4LjE0NC0xLjM3MS0uMzk1LTIuMDYxLTEuNjE0LTIuMDYxLS41NzQgMC0xLjE2Ny4xMjEtMS43NzcuMzkxIDEuMTg2LTMuODY4IDMuNDM0LTUuNzU3IDYuNzYyLTUuNjM3IDIuNDczLjA2IDMuNjI4IDEuNjY0IDMuNDkzIDQuNzk3bC0uMDEzLjAxeiIvPjwvc3ZnPg=="},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Muniparks",description:"Join the community building the future of US parks and recreation."}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-9205af6c55c5202e1068.js.map