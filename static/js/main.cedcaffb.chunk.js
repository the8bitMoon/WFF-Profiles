(this["webpackJsonpwff-profiles"]=this["webpackJsonpwff-profiles"]||[]).push([[0],{188:function(e,t,n){e.exports=n(483)},193:function(e,t,n){},194:function(e,t,n){},210:function(e,t){},212:function(e,t){},242:function(e,t){},243:function(e,t){},287:function(e,t){},289:function(e,t){},311:function(e,t){},483:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(185),r=n.n(c),o=(n(193),n(65)),i=n(66),u=n(69),s=n(68),m=n(67),f=n(70),E=(n(194),n(186)),h=n.n(E),d=n(187),p=n.n(d);var g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={data:[]},e}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.init({key:"https://docs.google.com/spreadsheets/d/1RMkKMmpACwE3PHbrU44vNdDsWwLmBwL-FwMzAk6lf8o/edit?usp=sharing",simpleSheet:!1,prettyColumnNames:!1,callback:function(t){e.setState({data:t["Public Profiles"].elements})}})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("main",null,e.map((function(e){return function(e){var t=e.imagelink?e.imagelink:"placeholder.png";return l.a.createElement("article",{key:e.rowNumber,id:e.name.toLowerCase().split(/\s+/).join(""),className:e.status},l.a.createElement("figure",null,l.a.createElement("a",{href:t},l.a.createElement("img",{alt:e.name,src:t}))),l.a.createElement("section",null,l.a.createElement("h3",null,"Name"),l.a.createElement("p",null,e.name)),l.a.createElement("section",null,l.a.createElement("h3",null,"Pronouns"),l.a.createElement("p",null,e.pronouns)),l.a.createElement("section",null,l.a.createElement("h3",null,"Status"),l.a.createElement("p",null,e.status)),l.a.createElement("section",null,l.a.createElement("h3",null,"WFF ID"),l.a.createElement("p",null,e.discordtag)),l.a.createElement("section",null,l.a.createElement("h3",null,"Age"),l.a.createElement("p",null,e.age?e.age:"???")),l.a.createElement("section",null,l.a.createElement("h3",null,"Height"),l.a.createElement("p",null,e.formattedheight)),l.a.createElement("section",null,l.a.createElement("h3",null,"Weight"),l.a.createElement("p",null,e.formattedweight)),l.a.createElement("section",null,l.a.createElement("h3",null,"Branch"),l.a.createElement("p",null,e.divisionnumber)),l.a.createElement("section",null,l.a.createElement("h3",{style:{borderRight:"none"}},"Notes")),l.a.createElement("section",{style:{flexDirection:"column"}},l.a.createElement("p",null,e.connectiontoworldwidefuturefoundation,"."),l.a.createElement("p",null,e.divisiondescription,"."),l.a.createElement(p.a,{source:e.personality})))}(e)})))}}]),t}(a.Component);function k(e){return l.a.createElement("nav",null,l.a.createElement("a",{href:"https://tea-etiquette-academy.tumblr.com/tea-1.5"},"Info"),l.a.createElement("a",{href:"https://discord.gg/DvU5PkR"},"Discord"),l.a.createElement("button",{onClick:e.handleClick},e.flickerStatus?"Disable":"Enable"," Flicker Effect"))}function v(){console.log(document.cookie);var e="true"===document.cookie.split("=")[1];return console.log(e),e}var b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={flicker:v()},e.toggleEffect=e.toggleEffect.bind(Object(m.a)(e)),e}return Object(f.a)(t,e),Object(i.a)(t,[{key:"toggleEffect",value:function(e){var t=!this.state.flicker;this.setState({flicker:t}),function(e){var t=(new Date).getTime()+2592e6;document.cookie="flicker=".concat(e,"; expires=").concat(t)}(t)}},{key:"render",value:function(){var e=this.state.flicker;return console.log("flicker--\x3e",e),l.a.createElement("div",{className:"App crt ".concat(e?"flicker":"")},l.a.createElement("header",null,l.a.createElement("h1",null,"Worldwide Future Foundation Member Profiles")),l.a.createElement(k,{flickerStatus:e,handleClick:this.toggleEffect}),l.a.createElement(g,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[188,1,2]]]);
//# sourceMappingURL=main.cedcaffb.chunk.js.map