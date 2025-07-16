<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar -->
      <Topbar />

      <!-- Main Section -->
      <main class="flex-1 p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'

export default {
  components: {
    Sidebar,
    Topbar
  }
}
</script>

<style>
* {
  margin: auto;
  outline: none;
}
</style>