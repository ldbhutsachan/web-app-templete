<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import { supportRequests } from "../../data/analyticsData.js";

function statusVariant(status) {
  if (status === "Pending") return "success";
  if (status === "Declined") return "danger";
  return "primary";
}
</script>

<template>
  <WidgetCard title="Support Requests">
    <div class="table-scroll">
      <table class="requests-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Product</th>
            <th>Price</th>
            <th>Date</th>
            <th>City</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in supportRequests" :key="row.email">
            <td>{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.product }}</td>
            <td>{{ row.price }}</td>
            <td>{{ row.date }}</td>
            <td>{{ row.city }}</td>
            <td><span class="status-badge" :class="`status-badge--${statusVariant(row.status)}`">{{ row.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </WidgetCard>
</template>

<style scoped>
.table-scroll {
  overflow-x: auto;
}
.requests-table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
}
.requests-table th {
  text-align: left;
  font-size: 10px;
  color: var(--color-gray);
  text-transform: uppercase;
  padding: 0 8px 10px 0;
  font-weight: 700;
}
.requests-table td {
  padding: 9px 8px 9px 0;
  border-top: 1px solid var(--color-border);
  font-size: 12px;
  color: var(--color-text);
}
.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 10px;
  font-size: 10.5px;
  font-weight: 700;
  color: #fff;
}
.status-badge--primary {
  background: var(--color-primary);
}
.status-badge--success {
  background: var(--color-success);
}
.status-badge--danger {
  background: var(--color-danger);
}
</style>
