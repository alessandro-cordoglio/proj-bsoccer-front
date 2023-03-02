import { reactive } from "vue";

export const store = reactive({
  api_url: import.meta.env.VITE_BACKEND_URL,
  hamburgerAnimation: false,
  selectedRole: "",
  players: [],
  roles: [
    "Portiere",
    "Difensore Centrale",
    "Terzino Destro",
    "Terzino Sinistro",
    "Centrocampista",
    "Esterno Destro",
    "Esterno Sinistro",
    "Punta",
    "Attaccante Sinistro",
    "Attaccante Destro",
  ],
  selectedRating: 0,
  howManyReviews: 0,
  prePage: 5,
  currentPage: 1
});
