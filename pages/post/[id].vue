<script setup lang="ts">
import { usePostStore } from "~/stores/postStore.ts";

const postStore = usePostStore();

const route = useRoute();

postStore.setPost(route.params.id);
</script>

<template>Post detail</template>
