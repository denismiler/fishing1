import '../css/styles.css';
import * as bootstrap from 'bootstrap';
import { loadNavigation } from './components/navigation';
import { loadHero } from './components/hero';
import { loadAbout } from './components/about';
import { loadFishTypes } from './components/fish-types';
import { loadGallery } from './components/gallery';
import { loadBooking } from './components/booking';
import { loadContacts } from './components/contacts';
import { loadFooter } from './components/footer';
import { setupScrollSpy } from './utils/scrollspy';

// Load all components
document.addEventListener('DOMContentLoaded', () => {
  loadNavigation();
  loadHero();
  loadAbout();
  loadFishTypes();
  loadGallery();
  loadBooking();
  loadContacts();
  loadFooter();
  
  // Initialize tooltips and popovers
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  
  // Setup smooth scrolling
  setupScrollSpy();
  
  // Initialize date picker for booking form
  const dateInput = document.getElementById('visitDate');
  if (dateInput) {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', formattedDate);
  }
  
  // Form validation
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('Дякуємо за бронювання! Ми зв\'яжемося з вами найближчим часом.');
        form.reset();
      }
      form.classList.add('was-validated');
    }, false);
  });
});