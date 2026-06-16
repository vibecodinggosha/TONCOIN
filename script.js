const CONTRACT_ADDRESS = "EQAk9UDY-QjyouPmRxrDNPgfRdV2gRwuffP-l3tQbMF5juIU";

async function copyAddress(btn) {
  try {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
  } catch {
    const tmp = document.createElement("textarea");
    tmp.value = CONTRACT_ADDRESS;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
  }
  const original = btn.textContent;
  btn.textContent = "Скопировано!";
  btn.classList.add("copied");
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove("copied");
  }, 1800);
}

document.getElementById("copyContract")?.addEventListener("click", (e) => copyAddress(e.currentTarget));
document.getElementById("copyContract2")?.addEventListener("click", (e) => copyAddress(e.currentTarget));

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle?.addEventListener("click", () => {
  mainNav.classList.toggle("nav-open");
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("nav-open"));
});
