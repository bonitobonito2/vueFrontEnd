<template>
    <div class="navbar">
        <router-link to="/add" >registration</router-link>
        <router-link to="/login" >login</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .navbar{
        width: 100vw;
        height: 70px;
        background: gray;
        display: flex;
        
        gap: 5px;
        /* align-items: flex-end; */
        justify-content: flex-end;
        align-items: center;
        position: fixed;
     
        top: 0;
        left: 0;
    }
    .navbar a{
        background: white;
        width: fit-content;
        height: fit-content;
        border-radius: 10px;
        padding: 2px;
        text-decoration: none;
        color: black;
        
    }
    .navbar a:hover{
        padding: 3px;
        background-color: rgb(216, 216, 216);
    }
</style>