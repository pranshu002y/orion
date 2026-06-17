export const getUser = () => {
  return JSON.parse(
    localStorage.getItem("user")
  );
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  window.location.href = "/login";
};