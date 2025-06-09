export function loadGallery() {
  const galleryDiv = document.getElementById('gallery');
  
  if (galleryDiv) {
    galleryDiv.innerHTML = `
      <section id="gallery" class="gallery-section py-5 bg-light">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
              <h2 class="section-title mb-4">Галерея</h2>
              <p class="lead">Перегляньте фотографії нашого мальовничого озера та трофейних уловів</p>
            </div>
          </div>
          
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card border-0 shadow-sm overflow-hidden h-100">
                <img src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                     alt="Панорама озера Доброгостів у сонячний день, оточене зеленими деревами" 
                     class="img-fluid rounded gallery-img">
                <div class="card-body">
                  <h5 class="card-title">Мальовнича панорама озера</h5>
                  <p class="card-text">Прекрасний вид на озеро у сонячний день, оточене зеленими деревами.</p>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="card border-0 shadow-sm overflow-hidden h-100">
                <img src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                     alt="Щасливий рибалка тримає великого коропа, якого він спіймав у озері Доброгостів" 
                     class="img-fluid rounded gallery-img">
                <div class="card-body">
                  <h5 class="card-title">Трофейний улов</h5>
                  <p class="card-text">Один із наших відвідувачів із чудовим трофейним коропом.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}