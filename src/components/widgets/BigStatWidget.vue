<script setup>
import WidgetCard from "../ui/WidgetCard.vue";

defineProps({
  data: { type: Object, required: true },
});
</script>

<template>
  <WidgetCard>
    <div class="big-stat">
      <span class="accent" :class="`accent--${data.variant}`"></span>
      <div class="big-stat-body">
        <h6>{{ data.product }}</h6>
        <p class="total">{{ data.total }}</p>
        <div class="big-stat-row">
          <div>
            <p class="label">Registrations</p>
            <p class="value" :class="`value--${data.variant}`">{{ data.registrations }}</p>
          </div>
          <div>
            <p class="label">Bounce Rate</p>
            <p class="value">{{ data.bounce }}</p>
          </div>
        </div>
      </div>
    </div>
  </WidgetCard>
</template>

<style scoped>
.big-stat {
  display: flex;
  gap: 14px;
}
.accent {
  width: 4px;
  border-radius: 4px;
  flex-shrink: 0;
}
.accent--primary {
  background: var(--color-primary);
}
.accent--danger {
  background: var(--color-danger);
}
.accent--success {
  background: var(--color-success);
}
.big-stat-body {
  flex: 1;
}
.big-stat-body h6 {
  margin: 0 0 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-gray);
  text-transform: uppercase;
}
.total {
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.big-stat-row {
  display: flex;
  gap: 24px;
}
.label {
  margin: 0 0 3px;
  font-size: 11px;
  color: var(--color-gray);
}
.value {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.value--primary {
  color: var(--color-primary);
}
.value--danger {
  color: var(--color-danger);
}
.value--success {
  color: var(--color-success);
}
</style>
