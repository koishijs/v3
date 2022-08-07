import{_ as a,r as s,c as l,b as e,a as i,w as t,F as d,d as r,e as n,o as c}from"./app.9e111ae1.js";const h={},g=e("h1",{id:"\u4E8B\u4EF6-events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E8B\u4EF6-events","aria-hidden":"true"},"#"),r(" \u4E8B\u4EF6 (Events)")],-1),u=r("\u5EFA\u8BAE\u914D\u5957\u9605\u8BFB\uFF1A"),p=r("\u4E8B\u4EF6\u4E0E\u751F\u547D\u5468\u671F"),f=n('<h2 id="\u4E0A\u62A5\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62A5\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E0A\u62A5\u4E8B\u4EF6</h2><p>\u6240\u6709\u7684\u4E0A\u62A5\u4E8B\u4EF6\u90FD\u662F\u901A\u8FC7 emit \u65B9\u5F0F\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u4E2D\u89E6\u53D1\u7684\uFF08\u5373\u4E0A\u4E0B\u6587\u9009\u62E9\u5668\u5BF9\u8FD9\u4E9B\u4E8B\u4EF6\u6709\u6548\uFF0C\u4E14\u56DE\u8C03\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E0D\u4F1A\u5F71\u54CD\u540E\u7EED\u884C\u4E3A\uFF09\u3002</p><h3 id="\u901A\u7528\u4F1A\u8BDD\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u4F1A\u8BDD\u5C5E\u6027" aria-hidden="true">#</a> \u901A\u7528\u4F1A\u8BDD\u5C5E\u6027</h3><p>\u4EE5\u4E0B\u5C5E\u6027\u5BF9\u6240\u6709\u4F1A\u8BDD\u90FD\u6709\uFF1A</p><ul><li><strong>type:</strong> <code>string</code> \u4E8B\u4EF6\u540D\u79F0</li><li><strong>subtype:</strong> <code>string</code> \u4E00\u7EA7\u5B50\u4E8B\u4EF6\u540D\u79F0</li><li><strong>subsubtype:</strong> <code>string</code> \u4E8C\u7EA7\u5B50\u4E8B\u4EF6\u540D\u79F0</li><li><strong>platform:</strong> <code>string</code> \u4EA7\u751F\u4E8B\u4EF6\u7684\u5E73\u53F0</li><li><strong>selfId:</strong> <code>string</code> \u6536\u5230\u4E8B\u4EF6\u7684\u673A\u5668\u4EBA\u7684\u5E73\u53F0 ID</li><li><strong>userId:</strong> <code>string</code> \u89E6\u53D1\u4E8B\u4EF6\u7684\u7528\u6237\u7684\u5E73\u53F0 ID</li><li><strong>groupId:</strong> <code>string</code> \u89E6\u53D1\u4E8B\u4EF6\u7684\u7FA4\u7EC4\u7684\u5E73\u53F0 ID</li><li><strong>channelId:</strong> <code>string</code> \u89E6\u53D1\u4E8B\u4EF6\u7684\u9891\u9053\u7684\u5E73\u53F0 ID</li><li><strong>timestamp:</strong> <code>number</code> \u6536\u5230\u4E8B\u4EF6\u7684 UNIX \u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</li></ul><h3 id="\u6D88\u606F\u7C7B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u7C7B\u4E8B\u4EF6" aria-hidden="true">#</a> \u6D88\u606F\u7C7B\u4E8B\u4EF6</h3><p>\u8DDF\u6D88\u606F\u6709\u5173\u7684\u51E0\u79CD\u4E8B\u4EF6\u7EDF\u79F0\u4E3A\u6D88\u606F\u7C7B\u4E8B\u4EF6\uFF0C\u5171\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>message: \u6536\u5230\u65B0\u6D88\u606F</li><li>message-deleted: \u6D88\u606F\u88AB\u5220\u9664</li><li>message-updated: \u6D88\u606F\u88AB\u4FEE\u6539</li><li>send: \u673A\u5668\u4EBA\u53D1\u51FA\u6D88\u606F</li></ul><p>\u8FD9\u4E9B\u4E8B\u4EF6\u90FD\u8FD8\u62E5\u6709\u4EE5\u4E0B\u7684\u5B50\u4E8B\u4EF6\uFF1A</p><ul><li>private: \u8BE5\u6D88\u606F\u662F\u79C1\u804A\u6D88\u606F</li><li>group: \u8BE5\u6D88\u606F\u662F\u7FA4\u7EC4\u6D88\u606F</li></ul><p>\u4E0E\u6B64\u7C7B\u4E8B\u4EF6\u76F8\u5173\u7684\u5C5E\u6027\u6709\uFF1A</p><ul><li><strong>messageId:</strong> <code>string</code> \u6D88\u606F ID</li><li><strong>content:</strong> <code>string</code> \u6D88\u606F\u5185\u5BB9</li><li><strong>author:</strong> \u53D1\u9001\u8005\u4FE1\u606F <ul><li><strong>author.userId:</strong> <code>string</code> \u53D1\u9001\u8005\u7684\u5E73\u53F0 ID</li><li><strong>author.avatar:</strong> <code>string</code> \u53D1\u9001\u8005\u7684\u5934\u50CF\u94FE\u63A5</li><li><strong>author.username:</strong> <code>string</code> \u53D1\u9001\u8005\u7684\u5E73\u53F0\u6635\u79F0</li><li><strong>author.nickname:</strong> <code>string</code> \u53D1\u9001\u8005\u5728\u5F53\u524D\u7FA4\u7EC4\u4E2D\u7684\u6635\u79F0</li></ul></li><li><strong>quote:</strong> \u5F15\u7528\u7684\u6D88\u606F\uFF0C\u540C\u6837\u5305\u542B <code>messageId</code>, <code>content</code> \u7B49\u5C5E\u6027</li></ul><h3 id="\u6210\u5458\u7C7B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6210\u5458\u7C7B\u4E8B\u4EF6" aria-hidden="true">#</a> \u6210\u5458\u7C7B\u4E8B\u4EF6</h3><p>\u8DDF\u7FA4\u7EC4\u3001\u597D\u53CB\u6709\u5173\u7684\u4E8B\u4EF6\u7EDF\u79F0\u4E3A\u6210\u5458\u7C7B\u4E8B\u4EF6\uFF0C\u5171\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>group-added: \u52A0\u5165\u4E86\u7FA4\u7EC4</li><li>group-deleted: \u9000\u51FA\u4E86\u7FA4\u7EC4</li><li>group-request: \u6536\u5230\u4E86\u7FA4\u7EC4\u9080\u8BF7</li><li>group-member-added: \u7FA4\u7EC4\u6210\u5458\u589E\u52A0</li><li>group-member-deleted: \u7FA4\u7EC4\u6210\u5458\u51CF\u5C11</li><li>group-member-request: \u6536\u5230\u4E86\u5165\u7FA4\u7533\u8BF7</li><li>friend-added: \u597D\u53CB\u6570\u91CF\u589E\u52A0</li><li>friend-deleted: \u597D\u53CB\u6570\u91CF\u51CF\u5C11</li><li>friend-request: \u6536\u5230\u4E86\u597D\u53CB\u8BF7\u6C42</li></ul><p>\u5F62\u5982 group(-member)?-(added|deleted) \u7684\u4E8B\u4EF6\u62E5\u6709\u4EE5\u4E0B\u7684\u5B50\u4E8B\u4EF6\uFF1A</p><ul><li>active: \u8BE5\u64CD\u4F5C\u662F\u7531\u52A0\u5165\u6216\u9000\u51FA\u65B9\u53D1\u8D77\u7684</li><li>passive: \u8BE5\u64CD\u4F5C\u662F\u7FA4\u7EC4\u65B9\u53D1\u8D77\u7684</li></ul><p>\u5F62\u5982 group(-member)?-(added|deleted) \u7684\u4E8B\u4EF6\u62E5\u6709\u4EE5\u4E0B\u7684\u5C5E\u6027\uFF1A</p><ul><li><strong>operatorId:</strong> <code>string</code> \u64CD\u4F5C\u8005 ID</li></ul><p>\u4EE5 request \u7ED3\u5C3E\u7684\u4E8B\u4EF6\u62E5\u6709\u4E0B\u9762\u7684\u5C5E\u6027\uFF1A</p>',20),b=e("strong",null,"messageId:",-1),m=r(),_=e("code",null,"string",-1),x=r(" \u8BF7\u6C42 ID\uFF0C\u53EF\u7528\u4E8E "),v=r("Bot"),I=r(" \u65B9\u6CD5"),B=e("li",null,[e("strong",null,"content:"),r(),e("code",null,"string"),r(" \u8BF7\u6C42\u6587\u672C")],-1),E=n('<h3 id="\u64CD\u4F5C\u7C7B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7C7B\u4E8B\u4EF6" aria-hidden="true">#</a> \u64CD\u4F5C\u7C7B\u4E8B\u4EF6</h3><p>\u4E0A\u62A5\u4E8B\u4EF6\u4E2D\u6700\u4E3B\u8981\u7684\u4E00\u90E8\u5206\u90FD\u6709\u7740\u7EDF\u4E00\u7684\u7ED3\u6784\uFF1A<strong>\u4E8B\u4EF6\u4E3B\u4F53</strong> + <strong>\u64CD\u4F5C\u7C7B\u578B</strong>\u3002\u4F8B\u5982\u597D\u53CB\u8BF7\u6C42\u4E8B\u4EF6\u662F friend-request\uFF0C\u7FA4\u7EC4\u6587\u4EF6\u66F4\u65B0\u4E8B\u4EF6\u662F group-file-updated \u7B49\u3002\u76EE\u524D\u652F\u6301\u7684\u4E8B\u4EF6\u4E3B\u4F53\u5305\u62EC\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>friend</li><li>channel</li><li>group</li><li>group-member</li><li>group-role</li><li>group-file</li><li>group-emoji</li></ul><p>\u64CD\u4F5C\u7C7B\u578B\u5305\u542B\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>added</li><li>removed</li><li>deleted</li></ul><h3 id="\u7FA4\u6210\u5458\u7C7B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7FA4\u6210\u5458\u7C7B\u4E8B\u4EF6" aria-hidden="true">#</a> \u7FA4\u6210\u5458\u7C7B\u4E8B\u4EF6</h3><h3 id="\u901A\u77E5\u7C7B\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u901A\u77E5\u7C7B\u4E8B\u4EF6" aria-hidden="true">#</a> \u901A\u77E5\u7C7B\u4E8B\u4EF6</h3><p>\u7531\u7CFB\u7EDF\u5728\u9891\u9053\u4E2D\u53D1\u9001\u7684\u5404\u79CD\u901A\u77E5\u6784\u6210\u4E86\u901A\u77E5\u7C7B\u4E8B\u4EF6\uFF0C\u5171\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>notice/poke: \u6233\u4E00\u6233</li><li>notice/lucky-king: \u8FD0\u6C14\u738B</li><li>notice/honor: \u7FA4\u8363\u8A89</li></ul><p>\u4E0E\u6B64\u7C7B\u4E8B\u4EF6\u76F8\u5173\u7684\u5C5E\u6027\u6709\uFF1A</p><ul><li><strong>targetId:</strong> <code>string</code> \u6233\u4E00\u6233\u7684\u76EE\u6807\u7528\u6237 ID\uFF0C\u8FD0\u6C14\u738B\u7684\u83B7\u5F97\u8005 ID</li><li><strong>honorType:</strong> <code>string</code> \u8363\u8A89\u7C7B\u578B\uFF0C\u53EF\u80FD\u4E3A talkative, performer, emotion</li></ul><h2 id="\u5185\u90E8\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8\u4E8B\u4EF6" aria-hidden="true">#</a> \u5185\u90E8\u4E8B\u4EF6</h2><p>\u82E5\u975E\u7279\u522B\u8BF4\u660E\uFF0C\u8FD9\u91CC\u7684\u6240\u6709\u4E8B\u4EF6\u5728\u5168\u4F53\u4E0A\u4E0B\u6587\u89E6\u53D1\u7684\uFF08\u5373\u4E0A\u4E0B\u6587\u9009\u62E9\u5668\u5BF9\u8FD9\u4E9B\u4E8B\u4EF6\u65E0\u6548\uFF09\u3002</p><h3 id="\u4E8B\u4EF6-before-connect" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-before-connect" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-connect</h3><ul><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> parallel</li></ul><p>\u5F00\u59CB\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u65F6\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6-connect" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-connect" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aconnect</h3><ul><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> emit</li></ul><p>\u6210\u529F\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u65F6\u89E6\u53D1\u3002\u5982\u679C\u4E00\u4E2A\u63D2\u4EF6\u5728\u6CE8\u518C\u65F6\uFF0C\u5E94\u7528\u5DF2\u7ECF\u5904\u4E8E\u8FDE\u63A5\u72B6\u6001\uFF0C\u5219\u4F1A\u7ACB\u5373\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6-before-parse" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-before-parse" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-parse</h3><ul><li><strong>content:</strong> <code>string</code> \u8981\u89E3\u6790\u7684\u6587\u672C</li><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> bail</li></ul><p>\u5C1D\u8BD5\u5C06\u6587\u672C\u89E3\u6790\u6210 Argv \u5BF9\u8C61\u65F6\u8C03\u7528\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A Argv \u5BF9\u8C61\u4EE5\u8986\u76D6\u9ED8\u8BA4\u7684\u89E3\u6790\u884C\u4E3A\u3002</p><h3 id="\u4E8B\u4EF6-parse" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-parse" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aparse</h3><ul><li><strong>argv:</strong> <code>Argv</code> \u8FD0\u884C\u65F6\u53C2\u6570</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> bail</li></ul><p>\u5C1D\u8BD5\u5C06\u4E00\u4E2A\u672A\u8BC6\u522B\u51FA\u6307\u4EE4\u7684 Argv \u5BF9\u8C61\u8BC6\u522B\u6210\u6307\u4EE4\u8C03\u7528\u65F6\u4F7F\u7528\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u4FEE\u6539\u4F20\u5165\u7684 Argv \u5BF9\u8C61\uFF0C\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u8868\u793A\u8BC6\u522B\u51FA\u7684\u6307\u4EE4\u3002</p><h3 id="\u4E8B\u4EF6-before-attach-channel" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-before-attach-channel" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-attach-channel</h3><h3 id="\u4E8B\u4EF6-before-attach-user" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-before-attach-user" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-attach-user</h3><ul><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>fields:</strong> <code>Set&lt;string&gt;</code> \u8981\u83B7\u53D6\u7684\u5B57\u6BB5\u5217\u8868</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> emit</li></ul><p>\u5F53 Koishi \u8BD5\u56FE\u4ECE\u6570\u636E\u5E93\u83B7\u53D6\u9891\u9053 / \u7528\u6237\u4FE1\u606F\u524D\u89E6\u53D1\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u901A\u8FC7 <code>fields.add()</code> \u4FEE\u6539\u4F20\u5165\u7684\u5B57\u6BB5\u96C6\u5408\uFF0C\u589E\u52A0\u7684\u5B57\u6BB5\u5C06\u53EF\u4EE5\u88AB\u6307\u4EE4\u4EE5\u53CA\u4E4B\u540E\u7684\u4E2D\u95F4\u4EF6\u83B7\u53D6\u5230\u3002</p><p>\u5982\u679C\u6CA1\u6709\u914D\u7F6E\u6570\u636E\u5E93\uFF0C\u5219\u4E24\u4E2A\u4E8B\u4EF6\u90FD\u4E0D\u4F1A\u89E6\u53D1\uFF1B\u5982\u679C\u4E0D\u662F\u7FA4\u804A\u6D88\u606F\uFF0C\u5219 before-attach-channel \u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6-attach-channel" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-attach-channel" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aattach-channel</h3><h3 id="\u4E8B\u4EF6-attach-user" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-attach-user" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Aattach-user</h3><ul><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> serial</li></ul><p>\u5F53 Koishi \u5B8C\u6210\u9891\u9053 / \u7528\u6237\u6570\u636E\u83B7\u53D6\u540E\u89E6\u53D1\u3002\u8C03\u7528\u65F6\u4F1A\u4F20\u5165\u4E00\u4E2A Session \u5BF9\u8C61\uFF0C\u5C06\u4F1A\u62E5\u6709 <code>channel</code>/<code>user</code> \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u4FEE\u6539\u8FD9\u4E24\u4E2A\u5C5E\u6027\uFF0C\u8FD9\u4E9B\u4FEE\u6539\u4F1A\u5728\u540E\u7EED\u8FC7\u7A0B\u4E2D\u81EA\u52A8\u66F4\u65B0\u5230\u6570\u636E\u5E93\u3002\u5982\u679C\u4F60\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A truthy \u503C\uFF0C\u5219\u8BE5\u4F1A\u8BDD\u4E0D\u4F1A\u89E6\u53D1\u6307\u4EE4\u4EE5\u53CA\u4E4B\u540E\u7684\u4E2D\u95F4\u4EF6\u3002</p><p>\u5982\u679C\u6CA1\u6709\u914D\u7F6E\u6570\u636E\u5E93\uFF0C\u5219\u4E24\u4E2A\u4E8B\u4EF6\u90FD\u4E0D\u4F1A\u89E6\u53D1\uFF1B\u5982\u679C\u4E0D\u662F\u7FA4\u804A\u6D88\u606F\uFF0C\u5219 attach-channel \u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6-before-send" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-before-send" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-send</h3><ul><li><strong>session:</strong> <code>Session</code> \u6D88\u606F\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> bail</li></ul><p>\u5373\u5C06\u53D1\u9001\u4FE1\u606F\u65F6\u4F1A\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u3002\u8C03\u7528\u65F6\u4F1A\u4F20\u5165\u4E00\u4E2A\u4E8B\u4EF6\u7C7B\u578B\u4E3A <a href="#%E6%B6%88%E6%81%AF%E7%B1%BB%E4%BA%8B%E4%BB%B6">send</a> \u7684\u4F1A\u8BDD\u5B9E\u4F8B\u3002\u7531\u4E8E\u8BE5\u6D88\u606F\u8FD8\u672A\u53D1\u9001\uFF0C\u8FD9\u4E2A\u4F1A\u8BDD\u5E76\u6CA1\u6709 <code>messageId</code> \u5C5E\u6027\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 <code>session.content</code> \u6539\u53D8\u53D1\u9001\u7684\u5185\u5BB9\uFF0C\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A truthy \u503C\u4EE5\u53D6\u6D88\u8BE5\u6D88\u606F\u7684\u53D1\u9001\u3002</p><h3 id="\u4E8B\u4EF6-before-command" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-before-command" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-command</h3><ul><li><strong>argv:</strong> <code>Argv</code> \u8FD0\u884C\u65F6\u53C2\u6570</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> serial</li></ul><p>\u8C03\u7528\u6307\u4EE4\u524D\u4F1A\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u3002\u6B64\u65F6\u6307\u4EE4\u7684\u53EF\u7528\u6027\u8FD8\u672A\u7ECF\u68C0\u6D4B\uFF0C\u56E0\u6B64\u53EF\u80FD\u51FA\u73B0\u53C2\u6570\u9519\u8BEF\u3001\u6743\u9650\u4E0D\u8DB3\u3001\u8D85\u8FC7\u4F7F\u7528\u6B21\u6570\u7B49\u60C5\u51B5\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4EE5\u53D6\u6D88\u8BE5\u6307\u4EE4\u7684\u6267\u884C\u3002\u8FDB\u4E00\u6B65\uFF0C\u5982\u679C\u8BE5\u5B57\u7B26\u4E32\u975E\u7A7A\uFF0C\u5219\u4F1A\u4F5C\u4E3A\u6B64\u6307\u4EE4\u6267\u884C\u7684\u7ED3\u679C\u3002</p><h3 id="\u4E8B\u4EF6-command" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-command" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Acommand</h3><ul><li><strong>argv:</strong> <code>Argv</code> \u8FD0\u884C\u65F6\u53C2\u6570</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> parallel</li></ul><p>\u6307\u4EE4\u8C03\u7528\u5B8C\u6BD5\u540E\u4F1A\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6-middleware" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-middleware" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Amiddleware</h3><ul><li><strong>session:</strong> <code>Session</code> \u5F53\u524D\u4F1A\u8BDD</li><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> emit</li></ul><p>\u5728\u6267\u884C\u5B8C\u5168\u90E8\u4E2D\u95F4\u4EF6\u540E\u4F1A\u5728\u5BF9\u5E94\u7684\u4E0A\u4E0B\u6587\u89E6\u53D1\u3002</p><h3 id="\u4E8B\u4EF6-before-disconnect" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-before-disconnect" aria-hidden="true">#</a> \u4E8B\u4EF6\uFF1Abefore-disconnect</h3><ul><li><strong>\u89E6\u53D1\u65B9\u5F0F:</strong> parallel</li></ul>',49),A=r("\u5173\u95ED\u670D\u52A1\u5668\u524D\uFF0C\u6216\u6240\u5C5E\u63D2\u4EF6\u88AB\u5378\u8F7D\u65F6\u89E6\u53D1\u3002\u53C2\u89C1 "),D=r("\u53EF\u5378\u8F7D\u7684\u63D2\u4EF6"),k=r("\u3002"),y=e("h3",{id:"\u4E8B\u4EF6-disconnect",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E8B\u4EF6-disconnect","aria-hidden":"true"},"#"),r(" \u4E8B\u4EF6\uFF1Adisconnect")],-1),S=e("ul",null,[e("li",null,[e("strong",null,"\u89E6\u53D1\u65B9\u5F0F:"),r(" emit")])],-1),F=e("p",null,"\u6210\u529F\u5173\u95ED\u670D\u52A1\u5668\u540E\u89E6\u53D1\u3002",-1);function q(w,N){const o=s("RouterLink");return c(),l(d,null,[g,e("p",null,[u,i(o,{to:"/guide/lifecycle.html"},{default:t(()=>[p]),_:1})]),f,e("ul",null,[e("li",null,[b,m,_,x,i(o,{to:"/api/bot.html#%E5%A4%84%E7%90%86%E8%AF%B7%E6%B1%82"},{default:t(()=>[v]),_:1}),I]),B]),E,e("p",null,[A,i(o,{to:"/guide/context.html#%E5%8F%AF%E5%8D%B8%E8%BD%BD%E7%9A%84%E6%8F%92%E4%BB%B6"},{default:t(()=>[D]),_:1}),k]),y,S,F],64)}var j=a(h,[["render",q]]);export{j as default};