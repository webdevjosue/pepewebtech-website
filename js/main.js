// PepeWebTech - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navBackdrop = document.querySelector('.nav-backdrop');
    const navClose = document.querySelector('.nav-close');
    
    let scrollPosition = 0;

    function openMobileMenu() {
        scrollPosition = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.bottom = '0';
        document.body.style.overflow = 'hidden';
        navLinks.classList.add('active');
        if (navBackdrop) navBackdrop.classList.add('active');
    }
    
    function closeMobileMenu() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.bottom = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollPosition);
        navLinks.classList.remove('active');
        if (navBackdrop) navBackdrop.classList.remove('active');
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', closeMobileMenu);
    }
    
    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMobileMenu);
        // iOS: prevent scroll leak through backdrop
        navBackdrop.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, { passive: false });
    }
    
    // Close mobile menu when clicking on a nav link (not CTA)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (!this.classList.contains('btn-primary')) {
                closeMobileMenu();
            }
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // iOS: prevent body scroll when menu is open
    document.addEventListener('touchmove', function(e) {
        if (navLinks && navLinks.classList.contains('active')) {
            // Allow scroll inside the menu panel itself
            if (navLinks.contains(e.target)) return;
            e.preventDefault();
        }
    }, { passive: false });
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
    
    // ============================================
    // THEME TOGGLE
    // ============================================
    function getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // Update all theme toggle buttons
        document.querySelectorAll('.mobile-theme-toggle, .desktop-theme-toggle').forEach(btn => {
            btn.textContent = theme === 'dark' ? '🌙' : '☀️';
        });
    }

    window.toggleTheme = function() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    };

    // Apply on load
    const theme = getPreferredTheme();
    applyTheme(theme);

    // Attach click handlers to all toggle buttons
    document.querySelectorAll('.mobile-theme-toggle, .desktop-theme-toggle').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
    
    // ============================================
    // FORM SUBMISSION
    // ============================================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.reset();
                    const msg = document.createElement('div');
                    msg.textContent = 'Thank you! We\'ll get back to you within 24 hours.';
                    msg.style.cssText = 'color: #10b981; padding: 1rem; text-align: center; margin-top: 1rem; font-weight: 600;';
                    contactForm.appendChild(msg);
                    setTimeout(() => msg.remove(), 5000);
                } else {
                    alert('Something went wrong. Please email us at info@pepewebtech.com');
                }
            })
            .catch(() => {
                alert('Something went wrong. Please email us at info@pepewebtech.com');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
    
    // ============================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .feature, .pricing-card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================================
    // BLOG FILTERS & SEARCH
    // ============================================
    const blogCards = document.querySelectorAll('.blog-card[data-category]');
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const searchInput = document.querySelector('.blog-search input');
    let currentFilter = 'All';
    const POSTS_PER_PAGE = 9;
    let currentPage = 1;

    function filterAndDisplay() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        let visibleCount = 0;

        blogCards.forEach(card => {
            const category = card.getAttribute('data-category') || '';
            const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
            const desc = card.querySelector('.blog-content p') ? card.querySelector('.blog-content p').textContent.toLowerCase() : '';

            const matchesFilter = currentFilter === 'All' || category === currentFilter;
            const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm);

            if (matchesFilter && matchesSearch) {
                visibleCount++;
                card.style.display = '';
                // Pagination
                if (visibleCount > currentPage * POSTS_PER_PAGE) {
                    card.style.display = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide load more
        const loadMoreBtn = document.querySelector('.blog-load-more-btn');
        if (loadMoreBtn) {
            const totalVisible = [...blogCards].filter(c => c.style.display !== 'none' || (
                (currentFilter === 'All' || c.getAttribute('data-category') === currentFilter) &&
                (!searchTerm || 
                    (c.querySelector('h3') && c.querySelector('h3').textContent.toLowerCase().includes(searchTerm)) ||
                    (c.querySelector('.blog-content p') && c.querySelector('.blog-content p').textContent.toLowerCase().includes(searchTerm))
                )
            )).length;
            
            // Count cards that match filter but are beyond current page
            let totalMatching = 0;
            blogCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
                const desc = card.querySelector('.blog-content p') ? card.querySelector('.blog-content p').textContent.toLowerCase() : '';
                const matchesFilter = currentFilter === 'All' || category === currentFilter;
                const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm);
                if (matchesFilter && matchesSearch) totalMatching++;
            });

            loadMoreBtn.style.display = totalMatching > currentPage * POSTS_PER_PAGE ? 'inline-flex' : 'none';
        }
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-filter');
                currentPage = 1;
                filterAndDisplay();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentPage = 1;
            filterAndDisplay();
        });
    }

    // Load More button
    const loadMoreBtn = document.querySelector('.blog-load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentPage++;
            filterAndDisplay();
        });
    }

    // Initial filter
    if (blogCards.length > 0) {
        filterAndDisplay();
    }
});

// Console Easter Egg
console.log('%c⚡ PepeWebTech', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cBuilt with AI. Delivered with speed.', 'font-size: 14px; color: #a1a1aa;');
