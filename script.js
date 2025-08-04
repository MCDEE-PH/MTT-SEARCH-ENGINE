
function toggleSettings() {
  const panel = document.getElementById("settingsPanel");
  panel.style.display = panel.style.display === "flex" ? "none" : "flex";
}

function toggleSound(checkbox) {
  const bgm = document.getElementById("bgm");
  bgm.muted = !checkbox.checked;
}

function performSearch() {
  const query = document.getElementById("searchInput").value;
  if (query.trim()) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const shortcutLinks = [
    { name: "Facebook", url: "https://facebook.com", icon: "https://www.facebook.com/favicon.ico" },
    { name: "Roblox", url: "https://roblox.com", icon: "https://www.roblox.com/favicon.ico" },
    { name: "GMeet", url: "https://meet.google.com", icon: "https://meet.google.com/favicon.ico" },
    { name: "Twitter", url: "https://twitter.com", icon: "https://twitter.com/favicon.ico" },
    { name: "YouTube", url: "https://youtube.com", icon: "https://youtube.com/favicon.ico" },
    { name: "Slack", url: "https://slack.com", icon: "https://slack.com/favicon.ico" }
  ];

  const shortcutsContainer = document.getElementById("shortcuts");
  shortcutsContainer.innerHTML = "";

  shortcutLinks.forEach(link => {
    const div = document.createElement("div");
    div.className = "shortcut";
    div.innerHTML = `<img src="${link.icon}" alt="${link.name}"><span>${link.name}</span>`;
    div.onclick = () => window.open(link.url, "_blank");
    shortcutsContainer.appendChild(div);
  });

  function countdownToHalloween() {
    const now = new Date();
    let halloween = new Date(now.getFullYear(), 9, 31);
    if (now > halloween) halloween.setFullYear(now.getFullYear() + 1);
    const diff = halloween - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").textContent =
      `🎃 Halloween Countdown: ${days}d ${hours}h ${mins}m ${secs}s`;
  }

  setInterval(countdownToHalloween, 1000);
  countdownToHalloween();
});
