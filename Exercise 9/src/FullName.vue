<template>
    <div>
        <div class="form-group">
            <label for="fname">First Name</label>
            <input
                    type="text"
                    id="fname"
                    class="form-control"
                    :value="fname"
                    @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label for="lname">Last Name</label>
            <input
                    type="text"
                    id="lname"
                    class="form-control"
                    :value="lname"
                    @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        nameChanged(isFirst, event) {
            let name = '';
            if ( isFirst ) {
                name = event.target.value + ' ' + this.lname;
            } else {
                name = this.fname + ' ' + event.target.value;
            }
            this.value = name;
            this.$emit('input', this.value);
        }
    },
    computed: {
        fname() {
            return this.value.split(' ')[0];
        },
        lname() {
            return this.value.split(' ')[1];
        }
    }
}
</script>
