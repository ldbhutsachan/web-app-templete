<script setup>
import { ref, computed } from "vue";
import WidgetCard from "../ui/WidgetCard.vue";
import { flipCard } from "../../data/widgetsData.js";

const showBack = ref(false);
const face = computed(() => (showBack.value ? flipCard.back : flipCard.front));
</script>

<template>
  <WidgetCard>
    <div class="flip-card" :class="`flip-card--${face.variant}`" @mouseover="showBack = !showBack">
      <i class="fa-solid" :class="face.icon"></i>
      <h3>{{ face.title }}</h3>
      <p class="note">{{ face.note }}</p>
      <button type="button" class="cta">{{ face.cta }}</button>
    </div>
  </WidgetCard>
</template>

<style scoped>
.flip-card {
  text-align: center;
  padding: 6px 0;
}
.flip-card i {
  font-size: 42px;
  color: var(--color-success);
  margin-bottom: 14px;
}
.flip-card--primary i {
  color: var(--color-primary);
}
.flip-card h3 {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-text-dark);
}
.note {
  margin: 0 0 14px;
  font-size: 11.5px;
  color: var(--color-gray);
}
.cta {
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  background: var(--color-bg);
  color: var(--color-text-dark);
  font-weight: 600;
  font-size: 12.5px;
  cursor: pointer;
}
</style>
