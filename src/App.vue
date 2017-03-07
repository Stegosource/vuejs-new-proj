<template>
    <div class="container">
        <app-Header></app-Header>
        <hr>
        <div class="row">
            <app-ServerList></app-ServerList>
            <app-ServerDetails></app-ServerDetails>
        </div>
        <hr>
        <div class="row">
            <app-Footer></app-Footer>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import ServerList from './ServerList.vue';
import ServerDetails from './ServerDetails.vue';
import Footer from './Footer.vue';

export default {
    components: {
        'app-Header': Header,
        'app-ServerList': ServerList,
        'app-ServerDetails': ServerDetails,
        'app-Footer': Footer
    }
}
</script>

<style>

</style>
