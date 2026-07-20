<script setup>
import WidgetCard from "../components/ui/WidgetCard.vue";
import { useToasts } from "../composables/useToasts.js";

const { position, showToast } = useToasts();

const positions = [
  { value: "top left", top: true, left: true },
  { value: "top", top: true },
  { value: "top right", top: true, right: true },
  { value: "bottom left", bottom: true, left: true },
  { value: "bottom", bottom: true },
  { value: "bottom right", bottom: true, right: true },
];
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Notifications <small>Transactional messages in your app</small></h1>

    <div class="row">
      <div class="col" style="width: 100%">
        <WidgetCard title="Messenger" eyebrow>
          <div class="row">
            <div class="col col-4th" style="width: 33.333%">
              <h6>Layout options</h6>
              <p class="hint">Pick where new notifications appear on screen.</p>
              <div class="position-grid">
                <button
                  v-for="pos in positions"
                  :key="pos.value"
                  type="button"
                  class="position-bit"
                  :class="{ 'position-bit--active': position === pos.value }"
                  @click="position = pos.value"
                >
                  <span class="dot" :class="{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right }"></span>
                </button>
              </div>
            </div>
            <div class="col col-4th" style="width: 33.333%">
              <h6>Notification Types</h6>
              <p class="hint">Different types for different use cases.</p>
              <div class="btn-stack">
                <button type="button" class="btn btn--info" @click="showToast('info', 'Thanks for checking out Light Blue!')">Info Message</button>
                <button type="button" class="btn btn--danger" @click="showToast('error', 'There was an explosion while processing your request.')">Error + Retry Message</button>
                <button type="button" class="btn btn--success" @click="showToast('success', 'Your changes were saved successfully.')">Success Message</button>
              </div>
            </div>
            <div class="col col-4th" style="width: 33.333%">
              <h6>Dead Simple Usage</h6>
              <p class="hint">A couple of lines is all it takes to fire a toast.</p>
              <pre><code>showToast("info", "Thanks for checking out Light Blue!")</code></pre>
              <pre><code>showToast("error", "There was an explosion while processing your request.")</code></pre>
            </div>
          </div>
        </WidgetCard>
      </div>
    </div>
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

h6 {
  margin: 0 0 4px;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-dark);
}
.hint {
  margin: 0 0 14px;
  font-size: 11.5px;
  color: var(--color-gray);
}

.position-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 140px;
  height: 90px;
  border: 1px dashed var(--color-border);
  border-radius: 8px;
  padding: 8px;
}
.position-bit {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg);
  cursor: pointer;
}
.position-bit--active {
  border-color: var(--color-primary);
  background: #eaf1ff;
}
.position-bit .dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.position-bit .dot.top {
  top: 4px;
  transform: translateX(-50%);
}
.position-bit .dot.bottom {
  top: auto;
  bottom: 4px;
  transform: translateX(-50%);
}
.position-bit .dot.left {
  left: 4px;
  transform: translateY(-50%);
}
.position-bit .dot.right {
  left: auto;
  right: 4px;
  transform: translateY(-50%);
}
.position-bit .dot.top.left,
.position-bit .dot.bottom.left {
  transform: none;
}
.position-bit .dot.top.right,
.position-bit .dot.bottom.right {
  transform: none;
}

.btn-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.btn {
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 12.5px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  text-align: left;
}
.btn--info {
  background: var(--color-info);
}
.btn--danger {
  background: var(--color-danger);
}
.btn--success {
  background: var(--color-success);
}

pre {
  background: var(--color-bg);
  border-radius: 8px;
  padding: 10px 12px;
  margin: 0 0 10px;
  overflow-x: auto;
}
pre code {
  font-size: 11px;
  color: var(--color-text-dark);
}
</style>
