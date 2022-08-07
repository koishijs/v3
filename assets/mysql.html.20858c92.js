import{_ as o,r as a,c as l,b as e,a as i,F as d,d as s,e as n,o as r}from"./app.9e111ae1.js";const c={},h=e("h1",{id:"koishi-database-mysql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#koishi-database-mysql","aria-hidden":"true"},"#"),s(" koishi-database-mysql")],-1),u={class:"custom-container danger"},b=e("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),g=s("\u8FD9\u91CC\u662F"),m=e("strong",null,"\u6B63\u5728\u65BD\u5DE5",-1),y=s("\u7684 koishi v3 \u7684\u6587\u6863\u3002\u8981\u67E5\u770B v1 \u7248\u672C\u7684\u6587\u6863\uFF0C\u8BF7\u524D\u5F80"),_={href:"/v1/",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"\u8FD9\u91CC",-1),q=s("\u3002"),f=n('<div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u672C\u9875\u663E\u793A\u7684\u7248\u672C\u53F7\u90FD\u8868\u793A\u5BF9\u5E94\u7684 koishi-database-mysql \u7248\u672C\u53F7\uFF08\u800C\u4E0D\u662F\u5BF9\u5E94\u7684 koishi \u7248\u672C\u53F7\uFF09\u3002</p><p>\u6240\u6709\u529F\u80FD\u5B9E\u73B0\u5747\u5BF9\u5E94\u4E8E MySQL v5.7\u3002</p></div><h2 id="db-mysql-joinkeys-keys" tabindex="-1"><a class="header-anchor" href="#db-mysql-joinkeys-keys" aria-hidden="true">#</a> db.mysql.joinKeys(keys?)</h2><ul><li><strong>keys:</strong> <code>string[]</code> \u8981\u8FDE\u63A5\u7684\u5B57\u6BB5</li><li>\u8FD4\u56DE\u503C: <code>string</code> \u8FDE\u63A5\u540E\u7684\u7ED3\u679C</li></ul><p>\u8FDE\u63A5\u5B57\u6BB5\u6210\u5B57\u7B26\u4E32\u3002</p><h2 id="db-mysql-query-sql-values" tabindex="-1"><a class="header-anchor" href="#db-mysql-query-sql-values" aria-hidden="true">#</a> db.mysql.query(sql, values?)</h2><ul><li><strong>sql:</strong> <code>string</code> SQL \u5B57\u7B26\u4E32</li><li><strong>value:</strong> <code>any</code> \u8981\u63D2\u5165\u7684\u503C</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;any&gt;</code> \u8BF7\u6C42\u7ED3\u679C</li></ul><p>\u53D1\u9001 SQL \u8BF7\u6C42\u3002</p><h2 id="db-mysql-select-table-fields-conditional-values" tabindex="-1"><a class="header-anchor" href="#db-mysql-select-table-fields-conditional-values" aria-hidden="true">#</a> db.mysql.select(table, fields?, conditional?, values?)</h2><ul><li><strong>table:</strong> <code>string</code> \u8868\u540D</li><li><strong>fields:</strong> <code>string[]</code> \u5B57\u6BB5\u5217\u8868</li><li><strong>conditional:</strong> <code>string</code> SQL \u6761\u4EF6\u8BED\u53E5</li><li><strong>values:</strong> <code>any</code> \u8981\u63D2\u5165\u7684\u503C</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;any&gt;</code></li></ul><p>\u641C\u7D22\u8868\u4E2D\u7684\u6570\u636E\u3002</p><h2 id="db-mysql-update-table-id-data" tabindex="-1"><a class="header-anchor" href="#db-mysql-update-table-id-data" aria-hidden="true">#</a> db.mysql.update(table, id, data)</h2><ul><li><strong>table:</strong> <code>string</code> \u8868\u540D</li><li><strong>id:</strong> <code>number</code> \u884C\u53F7</li><li><strong>data:</strong> <code>any</code> \u8981\u66F4\u65B0\u7684\u6570\u636E</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;any&gt;</code></li></ul><p>\u66F4\u65B0\u8868\u4E2D\u7684\u67D0\u884C\u3002</p><h2 id="db-mysql-count-table" tabindex="-1"><a class="header-anchor" href="#db-mysql-count-table" aria-hidden="true">#</a> db.mysql.count(table)</h2><ul><li><strong>table:</strong> <code>string</code> \u8868\u540D</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;number&gt;</code> \u8868\u4E2D\u7684\u884C\u6570</li></ul><p>\u8BA1\u7B97\u8868\u4E2D\u7684\u884C\u6570\u3002</p>',16);function k(v,x){const t=a("OutboundLink");return r(),l(d,null,[h,e("div",u,[b,e("p",null,[g,m,y,e("a",_,[p,i(t)]),q])]),f],64)}var S=o(c,[["render",k]]);export{S as default};
