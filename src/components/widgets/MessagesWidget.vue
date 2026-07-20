<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import { messages } from "../../data/visitsData.js";
import avatars from "../../assets/avatars.js";
</script>

<template>
  <WidgetCard>
    <template #title>
      <span class="badge-new">New</span>Messages
    </template>
    <template #tools>
      <i class="fa-solid fa-arrows-rotate"></i>
      <i class="fa-solid fa-xmark"></i>
    </template>

    <ul class="msg-list">
      <li v-for="message in messages" :key="message.name" class="msg-item">
        <div class="msg-avatar">
          <img class="av-circle" :src="avatars[message.avatar]" :alt="message.name" />
          <span class="status-dot" :class="`status-dot--${message.status}`"></span>
        </div>
        <div class="msg-body">
          <h6>{{ message.name }}</h6>
          <p>{{ message.text }}</p>
        </div>
      </li>
    </ul>
    <div class="widget-footer-search"><input type="text" placeholder="Search" /></div>
  </WidgetCard>
</template>

<style scoped>
.badge-new {
  background: var(--color-danger);
  color: #fff;
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 10px;
  margin-right: 6px;
  font-weight: 600;
  vertical-align: middle;
}
.msg-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.msg-item {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
}
.msg-item:last-child {
  border-bottom: none;
}
.msg-avatar {
  position: relative;
  flex-shrink: 0;
}
.av-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
.status-dot {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.status-dot--success {
  background: var(--color-success);
}
.status-dot--primary {
  background: var(--color-primary);
}
.status-dot--danger {
  background: var(--color-danger);
}
.msg-body h6 {
  margin: 0 0 2px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-dark);
}
.msg-body p {
  margin: 0;
  font-size: 12px;
  color: var(--color-gray);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 220px;
}
.widget-footer-search {
  margin-top: 14px;
}
.widget-footer-search input {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 9px 12px;
  font-family: inherit;
  font-size: 12.5px;
  outline: none;
  background: var(--color-bg);
}
</style>
