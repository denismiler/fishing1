export function loadNavigation() {
  const navigationDiv = document.getElementById('navigation');
  
  if (navigationDiv) {
    navigationDiv.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold text-success" href="#hero">
            Риболовля в Доброгостові
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#hero">Головна</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">Про озеро</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#fish-types">Види риб</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery">Галерея</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#booking">Бронювання</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacts">Контакти</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}