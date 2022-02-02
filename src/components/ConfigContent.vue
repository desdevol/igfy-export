<template lang="pug">
.config-content
  h5 Author
  .grid.p-fluid
    .col-12.field
      label Username
      InputText.p-inputtext-sm(v-model="authorUsername")

    .col-12.field
      label Avatar
      FileUpload(
        mode="basic",
        accept="image/*",
        chooseLabel="Choose Author Avatar",
        @select="authorAvatarSelected"
      )
  h5 Post
  .grid.p-fluid
    .col-12.field
      label Picture
      FileUpload(
        mode="basic",
        accept="image/*",
        chooseLabel="Choose Post Picture",
        @select="postPictureSelected"
      )
    .col-12.field
      label Date
      Calendar.p-calendar(
        v-model="postDate",
        dateFormat="MM d",
        autocomplete="off",
        inputClass="p-inputtext-sm w-full"
      )

  h5 Likes
  .grid.p-fluid
    .col-12
      .field
        label Avatars
        FileUpload(
          mode="basic",
          accept="image/*",
          multiple,
          :fileLimit="3",
          chooseLabel="Choose Like Avatars",
          @select="likesAvatarsSelected"
        )
      .field
        label First Like Username
        InputText.p-inputtext-sm(v-model="likesFirstUserName")
      .field
        label Number of Other Likes
        InputText.p-inputtext-sm(v-model="numberOfOtherLikes")

  h5 Misc
  .grid.p-fluid
    .col-12
      .field
        label Profile Avatars
        FileUpload(
          mode="basic",
          accept="image/*",
          chooseLabel="Choose Profile Avatar",
          @select="profileAvatarSelected"
        )
      .field
        label Number of Comments
        InputText.p-inputtext-sm(v-model="numberOfComments")
</template>

<script lang="ts">
import { defineComponent, computed, WritableComputedRef } from "vue";
import { useStore } from "vuex";

import { useToast } from "primevue/usetoast";
import InputText from "primevue/inputtext";
import FileUpload from "primevue/fileupload";
import Calendar from "primevue/calendar";

export default defineComponent({
  components: {
    InputText,
    FileUpload,
    Calendar,
  },
  setup() {
    const store = useStore();
    const toast = useToast();

    const authorAvatar = computed(() => {
      return store.state.author.avatar;
    });

    const authorUsername: WritableComputedRef<string> = computed({
      get() {
        return store.state.author.username;
      },
      set(val) {
        store.commit("updateAuthorUsername", val ?? "");
      },
    });

    const postPicture = computed(() => {
      return store.state.post.picture;
    });

    const postDate: WritableComputedRef<string> = computed({
      get() {
        return store.state.post.date;
      },
      set(val) {
        store.commit("updatePostDate", val ?? "");
      },
    });

    const likesAvatars = computed(() => {
      return store.state.likes.avatars;
    });

    const likesFirstUserName: WritableComputedRef<string> = computed({
      get() {
        return store.state.likes.firstUserName;
      },
      set(val) {
        store.commit("updateLikesFirstUserName", val ?? "");
      },
    });

    const numberOfOtherLikes: WritableComputedRef<string> = computed({
      get() {
        return store.state.likes.numberOfOtherLikes;
      },
      set(val) {
        store.commit("updateNumberOfOtherLikes", val ?? "");
      },
    });

    const numberOfComments: WritableComputedRef<string> = computed({
      get() {
        return store.state.numberOfComments;
      },
      set(val) {
        store.commit("updateNumberOfComments", val ?? "");
      },
    });

    const profileAvatar = computed(() => {
      return store.state.profileAvatar;
    });

    // Functions
    const authorAvatarSelected = ({ files }: { files: Array<any> }) => {
      store.commit("updateAuthorAvatar", files[0].objectURL ?? "");
    };

    const postPictureSelected = ({ files }: { files: Array<any> }) => {
      store.commit("updatePostPicture", files[0].objectURL ?? "");
    };

    const likesAvatarsSelected = ({ files }: { files: Array<any> }) => {
      if (files.length > 3) {
        toast.add({
          severity: "warn",
          summary: "Avatars Limit Exceeded",
          detail: "Maximum number for likes avatars is 3, extra avatars selected will be omitted.",
          life: 5000,
        });
      }
      let avatars = files.slice(0, 3).map((file) => file.objectURL);
      store.commit("updateLikesAvatars", avatars ?? []);
    };

    const profileAvatarSelected = ({ files }: { files: Array<any> }) => {
      store.commit("updateProfileAvatar", files[0].objectURL ?? "");
    };

    return {
      // Computed
      authorAvatar,
      authorUsername,
      postPicture,
      postDate,
      likesAvatars,
      likesFirstUserName,
      numberOfOtherLikes,
      numberOfComments,
      profileAvatar,
      // Functions
      authorAvatarSelected,
      postPictureSelected,
      likesAvatarsSelected,
      profileAvatarSelected,
    };
  },
});
</script>

<style lang="scss" scoped>
.config-content {
  .field * {
    display: block;
  }
}
</style>
