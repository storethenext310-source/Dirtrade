// DIRTRADE PWA — Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js", {
        scope: "./"
      });
      console.log("DIRTRADE PWA aktif:", registration.scope);
    } catch (error) {
      console.error("DIRTRADE PWA gagal:", error);
    }
  });
}
