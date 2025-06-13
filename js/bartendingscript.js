// JavaScript for tab functionality and animations
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn'); // Get all main tab buttons
  const tabContents = document.querySelectorAll('.tab-content'); // Get all main tab content sections
  
  // Main tab switching functionality with smooth animations
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab'); // Get the target tab ID
      
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Hide all tab contents
      tabContents.forEach(content => {
        if (content.classList.contains('active')) {
          content.classList.remove('active');
          content.classList.add('hidden');
        }
      });
      
      // Show target tab with animation
      const targetContent = document.getElementById(targetTab);
      targetContent.classList.remove('hidden');
      // Allow the browser to register the removal of .hidden before adding .active for animation
      setTimeout(() => {
        targetContent.classList.add('active');
      }, 10);
    });
  });
  
  // Sub-tab switching functionality for menus
  const subTabButtons = document.querySelectorAll('.sub-tab-btn'); // Get all sub-tab buttons
  const subTabContents = document.querySelectorAll('.sub-tab-content'); // Get all sub-tab content sections
  
  subTabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetSubTab = this.getAttribute('data-subtab'); // Get the target sub-tab ID
      
      // Remove active class from all sub-tab buttons
      subTabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Hide all sub-tab contents
      subTabContents.forEach(content => {
        if (content.classList.contains('active')) {
          content.classList.remove('active');
          content.classList.add('hidden');
        }
      });
      
      // Show target sub-tab with animation
      const targetSubContent = document.getElementById(targetSubTab);
      targetSubContent.classList.remove('hidden');
      // Allow the browser to register the removal of .hidden before adding .active for animation
      setTimeout(() => {
        targetSubContent.classList.add('active');
      }, 10);
    });
  });
  
  // Cocktail card hover animations
  const cocktailCards = document.querySelectorAll('.cocktail-card');
  cocktailCards.forEach(card => {
    // Add hover effect with scale animation
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
      this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    });
    
    // Remove hover effect
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
    });
  });
  
  // Package card animations
  const packageCards = document.querySelectorAll('.package-card');
  packageCards.forEach(card => {
    // Add hover effect with gentle scale
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
    });
    
    // Remove hover effect
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
    });
  });
  
  // Quote button click animation
  const quoteBtn = document.querySelector('.quote-btn');
  if (quoteBtn) {
    quoteBtn.addEventListener('click', function() {
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        // Here you could add functionality to open a contact form or redirect
        alert('Contact form coming soon! For now, please use the contact information in the footer.');
      }, 150);
    });
  }
});