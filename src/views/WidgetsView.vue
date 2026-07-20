<script setup>
import QuickStatWidget from "../components/widgets/QuickStatWidget.vue";
import WeeklyTrafficWidget from "../components/widgets/WeeklyTrafficWidget.vue";
import PromoPostWidget from "../components/widgets/PromoPostWidget.vue";
import WeatherForecastWidget from "../components/widgets/WeatherForecastWidget.vue";
import WeatherMiniWidget from "../components/widgets/WeatherMiniWidget.vue";
import MiniStockWidget from "../components/widgets/MiniStockWidget.vue";
import TestimonialWidget from "../components/widgets/TestimonialWidget.vue";
import ServerHealthWidget from "../components/widgets/ServerHealthWidget.vue";
import MapWidget from "../components/widgets/MapWidget.vue";
import RecentChatsWidget from "../components/widgets/RecentChatsWidget.vue";
import RealtimeTrafficWidget from "../components/widgets/RealtimeTrafficWidget.vue";
import FeatureCardWidget from "../components/widgets/FeatureCardWidget.vue";
import ChangesChartWidget from "../components/widgets/ChangesChartWidget.vue";
import FlipCardWidget from "../components/widgets/FlipCardWidget.vue";
import { quickStats, promoPosts, weatherMini, testimonials } from "../data/widgetsData.js";
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Widgets <small>Component showcase</small></h1>

    <div class="row">
      <div v-for="stat in quickStats" :key="stat.label" class="col col-4th">
        <QuickStatWidget :stat="stat" />
      </div>
    </div>

    <div class="row">
      <div class="col" style="width: 100%"><WeeklyTrafficWidget /></div>
    </div>

    <div class="row">
      <div v-for="post in promoPosts" :key="post.title + post.author" class="col col-3rd">
        <PromoPostWidget :post="post" />
      </div>
    </div>

    <div class="row">
      <div class="col col-6">
        <WeatherForecastWidget />
        <div class="row mt">
          <div v-for="mini in weatherMini" :key="mini.day" class="col col-6">
            <WeatherMiniWidget :data="mini" />
          </div>
        </div>
      </div>
      <div class="col col-6">
        <div class="row">
          <div class="col col-6"><MiniStockWidget /></div>
          <div class="col col-6"><TestimonialWidget :data="testimonials[0]" /></div>
        </div>
        <div class="row">
          <div class="col col-6"><TestimonialWidget :data="testimonials[1]" /></div>
          <div class="col col-6"><ServerHealthWidget /></div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col col-3rd"><MapWidget /></div>
      <div class="col col-3rd"><RecentChatsWidget /></div>
      <div class="col col-3rd"><RealtimeTrafficWidget /></div>
    </div>

    <div class="row">
      <div class="col col-3rd"><FeatureCardWidget /></div>
      <div class="col col-3rd"><ChangesChartWidget /></div>
      <div class="col col-3rd"><FlipCardWidget /></div>
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
.row.mt {
  margin-top: 0;
}
</style>
