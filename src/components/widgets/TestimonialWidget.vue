<script setup>
import WidgetCard from "../ui/WidgetCard.vue";

defineProps({
  data: { type: Object, required: true },
});
</script>

<template>
  <WidgetCard transparent>
    <div class="testimonial" :class="`testimonial--${data.variant}`">
      <i class="fa-solid" :class="data.icon"></i>
      <p class="text">{{ data.text }}</p>
      <p class="stats">
        <strong>{{ data.likes }}</strong> likes
        <template v-if="data.comments"> &nbsp; <strong>{{ data.comments }}</strong> comments</template>
        <template v-if="data.shares"> &nbsp; <strong>{{ data.shares }}</strong> shares</template>
      </p>
      <p class="date">{{ data.date }}</p>
    </div>
  </WidgetCard>
</template>

<style scoped>
.testimonial {
  border-radius: var(--radius-md);
  padding: 22px;
  color: #fff;
  height: 100%;
  box-shadow: 0 10px 25px -12px rgba(20, 30, 70, 0.12), 0 0 1px rgba(20, 30, 70, 0.06);
}
.testimonial--success {
  background: var(--color-success);
}
.testimonial--primary {
  background: var(--color-primary);
}
.testimonial i {
  font-size: 22px;
  opacity: 0.85;
  margin-bottom: 10px;
  display: block;
}
.text {
  margin: 0 0 14px;
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.4;
}
.stats {
  margin: 0;
  font-size: 11.5px;
  opacity: 0.9;
}
.date {
  margin: 10px 0 0;
  font-size: 11px;
  opacity: 0.7;
}
</style>
