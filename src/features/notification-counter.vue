<script setup>
defineProps({
  amount: Number,
});
</script>

<template>
  <span class="counter">
    {{ amount }}
  </span>
</template>

<style scoped>
.counter {
  margin-inline: 10px auto;
  padding: 0 10px;
  background-color: var(--blue);
  border-radius: 3px;
  color: var(--white);
  font-weight: 600;
}
</style>
