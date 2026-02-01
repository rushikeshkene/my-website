// JavaScript for future interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded successfully");
});
<script>
  const reveals = document.querySelectorAll(".scroll-reveal");

  function revealOnScroll() {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
</script>
