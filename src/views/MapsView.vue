<script setup>
import WidgetCard from "../components/ui/WidgetCard.vue";
import MapWidget from "../components/widgets/MapWidget.vue";
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Maps <small>Built-in vector map</small></h1>

    <div class="row">
      <div class="col" style="width: 100%">
        <WidgetCard title="Geo Distribution" eyebrow>
          <MapWidget />
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
</style>
