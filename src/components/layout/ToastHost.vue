<script setup>
import { useToasts } from "../../composables/useToasts.js";

const { toasts, position, removeToast } = useToasts();

const iconMap = { info: "fa-circle-info", success: "fa-circle-check", error: "fa-circle-exclamation" };
</script>

<template>
  <div class="toast-host" :class="`toast-host--${position.replace(' ', '-')}`">
    <transition-group name="toast">
      <div v-for="toast in toasts" :key="toast.id" class="toast" :class="`toast--${toast.type}`">
        <i class="fa-solid" :class="iconMap[toast.type]"></i>
        <span>{{ toast.message }}</span>
        <button type="button" class="toast-close" @click="removeToast(toast.id)">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-host {
  position: fixed;
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 320px;
  max-width: calc(100vw - 32px);
}
.toast-host--top-right {
  top: 20px;
  right: 20px;
}
.toast-host--top-left {
  top: 20px;
  left: 20px;
}
.toast-host--top {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.toast-host--bottom-right {
  bottom: 20px;
  right: 20px;
}
.toast-host--bottom-left {
  bottom: 20px;
  left: 20px;
}
.toast-host--bottom {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  background: var(--color-text-dark);
  color: #fff;
  font-size: 12.5px;
  box-shadow: 0 10px 25px -12px rgba(20, 30, 70, 0.35);
}
.toast--info {
  background: var(--color-info);
}
.toast--success {
  background: var(--color-success);
}
.toast--error {
  background: var(--color-danger);
}
.toast span {
  flex: 1;
}
.toast-close {
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-size: 12px;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
