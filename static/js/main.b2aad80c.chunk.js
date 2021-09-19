(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{34:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var r,i,c=t(1),a=t(21),s=t.n(a),o=t(8),d=(t(34),t(4)),l=t(2),j=t(5),b=t(3),p=l.b.ul(r||(r=Object(b.a)(["\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    margin: 0 0 30px;\n    padding: 0;\n"]))),u=Object(l.b)(o.b)(i||(i=Object(b.a)(["\n    margin: 0 10px;\n    padding: 3px 15px;\n    position: relative;\n    text-decoration: none;\n    color: ",";\n    &.active {\n        color: ",";\n        &:after {\n            content: '';\n            position: absolute;\n            display: block;\n            height: 2px;\n            left: 0%;\n            bottom: 0;\n            background-color: ",";\n            animation: slide-in 0.3s ease-in forwards;\n            @keyframes slide-in {\n                from{\n                    left: 50%;\n                    width: 0;\n                }\n                to{\n                    left: 0%;\n                    width: 100%;\n                }\n            }\n        }\n    }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),x=t(0),h=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}];function m(){var n=Object(d.f)();return Object(x.jsx)("div",{children:Object(x.jsx)(p,{children:h.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(u,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})}var O,f=Object(c.memo)(m),g=l.b.div(O||(O=Object(b.a)(["\n    text-align: center;\n    margin: 0 0 40px;\n\n    h1 {\n        color: ",";\n        letter-spacing: 10px;\n        text-transform: uppercase;\n        margin: 0 0 10px;\n    }\n\n    p{\n        color: ",";\n        margin: 0;\n    }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark}));function v(n){var e=n.title,t=n.subtitle;return Object(x.jsxs)(g,{children:[Object(x.jsxs)("h1",{children:[" ",e,"   "]}),Object(x.jsxs)("p",{children:["  ",t," "]})]})}var w=Object(c.memo)(v);var y=function(n){var e=n.children;return Object(x.jsxs)("div",{children:[Object(x.jsx)(w,{title:"Box Office",subtitle:"Are you looking for a movie or an actor ?"}),Object(x.jsx)(f,{}),e]})},S=t(19),C=t.n(S),k=t(26),N="https://api.tvmaze.com/";function E(n){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(C.a.mark((function n(e){var t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(N).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var I,F,L,A,T=t(27),_=t.n(T),z=Object(l.b)(_.a)(I||(I=Object(b.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n"]))),H=l.b.div(F||(F=Object(b.a)(["\n    width: 300px;\n    height: 100%;\n    margin: 0 15px 40px;\n\n    .img-wrapper {\n        width: 100%;\n        border-radius: 40px;\n        height: 420px;\n        overflow: hidden;\n        border: 1px solid #ddd ;\n        \n        img {\n            object-fit: cover;\n            height: 100%;\n            width: 100%;\n        }   \n    }\n\n    h1 {\n        margin: 10px 0;\n        font-size: 21px;\n    }\n    \n    p {\n        margin: 0;\n    }\n"]))),J=l.b.div(L||(L=Object(b.a)(["\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    background-color: ",";\n    -webkit-clip-path: polygon(\n        50% 0%,\n        61% 35%,\n        98% 35%,\n        68% 57%,\n        79% 91%,\n        50% 70%,\n        21% 91%,\n        32% 57%,\n        2% 35%,\n        39% 35%,\n    );\n    clip-path: polygon(\n        50% 0%,\n        61% 35%,\n        98% 35%,\n        68% 57%,\n        79% 91%,\n        50% 70%,\n        21% 91%,\n        32% 57%,\n        2% 35%,\n        39% 35%,\n    );\n"])),(function(n){return n.active?"#ffc806":"#ddd"})),R=Object(l.b)(H)(A||(A=Object(b.a)(["\n    .btns {\n        margin-top: 15px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        a {\n            text-decoration-color: #000;\n            color: #000;\n            &:hover{\n                text-decoration-color: blue;\n                color: blue;\n            }\n        }       \n        button {\n            outline: none;\n            border: 1px solid #8e8e8e;\n            border-radius: 15px;\n            padding: 5px 20px;\n            background-color: #fff;\n            display: flex ;\n            justify-content: center;\n            align-items: center;\n            &:hover {\n                cursor: pointer;\n            }\n        }\n    }\n"])));function B(n){var e=n.id,t=n.name,r=n.image,i=n.summary,c=n.onStarClick,a=n.isStrarred,s=i?"".concat(i.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(x.jsxs)(R,{children:[Object(x.jsx)("div",{className:"img-wrapper",children:Object(x.jsx)("img",{src:r,alt:"show"})}),Object(x.jsx)("h1",{children:t}),Object(x.jsx)("p",{children:s}),Object(x.jsxs)("div",{className:"btns",children:[Object(x.jsx)(o.b,{to:"/show/".concat(e),children:"Read More"}),Object(x.jsx)("button",{type:"button",onClick:c,children:Object(x.jsx)(J,{active:a})})]})]})}var M=Object(c.memo)(B),P=t.p+"static/media/not-found-image-15383864787lu.22bff5ce.jpg",V=t(9),K=t(28);function U(n,e){switch(e.type){case"ADD":return[].concat(Object(K.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function q(n,e,t){var r=Object(c.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),i=Object(j.a)(r,2),a=i[0],s=i[1];return Object(c.useEffect)((function(){localStorage.setItem(t,JSON.stringify(a))}),[a,t]),[a,s]}function Q(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return q(U,[],n)}var W=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FECTH_FAILED":return Object(V.a)(Object(V.a)({},n),{},{isLoading:!1,error:e.error});default:return n}};var G,X=function(n){var e=n.data,t=Q(),r=Object(j.a)(t,2),i=r[0],c=r[1];return Object(x.jsx)(z,{children:e.map((function(n){var e=n.show,t=i.includes(e.id);return Object(x.jsx)(M,{id:e.id,name:e.name,image:e.image?e.image.medium:P,summary:e.summary,onStarClick:function(){c(t?{type:"REMOVE",showId:e.id}:{type:"ADD",showId:e.id})},isStrarred:t},e.id)}))})},Y=Object(l.b)(H)(G||(G=Object(b.a)(["\n    .deathday {\n        margin: 0 ;\n        margin-top: 15px;\n        font-weight: bold;\n    }\n"])));var Z=function(n){var e=n.image,t=n.name,r=n.gender,i=n.country,c=n.birthday,a=n.deadthday;return Object(x.jsxs)(Y,{children:[Object(x.jsx)("div",{className:"img-wrapper",children:Object(x.jsx)("img",{src:e,alt:"actor"})}),Object(x.jsxs)("h1",{children:[t," ",r?"(".concat(r,")"):null]}),Object(x.jsx)("p",{children:i?"Comes from ".concat(i):"No country Known"}),c?Object(x.jsxs)("p",{children:["Born ",c]}):null,Object(x.jsx)("p",{className:"deathday",children:a?"Died ".concat(a):"A live"})]})};var $,nn,en,tn=function(n){var e=n.data;return Object(x.jsx)(z,{children:e.map((function(n){var e=n.person;return Object(x.jsx)(Z,{id:e.id,name:e.name,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday,gender:e.gender,image:e.image?e.image.medium:P},e.id)}))})},rn=l.b.input($||($=Object(b.a)(["\n    display: block;\n    font-family: 'Roboto', sans-serif;\n    width: 200px;\n    margin: auto;\n    outline: none;\n    padding: 13px 15px;\n    border: 1px solid #dbdbdb;\n    box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n    font-size: 14px;\n    border-radius: 12px;\n    color: #8d8d8d;\n\n    &::placeholder{\n        font-weight: 300;\n        color: #8d8d8d;\n    }\n"]))),cn=l.b.div(nn||(nn=Object(b.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n\n    div {\n        margin: 0 15px;\n    }\n"]))),an=l.b.div(en||(en=Object(b.a)(["\n    text-align: center;\n    margin-bottom: 35px;\n\n    button {\n        color: #fff;\n        background-color: ",";\n        margin: auto;\n        padding: 10px 50px;\n        font-size: 15px;\n        border: none;\n        outline: none;\n        border-radius: 12px;\n        &:hover {\n            cursor: pointer;\n        }\n    }\n"])),(function(n){return n.theme.mainColors.blue})),sn=t(29),on=["label"];function dn(n){var e=n.label,t=Object(sn.a)(n,on);return Object(x.jsxs)("label",{htmlFor:t.id,children:[e,Object(x.jsx)("input",Object(V.a)(Object(V.a)({},t),{},{type:"radio"}))]})}var ln=Object(c.memo)(dn);var jn,bn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(c.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(j.a)(e,2),r=t[0],i=t[1];return[r,function(e){i(e),sessionStorage.setItem(n,JSON.stringify(e))}]}(),e=Object(j.a)(n,2),t=e[0],r=e[1],i=Object(c.useState)(null),a=Object(j.a)(i,2),s=a[0],o=a[1],d=Object(c.useState)("shows"),l=Object(j.a)(d,2),b=l[0],p=l[1],u="shows"===b,h=function(){E("search/".concat(b,"?q=").concat(t)).then((function(n){o(n)}))},m=Object(c.useCallback)((function(n){r(n.target.value)}),[r]),O=Object(c.useCallback)((function(n){p(n.target.value)}),[]);return Object(x.jsxs)(y,{children:[Object(x.jsx)(rn,{type:"text",placeholder:"Search ...",onChange:m,onKeyDown:function(n){13===n.keyCode&&h()},value:t}),Object(x.jsxs)(cn,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(ln,{label:"Shows",id:"shows-search",value:"shows",checked:u,onChange:O})}),Object(x.jsx)("div",{children:Object(x.jsx)(ln,{label:"Actors",id:"actors-search",value:"people",checked:!u,onChange:O})})]}),Object(x.jsx)(an,{children:Object(x.jsx)("button",{type:"button",onClick:h,children:"Search"})}),s&&0===s.length?Object(x.jsx)("div",{children:"No results"}):s&&s.length>0?s[0].show?Object(x.jsx)(X,{data:s}):Object(x.jsx)(tn,{data:s}):null]})},pn=l.b.div(jn||(jn=Object(b.a)(["\n    display: flex;\n    flex-wrap: wrap;\n\n    .cast-item {\n        flex: 1 0 50%;\n        display: flex;\n        margin-bottom: 20px;\n        align-items: center;\n\n        @media only screen and (max-width: 768px) {\n            flex: 1 0 100% ;\n        }\n    }\n\n    .pic-wrapper{\n        width: 50px;\n        min-width: 50px;\n        height: 50px;\n        overflow: hidden;\n        border-radius: 50%;\n        img {\n            object-fit: cover;\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    .actor {\n        margin-left: 25px;\n        .bold {\n            font-weight: bold;\n        }\n    }\n"])));var un,xn=function(n){var e=n.cast;return Object(x.jsx)(pn,{children:e.map((function(n,e){var t=n.person,r=n.character,i=n.voice;return Object(x.jsxs)("div",{className:"cast-item",children:[Object(x.jsx)("div",{className:"pic-wrapper",children:Object(x.jsx)("img",{src:t.image?t.image.medium:P,alt:"cast-person"})}),Object(x.jsx)("div",{className:"actor",children:Object(x.jsxs)("span",{children:[Object(x.jsx)("span",{className:"bold",children:t.name})," | ",r.name," ",i?"| Voice":""]})})]},e)}))})},hn=l.b.div(un||(un=Object(b.a)(["\n    p {\n        margin: 5px 0;\n\n        span {\n            font-weight: bold;\n        }\n    }\n"])));var mn,On,fn=function(n){var e=n.status,t=n.premiered,r=n.network;return Object(x.jsxs)(hn,{children:[Object(x.jsxs)("p",{children:["Status: ",Object(x.jsx)("span",{children:e})]}),Object(x.jsxs)("p",{children:["Premiered ",t," ",r?"on ".concat(r.name):null]})]})},gn=l.b.div(mn||(mn=Object(b.a)(["\n    p {\n        margin: 5px 0;\n    }\n\n    span {\n        font-weight: 700;\n    }\n"]))),vn=l.b.div(On||(On=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    .season-item {\n        display: flex;\n        align-items: center;\n        margin: 10px 0;\n\n        &:last-child{\n            margin-bottom: 0;\n        }\n\n        .left {\n            flex: 0 0 30%;\n            border-right: 1px solid #b0b0b0 ;\n            padding-right: 20px;\n        }\n\n        .right {\n            padding-left: 20px;\n            flex: 1;\n        }\n    }\n"])));var wn,yn,Sn,Cn=function(n){var e=n.seasons;return Object(x.jsxs)(gn,{children:[Object(x.jsxs)("p",{children:["Seasons in total: ",Object(x.jsx)("span",{children:e.lenght})]}),Object(x.jsxs)("p",{children:["Episodes in total:"," ",Object(x.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(x.jsx)(vn,{children:e.map((function(n){return Object(x.jsxs)("div",{className:"season-item",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsxs)("p",{children:["Season ",n.number]}),Object(x.jsxs)("p",{children:["Episodes: ",Object(x.jsx)("span",{children:n.episodeOrder})]})]}),Object(x.jsxs)("div",{className:"right",children:["Aired:"," ",Object(x.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},kn=l.b.div(wn||(wn=Object(b.a)(["\n    display: flex;\n    margin-bottom: 40px;\n\n    img {\n        min-width: 250px;\n        width: 300px;\n        max-height: 450px;\n        border: 1px solid #ddd;\n        border-radius: 40px;\n    }\n\n    .text-side {\n        margin-left: 20px;\n        .summary {\n            color: #5f5f5f;\n            line-height: 1.5;\n        }\n    }\n    \n    @media only screen and (max-width: 768px) {\n        flex-wrap: wrap;\n        img{\n            margin-bottom: 20px;\n            margin: auto;\n        }\n        .text-side {\n            margin-left: 0;\n            margin-top: 20px;\n        }\n    }\n"]))),Nn=l.b.div(yn||(yn=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n\n    h1{\n        margin: 0;\n        border-right: 1px solid #ddd;\n        padding-right: 25px;\n        margin-right: 20px;\n    }\n\n    div{\n        display: flex;\n        align-items: center;\n        span{\n            margin-left: 10px;\n        }\n    }\n"]))),En=l.b.div(Sn||(Sn=Object(b.a)(["\n    display: inline-flex;\n    flex-wrap: wrap;\n\n    span {\n        margin: 6px;\n        margin-bottom: 0;\n        color: blue;\n        background-color: #d0c9ff;\n        padding: 3px 13px ;\n        border-radius: 20px;\n        font-size: 14px;\n    }\n"])));var Dn,In,Fn=function(n){var e=n.name,t=n.rating,r=n.summary,i=n.tags,c=n.image;return Object(x.jsxs)(kn,{children:[Object(x.jsx)("img",{src:c?c.original:P,alt:"show-cover"}),Object(x.jsxs)("div",{className:"text-side",children:[Object(x.jsxs)(Nn,{children:[Object(x.jsx)("h1",{children:e}),Object(x.jsxs)("div",{children:[Object(x.jsx)(J,{active:!0}),Object(x.jsx)("span",{children:t.average||"N/A"})]})]}),Object(x.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:r}}),Object(x.jsxs)("div",{children:["Tags:"," ",Object(x.jsx)(En,{children:i.map((function(n,e){return Object(x.jsx)("span",{children:n},e)}))})]})]})]})},Ln=l.b.div(Dn||(Dn=Object(b.a)(["\n    padding: 0 20px;\n    \n    @media only screen and (min-width: 516px) {\n        padding: 0 40px;\n    }\n    @media only screen and (min-width: 516px) {\n        padding: 0 60px;\n    }\n    @media only screen and (min-width: 516px) {\n        padding: 0 80px;\n    }\n"]))),An=l.b.div(In||(In=Object(b.a)(["\n    margin-bottom: 40px;\n    h2 {\n        margin: 0;\n        margin-bottom: 30px;\n        font-size: 22px;\n    }\n"])));var Tn=function(){var n=function(n){var e=Object(c.useReducer)(W,{show:null,isLoading:!0,error:null}),t=Object(j.a)(e,2),r=t[0],i=t[1];return Object(c.useEffect)((function(){var e=!0;return E("shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){setTimeout((function(){e&&i({type:"FETCH_SUCCESS",show:n})}),2e3)})).catch((function(n){e&&i({type:"FECTH_FAILED",error:n.message})})),function(){e=!1}}),[n]),r}(Object(d.g)().id),e=n.show,t=n.isLoading,r=n.error;return t?Object(x.jsx)("div",{children:"Data is being Loaded"}):r?Object(x.jsxs)("div",{children:["Error occured: ",r," "]}):Object(x.jsxs)(Ln,{children:[Object(x.jsx)(Fn,{image:e.image,name:e.name,rating:e.rating,summary:e.summary,tags:e.genres}),Object(x.jsxs)(An,{children:[Object(x.jsx)("h2",{children:"Details"}),Object(x.jsx)(fn,{status:e.status,network:e.network,premiered:e.premiered})]}),Object(x.jsxs)(An,{children:[Object(x.jsx)("h2",{children:"Seasons"}),Object(x.jsx)(Cn,{seasons:e._embedded.seasons})]}),Object(x.jsxs)(An,{children:[Object(x.jsx)("h2",{children:"Cast"}),Object(x.jsx)(xn,{cast:e._embedded.cast})]})]})};var _n=function(){var n=Q(),e=Object(j.a)(n,1)[0],t=Object(c.useState)(null),r=Object(j.a)(t,2),i=r[0],a=r[1],s=Object(c.useState)(!0),o=Object(j.a)(s,2),d=o[0],l=o[1],b=Object(c.useState)(null),p=Object(j.a)(b,2),u=p[0],h=p[1];return Object(c.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return E("shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){a(n),l(!1)})).catch((function(n){h(n.message),l(!1)}))}else l(!1)}),[e]),Object(x.jsxs)(y,{children:[d&&Object(x.jsx)("div",{children:"Shows are still loading"}),u&&Object(x.jsxs)("div",{children:["Error occured: ",u]}),d&&!i&&Object(x.jsx)("div",{children:"No shows were added"}),!d&&!u&&i&&Object(x.jsx)(X,{data:i})]})},zn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Hn=function(){return Object(x.jsx)(l.a,{theme:zn,children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",children:Object(x.jsx)(bn,{})}),Object(x.jsx)(d.a,{exact:!0,path:"/starred",children:Object(x.jsx)(_n,{})}),Object(x.jsx)(d.a,{exact:!0,path:"/show/:id",children:Object(x.jsx)(Tn,{})}),Object(x.jsx)(d.a,{children:Object(x.jsx)("div",{children:"Not Found"})})]})})},Jn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))};s.a.render(Object(x.jsx)(o.a,{children:Object(x.jsx)(Hn,{})}),document.getElementById("root")),Jn(),ServiceWorker.register()}},[[48,1,2]]]);
//# sourceMappingURL=main.b2aad80c.chunk.js.map