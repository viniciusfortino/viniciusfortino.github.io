<template>
    <video autoplay>
      <source src="../assets/startup.mp4" type="video/mp4">
    </video>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Desktop extends Vue {}
</script>
