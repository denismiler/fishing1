export function loadFishTypes() {
  const fishTypesDiv = document.getElementById('fish-types');
  
  if (fishTypesDiv) {
    fishTypesDiv.innerHTML = `
      <section id="fish-types" class="fish-types-section py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
              <h2 class="section-title mb-4">Види риб</h2>
              <p class="lead">Наше озеро населене різноманітними видами риб, які принесуть задоволення як початківцям, так і досвідченим рибалкам</p>
            </div>
          </div>
          
          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="card h-100 fish-card border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <div class="fish-icon mb-3">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" stroke="#198754" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="fs-4 mb-2">Короп</h3>
                  <p class="mb-3">Найпопулярніша риба, вага якої може сягати до 15 кг. Активно клює з весни до осені.</p>
                  <span class="badge bg-success py-2 px-3 rounded-pill">Популярний</span>
                </div>
              </div>
            </div>
            
            <div class="col-md-6 col-lg-3">
              <div class="card h-100 fish-card border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <div class="fish-icon mb-3">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" stroke="#0d6efd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="fs-4 mb-2">Щука</h3>
                  <p class="mb-3">Хижа риба, яка приносить особливе задоволення спортивним рибалкам. Вага до 10 кг.</p>
                  <span class="badge bg-primary py-2 px-3 rounded-pill">Хижак</span>
                </div>
              </div>
            </div>
            
            <div class="col-md-6 col-lg-3">
              <div class="card h-100 fish-card border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <div class="fish-icon mb-3">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="fs-4 mb-2">Амур</h3>
                  <p class="mb-3">Рослиноїдна риба, що може досягати значних розмірів. Улюбленець багатьох рибалок.</p>
                  <span class="badge bg-secondary py-2 px-3 rounded-pill">Рослиноїдний</span>
                </div>
              </div>
            </div>
            
            <div class="col-md-6 col-lg-3">
              <div class="card h-100 fish-card border-0 shadow-sm">
                <div class="card-body text-center p-4">
                  <div class="fish-icon mb-3">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" stroke="#dc3545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="fs-4 mb-2">Осетер</h3>
                  <p class="mb-3">Рідкісний трофей для справжніх цінителів риболовлі. Спеціально зариблений в озері.</p>
                  <span class="badge bg-danger py-2 px-3 rounded-pill">Трофейний</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}