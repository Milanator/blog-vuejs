<script setup lang="ts">
import Input from "~/components/form/input.vue";
import Subtitle from "~/components/subtitle.vue";
import Primary from "~/components/button/primary.vue";
import { useAuthStore } from "~/stores/authStore.ts";
import { useAppStore } from "../../stores/appStore";

const authStore = useAuthStore();
const appStore = useAppStore();

const login = (event: Event) => {
  authStore.login().then((response) => {
    console.log(response);

    appStore.setSuccessMessage(response.data.data.message);

    navigateTo("/post");
  });
};
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <Subtitle text="Login" />
    <div
      class="w-full bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-4">
        <div class="mb-2">
          <Input
            @change="authStore.email = $event"
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>

        <Input
          @change="authStore.password = $event"
          id="password"
          type="password"
          placeholder="Password"
        />

        <div class="text-right">
          <Primary text="Login" @click="login" />
        </div>
      </div>
    </div>
  </div>
</template>
