export function loadBooking() {
  const bookingDiv = document.getElementById('booking');
  
  if (bookingDiv) {
    bookingDiv.innerHTML = `
      <section id="booking" class="booking-section py-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
              <h2 class="section-title mb-4">Бронювання</h2>
              <p class="lead">Заповніть форму, щоб забронювати місце для риболовлі</p>
            </div>
          </div>
          
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-4 p-md-5">
                  <form class="needs-validation" novalidate>
                    <div class="row g-3">
                      <div class="col-12">
                        <label for="fullName" class="form-label">Ваше ім'я та прізвище</label>
                        <input type="text" class="form-control" id="fullName" placeholder="Іван Петренко" required>
                        <div class="invalid-feedback">
                          Будь ласка, введіть ваше ім'я та прізвище.
                        </div>
                      </div>
                      
                      <div class="col-md-6">
                        <label for="visitDate" class="form-label">Дата відвідування</label>
                        <input type="date" class="form-control" id="visitDate" required>
                        <div class="invalid-feedback">
                          Будь ласка, виберіть дату.
                        </div>
                      </div>
                      
                      <div class="col-md-6">
                        <label for="phone" class="form-label">Телефон</label>
                        <input type="tel" class="form-control" id="phone" placeholder="+380991234567" required>
                        <div class="invalid-feedback">
                          Будь ласка, введіть ваш номер телефону.
                        </div>
                      </div>
                      
                      <div class="col-12">
                        <label for="peopleCount" class="form-label">Кількість осіб</label>
                        <select class="form-select" id="peopleCount" required>
                          <option value="">Виберіть...</option>
                          <option value="1">1 особа</option>
                          <option value="2">2 особи</option>
                          <option value="3">3 особи</option>
                          <option value="4">4 особи</option>
                          <option value="5+">5 і більше осіб</option>
                        </select>
                        <div class="invalid-feedback">
                          Будь ласка, виберіть кількість осіб.
                        </div>
                      </div>
                      
                      <div class="col-12">
                        <label for="additionalInfo" class="form-label">Додаткова інформація (необов'язково)</label>
                        <textarea class="form-control" id="additionalInfo" rows="3" placeholder="Вкажіть будь-які особливі побажання чи запитання"></textarea>
                      </div>
                      
                      <div class="col-12 mt-4">
                        <button class="btn btn-success btn-lg w-100 rounded-pill" type="submit">Забронювати</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}