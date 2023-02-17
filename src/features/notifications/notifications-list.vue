<script setup>
import NotificationItem from "@/features/notifications/notification-item.vue";

defineProps({
  notifications: Array,
});
</script>

<template>
  <ul class="notification-list">
    <li v-for="notification in notifications" :key="notification.id">
      <notification-item :="notification" />
    </li>
  </ul>
</template>

<style scoped>
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
