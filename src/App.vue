<script setup>
import { ref } from "vue";
import AppSidebar from "./components/layout/AppSidebar.vue";
import AppTopbar from "./components/layout/AppTopbar.vue";
import ThemeSwitcher from "./components/layout/ThemeSwitcher.vue";
import ToastHost from "./components/layout/ToastHost.vue";
import VisitsView from "./views/VisitsView.vue";
import AnalyticsView from "./views/AnalyticsView.vue";
import WidgetsView from "./views/WidgetsView.vue";
import TablesView from "./views/TablesView.vue";
import IconsView from "./views/IconsView.vue";
import ChartsView from "./views/ChartsView.vue";
import MapsView from "./views/MapsView.vue";
import NotificationsView from "./views/NotificationsView.vue";
import TypographyView from "./views/TypographyView.vue";
import LoginView from "./views/LoginView.vue";

const currentPage = ref("visits");
const loggedIn = ref(true);

function logout() {
  loggedIn.value = false;
}
function login() {
  loggedIn.value = true;
  currentPage.value = "visits";
}
</script>

<template>
  <LoginView v-if="!loggedIn" @login="login" />
  <div v-else class="app-shell">
    <AppSidebar :current-page="currentPage" @navigate="currentPage = $event" />
    <AppTopbar @logout="logout" />
    <ThemeSwitcher />
    <ToastHost />
    <VisitsView v-if="currentPage === 'visits'" />
    <AnalyticsView v-else-if="currentPage === 'analytics'" />
    <WidgetsView v-else-if="currentPage === 'widgets'" />
    <TablesView v-else-if="currentPage === 'tables'" />
    <IconsView v-else-if="currentPage === 'icons'" />
    <ChartsView v-else-if="currentPage === 'charts'" />
    <MapsView v-else-if="currentPage === 'maps'" />
    <NotificationsView v-else-if="currentPage === 'notifications'" />
    <TypographyView v-else-if="currentPage === 'typography'" />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}
</style>
