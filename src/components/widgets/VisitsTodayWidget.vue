<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import { visitsToday } from "../../data/analyticsData.js";
</script>

<template>
  <WidgetCard title="Visits Today">
    <div class="stat-headline">
      <h2>{{ visitsToday.count }}</h2>
      <i class="fa-solid fa-arrow-right rotate-arrow"></i>
    </div>
    <div class="stat-cols">
      <div class="stat-col">
        <p class="stat-label">Logins</p>
        <h6>+{{ visitsToday.logins }}</h6>
      </div>
      <div class="stat-col">
        <p class="stat-label">Sign Out</p>
        <h6>{{ visitsToday.signOutPct }}%</h6>
      </div>
      <div class="stat-col">
        <p class="stat-label">Rate</p>
        <h6>{{ visitsToday.ratePct }}%</h6>
      </div>
    </div>
  </WidgetCard>
</template>

<style scoped>
.stat-headline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.stat-headline h2 {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.rotate-arrow {
  color: var(--color-success);
  transform: rotate(-45deg);
  font-size: 15px;
}
.stat-cols {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}
.stat-label {
  margin: 0 0 3px;
  font-size: 10.5px;
  color: var(--color-gray);
}
.stat-col h6 {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-dark);
}
</style>
