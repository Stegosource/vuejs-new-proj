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
                <p v-local-highlight:background.delayed="'green'">Color this too</p>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    // el.style.backgroundColor = 'green';    
                    // el.style.backgroundColor = binding.value;
                    var delay = 0;
                    if ( binding.modifiers['delayed'] ) {
                    delay = 3000;
                    }
                    setTimeout(() => {
                        if ( binding.arg == 'background' ) {
                            el.style.backgroundColor = binding.value;
                        } else {
                            el.style.color = binding.value;
                        }
                    }, delay);
                }
            }
        }
    }
</script>

<style>

</style>