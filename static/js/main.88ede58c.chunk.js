(window["webpackJsonpantd-demo"]=window["webpackJsonpantd-demo"]||[]).push([[0],{118:function(e,t,a){e.exports=a(195)},123:function(e,t,a){},171:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),i=a.n(r),s=(a(123),a(92)),o=a(19),l=a(20),m=a(22),u=a(21),p=a(23),h=a(205),d=a(198),f=a(199),E=a(201),b=a(32),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).AddItem=function(){a.props.AddItem(a.state.name),a.setState({name:""})},a.SetStateName=function(e){a.setState({name:e.target.value})},a.state={name:"",age:null},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"margin-top"},c.a.createElement(E.a,{ref:"username",value:this.state.name,addonBefore:"\u4ee3\u529e\u4e8b\u9879",onChange:function(t){return e.SetStateName(t)},placeholder:"\u8bf7\u8f93\u5165\u60f3\u8981\u505a\u7684\u4e8b\u60c5"})),c.a.createElement(b.a,{className:"margin-top",type:"primary",block:!0,onClick:function(){return e.AddItem()}},"\u6dfb\u52a0"))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.message;return c.a.createElement("div",null,c.a.createElement(O,{message:e,AddItem:this.props.AddItem}))}}]),t}(n.Component),v=a(48),g=a(203),k=(a(171),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.props.SetCheckList(e)},a.state={plainOptions:a.props.list},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("p",null,"\u6b63\u5728\u505a\u7684\u4e8b\u60c5"),c.a.createElement("div",{className:"MessageBox"},0===this.state.plainOptions.length?c.a.createElement(v.a,{image:v.a.PRESENTED_IMAGE_SIMPLE}):"",c.a.createElement(g.a.Group,{options:this.state.plainOptions,onChange:function(t){return e.onChange(t)}})))}}]),t}(n.Component)),I=a(206),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(I.a,{title:"ToDoList"},c.a.createElement(I.a.Item,{label:"Desc"},"Record what you do every day"))}}]),t}(n.Component),C=a(63),S=a(202),D=a(200),N=a(204),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).DeleteItem=function(e){var t=Object(C.a)(a);S.a.confirm({title:"Do you want to delete "+e+"?",content:"Delete what has been done!",onOk:function(){t.props.DeleteItem(e)},onCancel:function(){}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list;return c.a.createElement("div",null,c.a.createElement("p",null,"\u5df2\u7ecf\u5b8c\u6210\u7684"),c.a.createElement(D.a,{size:"large",bordered:!0,dataSource:t,renderItem:function(t){return c.a.createElement(D.a.Item,{actions:[c.a.createElement("span",{onClick:function(){return e.DeleteItem(t)}},"\u5220\u9664")]},c.a.createElement(N.a,{avatar:!0,title:!1,loading:t.loading,active:!0},c.a.createElement(D.a.Item.Meta,{description:t})))}}))}}]),t}(n.Component),A=(a(194),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).AddItem=function(e){var t=a.state.list;e.trim()?(t.includes(e)?h.a.error("This is already exists"):t.push(e),a.setState({list:t})):h.a.error("This can not empty\uff01\uff01\uff01")},a.SetCheckList=function(e){var t=a.state.list;t.forEach(function(a,n){e.forEach(function(e){a===e&&t.splice(n,1)})}),a.setState({list:t,checklist:[].concat(Object(s.a)(a.state.checklist),Object(s.a)(e))})},a.DeleteItem=function(e){var t=a.state.checklist;t.forEach(function(a,n){console.log(e),a===e&&t.splice(n,1)}),a.setState({checklist:t})},a.state={message:"Hi,React",list:["\u5403\u996d","\u7761\u89c9"],checklist:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.message,a=e.list,n=e.checklist;return c.a.createElement("div",null,c.a.createElement(d.a,{className:"margin-top"},c.a.createElement(f.a,{offset:1,span:22},c.a.createElement(y,{message:t}))),c.a.createElement(d.a,{className:"margin-top"},c.a.createElement(f.a,{offset:1,span:22},c.a.createElement(j,{message:t,AddItem:this.AddItem}))),c.a.createElement(d.a,{className:"margin-top"},c.a.createElement(f.a,{offset:1,span:22}," ",c.a.createElement(k,{list:a,SetCheckList:this.SetCheckList}))),c.a.createElement(d.a,{className:"margin-top  margin-bottom"},c.a.createElement(f.a,{offset:1,span:22}," ",c.a.createElement(w,{list:n,DeleteItem:this.DeleteItem}))))}}]),t}(n.Component));i.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.88ede58c.chunk.js.map