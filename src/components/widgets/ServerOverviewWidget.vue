<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import { serverOverview } from "../../data/analyticsData.js";

const colorMap = {
  primary: "#3979f6",
  danger: "#ee3158",
  success: "#22b573",
};

function sparklinePoints(trend) {
  const max = Math.max(...trend);
  const min = Math.min(...trend);
  const range = max - min || 1;
  const stepX = 100 / (trend.length - 1);
  return trend
    .map((v, i) => `${(i * stepX).toFixed(1)},${(30 - ((v - min) / range) * 28 - 1).toFixed(1)}`)
    .join(" ");
}
</script>

<template>
  <WidgetCard title="Server Overview">
    <div v-for="(server, i) in serverOverview" :key="i" class="server-row">
      <p class="server-meta">{{ server.pct }}% / {{ server.temp }}&deg;C / {{ server.frequency }} Ghz</p>
      <svg class="sparkline" viewBox="0 0 100 30" preserveAspectRatio="none">
        <polyline
          :points="sparklinePoints(server.trend)"
          fill="none"
          :stroke="colorMap[server.variant]"
          stroke-width="2"
        />
      </svg>
    </div>
  </WidgetCard>
</template>

<style scoped>
.server-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.server-row:last-child {
  margin-bottom: 0;
}
.server-meta {
  margin: 0;
  font-size: 11px;
  color: var(--color-gray);
  width: 130px;
  flex-shrink: 0;
}
.sparkline {
  width: 100%;
  height: 30px;
}
</style>
