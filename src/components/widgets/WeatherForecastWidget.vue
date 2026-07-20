<script setup>
import { weatherForecast } from "../../data/widgetsData.js";
</script>

<template>
  <div class="weather-card">
    <h4 class="title">{{ weatherForecast.city }}</h4>
    <div class="info">
      <i class="fa-solid fa-location-dot"></i>
      <h6>{{ weatherForecast.region }}</h6>
      <p>{{ weatherForecast.time }}</p>
    </div>

    <div class="forecast">
      <div class="today">
        <i class="fa-solid" :class="weatherForecast.today.icon"></i>
        <p class="condition">{{ weatherForecast.today.label }}</p>
        <div class="today-meta">
          <h6>{{ weatherForecast.today.day }}</h6>
          <p class="temp">{{ weatherForecast.today.temp }}&deg;</p>
        </div>
      </div>
      <div v-for="d in weatherForecast.days" :key="d.day" class="day-col">
        <h6>{{ d.day }}</h6>
        <i class="fa-solid" :class="d.icon"></i>
        <p class="temp">{{ d.temp }}&deg;</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  padding: 22px;
  min-height: 260px;
  color: #fff;
  background: radial-gradient(circle at 20% 20%, rgba(57, 121, 246, 0.25), transparent 45%),
    linear-gradient(135deg, #232a4d 0%, #1a2038 100%);
}
.title {
  margin: 0 0 40px;
  font-size: 20px;
  font-weight: 400;
}
.info {
  position: absolute;
  top: 22px;
  right: 22px;
  text-align: right;
}
.info i {
  font-size: 24px;
}
.info h6 {
  margin: 4px 0 2px;
  font-size: 12px;
}
.info p {
  margin: 0;
  font-size: 11px;
  opacity: 0.75;
}
.forecast {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}
.today {
  display: flex;
  align-items: center;
  gap: 10px;
}
.today i {
  font-size: 34px;
}
.condition {
  margin: 0;
  font-size: 12px;
  opacity: 0.8;
}
.today-meta h6 {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
}
.today-meta .temp {
  margin: 2px 0 0;
  font-size: 20px;
  font-weight: 700;
}
.day-col {
  text-align: center;
  font-size: 11px;
}
.day-col h6 {
  margin: 0 0 6px;
  font-size: 10px;
  opacity: 0.8;
}
.day-col i {
  font-size: 18px;
}
.day-col .temp {
  margin: 6px 0 0;
  font-weight: 700;
}
</style>
