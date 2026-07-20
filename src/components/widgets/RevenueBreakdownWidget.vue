<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Chart from "chart.js/auto";
import WidgetCard from "../ui/WidgetCard.vue";
import { revenueBreakdown } from "../../data/analyticsData.js";

const colorMap = {
  primary: "#3979f6",
  danger: "#ee3158",
  success: "#22b573",
  gray: "#b4bdcd",
};

const canvasRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = new Chart(canvasRef.value, {
    type: "doughnut",
    data: {
      labels: revenueBreakdown.map((s) => s.label),
      datasets: [
        {
          data: revenueBreakdown.map((s) => s.value),
          backgroundColor: revenueBreakdown.map((s) => colorMap[s.variant]),
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
    },
  });
});

onBeforeUnmount(() => {
  chartInstance?.destroy();
});
</script>

<template>
  <WidgetCard title="Revenue Breakdown">
    <div class="donut-wrap">
      <div class="donut-chart"><canvas ref="canvasRef"></canvas></div>
      <ul class="legend">
        <li v-for="s in revenueBreakdown" :key="s.label">
          <span class="dot" :class="`dot--${s.variant}`"></span>{{ s.label }}
          <strong>{{ s.value }}%</strong>
        </li>
      </ul>
    </div>
  </WidgetCard>
</template>

<style scoped>
.donut-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}
.donut-chart {
  width: 90px;
  height: 90px;
  flex-shrink: 0;
}
.legend {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
}
.legend li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--color-text);
  margin-bottom: 8px;
}
.legend li strong {
  margin-left: auto;
  color: var(--color-text-dark);
  font-size: 12px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.dot--primary {
  background: var(--color-primary);
}
.dot--danger {
  background: var(--color-danger);
}
.dot--success {
  background: var(--color-success);
}
.dot--gray {
  background: var(--color-gray);
}
</style>
