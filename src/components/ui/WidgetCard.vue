<script setup>
defineProps({
  title: { type: String, default: "" },
  eyebrow: { type: Boolean, default: false },
  transparent: { type: Boolean, default: false },
});
</script>

<template>
  <div class="widget" :class="{ 'widget--transparent': transparent }">
    <div v-if="title || $slots.title || $slots.tools" class="widget-header">
      <component :is="eyebrow ? 'h6' : 'h5'" class="widget-title" :class="{ eyebrow }">
        <slot name="title">{{ title }}</slot>
      </component>
      <div v-if="$slots.tools" class="widget-tools">
        <slot name="tools" />
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.widget {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: 20px 22px;
  box-shadow: 0 10px 25px -12px rgba(20, 30, 70, 0.12), 0 0 1px rgba(20, 30, 70, 0.06);
  height: 100%;
}
.widget--transparent {
  background: transparent;
  box-shadow: none;
  padding: 0;
}

.widget-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
}
.widget-title {
  margin: 0;
  font-weight: 700;
  color: var(--color-text-dark);
  font-size: 15px;
}
.widget-title.eyebrow {
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--color-gray);
  text-transform: uppercase;
}
.widget-tools {
  display: flex;
  gap: 10px;
  color: var(--color-gray);
  font-size: 13px;
  flex-shrink: 0;
}
.widget-tools :deep(i) {
  cursor: pointer;
}
.widget-tools :deep(i:hover) {
  color: var(--color-primary);
}
</style>
