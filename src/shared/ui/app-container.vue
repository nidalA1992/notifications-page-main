<template>
  <div class="container">
    <slot name="header" />
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: 620px;
  padding-inline: 20px;
  background-color: var(--white);
  box-shadow: 0 0 10px 0 var(--light-grayish-blue-1);
}

@media (min-width: 768px) {
  .container {
    height: initial;
    border-radius: 20px;
    padding-inline: 30px;
    margin: 40px;
  }
}
</style>
