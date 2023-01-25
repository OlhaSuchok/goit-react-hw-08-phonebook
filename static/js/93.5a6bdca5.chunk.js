"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[93],{4093:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var o,r,i,a,s,c,u,l,p,d,x=t(9439),f=t(2791),m=t(9434),h=t(6881),g=t(8174),b=(t(5462),t(168)),y=t(3081),w=t(8820),v=y.Z.div(o||(o=(0,b.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(247, 242, 242, 0.2);\n  border: 2px solid ",";\n  border-radius: 4px;\n  padding: 16px 4px;\n"])),(function(n){return n.theme.colors.border})),Z=y.Z.h1(r||(r=(0,b.Z)(["\n  text-align: center;\n  margin-bottom: ","px;\n  margin-top: 60px;\n  color: lightcyan;\n  font-size: 36px;\n  font-family: cursive;\n"])),(function(n){return n.theme.space[7]})),j=y.Z.form(i||(i=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n"]))),z=y.Z.label(a||(a=(0,b.Z)(["\n  font-family: cursive;\n  font-size: 18px;\n  color: whitesmoke;\n  text-decoration: none;\n  margin-bottom: 4px;\n"]))),k=y.Z.input(s||(s=(0,b.Z)(["\n  border: 2px solid ",";\n  border-radius: 4px;\n  width: 350px;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n\n  background-color: ",";\n\n  margin-bottom: ","px;\n  padding: 6px 10px;\n  margin-bottom: 16px;\n\n  &:hover {\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:focus {\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  &::placeholder {\n    font-family: cursive;\n    font-size: 18px;\n    color: gray;\n  }\n\n  &[value] {\n    font-family: cursive;\n    font-size: 24px;\n    color: gray;\n  }\n"])),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.mainText}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.text}),(function(n){return n.theme.colors.input}),(function(n){return n.theme.space[5]})),S=y.Z.input(c||(c=(0,b.Z)(["\n  border: 2px solid ",";\n  border-radius: 4px;\n  width: 350px;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n\n  background-color: ",";\n\n  margin-bottom: ","px;\n  padding: 6px 10px;\n  margin-bottom: 10px;\n\n  &:hover {\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:focus {\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  &::placeholder {\n    font-family: cursive;\n    font-size: 18px;\n    color: gray;\n  }\n\n  &[value] {\n    font-family: cursive;\n    font-size: 24px;\n    color: gray;\n  }\n"])),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.mainText}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.text}),(function(n){return n.theme.colors.input}),(function(n){return n.theme.space[5]})),_=y.Z.button(u||(u=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-self: center;\n\n  padding: 8px 18px;\n  border: 1px solid gray;\n  border-radius: 30px;\n  background-color: rgba(247, 242, 242, 0.6);\n\n  font-family: cursive;\n  font-size: 18px;\n  color: gray;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(247, 242, 242, 0.9);\n  }\n"]))),C=(0,y.Z)(w.w8I)(l||(l=(0,b.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  color: lightgray;\n  cursor: pointer;\n"]))),q=y.Z.div(p||(p=(0,b.Z)(["\n  &.active {\n    &::after {\n      opacity: 0;\n    }\n  }\n\n  &::after {\n    position: absolute;\n    content: '';\n    top: 21px;\n    right: 10px;\n    width: 28px;\n    height: 2px;\n    background-color: lightgray;\n    transform: rotate(45deg);\n    transition: 0.3s all ease;\n    opacity: 1;\n  }\n"]))),A=y.Z.div(d||(d=(0,b.Z)(["\n  position: relative;\n"]))),I=t(3329);function N(){var n=(0,m.I0)(),e=(0,f.useState)(""),t=(0,x.Z)(e,2),o=t[0],r=t[1],i=(0,f.useState)(""),a=(0,x.Z)(i,2),s=a[0],c=a[1],u=(0,f.useState)(""),l=(0,x.Z)(u,2),p=l[0],d=l[1],b=document.querySelector("div form div div"),y=document.querySelector("form .input-password-register"),w=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":return r(o);case"email":return c(o);case"password":return d(o);default:return}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Z,{children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"}),(0,I.jsx)(v,{children:(0,I.jsxs)(j,{onSubmit:function(e){e.preventDefault(),n((0,h.z2)({name:o,email:s,password:p})),r(""),c(""),d("")},children:[(0,I.jsx)(z,{children:"\u0406\u043c'\u044f"}),(0,I.jsx)(k,{type:"text",name:"name",value:o,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",required:!0,onChange:w}),(0,I.jsx)(z,{children:"\u041f\u043e\u0448\u0442\u0430"}),(0,I.jsx)(k,{type:"email",name:"email",value:s,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0448\u0442\u0443",required:!0,onChange:w}),(0,I.jsx)(z,{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),(0,I.jsxs)(A,{children:[(0,I.jsx)(S,{className:"input-password-register",type:"password",name:"password",value:p,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:w}),(0,I.jsx)(q,{className:"register-icon-wrapper",children:(0,I.jsx)(C,{size:25,onClick:function(){b.classList.toggle("active"),"password"===y.getAttribute("type")?y.setAttribute("type","text"):y.setAttribute("type","password")}})})]}),(0,I.jsx)(_,{type:"submit",children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"})]})}),(0,I.jsx)(g.Ix,{autoClose:5e3,style:{fontSize:"20px"}})]})}}}]);
//# sourceMappingURL=93.5a6bdca5.chunk.js.map