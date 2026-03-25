document.addEventListener('DOMContentLoaded', () => {
    // Mobilní menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('active');
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
        });
        
        // Skrytí menu po kliknutí na odkaz
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', false);
            });
        });
    }

    // Scroll effect na header
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Accordion
    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Zavřít všechny ostatní, volitelně, zde to necháme otevřít současně
            // accordions.forEach(acc => {
            //     acc.classList.remove('active');
            //     acc.querySelector('.accordion-content').style.maxHeight = null;
            //     acc.querySelector('.accordion-header').setAttribute('aria-expanded', false);
            // });

            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', true);
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                item.classList.remove('active');
                header.setAttribute('aria-expanded', false);
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = null;
            }
        });
    });

    // Cookie Banner Logika
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1500);
    }
    
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('show');
        });
    }

    // Lazy load init pro custom micro-animations (např. slide up na scorll)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .contact-form-wrap, .why-us-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Přidání CSS pro zviditelnění po scrollování
    const style = document.createElement('style');
    style.innerHTML = `
        .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    // AJAX odeslání kontaktního formuláře (Formspree) bez přesměrování
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = btn.textContent;
            btn.textContent = 'Odesílám...';
            btn.disabled = true;

            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = 'Děkujeme! Vaše zpráva byla úspěšně odeslána.';
                    formStatus.style.display = 'block';
                    formStatus.style.backgroundColor = 'rgba(0, 231, 161, 0.1)';
                    formStatus.style.color = '#00e7a1'; // primary color
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        formStatus.textContent = data.errors.map(error => error.message).join(', ');
                    } else {
                        formStatus.textContent = 'Jejda! Nastala chyba při odesílání formuláře.';
                    }
                    formStatus.style.display = 'block';
                    formStatus.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
                    formStatus.style.color = '#ff6b6b';
                }
            } catch (error) {
                formStatus.textContent = 'Jejda! Vyskytl se problém s připojením.';
                formStatus.style.display = 'block';
                formStatus.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
                formStatus.style.color = '#ff6b6b';
            } finally {
                btn.textContent = originalBtnText;
                btn.disabled = false;
                setTimeout(() => { 
                    formStatus.style.display = 'none'; 
                    formStatus.style.backgroundColor = 'transparent';
                }, 7000);
            }
        });
    }
});
