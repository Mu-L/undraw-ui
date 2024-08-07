export const UndrawUiResolver = {
  type: 'component',
  resolve: name => {
    if (name.startsWith('U')) {
      let styleName = name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase()
        .slice(1)
      return {
        name: name,
        from: 'undraw-ui',
        sideEffects:
          name in element
            ? element[name]
            : ['undraw-ui/es/index.css', `undraw-ui/es/components/${styleName}/${styleName}.css`]
      }
    }
  }
}

const element = {
  UFold: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/fold/fold.css',
    'element-plus/es/components/button/style/css'
  ],
  UToast: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/toast/toast.css',
    'undraw-ui/es/components/icon/icon.css'
  ],
  UAnchor: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/anchor/anchor.css',
    'undraw-ui/es/components/divider/divider.css'
  ],
  UDialog: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/dialog/dialog.css',
    'element-plus/es/components/dialog/style/css'
  ],
  UNoticeBar: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/notice-bar/notice-bar.css',
    'element-plus/es/components/carousel/style/css'
  ],
  USearch: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/search/search.css',
    'undraw-ui/es/components/icon/icon.css',
    'element-plus/es/components/tag/style/css',
    'element-plus/es/components/link/style/css'
  ],
  UEditor: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/editor/editor.css',
    'undraw-ui/es/components/toast/toast.css',
    'undraw-ui/es/components/icon/icon.css',
    'element-plus/es/components/scrollbar/style/css',
    'element-plus/es/components/empty/style/css'
  ],
  UEmoji: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/emoji/emoji.css',
    'element-plus/es/components/popover/style/css',
    'element-plus/es/components/image/style/css',
    'element-plus/es/components/scrollbar/style/css'
  ],
  UComment: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/comment/comment.css',
    'element-plus/es/components/button/style/css',
    'undraw-ui/es/components/toast/toast.css',
    'undraw-ui/es/components/icon/icon.css',
    'undraw-ui/es/components/emoji/emoji.css',
    'element-plus/es/components/popover/style/css',
    'element-plus/es/components/image/style/css',
    'element-plus/es/components/scrollbar/style/css',
    'undraw-ui/es/components/editor/editor.css',
    'element-plus/es/components/empty/style/css',
    'element-plus/es/components/avatar/style/css',
    'undraw-ui/es/components/fold/fold.css',
    'element-plus/es/components/pagination/style/css'
  ],
  UChat: [
    'undraw-ui/es/index.css',
    'undraw-ui/es/components/chat/chat.css',
    'element-plus/es/components/scrollbar/style/css',
    'undraw-ui/es/components/emoji/emoji.css',
    'element-plus/es/components/popover/style/css',
    'element-plus/es/components/image/style/css',
    'element-plus/es/components/scrollbar/style/css',
    'undraw-ui/es/components/icon/icon.css',
    'undraw-ui/es/components/toast/toast.css',
    'undraw-ui/es/components/editor/editor.css',
    'element-plus/es/components/empty/style/css',
    'element-plus/es/components/avatar/style/css'
  ]
}
