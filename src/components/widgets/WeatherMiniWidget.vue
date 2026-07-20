<script setup>
defineProps({
  data: { type: Object, required: true },
});
</script>

<template>
  <div class="mini-weather" :class="`mini-weather--${data.variant}`">
    <div class="mini-main">
      <p class="temp">{{ data.temp }}&deg;</p>
      <p class="day">{{ data.day }}</p>
    </div>
    <div class="mini-icon">
      <i class="fa-solid" :class="data.icon"></i>
      <p class="condition">{{ data.condition }}</p>
    </div>
    <div v-if="data.wind !== undefined" class="mini-extra">
      <span><i class="fa-solid fa-wind"></i> {{ data.wind }} mps</span>
      <span><i class="fa-solid fa-cloud-rain"></i> {{ data.rain }} mm</span>
    </div>
  </div>
</template>

<style scoped>
.mini-weather {
  border-radius: var(--radius-md);
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  color: #fff;
  box-shadow: 0 10px 25px -12px rgba(20, 30, 70, 0.12), 0 0 1px rgba(20, 30, 70, 0.06);
  height: 100%;
}
.mini-weather--danger {
  background: var(--color-danger);
}
.mini-weather--success {
  background: var(--color-success);
}
.temp {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
}
.day {
  margin: 2px 0 0;
  font-size: 11px;
  opacity: 0.85;
}
.mini-icon {
  text-align: center;
  font-size: 12px;
}
.mini-icon i {
  font-size: 30px;
}
.condition {
  margin: 4px 0 0;
  opacity: 0.85;
}
.mini-extra {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 10.5px;
  opacity: 0.9;
}
</style>
