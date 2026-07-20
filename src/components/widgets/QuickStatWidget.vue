<script setup>
import WidgetCard from "../ui/WidgetCard.vue";

defineProps({
  stat: { type: Object, required: true },
});
</script>

<template>
  <WidgetCard>
    <div class="quick-stat-top">
      <span class="quick-icon" :class="`quick-icon--${stat.variant}`">
        <i class="fa-solid" :class="stat.icon"></i>
      </span>
      <div>
        <h6>{{ stat.label }}</h6>
        <p class="value">{{ stat.value }}</p>
      </div>
    </div>
    <div class="quick-stat-bottom">
      <div>
        <h6>{{ stat.sub1.label }}</h6>
        <p>{{ stat.sub1.value }}</p>
      </div>
      <div>
        <h6>{{ stat.sub2.label }}</h6>
        <p>{{ stat.sub2.value }}</p>
      </div>
    </div>
  </WidgetCard>
</template>

<style scoped>
.quick-stat-top {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}
.quick-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  flex-shrink: 0;
}
.quick-icon--primary {
  background: var(--color-primary);
}
.quick-icon--info {
  background: var(--color-info);
}
.quick-icon--success {
  background: var(--color-success);
}
.quick-icon--gray {
  background: var(--color-gray);
}
.quick-stat-top h6 {
  margin: 0 0 3px;
  font-size: 10.5px;
  color: var(--color-gray);
  text-transform: uppercase;
}
.quick-stat-top .value {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.quick-stat-bottom {
  display: flex;
  justify-content: space-between;
}
.quick-stat-bottom h6 {
  margin: 0 0 3px;
  font-size: 10.5px;
  color: var(--color-gray);
}
.quick-stat-bottom p {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-dark);
}
</style>
