<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Chart from "chart.js/auto";
import WidgetCard from "../components/ui/WidgetCard.vue";
import {
  lineChart,
  sparklines,
  trackingChart,
  markersChart,
  barChart,
  pieChart,
  donutChart,
  stackedBarChart,
} from "../data/chartsData.js";

const lineRef = ref(null);
const sparkRefs = ref([]);
const trackingRef = ref(null);
const markersRef = ref(null);
const barRef = ref(null);
const pieRef = ref(null);
const donutRef = ref(null);
const stackedRef = ref(null);
const instances = [];

function noAxes(extra = {}) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: { x: { display: false }, y: { display: false } },
    ...extra,
  };
}

onMounted(() => {
  instances.push(
    new Chart(lineRef.value, {
      type: "line",
      data: {
        labels: lineChart.labels,
        datasets: [{ data: lineChart.data, borderColor: "#3979f6", backgroundColor: "rgba(57,121,246,.12)", fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2 }],
      },
      options: noAxes(),
    })
  );

  sparklines.forEach((spark, i) => {
    instances.push(
      new Chart(sparkRefs.value[i], {
        type: "bar",
        data: { labels: spark.data.map((_, idx) => idx), datasets: [{ data: spark.data, backgroundColor: spark.color, borderRadius: 2, maxBarThickness: 10 }] },
        options: noAxes(),
      })
    );
  });

  instances.push(
    new Chart(trackingRef.value, {
      type: "line",
      data: {
        labels: trackingChart.labels,
        datasets: trackingChart.series.map((s) => ({ data: s.data, borderColor: s.color, backgroundColor: "transparent", tension: 0.35, pointRadius: 0, borderWidth: 2 })),
      },
      options: noAxes({ plugins: { legend: { display: false }, tooltip: { enabled: true } } }),
    })
  );

  instances.push(
    new Chart(markersRef.value, {
      type: "line",
      data: {
        labels: markersChart.labels,
        datasets: [{ data: markersChart.data, borderColor: "#ee3158", backgroundColor: "#ee3158", tension: 0.3, pointRadius: 4, pointBackgroundColor: "#fff", pointBorderColor: "#ee3158", pointBorderWidth: 2, borderWidth: 2 }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false } }, y: { grid: { color: "#eef1f7" }, ticks: { display: false } } },
      },
    })
  );

  instances.push(
    new Chart(barRef.value, {
      type: "bar",
      data: { labels: barChart.labels, datasets: [{ data: barChart.data, backgroundColor: "#3979f6", borderRadius: 4, maxBarThickness: 30 }] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
        scales: { x: { grid: { display: false } }, y: { grid: { color: "#eef1f7" }, ticks: { display: false } } },
      },
    })
  );

  instances.push(
    new Chart(pieRef.value, {
      type: "pie",
      data: { labels: pieChart.map((s) => s.label), datasets: [{ data: pieChart.map((s) => s.value), backgroundColor: pieChart.map((s) => s.color), borderWidth: 0 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } },
    })
  );

  instances.push(
    new Chart(donutRef.value, {
      type: "doughnut",
      data: { labels: donutChart.map((s) => s.label), datasets: [{ data: donutChart.map((s) => s.value), backgroundColor: donutChart.map((s) => s.color), borderWidth: 0 }] },
      options: { responsive: true, maintainAspectRatio: false, cutout: "65%", plugins: { legend: { display: false } } },
    })
  );

  instances.push(
    new Chart(stackedRef.value, {
      type: "bar",
      data: {
        labels: stackedBarChart.labels,
        datasets: stackedBarChart.series.map((s) => ({ label: s.label, data: s.data, backgroundColor: s.color, borderRadius: 3, maxBarThickness: 28 })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 11 } } } },
        scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, grid: { color: "#eef1f7" }, ticks: { display: false } } },
      },
    })
  );
});

onBeforeUnmount(() => {
  instances.forEach((c) => c.destroy());
});
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Charts <small>Visual data breakdowns</small></h1>

    <div class="row">
      <div class="col col-6">
        <WidgetCard title="Stacked Line Chart" eyebrow>
          <div class="chart-wrap chart-wrap--md"><canvas ref="lineRef"></canvas></div>
          <p class="hint">A pure line chart focused on simple usage and attractive looks.</p>
          <h6 class="sub-heading">Sparklines</h6>
          <div class="sparkline-row">
            <div v-for="(spark, i) in sparklines" :key="i" class="sparkline-item">
              <p class="spark-value">{{ spark.value }}</p>
              <p class="spark-label">{{ spark.label }}</p>
              <div class="spark-chart"><canvas :ref="(el) => (sparkRefs[i] = el)"></canvas></div>
            </div>
          </div>
        </WidgetCard>
      </div>
      <div class="col col-6">
        <WidgetCard title="Tracking" eyebrow>
          <div class="chart-wrap chart-wrap--lg"><canvas ref="trackingRef"></canvas></div>
          <p class="hint">Two related series tracked side by side over time.</p>
        </WidgetCard>
      </div>
    </div>

    <div class="row">
      <div class="col" style="width: 100%">
        <WidgetCard title="Markers" eyebrow>
          <div class="chart-wrap chart-wrap--md"><canvas ref="markersRef"></canvas></div>
          <p class="hint">Points can be marked in several ways, with circles being the default.</p>
        </WidgetCard>
      </div>
    </div>

    <div class="row">
      <div class="col col-8">
        <WidgetCard title="Bars" eyebrow>
          <div class="chart-wrap chart-wrap--lg"><canvas ref="barRef"></canvas></div>
        </WidgetCard>
      </div>
      <div class="col col-3rd chart-side-col">
        <WidgetCard title="Pie Chart" eyebrow>
          <div class="chart-wrap chart-wrap--sm"><canvas ref="pieRef"></canvas></div>
          <ul class="legend">
            <li v-for="s in pieChart" :key="s.label"><span class="dot" :style="{ background: s.color }"></span>{{ s.label }} <strong>{{ s.value }}%</strong></li>
          </ul>
        </WidgetCard>
        <WidgetCard title="Donut Chart" eyebrow class="mt-card">
          <div class="chart-wrap chart-wrap--sm"><canvas ref="donutRef"></canvas></div>
          <ul class="legend">
            <li v-for="s in donutChart" :key="s.label"><span class="dot" :style="{ background: s.color }"></span>{{ s.label }} <strong>{{ s.value }}%</strong></li>
          </ul>
        </WidgetCard>
      </div>
    </div>

    <div class="row">
      <div class="col" style="width: 100%">
        <WidgetCard title="Bars Stacked" eyebrow>
          <div class="chart-wrap chart-wrap--md"><canvas ref="stackedRef"></canvas></div>
        </WidgetCard>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  margin-left: 224px;
  margin-top: 64px;
  padding: 28px 30px 60px;
  width: calc(100% - 224px);
}
.page-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0 0 24px;
}
.page-title small {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-gray);
  margin-left: 10px;
}

.chart-wrap--sm {
  height: 140px;
}
.chart-wrap--md {
  height: 220px;
}
.chart-wrap--lg {
  height: 320px;
}
.hint {
  margin: 12px 0 0;
  font-size: 11.5px;
  color: var(--color-gray);
}
.sub-heading {
  margin: 18px 0 10px;
  font-size: 12.5px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.sparkline-row {
  display: flex;
  gap: 20px;
}
.sparkline-item {
  flex: 1;
}
.spark-value {
  margin: 0;
  font-size: 16px;
  font-weight: 300;
  color: var(--color-text-dark);
}
.spark-label {
  margin: 2px 0 6px;
  font-size: 11px;
  color: var(--color-gray);
}
.spark-chart {
  height: 32px;
}
.legend {
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
}
.legend li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--color-text);
  margin-bottom: 6px;
}
.legend li strong {
  margin-left: auto;
  color: var(--color-text-dark);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.mt-card {
  margin-top: 24px;
}
.chart-side-col {
  align-self: flex-start;
}
</style>
