<template>
  <v-flex xs12 sm4 md4 lg2>
    <v-card hover :to="`/cards/${cardProp._id}`">
      <v-img
        :src="cardProp.imgURL"
        aspect-ratio="1"></v-img>
      <v-card-title primary-title>
        <div style="height: 100px; overflow: auto;">
          <h3 class="headline mb-0 orange--text">{{ cardProp.title }}</h3>
          <div v-html="cardProp.desc"></div>
        </div>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn flat class="red--text">ATK<br>{{ cardProp.atk }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat class="blue--text">DEF<br>{{ cardProp.def }}</v-btn>
      </v-card-actions>
      <br>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: ["cardProp"],
  data() {
    return {};
  }
};
</script>
