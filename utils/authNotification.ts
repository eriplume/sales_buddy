import { showSuccessNotification } from "@/utils/notifications";

export const checkLoginStatus = () => {
  if (localStorage.getItem("justLoggedIn") === "true") {
    showSuccessNotification("ログインしました");
    localStorage.removeItem("justLoggedIn");
  }
};

export const checkLogutStatus = () => {
  if (localStorage.getItem("justLoggedOut") === "true") {
    showSuccessNotification("ログアウトしました");
    localStorage.removeItem("justLoggedOut");
  }
};