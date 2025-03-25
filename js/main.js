// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

function updateCartCount(count) {
    cartCount = count;
    cartCountElement.textContent = cartCount;
}

// Add to cart functionality
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount(cartCount);
        
        // Animation feedback
        button.textContent = 'Added!';
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '';
        }, 1000);
    });
});

// Contact form handling
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Clear form and show success message
    event.target.reset();
    alert('Thank you for your message! We will get back to you soon.');
    
    return false;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.product-card, .feature, .team-member');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);