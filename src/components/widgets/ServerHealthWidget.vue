<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import ProgressBar from "../ui/ProgressBar.vue";
import { serverHealth } from "../../data/widgetsData.js";
</script>

<template>
  <WidgetCard title="Server Overview" eyebrow>
    <div v-for="metric in serverHealth" :key="metric.label" class="metric-row">
      <div class="metric-head">
        <span class="metric-label">{{ metric.label }}</span>
        <span class="metric-meta">{{ metric.meta }}</span>
      </div>
      <ProgressBar :value="metric.value" variant="primary" />
    </div>
  </WidgetCard>
</template>

<style scoped>
.metric-row {
  margin-bottom: 12px;
}
.metric-row:last-child {
  margin-bottom: 0;
}
.metric-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.metric-label {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.metric-meta {
  font-size: 11px;
  color: var(--color-gray);
}
</style>
