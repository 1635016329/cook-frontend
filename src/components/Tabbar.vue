<script setup lang="ts">
import { ref } from 'vue'
import { usetabbarActiveStore } from '../stores/tabbarActive';

const store = usetabbarActiveStore()

const activeIcon = [
    "wap-home",
    "star",
    "",
    "chat",
    "manager"
]
const inactiveIcon = [
    "wap-home-o",
    "star-o",
    "",
    "chat-o",
    "manager-o"
]
const tabbar = ref(null)

function getActiveIcon(index: number, name: string) {
    return store.cur === name ? activeIcon[index] : inactiveIcon[index]
}
</script>
<template>
    <div class="tabbar">
        <van-tabbar ref="tabbar" v-model="store.cur" router active-color="#323233" inactive-color="#dadee0">
            <van-tabbar-item to="/" name="home" :icon="getActiveIcon(0, 'home')">首页</van-tabbar-item>
            <van-tabbar-item to="/like" name="like" :icon="getActiveIcon(1, 'like')">收藏</van-tabbar-item>
            <van-tabbar-item to="/create" name="create">
                <van-button icon="plus" size="normal" color="linear-gradient(to right, #ff6034, #ee0a24)" />
            </van-tabbar-item>
            <van-tabbar-item to="/message" name="message" :icon="getActiveIcon(3, 'message')">消息</van-tabbar-item>
            <van-tabbar-item to="/mine" name="mine" :icon="getActiveIcon(4, 'mine')">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style scoped></style>