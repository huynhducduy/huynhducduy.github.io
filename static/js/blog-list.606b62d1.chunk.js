(this["webpackJsonphuynhducduy.github.io"]=this["webpackJsonphuynhducduy.github.io"]||[]).push([[8],{121:function(e,t,a){},240:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(79),c=a(0),r=a.n(c),l=(a(240),a(66)),i=a(62),o=a(120),m=a(254),u=a(33),s=a(118),d=a(94),b=a(72),E=a(14),g=a(9),p=a(88),f=a.n(p);function h(e){var t,a=e.match,p=Object(E.g)(),h=Object(c.useState)({}),v=Object(n.a)(h,2),j=v[0],O=v[1],N=Object(c.useCallback)((function(){Object(b.a)({method:"GET",to:u.a.api+"/blog/"+a.params.id}).then((function(e){O(e.data)}))}),[a.params.id]),k=Object(c.useCallback)((function(){p.push("/blog/"+a.params.id+"/edit")}),[p,a.params.id]),y=Object(c.useCallback)((function(){Object(b.a)({method:"DELETE",to:u.a.api+"/blog/"+a.params.id}).then((function(e){p.push("/blog")}))}),[p,a.params.id]);return Object(c.useEffect)((function(){N()}),[N]),r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement("div",{className:"blog-post"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:j.image,alt:j.title})),r.a.createElement("div",{className:"title"},j.title),r.a.createElement("div",{className:"author"},null===(t=j.user)||void 0===t?void 0:t.name),r.a.createElement("div",{className:"time"},j.created_at&&Object(s.a)(Object(d.a)(j.created_at),Date.now())),r.a.createElement("div",{className:"description"},j.description),r.a.createElement("div",{className:"content"},r.a.createElement(f.a,{source:j.content})),r.a.createElement("div",{className:"tags"},j.tags&&j.tags.split(",").map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"/#/tag/"+e},r.a.createElement(o.a,{variant:"light"},e)),"\xa0")})))),Object(g.a)()&&r.a.createElement("div",{style:{float:"right"}},r.a.createElement(m.a,{onClick:k},"Edit"),"\xa0",r.a.createElement(m.a,{onClick:y},"Delete"))))}},253:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(79),c=a(0),r=a.n(c),l=a(66),i=a(62),o=a(254),m=(a(121),a(118)),u=a(94),s=a(22),d=a(29),b=a.n(d),E=a(39),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b.a.compile(Object(E.a)(e).path)(t)},p=r.a.memo((function(e){var t=e.id,a=void 0===t?0:t,n=e.image,c=e.title,o=e.time,d=void 0===o?0:o,b=e.description,E=e.author,p=void 0===E?{}:E;return Number.isInteger(d)||(d=0),r.a.createElement("div",{className:"post"},r.a.createElement(l.a,null,r.a.createElement(i.a,{lg:4,md:12,xs:5,className:"thumbnail",style:{backgroundImage:"url('"+n+"')"}}),r.a.createElement(i.a,{className:"content"},r.a.createElement("h2",{className:"title"},r.a.createElement(s.b,{to:g("blog-read",{id:a})},c)),r.a.createElement("p",{className:"description"},b),r.a.createElement("div",null,r.a.createElement(s.b,{to:g("user-read",{id:a}),className:"author"},p.name),r.a.createElement("br",null),r.a.createElement("span",{className:"time"},Object(m.a)(Object(u.a)(d),Date.now()))))))})),f=a(76),h=a.n(f),v=a(14),j=a(9),O=a(36),N=a(33);function k(){var e=Object(v.g)(),t=Object(c.useState)([]),a=Object(n.a)(t,2),m=a[0],u=a[1],d=Object(c.useState)(0),b=Object(n.a)(d,2),E=b[0],g=b[1],f=Object(c.useState)(!1),k=Object(n.a)(f,2),y=k[0],C=k[1],w=Object(c.useCallback)((function(){h.a.get(N.a.api+"/blog",{params:{cursor:E}}).then((function(e){u((function(t){return t.concat(e.data)})),e.data.length>0?(g(e.data[e.data.length-1].id),C(!0)):C(!1)}))}),[E]);return Object(c.useEffect)(w,[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(i.a,null,Object(j.a)()?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{float:"right",marginBottom:20}},r.a.createElement(o.a,{onClick:function(){Object(O.a)(),e.go(0)}},"Logout"),"\xa0",r.a.createElement(s.b,{to:"/blog/write"},r.a.createElement(o.a,null,"Write")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{float:"right",marginBottom:20}},r.a.createElement(s.b,{to:"/auth/login"},r.a.createElement(o.a,null,"Login")),"\xa0",r.a.createElement(s.b,{to:"/auth/register"},r.a.createElement(o.a,null,"Register")))))),r.a.createElement(l.a,{className:"blog"},r.a.createElement(i.a,{lg:12,md:6},m.map((function(e){return r.a.createElement(p,{id:e.id,image:e.image,title:e.title,time:e.created_at,description:e.description,author:e.user})})),y?r.a.createElement("a",{alt:"load more blog",onClick:w,href:"javascript:"},"Load more..."):"No more blog...")))}},72:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(80),c=a.n(n),r=a(17),l=a(81),i=a(76),o=a.n(i),m=a(47),u={timeout:0};function s(){var e={"Content-Type":"application/json"},t=m.b();return null===t||m.g()||(e.Authorization="Bearer ".concat(t)),e}function d(e){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(c.a.mark((function e(t){var a,n,l,i,d,b,E,g,p,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.to,n=t.method,l=void 0===n?"GET":n,i=t.data,d=void 0===i?{}:i,b=t.params,E=void 0===b?{}:b,g=t.headers,p=void 0===g?{}:g,f=t.custom,!m.f()&&m.b()||m.c()||m.a(),e.abrupt("return",o()(Object(r.a)({headers:Object(r.a)({},s(),{},p),url:a,method:l,data:d,params:E,config:u},f)));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=blog-list.606b62d1.chunk.js.map