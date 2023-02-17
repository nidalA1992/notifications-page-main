<script setup>
defineProps({
  avatarPath: String,
  notification: String,
  author: String,
  link: String,
  linkPath: String,
  time: String,
  message: String,
  commentedPicture: String,
  unread: Boolean,
});
</script>

<template>
  <div :class="[{ unread }, 'notification']">
    <img class="avatar" alt="Author avatar" :src="avatarPath" />
    <div class="notification-row">
      <a href="#" class="author">{{ author }}{{ "&nbsp;" }}</a>
      <span class="notification-text">
        {{ notification }}
        <a v-if="link" :href="linkPath" class="link">{{ link }}</a>
      </span>
      <div class="time">{{ time }}</div>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
    <a v-if="commentedPicture" href="#" class="commented-link">
      <img class="commented" :src="commentedPicture" alt="Commented picture" />
    </a>
  </div>
</template>

<style scoped>
.notification {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 10px;
  font-size: 12px;
  word-spacing: 2px;
}

.unread {
  background-color: var(--very-light-grayish-blue);
}
.unread .notification-text::after {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-left: 5px;
  background-color: var(--red);
}

.avatar {
  margin-bottom: auto;
  width: 50px;
  height: 50px;
}

.author {
  font-weight: 600;
}

.author:hover {
  color: var(--blue);
}

.notification-text {
  color: var(--dark-grayish-blue);
}

.link {
  font-weight: 600;
  text-decoration: none;
  color: var(--dark-grayish-blue);
}

.link:hover {
  color: var(--blue);
}

.time {
  flex-basis: 100%;
  color: var(--grayish-blue);
}

.message {
  flex-basis: 100%;
  color: var(--dark-grayish-blue);
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  border: 1px solid var(--light-grayish-blue-2);
  cursor: pointer;
}

.message:hover {
  background-color: var(--light-grayish-blue-1);
}

.commented {
  width: 45px;
}

.commented-link {
  flex-shrink: 0;
  margin-bottom: auto;
  margin-left: auto;
}

.commented-link:hover {
  outline: 2px solid var(--light-grayish-blue-1);
  outline-offset: 2px;
  border-radius: 5px;
}
</style>
