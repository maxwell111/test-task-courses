export const checkAuth = (to, from, next) => {
  const isUserLogged = localStorage.getItem("user");
  if (to.matched.some((record) => record.meta.requiresAuth) && !isUserLogged) {
    return next({ name: "login" });
  }
  next();
};
