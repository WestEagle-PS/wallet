"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{7211:function(t,e,n){n.r(e),n.d(e,{default:function(){return kt}});var a=n(9439),i=n(2791),s=n(9434),r=n(2423),o=n(1413),c="add-button_button__eKi4A",l=n(3329),d=function(t){var e=t.onBtnClick,n=t.props;return(0,l.jsx)("button",(0,o.Z)({className:c,onClick:e},n))},u=n(4274),m=n(106),h=n(158),x={wrapper:"toggle-button_wrapper__gTPXH",switch:"toggle-button_switch__fUAC9",checked:"toggle-button_checked__0nEhj",slider:"toggle-button_slider__m+yY+",round:"toggle-button_round__B7MoG"},_=function(t){var e=t.getChecked,n=t.onClick,s=(0,i.useState)(!1),r=(0,a.Z)(s,2),o=r[0],c=r[1],d=o?"".concat(x.switch," ").concat(x.checked):x.switch;return(0,l.jsx)("div",{className:x.wrapper,children:(0,l.jsxs)("label",{className:d,children:[(0,l.jsx)("input",{className:x.checkbox,type:"checkbox",checked:o,onChange:function(){if(e(o),o)return n({type:"type",data:"INCOME"}),void c((function(t){return!t}));n({type:"type",data:"EXPENSE"}),c((function(t){return!t}))}}),(0,l.jsx)("span",{className:x.slider+" "+x.round})]})})},p=n(9976),f=n(3177),g=function(t){var e=t.options,n=void 0===e?[]:e,s=t.onChange,r=(0,i.useState)(null),c=(0,a.Z)(r,2),d=c[0],u=c[1];return(0,l.jsx)(p.ZP,{options:n,components:{DropdownIndicator:f.Z},value:d,placeholder:"Select a category",onChange:function(t){u(t),s({type:"category",data:t.value})},styles:{placeholder:function(t){return(0,o.Z)((0,o.Z)({},t),{},{fontFamily:"CirceRegular",color:"#BDBDBD",fontSize:"18px",lineHeight:"calc(27 / 18)"})},control:function(t){return(0,o.Z)((0,o.Z)({},t),{},{width:"100%",height:"32px",border:"none",borderBottom:"1px solid #E0E0E0",cursor:"pointer",backgroundColor:"transparent","&:hover":null,boxShadow:"none"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(t,e){return(0,o.Z)((0,o.Z)({},t),{},{transform:e.isFocused?"rotate(180deg)":"",transition:"transform 400ms"})},singleValue:function(t){return(0,o.Z)((0,o.Z)({},t),{},{fontFamily:"CirceRegular",color:"#000000",fontSize:"18px",lineHeight:"calc(27 / 18)"})},menu:function(t){return(0,o.Z)((0,o.Z)({},t),{},{margin:0,width:"100%",padding:"12px 0",backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"20px",overflow:"hidden"})},option:function(t,e){return{paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",fontFamily:"CirceRegular",fontSize:"18px",lineHeight:"calc(27 / 18)",display:"flex",alignItems:"center",cursor:"pointer",":hover":{backgroundColor:e.isSelected?"":"white",color:"#FF6596"},color:e.isSelected?"#FF6596":"#000000"}},menuList:function(t){return(0,o.Z)((0,o.Z)({},t),{},{"::-webkit-scrollbar":{width:"0px",height:"0px"}})}}})},j=n(9513),v=n.n(j),b=n(9040),N=function(t){var e=t,n=e.getDate()<10?e.getDate().toString().padStart(2,0):e.getDate(),a=e.getMonth()<10?(e.getMonth()+1).toString().padStart(2,0):e.getMonth()+1,i=e.getFullYear();return"".concat(i,"-").concat(a,"-").concat(n)};var S=n.p+"static/media/calendary.30bf32a7a4348ede2ce910569aedc915.svg",Z=(n(8639),"calendar_field__pFy3H"),y="calendar_inputBox__MTg5O",C="calendar_icon__givQr",k=function(t){var e=t.stateDate,n=t.onChange,s=(0,i.useState)(new Date(e)),r=(0,a.Z)(s,2),o=r[0],c=r[1],d=(0,i.forwardRef)((function(t,e){var n=t.value,a=t.onClick;return(0,l.jsxs)("div",{className:y,children:[(0,l.jsx)("img",{className:C,src:S,alt:"Calendar icon"}),(0,l.jsx)("button",{className:Z,type:"button",onClick:a,ref:e,children:n})]})}));return(0,l.jsx)(v(),{showIcon:!0,selected:o,onChange:function(t){c(t),n({type:"date",data:N(t)})},customInput:(0,l.jsx)(d,{}),dateFormat:"dd.MM.yyyy",maxDate:(0,b.default)(new Date,0)})},w=n(202),D=n(4925),I="secondary-button_button__pH-kF",T=["children","onBtnClick"],L=function(t){var e=t.children,n=t.onBtnClick,a=(0,D.Z)(t,T);return(0,l.jsx)("button",(0,o.Z)((0,o.Z)({className:I,onClick:n},a),{},{children:e}))},E={transactionDate:N(new Date),type:"INCOME",categoryId:"063f1132-ba5d-42b4-951d-44011ca46262",comment:"",amount:""},M="add-transaction-form_title__SjWKx",F="add-transaction-form_form__LgtGB",B="add-transaction-form_field__TQA7h",A="add-transaction-form_wrapper__5-Fxj",O="add-transaction-form_box__7ENrd",H="add-transaction-form_type__pMFfQ",P="add-transaction-form_income__DJuca",Q="add-transaction-form_expense__F2o6j",R="add-transaction-form_inputBox__alIk5",Y="add-transaction-form_icon__90jgj",q=function(t){var e=t.initialState,n=void 0===e?E:e,r=t.isEdit,o=void 0!==r&&r,c=t.onSubmit,d=t.setShowModal,u=t.titleEdit,x=(0,i.useState)(!0),p=(0,a.Z)(x,2),f=p[0],j=p[1],v=(0,h.Z)({initialState:n,onSubmit:c}),b=v.state,N=v.handleChange,Z=v.handleDataChange,y=v.handleSubmit,C=(0,s.v9)(m.us).filter((function(t){return"Income"!==t.name})),D=C.map((function(t){var e=t.id;return{label:t.name,value:e}})),I=b.transactionDate,T=b.type,q=b.comment,G=b.amount,K=b.categoryId,X=C.find((function(t){return t.id===K})),z="INCOME"===T?P:H,J="EXPENSE"===T?Q:H;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:M,children:u||"Add transaction"}),(0,l.jsxs)("form",{onSubmit:y,className:F,children:[o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:H,children:[(0,l.jsx)("span",{className:z,children:"Income"})," / ",(0,l.jsx)("span",{className:J,children:"Expense"})]}),"EXPENSE"===T&&(0,l.jsx)("input",{className:B,name:"categoryId",type:"text",value:X.name,disabled:!0})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_,{getChecked:function(t){j(t)},onClick:Z}),!f&&(0,l.jsx)(g,{options:D,onChange:Z})]}),(0,l.jsxs)("div",{className:A,children:[(0,l.jsx)("input",{className:B,name:"amount",type:"text",value:G,placeholder:"0.00",required:!0,onChange:N}),o?(0,l.jsxs)("div",{className:R,children:[(0,l.jsx)("img",{className:Y,src:S,alt:"Calendar icon"}),(0,l.jsx)("input",{className:B,name:"transactionDate",type:"text",value:I,disabled:!0})]}):(0,l.jsx)(k,{stateDate:I,onChange:Z})]}),(0,l.jsx)("input",{className:B,name:"comment",type:"text",value:q,placeholder:"Comment",onChange:N}),(0,l.jsxs)("div",{className:O,children:[(0,l.jsx)(w.Z,{children:o?"Save":"Add"}),(0,l.jsx)(L,{onBtnClick:function(){d(!1)},children:"Cancel"})]})]})]})},G="home-page_wrapper__bK12s",K=n(3433),X="edit-button_button__Yx4Lp",z="edit-button_label__aO0tA",J=function(t){var e=t.id,n=t.onClick;return(0,l.jsx)("button",{className:X,onClick:function(){n(e)},children:(0,l.jsx)("span",{className:z,children:"Edit"})})},W="delete-button_button__NgmWc",U=function(t){var e=t.id,n=t.onClick;return(0,l.jsx)("button",{className:W,onClick:function(t){n(e)},children:"Delete"})},V="TransactionsListItem_item__2cJuc",$="TransactionsListItem_leftBox__ce6rj",tt="TransactionsListItem_rightBox__9kbcH",et="TransactionsListItem_comment__TAPk9",nt="TransactionsListItem_sum__5Aw2P",at="TransactionsListItem_type__f-SmD",it="TransactionsListItem_category__koP2G",st="TransactionsListItem_date__Qj-Tk",rt="TransactionsListItem_greenSum__Qn1cd",ot="TransactionsListItem_redSum__PO3vo",ct=function(t){var e=t.id,n=t.category,a=t.sum,i=t.date,s=t.type,r=t.comment,o=t.onEditBtnClick,c=t.onDeleteBtnClick,d=Number(a.toFixed(2)).toLocaleString().replaceAll(",","."),u="INCOME"===s?"+":"-",m=new Date(i),h=m.getDate().toString().padStart(2,"0"),x=(m.getMonth()+1).toString().padStart(2,"0"),_=m.getFullYear().toString().slice(-2),p="".concat(h,".").concat(x,".").concat(_);return(0,l.jsxs)("li",{className:V,children:[(0,l.jsxs)("div",{className:$,children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:st,children:p})}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:at,children:u})}),(0,l.jsxs)("div",{children:[" ",(0,l.jsxs)("p",{className:it,children:[" ",null!==n&&void 0!==n&&n.name?n.name:"Unknown"]})]}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:et,children:r})})]}),(0,l.jsx)("div",{className:nt,children:(0,l.jsx)("span",{className:"+"===u?rt:ot,children:d})}),(0,l.jsxs)("div",{className:tt,children:[(0,l.jsx)(J,{onClick:function(){return o(e)}}),(0,l.jsx)(U,{onClick:function(){return c(e)}})]})]})},lt=n(1433),dt={title:"TransactionsList_title__WxhBO",img:"TransactionsList_img__Ao3ri",titleText:"TransactionsList_titleText__-LLND",textLover:"TransactionsList_textLover__etjZW"},ut=n(9953),mt=(n(6035),function(){var t=(0,i.useState)(!1),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,i.useState)({}),h=(0,a.Z)(d,2),x=h[0],_=h[1],p=(0,i.useState)(null),f=(0,a.Z)(p,2),g=f[0],j=f[1],v=(0,i.useState)(!1),b=(0,a.Z)(v,2),N=b[0],S=b[1],Z=(0,s.I0)(),y=(0,s.v9)(m.aQ),C=(0,s.v9)(m.us),k=function(t){c(!0);var e=y&&y.find((function(e){return e.id===t}));j(e.amount),(null===e||void 0===e?void 0:e.amount)<0?_((function(){_((0,o.Z)((0,o.Z)({},e),{},{amount:-1*e.amount}))})):_(e),S(!0)},w=function(t){var e=y.find((function(e){return e.id===t}));Z((0,r.Ks)(e))},D=(0,K.Z)(y);D.sort((function(t,e){var n=new Date(t.transactionDate);return new Date(e.transactionDate).getTime()-n.getTime()}));var I=D&&D.map((function(t){var e=t.id,n=t.transactionDate,a=t.type,i=t.categoryId,s=t.comment,r=t.amount,o=C&&C.find((function(t){return t.id===i}));return r&&r<0&&(r*=-1),(0,l.jsx)(ct,{id:e,category:o,sum:r,date:n,type:a,comment:s,onEditBtnClick:k,onDeleteBtnClick:w},e)})),T=0===D.length?(0,l.jsxs)("div",{className:dt.boxNotFound,children:[(0,l.jsx)("p",{className:dt.titleText,children:"No Transactions yet"}),(0,l.jsx)("p",{className:dt.textLover,children:"Start transactions with your wallet.All transactions made will be displayed here."}),(0,l.jsx)("img",{src:lt,alt:"no transaction",className:dt.img})]}):(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:dt.title,children:[(0,l.jsx)("p",{children:"Date"}),(0,l.jsx)("p",{children:"Type"}),(0,l.jsx)("p",{children:"Category"}),(0,l.jsx)("p",{children:"Comment"}),(0,l.jsx)("p",{children:"Sum"})]}),(0,l.jsxs)(ut.Z,{style:{maxHeight:450},children:[" ",(0,l.jsxs)("div",{className:dt.list_box,children:[(0,l.jsx)("ul",{className:dt.list,children:I}),N&&(0,l.jsx)(u.Z,{onClose:function(){S(!1)},children:(0,l.jsx)(q,{titleEdit:"Edit transaction",initialState:x,isEdit:n,onSubmit:function(t){var e=(0,o.Z)((0,o.Z)({},t),{},{oldAmount:g});Z((0,r.qJ)(e)),S(!1)},setShowModal:S})})]})]})]});return(0,l.jsxs)(l.Fragment,{children:[" ",T]})}),ht="TransactionsListMobileItem_box__vlaiC",xt="TransactionsListMobileItem_table__htwQH",_t="TransactionsListMobileItem_tbody__F5pGd",pt="TransactionsListMobileItem_body__9HSOO",ft="TransactionsListMobileItem_head__F5jZr",gt="TransactionsListMobileItem_green__zOM+Z",jt="TransactionsListMobileItem_red__aXhID",vt="TransactionsListMobileItem_greenSum__LLgfR",bt="TransactionsListMobileItem_redSum__Lbaj7",Nt="TransactionsListMobileItem_editBox__TIfdZ",St=function(t){var e=t.id,n=t.category,a=t.sum,i=t.date,s=t.type,r=t.comment,o=t.onEditBtnClick,c=t.onDeleteBtnClick,d=a.toFixed(2),u=new Date(i),m=u.getDate().toString().padStart(2,"0"),h=(u.getMonth()+1).toString().padStart(2,"0"),x=u.getFullYear().toString().slice(-2),_="".concat(m,".").concat(h,".").concat(x),p="INCOME"===s?"+":"-";return(0,l.jsx)("div",{className:ht,children:(0,l.jsx)("table",{className:xt,children:(0,l.jsxs)("tbody",{className:_t,children:[(0,l.jsxs)("tr",{className:"+"===p?gt:jt,children:[(0,l.jsx)("td",{className:ft,children:"Date"}),(0,l.jsx)("td",{className:pt,children:_})]}),(0,l.jsxs)("tr",{className:"+"===p?gt:jt,children:[(0,l.jsx)("td",{className:ft,children:"Type"}),(0,l.jsx)("td",{className:pt,children:p})]}),(0,l.jsxs)("tr",{className:"+"===p?gt:jt,children:[(0,l.jsx)("td",{className:ft,children:"Category"}),(0,l.jsx)("td",{className:pt,children:null!==n&&void 0!==n&&n.name?n.name:"unknown"})]}),(0,l.jsxs)("tr",{className:"+"===p?gt:jt,children:[(0,l.jsx)("td",{className:ft,children:"Comment"}),(0,l.jsx)("td",{className:pt,children:r})]}),(0,l.jsxs)("tr",{className:"+"===p?gt:jt,children:[(0,l.jsx)("td",{className:ft,children:"Sum"}),(0,l.jsx)("td",{className:"+"===p?vt:bt,children:d})]}),(0,l.jsxs)("tr",{className:"+"===p?gt:jt,children:[(0,l.jsx)("td",{className:ft,children:(0,l.jsx)(U,{onClick:function(){return c(e)}})}),(0,l.jsx)("td",{className:pt,children:(0,l.jsx)("div",{className:Nt,children:(0,l.jsx)(J,{onClick:function(){return o(e)}})})})]})]})})})},Zt=function(){var t=(0,i.useState)(!1),e=(0,a.Z)(t,2),n=e[0],o=e[1],c=(0,i.useState)(""),d=(0,a.Z)(c,2),h=d[0],x=d[1],_=(0,i.useState)(!1),p=(0,a.Z)(_,2),f=p[0],g=p[1],j=(0,s.I0)(),v=(0,s.v9)(m.aQ),b=(0,s.v9)(m.us),N=function(t){o(!0);var e=v.find((function(e){return e.id===t}));x(e),g(!0)},S=function(t){j((0,r.Ks)(t))},Z=(0,K.Z)(v);Z.sort((function(t,e){var n=new Date(t.transactionDate);return new Date(e.transactionDate).getTime()-n.getTime()}));var y=Z.map((function(t){var e=t.id,n=t.transactionDate,a=t.type,i=t.categoryId,s=t.comment,r=t.amount,o=b.find((function(t){return t.id===i}));return(0,l.jsx)(St,{id:e,category:o,sum:r,date:n,type:a,comment:s,onEditBtnClick:N,onDeleteBtnClick:S},e)}));return(0,l.jsxs)(l.Fragment,{children:[" ",y,f&&(0,l.jsx)(u.Z,{onClose:function(){g(!1)},children:(0,l.jsx)(q,{initialState:h,isEdit:n,onSubmit:function(t){j((0,r.qJ)(t)),g(!1)},setShowModal:g})})," "]})},yt=n(3845),Ct=n(1926),kt=function(){var t=(0,i.useState)(!1),e=(0,a.Z)(t,2),n=e[0],o=e[1],c=(0,s.I0)();(0,i.useEffect)((function(){c((0,r.tG)()),c((0,r._v)())}),[c]);var m=(0,yt.Z)("(min-width: 768px)"),h=(0,yt.Z)("(max-width: 767px)");return(0,l.jsxs)("div",{className:G,children:[h&&(0,l.jsx)(Ct.Z,{}),m&&(0,l.jsx)(mt,{setShowModal:o}),h&&(0,l.jsx)(Zt,{}),(0,l.jsx)(d,{type:"button",onBtnClick:function(){o(!0)}}),n&&(0,l.jsx)(u.Z,{onClose:function(){o(!1)},children:(0,l.jsx)(q,{onSubmit:function(t){c((0,r.dT)(t)),o(!1)},setShowModal:o})})]})}},3177:function(t,e,n){var a=n(1413),i=n(3646),s=n(3329);e.Z=function(t){return(0,s.jsx)(i.c.DropdownIndicator,(0,a.Z)((0,a.Z)({},t),{},{children:(0,s.jsx)("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1 1L10 10L19 1",stroke:"black"})})}))}},202:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(1413),i=n(4925),s="primary-button_button__YlxDi",r=n(3329),o=["children"],c=function(t){var e=t.children,n=(0,i.Z)(t,o);return(0,r.jsx)("button",(0,a.Z)((0,a.Z)({className:s},n),{},{children:e}))}},158:function(t,e,n){var a=n(4942),i=n(1413),s=n(9439),r=n(2007),o=n.n(r),c=n(2791),l=function(t){var e=t.initialState,n=t.onSubmit,r=(0,c.useState)((0,i.Z)({},e)),o=(0,s.Z)(r,2),l=o[0],d=o[1];return{state:l,setState:d,handleChange:function(t){var e=t.target;d((function(t){var n=e.name,s=e.value,r=e.checked,o="checkbox"===e.type?r:s;return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},n,o))}))},handleDataChange:function(t){var e=t.type,n=t.data;"date"===e&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{transactionDate:n})})),"type"===e&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{type:n})})),"category"===e&&d((function(t){return(0,i.Z)((0,i.Z)({},t),{},{categoryId:n})}))},handleSubmit:function(t){t.preventDefault(),n((0,i.Z)({},l)),d((0,i.Z)({},e))}}};e.Z=l,l.propTypes={initialState:o().object.isRequired,onSubmit:o().func.isRequired}},1433:function(t,e,n){t.exports=n.p+"static/media/wallett.efcc2a8f028fbcc6331e.png"}}]);
//# sourceMappingURL=206.4a43f384.chunk.js.map