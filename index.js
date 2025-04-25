function toggleTheme() {
    const html = document.getElementById("html");
    const theme = html.getAttribute("data-theme");
    const icons = document.getElementsByClassName('iconFooter');

    const newColor = theme === "" ? "#202020" : "#ffffff";
    const newTheme = theme === "" ? "dark" : "";

    html.setAttribute("data-theme", newTheme);

    // Percorre todos os ícones e aplica a nova cor
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.fill = newColor;
    }
}