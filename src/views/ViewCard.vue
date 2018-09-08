<template>
  <v-container grid-list-md>
      <v-layout column align-center>
          <h1>View the Card</h1>
      </v-layout>
      <v-layout row wrap align-center>
        <v-flex xs0 sm4 md4 lg5></v-flex>
        <stone-card :cardProp=cardProp :key=cardProp.cardTitle></stone-card>
      </v-layout>
  </v-container>
</template>
<script>
import stoneCard from "./Card.vue";
export default {
    props: ['cardid'],
    components: { stoneCard },
    data() {
        return {
            cardProp: {}
        };
    },
    mounted() {
        console.log(this.$route.params.cardid);
        this.$http.get(`/api/cards/${this.$route.params.cardid}`).then(response => {
            console.log(response.data);
            this.cardProp = response.data;
        });
    }
};
</script>
