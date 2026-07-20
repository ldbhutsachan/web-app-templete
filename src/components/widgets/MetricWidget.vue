<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import ProgressBar from "../ui/ProgressBar.vue";

defineProps({
  data: { type: Object, required: true },
});
</script>

<template>
  <WidgetCard :title="data.title" eyebrow>
    <div class="stats-row">
      <div v-for="stat in data.stats" :key="stat.label" class="stat-item">
        <h6>{{ stat.label }}</h6>
        <p>{{ stat.value }}</p>
      </div>
    </div>
    <ProgressBar :value="data.progress" :variant="data.variant" />
    <div class="metric-footnote">
      <span class="circle-icon" :class="`circle-icon--${data.variant}`">
        <i class="fa-solid" :class="data.icon"></i>
      </span>
      <span><strong>{{ data.note }}</strong> {{ data.tail }}</span>
    </div>
  </WidgetCard>
</template>

<style scoped>
.stats-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
}
.stats-row .stat-item h6 {
  margin: 0 0 4px;
  font-size: 10.5px;
  color: var(--color-gray);
  font-weight: 600;
}
.stats-row .stat-item p {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.metric-footnote {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0 0;
  font-size: 12px;
  color: var(--color-text);
}
.circle-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  flex-shrink: 0;
}
.circle-icon--primary {
  background: var(--color-primary);
}
.circle-icon--success {
  background: var(--color-success);
}
.circle-icon--danger {
  background: var(--color-danger);
}
.metric-footnote strong {
  color: var(--color-text-dark);
}
</style>
