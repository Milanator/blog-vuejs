<script setup lang="ts">
import Input from "~/components/form/input.vue";
import Subtitle from "~/components/subtitle.vue";
import Primary from "~/components/button/primary.vue";
import { useAuthStore } from "~/stores/authStore.ts";
import { useUser } from "~/composables/useUser.ts";

const authStore = useAuthStore();

const { login } = useUser();
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <Subtitle text="Login" />
    <div
      class="w-full bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <form class="p-4" @submit="login">
        <div class="mb-2">
          <Input
            @change="authStore.email = $event"
            @enter="login"
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>

        <Input
          @change="authStore.password = $event"
          @enter="login"
          id="password"
          type="password"
          placeholder="Password"
        />

        <div class="text-right">
          <Primary text="Login" @click="login" />
        </div>
      </form>
    </div>
  </div>
</template>
