<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar -->
      <Topbar />

      <!-- Main Section -->
      <main class="flex-1 bg-gray-100 p-6 overflow-auto">
        <h2 class="text-2xl font-bold mb-4">Dashboard Overview</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded shadow p-4">Widget 1</div>
          <div class="bg-white rounded shadow p-4">Widget 2</div>
          <div class="bg-white rounded shadow p-4">Widget 3</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
</script>
