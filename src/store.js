import { reactive } from "vue";

export const store = reactive({
  api_url: import.meta.env.VITE_BACKEND_URL,
});
