import { usePostStore } from "~/stores/postStore.ts";
import { useAppStore } from "~/stores/appStore.ts";
import { ref } from "vue";

export function usePost() {
  const postStore = usePostStore();
  const appStore = useAppStore();

  const text = ref(undefined);

  function storePost(event: Event): void {
    event.preventDefault();

    const response = postStore.storePost();

    if (response) {
      response
        .then((r: object) => {
          appStore.setSuccessMessage(r.data.data.message);

          postStore.clearFields();

          text.value.focus();
        })
        .then(() => {
          postStore.fetchAll();
        });
    }
  }

  function updatePost(event: Event): void {
    event.preventDefault();

    const response = postStore.updatePost();

    if (response) {
      response.then((r: object) => {
        appStore.setSuccessMessage(r.data.data.message);

        // redirect listing
        return navigateTo("/post");
      });
    }
  }

  return {
    storePost,
    updatePost,
    text,
  };
}
