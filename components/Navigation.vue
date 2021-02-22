<template>
    <nav class="navigation">
        <NuxtLink class="navigation__link" to="/">Home page</NuxtLink>
        <NuxtLink class="navigation__link" to="/about">About page</NuxtLink>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
    .navigation {
        display: flex;
        justify-content: flex-end;
        padding: 20px;
        border: 2px solid #fff;
        
        
    }
    .navigation__link {
        margin-right: 20px;
        color: #fff;
        font-size: 20px;
    }
        
</style>