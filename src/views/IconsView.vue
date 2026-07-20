<script setup>
import { ref, computed } from "vue";
import WidgetCard from "../components/ui/WidgetCard.vue";
import { iconCategories } from "../data/iconsData.js";

const activeCategory = ref(iconCategories[0].key);
const query = ref("");

const activeIcons = computed(() => {
  const category = iconCategories.find((c) => c.key === activeCategory.value);
  const q = query.value.trim().toLowerCase();
  const icons = category.icons.map((name) => ({ name, prefix: category.prefix }));
  if (!q) return icons;
  return icons.filter((icon) => icon.name.includes(q));
});
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Icons <small>Built-in icon set</small></h1>

    <WidgetCard>
      <div class="icons-toolbar">
        <div class="tabs">
          <button
            v-for="category in iconCategories"
            :key="category.key"
            type="button"
            class="tab"
            :class="{ 'tab--active': activeCategory === category.key }"
            @click="activeCategory = category.key"
          >
            {{ category.label }}
          </button>
        </div>
        <div class="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input v-model="query" type="text" placeholder="Search icons..." />
        </div>
      </div>

      <div class="icon-grid">
        <div v-for="icon in activeIcons" :key="icon.name" class="icon-item">
          <i :class="[icon.prefix, icon.name]"></i>
          <span>{{ icon.name.replace('fa-', '') }}</span>
        </div>
      </div>
      <p v-if="!activeIcons.length" class="empty">No icons match "{{ query }}"</p>
    </WidgetCard>
  </main>
</template>

<style scoped>
.main-content {
  margin-left: 224px;
  margin-top: 64px;
  padding: 28px 30px 60px;
  width: calc(100% - 224px);
}
.page-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-dark);
  margin: 0 0 24px;
}
.page-title small {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-gray);
  margin-left: 10px;
}

.icons-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border);
}
.tabs {
  display: flex;
  gap: 6px;
}
.tab {
  border: none;
  background: transparent;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--color-gray);
  cursor: pointer;
}
.tab--active {
  background: var(--color-primary);
  color: #fff;
}
.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-bg);
  border-radius: 20px;
  padding: 8px 16px;
  width: 220px;
  color: var(--color-gray);
  font-size: 13px;
}
.search-box input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-family: inherit;
  font-size: 13px;
  color: var(--color-text-dark);
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 4px;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 8px;
  text-align: center;
}
.icon-item:hover {
  background: var(--color-bg);
}
.icon-item i {
  font-size: 20px;
  color: var(--color-text);
}
.icon-item span {
  font-size: 10.5px;
  color: var(--color-gray);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
.empty {
  text-align: center;
  color: var(--color-gray);
  font-size: 13px;
  padding: 30px 0;
}
</style>
