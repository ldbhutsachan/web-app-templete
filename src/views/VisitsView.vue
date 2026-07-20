<script setup>
import MapWidget from "../components/widgets/MapWidget.vue";
import MapStatsWidget from "../components/widgets/MapStatsWidget.vue";
import MetricWidget from "../components/widgets/MetricWidget.vue";
import MessagesWidget from "../components/widgets/MessagesWidget.vue";
import MarketStatsWidget from "../components/widgets/MarketStatsWidget.vue";
import CalendarWidget from "../components/widgets/CalendarWidget.vue";
import { metricWidgets } from "../data/visitsData.js";
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Visits <small>Live traffic &amp; geo statistics</small></h1>

    <div class="row">
      <div class="col col-7"><MapWidget /></div>
      <div class="col col-4-offset"><MapStatsWidget /></div>
    </div>

    <div class="row">
      <div v-for="metric in metricWidgets" :key="metric.title" class="col col-3rd">
        <MetricWidget :data="metric" />
      </div>
    </div>

    <div class="row">
      <div class="col col-3rd"><MessagesWidget /></div>
      <div class="col col-3rd"><MarketStatsWidget /></div>
      <div class="col col-3rd"><CalendarWidget /></div>
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
</style>
