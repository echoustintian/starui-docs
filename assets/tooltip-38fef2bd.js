import{T as e}from"./index-724f7b60.js";import{e as l,s as t,o as s,c as n,b as d,w as i,u as a,a as o,t as c}from"./index-5449505c.js";const p=o("h1",null,"文字提示",-1),r=o("p",null," 使用文字提示可以告知用户按钮的作用或者对内容进行更加具体的解释。当用户鼠标放在按钮等元素上时，会使用小型弹出框提示用户。 ",-1),_=o("p",null," 在默认插槽中插入需要提示的按钮或者其他元素，然后使用 tip 属性指定文字提示的内容。 ",-1),u=o("div",{style:{padding:"10px","background-color":"#ddd"}},"把鼠标放在我上面",-1),h=o("br",null,null,-1),f=o("br",null,null,-1),m=o("pre",null,[o("code",null,c(`<Tooltip tip="文字提示">
  <div style="padding: 10px; background-color: #ddd;">把鼠标放在我上面</div>
</Tooltip>`))],-1),T=l({name:"tooltip",setup(b){return t(1),t(10),(g,x)=>(s(),n("div",null,[p,r,_,d(a(e),{tip:"文字提示"},{default:i(()=>[u]),_:1}),h,f,m]))}});export{T as default};