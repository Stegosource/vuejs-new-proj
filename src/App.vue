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
import Header from './components/shared/Header.vue';
import ServerList from './components/server/ServerList.vue';
import ServerDetails from './components/server/ServerDetails.vue';
import Footer from './components/shared/Footer.vue';

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
