<template>
  <div class="u-anchor">
    <nav class="toc-content">
      <h3 class="toc-content-heading">目录</h3>
      <u-divider></u-divider>
      <ul class="toc-items">
        <li
          v-for="(v, k) in navs"
          :key="k"
          :class="[{ active: active == k }, d1((v as HTMLDivElement).nodeName)]"
          @click="scrollTo(k as number)"
        >
          {{ (v as HTMLDivElement).innerText }}
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { UDivider } from 'undraw-ui'

defineOptions({
  name: 'UAnchor'
})

interface Props {
  // 指定监听的容器
  container: string
  // 滚动轴
  scroll?: string
  // 距离窗口顶部达到指定偏移量
  targetOffset?: number
}
const props = withDefaults(defineProps<Props>(), {
  targetOffset: 0
})

const active = ref(0)
const navs = ref({} as NodeListOf<HTMLDivElement>)
const scroll = ref({} as Element | Window)

const d1 = (val: string) => {
  switch (val) {
    case 'H1':
    case 'H2':
      return 'd2'
    case 'H3':
      return 'd3'
    default:
      return 'd4'
  }
}

// 滚动监听器
const onScroll = () => {
  // 所有锚点元素的 offsetTop
  const offsetTopArr: number[] = []
  navs.value.forEach(v => {
    offsetTopArr.push(v.offsetTop)
  })

  let scroll2 = scroll.value instanceof Element ? scroll.value.scrollTop : undefined

  // 获取当前文档流的 scrollTop
  const scrollTop = scroll2 || document.documentElement.scrollTop || document.body.scrollTop
  // 定义当前点亮的导航下标
  offsetTopArr.forEach((v, k) => {
    if (scrollTop >= v - 10 - props.targetOffset) {
      active.value = k
    }
  })
}

// 跳转到指定索引的元素
const scrollTo = (k: number) => {
  const tar = navs.value.item(k)
  console.log(tar)
  if (props.scroll) {
    scroll.value.scrollTo({
      top: tar.offsetTop - props.targetOffset,
      behavior: 'smooth'
    })
  } else {
    document.documentElement.scrollTo({
      top: tar.offsetTop - props.targetOffset,
      behavior: 'smooth'
    })
  }
}

let observer: ResizeObserver

onMounted(() => {
  let container = document.querySelector(props.container) as Element
  observer = new ResizeObserver(entry => {
    if (props.scroll) {
      scroll.value = document.querySelector(props.scroll) as Element
    } else {
      scroll.value = window
    }
    // 获取所有锚点元素
    navs.value = container.querySelectorAll('h1, h2, h3, h4, h5, h6') as NodeListOf<HTMLDivElement>
    scroll.value.addEventListener('scroll', onScroll)
  })
  observer.observe(container as any)
})

onUnmounted(() => {
  scroll.value.removeEventListener('scroll', onScroll)
  observer.disconnect()
})
</script>

<style lang="scss" scoped>
@use './anchor.scss';
</style>
