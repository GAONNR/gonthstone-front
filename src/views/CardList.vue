<template>
  <v-container grid-list-md>
    <v-layout column align-center>
          <h1>Cards List</h1>
      </v-layout>
    <v-layout row wrap>
      <stone-card v-for="cardProp in cardProps" :cardProp=cardProp :key=cardProp.cardTitle></stone-card>
    </v-layout>
  </v-container>
</template>
<script>
import stoneCard from "./Card.vue";
export default {
  components: { stoneCard },
  data() {
    return {
      cardProps: []
    };
  },
  mounted() {
    this.$http.get("/api/cards").then(response => {
      this.cardProps = response.data;
      this.cardProps.reverse();
      this.cardProps = this.cardProps.slice(0,20);
    });
  }
};
</script>