export function loadAbout() {
  const aboutDiv = document.getElementById('about');
  
  if (aboutDiv) {
    aboutDiv.innerHTML = `
      <section id="about" class="about-section py-5 bg-light">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-4">
              <h2 class="section-title mb-4">Про озеро</h2>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                  <h3 class="fs-4 mb-3">Розташування</h3>
                  <p>Озеро розташоване в мальовничому селі Доброгостів, Львівської області, всього в 15 км від міста Дрогобич. Територія озера оточена зеленими лісами та пагорбами, що створює ідеальну атмосферу для відпочинку від міської метушні.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                  <h3 class="fs-4 mb-3">Характеристики</h3>
                  <p>Площа озера становить понад 5 гектарів з максимальною глибиною до 4 метрів. Вода регулярно оновлюється через природні джерела, що забезпечує оптимальні умови для розвитку різноманітних видів риб.</p>
                </div>
              </div>
            </div>
            <div class="col-12 mt-4">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body">
                  <h3 class="fs-4 mb-3">Інфраструктура</h3>
                  <p>Навколо озера створено комфортні умови для відпочинку та риболовлі. Є обладнані містки для риболовлі, затишні альтанки для відпочинку, мангали для приготування їжі, а також санітарні зручності. Для любителів активного відпочинку доступна оренда човнів. Територія озера підтримується в чистоті та порядку, щоб забезпечити максимальний комфорт для всіх відвідувачів.</p>
                  <div class="text-center mt-4">
                    <a href="#booking" class="btn btn-outline-success rounded-pill px-4">Забронювати візит</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}