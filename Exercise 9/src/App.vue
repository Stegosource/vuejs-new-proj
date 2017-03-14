<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <appFullName v-model="userInfo.fullName"></appFullName>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="email"
                                id="email"
                                class="form-control"
                                v-model="userInfo.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userInfo.password">
                    </div>
                    <div class="form-group">
                        <label for="checkbox">Store Data?</label>
                        <input
                                type="checkbox"
                                id="checkbox"
                                class="form-control"
                                v-model="userInfo.storeData">
                    </div>

                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitForm">Submit!
                    </button>
                </div>
            </div>
        </form>
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userInfo.fullName }}</p>
                        <p>Mail: {{ userInfo.email }}</p>
                        <p>Password: {{ userInfo.password }}</p>
                        <p>Store in Database?: {{ userInfo.storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'
    export default {
        data() {
            return {
                userInfo: {
                    fullName: 'test name',
                    email: '',
                    password: '',
                    storeData: false
                },
                isSubmitted: false
            }
        },
        components: {
            appFullName: FullName
        },
        methods: {
            submitForm() {
                this.isSubmitted = true
            }
        }
    }
</script>

<style>
</style>
