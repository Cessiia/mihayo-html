<template>
  <dev>
    <h1>This is Home Page</h1>
    <router-link id="FirstPart" to="/Home">FirstPart</router-link>
    <router-link id="SecondPart" to="/Home/SecondPart">SecondPart</router-link>
    <hr />
    <router-view></router-view>
    <!-- <h1> This is First Page </h1>
    <h1> This is Second Page </h1>-->
  </dev>
</template>
