<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto"
              ><v-card class="mx-auto text-center" subtitle="Log in">
                <v-img class="mx-auto" src="/public/img/login_logo.png" width="25%"></v-img>
                <template v-slot:title>
                  <span class="font-weight-black">SupportLink</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field label="Email" variant="outlined"></v-text-field>

                    <v-text-field
                      label="Password"
                      type="password"
                      variant="outlined"
                    ></v-text-field>

                    <v-btn class="mt-2" type="submit" block>Log in</v-btn>
                  </v-form>

                  <v-divider class="my-5"></v-divider>

                  <h5 class="text-center">
                    Don't have account?
                    <RouterLink class="text-primary" to="/register"
                      >Click here to Register</RouterLink
                    >
                  </h5>
                </v-card-text>
              </v-card></v-col
            >
          </v-row>
        </v-container>
      </v-main>

      <v-footer border app>2024 - SupportLink</v-footer>
    </v-app>
  </v-responsive>
</template>
