<script setup>
import WidgetCard from "../ui/WidgetCard.vue";
import { recentChats } from "../../data/widgetsData.js";
import avatars from "../../assets/avatars.js";
</script>

<template>
  <WidgetCard title="Recent Chats" eyebrow>
    <ul class="chat-list">
      <li v-for="(msg, i) in recentChats" :key="i" class="chat-item" :class="`chat-item--${msg.side}`">
        <img class="av-circle" :src="avatars[msg.avatar]" :alt="msg.name" />
        <div class="bubble">
          <h6>{{ msg.name }}</h6>
          <p>{{ msg.text }}</p>
        </div>
      </li>
    </ul>
    <div class="chat-input">
      <input type="text" placeholder="Your message" />
      <button type="button">Send</button>
    </div>
  </WidgetCard>
</template>

<style scoped>
.chat-list {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 260px;
  overflow-y: auto;
}
.chat-item {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}
.chat-item--right {
  flex-direction: row-reverse;
  text-align: right;
}
.av-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.bubble {
  background: var(--color-bg);
  border-radius: 10px;
  padding: 8px 12px;
  max-width: 78%;
}
.chat-item--right .bubble {
  background: #eaf1ff;
}
.bubble h6 {
  margin: 0 0 3px;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--color-text-dark);
}
.bubble p {
  margin: 0;
  font-size: 12px;
  color: var(--color-text);
  line-height: 1.4;
}
.chat-input {
  display: flex;
  gap: 8px;
  margin-top: 6px;
}
.chat-input input {
  flex: 1;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 8px 12px;
  font-family: inherit;
  font-size: 12.5px;
  outline: none;
  background: var(--color-bg);
}
.chat-input button {
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  background: var(--color-text-dark);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
</style>
