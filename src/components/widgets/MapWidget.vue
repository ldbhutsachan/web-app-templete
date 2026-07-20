<script setup>
import { computed } from "vue";
import { mapPins, mapStats } from "../../data/visitsData.js";

const formattedGeo = computed(() => mapStats.geoLocations.toLocaleString("en-US").replace(/,/g, " "));
</script>

<template>
  <div class="map-card">
    <div class="dot-grid"></div>
    <div v-for="pin in mapPins" :key="pin.name" class="map-pin" :style="{ top: pin.top, left: pin.left }">
      <span class="pin-label">{{ pin.name }}</span>
    </div>
    <div class="map-geo-stat">
      <h6>GEO-LOCATIONS</h6>
      <div class="value"><i class="fa-solid fa-location-dot"></i> {{ formattedGeo }}</div>
    </div>
  </div>
</template>

<style scoped>
.map-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  height: 430px;
  background: radial-gradient(circle at 20% 30%, rgba(57, 121, 246, 0.18), transparent 45%),
    radial-gradient(circle at 75% 65%, rgba(53, 184, 224, 0.16), transparent 45%),
    linear-gradient(135deg, #232a4d 0%, #1a2038 100%);
}
.dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 18px 18px;
}
.map-pin {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-info);
  box-shadow: 0 0 0 4px rgba(53, 184, 224, 0.25);
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.map-pin::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px solid rgba(53, 184, 224, 0.5);
  animation: pulse 2.2s ease-out infinite;
}
.map-pin .pin-label {
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(20, 24, 46, 0.9);
  color: #fff;
  font-size: 10px;
  padding: 3px 7px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
}
.map-pin:hover .pin-label {
  opacity: 1;
}
@keyframes pulse {
  0% {
    transform: scale(0.6);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}
.map-geo-stat {
  position: absolute;
  left: 24px;
  bottom: 24px;
  color: #fff;
}
.map-geo-stat h6 {
  margin: 0 0 4px;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
}
.map-geo-stat .value {
  font-size: 26px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
