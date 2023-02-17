<script setup>
import NotificationCounter from "@/features/notification-counter.vue";

defineProps({
  amount: Number,
});
</script>

<template>
  <header class="header">
    <h2 class="title">Notifications</h2>
    <notification-counter :amount="amount" />
    <slot />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  padding-block: 30px;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 20px;
}

@media (min-width: 768px) {
  .header {
    padding-block: 30px;
  }

  .title {
    font-size: 24px;
  }
}
</style>
