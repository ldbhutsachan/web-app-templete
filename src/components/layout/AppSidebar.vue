<script setup>
import { navSections } from "../../data/visitsData.js";

const props = defineProps({
  currentPage: { type: String, default: "visits" },
});
const emit = defineEmits(["navigate"]);

function isChildActive(child) {
  return child.page === props.currentPage;
}

function isSectionActive(section) {
  return section.page === props.currentPage || section.children?.some(isChildActive);
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-logo"><span class="dot"></span> Light Blue</div>
    <ul class="nav-list">
      <li
        v-for="section in navSections"
        :key="section.label"
        class="nav-item"
        :class="{ active: isSectionActive(section) }"
      >
        <a @click="section.page && emit('navigate', section.page)">
          <i class="fa-solid" :class="section.icon"></i> {{ section.label }}
        </a>
        <ul v-if="section.children" class="nav-children">
          <li v-for="child in section.children" :key="child.label">
            <a
              :class="{ active: isChildActive(child) }"
              @click="child.page && emit('navigate', child.page)"
            >{{ child.label }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 224px;
  flex-shrink: 0;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 20;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 22px 24px;
  font-weight: 700;
  font-size: 16px;
  color: var(--color-text-dark);
  border-bottom: 1px solid var(--color-border);
}

.sidebar-logo .dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-info));
  display: inline-block;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 14px 0;
}

.nav-item > a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 24px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  border-left: 3px solid transparent;
  cursor: pointer;
}

.nav-item > a i {
  width: 16px;
  text-align: center;
  color: var(--color-gray);
  font-size: 15px;
}

.nav-item.active > a,
.nav-item > a:hover {
  background: var(--color-nav-active-bg);
  color: var(--color-primary);
}
.nav-item.active > a i,
.nav-item > a:hover i {
  color: var(--color-primary);
}
.nav-item.active > a {
  border-left-color: var(--color-primary);
}

.nav-children {
  list-style: none;
  margin: 0;
  padding: 2px 0 8px;
}
.nav-children a {
  display: block;
  padding: 8px 24px 8px 52px;
  font-size: 12.5px;
  color: var(--color-text);
  border-left: 3px solid transparent;
  cursor: pointer;
}
.nav-children a.active {
  color: var(--color-primary);
  font-weight: 600;
  border-left-color: var(--color-primary);
  background: var(--color-nav-active-bg);
}
.nav-children a:hover {
  color: var(--color-primary);
}
</style>
