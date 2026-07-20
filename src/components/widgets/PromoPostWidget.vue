<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import avatars from "../../assets/avatars.js";

defineProps({
  post: { type: Object, required: true },
});
</script>

<template>
  <WidgetCard transparent>
    <div class="promo-card" :class="`promo-card--${post.variant}`">
      <div class="promo-banner">
        <h5>{{ post.title }}</h5>
      </div>
      <div class="promo-user">
        <img class="av-circle" :src="avatars[post.avatar]" :alt="post.author" />
        <div>
          <h6>{{ post.author }} <small>{{ post.handle }}</small></h6>
          <p class="meta"><i class="fa-solid fa-clock"></i> {{ post.time }} &nbsp; <i class="fa-solid fa-location-dot"></i> {{ post.location }}</p>
        </div>
      </div>
      <p class="promo-text">{{ post.text }}</p>
      <footer v-if="post.likes !== null" class="promo-footer">
        <span><i class="fa-solid fa-heart"></i> {{ post.likes }}</span>
        <span><i class="fa-solid fa-comment"></i> {{ post.comments }}</span>
      </footer>
      <footer v-else class="promo-footer">
        <span>1 hour</span>
        <span><i class="fa-solid fa-heart"></i> Like</span>
        <span>Comment</span>
      </footer>
    </div>
  </WidgetCard>
</template>

<style scoped>
.promo-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-surface);
  box-shadow: 0 10px 25px -12px rgba(20, 30, 70, 0.12), 0 0 1px rgba(20, 30, 70, 0.06);
}
.promo-banner {
  padding: 20px 22px 40px;
  color: #fff;
}
.promo-card--neutral .promo-banner {
  background: linear-gradient(135deg, #232a4d 0%, #1a2038 100%);
}
.promo-card--primary .promo-banner {
  background: var(--color-primary);
}
.promo-card--danger .promo-banner {
  background: var(--color-danger);
}
.promo-banner h5 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.promo-user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 22px;
  margin-top: -22px;
}
.av-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-surface);
  flex-shrink: 0;
}
.promo-user h6 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-dark);
}
.promo-user h6 small {
  font-weight: 400;
  color: var(--color-gray);
}
.promo-user .meta {
  margin: 2px 0 0;
  font-size: 11px;
  color: var(--color-gray);
}
.promo-text {
  padding: 12px 22px 0;
  font-size: 12px;
  color: var(--color-text);
  line-height: 1.5;
}
.promo-footer {
  display: flex;
  gap: 16px;
  padding: 14px 22px;
  margin-top: 12px;
  border-top: 1px solid var(--color-border);
  font-size: 11.5px;
  color: var(--color-gray);
}
.promo-footer i {
  margin-right: 4px;
  color: var(--color-danger);
}
</style>
