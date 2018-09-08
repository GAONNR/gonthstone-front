<template>
  <v-app>
    <v-toolbar dark color="primary" height="64">
      <router-link to="/">
        <v-toolbar-title class="white--text">GonthStone</v-toolbar-title>
      </router-link>
      
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="white--text" to="/cardlist">Cards List</v-btn>
        <v-btn flat class="white--text" to="/createcard">Create Card</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>G40N&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
