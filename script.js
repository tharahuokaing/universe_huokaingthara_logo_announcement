document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("langToggleBtn");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const kmContent = document.querySelector(".km-content");
    const enContent = document.querySelector(".en-content");
    const divider = document.querySelector(".divider");
    const htmlRoot = document.documentElement;

    let currentLang = "both"; // 'km', 'en', or 'both'

    // Language Toggle Event Handler
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            if (currentLang === "both") {
                currentLang = "km";
                kmContent.style.display = "block";
                enContent.style.display = "none";
                if (divider) divider.style.display = "none";
                langToggleBtn.innerText = "🇰🇭 ភាសាខ្មែរ";
            } else if (currentLang === "km") {
                currentLang = "en";
                kmContent.style.display = "none";
                enContent.style.display = "block";
                if (divider) divider.style.display = "none";
                langToggleBtn.innerText = "🇬🇧 English";
            } else {
                currentLang = "both";
                kmContent.style.display = "block";
                enContent.style.display = "block";
                if (divider) divider.style.display = "block";
                langToggleBtn.innerText = "🇰🇭 / EN";
            }
        });
    }

    // Theme Toggle Handler (Dark / Light)
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = htmlRoot.getAttribute("data-theme");
            if (currentTheme === "dark") {
                htmlRoot.setAttribute("data-theme", "light");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                htmlRoot.setAttribute("data-theme", "dark");
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }

    console.log("UNIVERSE HUOKAING THARA Announcement Platform loaded successfully.");
});
