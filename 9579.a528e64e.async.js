"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[9579],{49579:function(Pe,T,e){e.r(T),e.d(T,{ThemeType:function(){return h},default:function(){return je}});var V=e(77117),s=e.n(V),H=e(28152),Z=e.n(H),U=e(18840),Y=e.n(U),l=e(50959),G=e(10401),J=e(5697),Q=e(52780),X=e(38505),w=e(59422),B=e(8549),S=e(85916),P=e(70001),M=e(69271),k=e(66292),q=e.n(k),R=e(10113),_=e(21320),z=e.n(_),ee=e(19170),ne=e(84875),ae=e.n(ne),oe=e(90943),te=e.n(oe),n=e(11527),re=S,le=function(a){var t,r=a.name,j=a.isNew,y=a.justCopied,I=a.onCopied,C=a.theme,u=ae()((t={copied:y===r},z()(t,C,!!C),z()(t,"isWhite",r.includes("White")),t)),c=function(d,F){F?I(r,d):R.ZP.error("Copy icon name failed, please try again.")};return(0,n.jsx)(te(),{text:"<".concat(r," />"),onCopy:c,children:(0,n.jsxs)("li",{className:u,children:[l.createElement(re[r]),(0,n.jsx)("span",{className:"anticon-class",children:(0,n.jsx)(ee.Z,{dot:j,children:r})})]})})},ce=le,se=function(a){var t=a.icons,r=a.title,j=a.newIcons,y=a.theme,I=(0,M.YB)(),C=l.useState(null),u=Z()(C,2),c=u[0],m=u[1],d=l.useRef(null),F=l.useCallback(function(v,A){R.ZP.success((0,n.jsxs)("span",{children:[(0,n.jsx)("code",{className:"copied-code",children:A})," copied \u{1F389}"]})),m(v),d.current=setTimeout(function(){m(null)},200)},[]);return l.useEffect(function(){return function(){d.current&&clearTimeout(d.current)}},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:I.formatMessage({id:"app.docs.components.icon.category.".concat(r)})}),(0,n.jsx)("ul",{className:"anticons-list",children:t.map(function(v){return(0,n.jsx)(ce,{name:v,theme:y,isNew:j.includes(v),justCopied:c,onCopied:F},v)})})]})},ie=se,ue=Object.keys(S).map(function(o){return o.replace(/(CircleColorful|Colorful|Filled|CircleFilled)$/,"")}).filter(function(o,a,t){return t.indexOf(o)===a}),$=["Arbitrum","Bitcoin","BSC","Ethereum","Optimism","Polygon","Sui","Tron","Base","Avalanche","Fantom","Celo","Cronos","Moonbeam","Solana"],b=["DAI","WBTC","AAVE","USDT"],E=["CoinbaseWallet","Etherscan","MetaMask","WalletConnect","TokenPocket","Safeheron","Uniswap","PancakeSwap","SushiSwap","Phantom"],de=[].concat($,b,E),ve=ue.filter(function(o){return!de.includes(o)}),K={chain:$,token:b,tool:E,other:ve},fe=function(){return(0,n.jsx)(S.BitcoinCircleColorful,{})},he=function(){return(0,n.jsx)(S.MetaMaskColorful,{})},Ce=function(a){var t="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z";return(0,n.jsx)("svg",s()(s()({},a),{},{viewBox:"0 0 1024 1024",children:(0,n.jsx)("path",{d:t})}))},me=function(a){var t="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z";return(0,n.jsx)("svg",s()(s()({},a),{},{viewBox:"0 0 1024 1024",children:(0,n.jsx)("path",{d:t})}))},D,h=function(o){return o.Filled="Filled",o.CircleFilled="CircleFilled",o.Colorful="Colorful",o.CircleColorful="CircleColorful",o}({}),pe=S,xe=(0,P.kc)(function(o){var a=o.css;return{iconSearchAffix:a(D||(D=Y()([`
    display: flex;
    transition: all 0.3s;
    justify-content: space-between;
  `])))}}),ge=function(a,t){return[{value:h.CircleColorful,icon:(0,n.jsx)(B.Z,{component:fe}),label:!t&&a({id:"app.docs.components.icon.circle-colorful"})},{value:h.Colorful,icon:(0,n.jsx)(B.Z,{component:he}),label:!t&&a({id:"app.docs.components.icon.colorful"})},{value:h.CircleFilled,icon:(0,n.jsx)(B.Z,{component:me}),label:!t&&a({id:"app.docs.components.icon.circle-filled"})},{value:h.Filled,icon:(0,n.jsx)(B.Z,{component:Ce}),label:!t&&a({id:"app.docs.components.icon.filled"})}]},Se=function(){var a=(0,M.YB)(),t=(0,P.Fg)(),r=G.ZP.useBreakpoint(),j=r.md,y=xe(),I=y.styles,C=(0,l.useState)({searchKey:"",theme:h.CircleColorful}),u=Z()(C,2),c=u[0],m=u[1],d=[],F=q()(function(p){m(function(x){return s()(s()({},x),{},{searchKey:p.target.value})})},300),v=(0,l.useCallback)(function(p){m(function(x){return s()(s()({},x),{},{theme:p})})},[]),A=(0,l.useMemo)(function(){var p=c.searchKey,x=p===void 0?"":p,O=c.theme,W=Object.keys(K).map(function(f){var i=K[f];if(x){var N=x.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),function(g,Te){return Te}).replace(/(Colorful|Filled|CircleFilled)$/gi,"").toLowerCase();i=i.filter(function(g){return g.toLowerCase().includes(N)})}return{category:f,icons:i.map(function(g){return g+O}).filter(function(g){return pe[g]})}}).filter(function(f){var i=f.icons;return!!i.length}).map(function(f){var i=f.category,N=f.icons;return(0,n.jsx)(ie,{title:i,theme:O,icons:N,newIcons:d},i)});return W.length?W:(0,n.jsx)(J.Z,{style:{margin:"2em 0"}})},[c.searchKey,c.theme]),ye=(0,l.useState)(!1),L=Z()(ye,2),Ie=L[0],Fe=L[1],Be=t.borderRadius,Ze=t.colorBgContainer,Ae=t.anchorTop,Ne={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:Be,backgroundColor:Ze};return(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsx)(Q.Z,{offsetTop:Ae,onChange:Fe,children:(0,n.jsxs)("div",{className:I.iconSearchAffix,style:Ie?Ne:{},children:[(0,n.jsx)(X.Z,{size:"large",value:c.theme,options:ge(a.formatMessage,!j),onChange:v}),(0,n.jsx)(w.Z.Search,{placeholder:a.formatMessage({id:"app.docs.components.icon.search.placeholder"}),style:{flex:1,marginInlineStart:16},allowClear:!0,autoFocus:!0,size:"large",onChange:F})]})}),A]})},je=Se}}]);
