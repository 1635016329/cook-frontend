<script setup lang="ts">
import { usetabbarActiveStore } from '../stores/tabbarActive';

const onClickLeft = () => {
    const store = usetabbarActiveStore()
    store.cur = store.pre.substring(1)
    history.back()
}

</script>

<template>
    <div class="create-view">
        新建页
        <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
             />
        <Tabbar />

    </div>
</template>

<style scoped></style>