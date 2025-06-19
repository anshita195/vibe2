;(function () {
  const sessionStorageKey = "__PREFERRED_THEME__";
  function setTheme(theme) {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    document.documentElement.dataset.theme = theme;
    try {
      sessionStorage.setItem(sessionStorageKey, theme);
    } catch (e) {}
  }
  try {
    let preferredTheme = sessionStorage.getItem(sessionStorageKey);
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = preferredTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(theme);
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function handleSystemChange(e) {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      window.__theme = newTheme;
      if (typeof window.__onThemeChange === "function") {
        window.__onThemeChange(newTheme);
      }
    }
    darkQuery.addEventListener("change", handleSystemChange);
    window.__theme = theme;
    window.__onThemeChange = function () {};
    window.__setPreferredTheme = function (newTheme) {
      setTheme(newTheme);
      window.__theme = newTheme;
      if (typeof window.__onThemeChange === "function") {
        window.__onThemeChange(newTheme);
      }
    };
  } catch (e) {}
})(); 