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
    <div class="sticky-header">
      <div class="flex justify-content-between align-items-center">
        <h2 class="m-0 py-4">Settings</h2>
        <div>
          <Button
            label="Close"
            class="p-button-text p-button-sm"
            @click="isSidebarVisible = false"
          ></Button>
          <Button
            label="Export"
            icon="ri-download-line"
            class="p-button-sm ml-2"
            @click="exportImage"
          >
          </Button>
        </div>
      </div>
      <ProgressBar v-if="isExporting" mode="indeterminate" style="height: 0.5em; width: 100%" />
    </div>

    <config-content></config-content>
  </Sidebar>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";

import ConfigContent from "@/components/ConfigContent.vue";

import * as htmlToImage from "html-to-image";
import { useToast } from "primevue/usetoast";
import { saveAs } from "file-saver";

export default defineComponent({
  components: {
    Sidebar,
    Button,
    ProgressBar,
    ConfigContent,
  },
  setup() {
    const toast = useToast();
    let isSidebarVisible = ref(true);
    let isExporting = ref(false);

    const exportImage = function () {
      isExporting.value = true;

      toast.add({
        severity: "danger",
        summary: "Failed to export image",
        detail: "",
        life: 5000,
      });
      let node = document.getElementById("igfy-layout") as HTMLImageElement;
      htmlToImage
        .toSvg(node)
        .then((dataUrl) => {
          saveAs(dataUrl, "igfy-export");
          isExporting.value = false;
        })
        .catch((err) => {
          isExporting.value = false;

          toast.add({
            severity: "danger",
            summary: "Failed to export image",
            detail: err,
            life: 5000,
          });
          console.error(err);
        });
    };

    return { isSidebarVisible, isExporting, exportImage };
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

.sticky-header {
  position: sticky;
  top: 0;
  background: white;
  border-bottom: solid 1px #eee;
  z-index: 1001;
}
</style>
