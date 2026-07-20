<script setup>
defineProps({
  value: { type: Number, required: true },
  variant: { type: String, default: "primary" },
});
</script>

<template>
  <div class="progress-track">
    <div class="progress-fill" :class="`progress-fill--${variant}`" :style="{ width: `${value}%` }"></div>
  </div>
</template>

<style scoped>
.progress-track {
  height: 6px;
  border-radius: 4px;
  background: var(--color-border);
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  border-radius: 4px;
}
.progress-fill--primary {
  background: var(--color-primary);
}
.progress-fill--success {
  background: var(--color-success);
}
.progress-fill--danger {
  background: var(--color-danger);
}
</style>
