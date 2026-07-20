<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import ProgressBar from "../ui/ProgressBar.vue";
import { appPerformance } from "../../data/analyticsData.js";
</script>

<template>
  <WidgetCard title="App Performance">
    <p class="legend-line">
      <span class="legend-item"><span class="dot dot--success"></span>This Period</span>
      <span class="legend-item"><span class="dot dot--primary"></span>Last Period</span>
    </p>

    <h6 class="metric-label">SDK</h6>
    <ProgressBar class="mb-xs" :value="appPerformance.sdk.thisPeriod" variant="success" />
    <ProgressBar class="mb-sm" :value="appPerformance.sdk.lastPeriod" variant="primary" />

    <h6 class="metric-label">Integration</h6>
    <ProgressBar class="mb-xs" :value="appPerformance.integration.thisPeriod" variant="success" />
    <ProgressBar :value="appPerformance.integration.lastPeriod" variant="primary" />
  </WidgetCard>
</template>

<style scoped>
.legend-line {
  display: flex;
  gap: 16px;
  margin: 0 0 16px;
  font-size: 11px;
  color: var(--color-gray);
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.dot--success {
  background: var(--color-success);
}
.dot--primary {
  background: var(--color-primary);
}
.metric-label {
  margin: 0 0 6px;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--color-text-dark);
}
.mb-xs {
  margin-bottom: 6px;
}
.mb-sm {
  margin-bottom: 14px;
}
</style>
