export function setTheme(isDark: boolean) {
  try {
    let prefs = JSON.parse(localStorage.getItem("prefs") ?? "{}") ?? {};
    prefs.darkTheme = isDark;
    localStorage.setItem("prefs", JSON.stringify(prefs));
  } catch (err) {
    console.error("Error: setTheme at checkMode.ts \n************\n", err);
  }
}

export function checkTheme() {
  try {
    // check darkMode from localStorage
    let prefs = JSON.parse(localStorage.getItem("prefs") ?? "{}") ?? {};
    if (prefs.darkTheme === true) {
      // darkTheme is true switching to darkTheme
      document.documentElement.classList.add("dark");
      return;
    } else if (prefs.darkTheme === false) {
      // darkTheme is not null. return for light mode
      return;
    }
  } catch (err) {
    console.error("Error: checkTheme at checkMode.ts \n************\n", err);
  }

  // check darkTheme from browser
  let themeState = window.matchMedia("(prefers-color-scheme: dark)");
  if (themeState.matches) {
    document.documentElement.classList.add("dark");
  } else {
    // check darkTheme from time 21:00 - 6:00
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
