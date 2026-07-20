<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Chart from "chart.js/auto";
import WidgetCard from "../ui/WidgetCard.vue";
import { marketTable, marketChartData } from "../../data/visitsData.js";

const canvasRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = new Chart(canvasRef.value, {
    type: "line",
    data: {
      labels: marketChartData.map((_, i) => i),
      datasets: [
        {
          data: marketChartData,
          borderColor: "#3979f6",
          backgroundColor: "rgba(57, 121, 246, 0.12)",
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
  <WidgetCard title="Market Stats" eyebrow>
    <p class="earned-amount">$720 Earned</p>
    <p class="earned-note">
      Target <strong>$820</strong> day earnings is <strong>96%</strong> reached.
    </p>
    <table class="mini-table">
      <tr v-for="row in marketTable" :key="row.name">
        <td class="checkbox-cell"><input type="checkbox" /></td>
        <td>{{ row.name }}</td>
        <td>{{ row.price }}</td>
      </tr>
    </table>
    <div class="mini-chart-wrap"><canvas ref="canvasRef"></canvas></div>
  </WidgetCard>
</template>

<style scoped>
.earned-amount {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0 0 4px;
}
.earned-note {
  font-size: 12px;
  color: var(--color-gray);
  margin: 0 0 16px;
}
.earned-note strong {
  color: var(--color-text-dark);
}
.mini-table {
  width: 100%;
  border-collapse: collapse;
}
.mini-table td {
  padding: 8px 0;
  border-top: 1px solid var(--color-border);
  font-size: 12.5px;
}
.mini-table td:last-child {
  text-align: right;
  font-weight: 700;
  color: var(--color-text-dark);
}
.checkbox-cell {
  width: 24px;
}
.mini-table input[type="checkbox"] {
  accent-color: var(--color-primary);
  width: 14px;
  height: 14px;
}
.mini-chart-wrap {
  margin-top: 18px;
  height: 80px;
}
</style>
