import{_ as c,r,c as d,b as e,a as o,w as t,F as p,d as s,e as n,o as h}from"./app.9e111ae1.js";const F={},g=e("h1",{id:"\u673A\u5668\u4EBA-bot",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u673A\u5668\u4EBA-bot","aria-hidden":"true"},"#"),s(" \u673A\u5668\u4EBA (Bot)")],-1),u=e("p",null,[e("strong",null,"\u673A\u5668\u4EBA (Bot)"),s(" \u662F\u9002\u914D\u5668\u7684\u6838\u5FC3\uFF0C\u5B83\u5C06\u4E0D\u540C\u5E73\u53F0\u7684 API \u5C01\u88C5\u6210\u7EDF\u4E00\u7684\u683C\u5F0F\u4F9B Koishi \u4F7F\u7528\u3002\u800C\u4E0D\u540C\u7684\u9002\u914D\u5668\u4E5F\u53EF\u4EE5\u81EA\u884C\u6269\u5C55 Bot \u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002")],-1),y=s("\u6807\u6709 "),b=s(" \u7684 API \u5DF2\u7ECF\u7531 koishi-core \u63D0\u4F9B\uFF0C\u9002\u914D\u5668\u53EF\u4EE5\u8986\u76D6\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u4F46\u662F\u65E0\u9700\u81EA\u884C\u5B9E\u73B0\u3002"),m=n('<h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><h3 id="\u6784\u9020\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u9009\u9879" aria-hidden="true">#</a> \u6784\u9020\u9009\u9879</h3><p>\u6BCF\u4E2A Bot \u90FD\u4F1A\u7EE7\u627F\u4F60\u6784\u9020 App \u65F6\u4F20\u5165\u7684\u9009\u9879\uFF0C\u56E0\u6B64\u4E0B\u5217\u9009\u9879\u662F\u5929\u751F\u5C31\u6709\u7684\uFF1A</p><ul><li>bot.type</li><li>bot.selfId</li></ul><h3 id="bot-app" tabindex="-1"><a class="header-anchor" href="#bot-app" aria-hidden="true">#</a> bot.app</h3>',5),_=s("\u5F53\u524D Bot \u6240\u5728\u7684 "),f=s("App"),I=s(" \u5B9E\u4F8B\u3002"),x=n('<h3 id="bot-adapter" tabindex="-1"><a class="header-anchor" href="#bot-adapter" aria-hidden="true">#</a> bot.adapter</h3><p>\u5F53\u524D Bot \u6240\u5728\u7684 Adapter \u5B9E\u4F8B\u3002</p><h3 id="bot-platform" tabindex="-1"><a class="header-anchor" href="#bot-platform" aria-hidden="true">#</a> bot.platform</h3><p>\u5F53\u524D Bot \u7684\u5E73\u53F0\u540D\u79F0\u3002</p><h3 id="bot-username" tabindex="-1"><a class="header-anchor" href="#bot-username" aria-hidden="true">#</a> bot.username</h3><p>\u5F53\u524D Bot \u7684\u7528\u6237\u540D\uFF0C\u9700\u8981\u5728\u542F\u52A8\u524D\u83B7\u53D6\u5B8C\u6210\u3002</p><h2 id="\u5904\u7406\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u6D88\u606F" aria-hidden="true">#</a> \u5904\u7406\u6D88\u606F</h2><h3 id="bot-sendmessage-channelid-content" tabindex="-1"><a class="header-anchor" href="#bot-sendmessage-channelid-content" aria-hidden="true">#</a> bot.sendMessage(channelId, content)</h3><ul><li><strong>channelId:</strong> <code>string</code> \u9891\u9053 ID</li><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7684\u5185\u5BB9</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;string&gt;</code> \u53D1\u9001\u7684\u6D88\u606F ID</li></ul><p>\u5411\u7279\u5B9A\u9891\u9053\u53D1\u9001\u6D88\u606F\u3002</p><h3 id="bot-sendprivatemessage-userid-content" tabindex="-1"><a class="header-anchor" href="#bot-sendprivatemessage-userid-content" aria-hidden="true">#</a> bot.sendPrivateMessage(userId, content)</h3><ul><li><strong>userId:</strong> <code>string</code> \u5BF9\u65B9 ID</li><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7684\u5185\u5BB9</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;string&gt;</code> \u53D1\u9001\u7684\u6D88\u606F ID</li></ul><p>\u5411\u7279\u5B9A\u7528\u6237\u53D1\u9001\u79C1\u804A\u6D88\u606F\u3002</p><h3 id="bot-getmessage-channelid-messageid" tabindex="-1"><a class="header-anchor" href="#bot-getmessage-channelid-messageid" aria-hidden="true">#</a> bot.getMessage(channelId, messageId)</h3><ul><li><strong>channelId:</strong> <code>string</code> \u9891\u9053 ID</li><li><strong>messageId:</strong> <code>string</code> \u6D88\u606F ID</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;MessageInfo&gt;</code></li></ul><p>\u83B7\u53D6\u7279\u5B9A\u6D88\u606F\u3002</p>',16),D=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"MessageInfo"),e("span",{style:{color:"#F8F8F2"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  messageId"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  subtype"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E6DB74"}},"'private'"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#E6DB74"}},"'group'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  content"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  timestamp"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"number")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  author"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"AuthorInfo")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"})])],-1),E=n('<h3 id="bot-deletemessage-channelid-messageid" tabindex="-1"><a class="header-anchor" href="#bot-deletemessage-channelid-messageid" aria-hidden="true">#</a> bot.deleteMessage(channelId, messageId)</h3><ul><li><strong>channelId:</strong> <code>string</code> \u9891\u9053 ID</li><li><strong>messageId:</strong> <code>string</code> \u6D88\u606F ID</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u64A4\u56DE\u7279\u5B9A\u6D88\u606F\u3002</p><h3 id="bot-editmessage-channelid-messageid-content" tabindex="-1"><a class="header-anchor" href="#bot-editmessage-channelid-messageid-content" aria-hidden="true">#</a> bot.editMessage(channelId, messageId, content)</h3><ul><li><strong>channelId:</strong> <code>string</code> \u9891\u9053 ID</li><li><strong>messageId:</strong> <code>string</code> \u6D88\u606F ID</li><li><strong>content:</strong> <code>string</code> \u8981\u53D1\u9001\u7684\u5185\u5BB9</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u4FEE\u6539\u7279\u5B9A\u6D88\u606F\u3002</p>',6),v={id:"bot-broadcast-channels-content-delay",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#bot-broadcast-channels-content-delay","aria-hidden":"true"},"#",-1),k=s(" bot.broadcast(channels, content, delay?) "),B=e("li",null,[e("strong",null,"channels:"),s(),e("code",null,"string[]"),s(" \u9891\u9053\u5217\u8868")],-1),A=e("li",null,[e("strong",null,"content:"),s(),e("code",null,"string"),s(" \u8981\u53D1\u9001\u7684\u5185\u5BB9")],-1),M=e("strong",null,"delay:",-1),G=s(),R=e("code",null,"number",-1),N=s(" \u53D1\u9001\u6D88\u606F\u95F4\u7684\u5EF6\u8FDF\uFF0C\u9ED8\u8BA4\u503C\u4E3A "),q=e("code",null,"app.options.delay.broadcast",-1),S=e("li",null,[s("\u8FD4\u56DE\u503C: "),e("code",null,"Promise<string[]>"),s(" \u6210\u529F\u53D1\u9001\u7684\u6D88\u606F ID \u5217\u8868")],-1),L=e("p",null,"\u5411\u591A\u4E2A\u9891\u9053\u5E7F\u64AD\u6D88\u606F\u3002\u5982\u6709\u5931\u8D25\u4E0D\u4F1A\u629B\u51FA\u9519\u8BEF\u3002",-1),C=e("h2",{id:"\u83B7\u53D6\u6570\u636E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u83B7\u53D6\u6570\u636E","aria-hidden":"true"},"#"),s(" \u83B7\u53D6\u6570\u636E")],-1),O=e("h3",{id:"bot-getself",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bot-getself","aria-hidden":"true"},"#"),s(" bot.getSelf()")],-1),U=e("ul",null,[e("li",null,[s("\u8FD4\u56DE\u503C: "),e("code",null,"Promise<UserInfo>"),s(" \u7528\u6237\u4FE1\u606F")])],-1),V=e("p",null,"\u83B7\u53D6\u673A\u5668\u4EBA\u81EA\u5DF1\u7684\u4FE1\u606F\u3002",-1),w=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"UserInfo"),e("span",{style:{color:"#F8F8F2"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  userId"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  username"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  avatar"),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"})])],-1),T=n('<h3 id="bot-getuser-userid" tabindex="-1"><a class="header-anchor" href="#bot-getuser-userid" aria-hidden="true">#</a> bot.getUser(userId)</h3><ul><li><strong>userId:</strong> <code>string</code> \u76EE\u6807\u7528\u6237 ID</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;UserInfo&gt;</code> \u7528\u6237\u4FE1\u606F</li></ul><p>\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u3002</p><h3 id="bot-getfriendlist" tabindex="-1"><a class="header-anchor" href="#bot-getfriendlist" aria-hidden="true">#</a> bot.getFriendList()</h3><ul><li>\u8FD4\u56DE\u503C: <code>Promise&lt;UserInfo[]&gt;</code> \u597D\u53CB\u5217\u8868</li></ul><p>\u83B7\u53D6\u673A\u5668\u4EBA\u7684\u597D\u53CB\u5217\u8868\u3002</p><h3 id="bot-getgroup-groupid" tabindex="-1"><a class="header-anchor" href="#bot-getgroup-groupid" aria-hidden="true">#</a> bot.getGroup(groupId)</h3><ul><li><strong>groupId:</strong> <code>string</code> \u76EE\u6807\u7FA4 ID</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;GroupInfo&gt;</code> \u7FA4\u7EC4\u4FE1\u606F</li></ul><p>\u83B7\u53D6\u7FA4\u7EC4\u4FE1\u606F\u3002</p>',9),j=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"GroupInfo"),e("span",{style:{color:"#F8F8F2"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  groupId"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  groupName"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"})])],-1),K=n('<h3 id="bot-getgrouplist" tabindex="-1"><a class="header-anchor" href="#bot-getgrouplist" aria-hidden="true">#</a> bot.getGroupList()</h3><ul><li>\u8FD4\u56DE\u503C: <code>Promise&lt;GroupInfo[]&gt;</code> \u7FA4\u7EC4\u5217\u8868</li></ul><p>\u83B7\u53D6\u673A\u5668\u4EBA\u52A0\u5165\u7684\u7FA4\u7EC4\u5217\u8868\u3002</p><h3 id="bot-getgroupmember-groupid-userid" tabindex="-1"><a class="header-anchor" href="#bot-getgroupmember-groupid-userid" aria-hidden="true">#</a> bot.getGroupMember(groupId, userId)</h3><ul><li><strong>groupId:</strong> <code>string</code> \u76EE\u6807\u7FA4 ID</li><li><strong>userId:</strong> <code>string</code> \u76EE\u6807\u7528\u6237 ID</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;GroupMemberInfo&gt;</code> \u7FA4\u6210\u5458\u4FE1\u606F</li></ul><p>\u83B7\u53D6\u7FA4\u6210\u5458\u4FE1\u606F\u3002</p>',6),z=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"GroupMemberInfo"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"extends"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","font-style":"italic","text-decoration":"underline"}},"UserInfo"),e("span",{style:{color:"#F8F8F2"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  nickname"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"})])],-1),H=e("h3",{id:"bot-getgroupmemberlist-groupid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bot-getgroupmemberlist-groupid","aria-hidden":"true"},"#"),s(" bot.getGroupMemberList(groupId)")],-1),J=e("ul",null,[e("li",null,[e("strong",null,"groupId:"),s(),e("code",null,"string"),s(" \u76EE\u6807\u7FA4 ID")]),e("li",null,[s("\u8FD4\u56DE\u503C: "),e("code",null,"Promise<GroupMemberInfo[]>"),s(" \u7FA4\u6210\u5458\u5217\u8868")])],-1),Q=e("p",null,"\u83B7\u53D6\u7FA4\u6210\u5458\u5217\u8868\u3002",-1),W={id:"bot-getgroupmembermap-groupid",tabindex:"-1"},X=e("a",{class:"header-anchor",href:"#bot-getgroupmembermap-groupid","aria-hidden":"true"},"#",-1),Y=s(" bot.getGroupMemberMap(groupId) "),Z=n('<ul><li><strong>groupId:</strong> <code>string</code> \u76EE\u6807\u7FA4 ID</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;Record&lt;string, string&gt;&gt;</code> \u7FA4\u6210\u5458\u6635\u79F0\u7684\u952E\u503C\u5BF9</li></ul><p>\u83B7\u53D6\u7FA4\u6210\u5458\u5217\u8868\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7528\u6237 ID \u5230\u6635\u79F0\u7684\u952E\u503C\u5BF9\uFF0C\u82E5\u65E0 nickname \u5219\u4F7F\u7528 username\u3002</p><h3 id="bot-getchannel-channelid" tabindex="-1"><a class="header-anchor" href="#bot-getchannel-channelid" aria-hidden="true">#</a> bot.getChannel(channelId)</h3><ul><li><strong>channelId:</strong> <code>string</code> \u76EE\u6807\u9891\u9053 ID</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;ChannelInfo&gt;</code> \u9891\u9053\u4FE1\u606F</li></ul><p>\u83B7\u53D6\u9891\u9053\u4FE1\u606F\u3002</p>',5),$=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"ChannelInfo"),e("span",{style:{color:"#F8F8F2"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  channelId"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  channelName"),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"string")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"})])],-1),ee=n('<h3 id="bot-getchannellist-groupid" tabindex="-1"><a class="header-anchor" href="#bot-getchannellist-groupid" aria-hidden="true">#</a> bot.getChannelList(groupId)</h3><ul><li><strong>groupId:</strong> <code>string</code> \u76EE\u6807\u7FA4 ID</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;ChannelInfo[]&gt;</code> \u9891\u9053\u5217\u8868</li></ul><p>\u83B7\u53D6\u67D0\u4E2A\u7FA4\u7EC4\u7684\u9891\u9053\u5217\u8868\u3002</p><h2 id="\u5904\u7406\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u8BF7\u6C42" aria-hidden="true">#</a> \u5904\u7406\u8BF7\u6C42</h2><h3 id="bot-handlefriendrequest-messageid-approve-comment" tabindex="-1"><a class="header-anchor" href="#bot-handlefriendrequest-messageid-approve-comment" aria-hidden="true">#</a> bot.handleFriendRequest(messageId, approve, comment?)</h3><ul><li><strong>messageId:</strong> <code>string</code> \u8BF7\u6C42 ID</li><li><strong>approve:</strong> <code>boolean</code> \u662F\u5426\u901A\u8FC7\u8BF7\u6C42</li><li><strong>comment:</strong> <code>string</code> \u5907\u6CE8\u4FE1\u606F</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u5904\u7406\u597D\u53CB\u8BF7\u6C42\u3002</p><h3 id="bot-handlegrouprequest-messageid-approve-comment" tabindex="-1"><a class="header-anchor" href="#bot-handlegrouprequest-messageid-approve-comment" aria-hidden="true">#</a> bot.handleGroupRequest(messageId, approve, comment?)</h3><ul><li><strong>messageId:</strong> <code>string</code> \u8BF7\u6C42 ID</li><li><strong>approve:</strong> <code>boolean</code> \u662F\u5426\u901A\u8FC7\u8BF7\u6C42</li><li><strong>comment:</strong> <code>string</code> \u5907\u6CE8\u4FE1\u606F</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u5904\u7406\u6765\u81EA\u7FA4\u7EC4\u7684\u9080\u8BF7\u3002</p><h3 id="bot-handlegroupmemberrequest-messageid-approve-comment" tabindex="-1"><a class="header-anchor" href="#bot-handlegroupmemberrequest-messageid-approve-comment" aria-hidden="true">#</a> bot.handleGroupMemberRequest(messageId, approve, comment?)</h3><ul><li><strong>messageId:</strong> <code>string</code> \u8BF7\u6C42 ID</li><li><strong>approve:</strong> <code>boolean</code> \u662F\u5426\u901A\u8FC7\u8BF7\u6C42</li><li><strong>comment:</strong> <code>string</code> \u5907\u6CE8\u4FE1\u606F</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;void&gt;</code></li></ul><p>\u5904\u7406\u52A0\u7FA4\u8BF7\u6C42\u3002</p><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><h3 id="bot-getstatus" tabindex="-1"><a class="header-anchor" href="#bot-getstatus" aria-hidden="true">#</a> bot.getStatus()</h3><ul><li>\u8FD4\u56DE\u503C: <code>Promise&lt;BotStatus&gt;</code></li></ul><p>\u83B7\u53D6\u5F53\u524D\u8FD0\u884C\u72B6\u6001\u3002</p>',17),se=e("pre",{class:"shiki",style:{"background-color":"#272822"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F92672"}},"export"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF","font-style":"italic"}},"enum"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Status"),e("span",{style:{color:"#F8F8F2"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#88846F"}},"/** \u6B63\u5E38\u8FD0\u884C */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  GOOD,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#88846F"}},"/** \u673A\u5668\u4EBA\u5904\u4E8E\u95F2\u7F6E\u72B6\u6001 */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  BOT_IDLE,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#88846F"}},"/** \u673A\u5668\u4EBA\u79BB\u7EBF */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  BOT_OFFLINE,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#88846F"}},"/** \u65E0\u6CD5\u83B7\u5F97\u72B6\u6001 */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  NET_ERROR,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#88846F"}},"/** \u670D\u52A1\u5668\u72B6\u6001\u5F02\u5E38 */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  SERVER_ERROR,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#88846F"}},"/** \u673A\u5668\u4EBA\u88AB\u5C01\u7981 */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  BANNED,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"})])],-1),oe={id:"bot-createsession-session",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#bot-createsession-session","aria-hidden":"true"},"#",-1),ne=s(" bot.createSession(session) "),le=e("ul",null,[e("li",null,[e("strong",null,"session:"),s(),e("code",null,"Partial<Session>"),s(" \u4F1A\u8BDD\u6570\u636E")]),e("li",null,[s("\u8FD4\u56DE\u503C: "),e("code",null,"Session"),s(" \u65B0\u4F1A\u8BDD")])],-1),ae=e("p",null,[s("\u521B\u5EFA\u4E00\u4E2A send \u7C7B\u578B\u7684\u4F1A\u8BDD\uFF0C\u4F9B "),e("code",null,"bot.sendMessage()"),s(" \u7B49 API \u4F7F\u7528\u3002")],-1);function re(ie,ce){const a=r("Badge"),i=r("RouterLink"),l=r("panel-view");return h(),d(p,null,[g,u,e("p",null,[y,o(a,{text:"\u5185\u7F6E",vertical:"baseline"}),b]),m,e("p",null,[_,o(i,{to:"/api/app.html"},{default:t(()=>[f]),_:1}),I]),x,o(l,{class:"code",title:"",style:{}},{default:t(()=>[D]),_:1}),E,e("h3",v,[P,k,o(a,{text:"\u5185\u7F6E"})]),e("ul",null,[B,A,e("li",null,[M,G,R,N,o(i,{to:"/api/app.html#options-delay"},{default:t(()=>[q]),_:1})]),S]),L,C,O,U,V,o(l,{class:"code",title:"",style:{}},{default:t(()=>[w]),_:1}),T,o(l,{class:"code",title:"",style:{}},{default:t(()=>[j]),_:1}),K,o(l,{class:"code",title:"",style:{}},{default:t(()=>[z]),_:1}),H,J,Q,e("h3",W,[X,Y,o(a,{text:"\u5185\u7F6E"})]),Z,o(l,{class:"code",title:"",style:{}},{default:t(()=>[$]),_:1}),ee,o(l,{class:"code",title:"",style:{}},{default:t(()=>[se]),_:1}),e("h3",oe,[te,ne,o(a,{text:"\u5185\u7F6E"})]),le,ae],64)}var pe=c(F,[["render",re]]);export{pe as default};
