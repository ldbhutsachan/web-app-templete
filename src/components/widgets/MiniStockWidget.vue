<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Chart from "chart.js/auto";
import WidgetCard from "../ui/WidgetCard.vue";
import { nasdaqStock } from "../../data/widgetsData.js";

const canvasRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = new Chart(canvasRef.value, {
    type: "line",
    data: {
      labels: nasdaqStock.data.map((_, i) => i),
      datasets: [
        {
          data: nasdaqStock.data,
          borderColor: "#22b573",
          backgroundColor: "rgba(34, 181, 115, 0.12)",
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false } },
    },
  });
});

onBeforeUnmount(() => {
  chartInstance?.destroy();
});
</script>

<template>
  <WidgetCard>
    <p class="label">{{ nasdaqStock.label }}</p>
    <h3>{{ nasdaqStock.price }} <span>USD</span></h3>
    <p class="sub">Last Sale {{ nasdaqStock.lastSale }} USD</p>
    <div class="mini-chart-wrap"><canvas ref="canvasRef"></canvas></div>
  </WidgetCard>
</template>

<style scoped>
.label {
  margin: 0 0 2px;
  font-size: 13px;
  color: var(--color-text);
}
h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  color: var(--color-text-dark);
}
h3 span {
  font-weight: 700;
}
.sub {
  margin: 4px 0 0;
  font-size: 11.5px;
  color: var(--color-gray);
}
.mini-chart-wrap {
  height: 60px;
  margin-top: 10px;
}
</style>
