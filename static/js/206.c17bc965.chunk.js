"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{2438:function(t,n,e){e.d(n,{Z:function(){return d},i:function(){return c}});var a=e(9434),i=e(692),r=e(8310),o=[{label:"January",value:1},{label:"Fabruary",value:2},{label:"March",value:3},{label:"April",value:4},{label:"May",value:5},{label:"June",value:6},{label:"July",value:7},{label:"August",value:8},{label:"September",value:9},{label:"October",value:10},{label:"November",value:11},{label:"December",value:12}],s=e(3329),c=(new Date).getMonth(),l={label:o[c].label,value:c+1},d=function(){var t=(0,a.I0)();return(0,s.jsx)(r.Z,{options:o,startValue:l,onChange:function(n){t((0,i.I)({month:n}))}})}},8230:function(t,n,e){e.d(n,{Z:function(){return d},t:function(){return s}});var a=e(9434),i=e(692),r=e(8310),o=e(3329),s=(new Date).getFullYear(),c={label:s,value:s},l=function(){for(var t=[],n=1900;n<=2023;n++){var e={label:n.toString(),value:n};t.push(e)}return t.sort((function(t,n){return n.value-t.value}))}(),d=function(){var t=(0,a.I0)();return(0,o.jsx)(r.Z,{options:l,startValue:c,onChange:function(n){t((0,i.I)({year:n}))}})}},7211:function(t,n,e){e.r(n),e.d(n,{default:function(){return It}});var a=e(9439),i=e(2791),r=e(9434),o=e(2423),s=e(692),c=e(2438),l=e(8230),d=e(1413),u="add-button_button__eKi4A",m=e(3329),h=function(t){var n=t.onBtnClick,e=t.props;return(0,m.jsx)("button",(0,d.Z)({className:u,onClick:n},e))},x=e(4274),p=e(106),f=e(158),_={wrapper:"toggle-button_wrapper__gTPXH",switch:"toggle-button_switch__fUAC9",checked:"toggle-button_checked__0nEhj",slider:"toggle-button_slider__m+yY+",round:"toggle-button_round__B7MoG"},g=function(t){var n=t.getChecked,e=t.onClick,r=(0,i.useState)(!1),o=(0,a.Z)(r,2),s=o[0],c=o[1],l=s?"".concat(_.switch," ").concat(_.checked):_.switch;return(0,m.jsx)("div",{className:_.wrapper,children:(0,m.jsxs)("label",{className:l,children:[(0,m.jsx)("input",{className:_.checkbox,type:"checkbox",checked:s,onChange:function(){if(n(s),s)return e({type:"type",data:"INCOME"}),void c((function(t){return!t}));e({type:"type",data:"EXPENSE"}),c((function(t){return!t}))}}),(0,m.jsx)("span",{className:_.slider+" "+_.round})]})})},b=e(9976),j=e(3646),v=e(3845),C=function(t){return(0,m.jsx)(j.c.DropdownIndicator,(0,d.Z)((0,d.Z)({},t),{},{children:(0,m.jsx)("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M1 1L10 10L19 1",stroke:"black"})})}))},Z=function(t){var n=t.options,e=void 0===n?[]:n,r=t.onChange,o=(0,v.Z)("(min-width: 479px)"),s=(0,i.useState)({label:"Select category",value:""}),c=(0,a.Z)(s,2),l=c[0],u=c[1];return(0,m.jsx)(b.ZP,{options:e,maxMenuHeight:157,components:{DropdownIndicator:C},value:l,onChange:function(t){u(t),r({type:"category",data:t.value})},styles:{control:function(t){return(0,d.Z)((0,d.Z)({},t),{},{width:o?"160px":"100%",height:"50px",border:"1px solid #000000",borderRadius:"30px",cursor:"pointer",transition:"background-color 400ms",backgroundColor:"transparent","&:hover":null,boxShadow:"none"})},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{paddingRight:"10px"}},dropdownIndicator:function(t,n){return(0,d.Z)((0,d.Z)({},t),{},{transform:n.isFocused?"rotate(180deg)":"",transition:"transform 400ms"})},valueContainer:function(t){return(0,d.Z)((0,d.Z)({},t),{},{paddingLeft:"16px"})},singleValue:function(t){return(0,d.Z)((0,d.Z)({},t),{},{fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)"})},menu:function(t){return(0,d.Z)((0,d.Z)({},t),{},{width:o?"160px":"100%",padding:"12px 0",backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"20px"})},option:function(t,n){return{paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)",cursor:"pointer",":hover":{backgroundColor:n.isSelected?"":"white"},backgroundColor:n.isSelected?"#24CCA7":"",color:n.isSelected?"#ffffff":"#000000"}},menuList:function(t){return(0,d.Z)((0,d.Z)({},t),{},{"::-webkit-scrollbar":{width:"0px",height:"0px"}})}}})},S=e(9513),N=e.n(S),y=e(9040),k=function(t){var n=t,e=n.getDate()<10?n.getDate().toString().padStart(2,0):n.getDate(),a=n.getMonth()<10?(n.getMonth()+1).toString().padStart(2,0):n.getMonth()+1,i=n.getFullYear();return"".concat(i,"-").concat(a,"-").concat(e)};var w=e.p+"static/media/calendary.30bf32a7a4348ede2ce910569aedc915.svg",I=(e(8639),"calendar_field__pFy3H"),L="calendar_inputBox__MTg5O",D="calendar_icon__givQr",M=function(t){var n=t.stateDate,e=t.onChange,r=(0,i.useState)(new Date(n)),o=(0,a.Z)(r,2),s=o[0],c=o[1],l=(0,i.forwardRef)((function(t,n){var e=t.value,a=t.onClick;return(0,m.jsxs)("div",{className:L,children:[(0,m.jsx)("img",{className:D,src:w,alt:"Calendar icon"}),(0,m.jsx)("button",{className:I,type:"button",onClick:a,ref:n,children:e})]})}));return(0,m.jsx)(N(),{showIcon:!0,selected:s,onChange:function(t){c(t),e({type:"date",data:k(t)})},customInput:(0,m.jsx)(l,{}),dateFormat:"dd.MM.yyyy",maxDate:(0,y.default)(new Date,0)})},T=e(202),F=e(4925),B="secondary-button_button__pH-kF",E=["children","onBtnClick"],H=function(t){var n=t.children,e=t.onBtnClick,a=(0,F.Z)(t,E);return(0,m.jsx)("button",(0,d.Z)((0,d.Z)({className:B,onClick:e},a),{},{children:n}))},A={transactionDate:k(new Date),type:"INCOME",categoryId:"063f1132-ba5d-42b4-951d-44011ca46262",comment:"",amount:""},O="add-transaction-form_title__SjWKx",R="add-transaction-form_form__LgtGB",P="add-transaction-form_field__TQA7h",J="add-transaction-form_wrapper__5-Fxj",Y="add-transaction-form_box__7ENrd",Q="add-transaction-form_type__pMFfQ",z="add-transaction-form_income__DJuca",G="add-transaction-form_expense__F2o6j",K="add-transaction-form_inputBox__alIk5",V="add-transaction-form_icon__90jgj",W=function(t){var n=t.initialState,e=void 0===n?A:n,o=t.isEdit,s=void 0!==o&&o,c=t.onSubmit,l=t.setShowModal,d=(0,i.useState)(!0),u=(0,a.Z)(d,2),h=u[0],x=u[1],_=(0,f.Z)({initialState:e,onSubmit:c}),b=_.state,j=_.handleChange,v=_.handleDataChange,C=_.handleSubmit,S=(0,r.v9)(p.u).filter((function(t){return"063f1132-ba5d-42b4-951d-44011ca46262"!==t.id})).map((function(t){var n=t.id;return{label:t.name,value:n}})),N=b.transactionDate,y=b.type,k=b.comment,I=b.amount,L="INCOME"===y?z:Q,D="EXPENSE"===y?G:Q;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:O,children:"Add transaction"}),(0,m.jsxs)("form",{onSubmit:C,className:R,children:[s?(0,m.jsxs)("p",{className:Q,children:[(0,m.jsx)("span",{className:L,children:"Income"})," / ",(0,m.jsx)("span",{className:D,children:"Expense"})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{getChecked:function(t){x(t)},onClick:v}),!h&&(0,m.jsx)(Z,{options:S,onChange:v})]}),(0,m.jsxs)("div",{className:J,children:[(0,m.jsx)("input",{className:P,name:"amount",type:"text",value:I,placeholder:"0.00",required:!0,onChange:j}),s?(0,m.jsxs)("div",{className:K,children:[(0,m.jsx)("img",{className:V,src:w,alt:"Calendar icon"}),(0,m.jsx)("input",{className:P,name:"transactionDate",type:"text",value:N,disabled:!0})]}):(0,m.jsx)(M,{stateDate:N,onChange:v})]}),(0,m.jsx)("input",{className:P,name:"comment",type:"text",value:k,placeholder:"Comment",onChange:j}),(0,m.jsxs)("div",{className:Y,children:[(0,m.jsx)(T.Z,{children:s?"Save":"Add"}),(0,m.jsx)(H,{onBtnClick:function(){l(!1)},children:"Cancel"})]})]})]})},X="home-page_wrapper__bK12s",q="edit-button_button__Yx4Lp",U="edit-button_label__aO0tA",$=function(t){var n=t.id,e=t.onClick;return(0,m.jsx)("button",{className:q,onClick:function(){e(n)},children:(0,m.jsx)("span",{className:U})})},tt="delete-button_button__NgmWc",nt=function(t){var n=t.id,e=t.onClick;return(0,m.jsx)("button",{className:tt,onClick:function(t){e(n)},children:"Delete"})},et="TransactionsListItem_item__2cJuc",at="TransactionsListItem_leftBox__ce6rj",it="TransactionsListItem_rightBox__9kbcH",rt="TransactionsListItem_comment__TAPk9",ot="TransactionsListItem_type__f-SmD",st="TransactionsListItem_category__koP2G",ct="TransactionsListItem_date__Qj-Tk",lt="TransactionsListItem_greenSum__Qn1cd",dt="TransactionsListItem_redSum__PO3vo",ut=function(t){var n=t.id,e=t.category,a=t.sum,i=t.date,r=t.type,o=t.comment,s=t.onEditBtnClick,c=t.onDeleteBtnClick,l=a.toFixed(2),d="INCOME"===r?"+":"-",u=new Date(i),h=u.getDate().toString().padStart(2,"0"),x=(u.getMonth()+1).toString().padStart(2,"0"),p=u.getFullYear().toString().slice(-2),f="".concat(h,".").concat(x,".").concat(p);return(0,m.jsxs)("li",{className:et,children:[(0,m.jsxs)("div",{className:at,children:[(0,m.jsx)("p",{className:ct,children:f}),(0,m.jsx)("p",{className:ot,children:d}),(0,m.jsx)("p",{className:st,children:e}),(0,m.jsx)("span",{className:rt,children:o}),(0,m.jsx)("span",{className:"+"===d?lt:dt,children:l})]}),(0,m.jsxs)("div",{className:it,children:[(0,m.jsx)($,{onClick:function(){return s(n)}}),(0,m.jsx)(nt,{onClick:function(){return c(n)}})]})]})},mt=e(1433),ht={title:"TransactionsList_title__WxhBO",img:"TransactionsList_img__Ao3ri",titleText:"TransactionsList_titleText__-LLND",textLover:"TransactionsList_textLover__etjZW"},xt=e(9953),pt=(e(6035),function(){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),e=n[0],s=n[1],c=(0,i.useState)(""),l=(0,a.Z)(c,2),d=l[0],u=l[1],h=(0,i.useState)(!1),f=(0,a.Z)(h,2),_=f[0],g=f[1],b=(0,r.I0)(),j=(0,r.v9)(p.a),v=(0,r.v9)(p.u),C=function(t){s(!0);var n=j.find((function(n){return n.id===t}));u(n),g(!0)},Z=function(t){b((0,o.Ks)(t))},S=j.map((function(t){var n=t.id,e=t.transactionDate,a=t.type,i=t.categoryId,r=t.comment,o=t.amount,s=v.find((function(t){return t.id===i}));return(0,m.jsx)(ut,{id:n,category:s.name,sum:o,date:e,type:a,comment:r,onEditBtnClick:C,onDeleteBtnClick:Z},n)})),N=0===j.length?(0,m.jsxs)("div",{className:ht.boxNotFound,children:[(0,m.jsx)("p",{className:ht.titleText,children:"No Transactions yet"}),(0,m.jsx)("p",{className:ht.textLover,children:"Start transactions with your wallet.All transactions made will be displayed here."}),(0,m.jsx)("img",{src:mt,alt:"no transaction",className:ht.img})]}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:ht.title,children:[(0,m.jsx)("p",{children:"Date"}),(0,m.jsx)("p",{children:"Type"}),(0,m.jsx)("p",{children:"Category"}),(0,m.jsx)("p",{children:"Comment"}),(0,m.jsx)("p",{children:"Sum"})]}),(0,m.jsxs)(xt.Z,{style:{maxHeight:450},children:[" ",(0,m.jsxs)("div",{className:ht.list_box,children:[(0,m.jsx)("ul",{className:ht.list,children:S}),_&&(0,m.jsx)(x.Z,{onClose:function(){g(!1)},children:(0,m.jsx)(W,{initialState:d,isEdit:e,onSubmit:function(t){b((0,o.qJ)(t)),g(!1)},setShowModal:g})})]})]})]});return(0,m.jsxs)(m.Fragment,{children:["  ",N]})}),ft="TransactionsListMobileItem_box__vlaiC",_t="TransactionsListMobileItem_table__htwQH",gt="TransactionsListMobileItem_tbody__F5pGd",bt="TransactionsListMobileItem_body__9HSOO",jt="TransactionsListMobileItem_head__F5jZr",vt="TransactionsListMobileItem_green__zOM+Z",Ct="TransactionsListMobileItem_red__aXhID",Zt="TransactionsListMobileItem_greenSum__LLgfR",St="TransactionsListMobileItem_redSum__Lbaj7",Nt="TransactionsListMobileItem_edit__H4ItN",yt="TransactionsListMobileItem_editBox__TIfdZ",kt=function(t){var n=t.id,e=t.category,a=t.sum,i=t.date,r=t.type,o=t.comment,s=t.onEditBtnClick,c=t.onDeleteBtnClick,l=a.toFixed(2),d=new Date(i),u=d.getDate().toString().padStart(2,"0"),h=(d.getMonth()+1).toString().padStart(2,"0"),x=d.getFullYear().toString().slice(-2),p="".concat(u,".").concat(h,".").concat(x),f="INCOME"===r?"+":"-";return(0,m.jsx)("div",{className:ft,children:(0,m.jsx)("table",{className:_t,children:(0,m.jsxs)("tbody",{className:gt,children:[(0,m.jsxs)("tr",{className:"+"===f?vt:Ct,children:[(0,m.jsx)("td",{className:jt,children:"Date"}),(0,m.jsx)("td",{className:bt,children:p})]}),(0,m.jsxs)("tr",{className:"+"===f?vt:Ct,children:[(0,m.jsx)("td",{className:jt,children:"Type"}),(0,m.jsx)("td",{className:bt,children:f})]}),(0,m.jsxs)("tr",{className:"+"===f?vt:Ct,children:[(0,m.jsx)("td",{className:jt,children:"Category"}),(0,m.jsx)("td",{className:bt,children:e})]}),(0,m.jsxs)("tr",{className:"+"===f?vt:Ct,children:[(0,m.jsx)("td",{className:jt,children:"Comment"}),(0,m.jsx)("td",{className:bt,children:o})]}),(0,m.jsxs)("tr",{className:"+"===f?vt:Ct,children:[(0,m.jsx)("td",{className:jt,children:"Sum"}),(0,m.jsx)("td",{className:"+"===f?Zt:St,children:l})]}),(0,m.jsxs)("tr",{className:"+"===f?vt:Ct,children:[(0,m.jsx)("td",{className:jt,children:(0,m.jsx)(nt,{onClick:function(){return c(n)}})}),(0,m.jsx)("td",{className:bt,children:(0,m.jsxs)("div",{className:yt,children:[(0,m.jsx)($,{onClick:function(){return s(n)}}),(0,m.jsx)("span",{onClick:function(){return s(n)},className:Nt,children:"Edit"})]})})]})]})})})},wt=function(){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),e=n[0],s=n[1],c=(0,i.useState)(""),l=(0,a.Z)(c,2),d=l[0],u=l[1],h=(0,i.useState)(!1),f=(0,a.Z)(h,2),_=f[0],g=f[1],b=(0,r.I0)(),j=(0,r.v9)(p.a),v=(0,r.v9)(p.u),C=function(t){s(!0);var n=j.find((function(n){return n.id===t}));u(n),g(!0)},Z=function(t){b((0,o.Ks)(t))},S=j.map((function(t){var n=t.id,e=t.transactionDate,a=t.type,i=t.categoryId,r=t.comment,o=t.amount,s=v.find((function(t){return t.id===i}));return(0,m.jsx)(kt,{id:n,category:s.name,sum:o,date:e,type:a,comment:r,onEditBtnClick:C,onDeleteBtnClick:Z},n)}));return(0,m.jsxs)(m.Fragment,{children:[" ",S,_&&(0,m.jsx)(x.Z,{onClose:function(){g(!1)},children:(0,m.jsx)(W,{initialState:d,isEdit:e,onSubmit:function(t){b((0,o.qJ)(t)),g(!1)},setShowModal:g})})," "]})},It=function(){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),e=n[0],d=n[1],u=(0,r.I0)();(0,i.useEffect)((function(){u((0,o.tG)()),u((0,o._v)()),u((0,s.I)({month:c.i,year:l.t}))}),[u]);var p=(0,v.Z)("(min-width: 768px)"),f=(0,v.Z)("(max-width: 767px)");return(0,m.jsxs)("div",{className:X,children:[p&&(0,m.jsx)(pt,{setShowModal:d}),f&&(0,m.jsx)(wt,{}),(0,m.jsx)(h,{type:"button",onBtnClick:function(){d(!0)}}),e&&(0,m.jsx)(x.Z,{onClose:function(){d(!1)},children:(0,m.jsx)(W,{onSubmit:function(t){u((0,o.dT)(t)),d(!1)},setShowModal:d})})]})}},8310:function(t,n,e){var a=e(9439),i=e(1413),r=e(3646),o=e(9976),s=e(2791),c=e(3845),l=e(3329),d=function(t){return(0,l.jsx)(r.c.DropdownIndicator,(0,i.Z)((0,i.Z)({},t),{},{children:(0,l.jsx)("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M1 1L10 10L19 1",stroke:"black"})})}))};n.Z=function(t){var n=t.options,e=void 0===n?[]:n,r=t.startValue,u=t.onChange,m=(0,c.Z)("(min-width: 768px)"),h=(0,s.useState)(r),x=(0,a.Z)(h,2),p=x[0],f=x[1];return(0,l.jsx)(o.ZP,{options:e,maxMenuHeight:157,components:{DropdownIndicator:d},value:p,onChange:function(t){f(t),u(t.value)},styles:{control:function(t){return(0,i.Z)((0,i.Z)({},t),{},{width:m?"160px":"100%",height:"50px",border:"1px solid #000000",borderRadius:"30px",cursor:"pointer",transition:"background-color 400ms",backgroundColor:"transparent","&:hover":null,boxShadow:"none"})},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{paddingRight:"10px"}},dropdownIndicator:function(t,n){return(0,i.Z)((0,i.Z)({},t),{},{transform:n.isFocused?"rotate(180deg)":"",transition:"transform 400ms"})},valueContainer:function(t){return(0,i.Z)((0,i.Z)({},t),{},{paddingLeft:"16px"})},singleValue:function(t){return(0,i.Z)((0,i.Z)({},t),{},{fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)"})},menu:function(t){return(0,i.Z)((0,i.Z)({},t),{},{width:m?"160px":"100%",padding:"12px 0",backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"20px"})},option:function(t,n){return{paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)",cursor:"pointer",":hover":{backgroundColor:n.isSelected?"":"white"},backgroundColor:n.isSelected?"#24CCA7":"",color:n.isSelected?"#ffffff":"#000000"}},menuList:function(t){return(0,i.Z)((0,i.Z)({},t),{},{"::-webkit-scrollbar":{width:"0px",height:"0px"}})}}})}},202:function(t,n,e){e.d(n,{Z:function(){return c}});var a=e(1413),i=e(4925),r="primary-button_button__YlxDi",o=e(3329),s=["children"],c=function(t){var n=t.children,e=(0,i.Z)(t,s);return(0,o.jsx)("button",(0,a.Z)((0,a.Z)({className:r},e),{},{children:n}))}},158:function(t,n,e){var a=e(4942),i=e(1413),r=e(9439),o=e(2791);n.Z=function(t){var n=t.initialState,e=t.onSubmit,s=(0,o.useState)((0,i.Z)({},n)),c=(0,r.Z)(s,2),l=c[0],d=c[1];return{state:l,setState:d,handleChange:function(t){var n=t.target;d((function(t){var e=n.name,r=n.value,o=n.checked,s="checkbox"===n.type?o:r;return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},e,s))}))},handleDataChange:function(t){var n=t.type,e=t.data;"date"===n&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{transactionDate:e})})),"type"===n&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{type:e})})),"category"===n&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categoryId:e})}))},handleSubmit:function(t){t.preventDefault(),e((0,i.Z)({},l)),d((0,i.Z)({},n))}}}},1433:function(t,n,e){t.exports=e.p+"static/media/wallett.efcc2a8f028fbcc6331e.png"}}]);
//# sourceMappingURL=206.c17bc965.chunk.js.map