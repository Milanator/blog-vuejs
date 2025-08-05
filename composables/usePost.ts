import { useInfiniteScrollStore } from "~/stores/infiniteScrollStore.ts";
import { usePostStore } from "~/stores/postStore.ts";
import { useFileStore } from "~/stores/fileStore.ts";
import { useAppStore } from "~/stores/appStore.ts";
import { ref } from "vue";

export function usePost() {
  const fileStore = useFileStore();
  const postStore = usePostStore();
  const appStore = useAppStore();
  const infiniteScrollStore = useInfiniteScrollStore();

  const text = ref(undefined);

  async function storePost(event: Event): void {
    event.preventDefault();

    const storeFileResponse = await fileStore.storeFile();

    const storePostResponse = await postStore.storePost(
      storeFileResponse.data.data.imageUrl
    );

    if (storePostResponse) {
      appStore.setSuccessMessage(storePostResponse.data.data.storePost.message);

      postStore.items = [
        storePostResponse.data.data.storePost.item,
        ...postStore.items,
      ];

      postStore.clearFields();

      // text.value.focus();
    }
  }

  async function updatePost(event: Event): void {
    event.preventDefault();

    let imageUrl: string | undefined = postStore.post.imageUrl;

    if (fileStore.file) {
      const updateFileResponse = await fileStore.storeFile(imageUrl);

      imageUrl = updateFileResponse.data.data.imageUrl;
    }

    const updatePostResponse = await postStore.updatePost(imageUrl);

    if (updatePostResponse) {
      appStore.setSuccessMessage(updatePostResponse.data.data.message);

      postStore.items = [];

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
      infiniteScrollStore.page = response.data.data.getPosts.page;
      infiniteScrollStore.totalPages = response.data.data.getPosts.totalPages;

      postStore.mergePosts(response.data.data.getPosts.items);

      // stop loading new pages
      infiniteScrollStore.loading = false;

      return response;
    });
  }

  function initActions() {}

  return {
    storePost,
    updatePost,
    deletePost,
    loadPosts,
    initActions,
    text,
  };
}
