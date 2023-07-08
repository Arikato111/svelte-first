export function checkTheme() {
  let themeState = window.matchMedia("(prefers-color-scheme: dark)");
  if (themeState.matches) {
    document.documentElement.classList.add("dark");
  } else {
    let date = new Date();
    let dateHour = date.getHours();
    if (dateHour > 21 || dateHour < 6) {
      document.documentElement.classList.add("dark");
    }
  }
}

export function isDark() {
  return window.document.documentElement.classList.contains("dark");
}
