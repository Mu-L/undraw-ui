import{e as p}from"./emoji.51829739.js";import{X as n,Z as d,t as g}from"../app.3b45a4b5.js";import{h as _,al as v,D as k,i as f,A as j}from"./framework.f5822349.js";import"./theme.93e4fb90.js";const y=_({__name:"upload",setup(b){const t=v({user:{id:1,username:"jack",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",likeIds:[1,2,3]},emoji:p,comments:[],total:10});let s=100;const r=({content:o,parentId:a,files:e,finish:c})=>{console.log("提交评论: "+o,a,e);let i=e==null?void 0:e.map(l=>d(l)).join("||");s+=1;const u={id:String(s),parentId:a,uid:t.user.id,address:"来自江苏",content:o,likes:0,createTime:n().subtract(5,"seconds").toString(),contentImg:i,user:{username:t.user.username,avatar:t.user.avatar,level:6,homeLink:`/${s}`},reply:null};setTimeout(()=>{c(u),g({message:"评论成功!",type:"info"})},200)},m=(o,a)=>{console.log("点赞: "+o),setTimeout(()=>{a()},200)};return t.comments=[{id:"2",parentId:null,uid:"2",address:"来自苏州",content:"知道在学校为什么感觉这么困吗？[大笑2]因为学校，是梦开始的地方。[脱单doge]",likes:11,createTime:n().subtract(10,"day").toString(),user:{username:"悟二空",avatar:"https://static.juzicon.com/user/avatar-bf22291e-ea5c-4280-850d-88bc288fcf5d-220408002256-ZBQQ.jpeg",level:1,homeLink:"/2"}}],(o,a)=>{const e=k("u-comment");return f(),j(e,{config:t,upload:"",onSubmit:r,onLike:m,"relative-time":""},null,8,["config"])}}});export{y as default};