(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),o=n(7),a=n(4),r=n(5),l=n(9),i=n(8),d=n(1),u=n.n(d),h=n(6),b=n.n(h),j=n(18),m=(n(14),n(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e){return{id:Object(j.a)(),name:e}})),f=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:["Jam"]},e.setTitle=function(){var t=e.state.selectedGoods,n=t.length;switch(n){case 0:return"No goods selected";case 1:return"".concat(t[0]," is selected");default:return"".concat(t.slice(0,n-1).join(", ")," and ").concat(t[n-1])}},e.handlingRemove=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.handlingSelect=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.handlingClear=function(){e.setState({selectedGoods:[]})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setTitle()}},{key:"render",value:function(){var e=this,t=this.state.selectedGoods,n=t.length;return Object(m.jsxs)("main",{className:"App is-light",children:[Object(m.jsxs)("header",{className:"App__header",children:[Object(m.jsx)("h1",{className:"App__title",children:this.setTitle()}),n?Object(m.jsx)("button",{type:"button",className:"App__clear button is-danger",onClick:this.handlingClear,children:"Clear"}):""]}),Object(m.jsx)("ul",{className:"Goods",children:p.map((function(n){var c=n.id,s=n.name,o=t.includes(s);return Object(m.jsxs)("li",{className:b()("Good level-item",{"Good--active":o}),children:[Object(m.jsx)("h1",{children:s}),o?Object(m.jsx)("button",{type:"button",className:"Good__remove button is-danger",onClick:function(){return e.handlingRemove(s)},children:"Remove"}):Object(m.jsx)("button",{type:"button",className:"Good__select button is-dark",onClick:function(){return e.handlingSelect(s)},children:"Select"})]},c)}))})]})}}]),n}(u.a.Component);s.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8e2740ee.chunk.js.map