<script setup>
import { computed, reactive } from "vue";

import Layout from "@/shared/ui/app-container.vue";
import NotificationsList from "@/features/notifications/notifications-list.vue";
import AppHeader from "@/features/app-header.vue";

import { data } from "@/shared/data";

import "./styles/index.css";

const notifications = reactive(data);

const amount = computed(() =>
  notifications.reduce((amount, item) => (item.unread ? ++amount : amount), 0)
);

function t() {
  return notifications.forEach((item) => (item.unread = false));
}
</script>

<template>
  <Layout>
    <template #header>
      <app-header :amount="amount">
        <button @click="t" class="button">Mark all as read</button>
      </app-header>
    </template>
    <template #default>
      <notifications-list :notifications="notifications" />
    </template>
  </Layout>
</template>

<style scoped>
.button {
  color: var(--dark-grayish-blue);
  border: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
}

.button:hover {
  color: var(--blue);
}

@media (min-width: 768px) {
  .button {
    font-size: 18px;
  }
}
</style>
