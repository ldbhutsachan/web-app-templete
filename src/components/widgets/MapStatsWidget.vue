<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import ProgressBar from "../ui/ProgressBar.vue";
import { mapStats } from "../../data/visitsData.js";
</script>

<template>
  <WidgetCard title="Map Statistics">
    <template #tools>
      <i class="fa-solid fa-gear"></i>
      <i class="fa-solid fa-arrows-rotate"></i>
      <i class="fa-solid fa-xmark"></i>
    </template>

    <p class="status-line">Status: <strong class="text-success">Live</strong></p>
    <p class="status-line">
      <span class="circle-icon"><i class="fa-solid fa-location-dot"></i></span>
      {{ mapStats.countries }} Countries, {{ mapStats.cities }} Cities
    </p>

    <div v-for="row in mapStats.rows" :key="row.name" class="progress-stat-row">
      <div class="stat-main">
        <h6>{{ row.name }}</h6>
        <p>{{ row.desc }}</p>
        <ProgressBar :value="row.value" :variant="row.variant" />
      </div>
      <div class="stat-badge">{{ row.badge }}%</div>
    </div>

    <p class="subheading">Map Distributions</p>
    <p class="status-line">Tracking: <strong class="text-success">Active</strong></p>
    <p class="status-line">
      <span class="circle-icon"><i class="fa-solid fa-gear"></i></span>
      {{ mapStats.elements }} elements installed, {{ mapStats.sets }} sets
    </p>

    <div class="search-box">
      <input type="text" placeholder="Search..." />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </WidgetCard>
</template>

<style scoped>
.status-line {
  margin: 0 0 10px;
  font-size: 13px;
}
.text-success {
  color: var(--color-success);
}
.circle-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  font-size: 11px;
  margin-right: 8px;
}
.progress-stat-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 16px 0;
}
.progress-stat-row .stat-main {
  flex: 1;
}
.progress-stat-row h6 {
  margin: 0 0 3px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-dark);
}
.progress-stat-row p {
  margin: 0 0 6px;
  font-size: 11.5px;
  color: var(--color-gray);
}
.stat-badge {
  min-width: 46px;
  text-align: center;
  font-weight: 700;
  font-size: 12.5px;
  background: var(--color-bg);
  border-radius: 8px;
  padding: 6px 4px;
  color: var(--color-text-dark);
}
.subheading {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 18px 0 4px;
}
.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-bg);
  border-radius: 8px;
  padding: 8px 12px;
  margin-top: 16px;
}
.search-box input {
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-family: inherit;
  font-size: 12.5px;
}
</style>
