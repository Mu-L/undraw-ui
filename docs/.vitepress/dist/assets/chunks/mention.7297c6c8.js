import{e as w}from"./emoji.51829739.js";import{Q as m,Z as v,n as _}from"../app.5d61c17a.js";import{h as l,al as A,D as N,i as I,A as k}from"./framework.f5822349.js";import"./theme.93e4fb90.js";const x=l({__name:"mention",setup(j){const a=A({user:{id:1,username:"jack",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",likeIds:[1,2,3]},emoji:w,comments:[],total:10,mentionConfig:{userArr:[{userId:1,userName:"张三",userAvatar:"https://gd-hbimg.huaban.com/cba6c7af94997ba172c32bbe668794553f29e91ef26f-qnroJ7_fw240webp"},{userId:2,userName:"李四",userAvatar:"https://gd-hbimg.huaban.com/d01263d11d07748a2193bbbdd3b9a0c8a4b062b9f39d-PKvV2t_fw240webp"},{userId:3,userName:"王五",userAvatar:"https://gd-hbimg.huaban.com/69d92bfbf36fc111e1f563403311e7943628c9fc108bf-6l34Pa_fw240webp"},{userId:4,userName:"赵六",userAvatar:"https://gd-hbimg.huaban.com/7f5c54a455f61f431ec1f7b7c0e583f4a725fb73adba-5DgU3q_fw240webp"},{userId:5,userName:"孙七",userAvatar:"https://gd-hbimg.huaban.com/edea85f44f3f8bce8d094ed78f390164a9eba229cb2e-1Lc22F_fw240webp"},{userId:6,userName:"周八",userAvatar:"https://gd-hbimg.huaban.com/c1b2131c6977e01a430d6575ba678a4afeabcad222605-UJUwwb_fw240webp"},{userId:7,userName:"吴九",userAvatar:"https://gd-hbimg.huaban.com/4942e77078bda39a458980049b528236bf79183814998-zVzEJv_fw240webp"},{userId:8,userName:"郑十",userAvatar:"https://gd-hbimg.huaban.com/628236086a2ca12d2074bdd29f496f38a4d0c06ae50f-Rj3vsO_fw240webp"},{userId:9,userName:"王富贵",userAvatar:"https://gd-hbimg.huaban.com/0108a6b65d211d3bc602bc0431e84b31f9e62ac08015f-JifENm_fw240webp"},{userId:10,userName:"赵富贵",userAvatar:"https://gd-hbimg.huaban.com/d9643d6181d506ccc159a940e11bdc6b9a2b53ae57139-pxAnk9_fw240webp"}],userIdKey:"userId",userNameKey:"userName",userAvatarKey:"userAvatar",show:!0,mentionColor:"#1e80ff"}});let t=100;const c=({content:e,parentId:r,files:s,finish:o,reply:u,mentionList:f})=>{let i="提交评论:"+e+";	父id: "+r+";	图片:"+s+";	被回复评论:"+u+";	提及列表:"+JSON.stringify(f);console.log(i,u);let h=s==null?void 0:s.map(g=>v(g)).join("||");t+=1;const p={id:String(t),parentId:r,uid:a.user.id,address:"来自江苏",content:e,likes:0,createTime:m().subtract(5,"seconds").toString(),contentImg:h,user:{username:a.user.username,avatar:a.user.avatar,level:6,homeLink:`/${t}`},reply:null};setTimeout(()=>{o(p),_({message:"评论成功!",type:"info"})},200)},d=(e,r)=>{console.log("点赞: "+e),setTimeout(()=>{r()},200)};a.comments=[{id:"1",parentId:null,uid:"1",address:"来自上海",content:"缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]",likes:2,contentImg:"https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp",createTime:m().subtract(10,"minute").toString(),user:{username:"落🤍尘",avatar:"https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100",level:6,homeLink:"/1"}}];const b=[{userId:1,userName:"张三",userAvatar:"https://gd-hbimg.huaban.com/cba6c7af94997ba172c32bbe668794553f29e91ef26f-qnroJ7_fw240webp"},{userId:2,userName:"李四",userAvatar:"https://gd-hbimg.huaban.com/d01263d11d07748a2193bbbdd3b9a0c8a4b062b9f39d-PKvV2t_fw240webp"},{userId:3,userName:"王五",userAvatar:"https://gd-hbimg.huaban.com/69d92bfbf36fc111e1f563403311e7943628c9fc108bf-6l34Pa_fw240webp"},{userId:4,userName:"赵六",userAvatar:"https://gd-hbimg.huaban.com/7f5c54a455f61f431ec1f7b7c0e583f4a725fb73adba-5DgU3q_fw240webp"},{userId:5,userName:"孙七",userAvatar:"https://gd-hbimg.huaban.com/edea85f44f3f8bce8d094ed78f390164a9eba229cb2e-1Lc22F_fw240webp"},{userId:6,userName:"周八",userAvatar:"https://gd-hbimg.huaban.com/c1b2131c6977e01a430d6575ba678a4afeabcad222605-UJUwwb_fw240webp"},{userId:7,userName:"吴九",userAvatar:"https://gd-hbimg.huaban.com/4942e77078bda39a458980049b528236bf79183814998-zVzEJv_fw240webp"},{userId:8,userName:"郑十",userAvatar:"https://gd-hbimg.huaban.com/628236086a2ca12d2074bdd29f496f38a4d0c06ae50f-Rj3vsO_fw240webp"},{userId:9,userName:"王富贵",userAvatar:"https://gd-hbimg.huaban.com/0108a6b65d211d3bc602bc0431e84b31f9e62ac08015f-JifENm_fw240webp"},{userId:10,userName:"赵富贵",userAvatar:"https://gd-hbimg.huaban.com/d9643d6181d506ccc159a940e11bdc6b9a2b53ae57139-pxAnk9_fw240webp"}],n=e=>{if(!e){a.mentionConfig.userArr=b;return}a.mentionConfig.userArr=b.filter(r=>r.userName.includes(e))};return(e,r)=>{const s=N("u-comment");return I(),k(s,{config:a,onSubmit:c,onLike:d,onMentionSearch:n,"relative-time":""},null,8,["config"])}}});export{x as default};