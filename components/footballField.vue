<template>
  <div class="text-center field">
    <v-avatar class="playerOne" size="56" color="rgba(255, 255, 255, 0.5)">
      <v-icon dark>mdi-plus</v-icon>
    </v-avatar>
    <v-avatar class="playerTwo" size="56" color="rgba(255, 255, 255, 0.5)">
      <v-icon dark>mdi-plus</v-icon>
    </v-avatar>
    <v-avatar class="playerThree" size="56" color="rgba(255, 255, 255, 0.5)">
      <v-icon dark>mdi-plus</v-icon>
    </v-avatar>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style scoped>
.field {
  width: 45%;
  height: 80%;
  background: linear-gradient(
    180deg,
    rgba(237, 76, 105, 1) 0%,
    rgba(147, 61, 123, 1) 60%
  );
}
</style>
