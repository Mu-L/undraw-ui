---
sidebar: false
---

## 1.0.1
***2023-11-07***
### 增强
- [comment] @cancel取消按钮回调

### 修复
- [comment] 发布按钮不靠最右样式问题
  

## 1.0.0
***2023-11-06***
### 增强
- [comment] 是否显示评论表单和评论列表参数

### 修复
- [comment] replyShowSize 参数时回复不正确显示



## 0.9.8
***2023-10-17***
### 增强
- [comment] 功能区域卡槽


## 0.9.8
***2023-09-13***
### 增强
- [comment] 自定义头像a标签target属性


## 0.9.7
***2023-09-04***

### 增强
- [search] 输入框默认值

### 修复
- [search] 输入框光标不能选择以及鼠标不能移动光标
  

## 0.9.6
***2023-05-21***
### 重构

- [comment] submit事件的参数reply获取到回复评论对象 ([#I76OXP](https://gitee.com/undraw/undraw-ui/issues/I76OXP))
- [comment] 重构操作栏 ([#12](https://github.com/readpage/undraw-ui/issues/12))
- [search] 当热搜为null，不显示热搜栏 ([#I70N0N](https://gitee.com/undraw/undraw-ui/issues/I70N0N))

### 修改样式
- [comment] 修改样式 ([#I6ZT6C](https://gitee.com/undraw/undraw-ui/issues/I6ZT6C))

### 新增
- [search] 添加关闭下拉框隐藏方法 ([#11](https://github.com/readpage/undraw-ui/issues/11))


## 0.9.4
***2023-05-05***
### 增强
- [comment] 回复分页添加评论显示数量不超过分页数量大小([#I6XNKZ](https://gitee.com/undraw/undraw-ui/issues/I6XNKZ)) 
- [comment] 添加相对时间属性([#I5PWF6](https://gitee.com/undraw/undraw-ui/issues/I5PWF6))
- [comment] 评论事件添加replyId回复参数([#I6UT8S](https://gitee.com/undraw/undraw-ui/issues/I6UT8S))


## 0.9.3
***2023-04-20***
### 新增
- 新增cdn引用 by ([readpage](https://gitee.com/readpage))
  
### 修复
- element-plus: el-input样式都收到影响 ([#I6VSWT](https://gitee.com/undraw/undraw-ui/issues/I6VSWT) by [readpage](https://gitee.com/readpage))
- 点赞多次点赞数量错误 ([#I6WR4H](https://gitee.com/undraw/undraw-ui/issues/I6WR4H) by [readpage](https://gitee.com/readpage))


## 0.9.0
***2023-03-24***
### 新增
- 导航栏nav卡槽(排序)
- [comment-scroll]滚动加载更多评论组件  
- 用户信息卡槽

### 修复
- 修复评论后未清空图片、按钮禁用 ([#I6NH97](https://gitee.com/undraw/undraw-ui/issues/I6NH97) by [@jishudaquan](https://gitee.com/jishudaquan))

### 重构
- 防抖和节流  
- [comment] 用户信息结构
- [comment] 重构工具栏功能
- [comment] 参数、接口方法、上传、工具栏、回复分页可选，用户信息和用户信息卡片



## 0.8.2
***2023-03-01***
***
### 修复
- [comment] 修复用户信息hover事件移动到卡片消失问题、删除全局a元素样式
- 修复package.json配置错误问题
- [comment] 修改评论对象属性名

### 新增

- feat: ✨ [comment] 新增图片文件上传功能



## 0.7.2
***2022/11/16***
### 修复
- fix: 🐛 [search] 修复搜索框占用空间的问题

### 优化
- chore: [comment] 优化更多分页

### 新增
- feat: ✨ [counter] 新增counter 动态数字滚动组件

## 0.6.9
***2022/10/7**

### 修复
- fix: 🐛 [search] 解决localStorage存储store未定义问题
- fix: 🐛 [search] 修复config数据无法响应式问题

### 优化
- chore: 🔨 util 新增deep方法
- chore: 🔨 [tags] 修改事件方法

## 0.6.4
***2022/9/22***

### 增强
- [comment] 添加删除功能

### 优化
- [comment] 优化评论提交和点赞功能
- [chat] 添加聊天个人评论框样式
- [dialog] 修改样式
- [notice-bar] 修复右键关闭和全部关闭异常

### 修复
- [comment] 修复vue-cli图片加载错误


## 0.5.9
***2022/8/21***

### 新增组件
- [chat] 新增聊天组件

### 增强
- [comment] 新增查看用户信息、新增回复分页


## 0.5.7
***2022/6/23***

### 修复
- [Anchor] 滚动轴失效

### 增强
- [Anchor] 新增 target-offset属性,距离窗口顶部达到指定偏移量


## 0.5.6
***2022/6/22***

### 新增组件
- Search 搜索(input关键词滚动,搜索日志,热搜)

### 增强
- [Comment] 新增ip地址


## 0.5.1
***2022/5/20***
### 修复
- Comment 个人主页跳转,等级


## 0.5.0
***2022/5/19***
### 增强
- Comment 点赞,等级,当前用户


## 0.4.8
***2022/4/30***
### 新增
- Anchor 锚点


## 0.4.4
***2022/4/27***
### 更新
- 新增标签页
- 新增通知栏
