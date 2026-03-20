document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", function () {
      document.getElementById("zoomImg").src = this.src;
      document.getElementById("zoomOverlay").style.display = "flex";
    });
  });

  const overlay = document.getElementById("zoomOverlay");
  if (overlay) {
    overlay.addEventListener("click", function () {
      this.style.display = "none";
    });
  }
});