export function loadHero() {
  const heroDiv = document.getElementById('hero');
  
  if (heroDiv) {
    heroDiv.innerHTML = `
      <section id="hero" class="hero-section py-5 d-flex align-items-center text-center">
        <div class="container py-5 mt-5">
          <h1 class="display-3 fw-bold text-success mb-3">Риболовля в Доброгостові</h1>
          <p class="lead mb-4 fw-normal">Ідеальне місце для відпочинку та риболовлі на мальовничому озері</p>
          <a href="#booking" class="btn btn-success btn-lg px-4 rounded-pill">Забронювати місце</a>
        </div>
      </section>
    `;
  }
}