import{_ as i,r as a,c as d,b as o,a as l,w as n,F as r,d as e,e as s,o as h}from"./app.9e111ae1.js";const u={},p=o("h1",{id:"\u6307\u4EE4-command",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u6307\u4EE4-command","aria-hidden":"true"},"#"),e(" \u6307\u4EE4 (Command)")],-1),_=o("p",null,[e("\u6307\u4EE4\u7CFB\u7EDF\u662F Koishi \u7684\u6838\u5FC3\u529F\u80FD\u4E4B\u4E00\u3002\u901A\u8FC7 "),o("code",null,"ctx.command()"),e(" \u65B9\u6CD5\u83B7\u5F97\u7684\u662F\u6307\u4EE4\u7684\u5B9E\u4F8B\u3002")],-1),F=e("\u6307\u4EE4\u672C\u8EAB\u7684\u7528\u6CD5\u8BE6\u89C1 "),m=e("\u4E0A\u4E0B\u6587 API"),g=e("\u3002\u5B83\u542B\u6709\u4E0B\u9762\u7684\u65B9\u6CD5\uFF1A"),y=o("h2",{id:"argv-\u5BF9\u8C61",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#argv-\u5BF9\u8C61","aria-hidden":"true"},"#"),e(" Argv \u5BF9\u8C61")],-1),E=o("p",null,[e("Argv \u5BF9\u8C61\u4F1A\u4F5C\u4E3A "),o("code",null,"cmd.action()"),e(", "),o("code",null,"cmd.userFields()"),e(" \u7B49\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002\u5B83\u5177\u6709\u4EE5\u4E0B\u7684\u5C5E\u6027\uFF1A")],-1),f=s("<li><strong>args:</strong> <code>any[]</code> \u53C2\u6570\u5217\u8868</li><li><strong>options:</strong> <code>{}</code> \u9009\u9879\u5217\u8868</li><li><strong>next:</strong> <code>NextFunction</code> \u4E2D\u95F4\u4EF6\u7684 next \u56DE\u8C03\u51FD\u6570</li>",3),x=o("strong",null,"session:",-1),A=e(),B=o("code",null,"Session",-1),b=e(" \u6240\u5728\u7684\u4F1A\u8BDD\u5BF9\u8C61"),C=o("h2",{id:"cmd-option-name-desc-config",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#cmd-option-name-desc-config","aria-hidden":"true"},"#"),e(" cmd.option(name, desc?, config?)")],-1),D=o("li",null,[o("strong",null,"name:"),e(),o("code",null,"string"),e(" \u9009\u9879\u7684\u540D\u5B57")],-1),v=o("li",null,[o("strong",null,"desc:"),e(),o("code",null,"string"),e(" \u9009\u9879\u7684\u63CF\u8FF0")],-1),k=o("strong",null,"config:",-1),T=e(),w=o("code",null,"OptionConfig",-1),N=o("strong",null,"config.fallback:",-1),R=e(),S=o("code",null,"any",-1),K=e(" \u9009\u9879\u7684"),P=e("\u9ED8\u8BA4\u503C"),V=o("strong",null,"config.value:",-1),O=e(),U=o("code",null,"any",-1),z=e(" \u9009\u9879\u7684"),I=e("\u91CD\u8F7D\u503C"),L=o("strong",null,"config.type:",-1),j=e(),q=o("code",null,"DomainType",-1),G=e(" \u9009\u9879\u7684"),H=e("\u7C7B\u578B\u5B9A\u4E49"),J=o("strong",null,"config.hidden:",-1),M=e(),Q=o("code",null,"boolean",-1),W=e(" \u662F\u5426"),X=e("\u9690\u85CF\u9009\u9879"),Y=o("strong",null,"config.notUsage:",-1),Z=e(),$=o("code",null,"boolean",-1),oo=e(" \u662F\u5426"),eo=e("\u8BA1\u5165\u8C03\u7528"),lo=o("strong",null,"config.authority:",-1),no=e(),to=o("code",null,"number",-1),so=e(" \u9009\u9879\u7684"),co=e("\u6743\u9650\u7B49\u7EA7"),ao=o("li",null,[e("\u8FD4\u56DE\u503C: "),o("code",null,"this")],-1),io=o("p",null,"\u4E3A\u6307\u4EE4\u6DFB\u52A0\u4E00\u4E2A\u9009\u9879\u3002",-1),ro=o("pre",{class:"shiki",style:{"background-color":"#272822"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"DomainType"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},"="),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},"|"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"RegExp"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},"|"),o("span",{style:{color:"#F8F8F2"}}," (("),o("span",{style:{color:"#FD971F","font-style":"italic"}},"source"),o("span",{style:{color:"#F92672"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),o("span",{style:{color:"#F8F8F2"}},") "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"any"),o("span",{style:{color:"#F8F8F2"}},")")]),e(`
`),o("span",{class:"line"})])],-1),ho=s('<h2 id="cmd-removeoption-name" tabindex="-1"><a class="header-anchor" href="#cmd-removeoption-name" aria-hidden="true">#</a> cmd.removeOption(name)</h2><ul><li><strong>name</strong>: <code>string</code> \u6307\u4EE4\u7684\u540D\u79F0</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u5220\u9664\u4E00\u4E2A\u9009\u9879\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u4E3A\u4E00\u4E2A\u9009\u9879\u6CE8\u518C\u4E86\u591A\u4E2A\u522B\u540D\uFF0C\u5219\u5220\u9664\u4EFB\u4F55\u4E00\u4E2A\u522B\u540D\u90FD\u76F8\u5F53\u4E8E\u5220\u9664\u6574\u4E2A\u9009\u9879\u3002</p><h2 id="cmd-usage-text" tabindex="-1"><a class="header-anchor" href="#cmd-usage-text" aria-hidden="true">#</a> cmd.usage(text)</h2><ul><li><strong>text:</strong> <code>string</code> \u4F7F\u7528\u65B9\u6CD5\u8BF4\u660E</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u4E3A\u6307\u4EE4\u6DFB\u52A0\u4F7F\u7528\u65B9\u6CD5\u3002\u591A\u6B21\u8C03\u7528\u6B64\u65B9\u6CD5\u53EA\u4F1A\u4FDD\u7559\u6700\u540E\u4E00\u6B21\u7684\u5B9A\u4E49\u3002</p><h2 id="cmd-example-example" tabindex="-1"><a class="header-anchor" href="#cmd-example-example" aria-hidden="true">#</a> cmd.example(example)</h2><ul><li><strong>example:</strong> <code>text</code> \u4F7F\u7528\u793A\u4F8B</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u4E3A\u6307\u4EE4\u6DFB\u52A0\u4F7F\u7528\u793A\u4F8B\u3002\u591A\u6B21\u8C03\u7528\u6B64\u65B9\u6CD5\u4F1A\u4E00\u5E76\u4FDD\u7559\u5E76\u663E\u793A\u5728\u5E2E\u52A9\u7684\u6700\u540E\u9762\u3002</p><h2 id="cmd-action-action-prepend" tabindex="-1"><a class="header-anchor" href="#cmd-action-action-prepend" aria-hidden="true">#</a> cmd.action(action, prepend?)</h2><ul><li><strong>action:</strong> <code>CommandAction</code> \u6267\u884C\u51FD\u6570</li><li><strong>prepend:</strong> <code>boolean</code> \u662F\u5426\u524D\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u4E3A\u6307\u4EE4\u6DFB\u52A0\u6267\u884C\u51FD\u6570\u3002</p>',12),uo=o("pre",{class:"shiki",style:{"background-color":"#272822"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Awaitable"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),o("span",{style:{color:"#F8F8F2"}},"> "),o("span",{style:{color:"#F92672"}},"="),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},"extends"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Promise"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"unknown"),o("span",{style:{color:"#F8F8F2"}},"> "),o("span",{style:{color:"#F92672"}},"?"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},"|"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Promise"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"T"),o("span",{style:{color:"#F8F8F2"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"CommandAction"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},"="),o("span",{style:{color:"#F8F8F2"}}," ("),o("span",{style:{color:"#FD971F","font-style":"italic"}},"argv"),o("span",{style:{color:"#F92672"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Argv"),o("span",{style:{color:"#F8F8F2"}},", "),o("span",{style:{color:"#F92672"}},"..."),o("span",{style:{color:"#FD971F","font-style":"italic"}},"args"),o("span",{style:{color:"#F92672"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"any"),o("span",{style:{color:"#F8F8F2"}},"[]) "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Awaitable"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},"|"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"void"),o("span",{style:{color:"#F8F8F2"}},">")]),e(`
`),o("span",{class:"line"})])],-1),po=s('<h2 id="cmd-check-action-append" tabindex="-1"><a class="header-anchor" href="#cmd-check-action-append" aria-hidden="true">#</a> cmd.check(action, append?)</h2><ul><li><strong>action:</strong> <code>CommandAction</code> \u6267\u884C\u51FD\u6570</li><li><strong>append:</strong> <code>boolean</code> \u662F\u5426\u540E\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u4E3A\u6307\u4EE4\u6DFB\u52A0\u68C0\u6D4B\u51FD\u6570\u3002</p><h2 id="cmd-userfields-fields" tabindex="-1"><a class="header-anchor" href="#cmd-userfields-fields" aria-hidden="true">#</a> cmd.userFields(fields)</h2><ul><li><strong>fields:</strong> <code>FieldCollector&lt;UserField&gt;</code> \u8981\u8BF7\u6C42\u7684\u7528\u6237\u5B57\u6BB5</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul>',5),_o=e("\u5982\u679C\u6307\u4EE4\u9700\u8981\u7528\u5230\u7528\u6237\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u63D0\u524D\u58F0\u660E\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u5408\u5E76\u591A\u6B21\u8BF7\u6C42\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002 \u53C2\u89C1"),Fo=e("\u6309\u9700\u52A0\u8F7D"),mo=e("\u7AE0\u8282\u3002"),go=o("pre",{class:"shiki",style:{"background-color":"#272822"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#66D9EF","font-style":"italic"}},"type"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"FieldCollector"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"K"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#F92672"}},"extends"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"string"),o("span",{style:{color:"#F8F8F2"}},"> "),o("span",{style:{color:"#F92672"}},"=")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#F92672"}},"|"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Iterable"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"K"),o("span",{style:{color:"#F8F8F2"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F8F8F2"}},"  "),o("span",{style:{color:"#F92672"}},"|"),o("span",{style:{color:"#F8F8F2"}}," (("),o("span",{style:{color:"#FD971F","font-style":"italic"}},"argv"),o("span",{style:{color:"#F92672"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Argv"),o("span",{style:{color:"#F8F8F2"}},", "),o("span",{style:{color:"#FD971F","font-style":"italic"}},"fields"),o("span",{style:{color:"#F92672"}},":"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Set"),o("span",{style:{color:"#F8F8F2"}},"<"),o("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"K"),o("span",{style:{color:"#F8F8F2"}},">) "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),o("span",{style:{color:"#F8F8F2"}}," "),o("span",{style:{color:"#66D9EF","font-style":"italic"}},"void"),o("span",{style:{color:"#F8F8F2"}},")")]),e(`
`),o("span",{class:"line"})])],-1),yo=o("h2",{id:"cmd-channelfields-fields",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#cmd-channelfields-fields","aria-hidden":"true"},"#"),e(" cmd.channelFields(fields)")],-1),Eo=o("ul",null,[o("li",null,[o("strong",null,"fields:"),e(),o("code",null,"FieldCollector<ChannelField>"),e(" \u8981\u8BF7\u6C42\u7684\u9891\u9053\u5B57\u6BB5")]),o("li",null,[e("\u8FD4\u56DE\u503C: "),o("code",null,"this")])],-1),fo=e("\u5982\u679C\u6307\u4EE4\u9700\u8981\u7528\u5230\u9891\u9053\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u63D0\u524D\u58F0\u660E\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u5408\u5E76\u591A\u6B21\u8BF7\u6C42\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002 \u53C2\u89C1"),xo=e("\u6309\u9700\u52A0\u8F7D"),Ao=e("\u7AE0\u8282\u3002"),Bo=s('<h2 id="cmd-alias-names" tabindex="-1"><a class="header-anchor" href="#cmd-alias-names" aria-hidden="true">#</a> cmd.alias(...names)</h2><ul><li><strong>names:</strong> <code>string[]</code> \u8981\u8BBE\u7F6E\u7684\u522B\u540D</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u8BBE\u7F6E\u6307\u4EE4\u522B\u540D\u3002</p><h2 id="cmd-shortcut-name-config" tabindex="-1"><a class="header-anchor" href="#cmd-shortcut-name-config" aria-hidden="true">#</a> cmd.shortcut(name, config?)</h2><ul><li><strong>name:</strong> <code>string | RegExp</code> \u5FEB\u6377\u65B9\u5F0F\u540D</li><li><strong>config:</strong> <code>ShortcutConfig</code><ul><li><strong>config.prefix:</strong> <code>boolean</code> \u8C03\u7528\u65F6\u8981\u6C42\u4FDD\u7559\u524D\u7F00</li><li><strong>config.fuzzy:</strong> <code>boolean</code> \u5141\u8BB8\u5728\u5FEB\u6377\u65B9\u5F0F\u540E\u5E26\u53C2\u6570</li><li><strong>config.greedy:</strong> <code>boolean</code> \u5C06\u6240\u6709\u540E\u9762\u7684\u5185\u5BB9\u89E3\u6790\u6210\u4E00\u4E2A\u53C2\u6570</li><li><strong>config.args:</strong> <code>any[]</code> \u8981\u5E26\u7684\u53C2\u6570\u5217\u8868\uFF0C\u5C06\u4E0E\u4F20\u5165\u7684\u53C2\u6570\u5408\u5E76</li><li><strong>config.options:</strong> <code>Record&lt;string, any&gt;</code> \u8981\u5E26\u7684\u9009\u9879\u5217\u8868\uFF0C\u5C06\u4E0E\u4F20\u5165\u7684\u9009\u9879\u5408\u5E76</li></ul></li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u8BBE\u7F6E\u5FEB\u6377\u65B9\u5F0F\u3002</p><h2 id="cmd-subcommand-name-desc-config" tabindex="-1"><a class="header-anchor" href="#cmd-subcommand-name-desc-config" aria-hidden="true">#</a> cmd.subcommand(name, desc?, config?)</h2>',7),bo=o("li",null,[o("strong",null,"name:"),e(),o("code",null,"string"),e(" \u6307\u4EE4\u540D\u4EE5\u53CA\u53EF\u80FD\u7684\u53C2\u6570")],-1),Co=o("li",null,[o("strong",null,"desc:"),e(),o("code",null,"string"),e(" \u6307\u4EE4\u7684\u63CF\u8FF0")],-1),Do=o("strong",null,"config:",-1),vo=e(),ko=o("code",null,"CommandConfig",-1),To=e(" \u6307\u4EE4\u7684\u914D\u7F6E"),wo=o("li",null,[e("\u8FD4\u56DE\u503C: "),o("code",null,"Command"),e(" \u6CE8\u518C\u6216\u4FEE\u6539\u7684\u6307\u4EE4")],-1),No=e("\u6CE8\u518C\u6216\u4FEE\u6539\u5B50\u6307\u4EE4\u3002\u5B50\u6307\u4EE4\u4F1A\u7EE7\u627F\u5F53\u671F\u6307\u4EE4\u7684\u4E0A\u4E0B\u6587\u3002\u53C2\u89C1"),Ro=e("\u6307\u4EE4\u7684\u591A\u7EA7\u7ED3\u6784"),So=e("\u7AE0\u8282\u3002"),Ko=s('<h2 id="cmd-parse-input" tabindex="-1"><a class="header-anchor" href="#cmd-parse-input" aria-hidden="true">#</a> cmd.parse(input)</h2><ul><li><strong>input:</strong> <code>Argv</code> \u4EE4\u724C\u5316\u7684\u8F93\u5165\uFF0C\u901A\u5E38\u662F <code>Argv.parse()</code> \u7684\u8FD4\u56DE\u503C</li><li>\u8FD4\u56DE\u503C: <code>Argv</code> \u89E3\u6790\u7ED3\u679C\uFF0C\u5305\u542B\u4E86 <code>args</code> \u548C <code>options</code> \u7B49\u5C5E\u6027</li></ul><p>\u89E3\u6790\u4E00\u6BB5\u6307\u4EE4\u8C03\u7528\u6587\u672C\u3002</p><h2 id="cmd-execute-argv-next" tabindex="-1"><a class="header-anchor" href="#cmd-execute-argv-next" aria-hidden="true">#</a> cmd.execute(argv, next?)</h2>',4),Po=o("strong",null,"argv:",-1),Vo=e(),Oo=o("code",null,"Argv",-1),Uo=e(" \u6267\u884C\u914D\u7F6E "),zo=o("li",null,[o("strong",null,"argv.args:"),e(),o("code",null,"any[]"),e(" \u6307\u4EE4\u7684\u53C2\u6570\u5217\u8868")],-1),Io=o("li",null,[o("strong",null,"argv.options:"),e(),o("code",null,"Record<string, any>"),e(" \u6307\u4EE4\u7684\u9009\u9879")],-1),Lo=o("strong",null,"argv.session:",-1),jo=e(),qo=o("code",null,"Session",-1),Go=e(" \u5F53\u524D\u7684\u4F1A\u8BDD\u5BF9\u8C61"),Ho=o("strong",null,"next:",-1),Jo=e(),Mo=o("code",null,"NextFunction",-1),Qo=e(" \u6240\u5904\u7684\u4E2D\u95F4\u4EF6\u7684 "),Wo=o("code",null,"next",-1),Xo=e(" \u56DE\u8C03\u51FD\u6570"),Yo=o("li",null,[e("\u8FD4\u56DE\u503C: "),o("code",null,"Promise<string>"),e(" \u6267\u884C\u51FD\u6570\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u53EF\u7528\u4E8E\u6307\u4EE4\u63D2\u503C")],-1),Zo=s('<p>\u6267\u884C\u5F53\u524D\u6307\u4EE4\u3002</p><h2 id="cmd-dispose" tabindex="-1"><a class="header-anchor" href="#cmd-dispose" aria-hidden="true">#</a> cmd.dispose()</h2><ul><li>\u8FD4\u56DE\u503C: <code>void</code></li></ul><p>\u79FB\u9664\u5F53\u524D\u6307\u4EE4\u53CA\u5176\u6240\u6709\u5B50\u6307\u4EE4\u3002</p><h2 id="\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5</h2><p>\u8FD9\u91CC\u5305\u542B\u4E86\u4E0E Command \u7C7B\u76F8\u5173\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><h3 id="command-defaultconfig" tabindex="-1"><a class="header-anchor" href="#command-defaultconfig" aria-hidden="true">#</a> Command.defaultConfig</h3><p>\u9ED8\u8BA4\u7684\u6307\u4EE4\u914D\u7F6E\u3002</p><h3 id="command-defaultoptionconfig" tabindex="-1"><a class="header-anchor" href="#command-defaultoptionconfig" aria-hidden="true">#</a> Command.defaultOptionConfig</h3><p>\u9ED8\u8BA4\u7684\u9009\u9879\u914D\u7F6E\u3002</p><h3 id="command-userfields-fields" tabindex="-1"><a class="header-anchor" href="#command-userfields-fields" aria-hidden="true">#</a> Command.userFields(fields)</h3><ul><li><strong>fields:</strong> <code>FieldCollector&lt;UserField&gt;</code> \u8981\u8BF7\u6C42\u7684\u7528\u6237\u5B57\u6BB5</li></ul>',12),$o=e("\u5982\u679C\u6240\u6709\u6307\u4EE4\u90FD\u9700\u8981\u7528\u5230\u7528\u6237\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u63D0\u524D\u58F0\u660E\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u5408\u5E76\u591A\u6B21\u8BF7\u6C42\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002 \u53C2\u89C1"),oe=e("\u6309\u9700\u52A0\u8F7D"),ee=e("\u7AE0\u8282\u3002"),le=o("h3",{id:"command-channelfields-fields",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#command-channelfields-fields","aria-hidden":"true"},"#"),e(" Command.channelFields(fields)")],-1),ne=o("ul",null,[o("li",null,[o("strong",null,"fields:"),e(),o("code",null,"FieldCollector<ChannelField>"),e(" \u8981\u8BF7\u6C42\u7684\u9891\u9053\u5B57\u6BB5")])],-1),te=e("\u5982\u679C\u6240\u6709\u6307\u4EE4\u90FD\u9700\u8981\u7528\u5230\u9891\u9053\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u63D0\u524D\u58F0\u660E\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u5408\u5E76\u591A\u6B21\u8BF7\u6C42\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002 \u53C2\u89C1"),se=e("\u6309\u9700\u52A0\u8F7D"),ce=e("\u7AE0\u8282\u3002");function ae(ie,de){const t=a("RouterLink"),c=a("panel-view");return h(),d(r,null,[p,_,o("p",null,[F,l(t,{to:"/api/context.html#ctx-command-def-desc-config"},{default:n(()=>[m]),_:1}),g]),y,E,o("ul",null,[f,o("li",null,[x,A,l(t,{to:"/api/session.html"},{default:n(()=>[B]),_:1}),b])]),C,o("ul",null,[D,v,o("li",null,[k,T,w,o("ul",null,[o("li",null,[N,R,S,K,l(t,{to:"/guide/command.html#%E9%80%89%E9%A1%B9%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC"},{default:n(()=>[P]),_:1})]),o("li",null,[V,O,U,z,l(t,{to:"/guide/command.html#%E9%80%89%E9%A1%B9%E7%9A%84%E9%87%8D%E8%BD%BD"},{default:n(()=>[I]),_:1})]),o("li",null,[L,j,q,G,l(t,{to:"/guide/command.html#%E9%80%89%E9%A1%B9%E7%9A%84%E4%B8%B4%E6%97%B6%E7%B1%BB%E5%9E%8B"},{default:n(()=>[H]),_:1})]),o("li",null,[J,M,Q,W,l(t,{to:"/guide/help.html#%E9%9A%90%E8%97%8F%E6%8C%87%E4%BB%A4%E5%92%8C%E9%80%89%E9%A1%B9"},{default:n(()=>[X]),_:1})]),o("li",null,[Y,Z,$,oo,l(t,{to:"/guide/manage.html#%E6%8C%87%E4%BB%A4%E8%B0%83%E7%94%A8%E7%AE%A1%E7%90%86"},{default:n(()=>[eo]),_:1})]),o("li",null,[lo,no,to,so,l(t,{to:"/guide/manage.html#%E8%AE%BE%E7%BD%AE%E8%B0%83%E7%94%A8%E6%9D%83%E9%99%90"},{default:n(()=>[co]),_:1})])])]),ao]),io,l(c,{class:"code",title:"",style:{}},{default:n(()=>[ro]),_:1}),ho,l(c,{class:"code",title:"",style:{}},{default:n(()=>[uo]),_:1}),po,o("p",null,[_o,l(t,{to:"/guide/manage.html#%E5%A3%B0%E6%98%8E%E6%89%80%E9%9C%80%E5%AD%97%E6%AE%B5"},{default:n(()=>[Fo]),_:1}),mo]),l(c,{class:"code",title:"",style:{}},{default:n(()=>[go]),_:1}),yo,Eo,o("p",null,[fo,l(t,{to:"/guide/manage.html#%E5%A3%B0%E6%98%8E%E6%89%80%E9%9C%80%E5%AD%97%E6%AE%B5"},{default:n(()=>[xo]),_:1}),Ao]),Bo,o("ul",null,[bo,Co,o("li",null,[Do,vo,l(t,{to:"/api/context.html#ctx-command"},{default:n(()=>[ko]),_:1}),To]),wo]),o("p",null,[No,l(t,{to:"/guide/help.html#%E6%8C%87%E4%BB%A4%E7%9A%84%E5%A4%9A%E7%BA%A7%E7%BB%93%E6%9E%84"},{default:n(()=>[Ro]),_:1}),So]),Ko,o("ul",null,[o("li",null,[Po,Vo,Oo,Uo,o("ul",null,[zo,Io,o("li",null,[Lo,jo,l(t,{to:"/api/session.html"},{default:n(()=>[qo]),_:1}),Go])])]),o("li",null,[Ho,Jo,l(t,{to:"/guide/message.html#%E4%BD%BF%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6"},{default:n(()=>[Mo]),_:1}),Qo,Wo,Xo]),Yo]),Zo,o("p",null,[$o,l(t,{to:"/guide/manage.html#%E5%A3%B0%E6%98%8E%E6%89%80%E9%9C%80%E5%AD%97%E6%AE%B5"},{default:n(()=>[oe]),_:1}),ee]),le,ne,o("p",null,[te,l(t,{to:"/guide/manage.html#%E5%A3%B0%E6%98%8E%E6%89%80%E9%9C%80%E5%AD%97%E6%AE%B5"},{default:n(()=>[se]),_:1}),ce])],64)}var he=i(u,[["render",ae]]);export{he as default};