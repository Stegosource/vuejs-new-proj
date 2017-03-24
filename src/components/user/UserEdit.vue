<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>q: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary">Confirm</button>
        <div style="height: 700px;"></div>
        <p id="data">Extra Data</p>
    </div>
</template>