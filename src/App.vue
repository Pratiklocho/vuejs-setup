<template>
  <div id="app" class="full-height">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {}
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import "./../src/assets/css/bootstrap.min.css";
@import "./../src/assets/css/bootstrap-grid.min.css";
@import "./../src/assets/css/bootstrap-reboot.min.css";
@import "./../src/assets/css/jquery.webui-popover.min.css";
@import "./../src/assets/css/navigation.css";
@import "./../src/assets/css/topbar.css";
@import "./../src/assets/css/module-inbox.css";
@import "./../src/assets/css/module-content.css";
</style>
