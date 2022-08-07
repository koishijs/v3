import{_ as r,r as a,c as h,b as e,a as o,w as n,F as u,e as l,d as t,o as _}from"./app.9e111ae1.js";const p={},x=l('<h1 id="\u4E0A\u4E0B\u6587-context" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u6587-context" aria-hidden="true">#</a> \u4E0A\u4E0B\u6587 (Context)</h1><p><strong>\u4E0A\u4E0B\u6587 (Context)</strong> \u662F Koishi \u7684\u91CD\u8981\u6982\u5FF5\u3002\u4F60\u7684\u6BCF\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u4E2D\u95F4\u4EF6\uFF0C\u76D1\u542C\u5668\u548C\u6307\u4EE4\u90FD\u88AB\u7ED1\u5B9A\u5728\u4E0A\u4E0B\u6587\u4E0A\u3002</p><h2 id="\u5B9E\u4F8B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5C5E\u6027" aria-hidden="true">#</a> \u5B9E\u4F8B\u5C5E\u6027</h2><p>\u4E0B\u9762\u7684\u5C5E\u6027\u4E3A\u4E86\u8BBF\u95EE\u65B9\u4FBF\u800C\u7ED1\u5B9A\uFF0C\u4E25\u683C\u4E0A\u5B83\u4EEC\u5BF9\u4E00\u4E2A App \u5B9E\u4F8B\u4E0B\u7684\u6240\u6709\u4E0A\u4E0B\u6587\u90FD\u662F\u76F8\u540C\u7684\u3002</p><h3 id="ctx-database" tabindex="-1"><a class="header-anchor" href="#ctx-database" aria-hidden="true">#</a> ctx.database</h3><ul><li>\u7C7B\u578B: <code>Database</code></li></ul>',6),g=t("\u5F53\u524D\u5E94\u7528\u7684 "),F=t("Database"),f=t(" \u5BF9\u8C61\u3002"),y=e("h3",{id:"ctx-router",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-router","aria-hidden":"true"},"#"),t(" ctx.router")],-1),E=e("ul",null,[e("li",null,[t("\u7C7B\u578B: "),e("code",null,"KoaRouter")])],-1),m=t("\u5982\u679C\u4F60\u914D\u7F6E\u4E86 "),b=t("port"),B=t(" \u9009\u9879\uFF0C\u5219\u8FD9\u4E2A\u5C5E\u6027\u5C06\u4F5C\u4E3A\u4E00\u4E2A "),v={href:"https://github.com/koajs/router/blob/master/API.md",target:"_blank",rel:"noopener noreferrer"},A=t("KoaRouter"),D=t(" \u5B9E\u4F8B\u3002\u4F60\u53EF\u4EE5\u5728\u4E0A\u9762\u81EA\u5B9A\u4E49\u65B0\u7684\u8DEF\u7531\uFF1A"),k=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"ctx.router."),e("span",{style:{color:"#A6E22E"}},"get"),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'/path'"),e("span",{style:{color:"#F8F8F2"}},", ("),e("span",{style:{color:"#FD971F","font-style":"italic"}},"ctx"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FD971F","font-style":"italic"}},"next"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#88846F"}},"// handle request")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),t(`
`),e("span",{class:"line"})])],-1),C=e("h3",{id:"ctx-bots",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-bots","aria-hidden":"true"},"#"),t(" ctx.bots")],-1),w=e("ul",null,[e("li",null,[t("\u7C7B\u578B: "),e("code",null,"Bot[] & Record<string, Bot>")])],-1),I=e("p",null,"\u4E00\u4E2A\u952E\u503C\u5BF9\uFF0C\u4FDD\u5B58\u4E86\u5F53\u524D\u5E94\u7528\u4E0B\u7684\u6240\u6709 Bot \u5B9E\u4F8B\u3002",-1),P={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"TIP",-1),U=e("p",null,[t("\u5728\u4F7F\u7528\u591A\u673A\u5668\u4EBA\u65F6\uFF0CKoishi \u4E0D\u80FD\u4FDD\u8BC1 "),e("code",null,"ctx.bots[0]"),t(" \u7684\u884C\u4E3A\u4E00\u81F4\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u60F3\u8981\u901A\u8FC7\u8FD9\u4E2A\u63A5\u53E3\u8BBF\u95EE\u5355\u4E2A\u673A\u5668\u4EBA\u7684 API\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u7684\u5F62\u5F0F\u8BBF\u95EE\uFF1A")],-1),L=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"ctx.bots["),e("span",{style:{color:"#E6DB74"}},"`"),e("span",{style:{color:"#F92672"}},"${"),e("span",{style:{color:"#F8F8F2"}},"platform"),e("span",{style:{color:"#F92672"}},"}"),e("span",{style:{color:"#E6DB74"}},":"),e("span",{style:{color:"#F92672"}},"${"),e("span",{style:{color:"#F8F8F2"}},"selfId"),e("span",{style:{color:"#F92672"}},"}"),e("span",{style:{color:"#E6DB74"}},"`"),e("span",{style:{color:"#F8F8F2"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// platform \u4E3A\u5BF9\u5E94\u673A\u5668\u4EBA\u7684\u6240\u5728\u5E73\u53F0\uFF0C\u800C selfId \u4E3A\u5BF9\u5E94\u673A\u5668\u4EBA\u7684 ID")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// \u4E00\u822C\u800C\u8A00\uFF0Cplatform \u53EF\u4EE5\u4ECE session.platform\uFF0C\u800C selfId \u53EF\u4EE5\u4ECE session.selfId \u83B7\u5F97")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// \u4E0D\u8FC7\u4E5F\u6709\u9700\u8981\u4ECE\u522B\u7684\u5730\u65B9\u83B7\u53D6\u8FD9\u4E24\u4E2A\u503C\u7684\u60C5\u51B5")]),t(`
`),e("span",{class:"line"})])],-1),R=e("h2",{id:"\u8FC7\u6EE4\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FC7\u6EE4\u5668","aria-hidden":"true"},"#"),t(" \u8FC7\u6EE4\u5668")],-1),T=t("\u6709\u5173\u8FD9\u91CC\u7684 API\uFF0C\u8BF7\u53C2\u89C1 "),N=t("\u4F7F\u7528\u4E0A\u4E0B\u6587"),j=t("\u3002"),K=e("h3",{id:"ctx-all",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-all","aria-hidden":"true"},"#"),t(" ctx.all()")],-1),O=e("ul",null,[e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"Context"),t(" \u65B0\u7684\u4E0A\u4E0B\u6587")])],-1),V=e("p",null,"\u9009\u53D6\u4E0A\u4E0B\u6587\u5168\u96C6\u3002",-1),$={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},"TIP",-1),M=t("\u8FD9\u4E2A\u65B9\u6CD5\u4E0E "),W=e("code",null,"ctx.app",-1),z=t(" \u7684\u533A\u522B\u5728\u4E8E\uFF0C\u540E\u8005\u4E0D\u53D7\u63D2\u4EF6\u7BA1\u7406\u5668\u63A7\u5236\uFF0C\u5BB9\u6613\u4EA7\u751F\u5185\u5B58\u6CC4\u6F0F\u3002\u56E0\u6B64\u6211\u4EEC\u5EFA\u8BAE\uFF0C\u9664\u975E\u4F60\u5DF2\u7ECF\u4E3A\u4F60\u7684\u63D2\u4EF6\u58F0\u660E\u4E86\u526F\u4F5C\u7528\uFF0C\u4F60\u5E94\u5F53\u5C3D\u91CF\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002\u53C2\u89C1 "),G=t("\u63D2\u4EF6\u70ED\u91CD\u8F7D"),H=t("\u3002"),J=l('<h3 id="ctx-self-values" tabindex="-1"><a class="header-anchor" href="#ctx-self-values" aria-hidden="true">#</a> ctx.self(...values)</h3><h3 id="ctx-user-values" tabindex="-1"><a class="header-anchor" href="#ctx-user-values" aria-hidden="true">#</a> ctx.user(...values)</h3><h3 id="ctx-group-values" tabindex="-1"><a class="header-anchor" href="#ctx-group-values" aria-hidden="true">#</a> ctx.group(...values)</h3><h3 id="ctx-channel-values" tabindex="-1"><a class="header-anchor" href="#ctx-channel-values" aria-hidden="true">#</a> ctx.channel(...values)</h3><h3 id="ctx-platform-values" tabindex="-1"><a class="header-anchor" href="#ctx-platform-values" aria-hidden="true">#</a> ctx.platform(...values)</h3><ul><li><strong>values:</strong> <code>string[]</code> \u5141\u8BB8\u7684\u673A\u5668\u4EBA / \u7528\u6237 / \u7FA4\u7EC4 / \u9891\u9053 / \u5E73\u53F0\u540D\u79F0\u6784\u6210\u7684\u6570\u7EC4</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u9009\u53D6\u5F53\u524D\u4E0A\u4E0B\u6587\u7684\u5B50\u96C6\uFF0C\u9650\u5B9A\u673A\u5668\u4EBA / \u7528\u6237 / \u7FA4\u7EC4 / \u9891\u9053 / \u5E73\u53F0\u540D\u79F0\u4E3A\u6240\u7ED9\u5B9A\u7684\u503C\u3002</p><h3 id="ctx-type-except-values" tabindex="-1"><a class="header-anchor" href="#ctx-type-except-values" aria-hidden="true">#</a> ctx.{type}.except(...values)</h3><ul><li><strong>values:</strong> <code>string[]</code> \u7981\u6B62\u7684\u673A\u5668\u4EBA / \u7528\u6237 / \u7FA4\u7EC4 / \u9891\u9053 / \u5E73\u53F0\u540D\u79F0\u6784\u6210\u7684\u6570\u7EC4</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u9009\u53D6\u5F53\u524D\u4E0A\u4E0B\u6587\u7684\u5B50\u96C6\uFF0C\u6392\u9664\u673A\u5668\u4EBA / \u7528\u6237 / \u7FA4\u7EC4 / \u9891\u9053 / \u5E73\u53F0\u540D\u79F0\u4E3A\u6240\u7ED9\u5B9A\u7684\u503C\u3002\u8FD9\u91CC\u7684 type \u540C\u4E0A\u6587\u3002</p><h3 id="ctx-select-key-values" tabindex="-1"><a class="header-anchor" href="#ctx-select-key-values" aria-hidden="true">#</a> ctx.select(key, ...values)</h3><ul><li><strong>values:</strong> <code>string[]</code> \u5982\u679C\u975E\u7A7A\u5219\u8868\u793A\u5141\u8BB8\u7684 key \u5C5E\u6027\u53EF\u9009\u503C\uFF1B\u5426\u5219\u53EA\u9700 key \u5C5E\u6027\u4E3A truthy \u5373\u53EF</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u9009\u53D6\u5F53\u524D\u4E0A\u4E0B\u6587\u7684\u5B50\u96C6\uFF0C\u9650\u5B9A\u4F1A\u8BDD\u5BF9\u8C61\u7684 key \u5C5E\u6027\u6240\u5BF9\u5E94\u7684\u503C\u3002</p><h3 id="ctx-unselect-key-values" tabindex="-1"><a class="header-anchor" href="#ctx-unselect-key-values" aria-hidden="true">#</a> ctx.unselect(key, ...values)</h3><ul><li><strong>values:</strong> <code>string[]</code> \u5982\u679C\u975E\u7A7A\u5219\u8868\u793A\u5141\u8BB8\u7684 key \u5C5E\u6027\u7981\u7528\u503C\uFF1B\u5426\u5219\u53EA\u9700 key \u5C5E\u6027\u4E3A falsy \u5373\u53EF</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u9009\u53D6\u5F53\u524D\u4E0A\u4E0B\u6587\u7684\u5B50\u96C6\uFF0C\u6392\u9664\u4F1A\u8BDD\u5BF9\u8C61\u7684 key \u5C5E\u6027\u6240\u5BF9\u5E94\u7684\u503C\u3002</p><h3 id="ctx-union-filter" tabindex="-1"><a class="header-anchor" href="#ctx-union-filter" aria-hidden="true">#</a> ctx.union(filter)</h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> \u53E6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6216\u8005\u8FC7\u6EE4\u5668\u51FD\u6570</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u7ED9\u51FA\u5F53\u524D\u4E0A\u4E0B\u6587\u548C\u5176\u4ED6\u4E0A\u4E0B\u6587\u7684\u5E76\u96C6\u3002</p><h3 id="ctx-intersect-filter" tabindex="-1"><a class="header-anchor" href="#ctx-intersect-filter" aria-hidden="true">#</a> ctx.intersect(filter)</h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> \u53E6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6216\u8005\u8FC7\u6EE4\u5668\u51FD\u6570</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u7ED9\u51FA\u5F53\u524D\u4E0A\u4E0B\u6587\u548C\u5176\u4ED6\u4E0A\u4E0B\u6587\u7684\u4EA4\u96C6\u3002</p><h3 id="ctx-except-filter" tabindex="-1"><a class="header-anchor" href="#ctx-except-filter" aria-hidden="true">#</a> ctx.except(filter)</h3><ul><li><strong>context:</strong> <code>Context | ((session: Session) =&gt; boolean)</code> \u53E6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6216\u8005\u8FC7\u6EE4\u5668\u51FD\u6570</li><li>\u8FD4\u56DE\u503C: <code>Context</code> \u65B0\u7684\u4E0A\u4E0B\u6587</li></ul><p>\u7ED9\u51FA\u5F53\u524D\u4E0A\u4E0B\u6587\u548C\u5176\u4ED6\u4E0A\u4E0B\u6587\u7684\u5DEE\u96C6\u3002</p><h3 id="ctx-match-session" tabindex="-1"><a class="header-anchor" href="#ctx-match-session" aria-hidden="true">#</a> ctx.match(session)</h3>',26),Q=e("strong",null,"session:",-1),X=t(),Y=e("code",null,"Session",-1),Z=t(" \u4F1A\u8BDD\u5BF9\u8C61"),ee=e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"boolean"),t(" \u5339\u914D\u7ED3\u679C")],-1),te=e("p",null,"\u6D4B\u8BD5\u4E0A\u4E0B\u6587\u80FD\u5426\u5339\u914D\u4F1A\u8BDD\u5BF9\u8C61\u3002",-1),oe=e("h2",{id:"\u94A9\u5B50\u4E0E\u4E2D\u95F4\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u94A9\u5B50\u4E0E\u4E2D\u95F4\u4EF6","aria-hidden":"true"},"#"),t(" \u94A9\u5B50\u4E0E\u4E2D\u95F4\u4EF6")],-1),ne=t("\u6709\u5173\u8FD9\u91CC\u7684 API\uFF0C\u8BF7\u53C2\u89C1 "),se=t("\u4E8B\u4EF6\u7CFB\u7EDF"),le=t("\u3002"),ae=e("h3",{id:"ctx-emit-session-event-param",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-emit-session-event-param","aria-hidden":"true"},"#"),t(" ctx.emit(session?, event, ...param)")],-1),ce=e("h3",{id:"ctx-parallel-session-event-param",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-parallel-session-event-param","aria-hidden":"true"},"#"),t(" ctx.parallel(session?, event, ...param)")],-1),ie=e("strong",null,"session:",-1),de=t(),re=e("code",null,"Session",-1),he=t(" \u4F1A\u8BDD\u5BF9\u8C61"),ue=e("li",null,[e("strong",null,"event:"),t(),e("code",null,"string"),t(" \u4E8B\u4EF6\u540D\u79F0")],-1),_e=e("li",null,[e("strong",null,"param:"),t(),e("code",null,"any[]"),t(" \u4E8B\u4EF6\u7684\u53C2\u6570")],-1),pe=e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"boolean"),t(" \u5339\u914D\u7ED3\u679C")],-1),xe=e("p",null,"\u540C\u65F6\u89E6\u53D1\u6240\u6709 event \u4E8B\u4EF6\u7684\u80FD\u591F\u5339\u914D session \u5BF9\u8C61\u7684\u56DE\u8C03\u51FD\u6570\u3002emit \u4E3A\u540C\u6B65\uFF0Cparallel \u4E3A\u5F02\u6B65\u3002",-1),ge=e("h3",{id:"ctx-bail-session-event-param",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-bail-session-event-param","aria-hidden":"true"},"#"),t(" ctx.bail(session?, event, ...param)")],-1),Fe=e("h3",{id:"ctx-serial-session-event-param",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-serial-session-event-param","aria-hidden":"true"},"#"),t(" ctx.serial(session?, event, ...param)")],-1),fe=e("strong",null,"session:",-1),ye=t(),Ee=e("code",null,"Session",-1),me=t(" \u4F1A\u8BDD\u5BF9\u8C61"),be=e("li",null,[e("strong",null,"event:"),t(),e("code",null,"string"),t(" \u4E8B\u4EF6\u540D\u79F0")],-1),Be=e("li",null,[e("strong",null,"param:"),t(),e("code",null,"any[]"),t(" \u4E8B\u4EF6\u7684\u53C2\u6570")],-1),ve=e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"boolean"),t(" \u5339\u914D\u7ED3\u679C")],-1),Ae=e("p",null,"\u4F9D\u6B21\u89E6\u53D1\u6240\u6709 event \u4E8B\u4EF6\u7684\u80FD\u591F\u5339\u914D session \u5BF9\u8C61\u7684\u56DE\u8C03\u51FD\u6570\u3002\u5F53\u8FD4\u56DE\u4E00\u4E2A false, null, undefined \u4EE5\u5916\u7684\u503C\u65F6\u5C06\u8FD9\u4E2A\u503C\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE\u3002bail \u4E3A\u540C\u6B65\uFF0Cserial \u4E3A\u5F02\u6B65\u3002",-1),De=e("h3",{id:"ctx-chain-session-event-param",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-chain-session-event-param","aria-hidden":"true"},"#"),t(" ctx.chain(session?, event, ...param)")],-1),ke=e("h3",{id:"ctx-waterfall-session-event-param",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-waterfall-session-event-param","aria-hidden":"true"},"#"),t(" ctx.waterfall(session?, event, ...param)")],-1),Ce=e("strong",null,"session:",-1),we=t(),Ie=e("code",null,"Session",-1),Pe=t(" \u4F1A\u8BDD\u5BF9\u8C61"),Se=e("li",null,[e("strong",null,"event:"),t(),e("code",null,"string"),t(" \u4E8B\u4EF6\u540D\u79F0")],-1),Ue=e("li",null,[e("strong",null,"param:"),t(),e("code",null,"any[]"),t(" \u4E8B\u4EF6\u7684\u53C2\u6570")],-1),Le=e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"boolean"),t(" \u5339\u914D\u7ED3\u679C")],-1),Re=l('<p>\u4F9D\u6B21\u89E6\u53D1\u6240\u6709 event \u4E8B\u4EF6\u7684\u80FD\u591F\u5339\u914D session \u5BF9\u8C61\u7684\u56DE\u8C03\u51FD\u6570\u3002\u6BCF\u6B21\u7528\u5F97\u5230\u7684\u8FD4\u56DE\u503C\u8986\u76D6\u4E0B\u4E00\u8F6E\u8C03\u7528\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E76\u5728\u6240\u6709\u51FD\u6570\u6267\u884C\u5B8C\u540E\u8FD4\u56DE\u6700\u7EC8\u7ED3\u679C\u3002chain \u4E3A\u540C\u6B65\uFF0Cwaterfall \u4E3A\u5F02\u6B65\u3002</p><h3 id="ctx-on-event-listener-prepend" tabindex="-1"><a class="header-anchor" href="#ctx-on-event-listener-prepend" aria-hidden="true">#</a> ctx.on(event, listener, prepend?)</h3><ul><li><strong>event:</strong> <code>string</code> \u4E8B\u4EF6\u540D\u79F0</li><li><strong>listener:</strong> <code>Function</code> \u56DE\u8C03\u51FD\u6570</li><li><strong>prepend:</strong> <code>boolean</code> \u662F\u5426\u524D\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>() =&gt; boolean</code> \u53D6\u6D88\u8FD9\u4E2A\u76D1\u542C\u5668</li></ul><p>\u76D1\u542C\u4E00\u4E2A\u4E8B\u4EF6\u3002</p><h3 id="ctx-once-event-listener-prepend" tabindex="-1"><a class="header-anchor" href="#ctx-once-event-listener-prepend" aria-hidden="true">#</a> ctx.once(event, listener, prepend?)</h3><ul><li><strong>event:</strong> <code>string</code> \u4E8B\u4EF6\u540D\u79F0</li><li><strong>listener:</strong> <code>Function</code> \u56DE\u8C03\u51FD\u6570</li><li><strong>prepend:</strong> <code>boolean</code> \u662F\u5426\u524D\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>() =&gt; boolean</code> \u53D6\u6D88\u8FD9\u4E2A\u76D1\u542C\u5668</li></ul><p>\u76D1\u542C\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u4E14\u786E\u4FDD\u56DE\u8C03\u51FD\u6570\u53EA\u4F1A\u88AB\u6267\u884C\u4E00\u6B21\u3002</p><h3 id="ctx-before-event-listener-append" tabindex="-1"><a class="header-anchor" href="#ctx-before-event-listener-append" aria-hidden="true">#</a> ctx.before(event, listener, append?)</h3><ul><li><strong>event:</strong> <code>string</code> \u4E8B\u4EF6\u540D\u79F0</li><li><strong>listener:</strong> <code>Function</code> \u56DE\u8C03\u51FD\u6570</li><li><strong>append:</strong> <code>boolean</code> \u662F\u5426\u540E\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>() =&gt; boolean</code> \u53D6\u6D88\u8FD9\u4E2A\u76D1\u542C\u5668</li></ul><p>\u76D1\u542C\u4E00\u4E2A\u4EE5 <code>before-</code> \u5F00\u5934\u7684\u4E8B\u4EF6\u3002</p><h3 id="ctx-middleware-middleware-prepend" tabindex="-1"><a class="header-anchor" href="#ctx-middleware-middleware-prepend" aria-hidden="true">#</a> ctx.middleware(middleware, prepend?)</h3>',11),Te=e("strong",null,"middleware:",-1),Ne=t(),je=e("code",null,"Middleware",-1),Ke=t(" \u8981\u6CE8\u518C\u7684\u4E2D\u95F4\u4EF6"),Oe=e("li",null,[e("strong",null,"prepend:"),t(),e("code",null,"boolean"),t(" \u662F\u5426\u524D\u7F6E")],-1),Ve=e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"() => boolean"),t(" \u53D6\u6D88\u8FD9\u4E2A\u4E2D\u95F4\u4EF6")],-1),$e=l('<p>\u5F53\u524D\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u3002</p><h2 id="\u6307\u4EE4\u4E0E\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u4E0E\u63D2\u4EF6" aria-hidden="true">#</a> \u6307\u4EE4\u4E0E\u63D2\u4EF6</h2><h3 id="ctx-plugin-plugin-options" tabindex="-1"><a class="header-anchor" href="#ctx-plugin-plugin-options" aria-hidden="true">#</a> ctx.plugin(plugin, options?)</h3><ul><li><strong>plugin:</strong> <code>Plugin</code> \u8981\u5B89\u88C5\u7684\u63D2\u4EF6</li><li><strong>options:</strong> <code>any</code> \u8981\u4F20\u5165\u63D2\u4EF6\u7684\u53C2\u6570\uFF0C\u5982\u679C\u4E3A <code>false</code> \u5219\u63D2\u4EF6\u4E0D\u4F1A\u88AB\u5B89\u88C5</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u5F53\u524D\u4E0A\u4E0B\u6587\u4E2D\u5B89\u88C5\u4E00\u4E2A\u63D2\u4EF6\u3002</p>',5),qe=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"PluginFunction"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"U"),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," ("),e("span",{style:{color:"#FD971F","font-style":"italic"}},"ctx"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Context"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FD971F","font-style":"italic"}},"options"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"U"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"void")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"PluginObject"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"U"),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," { apply"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"PluginFunction"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"U"),e("span",{style:{color:"#F8F8F2"}},"> }")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Plugin"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"U"),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"PluginFunction"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"U"),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"PluginObject"),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"U"),e("span",{style:{color:"#F8F8F2"}},">")]),t(`
`),e("span",{class:"line"})])],-1),Me=l('<h3 id="ctx-with-deps-plugin" tabindex="-1"><a class="header-anchor" href="#ctx-with-deps-plugin" aria-hidden="true">#</a> ctx.with(deps, plugin)</h3><ul><li><strong>deps:</strong> <code>string[]</code> \u4F9D\u8D56\u5217\u8868</li><li><strong>plugin:</strong> <code>Plugin</code> \u8981\u5B89\u88C5\u7684\u63D2\u4EF6</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul>',2),We=t("\u5B89\u88C5\u4E00\u4E2A\u5B58\u5728\u4F9D\u8D56\u7684\u63D2\u4EF6\uFF0C\u53C2\u89C1 "),ze=t("\u58F0\u660E\u4F9D\u8D56\u5173\u7CFB"),Ge=t("\u3002\u8BF7\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684\u4F9D\u8D56\u5217\u8868\u90FD\u5E94\u8BE5\u662F node \u6A21\u5757\u540D\uFF0C\u5E76\u4E14\u90FD\u5FC5\u987B\u76F4\u63A5\u4EE5\u63D2\u4EF6\u7684\u5F62\u5F0F\u5BFC\u51FA\uFF08\u5982\u6240\u6709\u5B98\u65B9\u63D2\u4EF6\u90FD\u5177\u5907\u8FD9\u4E2A\u7279\u5F81\uFF09\u3002"),He=e("h3",{id:"ctx-command-def-desc-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-command-def-desc-config","aria-hidden":"true"},"#"),t(" ctx.command(def, desc?, config?)")],-1),Je=e("li",null,[e("strong",null,"def:"),t(),e("code",null,"string"),t(" \u6307\u4EE4\u540D\u4EE5\u53CA\u53EF\u80FD\u7684\u53C2\u6570")],-1),Qe=e("li",null,[e("strong",null,"desc:"),t(),e("code",null,"string"),t(" \u6307\u4EE4\u7684\u63CF\u8FF0")],-1),Xe=e("strong",null,"config:",-1),Ye=t(),Ze=e("code",null,"CommandConfig",-1),et=t(" \u6307\u4EE4\u7684\u914D\u7F6E "),tt=e("strong",null,"hidden:",-1),ot=t(),nt=e("code",null,"boolean",-1),st=t(" \u662F\u5426\u5728"),lt=t("\u9690\u85CF\u6307\u4EE4"),at=t("\uFF0C\u9ED8\u8BA4\u4E3A "),ct=e("code",null,"false",-1),it=l("<li><strong>checkUnknown:</strong> <code>boolean</code> \u662F\u5426\u5BF9\u672A\u77E5\u9009\u9879\u8FDB\u884C\u68C0\u6D4B\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code></li><li><strong>checkArgCount:</strong> <code>boolean</code> \u662F\u5426\u5BF9\u53C2\u6570\u4E2A\u6570\u8FDB\u884C\u68C0\u6D4B\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code></li><li><strong>authority:</strong> <code>number</code> \u6700\u4F4E\u8C03\u7528\u6743\u9650\uFF0C\u9ED8\u8BA4\u4E3A <code>1</code></li><li><strong>maxUsage:</strong> <code>number</code> \u6BCF\u5929\u6700\u591A\u8C03\u7528\u6B21\u6570\uFF0C\u9ED8\u8BA4\u4E3A <code>Infinity</code></li><li><strong>minInterval:</strong> <code>number</code> \u6BCF\u6B21\u8C03\u7528\u6700\u77ED\u65F6\u95F4\u95F4\u9694\uFF0C\u9ED8\u8BA4\u4E3A <code>0</code></li><li><strong>showWarning:</strong> <code>boolean</code> \u5F53\u5C0F\u4E8E\u6700\u77ED\u95F4\u9694\u65F6\u662F\u5426\u8FDB\u884C\u63D0\u9192\uFF0C\u9ED8\u8BA4\u4E3A <code>false</code></li><li><strong>usageName:</strong> <code>string</code> \u8C03\u7528\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u6307\u4EE4\u540D\uFF0C\u5982\u679C\u591A\u4E2A\u6307\u4EE4\u4F7F\u7528\u540C\u4E00\u4E2A\u6807\u8BC6\u7B26\uFF0C\u5219\u5B83\u4EEC\u7684\u8C03\u7528\u6B21\u6570\u5C06\u5408\u5E76\u8BA1\u7B97</li>",7),dt=t("\u8FD4\u56DE\u503C: "),rt=e("code",null,"Command",-1),ht=t(" \u6CE8\u518C\u6216\u4FEE\u6539\u7684\u6307\u4EE4"),ut=t("\u5728\u5F53\u524D\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u6216\u4FEE\u6539\u4E00\u4E2A\u6307\u4EE4\u3002\u5173\u4E8E\u6307\u4EE4\u7684\u6587\u6863\u8BE6\u89C1 "),_t=t("\u6307\u4EE4 API"),pt=t("\u3002"),xt=l('<h3 id="ctx-getselfids-type-assignees" tabindex="-1"><a class="header-anchor" href="#ctx-getselfids-type-assignees" aria-hidden="true">#</a> ctx.getSelfIds(type?, assignees?)</h3><ul><li><strong>type:</strong> <code>Platform</code> \u5E73\u53F0\u540D\u79F0\uFF0C\u5982\u679C\u4E0D\u5199\u5C31\u5BF9\u5E94\u5168\u90E8\u5E73\u53F0</li><li><strong>assignees:</strong> <code>string[]</code> \u673A\u5668\u4EBA ID \u5217\u8868\uFF0C\u5982\u679C\u4E0D\u5199\u5C31\u5BF9\u5E94\u5F53\u524D\u5E73\u53F0\u7684\u5168\u90E8\u673A\u5668\u4EBA</li><li>\u8FD4\u56DE\u503C: <code>Record&lt;string, readonly string[]&gt;</code> \u5E73\u53F0\u540D\u5230\u673A\u5668\u4EBA ID \u5217\u8868\u7684\u952E\u503C\u5BF9</li></ul><p>\u6309\u5E73\u53F0\u540D\u79F0\u5BF9\u673A\u5668\u4EBA\u5206\u7C7B\u3002</p><h3 id="ctx-broadcast-channels-content-forced" tabindex="-1"><a class="header-anchor" href="#ctx-broadcast-channels-content-forced" aria-hidden="true">#</a> ctx.broadcast(channels?, content, forced?)</h3><ul><li><strong>channels:</strong> <code>string[]</code> \u9891\u9053\u5217\u8868</li><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7684\u5185\u5BB9</li><li><strong>forced:</strong> <code>boolean</code> \u662F\u5426\u65E0\u89C6 silent \u6807\u8BB0</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;string[]&gt;</code> \u6210\u529F\u53D1\u9001\u7684\u6D88\u606F ID \u5217\u8868</li></ul>',5),gt=t("\u6240\u6709\u673A\u5668\u4EBA\u5411\u81EA\u5DF1\u5206\u914D\u7684\u9891\u9053\u5E7F\u64AD\u6D88\u606F\uFF0C\u5B58\u5728\u6807\u8BB0 silent \u7684\u9891\u9053\u9664\u5916\u3002\u5982\u6709\u5931\u8D25\u4E0D\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u53C2\u89C1 "),Ft=t("\u53D1\u9001\u5E7F\u64AD\u6D88\u606F"),ft=t("\u3002"),yt=e("h3",{id:"ctx-logger-scope",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-logger-scope","aria-hidden":"true"},"#"),t(" ctx.logger(scope?)")],-1),Et=e("li",null,[e("strong",null,"scope:"),t(),e("code",null,"string"),t(" \u8981\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A "),e("code",null,"''")],-1),mt=t("\u8FD4\u56DE\u503C: "),bt=e("code",null,"Logger",-1),Bt=t("\u6839\u636E namespace \u751F\u6210\u4E00\u4E2A "),vt=t("Logger \u5BF9\u8C61"),At=t("\u3002"),Dt=e("h3",{id:"ctx-dispose-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ctx-dispose-plugin","aria-hidden":"true"},"#"),t(" ctx.dispose(plugin?)")],-1),kt=e("ul",null,[e("li",null,[e("strong",null,"plugin:"),t(),e("code",null,"Plugin"),t(" \u8981\u79FB\u9664\u7684\u63D2\u4EF6")]),e("li",null,[t("\u8FD4\u56DE\u503C: "),e("code",null,"void")])],-1),Ct=t("\u79FB\u9664\u63D2\u4EF6\u4E2D\u6240\u6CE8\u518C\u7684\u94A9\u5B50\u3001\u4E2D\u95F4\u4EF6\u3001\u6307\u4EE4\u548C\u5B50\u63D2\u4EF6\u7B49\u3002"),wt=e("code",null,"plugin",-1),It=t(" \u662F\u9ED8\u8BA4\u4E3A\u5F53\u524D\u4E0A\u4E0B\u6587\u6240\u5728\u7684\u63D2\u4EF6\u3002\u5982\u679C\u65E2\u6CA1\u6709\u63D0\u4F9B "),Pt=e("code",null,"plugin",-1),St=t("\uFF0C\u4E0A\u4E0B\u6587\u4E5F\u4E0D\u662F\u4E00\u4E2A\u63D2\u4EF6\u4E0A\u4E0B\u6587\u7684\u8BDD\uFF0C\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002\u53C2\u89C1 "),Ut=t("\u5378\u8F7D\u63D2\u4EF6"),Lt=t("\u3002"),Rt=e("h2",{id:"\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5","aria-hidden":"true"},"#"),t(" \u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5")],-1),Tt=e("h3",{id:"context-current",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#context-current","aria-hidden":"true"},"#"),t(" Context.current")],-1),Nt=e("ul",null,[e("li",null,[t("\u7C7B\u578B: "),e("code",null,"symbol")])],-1),jt=t("\u7279\u6B8A\u7684\u952E\u503C\uFF0C\u53EF\u4EE5\u5728\u901A\u7528\u4E0A\u4E0B\u6587\u5C5E\u6027\u5BF9\u8C61\u7684\u65B9\u6CD5\u4E0A\u8BBF\u95EE\u3002\u53C2\u89C1 "),Kt=t("\u58F0\u660E\u901A\u7528\u4E0A\u4E0B\u6587\u5C5E\u6027"),Ot=t("\u3002"),Vt={id:"context-delegate-name",tabindex:"-1"},$t=e("a",{class:"header-anchor",href:"#context-delegate-name","aria-hidden":"true"},"#",-1),qt=t(" Context.delegate(name) "),Mt=e("ul",null,[e("li",null,[e("strong",null,"name:"),t(),e("code",null,"string"),t(" \u5C5E\u6027\u540D\u79F0")])],-1),Wt=t("\u58F0\u660E\u4E00\u4E2A\u901A\u7528\u4E0A\u4E0B\u6587\u5C5E\u6027\u3002\u53C2\u89C1 "),zt=t("\u58F0\u660E\u901A\u7528\u4E0A\u4E0B\u6587\u5C5E\u6027"),Gt=t("\u3002");function Ht(Jt,Qt){const s=a("RouterLink"),i=a("OutboundLink"),c=a("panel-view"),d=a("Badge");return _(),h(u,null,[x,e("p",null,[g,o(s,{to:"/api/database.html#%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%B9%E8%B1%A1"},{default:n(()=>[F]),_:1}),f]),y,E,e("p",null,[m,o(s,{to:"/api/app.html#option-port"},{default:n(()=>[b]),_:1}),B,e("a",v,[A,o(i)]),D]),o(c,{class:"code",title:"",style:{}},{default:n(()=>[k]),_:1}),C,w,I,e("div",P,[S,U,o(c,{class:"code",title:"",style:{}},{default:n(()=>[L]),_:1})]),R,e("p",null,[T,o(s,{to:"/guide/context.html#%E4%BD%BF%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87"},{default:n(()=>[N]),_:1}),j]),K,O,V,e("div",$,[q,e("p",null,[M,W,z,o(s,{to:"/guide/context.html#%E6%8F%92%E4%BB%B6%E7%83%AD%E9%87%8D%E8%BD%BD"},{default:n(()=>[G]),_:1}),H])]),J,e("ul",null,[e("li",null,[Q,X,o(s,{to:"/api/session.html"},{default:n(()=>[Y]),_:1}),Z]),ee]),te,oe,e("p",null,[ne,o(s,{to:"/guide/lifecycle.html#%E4%BA%8B%E4%BB%B6%E7%B3%BB%E7%BB%9F"},{default:n(()=>[se]),_:1}),le]),ae,ce,e("ul",null,[e("li",null,[ie,de,o(s,{to:"/api/session.html"},{default:n(()=>[re]),_:1}),he]),ue,_e,pe]),xe,ge,Fe,e("ul",null,[e("li",null,[fe,ye,o(s,{to:"/api/session.html"},{default:n(()=>[Ee]),_:1}),me]),be,Be,ve]),Ae,De,ke,e("ul",null,[e("li",null,[Ce,we,o(s,{to:"/api/session.html"},{default:n(()=>[Ie]),_:1}),Pe]),Se,Ue,Le]),Re,e("ul",null,[e("li",null,[Te,Ne,o(s,{to:"/guide/message.html#%E4%BD%BF%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6"},{default:n(()=>[je]),_:1}),Ke]),Oe,Ve]),$e,o(c,{class:"code",title:"",style:{}},{default:n(()=>[qe]),_:1}),Me,e("p",null,[We,o(s,{to:"/guide/context.html#%E5%A3%B0%E6%98%8E%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB"},{default:n(()=>[ze]),_:1}),Ge]),He,e("ul",null,[Je,Qe,e("li",null,[Xe,Ye,Ze,et,e("ul",null,[e("li",null,[tt,ot,nt,st,o(s,{to:"/guide/command.html#%E9%9A%90%E8%97%8F%E6%8C%87%E4%BB%A4%E5%92%8C%E9%80%89%E9%A1%B9"},{default:n(()=>[lt]),_:1}),at,ct]),it])]),e("li",null,[dt,o(s,{to:"/api/command.html"},{default:n(()=>[rt]),_:1}),ht])]),e("p",null,[ut,o(s,{to:"/api/command.html"},{default:n(()=>[_t]),_:1}),pt]),xt,e("p",null,[gt,o(s,{to:"/guide/message.html#%E5%8F%91%E9%80%81%E5%B9%BF%E6%92%AD%E6%B6%88%E6%81%AF"},{default:n(()=>[Ft]),_:1}),ft]),yt,e("ul",null,[Et,e("li",null,[mt,o(s,{to:"/guide/logger.html#%E4%BD%BF%E7%94%A8-logger"},{default:n(()=>[bt]),_:1})])]),e("p",null,[Bt,o(s,{to:"/guide/logger.html#%E4%BD%BF%E7%94%A8-logger"},{default:n(()=>[vt]),_:1}),At]),Dt,kt,e("p",null,[Ct,wt,It,Pt,St,o(s,{to:"/guide/context.html#%E5%8D%B8%E8%BD%BD%E6%8F%92%E4%BB%B6"},{default:n(()=>[Ut]),_:1}),Lt]),Rt,Tt,Nt,e("p",null,[jt,o(s,{to:"/guide/context.html#%E5%A3%B0%E6%98%8E%E9%80%9A%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87%E5%B1%9E%E6%80%A7"},{default:n(()=>[Kt]),_:1}),Ot]),e("h3",Vt,[$t,qt,o(d,{text:"beta",type:"warning"})]),Mt,e("p",null,[Wt,o(s,{to:"/guide/context.html#%E5%A3%B0%E6%98%8E%E9%80%9A%E7%94%A8%E4%B8%8A%E4%B8%8B%E6%96%87%E5%B1%9E%E6%80%A7"},{default:n(()=>[zt]),_:1}),Gt])],64)}var Yt=r(p,[["render",Ht]]);export{Yt as default};