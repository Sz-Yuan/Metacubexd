import{s as Le,a as ke,m as _e,t as D,i as p,c as l,S as T,b as I,d as b,e as G,f as ie,g as M,h as Me,j as m,k as u,l as Ie,n as Ne,r as qe,o as Ue,p as H,u as ce,q as z,v as je,w as F,x as de,y as Ae,z as ze,A as R,B as Fe,I as Re,C as J,F as W,D as O,E as Be,G as Ge,H as He,J as Oe,K as We,L as Xe,M as Ve,N as Ze,O as Je,P as Ee,Q as Qe,R as Ke,T as Ye,U as P,V as et,W as tt,X as N,Y as st,Z as at,_ as nt,$ as ot,a0 as rt}from"./vendor-97ea48b2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const lt="modulepreload",it=function(e,t){return new URL(e,t).href},Q={},q=function(t,o,s){if(!o||o.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=it(n,s),n in Q)return;Q[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(!!s)for(let g=a.length-1;g>=0;g--){const h=a[g];if(h.href===n&&(!r||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${i}`))return;const d=document.createElement("link");if(d.rel=r?"stylesheet":lt,r||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),r)return new Promise((g,h)=>{d.addEventListener("load",g),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t()).catch(n=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n})},ct=b('<div class="loading loading-spinner">'),dt=b('<button><span class="truncate rounded-none">'),ue=e=>{const[t,o]=Le(e,["class","loading","icon"]);return(()=>{const s=dt(),a=s.firstChild;return ke(s,_e({get class(){return D("btn flex items-center",t.loading?"btn-disabled":t.class)}},o),!1,!0),p(s,l(T,{get when(){return t.loading},get children(){return ct()}}),a),p(a,()=>e.icon||e.children),I(()=>a.classList.toggle("flex-1",!t.icon)),s})()},ut=b('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),As=e=>{const{title:t,onCollapse:o}=e,s=()=>{const n="collapse-open",r="collapse-close";return e.isOpen?n:r},a=()=>{const n="opacity-100",r="opacity-0";return e.isOpen?n:r};return(()=>{const n=ut(),r=n.firstChild,i=r.nextSibling;return r.$$click=()=>o(!e.isOpen),p(r,t),p(i,l(T,{get when(){return e.isOpen},get children(){return ie(()=>e.children)()}})),I(c=>{const d=D(s(),"collapse collapse-arrow select-none border-secondary bg-base-200 shadow-md"),g=D(a(),"collapse-content grid grid-cols-2 gap-2 transition-opacity duration-1000 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5");return d!==c._v$&&M(n,c._v$=d),g!==c._v$2&&M(i,c._v$2=g),c},{_v$:void 0,_v$2:void 0}),n})()};G(["click"]);const pt=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"];var v=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e.Setup="/setup",e))(v||{});const gt=10,zs={title:{align:"center",style:{color:"gray",fontSize:"16px"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{showForSingleSeries:!0,fontSize:"16px",labels:{colors:"gray"},itemMargin:{horizontal:32}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:gt,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray",fontSize:"13px"},formatter:e=>Me(e).toString()}}};var E=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(E||{}),pe=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=800]="MEDIUM",e[e.HIGH=1500]="HIGH",e))(pe||{}),ge=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(ge||{}),L=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(L||{}),B=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(B||{}),me=(e=>(e.Details="details",e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.SniffHost="sniffHost",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.ConnectTime="connectTime",e.SourceIP="sourceIP",e.SourcePort="sourcePort",e.Destination="destination",e))(me||{});const K=200,fe=Object.values(me),mt={...Object.fromEntries(fe.map(e=>[e,!0])),ID:!1};var k=(e=>(e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e))(k||{}),ft=(e=>(e.Global="global",e.Rule="rule",e.Direct="direct",e))(ft||{}),he=(e=>(e.Info="info",e.Error="error",e.Warning="warning",e.Debug="debug",e.Silent="silent",e))(he||{});const ht=[200,300,500,800,1e3],yt=ht[0],vt={add:"Add",overview:"Overview",proxies:"Proxies",proxiesSettings:"Proxies Settings",rules:"Rules",connections:"Connections",connectionsSettings:"Connections Settings",connectionsDetails:"Connections Details",logs:"Logs",logsSettings:"Logs Settings",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",sniffHost:"Sniff Host",chains:"Chains",connectTime:"Time",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",sourceIP:"Source IP",sourcePort:"Source Port",destination:"Destination",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForLatencyTest:"URL for latency test",autoCloseConns:"Automatically Close connections",useTwemoji:"Use Twemoji Mozilla Font",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms",updated:"Updated",tableSize:"Table size",logLevel:"Log Level",info:"info",silent:"silent",debug:"debug",warning:"warning",error:"error",logMaxRows:"Log Maximum Reserved Rows",xs:"Extra small size",sm:"Small size",md:"Normal size",lg:"Large size",switchEndpoint:"Switch Endpoint",switchLanguage:"Switch Language",latencyTestTimeoutDuration:"Latency Test Timeout Duration",all:"All",sequence:"Sequence",payload:"Payload",details:"Details",endpointURL:"Endpoint URL",secret:"Secret",global:"Global",rule:"Rule",direct:"Direct",active:"Active",closed:"Closed",sort:"Sort",hideUnAvailableProxies:"Hide UnAvailable Proxies",reloadConfig:"Reload Config",flushFakeIP:"Flush Fake-IP",tagClientSourceIPWithName:"Tag Client Source IP With Name",tag:"Tag",coreConfig:"Core Config",xdConfig:"XD Config",version:"Version",expire:"Expire",noExpire:"Null",enableTunDevice:"Enable TUN Device",tunModeStack:"TUN Mode Stack",tunDeviceName:"TUN Device Name",interfaceName:"Interface Name",en:"English",zh:"Chinese",port:"{{ name }} Port"},bt={add:"添加",overview:"概览",proxies:"代理",proxiesSettings:"代理设置",rules:"规则",connections:"连接",connectionsSettings:"连接设置",connectionsDetails:"连接详情",logs:"日志",logsSettings:"日志设置",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",sniffHost:"嗅探域名",chains:"链路",connectTime:"连接时间",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",sourceIP:"源地址",sourcePort:"源端口",destination:"目标地址",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForLatencyTest:"测速链接",autoCloseConns:"自动断开连接",useTwemoji:"使用 Twemoji Mozilla 字体",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"双列渲染",updateGEODatabases:"更新 GEO 数据库",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒",updated:"更新于",tableSize:"表格大小",logLevel:"日志等级",info:"信息",silent:"静默",debug:"调试",warning:"警告",error:"错误",logMaxRows:"日志最大保留行数",xs:"超小尺寸",sm:"小尺寸",md:"正常尺寸",lg:"超大尺寸",switchEndpoint:"切换后端",switchLanguage:"切换语言",latencyTestTimeoutDuration:"测速超时时间",all:"全部",sequence:"序列号",payload:"内容",details:"详情",endpointURL:"后端地址",secret:"密钥",global:"全局",rule:"规则",direct:"直连",active:"活动",closed:"已关闭",sort:"排序",hideUnAvailableProxies:"隐藏不可用节点",reloadConfig:"重载配置",flushFakeIP:"清空 Fake-IP",tagClientSourceIPWithName:"为客户端源 IP 地址添加名称标记",tag:"标记",coreConfig:"核心配置",xdConfig:"XD 配置",version:"版本",expire:"到期时间",noExpire:"不限时",enableTunDevice:"开启 TUN 转发",tunModeStack:"TUN 模式堆栈",tunDeviceName:"TUN 设备名称",interfaceName:"接口名称",en:"英文",zh:"中文",port:"{{ name }} 端口"},ye={[B.EN]:vt,[B.ZH]:bt},[xt,Fs]=m(u(Reflect.has(ye,navigator.language)?navigator.language:B.EN),{name:"lang",storage:localStorage}),[wt,Ct]=Ie(e=>[Ne(()=>Ue(ye[e.locale]),qe)]),ve=()=>Ct(),[Rs,Bs]=m(u(ge.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Gs,Hs]=m(u(L.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[Os,Ws]=m(u(!1),{name:"hideUnAvailableProxies",storage:localStorage}),[X,Xs]=m(u("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[Pt,Vs]=m(u(!1),{name:"autoCloseConns",storage:localStorage}),[$t,Zs]=m(u(!0),{name:"useTwemoji",storage:localStorage}),[Dt,Js]=m(u(!1),{name:"autoSwitchTheme",storage:localStorage}),[Tt,Es]=m(u("lofi"),{name:"favDayTheme",storage:localStorage}),[St,Qs]=m(u("business"),{name:"favNightTheme",storage:localStorage}),[Ks,Ys]=m(u(k.XS),{name:"connectionsTableSize",storage:localStorage}),[ea,ta]=m(u(mt),{name:"connectionsTableColumnVisibility",storage:localStorage}),[sa,aa]=m(u(fe),{name:"connectionsTableColumnOrder",storage:localStorage}),[na,oa]=m(u([]),{name:"clientSourceIPTags",storage:localStorage}),[ra,la]=m(u(k.XS),{name:"logsTableSize",storage:localStorage}),[ia,ca]=m(u(he.Info),{name:"logLevel",storage:localStorage}),[da,ua]=m(u(yt),{name:"logMaxRows",storage:localStorage}),pa=e=>{let t="table-xs";switch(e){case k.XS:t="table-xs";break;case k.SM:t="table-sm";break;case k.MD:t="table-md";break;case k.LG:t="table-lg";break}return t},[Y,ga]=m(u(5e3),{name:"latencyTestTimeoutDuration",storage:localStorage}),Lt=()=>X().startsWith("https"),$=()=>Lt()?pe:E,[kt,be]=u([]),[xe,_t]=u(null),ma=()=>{const[e,t]=u([]),[o,s]=u([]),[a,n]=u(!1);return H(()=>{var i;const r=(i=xe())==null?void 0:i.connections;r&&ce(()=>{const c=we(r,o());if(Mt(o()),!a()){const d=It(c,kt());s(c),t(d.slice(-K))}be(d=>d.slice(-(c.length+K)))})}),{closedConnections:e,activeConnections:o,paused:a,setPaused:n}},we=(e,t)=>{const o=new Map;return t.forEach(s=>o.set(s.id,s)),e.map(s=>{const a=o.get(s.id);return!a||!z.isNumber(a.download)||!z.isNumber(a.upload)?{...s,downloadSpeed:0,uploadSpeed:0}:{...s,downloadSpeed:s.download-a.download,uploadSpeed:s.upload-a.upload}})},Mt=e=>{be(t=>z.unionWith(t,e,(o,s)=>o.id===s.id))},It=(e,t)=>z.differenceWith(t,e,(o,s)=>o.id===s.id),fa=()=>f().delete("connections"),Nt=e=>f().delete(`connections/${e}`),[ha,ee]=u(!1),[ya,te]=u(!1),[va,se]=u(!1),[ba,ae]=u(!1),[xa,ne]=u(!1),wa=async()=>{const e=f();ee(!0);try{await e.put("configs",{searchParams:{force:!0},json:{path:"",payload:""}})}catch{}ee(!1)},Ca=async()=>{const e=f();se(!0);try{await e.post("cache/fakeip/flush")}catch{}se(!1)},Pa=async()=>{const e=f();te(!0);try{await e.post("configs/geo")}catch{}te(!1)},$a=async()=>{const e=f();ae(!0);try{await e.post("upgrade")}catch{}ae(!1)},Da=async()=>{const e=f();ne(!0);try{await e.post("restart")}catch{}ne(!1)},Ta=()=>f().get("configs").json(),Sa=async(e,t,o)=>{try{await f().patch("configs",{json:{[e]:t}}).json(),await o()}catch(s){je.error(s.message)}},La=async()=>{const e=f(),{version:t}=await e.get("version").json();return t},qt=()=>f().get("providers/proxies").json(),Ut=()=>f().get("proxies").json(),oe=e=>f().put(`providers/proxies/${e}`),Ce=e=>f().get(`providers/proxies/${e}/healthcheck`,{timeout:5*1e3}).json(),jt=(e,t)=>f().put(`proxies/${e}`,{body:JSON.stringify({name:t})}),At=(e,t,o,s)=>{const a=f();return t!==""?Ce(t).then(n=>({delay:n[e]})):a.get(`proxies/${e}/delay`,{searchParams:{url:o,timeout:s}}).json()},zt=(e,t,o)=>f().get(`group/${e}/delay`,{searchParams:{url:t,timeout:o}}).json(),ka=()=>f().get("rules").json(),_a=()=>f().get("providers/rules").json(),Ma=e=>f().put(`providers/rules/${e}`),Ia=async e=>{const t=/(alpha|beta|meta)-?(\w+)/.exec(e);if(!t)return!1;const o=t[1],s=t[2];if(o==="meta"){const{assets:a}=await F.get("https://api.github.com/repos/MetaCubeX/Clash.Meta/releases/latest").json();return!a.some(({name:r})=>r.includes(s))}if(o==="alpha"){const{assets:a}=await F.get("https://api.github.com/repos/MetaCubeX/Clash.Meta/releases/tags/Prerelease-Alpha").json();return!a.some(({name:r})=>r.includes(s))}return!1},Na=e=>e.includes("sing-box"),qa=e=>/^https?/.test(e)?e:`${window.location.protocol}//${e}`,A=()=>{const[e,t]=u({}),o=(a,n)=>{t({...e(),[a]:n})};return{map:e,set:o,setWithCallback:async(a,n)=>{o(a,!0);try{await n()}catch{}o(a,!1)}}},Ft=(e="")=>{const t=e.toLowerCase();return t.includes("shadowsocks")?t.replace("shadowsocks","ss"):t==="hysteria"?"hy":t==="wireguard"?"wg":t},Rt=(e="")=>{const t=e.toLowerCase();return!["selector","direct","reject","urltest","loadbalance","fallback","relay"].includes(t)},Ua=(e,t,o)=>o===L.NATURAL?e:e.sort((s,a)=>{const n=t[s],r=t[a];switch(o){case L.LATENCY_ASC:return n===$().NOT_CONNECTED?1:r===$().NOT_CONNECTED?-1:n-r;case L.LATENCY_DESC:return n===$().NOT_CONNECTED?1:r===$().NOT_CONNECTED?-1:r-n;case L.NAME_ASC:return s.localeCompare(a);case L.NAME_DESC:return a.localeCompare(s);default:return 0}}),ja=(e,t,o)=>o?e.filter(s=>t[s]!==$().NOT_CONNECTED):e,{map:Bt,set:Gt}=A(),{map:Ht,setWithCallback:Ot}=A(),{map:Wt,setWithCallback:Xt}=A(),{map:Vt,setWithCallback:Zt}=A(),{map:Jt,setWithCallback:Et}=A(),[Qt,re]=u(!1),[Kt,Yt]=u([]),[le,es]=u([]),[Pe,V]=u({}),[$e,ts]=u({}),ss=e=>{const t={...$e()},o={...Pe()};e.forEach(s=>{var h;const{udp:a,xudp:n,type:r,now:i,name:c,provider:d=""}=s,g=((h=s.history.at(-1))==null?void 0:h.delay)||$().NOT_CONNECTED;t[s.name]={udp:a,xudp:n,type:r,now:i,name:c,provider:d},o[s.name]=g}),de(()=>{ts(t),V(o)})},Z=()=>{const e=async()=>{const[{providers:i},{proxies:c}]=await Promise.all([qt(),Ut()]),d=[...c.GLOBAL.all??[],"GLOBAL"],g=Object.values(c).filter(y=>{var x;return(x=y.all)==null?void 0:x.length}).sort((y,x)=>d.indexOf(y.name)-d.indexOf(x.name)),h=Object.values(i).filter(y=>y.name!=="default"&&y.vehicleType!=="Compatible"),S=[...Object.values(c),...h.flatMap(y=>y.proxies.filter(x=>!(x.name in c)).map(x=>({...x,provider:y.name})))];de(()=>{Yt(g),es(h),ss(S)})};return{collapsedMap:Bt,setCollapsedMap:Gt,proxyLatencyTestingMap:Ht,proxyGroupLatencyTestingMap:Wt,proxyProviderLatencyTestingMap:Vt,updatingMap:Jt,isAllProviderUpdating:Qt,proxies:Kt,proxyProviders:le,proxyLatencyTest:(i,c)=>Ot(i,async()=>{const{delay:d}=await At(i,c,X(),Y());V(g=>({...g,[i]:d}))}),proxyGroupLatencyTest:i=>Xt(i,async()=>{const c=await zt(i,X(),Y());V(d=>({...d,...c})),await e()}),latencyMap:Pe,proxyNodeMap:$e,fetchProxies:e,selectProxyInGroup:async(i,c)=>{await jt(i.name,c),await e(),Pt()&&ce(()=>{var g;const d=we(((g=xe())==null?void 0:g.connections)??[],[]);d.length>0&&d.forEach(({id:h,chains:S})=>{S.includes(i.name)&&Nt(h)})})},updateProviderByProviderName:i=>Et(i,async()=>{try{await oe(i)}catch{}await e()}),updateAllProvider:async()=>{re(!0);try{await Promise.allSettled(le().map(i=>oe(i.name))),await e()}finally{re(!1)}},proxyProviderLatencyTest:i=>Zt(i,async()=>{await Ce(i),await e()})}},[as,Aa]=m(u(""),{name:"selectedEndpoint",storage:localStorage}),[ns,za]=m(u([]),{name:"endpointList",storage:localStorage}),f=()=>{const e=_();if(!e)return F.create({});const t=new Headers;return e.secret&&t.set("Authorization",`Bearer ${e.secret}`),F.create({prefixUrl:e.url,headers:t})},_=()=>ns().find(({id:e})=>e===as()),os=()=>{var e;return(e=_())==null?void 0:e.secret},rs=()=>{var e;return new URL(((e=_())==null?void 0:e.url)??"").origin.replace("http","ws")},ls=(e,t={})=>{const o=new URLSearchParams(t);o.set("token",os()??"");const s=Ae(`${rs()}/${e}?${o.toString()}`),a=ze(s,"message");return R(()=>{var r;return a()?JSON.parse((r=a())==null?void 0:r.data):null})},[is,De]=m(u("halloween"),{name:"theme",storage:localStorage}),cs=b('<li class="tooltip tooltip-bottom">'),ds=b('<div class="drawer drawer-end w-auto sm:ml-auto"><input id=themes type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=themes class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class=drawer-side><label for=themes class=drawer-overlay></label><ul class="menu rounded-l-box gap-2 bg-base-300 p-2">'),us=b('<li class="btn btn-xs">'),ps=b('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal menu-lg gap-2 p-0">'),gs=b('<ul class="navbar sticky inset-x-0 top-0 z-50 flex w-auto items-center justify-center bg-base-300 px-4 shadow-lg"><div class="navbar-start gap-4"><div class="drawer w-auto lg:hidden"><input id=navs type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=navs class="btn btn-circle drawer-button btn-sm"></label></div><div class=drawer-side><label for=navs class=drawer-overlay></label><ul class="menu rounded-r-box min-h-full w-2/5 gap-2 bg-base-300 pt-20"></ul></div></div></div><div class=navbar-end><div class="flex items-center gap-2">'),ms=b("<li>"),fs=({href:e,tooltip:t,children:o})=>(()=>{const s=cs();return O(s,"data-tip",t),p(s,l(J,{class:"rounded-box",href:e,children:o})),s})(),hs=()=>(()=>{const e=ds(),t=e.firstChild,o=t.nextSibling,s=o.firstChild,a=o.nextSibling,n=a.firstChild,r=n.nextSibling;return p(s,l(Be,{})),p(r,l(W,{each:pt,children:i=>(()=>{const c=us();return c.$$click=()=>De(i),O(c,"data-theme",i),p(c,i),c})()})),e})(),ys=()=>{const[e]=ve(),t=()=>[{href:v.Overview,name:e("overview"),icon:l(Ge,{})},{href:v.Proxies,name:e("proxies"),icon:l(He,{})},{href:v.Rules,name:e("rules"),icon:l(Oe,{})},{href:v.Conns,name:e("connections"),icon:l(We,{})},{href:v.Log,name:e("logs"),icon:l(Xe,{})},{href:v.Config,name:e("config"),icon:l(Ve,{})}],o=Fe(),[s,a]=u(!1);return(()=>{const n=gs(),r=n.firstChild,i=r.firstChild,c=i.firstChild,d=c.nextSibling,g=d.firstChild,h=d.nextSibling,S=h.firstChild,y=S.nextSibling,x=r.nextSibling,w=x.firstChild;return c.addEventListener("change",C=>a(C.target.checked)),p(g,l(Re,{})),p(y,l(W,{get each(){return t()},children:({href:C,name:U})=>(()=>{const j=ms();return j.$$click=()=>a(!1),p(j,l(J,{href:C,children:U})),j})()})),p(r,l(ws,{}),null),p(n,l(T,{get when(){return o.pathname!==v.Setup},get children(){const C=ps(),U=C.firstChild;return p(U,l(W,{get each(){return t()},children:({href:j,name:Te,icon:Se})=>l(fs,{href:j,tooltip:Te,children:Se})})),C}}),x),p(w,l(hs,{})),I(()=>c.checked=s()),n})()};G(["click"]);const vs=b("<span>"),bs=e=>{const[t]=ve(),{latencyMap:o}=Z(),[s,a]=u(""),n=R(()=>o()[e.name]);return H(()=>{a("text-success"),n()>$().HIGH?a("text-error"):n()>$().MEDIUM&&a("text-warning")}),l(T,{get when(){return R(()=>typeof n()=="number")()&&n()!==E.NOT_CONNECTED},get children(){const r=vs();return p(r,n,null),p(r,()=>t("ms"),null),I(()=>M(r,`whitespace-nowrap text-xs ${s()}`)),r}})},xs=b('<div class="text-md flex items-center gap-1 whitespace-nowrap font-bold uppercase sm:text-xl"><span>(</span><a class="text-primary transition-transform hover:rotate-90 hover:scale-125"href=https://github.com/metacubex/metacubexd target=_blank>xd</a><span>)'),ws=()=>(()=>{const e=xs(),t=e.firstChild;return p(e,l(J,{class:"bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent",get href(){return _()?"/":"/setup"},children:"metacube"}),t),e})(),Cs=b('<div class="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur"><div class="flex justify-end gap-2">'),Ps=b('<dialog class="modal modal-bottom sm:modal-middle"><div class="modal-box p-0"><div><div class="flex items-center gap-4 text-xl font-bold"><span></span></div></div><div class=p-4></div></div><form method=dialog class=modal-backdrop><button>'),$s="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur",Fa=e=>{let t;return(()=>{const o=Ps(),s=o.firstChild,a=s.firstChild,n=a.firstChild,r=n.firstChild,i=a.nextSibling;return Ze(c=>{var d;return(t=c)&&((d=e.ref)==null?void 0:d.call(e,c))},o),s.$$contextmenu=c=>c.preventDefault(),p(n,()=>e.icon,r),p(r,()=>e.title),p(a,l(ue,{class:"btn-circle btn-sm",onClick:()=>t==null?void 0:t.close(),get icon(){return l(Je,{size:20})}}),null),p(i,ie(()=>e.children)),p(s,l(T,{get when(){return e.action},get children(){const c=Cs(),d=c.firstChild;return p(d,()=>e.action),c}}),null),I(()=>M(a,D($s,"top-0 justify-between"))),o})()};G(["contextmenu"]);const Ds=b('<div><div class="flex items-center justify-between gap-2"><span class="truncate text-left text-sm"></span></div><div class="flex items-center justify-between gap-1"><div></div><div class=text-xs>'),Ra=e=>{const{proxyLatencyTest:t,proxyLatencyTestingMap:o}=Z(),{proxyName:s,isSelected:a,onClick:n}=e,{proxyNodeMap:r}=Z(),i=R(()=>r()[s]),c=()=>{var d,g,h;return Rt((d=i())==null?void 0:d.type)?(g=i())!=null&&g.xudp?"xudp":(h=i())!=null&&h.udp?"udp":null:null};return(()=>{const d=Ds(),g=d.firstChild,h=g.firstChild,S=g.nextSibling,y=S.firstChild,x=y.nextSibling;return Ee(d,"click",n,!0),O(d,"title",s),p(h,s),p(g,l(ue,{class:"btn-circle btn-ghost h-auto min-h-0 w-auto",get icon(){return l(Qe,{size:20,get class(){return D(o()[s]&&"animate-pulse text-success")}})},onClick:w=>{w.stopPropagation(),t(s,i().provider)}}),null),p(y,()=>{var w;return Ft((w=i())==null?void 0:w.type)},null),p(y,l(T,{get when(){return c()},get children(){return` :: ${c()}`}}),null),p(x,l(bs,{get name(){return e.proxyName}})),I(w=>{const C=D("card card-bordered tooltip-bottom flex flex-col gap-1 border-neutral-focus bg-neutral p-2 text-neutral-content shadow-lg",a&&"border-primary bg-primary-content text-primary",n&&"cursor-pointer"),U=D("truncate text-xs text-slate-500",a&&"text-primary");return C!==w._v$&&M(d,w._v$=C),U!==w._v$2&&M(y,w._v$2=U),w},{_v$:void 0,_v$2:void 0}),d})()};G(["click"]);const Ts=b('<div><div class="flex-1 overflow-y-auto p-2 sm:p-4">'),Ss=N(()=>q(()=>import("./Setup-f10df2af.js"),["./Setup-f10df2af.js","./vendor-97ea48b2.js"],import.meta.url)),Ls=N(()=>q(()=>import("./Overview-54eb4b6a.js"),["./Overview-54eb4b6a.js","./vendor-97ea48b2.js"],import.meta.url)),ks=N(()=>q(()=>import("./Connections-ff91266c.js"),["./Connections-ff91266c.js","./vendor-97ea48b2.js","./index-82fc46c7.js","./ConfigTitle-72f50395.js","./global-9c1eec53.js"],import.meta.url)),_s=N(()=>q(()=>import("./Logs-ab2ad0a6.js"),["./Logs-ab2ad0a6.js","./vendor-97ea48b2.js","./index-82fc46c7.js","./ConfigTitle-72f50395.js"],import.meta.url)),Ms=N(()=>q(()=>import("./Proxies-fe102743.js"),["./Proxies-fe102743.js","./vendor-97ea48b2.js","./global-9c1eec53.js","./ConfigTitle-72f50395.js"],import.meta.url)),Is=N(()=>q(()=>import("./Rules-796aeb11.js"),["./Rules-796aeb11.js","./vendor-97ea48b2.js","./global-9c1eec53.js"],import.meta.url)),Ns=N(()=>q(()=>import("./Config-fd2fcfc6.js"),["./Config-fd2fcfc6.js","./vendor-97ea48b2.js","./ConfigTitle-72f50395.js"],import.meta.url)),qs=()=>{const e=ls("connections");return H(()=>_t(e())),null},Us=()=>{const e=Ke();return H(()=>{Dt()&&De(e()?St():Tt())}),l(wt,{get locale(){return xt()},get children(){const t=Ts(),o=t.firstChild;return p(t,l(ys,{}),o),p(o,l(Ye,{get children(){return[l(T,{get when(){return _()},get children(){return[l(P,{get path(){return v.Overview},component:Ls}),l(P,{get path(){return v.Proxies},component:Ms}),l(P,{get path(){return v.Rules},component:Is}),l(P,{get path(){return v.Conns},component:ks}),l(P,{get path(){return v.Log},component:_s}),l(P,{get path(){return v.Config},component:Ns}),l(P,{path:"*",get element(){return l(et,{get href(){return v.Overview}})}})]}}),l(P,{get path(){return _()?v.Setup:"*"},component:Ss})]}}),null),p(o,l(T,{get when(){return _()},get children(){return l(qs,{})}}),null),p(t,l(tt,{position:"bottom-center"}),null),I(s=>{const a=D("relative flex h-screen flex-col overscroll-y-none subpixel-antialiased p-safe",$t()?"font-twemoji":"font-no-twemoji"),n=is();return a!==s._v$&&M(t,s._v$=a),n!==s._v$2&&O(t,"data-theme",s._v$2=n),s},{_v$:void 0,_v$2:void 0}),t}})};st.extend(at);nt(()=>l(rt,{get source(){return ot()},get children(){return l(Us,{})}}),document.getElementById("root"));export{Z as $,ua as A,ue as B,gt as C,zs as D,ht as E,ra as F,ia as G,da as H,Vs as I,Xs as J,ga as K,he as L,Fa as M,Hs as N,Ws as O,L as P,Bs as Q,ge as R,Pt as S,k as T,X as U,Y as V,Gs as W,Os as X,Rs as Y,$ as Z,bs as _,as as a,ja as a0,Ua as a1,As as a2,Ra as a3,ka as a4,_a as a5,Ma as a6,A as a7,xt as a8,La as a9,Ia as aA,_ as aB,Ta as aC,Na as aa,f as ab,Sa as ac,ha as ad,wa as ae,ya as af,Pa as ag,va as ah,Ca as ai,ba as aj,$a as ak,xa as al,Da as am,v as an,ft as ao,B as ap,Js as aq,Dt as ar,Es as as,pt as at,Qs as au,Tt as av,St as aw,Zs as ax,Fs as ay,$t as az,Aa as b,ls as c,fe as d,ns as e,mt as f,Ys as g,na as h,oa as i,Ks as j,kt as k,xe as l,ma as m,me as n,Nt as o,sa as p,ea as q,fa as r,za as s,qa as t,ve as u,aa as v,ta as w,pa as x,la as y,ca as z};
