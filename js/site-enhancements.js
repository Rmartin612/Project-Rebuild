// ==========================================
// VER INTERNATIONAL - SITE ENHANCEMENTS
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // PAGE LOADER
    // ==========================================
    
    window.addEventListener('load', () => {
        const pageLoader = document.getElementById('pageLoader');
        if (pageLoader) {
            pageLoader.style.opacity = '0';
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }
    });
    
    // ==========================================
    // STICKY NAVIGATION
    // ==========================================
    
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Add scrolled class to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const hamburgers = navToggle.querySelectorAll('.hamburger');
            if (navMenu.classList.contains('active')) {
                hamburgers[0].style.transform = 'rotate(45deg) translateY(10px)';
                hamburgers[1].style.opacity = '0';
                hamburgers[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                hamburgers[0].style.transform = 'none';
                hamburgers[1].style.opacity = '1';
                hamburgers[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link, .nav-donate-btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 968) {
                    navMenu.classList.remove('active');
                    const hamburgers = navToggle.querySelectorAll('.hamburger');
                    hamburgers[0].style.transform = 'none';
                    hamburgers[1].style.opacity = '1';
                    hamburgers[2].style.transform = 'none';
                }
            });
        });
    }
    
    // ==========================================
    // ANIMATED COUNTER FOR STATS
    // ==========================================
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    }
    
    // Intersection Observer for counter animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    // Reset counter
                    counter.textContent = '0';
                    // Animate
                    animateCounter(counter);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.impact-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // FADE IN ANIMATIONS ON SCROLL
    // ==========================================
    
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(element);
    });
    
    // ==========================================
    // STAGGER ANIMATION FOR GRID ITEMS
    // ==========================================
    
    const staggerContainers = document.querySelectorAll('.stagger-animation');
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.children;
                Array.from(children).forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    staggerContainers.forEach(container => {
        Array.from(container.children).forEach(child => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(30px)';
            child.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        staggerObserver.observe(container);
    });
    
    // ==========================================
    // BOARD CARD ACCESSIBILITY
    // ==========================================
    
    document.querySelectorAll('.board-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', 'Board member profile');
        
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // ==========================================
    // PARALLAX EFFECT FOR HERO (OPTIONAL)
    // ==========================================
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // ==========================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ==========================================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ==========================================
    // PERFORMANCE: DEBOUNCE SCROLL EVENTS
    // ==========================================
    
    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Apply debouncing to scroll-heavy functions
    window.addEventListener('scroll', debounce(() => {
        // Any additional scroll-based functions can go here
    }, 10));
    
    // ==========================================
    // PRINT STYLES HELPER
    // ==========================================
    
    window.addEventListener('beforeprint', () => {
        // Expand all collapsed sections for printing
        document.querySelectorAll('.nav-menu').forEach(menu => {
            menu.style.display = 'flex';
        });
    });
    
    window.addEventListener('afterprint', () => {
        // Restore original state
        if (window.innerWidth <= 968) {
            document.querySelectorAll('.nav-menu').forEach(menu => {
                if (!menu.classList.contains('active')) {
                    menu.style.display = 'none';
                }
            });
        }
    });
    
    // ==========================================
    // CONSOLE SIGNATURE
    // ==========================================
    
    console.log(
        '%c🌍 VER International - Restoring Sight, Transforming Lives 👁️',
        'color: #2c5f7c; font-size: 16px; font-weight: bold; padding: 10px;'
    );
    console.log(
        '%cWebsite enhanced by Ryan Martin | Built with ❤️ for impact',
        'color: #666; font-size: 12px;'
    );
    
});
