import{_ as F,r as a,c as p,a as o,w as n,b as s,F as r,d as l,e as i,o as y}from"./app.9e111ae1.js";const d={},u=s("h1",{id:"\u5904\u7406\u4E8B\u4EF6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5904\u7406\u4E8B\u4EF6","aria-hidden":"true"},"#"),l(" \u5904\u7406\u4E8B\u4EF6")],-1),h=s("h2",{id:"\u5904\u7406\u597D\u53CB\u548C\u7FA4\u7533\u8BF7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5904\u7406\u597D\u53CB\u548C\u7FA4\u7533\u8BF7","aria-hidden":"true"},"#"),l(" \u5904\u7406\u597D\u53CB\u548C\u7FA4\u7533\u8BF7")],-1),_=s("p",null,"\u5F53\u4F7F\u7528\u4E86 koishi-plugin-common \u5E76\u914D\u7F6E\u4E86\u6570\u636E\u5E93\u65F6\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B Koishi \u4F1A\u901A\u8FC7\u6240\u6709 1 \u7EA7\u4EE5\u4E0A\u7528\u6237\u7684\u597D\u53CB\u7533\u8BF7\uFF0C\u5FFD\u7565\u6240\u6709\u7FA4\u7533\u8BF7\u3002\u4F60\u53EF\u4EE5\u624B\u52A8\u8BBE\u7F6E\u5FFD\u7565\u548C\u901A\u8FC7\u7684\u51FD\u6570\uFF1A",-1),f=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"module"),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"exports"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  plugins: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    common: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      onFriendRequest: "),s("span",{style:{color:"#AE81FF"}},"true"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#88846F"}},"// \u901A\u8FC7\u6240\u6709\u597D\u53CB\u7533\u8BF7")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      onGroupMemberRequest: "),s("span",{style:{color:"#AE81FF"}},"undefined"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#88846F"}},"// \u5FFD\u7565\u6240\u6709\u52A0\u7FA4\u7533\u8BF7\uFF08\u5F53\u7136\u8FD9\u6CA1\u5FC5\u8981\u5199\u51FA\u6765\uFF09")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#F92672"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#A6E22E"}},"onGroupRequest"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"session"),s("span",{style:{color:"#F8F8F2"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#88846F"}},"// \u62D2\u7EDD\u6240\u6709\u6765\u81EA 1 \u7EA7\u4EE5\u4E0B\uFF0C\u901A\u8FC7\u6240\u6709\u6765\u81EA 3 \u7EA7\u6216\u4EE5\u4E0A\u6743\u9650\u7528\u6237\u7684\u52A0\u7FA4\u9080\u8BF7\uFF0C\u5176\u4ED6\u4E0D\u5904\u7406")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"const"),s("span",{style:{color:"#F8F8F2"}}," user "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F92672"}},"await"),s("span",{style:{color:"#F8F8F2"}}," session."),s("span",{style:{color:"#A6E22E"}},"observeUser"),s("span",{style:{color:"#F8F8F2"}},"(["),s("span",{style:{color:"#E6DB74"}},"'authority'"),s("span",{style:{color:"#F8F8F2"}},"])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#F92672"}},"if"),s("span",{style:{color:"#F8F8F2"}}," (user.authority "),s("span",{style:{color:"#F92672"}},">="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#AE81FF"}},"3"),s("span",{style:{color:"#F8F8F2"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#F92672"}},"return"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#AE81FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        } "),s("span",{style:{color:"#F92672"}},"else"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F92672"}},"if"),s("span",{style:{color:"#F8F8F2"}}," (user.authority "),s("span",{style:{color:"#F92672"}},"<="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#AE81FF"}},"1"),s("span",{style:{color:"#F8F8F2"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"          "),s("span",{style:{color:"#F92672"}},"return"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#AE81FF"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"})])],-1),E=i('<p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>onFriendRequest</code>, <code>onGroupMemberRequest</code> \u548C <code>onGroupRequest</code> \u5206\u522B\u7528\u4E8E\u5904\u7406\u597D\u53CB\u7533\u8BF7\uFF0C\u52A0\u7FA4\u7533\u8BF7\u548C\u52A0\u7FA4\u9080\u8BF7\u3002\u6BCF\u4E2A\u9009\u9879\u7684\u503C\u90FD\u53EF\u4EE5\u662F\u4E0B\u9762\u51E0\u79CD\u7C7B\u578B\uFF1A</p><ul><li>true: \u8868\u793A\u901A\u8FC7\u7533\u8BF7</li><li>false: \u8868\u793A\u62D2\u7EDD\u7533\u8BF7</li><li>undefined: \u8868\u793A\u4E0D\u505A\u5904\u7406</li><li>\u5B57\u7B26\u4E32 <ul><li>\u5982\u679C\u662F\u597D\u53CB\u7533\u8BF7\uFF0C\u5219\u8868\u793A\u901A\u8FC7\uFF0C\u5E76\u4F7F\u7528\u8BE5\u5B57\u7B26\u4E32\u4F5C\u4E3A\u8BE5\u597D\u53CB\u7684\u5907\u6CE8\u540D</li><li>\u5982\u679C\u662F\u52A0\u7FA4\u7533\u8BF7\u6216\u9080\u8BF7\uFF0C\u5219\u8868\u793A\u62D2\u7EDD\uFF0C\u5E76\u4F7F\u7528\u8BE5\u5B57\u7B26\u4E32\u4F5C\u4E3A\u62D2\u7EDD\u7684\u7406\u7531</li></ul></li><li>\u51FD\u6570 <ul><li>\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u8BF7\u6C42\u5BF9\u5E94\u7684 Session \u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u6240\u5728\u7684 App \u5B9E\u4F8B</li><li>\u8FD4\u56DE\u503C\u540C\u6837\u53EF\u4EE5\u662F true, false, undefined, \u5B57\u7B26\u4E32\u6216\u5BF9\u5E94\u7684 Promise\uFF0C\u5C06\u6309\u7167\u4E0A\u9762\u6240\u8BF4\u7684\u65B9\u5F0F\u6765\u89E3\u8BFB</li></ul></li></ul><h2 id="\u914D\u7F6E\u5185\u7F6E\u95EE\u7B54" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5185\u7F6E\u95EE\u7B54" aria-hidden="true">#</a> \u914D\u7F6E\u5185\u7F6E\u95EE\u7B54</h2><p>respondent \u63D2\u4EF6\u5141\u8BB8\u8BBE\u7F6E\u4E00\u5957\u5185\u7F6E\u95EE\u7B54\uFF0C\u5C31\u50CF\u8FD9\u6837\uFF1A</p>',4),m=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"module"),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"exports"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  plugins: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    common: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      respondent: [{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        match: "),s("span",{style:{color:"#E6DB74"}},"'awsl'"),s("span",{style:{color:"#F8F8F2"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        reply: "),s("span",{style:{color:"#E6DB74"}},"'\u7231\u6211\u82CF\u8054'"),s("span",{style:{color:"#F8F8F2"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      }, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        match:"),s("span",{style:{color:"#E6DB74"}}," /"),s("span",{style:{color:"#F92672"}},"^"),s("span",{style:{color:"#AE81FF"}},"\\s"),s("span",{style:{color:"#F92672"}},"*"),s("span",{style:{color:"#E6DB74"}},"("),s("span",{style:{color:"#AE81FF"}},"\\S"),s("span",{style:{color:"#E6DB74"}}," "),s("span",{style:{color:"#F92672"}},"+"),s("span",{style:{color:"#E6DB74"}},")"),s("span",{style:{color:"#F92672"}},"{2,}"),s("span",{style:{color:"#AE81FF"}},"\\S\\s"),s("span",{style:{color:"#F92672"}},"*$"),s("span",{style:{color:"#E6DB74"}},"/"),s("span",{style:{color:"#F8F8F2"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        reply: "),s("span",{style:{color:"#E6DB74"}},"'\u7A7A\u683C\u8B66\u5BDF\uFF0C\u51FA\u52A8\uFF01'"),s("span",{style:{color:"#F8F8F2"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      }, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        match:"),s("span",{style:{color:"#E6DB74"}}," /"),s("span",{style:{color:"#F92672"}},"^"),s("span",{style:{color:"#E6DB74"}},"("),s("span",{style:{color:"#AE81FF"}},"."),s("span",{style:{color:"#F92672"}},"+"),s("span",{style:{color:"#E6DB74"}},")\u4E00\u65F6\u723D"),s("span",{style:{color:"#F92672"}},"$"),s("span",{style:{color:"#E6DB74"}},"/"),s("span",{style:{color:"#F8F8F2"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#A6E22E"}},"reply"),s("span",{style:{color:"#F8F8F2"}},": ("),s("span",{style:{color:"#FD971F","font-style":"italic"}},"_"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"str"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E6DB74"}},"`\u4E00\u76F4"),s("span",{style:{color:"#F92672"}},"${"),s("span",{style:{color:"#F8F8F2"}},"str"),s("span",{style:{color:"#F92672"}},"}"),s("span",{style:{color:"#E6DB74"}},"\u4E00\u76F4\u723D`"),s("span",{style:{color:"#F8F8F2"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      }],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"})])],-1),D=s("p",null,[l("\u5176\u4E2D "),s("code",null,"match"),l(" \u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7528\u6765\u8868\u793A\u8981\u5339\u914D\u7684\u5185\u5BB9\uFF1B"),s("code",null,"reply"),l(" \u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4F20\u5165\u5B57\u7B26\u4E32\u7684\u51FD\u6570\uFF0C\u7528\u6765\u8868\u793A\u8F93\u51FA\u7684\u7ED3\u679C\u3002"),s("code",null,"respondent"),l(" \u6570\u7EC4\u4F1A\u6309\u7167\u4ECE\u4E0A\u5230\u4E0B\u7684\u987A\u5E8F\u8FDB\u884C\u5339\u914D\u3002")],-1),B=l("\u5982\u679C\u60F3\u8981\u52A0\u5165\u66F4\u9AD8\u7EA7\u548C\u7528\u6237\u53EF\u5B9A\u4E49\u7684\u95EE\u7B54\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u53C2\u89C1 "),k=l("koishi-plugin-teach"),g=l("\u3002"),A=s("h2",{id:"\u8DE8\u9891\u9053\u6D88\u606F\u8F6C\u53D1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8DE8\u9891\u9053\u6D88\u606F\u8F6C\u53D1","aria-hidden":"true"},"#"),l(" \u8DE8\u9891\u9053\u6D88\u606F\u8F6C\u53D1")],-1),b=s("p",null,"koishi-plugin-common \u4E5F\u652F\u6301\u5728\u4E0D\u540C\u7684\u9891\u9053\u4E4B\u95F4\u8F6C\u53D1\u6D88\u606F\u3002",-1),x=s("pre",{class:"shiki",style:{"background-color":"#272822"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"module"),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"exports"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  plugins: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    common: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      relay: [{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#88846F"}},"// \u8BF7\u4F7F\u7528 {platform}:{channelId} \u7684\u683C\u5F0F")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        source: "),s("span",{style:{color:"#E6DB74"}},"'onebot:123456789'"),s("span",{style:{color:"#F8F8F2"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        destination: "),s("span",{style:{color:"#E6DB74"}},"'discord:987654321'"),s("span",{style:{color:"#F8F8F2"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      }],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"})])],-1),R=s("p",null,[l("\u5F53\u7528\u6237 Alice \u5728\u9891\u9053 "),s("code",null,"source"),l(" \u4E2D\u53D1\u9001\u6D88\u606F foo \u7684\u65F6\u5019\uFF0Ckoishi \u5C31\u4F1A\u5728\u9891\u9053 "),s("code",null,"destination"),l(" \u4E2D\u53D1\u9001\u5982\u4E0B\u7684\u5185\u5BB9\u3002\u63A5\u7740\uFF0C\u9891\u9053 "),s("code",null,"destination"),l(" \u4E2D\u7684\u7528\u6237 Bob \u4E5F\u53EF\u4EE5\u901A\u8FC7\u5F15\u7528\u56DE\u590D\u8FD9\u6761\u6D88\u606F\u7684\u65B9\u5F0F\u5C06\u81EA\u5DF1\u60F3\u8BF4\u7684\u8BDD\u53D1\u56DE\u5230\u9891\u9053 "),s("code",null,"source"),l(" \u4E2D\u53BB\u3002")],-1),q=s("p",null,"Alice: foo",-1),w=s("blockquote",null,[s("p",null,"Alice: foo")],-1),v=s("p",null,"bar",-1);function K(j,G){const e=a("panel-view"),c=a("RouterLink"),t=a("chat-message");return y(),p(r,null,[u,h,_,o(e,{class:"code",title:"koishi.config.js",style:{}},{default:n(()=>[f]),_:1}),E,o(e,{class:"code",title:"koishi.config.js",style:{}},{default:n(()=>[m]),_:1}),o(e,{messages:[["Alice","awsl"],["Koishi","\u7231\u6211\u82CF\u8054"],["Bob","\u4E45 \u7B49 \u4E86"],["Koishi","\u7A7A\u683C\u8B66\u5BDF\uFF0C\u51FA\u52A8\uFF01"],["Carol","\u6316\u5751\u4E00\u65F6\u723D"],["Koishi","\u4E00\u76F4\u6316\u5751\u4E00\u76F4\u723D"]]}),D,s("p",null,[B,o(c,{to:"/plugins/teach.html"},{default:n(()=>[k]),_:1}),g]),A,b,o(e,{class:"code",title:"koishi.config.js",style:{}},{default:n(()=>[x]),_:1}),R,o(e,{title:"\u804A\u5929\u8BB0\u5F55"},{default:n(()=>[o(t,{nickname:"Koishi",avatar:"/koishi.png"},{default:n(()=>[q]),_:1}),o(t,{nickname:"Bob",color:"#00994d"},{default:n(()=>[w,v]),_:1})]),_:1})],64)}var S=F(d,[["render",K]]);export{S as default};
