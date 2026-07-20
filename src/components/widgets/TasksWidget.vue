<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import { analyticsTasks } from "../../data/analyticsData.js";

const typeIcon = {
  Meeting: "fa-users",
  Call: "fa-phone",
  Interview: "fa-user-tie",
};
</script>

<template>
  <WidgetCard title="Tasks" eyebrow>
    <ul class="task-list">
      <li v-for="task in analyticsTasks" :key="task.title">
        <span class="task-icon"><i class="fa-solid" :class="typeIcon[task.type] ?? 'fa-check'"></i></span>
        <div class="task-body">
          <p class="task-type">{{ task.type }}</p>
          <h6>{{ task.title }}</h6>
        </div>
        <span class="task-time">{{ task.time }}</span>
      </li>
    </ul>
  </WidgetCard>
</template>

<style scoped>
.task-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.task-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-top: 1px solid var(--color-border);
}
.task-list li:first-child {
  border-top: none;
  padding-top: 0;
}
.task-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--color-bg);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}
.task-body {
  flex: 1;
  min-width: 0;
}
.task-type {
  margin: 0;
  font-size: 10px;
  color: var(--color-gray);
  text-transform: uppercase;
}
.task-body h6 {
  margin: 2px 0 0;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--color-text-dark);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.task-time {
  font-size: 11.5px;
  color: var(--color-gray);
  flex-shrink: 0;
}
</style>
