<script setup>
import { computed } from "vue";
import WidgetCard from "../ui/WidgetCard.vue";
import { calendarEvents } from "../../data/visitsData.js";

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
const today = new Date();

const days = computed(() => {
  const firstWeekday = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const eventDays = new Set(calendarEvents.map((event) => event.day));

  const cells = Array.from({ length: firstWeekday }, () => ({ day: "", muted: true }));
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({
      day,
      isToday: day === today.getDate(),
      hasEvent: eventDays.has(day),
    });
  }
  return cells;
});
</script>

<template>
  <WidgetCard title="Calendar" eyebrow>
    <template #tools>
      <i class="fa-solid fa-gear"></i>
      <i class="fa-solid fa-xmark"></i>
    </template>

    <div class="calendar-grid">
      <div v-for="(label, i) in weekdays" :key="i" class="dow">{{ label }}</div>
      <div
        v-for="(cell, i) in days"
        :key="i"
        class="day"
        :class="{ muted: cell.muted, today: cell.isToday, 'has-event': cell.hasEvent }"
      >
        {{ cell.day }}
      </div>
    </div>

    <ul class="event-list">
      <li v-for="event in calendarEvents" :key="event.title">
        {{ event.title }}
        <span class="time-badge" :class="`time-badge--${event.variant}`">{{ event.time }}</span>
      </li>
    </ul>
  </WidgetCard>
</template>

<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  text-align: center;
  margin-top: 6px;
}
.dow {
  font-size: 10px;
  color: var(--color-gray);
  font-weight: 700;
  padding-bottom: 6px;
}
.day {
  font-size: 12px;
  padding: 6px 0;
  border-radius: 6px;
  color: var(--color-text);
  position: relative;
}
.day.muted {
  color: #d7dcea;
}
.day.today {
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
}
.day.has-event::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-success);
}
.day.today.has-event::after {
  background: #fff;
}
.event-list {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
}
.event-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 0;
  border-top: 1px solid var(--color-border);
  font-size: 12.5px;
}
.time-badge {
  font-size: 10.5px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 10px;
  color: #fff;
}
.time-badge--primary {
  background: var(--color-primary);
}
.time-badge--success {
  background: var(--color-success);
}
</style>
