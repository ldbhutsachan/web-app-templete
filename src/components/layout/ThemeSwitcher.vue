<script setup>
import { ref, onMounted, watch } from "vue";
import { themeColors } from "../../data/themeData.js";

const STORAGE_KEY = "light-blue-theme";
const open = ref(false);
const activeTheme = ref("default");

function applyTheme(name) {
  if (name === "default") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", name);
  }
}

function selectTheme(name) {
  activeTheme.value = name;
  applyTheme(name);
  localStorage.setItem(STORAGE_KEY, name);
}

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    activeTheme.value = saved;
    applyTheme(saved);
  }
});
</script>

<template>
  <div class="theme-switcher">
    <button type="button" class="fab" :class="{ 'fab--open': open }" @click="open = !open">
      <i class="fa-solid fa-gear"></i>
    </button>

    <transition name="slide">
      <div v-if="open" class="panel">
        <h6>Color Theme</h6>
        <div class="swatches">
          <button
            v-for="theme in themeColors"
            :key="theme.name"
            type="button"
            class="swatch"
            :class="{ 'swatch--active': activeTheme === theme.name }"
            :style="{ background: theme.swatch }"
            :title="theme.name"
            @click="selectTheme(theme.name)"
          >
            <i v-if="activeTheme === theme.name" class="fa-solid fa-check"></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.theme-switcher {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 30;
  display: flex;
  align-items: center;
}

.fab {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50% 0 0 50%;
  background: var(--color-primary);
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  box-shadow: -4px 4px 14px rgba(20, 30, 70, 0.25);
  transition: transform 0.3s ease;
}
.fab--open {
  transform: rotate(90deg);
}

.panel {
  position: absolute;
  right: 44px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-surface, #fff);
  border-radius: var(--radius-md);
  padding: 16px 18px;
  box-shadow: 0 10px 25px -12px rgba(20, 30, 70, 0.25), 0 0 1px rgba(20, 30, 70, 0.06);
  width: 180px;
}
.panel h6 {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-text-dark);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.swatches {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.swatch {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  box-shadow: 0 0 0 1px var(--color-border);
}
.swatch--active {
  box-shadow: 0 0 0 2px var(--color-primary);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(8px);
}
</style>
