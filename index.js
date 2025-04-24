function toggleTheme() {
    const html = document.getElementById("html");
    const theme = html.getAttribute("data-theme");

    if (theme === "") {
        html.setAttribute("data-theme", "dark");
    } else {
        html.setAttribute("data-theme", "");
    }
}
