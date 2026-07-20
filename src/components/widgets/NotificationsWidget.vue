<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import { analyticsNotifications } from "../../data/analyticsData.js";
</script>

<template>
  <WidgetCard eyebrow>
    <template #title>
      Notifications
      <span class="badge-count">{{ analyticsNotifications.length }}</span>
    </template>
    <ul class="notif-list">
      <li v-for="(notification, i) in analyticsNotifications" :key="i">
        <span class="notif-icon" :class="`notif-icon--${notification.variant}`">
          <i class="fa-solid" :class="notification.icon"></i>
        </span>
        <p v-html="notification.html"></p>
      </li>
    </ul>
  </WidgetCard>
</template>

<style scoped>
.badge-count {
  background: var(--color-success);
  color: #fff;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: 8px;
  font-weight: 700;
  vertical-align: middle;
}
.notif-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.notif-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 9px 0;
}
.notif-list li:first-child {
  padding-top: 0;
}
.notif-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10.5px;
  color: #fff;
  flex-shrink: 0;
  margin-top: 1px;
}
.notif-icon--primary {
  background: var(--color-primary);
}
.notif-icon--success {
  background: var(--color-success);
}
.notif-icon--danger {
  background: var(--color-danger);
}
.notif-icon--gray {
  background: var(--color-gray);
}
.notif-list p {
  margin: 0;
  font-size: 12.5px;
  color: var(--color-text);
  line-height: 1.4;
}
.notif-list p :deep(strong) {
  color: var(--color-text-dark);
  font-weight: 700;
}
</style>
