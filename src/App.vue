<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Build in Directives</h1>
                <p v-text="'some text'"></p>
                <p v-html="'some <strong>strong</strong> text'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Color this</p>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    
</script>

<style>

</style>