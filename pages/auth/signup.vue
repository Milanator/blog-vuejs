<script setup lang="ts">
import Input from "~/components/form/input.vue";
import Subtitle from "~/components/subtitle.vue";
import Primary from "~/components/button/primary.vue";
import { useAuthStore } from "~/stores/authStore.ts";

const authStore = useAuthStore();
</script>
<template>
  <div class="max-w-2xl mx-auto my-4">
    <Subtitle text="Sign up" />
    <div
      class="w-full bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-4">
        <div class="mb-2">
          <Input
            @change="authStore.name = $event"
            id="name"
            placeholder="Name"
          />
        </div>

        <div class="mb-2">
          <Input
            @change="authStore.password = $event"
            id="password"
            placeholder="Password"
          />
        </div>

        <Input
          @change="authStore.email = $event"
          type="email"
          id="email"
          placeholder="Email"
        />

        <div class="text-right">
          <Primary text="Register" @click="authStore.signUp" />
        </div>
      </div>
    </div>
  </div>
</template>
