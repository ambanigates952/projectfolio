// Place this at the very top of script.js, outside all other code
window.downloadResume = function() {
    console.log('Opening resume link');
    
    const button = document.querySelector('.secondary-btn');
    const originalText = button.innerHTML;
    const driveUrl = 'https://drive.google.com/file/d/1BXkN4c0hVBDYxhoInAwv2JeWBp_zk6aW/view?usp=sharing';
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Opening Resume...</span>';
    
    // Simply navigate to the URL
    window.location.href = driveUrl;
    
    // Reset button after a delay
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 2000);
};

document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
    const sections = document.querySelectorAll('.loading-section');
    const progress = document.querySelector('.progress');
    
    // Show first section immediately
    sections[0].style.opacity = '1';
    
    // After 1 second, show second section
    setTimeout(() => {
        sections[0].style.opacity = '0';
        sections[1].style.opacity = '1';
    }, 1000);
    
    // After 2 seconds, show progress bar
    setTimeout(() => {
        sections[1].style.opacity = '0';
        sections[2].style.opacity = '1';
        progress.style.width = '100%';
    }, 2000);
    
    // After 3 seconds total, show main content
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        mainContent.style.opacity = '1';
        
        // Remove loading screen
        setTimeout(() => {
            loadingScreen.remove();
            // Initialize your animations
            startPageAnimations();
            typeText();
        }, 500);
    }, 3000);
});

// Your existing animation and interaction functions
function startPageAnimations() {
    // Hero name animations
    const heroName = document.querySelector('.hero-name');
    let isHovered = false;

    function updateGradient() {
        if (!isHovered) {
            const gradients = [
                'linear-gradient(45deg, #FFFFFF, #4A4A4A)',
                'linear-gradient(45deg, #60A5FA, #7C3AED)',
                'linear-gradient(45deg, #7C3AED, #EC4899)',
                'linear-gradient(45deg, #EC4899, #60A5FA)'
            ];
            
            let currentIndex = 0;
            
            setInterval(() => {
                if (!isHovered) {
                    heroName.style.backgroundImage = gradients[currentIndex];
                    currentIndex = (currentIndex + 1) % gradients.length;
                }
            }, 3000);
        }
    }

    // Start the gradient cycle
    updateGradient();
}

// Your typing animation function
function typeText() {
    // Your existing typing animation code
}

// Rest of your website functionality

// Add this to ensure content is hidden until loaded
window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted!');
    
    // Reset form
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.top <= window.innerHeight * 0.7);
        
        if (isVisible) {
            section.classList.add('visible');
        }
    });
});

// Add class for initial animation state
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate');
    });
    
    // Add animation for experience cards
    const cards = document.querySelectorAll('.experience-card, .skill-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});

// Mobile menu toggle (you'll need to add the HTML for this)
const mobileMenuButton = document.createElement('button');
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').appendChild(mobileMenuButton);

mobileMenuButton.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('skill-card')) {
                entry.target.style.transitionDelay = `${Math.random() * 0.5}s`;
            }
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.experience-card, .skill-card').forEach(card => {
    observer.observe(card);
});

// Smooth scroll with progress indication
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Add progress bar
        const progressBar = document.createElement('div');
        progressBar.classList.add('scroll-progress');
        document.body.appendChild(progressBar);
        
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Remove progress bar after animation
        setTimeout(() => {
            progressBar.remove();
        }, 1000);
    });
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-content');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    hero.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
});

// Typing Animation
const texts = [
    "Crafting innovative design solutions",
    "Building impactful user experiences",
    "Leading creative direction & strategy"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const waitTime = 2000;

function typeText() {
    const currentText = texts[textIndex];
    const typingElement = document.querySelector('.typing-text');
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, waitTime);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
        return;
    }
    
    setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    typeText();
});

// Smooth scroll for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Enhanced mobile menu
const mobileMenu = document.querySelector('.nav-links');
const menuItems = mobileMenu.querySelectorAll('li');

menuItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelector('.mobile-menu-button').addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    menuItems.forEach(item => {
        item.style.opacity = mobileMenu.classList.contains('show') ? '1' : '0';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
    }
});

// Enhanced animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal for sections
    const revealElements = document.querySelectorAll('.experience-card, .skill-card, section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        revealObserver.observe(element);
    });

    // Enhanced parallax effect
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        hero.style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
    });

    // Smooth scroll with dynamic progress indicator
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            // Create progress indicator
            const progress = document.createElement('div');
            progress.classList.add('scroll-progress');
            document.body.appendChild(progress);

            // Smooth scroll
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove progress indicator
            setTimeout(() => {
                progress.remove();
            }, 1000);
        });
    });

    // Enhanced form interaction
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        const label = document.createElement('label');
        label.textContent = input.placeholder;
        input.parentNode.insertBefore(label, input);
        
        input.addEventListener('focus', () => {
            label.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                label.classList.remove('active');
            }
        });
    });

    // Only initialize custom cursor on non-touch devices
    if (!('ontouchstart' in window)) {
        const cursor = document.createElement('div');
        const cursorDot = document.createElement('div');
        cursor.className = 'cursor-outline';
        cursorDot.className = 'cursor-dot';
        document.body.appendChild(cursor);
        document.body.appendChild(cursorDot);

        document.addEventListener('mousemove', e => {
            gsap.to(cursor, { 
                duration: 0.5, 
                x: e.clientX,
                y: e.clientY,
                ease: "power2.out"
            });
            gsap.to(cursorDot, { 
                duration: 0.1, 
                x: e.clientX,
                y: e.clientY
            });
        });

        // Add hover effect for interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .experience-card, .skill-card, .portfolio-item, .nav-links li a, .social-icons a'
        );

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorDot.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorDot.classList.remove('cursor-hover');
            });
        });

        // Hide cursor when it leaves the window
        document.addEventListener('mouseleave', () => {
            cursor.style.display = 'none';
            cursorDot.style.display = 'none';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.display = 'block';
            cursorDot.style.display = 'block';
        });
    }

    // Hero name hover effect
    const heroName = document.querySelector('.hero-name');
    let isHovered = false;

    // Function to update gradient
    function updateGradient() {
        if (!isHovered) {
            const gradients = [
                'linear-gradient(45deg, #FFFFFF, #4A4A4A)',
                'linear-gradient(45deg, #60A5FA, #7C3AED)',
                'linear-gradient(45deg, #7C3AED, #EC4899)',
                'linear-gradient(45deg, #EC4899, #60A5FA)'
            ];
            
            let currentIndex = 0;
            
            setInterval(() => {
                if (!isHovered) {
                    heroName.style.backgroundImage = gradients[currentIndex];
                    currentIndex = (currentIndex + 1) % gradients.length;
                }
            }, 3000);
        }
    }

    // Hover effects
    heroName.addEventListener('mouseover', () => {
        isHovered = true;
        heroName.style.backgroundImage = 'linear-gradient(45deg, #60A5FA, #7C3AED, #EC4899)';
        heroName.style.backgroundSize = '200% auto';
        heroName.style.animation = 'gradientFlow 8s ease infinite';
    });

    heroName.addEventListener('mouseout', () => {
        isHovered = false;
        heroName.style.backgroundImage = 'linear-gradient(to right, #FFFFFF, #4A4A4A)';
        heroName.style.backgroundSize = '100% auto';
        heroName.style.animation = 'fadeInUp 0.8s ease-out forwards';
        updateGradient(); // Restart the gradient cycle
    });

    // Start the gradient cycle
    updateGradient();
});

// Form validation and submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    try {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success message
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Message sent successfully!';
        e.target.appendChild(successMessage);
        
        // Reset form
        e.target.reset();
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu animation
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('active');
    navLinks.classList.toggle('show');
    
    // Animate menu button
    const spans = mobileMenuButton.querySelectorAll('span');
    if (mobileMenuButton.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Lazy loading images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Mobile menu handling
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Smooth scrolling for mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (mobileNav.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        }
        
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Update video background handling
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-video');
    const heroBackground = document.querySelector('.hero-background');
    
    // Check if video is supported and loaded
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', function() {
            heroVideo.play().catch(function(error) {
                console.log("Video autoplay failed:", error);
                // Show fallback background if video fails
                heroBackground.style.display = 'block';
                heroVideo.style.display = 'none';
            });
        });
        
        // Fallback for mobile devices
        if (window.matchMedia('(max-width: 768px)').matches) {
            heroBackground.style.display = 'block';
            heroVideo.style.display = 'none';
        }
    }
});

// Add lazy loading for profile image
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        const img = new Image();
        img.src = profileImg.dataset.src;
        img.onload = function() {
            profileImg.classList.add('loaded');
        };
    }
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 50
    });

    // Initialize particles.js with black theme
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: { enable: true, value_area: 800 }
            },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'bounce' },
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onHover: { enable: true, mode: 'repulse' },
                onClick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTimeline
        .from('.hero-text .subtitle', { 
            y: 30, 
            opacity: 0, 
            duration: 1 
        })
        .from('.hero-text h1', { 
            y: 50, 
            opacity: 0, 
            duration: 1 
        }, '-=0.5')
        .from('.hero-text h2', { 
            y: 30, 
            opacity: 0, 
            duration: 1 
        }, '-=0.5')
        .from('.hero-text p', { 
            y: 30, 
            opacity: 0, 
            duration: 1 
        }, '-=0.5')
        .from('.cta-group', { 
            y: 30, 
            opacity: 0, 
            duration: 1 
        }, '-=0.5')
        .from('.hero-image', { 
            x: 100, 
            opacity: 0, 
            duration: 1.5 
        }, '-=1');

    // Scroll animations for sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1
            },
            y: 50,
            opacity: 0.5
        });
    });

    // Experience card hover effect
    document.querySelectorAll('.experience-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Custom cursor
    if (!('ontouchstart' in window)) {
        const cursor = document.createElement('div');
        const cursorDot = document.createElement('div');
        cursor.className = 'cursor-outline';
        cursorDot.className = 'cursor-dot';
        document.body.appendChild(cursor);
        document.body.appendChild(cursorDot);

        document.addEventListener('mousemove', e => {
            gsap.to(cursor, { 
                duration: 0.5, 
                x: e.clientX,
                y: e.clientY,
                ease: 'power2.out'
            });
            gsap.to(cursorDot, { 
                duration: 0.1, 
                x: e.clientX,
                y: e.clientY
            });
        });

        // Cursor hover effect
        const interactiveElements = document.querySelectorAll(
            'a, button, .experience-card, .skill-card, .portfolio-item'
        );

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorDot.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorDot.classList.remove('cursor-hover');
            });
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('show');
    });

    // Form handling
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        try {
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Add your form submission logic here
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success message
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Skills Animation
    const skills = [
        "Crafting innovative design solutions",
        "Leading creative direction & strategy",
        "Building impactful user experiences"
    ];

    let currentSkill = 0;
    const skillText = document.querySelector('.skill-text');

    function updateSkill() {
        skillText.style.opacity = '0';
        setTimeout(() => {
            skillText.textContent = skills[currentSkill];
            skillText.style.opacity = '1';
            currentSkill = (currentSkill + 1) % skills.length;
        }, 500);
    }

    setInterval(updateSkill, 3000);
    updateSkill(); // Initial update

    // Resume Download
    function downloadResume() {
        console.log('Download initiated');
        
        const button = document.querySelector('.secondary-btn');
        const originalText = button.innerHTML;
        const driveUrl = 'https://drive.google.com/file/d/1BXkN4c0hVBDYxhoInAwv2JeWBp_zk6aW/view?usp=sharing';
        
        try {
            // Show loading state
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Opening Resume...</span>';
            
            // Open resume in new tab
            window.open(driveUrl, '_blank');
            
            // Reset button after delay
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);
            
        } catch (error) {
            console.error('Download error:', error);
            button.innerHTML = '<i class="fas fa-exclamation-circle"></i><span>Failed to Open</span>';
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);
        }
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2').forEach((el) => {
        observer.observe(el);
    });

    // Skills configuration
    const skills = [
        { 
            icon: '<svg class="skill-icon text-blue-500">...</svg>', 
            text: "Crafting innovative design solutions" 
        },
        { 
            icon: '<svg class="skill-icon text-green-500">...</svg>', 
            text: "Leading creative direction & strategy" 
        },
        { 
            icon: '<svg class="skill-icon text-purple-500">...</svg>', 
            text: "Building impactful user experiences" 
        }
    ];

    let activeSkill = 0;
    const skillItem = document.querySelector('.skill-item');
    const skillIcon = skillItem.querySelector('.skill-icon');
    const skillText = skillItem.querySelector('.skill-text');

    // Update skill function
    function updateSkill() {
        skillItem.classList.remove('active');
        
        setTimeout(() => {
            skillIcon.innerHTML = skills[activeSkill].icon;
            skillText.textContent = skills[activeSkill].text;
            skillItem.classList.add('active');
            
            activeSkill = (activeSkill + 1) % skills.length;
        }, 500);
    }

    // Initialize and start skill rotation
    updateSkill();
    setInterval(updateSkill, 3000);

    // Button hover effects
    document.querySelectorAll('.primary-btn, .secondary-btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mousedown', () => {
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1
            });
        });

        button.addEventListener('mouseup', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.1
            });
        });
    });

    // Initial animations
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.skills-showcase', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.from('.cta-buttons', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out'
    });

    // Add GSAP animations for gradient balls
    gsap.to('.ball-1', {
        rotation: 360,
        scale: 1.1,
        x: 50,
        y: -50,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
    });

    gsap.to('.ball-2', {
        rotation: -360,
        scale: 0.9,
        x: -50,
        y: 50,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "none"
    });
});

// Notification helper
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    gsap.to(notification, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: 'power3.out'
    });
    
    setTimeout(() => {
        gsap.to(notification, {
            duration: 0.5,
            opacity: 0,
            y: -20,
            ease: 'power3.in',
            onComplete: () => notification.remove()
        });
    }, 3000);
}

function typeWriterEffect() {
    const text = "Rohit Sharma";
    const typingElement = document.querySelector('.typing-name');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust typing speed here
        }
    }

    // Start typing animation
    type();
}

// Call this function after page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriterEffect, 500); // Start after a small delay
});

// Mobile menu functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuButton.classList.toggle('active');
        navLinks.classList.toggle('show');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuButton.classList.remove('active');
            navLinks.classList.remove('show');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenuButton.classList.remove('active');
            navLinks.classList.remove('show');
        }
    });
}

// Prevent zoom on double tap (iOS)
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    
    if (now - lastTap < DOUBLE_TAP_DELAY) {
        e.preventDefault();
    }
    lastTap = now;
}, false);

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    function toggleMenu(show = null) {
        const shouldShow = show ?? !mobileMenuButton.classList.contains('active');
        
        mobileMenuButton.classList.toggle('active', shouldShow);
        navLinks.classList.toggle('show', shouldShow);
        document.body.classList.toggle('menu-open', shouldShow);
        
        // Animate nav items
        navLinksItems.forEach((link, index) => {
            setTimeout(() => {
                if (shouldShow) {
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0)';
                } else {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(20px)';
                }
            }, shouldShow ? index * 100 : 0);
        });
    }

    if (mobileMenuButton && navLinks) {
        // Remove any existing event listeners
        mobileMenuButton.replaceWith(mobileMenuButton.cloneNode(true));
        const newMobileMenuButton = document.querySelector('.mobile-menu-button');
        
        // Add new click handler
        newMobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking links
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu(false);
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('show') && 
                !navLinks.contains(e.target) && 
                !newMobileMenuButton.contains(e.target)) {
                toggleMenu(false);
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('show')) {
                toggleMenu(false);
            }
        });
    }
}); 