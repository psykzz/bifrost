"use strict";(self.webpackChunkBifrost=self.webpackChunkBifrost||[]).push([[230],{3479:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(7294),u=t(5444),c=t(5414),a="https://nwdb.info/server-status/servers.json?worldId=3f1cd819f97e",o=function(e){return{connectionCountMax:e[0],connectionCount:e[1],queueCount:e[2],queueTime:e[3],worldName:e[4],worldSetName:e[5],region:e[6],status:e[7],active:e[8],worldId:e[9]}},s=function(){var e=r.useState({}),n=e[0],t=e[1];r.useEffect((function(){fetch(a).then((function(e){return e.json()})).then((function(e){return e.success&&e.data.servers[0]})).then(o).then(t)}),[]);var s=r.useMemo((function(){if(void 0===n.status)return null;if(4===n.status)return r.createElement("h4",{className:"subheader"},"Server Maintenance");var e=n.queueCount>0,t=n.connectionCount+" / "+n.connectionCountMax+" Online";return r.createElement(r.Fragment,null,r.createElement("h4",{className:"subheader"},t),e&&r.createElement("h5",{className:"subheader"},"~ ",n.queueCount," in queue"))}),[n]);return r.createElement("div",{className:"hero-module--content--2VuI9"},r.createElement(c.q,null,r.createElement("link",{rel:"prefetch",href:a,as:"fetch"})),r.createElement("h3",null,"New World"),r.createElement("h1",null,"Bifrost"),s,r.createElement(u.Link,{className:"hero-module--discord--25Jgb",to:"/discord"},"Join Discord"))},l=t(6792),i=function(){return r.createElement(l.Z,null,r.createElement(s,null))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-523acf3efbd52ce6345d.js.map