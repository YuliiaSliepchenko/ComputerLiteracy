/**
 * ItEnAi Computer Literacy Course Landing Page JavaScript
 * Handles user interactions, form submissions, and animations
 */

// Document ready state handler
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeModalHandlers();
    initializeScrollEffects();
});

/**
 * Initialize scroll-triggered animations
 */
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.module-card, .testimonial-card, .stat-item, .benefit-item');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Initialize modal event handlers
 */
function initializeModalHandlers() {
    const modal = document.getElementById('registrationModal');
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeRegistrationForm();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeRegistrationForm();
        }
    });
}

/**
 * Initialize scroll effects for header
 */
function initializeScrollEffects() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backdropFilter = 'blur(10px)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.backdropFilter = 'none';
            header.style.backgroundColor = 'white';
        }
    });
}

/**
 * Smooth scroll to section
 * @param {string} sectionId - The ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Open registration form modal
 */
function openRegistrationForm() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus on first input
    setTimeout(() => {
        const firstInput = modal.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
    }, 100);
    
    // Track analytics event
    trackEvent('registration_form_opened');
}

/**
 * Close registration form modal
 */
function closeRegistrationForm() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Track analytics event
    trackEvent('registration_form_closed');
}

/**
 * Handle registration form submission
 * @param {Event} event - Form submission event
 */
function submitRegistration(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const registrationData = {
        childName: formData.get('childName'),
        childAge: formData.get('childAge'),
        parentPhone: formData.get('parentPhone'),
        parentEmail: formData.get('parentEmail'),
        timestamp: new Date().toISOString()
    };
    
    // Validate form data
    if (!validateRegistrationData(registrationData)) {
        return;
    }
    
    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Обробка...';
    submitButton.disabled = true;
    
    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        // Here you would typically send data to your server
        console.log('Registration data:', registrationData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        event.target.reset();
        
        // Close modal
        closeRegistrationForm();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Track analytics event
        trackEvent('registration_completed', registrationData);
        
    }, 1500);
}

/**
 * Validate registration form data
 * @param {Object} data - Registration data object
 * @returns {boolean} - Whether data is valid
 */
function validateRegistrationData(data) {
    // Child name validation
    if (!data.childName || data.childName.trim().length < 2) {
        showErrorMessage('Будь ласка, введіть коректне ім\'я дитини');
        return false;
    }
    
    // Age validation
    if (!data.childAge || data.childAge < 9 || data.childAge > 18) {
        showErrorMessage('Вік дитини повинен бути від 9 до 18 років');
        return false;
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
    if (!data.parentPhone || !phoneRegex.test(data.parentPhone.replace(/\s/g, ''))) {
        showErrorMessage('Будь ласка, введіть коректний номер телефону');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.parentEmail || !emailRegex.test(data.parentEmail)) {
        showErrorMessage('Будь ласка, введіть коректну email адресу');
        return false;
    }
    
    return true;
}

/**
 * Show success message to user
 */
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #059669 0%, #34d399 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
            z-index: 3000;
            animation: slideInRight 0.3s ease-out;
        ">
            <div style="display: flex; align-items: center; gap: 8px;">
                <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span><strong>Успішно!</strong> Ми зв'яжемося з вами найближчим часом.</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

/**
 * Show error message to user
 * @param {string} text - Error message text
 */
function showErrorMessage(text) {
    const message = document.createElement('div');
    message.className = 'error-message';
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
            z-index: 3000;
            animation: slideInRight 0.3s ease-out;
        ">
            <div style="display: flex; align-items: center; gap: 8px;">
                <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>${text}</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

/**
 * Handle call us button click
 */
function callUs() {
    // Replace with actual phone number
    const phoneNumber = '+380XXXXXXXXX';
    
    // Try to initiate phone call on mobile devices
    if (navigator.userAgent.match(/Mobile|Android|iPhone|iPad/)) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Show phone number for desktop users
        showSuccessMessage('Наш номер телефону: ' + phoneNumber);
    }
    
    // Track analytics event
    trackEvent('phone_call_initiated');
}

/**
 * Track analytics events (replace with your analytics implementation)
 * @param {string} eventName - Name of the event
 * @param {Object} eventData - Additional event data
 */
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Console log for development
    if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', eventName, eventData);
    }
}

/**
 * Add CSS animations dynamically
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

/**
 * Handle form input enhancements
 */
document.addEventListener('input', function(event) {
    if (event.target.type === 'tel') {
        // Format phone number as user types
        let value = event.target.value.replace(/\D/g, '');
        if (value.startsWith('380')) {
            value = value.slice(3);
        }
        if (value.length > 0) {
            value = value.match(/.{1,3}/g)?.join(' ') || value;
            if (value.startsWith('0')) {
                event.target.value = '+380 ' + value;
            } else {
                event.target.value = '+380 0' + value;
            }
        }
    }
});

/**
 * Lazy loading for images
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLazyLoading);
} else {
    initializeLazyLoading();
}