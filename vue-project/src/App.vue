<script setup lang="ts">
import sidebarView from '@/views/SideBarView.vue'
</script>



<template>
<div id="mainDiv">
  <sidebarView id="sidebar"></sidebarView>
  <router-view id="router"></router-view>
</div>





</template>

<style>

#app{
  width: 960px;
  margin: 10px auto;
}

#mainDiv{
  display: flex;
}


#sidebar{
  border:1px solid red;
  width:300px;
}
#router{
  border:1px solid red;
  margin-left: 1%;
  flex:1;
}

</style>
