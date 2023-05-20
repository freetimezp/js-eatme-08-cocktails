<script setup>
import { Back } from '@element-plus/icons-vue';

const props = defineProps({
    imgUrl: {
        type: String,
        reqiured: true,
    },
    backFunc: {
        type: Function,
        required: true,
    },
    isBackButtonVisible: {
        type: Boolean,
        default: true,
    }
})
</script>

<template>
    <div class="root">
        <div :style="`background-image: url(${imgUrl})`" class="img"></div>
        <div class="main">
            <div class="btns">
                <el-button v-if="isBackButtonVisible" type="primary" :icon="Back" circle class="btn-circle"
                    @click="backFunc" />
                <el-button class="btn">Get random cocktail</el-button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
    display: flex 
    min-height: 100vh
    background-color: $background

.img 
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    position: relative
    width: 50%
    padding: 32px 40px

.btns
    display: flex
    align-items: center
    justify-content: space-between

.btn-circle 
    position: absolute
    top: 36px
    left: 40px
    background-color: transparent
    border-color: #ffffff
    color: #ffffff

    &:hover 
        background-color: $accent
        border-color: $accent

.btn
    position: absolute
    padding: 20px 25px
    top: 32px
    right: 40px
    font-size: 16px
    font-family: 'Raleway', sans-serif
    background-color: $accent
    border-color: $accent
    color: $text

    &:hover,
    &:active
        background-color: darken($accent, 10%)
        border-color: darken($accent, 10%)
</style>