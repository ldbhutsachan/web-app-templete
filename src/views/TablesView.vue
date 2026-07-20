<script setup>
import WidgetCard from "../components/ui/WidgetCard.vue";
import ProgressBar from "../components/ui/ProgressBar.vue";
import { fileRows, peopleRows } from "../data/tablesData.js";
import pictures from "../assets/pictures.js";
</script>

<template>
  <main class="main-content">
    <h1 class="page-title">Tables <small>Static examples</small></h1>

    <div class="row">
      <div class="col" style="width: 100%">
        <WidgetCard title="File Manager" eyebrow>
          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Picture</th>
                  <th>Description</th>
                  <th>Type / Dimensions</th>
                  <th>Date</th>
                  <th>Size</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in fileRows" :key="row.name">
                  <td>{{ i + 1 }}</td>
                  <td><img class="thumb" :src="pictures[row.picture]" :alt="row.name" /></td>
                  <td>
                    {{ row.name }}
                    <span v-if="row.badge" class="badge">{{ row.badge }}</span>
                  </td>
                  <td class="muted">{{ row.type }} &middot; {{ row.dimensions }}</td>
                  <td class="muted">{{ row.date }}</td>
                  <td class="muted">{{ row.size }}</td>
                  <td class="progress-cell"><ProgressBar :value="row.progress" :variant="row.variant === 'gray' ? 'primary' : row.variant" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </WidgetCard>
      </div>
    </div>

    <div class="row">
      <div class="col col-6">
        <WidgetCard title="People" eyebrow>
          <table class="data-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="person in peopleRows" :key="person.info">
                <td><input type="checkbox" /></td>
                <td>{{ person.first }}</td>
                <td>{{ person.last }}</td>
                <td class="muted">{{ person.info }}</td>
              </tr>
            </tbody>
          </table>
        </WidgetCard>
      </div>
      <div class="col col-6">
        <WidgetCard title="Bordered" eyebrow>
          <table class="data-table data-table--bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="person in peopleRows" :key="person.info">
                <td>{{ person.first }}</td>
                <td>{{ person.last }}</td>
                <td class="muted">{{ person.info }}</td>
              </tr>
            </tbody>
          </table>
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

.table-scroll {
  overflow-x: auto;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
}
.data-table th {
  text-align: left;
  font-size: 10.5px;
  color: var(--color-gray);
  text-transform: uppercase;
  padding: 0 12px 10px 0;
  font-weight: 700;
  white-space: nowrap;
}
.data-table td {
  padding: 10px 12px 10px 0;
  border-top: 1px solid var(--color-border);
  font-size: 12.5px;
  color: var(--color-text);
  vertical-align: middle;
  white-space: nowrap;
}
.data-table tbody tr:nth-child(odd) {
  background: var(--color-bg);
}
.data-table--bordered td,
.data-table--bordered th {
  border: 1px solid var(--color-border);
  padding: 8px 12px;
}
.data-table--bordered tbody tr:nth-child(odd) {
  background: transparent;
}
.thumb {
  width: 46px;
  height: 46px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
}
.muted {
  color: var(--color-gray);
}
.badge {
  display: inline-block;
  margin-left: 6px;
  padding: 2px 7px;
  border-radius: 8px;
  background: var(--color-danger);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
}
.progress-cell {
  min-width: 140px;
}
input[type="checkbox"] {
  accent-color: var(--color-primary);
  width: 15px;
  height: 15px;
}
</style>
