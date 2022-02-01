<template>
  <Button
    class="p-button-rounded p-button-raised fab"
    icon="ri-settings-2-line"
    @click="isSidebarVisible = true"
  ></Button>
  <Sidebar
    v-model:visible="isSidebarVisible"
    :baseZIndex="1000"
    position="right"
    class="p-sidebar-md"
    :showCloseIcon="false"
    :modal="false"
  >
    <div class="flex justify-content-between align-items-center mt-4">
      <h2>Settings</h2>
      <Button
        label="Close"
        class="p-button-outlined p-button-sm"
        @click="isSidebarVisible = false"
      ></Button>
    </div>

    <config-content></config-content>
  </Sidebar>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import ConfigContent from "@/components/ConfigContent.vue";

export default defineComponent({
  components: {
    Sidebar,
    Button,
    ConfigContent,
  },
  data() {
    return {
      isSidebarVisible: true,
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

body {
  margin: 0;
}

.fab {
  right: 0 !important;
  bottom: 0 !important;
  position: fixed !important;
  margin: 20px !important;
}

.p-sidebar-header {
  display: none;
}
</style>
