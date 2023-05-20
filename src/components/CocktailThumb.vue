<script setup>
const props = defineProps({
    cocktail: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="root">
        <RouterLink :to="`/cocktail/${cocktail.idDrink}`" class="link">
            <div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="pic"></div>
            <div class="name">{{ cocktail.strDrink }}</div>
        </RouterLink>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
    width: calc((100% - 76px) / 3)
    display: flex
    flex-direction: column
    gap: 36px
    justify-content: space-between
    align-items: center
    padding-bottom: 20px      

.link 
    text-decoration: none

.pic
    width: 120px
    min-height: 120px
    margin: 0 auto
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 100%

.name
    padding-top: 15px
    letter-spacing: 0.1em
    width: 100%
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
</style>