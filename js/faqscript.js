// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ question buttons
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Add click event listener to each question
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Get the corresponding answer element
            const answer = this.nextElementSibling;
            
            // Check if this question is currently expanded
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    otherQuestion.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle the current FAQ item
            if (isExpanded) {
                // Close this item
                this.setAttribute('aria-expanded', 'false');
                answer.classList.remove('active');
            } else {
                // Open this item
                this.setAttribute('aria-expanded', 'true');
                answer.classList.add('active');
            }
        });
        
        // Add keyboard support (Enter and Space keys)
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Smooth scrolling for navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate offset for fixed header
                const headerHeight = 100;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});