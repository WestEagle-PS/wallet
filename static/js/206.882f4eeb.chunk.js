"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{2438:function(t,n,e){e.d(n,{Z:function(){return d},i:function(){return c}});var a=e(9434),i=e(692),r=e(8310),o=[{label:"January",value:1},{label:"Fabruary",value:2},{label:"March",value:3},{label:"April",value:4},{label:"May",value:5},{label:"June",value:6},{label:"July",value:7},{label:"August",value:8},{label:"September",value:9},{label:"October",value:10},{label:"November",value:11},{label:"December",value:12}],s=e(3329),c=(new Date).getMonth(),l={label:o[c].label,value:c+1},d=function(){var t=(0,a.I0)();return(0,s.jsx)(r.Z,{options:o,startValue:l,onChange:function(n){t((0,i.I)({month:n}))}})}},8230:function(t,n,e){e.d(n,{Z:function(){return d},t:function(){return s}});var a=e(9434),i=e(692),r=e(8310),o=e(3329),s=(new Date).getFullYear(),c={label:s,value:s},l=function(){for(var t=[],n=1900;n<=2023;n++){var e={label:n.toString(),value:n};t.push(e)}return t.sort((function(t,n){return n.value-t.value}))}(),d=function(t){var n=(0,a.I0)({year:t});return(0,o.jsx)(r.Z,{options:l,startValue:c,onChange:function(t){n((0,i.I)({year:t}))}})}},7211:function(t,n,e){e.r(n),e.d(n,{default:function(){return It}});var a=e(9439),i=e(2791),r=e(9434),o=e(2423),s=e(692),c=e(2438),l=e(8230),d=e(1413),u="add-button_button__eKi4A",m=e(3329),h=function(t){var n=t.onBtnClick,e=t.props;return(0,m.jsx)("button",(0,d.Z)({className:u,onClick:n},e))},x=e(4274),p=e(106),f=e(158),_={wrapper:"toggle-button_wrapper__gTPXH",switch:"toggle-button_switch__fUAC9",checked:"toggle-button_checked__0nEhj",slider:"toggle-button_slider__m+yY+",round:"toggle-button_round__B7MoG"},g=function(t){var n=t.getChecked,e=t.onClick,r=(0,i.useState)(!1),o=(0,a.Z)(r,2),s=o[0],c=o[1],l=s?"".concat(_.switch," ").concat(_.checked):_.switch;return(0,m.jsx)("div",{className:_.wrapper,children:(0,m.jsxs)("label",{className:l,children:[(0,m.jsx)("input",{className:_.checkbox,type:"checkbox",checked:s,onChange:function(){if(n(s),s)return e({type:"type",data:"INCOME"}),void c((function(t){return!t}));e({type:"type",data:"EXPENSE"}),c((function(t){return!t}))}}),(0,m.jsx)("span",{className:_.slider+" "+_.round})]})})},b=e(9976),j=e(3177),v=function(t){var n=t.options,e=void 0===n?[]:n,r=t.onChange,o=(0,i.useState)(null),s=(0,a.Z)(o,2),c=s[0],l=s[1];return(0,m.jsx)(b.ZP,{options:e,components:{DropdownIndicator:j.Z},value:c,placeholder:"Select a category",onChange:function(t){l(t),r({type:"category",data:t.value})},styles:{placeholder:function(t){return(0,d.Z)((0,d.Z)({},t),{},{fontFamily:"CirceRegular",color:"#BDBDBD",fontSize:"18px",lineHeight:"calc(27 / 18)"})},control:function(t){return(0,d.Z)((0,d.Z)({},t),{},{width:"100%",height:"32px",border:"none",borderBottom:"1px solid #E0E0E0",cursor:"pointer",backgroundColor:"transparent","&:hover":null,boxShadow:"none"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(t,n){return(0,d.Z)((0,d.Z)({},t),{},{transform:n.isFocused?"rotate(180deg)":"",transition:"transform 400ms"})},singleValue:function(t){return(0,d.Z)((0,d.Z)({},t),{},{fontFamily:"CirceRegular",color:"#000000",fontSize:"18px",lineHeight:"calc(27 / 18)"})},menu:function(t){return(0,d.Z)((0,d.Z)({},t),{},{margin:0,width:"100%",padding:"12px 0",backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"20px",overflow:"hidden"})},option:function(t,n){return{paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",fontFamily:"CirceRegular",fontSize:"18px",lineHeight:"calc(27 / 18)",display:"flex",alignItems:"center",cursor:"pointer",":hover":{backgroundColor:n.isSelected?"":"white",color:"#FF6596"},color:n.isSelected?"#FF6596":"#000000"}},menuList:function(t){return(0,d.Z)((0,d.Z)({},t),{},{"::-webkit-scrollbar":{width:"0px",height:"0px"}})}}})},Z=e(9513),C=e.n(Z),N=e(9040),y=function(t){var n=t,e=n.getDate()<10?n.getDate().toString().padStart(2,0):n.getDate(),a=n.getMonth()<10?(n.getMonth()+1).toString().padStart(2,0):n.getMonth()+1,i=n.getFullYear();return"".concat(i,"-").concat(a,"-").concat(e)};var S=e.p+"static/media/calendary.30bf32a7a4348ede2ce910569aedc915.svg",k=(e(8639),"calendar_field__pFy3H"),w="calendar_inputBox__MTg5O",I="calendar_icon__givQr",D=function(t){var n=t.stateDate,e=t.onChange,r=(0,i.useState)(new Date(n)),o=(0,a.Z)(r,2),s=o[0],c=o[1],l=(0,i.forwardRef)((function(t,n){var e=t.value,a=t.onClick;return(0,m.jsxs)("div",{className:w,children:[(0,m.jsx)("img",{className:I,src:S,alt:"Calendar icon"}),(0,m.jsx)("button",{className:k,type:"button",onClick:a,ref:n,children:e})]})}));return(0,m.jsx)(C(),{showIcon:!0,selected:s,onChange:function(t){c(t),e({type:"date",data:y(t)})},customInput:(0,m.jsx)(l,{}),dateFormat:"dd.MM.yyyy",maxDate:(0,N.default)(new Date,0)})},L=e(202),T=e(4925),F="secondary-button_button__pH-kF",M=["children","onBtnClick"],E=function(t){var n=t.children,e=t.onBtnClick,a=(0,T.Z)(t,M);return(0,m.jsx)("button",(0,d.Z)((0,d.Z)({className:F,onClick:e},a),{},{children:n}))},B={transactionDate:y(new Date),type:"INCOME",categoryId:"063f1132-ba5d-42b4-951d-44011ca46262",comment:"",amount:""},H="add-transaction-form_title__SjWKx",O="add-transaction-form_form__LgtGB",A="add-transaction-form_field__TQA7h",R="add-transaction-form_wrapper__5-Fxj",P="add-transaction-form_box__7ENrd",J="add-transaction-form_type__pMFfQ",Y="add-transaction-form_income__DJuca",z="add-transaction-form_expense__F2o6j",Q="add-transaction-form_inputBox__alIk5",G="add-transaction-form_icon__90jgj",K=function(t){var n=t.initialState,e=void 0===n?B:n,o=t.isEdit,s=void 0!==o&&o,c=t.onSubmit,l=t.setShowModal,d=(0,i.useState)(!0),u=(0,a.Z)(d,2),h=u[0],x=u[1],_=(0,f.Z)({initialState:e,onSubmit:c}),b=_.state,j=_.handleChange,Z=_.handleDataChange,C=_.handleSubmit,N=(0,r.v9)(p.u).filter((function(t){return"Income"!==t.name})),y=N.map((function(t){var n=t.id;return{label:t.name,value:n}})),k=b.transactionDate,w=b.type,I=b.comment,T=b.amount,F=b.categoryId,M=N.find((function(t){return t.id===F})),K="INCOME"===w?Y:J,V="EXPENSE"===w?z:J;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{className:H,children:"Add transaction"}),(0,m.jsxs)("form",{onSubmit:C,className:O,children:[s?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("p",{className:J,children:[(0,m.jsx)("span",{className:K,children:"Income"})," / ",(0,m.jsx)("span",{className:V,children:"Expense"})]}),"EXPENSE"===w&&(0,m.jsx)("input",{className:A,name:"categoryId",type:"text",value:M.name,disabled:!0})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{getChecked:function(t){x(t)},onClick:Z}),!h&&(0,m.jsx)(v,{options:y,onChange:Z})]}),(0,m.jsxs)("div",{className:R,children:[(0,m.jsx)("input",{className:A,name:"amount",type:"text",value:T,placeholder:"0.00",required:!0,onChange:j}),s?(0,m.jsxs)("div",{className:Q,children:[(0,m.jsx)("img",{className:G,src:S,alt:"Calendar icon"}),(0,m.jsx)("input",{className:A,name:"transactionDate",type:"text",value:k,disabled:!0})]}):(0,m.jsx)(D,{stateDate:k,onChange:Z})]}),(0,m.jsx)("input",{className:A,name:"comment",type:"text",value:I,placeholder:"Comment",onChange:j}),(0,m.jsxs)("div",{className:P,children:[(0,m.jsx)(L.Z,{children:s?"Save":"Add"}),(0,m.jsx)(E,{onBtnClick:function(){l(!1)},children:"Cancel"})]})]})]})},V="home-page_wrapper__bK12s",X="edit-button_button__Yx4Lp",W="edit-button_label__aO0tA",q=function(t){var n=t.id,e=t.onClick;return(0,m.jsx)("button",{className:X,onClick:function(){e(n)},children:(0,m.jsx)("span",{className:W,children:"Edit"})})},U="delete-button_button__NgmWc",$=function(t){var n=t.id,e=t.onClick;return(0,m.jsx)("button",{className:U,onClick:function(t){e(n)},children:"Delete"})},tt="TransactionsListItem_item__2cJuc",nt="TransactionsListItem_leftBox__ce6rj",et="TransactionsListItem_rightBox__9kbcH",at="TransactionsListItem_comment__TAPk9",it="TransactionsListItem_type__f-SmD",rt="TransactionsListItem_category__koP2G",ot="TransactionsListItem_date__Qj-Tk",st="TransactionsListItem_greenSum__Qn1cd",ct="TransactionsListItem_redSum__PO3vo",lt=function(t){var n=t.id,e=t.category,a=t.sum,i=t.date,r=t.type,o=t.comment,s=t.onEditBtnClick,c=t.onDeleteBtnClick,l=a.toFixed(2),d="INCOME"===r?"+":"-",u=new Date(i),h=u.getDate().toString().padStart(2,"0"),x=(u.getMonth()+1).toString().padStart(2,"0"),p=u.getFullYear().toString().slice(-2),f="".concat(h,".").concat(x,".").concat(p);return(0,m.jsxs)("li",{className:tt,children:[(0,m.jsxs)("div",{className:nt,children:[(0,m.jsx)("p",{className:ot,children:f}),(0,m.jsx)("p",{className:it,children:d}),(0,m.jsx)("p",{className:rt,children:e}),(0,m.jsx)("span",{className:at,children:o}),(0,m.jsx)("span",{className:"+"===d?st:ct,children:l})]}),(0,m.jsxs)("div",{className:et,children:[(0,m.jsx)(q,{onClick:function(){return s(n)}}),(0,m.jsx)($,{onClick:function(){return c(n)}})]})]})},dt=e(1433),ut={title:"TransactionsList_title__WxhBO",img:"TransactionsList_img__Ao3ri",titleText:"TransactionsList_titleText__-LLND",textLover:"TransactionsList_textLover__etjZW"},mt=e(9953),ht=(e(6035),function(){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),e=n[0],s=n[1],c=(0,i.useState)(""),l=(0,a.Z)(c,2),d=l[0],u=l[1],h=(0,i.useState)(!1),f=(0,a.Z)(h,2),_=f[0],g=f[1],b=(0,r.I0)(),j=(0,r.v9)(p.a),v=(0,r.v9)(p.u),Z=function(t){s(!0);var n=j.find((function(n){return n.id===t}));u(n),g(!0)},C=function(t){b((0,o.Ks)(t))},N=j.map((function(t){var n=t.id,e=t.transactionDate,a=t.type,i=t.categoryId,r=t.comment,o=t.amount,s=v.find((function(t){return t.id===i}));return(0,m.jsx)(lt,{id:n,category:s.name,sum:o,date:e,type:a,comment:r,onEditBtnClick:Z,onDeleteBtnClick:C},n)})),y=0===j.length?(0,m.jsxs)("div",{className:ut.boxNotFound,children:[(0,m.jsx)("p",{className:ut.titleText,children:"No Transactions yet"}),(0,m.jsx)("p",{className:ut.textLover,children:"Start transactions with your wallet.All transactions made will be displayed here."}),(0,m.jsx)("img",{src:dt,alt:"no transaction",className:ut.img})]}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:ut.title,children:[(0,m.jsx)("p",{children:"Date"}),(0,m.jsx)("p",{children:"Type"}),(0,m.jsx)("p",{children:"Category"}),(0,m.jsx)("p",{children:"Comment"}),(0,m.jsx)("p",{children:"Sum"})]}),(0,m.jsxs)(mt.Z,{style:{maxHeight:450},children:[" ",(0,m.jsxs)("div",{className:ut.list_box,children:[(0,m.jsx)("ul",{className:ut.list,children:N}),_&&(0,m.jsx)(x.Z,{onClose:function(){g(!1)},children:(0,m.jsx)(K,{initialState:d,isEdit:e,onSubmit:function(t){b((0,o.qJ)(t)),g(!1)},setShowModal:g})})]})]})]});return(0,m.jsxs)(m.Fragment,{children:["  ",y]})}),xt="TransactionsListMobileItem_box__vlaiC",pt="TransactionsListMobileItem_table__htwQH",ft="TransactionsListMobileItem_tbody__F5pGd",_t="TransactionsListMobileItem_body__9HSOO",gt="TransactionsListMobileItem_head__F5jZr",bt="TransactionsListMobileItem_green__zOM+Z",jt="TransactionsListMobileItem_red__aXhID",vt="TransactionsListMobileItem_greenSum__LLgfR",Zt="TransactionsListMobileItem_redSum__Lbaj7",Ct="TransactionsListMobileItem_edit__H4ItN",Nt="TransactionsListMobileItem_editBox__TIfdZ",yt=function(t){var n=t.id,e=t.category,a=t.sum,i=t.date,r=t.type,o=t.comment,s=t.onEditBtnClick,c=t.onDeleteBtnClick,l=a.toFixed(2),d=new Date(i),u=d.getDate().toString().padStart(2,"0"),h=(d.getMonth()+1).toString().padStart(2,"0"),x=d.getFullYear().toString().slice(-2),p="".concat(u,".").concat(h,".").concat(x),f="INCOME"===r?"+":"-";return(0,m.jsx)("div",{className:xt,children:(0,m.jsx)("table",{className:pt,children:(0,m.jsxs)("tbody",{className:ft,children:[(0,m.jsxs)("tr",{className:"+"===f?bt:jt,children:[(0,m.jsx)("td",{className:gt,children:"Date"}),(0,m.jsx)("td",{className:_t,children:p})]}),(0,m.jsxs)("tr",{className:"+"===f?bt:jt,children:[(0,m.jsx)("td",{className:gt,children:"Type"}),(0,m.jsx)("td",{className:_t,children:f})]}),(0,m.jsxs)("tr",{className:"+"===f?bt:jt,children:[(0,m.jsx)("td",{className:gt,children:"Category"}),(0,m.jsx)("td",{className:_t,children:e})]}),(0,m.jsxs)("tr",{className:"+"===f?bt:jt,children:[(0,m.jsx)("td",{className:gt,children:"Comment"}),(0,m.jsx)("td",{className:_t,children:o})]}),(0,m.jsxs)("tr",{className:"+"===f?bt:jt,children:[(0,m.jsx)("td",{className:gt,children:"Sum"}),(0,m.jsx)("td",{className:"+"===f?vt:Zt,children:l})]}),(0,m.jsxs)("tr",{className:"+"===f?bt:jt,children:[(0,m.jsx)("td",{className:gt,children:(0,m.jsx)($,{onClick:function(){return c(n)}})}),(0,m.jsx)("td",{className:_t,children:(0,m.jsxs)("div",{className:Nt,children:[(0,m.jsx)(q,{onClick:function(){return s(n)}}),(0,m.jsx)("span",{onClick:function(){return s(n)},className:Ct,children:"Edit"})]})})]})]})})})},St=function(){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),e=n[0],s=n[1],c=(0,i.useState)(""),l=(0,a.Z)(c,2),d=l[0],u=l[1],h=(0,i.useState)(!1),f=(0,a.Z)(h,2),_=f[0],g=f[1],b=(0,r.I0)(),j=(0,r.v9)(p.a),v=(0,r.v9)(p.u),Z=function(t){s(!0);var n=j.find((function(n){return n.id===t}));u(n),g(!0)},C=function(t){b((0,o.Ks)(t))},N=j.map((function(t){var n=t.id,e=t.transactionDate,a=t.type,i=t.categoryId,r=t.comment,o=t.amount,s=v.find((function(t){return t.id===i}));return(0,m.jsx)(yt,{id:n,category:s.name,sum:o,date:e,type:a,comment:r,onEditBtnClick:Z,onDeleteBtnClick:C},n)}));return(0,m.jsxs)(m.Fragment,{children:[" ",N,_&&(0,m.jsx)(x.Z,{onClose:function(){g(!1)},children:(0,m.jsx)(K,{initialState:d,isEdit:e,onSubmit:function(t){b((0,o.qJ)(t)),g(!1)},setShowModal:g})})," "]})},kt=e(3845),wt=e(1926),It=function(){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),e=n[0],d=n[1],u=(0,r.I0)();(0,i.useEffect)((function(){u((0,o.tG)()),u((0,o._v)()),u((0,s.I)({month:c.i,year:l.t}))}),[u]);var p=(0,kt.Z)("(min-width: 768px)"),f=(0,kt.Z)("(max-width: 767px)");return(0,m.jsxs)("div",{className:V,children:[f&&(0,m.jsx)(wt.Z,{}),p&&(0,m.jsx)(ht,{setShowModal:d}),f&&(0,m.jsx)(St,{}),(0,m.jsx)(h,{type:"button",onBtnClick:function(){d(!0)}}),e&&(0,m.jsx)(x.Z,{onClose:function(){d(!1)},children:(0,m.jsx)(K,{onSubmit:function(t){u((0,o.dT)(t)),d(!1)},setShowModal:d})})]})}},8310:function(t,n,e){var a=e(1413),i=e(9439),r=e(9976),o=e(2791),s=e(3177),c=e(3845),l=e(3329);n.Z=function(t){var n=t.options,e=void 0===n?[]:n,d=t.startValue,u=t.onChange,m=(0,c.Z)("(min-width: 768px)"),h=(0,c.Z)("(min-width: 1280px)"),x=(0,o.useState)(d),p=(0,i.Z)(x,2),f=p[0],_=p[1],g="100%";return h?g="182px":m&&(g="160px"),(0,l.jsx)(r.ZP,{options:e,components:{DropdownIndicator:s.Z},value:f,onChange:function(t){_(t),u(t.value)},styles:{control:function(t){return(0,a.Z)((0,a.Z)({},t),{},{width:g,height:"50px",border:"1px solid #000000",borderRadius:"30px",cursor:"pointer",transition:"background-color 400ms",backgroundColor:"transparent","&:hover":null,boxShadow:"none"})},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{paddingRight:"10px"}},dropdownIndicator:function(t,n){return(0,a.Z)((0,a.Z)({},t),{},{transform:n.isFocused?"rotate(180deg)":"",transition:"transform 400ms"})},valueContainer:function(t){return(0,a.Z)((0,a.Z)({},t),{},{paddingLeft:"16px"})},singleValue:function(t){return(0,a.Z)((0,a.Z)({},t),{},{fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)"})},menu:function(t){return(0,a.Z)((0,a.Z)({},t),{},{margin:0,width:g,backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"20px",overflow:"hidden"})},option:function(t,n){return{paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)",cursor:"pointer",":hover":{backgroundColor:"white"},color:n.isSelected?"#FF6596":"#000000"}},menuList:function(t){return(0,a.Z)((0,a.Z)({},t),{},{"::-webkit-scrollbar":{width:"0px",height:"0px"}})}}})}},3177:function(t,n,e){var a=e(1413),i=e(3646),r=e(3329);n.Z=function(t){return(0,r.jsx)(i.c.DropdownIndicator,(0,a.Z)((0,a.Z)({},t),{},{children:(0,r.jsx)("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M1 1L10 10L19 1",stroke:"black"})})}))}},202:function(t,n,e){e.d(n,{Z:function(){return c}});var a=e(1413),i=e(4925),r="primary-button_button__YlxDi",o=e(3329),s=["children"],c=function(t){var n=t.children,e=(0,i.Z)(t,s);return(0,o.jsx)("button",(0,a.Z)((0,a.Z)({className:r},e),{},{children:n}))}},158:function(t,n,e){var a=e(4942),i=e(1413),r=e(9439),o=e(2791);n.Z=function(t){var n=t.initialState,e=t.onSubmit,s=(0,o.useState)((0,i.Z)({},n)),c=(0,r.Z)(s,2),l=c[0],d=c[1];return{state:l,setState:d,handleChange:function(t){var n=t.target;d((function(t){var e=n.name,r=n.value,o=n.checked,s="checkbox"===n.type?o:r;return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},e,s))}))},handleDataChange:function(t){var n=t.type,e=t.data;"date"===n&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{transactionDate:e})})),"type"===n&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{type:e})})),"category"===n&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categoryId:e})}))},handleSubmit:function(t){t.preventDefault(),e((0,i.Z)({},l)),d((0,i.Z)({},n))}}}},1433:function(t,n,e){t.exports=e.p+"static/media/wallett.efcc2a8f028fbcc6331e.png"}}]);
//# sourceMappingURL=206.882f4eeb.chunk.js.map