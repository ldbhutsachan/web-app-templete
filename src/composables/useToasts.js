import { ref } from "vue";

const toasts = ref([]);
const position = ref("top right");
let nextId = 1;

function showToast(type, message) {
  const id = nextId++;
  toasts.value.push({ id, type, message });
  setTimeout(() => removeToast(id), 4000);
}

function removeToast(id) {
  toasts.value = toasts.value.filter((t) => t.id !== id);
}

export function useToasts() {
  return { toasts, position, showToast, removeToast };
}
