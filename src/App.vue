<template>
    <div class="container">
        <appHeader></appHeader>
        <div class="row">
            <div class="col-md-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
body {
    padding: 30px;
}
.slide-enter-active {
    animation: slide-in .3s ease-out;
}
.slide-leave-active {
    animation: slide-out .3s ease-out;
}
@keyframes slide-in {
    from {
        transform: translateY(-5px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-5px);
        opacity: 0;
    }
}
</style>
