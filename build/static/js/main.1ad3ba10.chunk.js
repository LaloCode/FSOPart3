(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=t(4),l=t(2),i=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"success"},n)},m=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},s=function(e){var n=e.person,t=e.filter,a=e.handleDelete;return n.name.toLowerCase().includes(t.toLowerCase())?r.a.createElement("div",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){a(n.name)}}," delete ")):null},f=function(e){var n=e.persons,t=e.filter,a=e.handleDelete;return r.a.createElement("div",null,n.map((function(e,n){return r.a.createElement(s,{key:n,person:e,filter:t,handleDelete:a})})))},d=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:e.filter,onChange:e.handleFilterOnChange}))},h=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handlePersonOnChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberOnChange})),r.a.createElement("button",{type:"submit"},"add"))},b=t(3),p=t.n(b),v=function(){return p.a.get("/api/persons").then((function(e){return e.data}))},E=function(e){return p.a.post("/api/persons",e).then((function(e){return e.data}))},O=function(e){var n="http://localhost:3001/persons/".concat(e);return p.a.delete(n).then((function(e){return e.data}))},g=function(e,n){return p.a.put("".concat("/api/persons","/").concat(e),n).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),b=s[0],p=s[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),C=j[0],N=j[1],k=Object(a.useState)(""),S=Object(l.a)(k,2),D=S[0],y=S[1],P=Object(a.useState)(null),T=Object(l.a)(P,2),F=T[0],I=T[1],J=Object(a.useState)(null),L=Object(l.a)(J,2),x=L[0],A=L[1];Object(a.useEffect)((function(){v().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(i,{message:F}),r.a.createElement(m,{message:x}),r.a.createElement(d,{filter:D,handleFilterOnChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(h,{addPerson:function(e){e.preventDefault();var n={name:b,number:C};if(t.some((function(e){return e.name===b}))){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===b})),r=Object(o.a)(Object(o.a)({},a),{},{number:C});g(r.id,r).then((function(e){u(t.map((function(n){return n.id!==r.id?n:e}))),I("Updated ".concat(e.name)),setTimeout((function(){I(null)}),5e3)})).catch((function(e){A("Information of ".concat(b," has already been removed from server")),setTimeout((function(){A(null)}),5e3)}))}}else E(n).then((function(e){u(t.concat(e)),p(""),N(""),I("Added ".concat(e.name)),setTimeout((function(){I(null)}),5e3)}))},newName:b,handlePersonOnChange:function(e){p(e.target.value)},newNumber:C,handleNumberOnChange:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{persons:t,filter:D,handleDelete:function(e){if(window.confirm("Delete ".concat(e,"?"))){var n=t.find((function(n){return n.name===e}));O(n.id),u(t.reduce((function(e,t){return t.name!==n.name&&e.push(t),e}),[]))}}}))};t(37);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1ad3ba10.chunk.js.map