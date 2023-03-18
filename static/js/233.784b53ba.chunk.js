"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[233],{1233:function(e,n,a){a.r(n),a.d(n,{default:function(){return z}});var t=a(2791),s=a(601),l=a(362),i=a(5390),r=a(1048),o=a(7684),u=a(5667),c=a(3329),d=[{name:"A",value:1e4},{name:"B",value:2e3},{name:"C",value:3e3},{name:"D",value:4e3},{name:"E",value:5e3},{name:"F",value:6e3},{name:"G",value:7e3},{name:"J",value:8e3},{name:"K",value:9e3},{name:"L",value:8e3}],x=["#ffad90","#fed057","#ffd8d0","#fd9498","#c5baff","#6e78e8","#4a56e2","#81e1ff","#24cca7","#00ad84"],p=function(){return(0,c.jsx)(s.h,{width:"100%",height:400,children:(0,c.jsxs)(l.u,{children:[(0,c.jsxs)(i.b,{data:d,cx:120,cy:200,innerRadius:60,outerRadius:80,fill:"#8884d8",dataKey:"value",children:[d.map((function(e,n){return(0,c.jsx)(r.b,{fill:x[n%x.length]},"cell-".concat(n))})),(0,c.jsx)(o._,{value:"\u0412\u0430\u0448 \u0411\u0430\u043b\u0430\u043d\u0441",position:"center"})]}),(0,c.jsx)(u.u,{})]})})},m=a(9439),h=a(1413),f=a(9976),v=a(3646),b=a(3845),g=function(e){return(0,c.jsx)(v.c.DropdownIndicator,(0,h.Z)((0,h.Z)({},e),{},{children:(0,c.jsx)("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M1 1L10 10L19 1",stroke:"black"})})}))},_=function(e){var n=e.options,a=void 0===n?[]:n,s=e.startValue,l=e.onChange,i=(0,b.Z)("(min-width: 768px)"),r=(0,t.useState)(s),o=(0,m.Z)(r,2),u=o[0],d=o[1];return(0,c.jsx)(f.ZP,{options:a,maxMenuHeight:157,components:{DropdownIndicator:g},value:u,onChange:function(e){d(e),l(e.value)},styles:{control:function(e){return(0,h.Z)((0,h.Z)({},e),{},{width:i?"160px":"100%",height:"50px",border:"1px solid #000000",borderRadius:"30px",cursor:"pointer",transition:"background-color 400ms",backgroundColor:"transparent","&:hover":null,boxShadow:"none"})},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{paddingRight:"10px"}},dropdownIndicator:function(e,n){return(0,h.Z)((0,h.Z)({},e),{},{transform:n.isFocused?"rotate(180deg)":"",transition:"transform 400ms"})},valueContainer:function(e){return(0,h.Z)((0,h.Z)({},e),{},{paddingLeft:"16px"})},singleValue:function(e){return(0,h.Z)((0,h.Z)({},e),{},{fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)"})},menu:function(e){return(0,h.Z)((0,h.Z)({},e),{},{width:i?"160px":"100%",padding:"12px 0",backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"20px"})},option:function(e,n){return{paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)",cursor:"pointer",":hover":{backgroundColor:n.isSelected?"":"white"},backgroundColor:n.isSelected?"#24CCA7":"",color:n.isSelected?"#ffffff":"#000000"}},menuList:function(e){return(0,h.Z)((0,h.Z)({},e),{},{"::-webkit-scrollbar":{width:"0px",height:"0px"}})}}})},j=[{label:"January",value:1},{label:"Fabruary",value:2},{label:"March",value:3},{label:"April",value:4},{label:"May",value:5},{label:"June",value:6},{label:"July",value:7},{label:"August",value:8},{label:"September",value:9},{label:"October",value:10},{label:"November",value:11},{label:"December",value:12}],w={label:"Select month",value:""},C=function(){return(0,c.jsx)(_,{options:j,startValue:w,onChange:function(e){console.log("month value",e)}})},Z={label:"Select year",value:""},N=function(){for(var e=[],n=1900;n<=2023;n++){var a={label:n.toString(),value:n};e.push(a)}return e.sort((function(e,n){return n.value-e.value}))}(),k=function(){return(0,c.jsx)(_,{options:N,startValue:Z,onChange:function(e){console.log("year value",e)}})},y="statistic-page_wrapper__3NCz0",L="statistic-page_box__R9clj",S="statistic-page_innerBox__EzIzt",E={item:"ExpensesListItem_item__Q9sIu"},R=function(e){var n=e.category,a=e.sum;return(0,c.jsxs)("li",{className:E.item,children:[(0,c.jsx)("p",{className:n,children:n}),(0,c.jsx)("span",{className:E.summ,children:a})]})},I=a(106),T=a(9434),F={title:"ExpensesList_title__di2V5",list:"ExpensesList_list__ZYVuK",income:"ExpensesList_income__DAXR-",expenses:"ExpensesList_expenses__BqR0w",text:"ExpensesList_text__f0YUQ",expensesText:"ExpensesList_expensesText__KddqH",incomeText:"ExpensesList_incomeText__0lmQ9"},V=function(){var e=(0,T.v9)(I.u).slice(0,-1).map((function(e){return(0,c.jsx)(R,{category:e.name,sum:e.sum},e.id)}));return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:F.title,children:[(0,c.jsx)("p",{children:"Category"}),(0,c.jsx)("p",{children:"Sum"})]}),(0,c.jsxs)("div",{className:F.list_box,children:[(0,c.jsx)("ul",{className:F.list,children:e}),(0,c.jsxs)("div",{className:F.expenses,children:[(0,c.jsx)("p",{className:F.text,children:"Expenses:"}),(0,c.jsx)("span",{className:F.expensesText,children:"25000"})]}),(0,c.jsxs)("div",{className:F.income,children:[(0,c.jsx)("p",{className:F.text,children:"Income:"}),(0,c.jsx)("span",{className:F.incomeText,children:"27000"})]})]})]})},z=function(){return(0,c.jsxs)("div",{className:y,children:[(0,c.jsx)(p,{}),(0,c.jsxs)("div",{className:L,children:[(0,c.jsxs)("div",{className:S,children:[(0,c.jsx)(C,{}),(0,c.jsx)(k,{})]}),(0,c.jsx)(V,{})]})]})}}}]);
//# sourceMappingURL=233.784b53ba.chunk.js.map