<template>
    <div class="flex bg-bg bg-opacity-95 backdrop-filter backdrop-blur-md px-9 pt-8 justify-between w-full pb-12">
        <nuxt-link to="/" class="flex flex-col justify-end items-center ">
            <img src="../assets/icons/home.svg" alt="" height="40px">
            <span class="text-white text-sm font-bold">Home</span>
        </nuxt-link>
        <nuxt-link to="/" class="flex flex-col justify-end items-center space-y-2">
            <img src="../assets/icons/headphones.svg" alt="" height="40px">
            <span class="text-inactive text-sm font-bold">Playlists</span>
        </nuxt-link>
        <nuxt-link to="/" class="flex flex-col justify-end items-center space-y-2">
            <img src="../assets/icons/compass.svg" alt="" height="40px">
            <span class="text-inactive text-sm font-bold">Explorer</span>
        </nuxt-link>
        <nuxt-link to="/" class="flex flex-col justify-end items-center space-y-2">
            <img src="../assets/icons/radio.svg" alt="" height="40px">
            <span class="text-inactive text-sm font-bold">Radio</span>
        </nuxt-link>
    </div>
</template>