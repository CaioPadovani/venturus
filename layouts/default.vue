<template>
  <v-app>
    <v-app-bar class="appBarColor" fixed app>
      <img src="../static/venturus-logo.png" width="50" height="50" />
      <v-toolbar-title class="white--text ml-5" v-text="title" />
      <v-spacer />
      <span class="white--text mr-5"
        ><b>{{ user.fullName }}</b></span
      >
      <v-menu bottom min-width="200px" rounded offset-y>
        <template #activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="brown" size="48">
              <span class="white--text headline">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main style="padding: 5px">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer style="justify-content: center" :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} - All rigths reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      user: {
        initials: 'CP',
        fullName: 'Caio Padovani',
        email: 'caiopadovani@gmail.com',
      },
      title: 'Squad Management Tool',
    }
  },
}
</script>
<style>
.appBarColor {
  background: linear-gradient(
    90deg,
    rgba(237, 76, 105, 1) 0%,
    rgba(147, 61, 123, 1) 60%
  );
}
.theme--light.v-application {
  background: linear-gradient(180.06deg, #e1e1e1 72.91%, #ffffff 114.72%);
}
</style>
