<script setup>
import VisitsTodayWidget from "../components/widgets/VisitsTodayWidget.vue";
import RevenueBreakdownWidget from "../components/widgets/RevenueBreakdownWidget.vue";
import AppPerformanceWidget from "../components/widgets/AppPerformanceWidget.vue";
import ServerOverviewWidget from "../components/widgets/ServerOverviewWidget.vue";
import AnalyticsMainChart from "../components/widgets/AnalyticsMainChart.vue";
import BigStatWidget from "../components/widgets/BigStatWidget.vue";
import SupportRequestsWidget from "../components/widgets/SupportRequestsWidget.vue";
import CalendarWidget from "../components/widgets/CalendarWidget.vue";
import TasksWidget from "../components/widgets/TasksWidget.vue";
import NotificationsWidget from "../components/widgets/NotificationsWidget.vue";
import { bigStats } from "../data/analyticsData.js";
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Analytics <small>Company Performance</small></h1>

    <div class="row">
      <div class="col col-8">
        <div class="row">
          <div class="col col-4th"><VisitsTodayWidget /></div>
          <div class="col col-4th"><RevenueBreakdownWidget /></div>
          <div class="col col-4th"><AppPerformanceWidget /></div>
          <div class="col col-4th"><ServerOverviewWidget /></div>
        </div>

        <div class="row">
          <div class="col" style="width: 100%"><AnalyticsMainChart /></div>
        </div>

        <div class="row">
          <div v-for="stat in bigStats" :key="stat.product" class="col col-3rd">
            <BigStatWidget :data="stat" />
          </div>
        </div>

        <div class="row">
          <div class="col" style="width: 100%"><SupportRequestsWidget /></div>
        </div>
      </div>

      <div class="col col-3rd">
        <div class="row">
          <div class="col" style="width: 100%"><CalendarWidget /></div>
        </div>
        <div class="row">
          <div class="col" style="width: 100%"><TasksWidget /></div>
        </div>
        <div class="row">
          <div class="col" style="width: 100%"><NotificationsWidget /></div>
        </div>
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
</style>
