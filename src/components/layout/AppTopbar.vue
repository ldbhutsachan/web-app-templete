<script setup>
const emit = defineEmits(["logout"]);
</script>

<template>
  <header class="topbar">
    <div class="topbar-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search Pages" />
    </div>
    <div class="topbar-actions">
      <div class="topbar-icon">
        <i class="fa-regular fa-bell"></i>
        <span class="badge-dot">3</span>
      </div>
      <div class="topbar-icon">
        <i class="fa-regular fa-envelope"></i>
        <span class="badge-dot">5</span>
      </div>
      <div class="topbar-user">
        <div class="avatar">JS</div>
        <span class="uname">Jane Sun</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="topbar-icon" title="Log out" @click="emit('logout')">
        <i class="fa-solid fa-power-off"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 224px;
  right: 0;
  height: 64px;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 15;
}

.topbar-search {
  display: flex;
  align-items: center;
  background: var(--color-bg);
  border-radius: 20px;
  padding: 8px 16px;
  width: 280px;
  gap: 8px;
  color: var(--color-gray);
  font-size: 13px;
}
.topbar-search input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-family: inherit;
  font-size: 13px;
  color: var(--color-text-dark);
}
.topbar-search input::placeholder {
  color: var(--color-gray);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.topbar-icon {
  position: relative;
  color: var(--color-text);
  font-size: 17px;
  cursor: pointer;
}
.topbar-icon .badge-dot {
  position: absolute;
  top: -4px;
  right: -6px;
  background: var(--color-danger);
  color: #fff;
  font-size: 9px;
  border-radius: 8px;
  padding: 1px 4px;
  line-height: 1;
}
.topbar-user {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.topbar-user .avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-info));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
}
.topbar-user .uname {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-dark);
}
.topbar-user i {
  font-size: 10px;
  color: var(--color-gray);
}
</style>
