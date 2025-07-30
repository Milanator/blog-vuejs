import { useInfiniteScrollStore } from "~/stores/infiniteScrollStore.ts";
import { usePostStore } from "~/stores/postStore.ts";
import { useAppStore } from "~/stores/appStore.ts";
import { ref } from "vue";

export function usePost() {
  const postStore = usePostStore();
  const appStore = useAppStore();
  const infiniteScrollStore = useInfiniteScrollStore();

  const text = ref(undefined);

  async function storePost(event: Event): void {
    event.preventDefault();

    const response = await postStore.storePost();

    if (response) {
      appStore.setSuccessMessage(response.data.data.message);

      postStore.clearFields();

      // text.value.focus();
    }
  }

  async function updatePost(event: Event): void {
    event.preventDefault();

    const response = await postStore.updatePost();

    if (response) {
      appStore.setSuccessMessage(response.data.data.message);

      // redirect listing
      navigateTo("/post");
    }
  }

  function deletePost(id: string): void {
    if (confirm("Naozaj chceš odstrániť položku?")) {
      const response = postStore.deletePost(id);

      if (response) {
        response.then((r: object) => {
          appStore.setSuccessMessage(r.data.data.message);

          // redirect listing
          return navigateTo("/post");
        });
      }
    }
  }

  function loadPosts(page: number = 1) {
    infiniteScrollStore.loading = true;

    return postStore.fetchPosts(page).then((response: object) => {
      infiniteScrollStore.page = response.data.data.page;
      infiniteScrollStore.totalPages = response.data.data.totalPages;

      postStore.mergePosts(response.data.data.items);

      // stop loading new pages
      infiniteScrollStore.loading = false;

      return response;
    });
  }

  function initActions() {
  }

  return {
    storePost,
    updatePost,
    deletePost,
    loadPosts,
    initActions,
    text,
  };
}
