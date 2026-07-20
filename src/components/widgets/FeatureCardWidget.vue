<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import { featureCard } from "../../data/widgetsData.js";
</script>

<template>
  <WidgetCard>
    <header>
      <h5>{{ featureCard.title }}</h5>
      <p class="subtitle">{{ featureCard.subtitle }}</p>
    </header>
    <p class="quote"><i class="fa-solid fa-quote-left"></i> {{ featureCard.quote }} <i class="fa-solid fa-quote-right"></i></p>
    <footer>
      <p class="note">{{ featureCard.note }}</p>
      <button type="button" class="cta">{{ featureCard.cta }}</button>
    </footer>
  </WidgetCard>
</template>

<style scoped>
header h5 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.subtitle {
  margin: 0;
  font-size: 12px;
  color: var(--color-gray);
}
.quote {
  margin: 18px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text-dark);
}
.quote i {
  color: var(--color-gray);
  font-size: 12px;
}
footer .note {
  margin: 0 0 10px;
  font-size: 11.5px;
  color: var(--color-gray);
}
.cta {
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  background: var(--color-info);
  color: #fff;
  font-weight: 600;
  font-size: 12.5px;
  cursor: pointer;
}
</style>
