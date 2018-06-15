<template>
    <div>
        <div class="application full-height">
          <app-headers />
          <app-left-sidebar />
          <router-view />
        </div>
        <app-right-sidebar />
    </div>
</template>
<script>
import AppHeaders from "@/modules/shared/header";
import AppLeftSidebar from "@/modules/shared/sidebar/left-sidebar";
import AppRightSidebar from "@/modules/shared/sidebar/right-sidebar";
export default {
  name: "Layout",
  components: {
    AppHeaders,
    AppLeftSidebar,
    AppRightSidebar
  },
  data: function() {
    return {};
  }
};
</script>

