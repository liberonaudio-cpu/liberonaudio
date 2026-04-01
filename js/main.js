/* ============================================
   LIBERONAUDIO — MAIN JS
   ============================================
   Shared functionality across all pages.
   Requires data.js to be loaded first.
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       LOADER
       ============================================ */
    function initLoader() {
        const el = document.getElementById('loaderText');
        if (!el) return;
        const text = SITE_DATA.business.name;
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${i * 0.05}s`;
            el.appendChild(span);
        });
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1200);
        });
    }

    /* ============================================
       NAVIGATION
       ============================================ */
    function initNav() {
        const nav = document.getElementById('nav');
        if (!nav) return;
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    nav.classList.toggle('scrolled', window.scrollY > 80);
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Mobile toggle
        const toggle = document.getElementById('navToggle');
        const links = document.getElementById('navLinks');
        if (toggle && links) {
            toggle.addEventListener('click', () => links.classList.toggle('open'));
            links.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', () => links.classList.remove('open'));
            });
        }

        // Active page highlight
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        nav.querySelectorAll('.nav-links a').forEach(a => {
            const href = a.getAttribute('href');
            if (href === currentPage || (currentPage === 'index.html' && href.startsWith('#'))) {
                // handled by scroll for index
            } else if (href === currentPage) {
                a.classList.add('active');
            }
        });
    }

    /* ============================================
       SCROLL REVEAL (Intersection Observer)
       ============================================ */
    function initReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
            observer.observe(el);
        });
    }

    /* ============================================
       PARALLAX (hero only)
       ============================================ */
    function initParallax() {
        const hero = document.getElementById('hero');
        if (!hero) return;
        const title = hero.querySelector('.hero-title');
        const tagline = hero.querySelector('.hero-tagline');
        if (!title) return;

        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            if (scroll < window.innerHeight) {
                const factor = scroll / window.innerHeight;
                title.style.transform = `translateY(${scroll * 0.15}px)`;
                title.style.opacity = 1 - factor * 0.8;
                if (tagline) {
                    tagline.style.transform = `translateY(${scroll * 0.08}px)`;
                    tagline.style.opacity = 1 - factor * 1.2;
                }
            }
        });
    }

    /* ============================================
       RENDER BRANDS — CAROUSEL
       Shows 4 brands visible, arrows to scroll.
       Click on brand → goes to boutique filtered.
       ============================================ */
    function renderBrands() {
        const container = document.getElementById('brandsCarousel');
        if (!container) return;

        const track = container.querySelector('.brands-track');
        const prevBtn = container.querySelector('.brands-arrow--prev');
        const nextBtn = container.querySelector('.brands-arrow--next');
        if (!track) return;

        const brands = SITE_DATA.brands || [];
        if (brands.length === 0) return;

        brands.forEach(brand => {
            const cell = document.createElement('a');
            cell.className = 'brand-slide';
            cell.href = `boutique.html?brand=${encodeURIComponent(brand.name)}`;
            cell.title = `Ver equipos ${brand.name}`;

            if (brand.logo) {
                const img = document.createElement('img');
                img.className = 'brand-logo';
                img.alt = brand.name;
                img.loading = 'lazy';
                img.src = `img/brands/${brand.logo}`;
                img.onerror = function() {
                    this.remove();
                    cell.classList.add('brand-slide--no-logo');
                };
                cell.appendChild(img);
            } else {
                cell.classList.add('brand-slide--no-logo');
            }

            const info = document.createElement('div');
            info.className = 'brand-info';
            info.innerHTML = `
                <div class="brand-name">${brand.name}</div>
                <div class="brand-country">${brand.country}</div>
            `;
            cell.appendChild(info);
            track.appendChild(cell);
        });

        // Carousel scroll
        let scrollPos = 0;
        const slideWidth = () => {
            const slide = track.querySelector('.brand-slide');
            return slide ? slide.offsetWidth + 1 : 200; // +1 for gap/border
        };

        function updateArrows() {
            if (prevBtn) prevBtn.style.opacity = scrollPos <= 0 ? '0.2' : '1';
            if (nextBtn) nextBtn.style.opacity = scrollPos >= track.scrollWidth - track.offsetWidth - 5 ? '0.2' : '1';
        }

        if (prevBtn) prevBtn.addEventListener('click', () => {
            scrollPos = Math.max(0, scrollPos - slideWidth());
            track.style.transform = `translateX(-${scrollPos}px)`;
            updateArrows();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            const maxScroll = track.scrollWidth - track.offsetWidth;
            scrollPos = Math.min(maxScroll, scrollPos + slideWidth());
            track.style.transform = `translateX(-${scrollPos}px)`;
            updateArrows();
        });

        updateArrows();
    }

    /* ============================================
       RENDER SERVICES
       ============================================ */
    function renderServices() {
        const grid = document.querySelector('.services-grid');
        if (!grid || !SITE_DATA.services) return;

        // Only render if grid is empty (not pre-filled in HTML)
        if (grid.children.length > 0) return;

        SITE_DATA.services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <div class="service-number">${service.number}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.description}</p>
            `;
            grid.appendChild(card);
        });
    }

    /* ============================================
       RENDER CONTACT INFO
       ============================================ */
    function renderContact() {
        const el = document.getElementById('contactInfo');
        if (!el || !SITE_DATA.contact) return;

        const c = SITE_DATA.contact;
        el.innerHTML = `
            <div class="contact-info-item reveal">
                <div class="contact-label">Ubicación</div>
                <div class="contact-value">${c.address}</div>
            </div>
            <div class="contact-info-item reveal reveal-delay-1">
                <div class="contact-label">Teléfono</div>
                <div class="contact-value"><a href="tel:${c.phone.replace(/\s/g, '')}">${c.phone}</a></div>
            </div>
            <div class="contact-info-item reveal reveal-delay-2">
                <div class="contact-label">Email</div>
                <div class="contact-value"><a href="mailto:${c.email}">${c.email}</a></div>
            </div>
            <div class="contact-info-item reveal reveal-delay-3">
                <div class="contact-label">Horario</div>
                <div class="contact-value">${c.hours}</div>
            </div>
            <div class="contact-info-item reveal reveal-delay-4">
                <div class="contact-label">Cita previa</div>
                <div class="contact-value">${c.appointment}</div>
            </div>
        `;
    }

    /* ============================================
       FLOATING BADGE — "Nueva entrada"
       ============================================ */
    function initBadge() {
        const badge = SITE_DATA.badge;
        if (!badge || !badge.enabled || !badge.entryId) return;

        const el = document.createElement('a');
        el.className = 'floating-badge';

        // Link
        if (badge.type === 'journal') {
            el.href = `journal.html#${badge.entryId}`;
            const post = (SITE_DATA.posts || []).find(p => p.id === badge.entryId);
            el.innerHTML = `<span class="badge-label">${badge.text || 'Nueva entrada'}</span>
                            <span class="badge-title">${post ? post.title : badge.entryId}</span>`;
        } else {
            el.href = `boutique.html#${badge.entryId}`;
            const prod = (SITE_DATA.products || []).find(p => p.id === badge.entryId);
            el.innerHTML = `<span class="badge-label">${badge.text || 'Nuevo equipo'}</span>
                            <span class="badge-title">${prod ? prod.name : badge.entryId}</span>`;
        }

        // Colors
        el.style.setProperty('--badge-bg', badge.color || '#CCFF00');
        el.style.setProperty('--badge-fg', badge.fontColor || '#000000');

        document.body.appendChild(el);
    }

    /* ============================================
       HERO DYNAMIC IMAGES
       Supports: single, random, slideshow
       ============================================ */
    function initHero() {
        const container = document.getElementById('heroBackground');
        if (!container) return;

        const hero = SITE_DATA.hero;
        if (!hero || !hero.images || hero.images.length === 0) return;

        const images = hero.images.map(img => `img/hero/${img}`);
        const mode = hero.mode || 'single';

        // Create image element
        function setImage(src) {
            container.innerHTML = '';
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'LiberonAudio';
            img.style.cssText = 'width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1s ease;';
            container.appendChild(img);
            // Fade in
            img.onload = () => { img.style.opacity = '1'; };
        }

        if (mode === 'single') {
            setImage(images[0]);
        } else if (mode === 'random') {
            const randomIdx = Math.floor(Math.random() * images.length);
            setImage(images[randomIdx]);
        } else if (mode === 'slideshow') {
            let currentIdx = 0;
            setImage(images[0]);
            const interval = (hero.interval || 5) * 1000;
            setInterval(() => {
                currentIdx = (currentIdx + 1) % images.length;
                setImage(images[currentIdx]);
            }, interval);
        }
    }

    /* ============================================
       VIDEO EMBED HELPER (YouTube, TikTok, Instagram)
       Used by Journal to embed videos from any platform.
       ============================================ */
    window.LiberonUtils = {
        createVideoEmbed: function(url, type) {
            if (!url) return '';

            type = (type || 'youtube').toLowerCase();

            // YouTube
            if (type === 'youtube' || url.includes('youtube.com') || url.includes('youtu.be')) {
                const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                if (match) {
                    return `<div class="post-detail-video">
                        <iframe src="https://www.youtube.com/embed/${match[1]}"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>`;
                }
            }

            // TikTok
            if (type === 'tiktok' || url.includes('tiktok.com')) {
                const match = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/);
                if (match) {
                    return `<div class="post-detail-video">
                        <iframe src="https://www.tiktok.com/embed/v2/${match[1]}"
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope"
                                allowfullscreen></iframe>
                    </div>`;
                }
                // Fallback: link with preview
                return `<div class="post-video-link">
                    <a href="${url}" target="_blank" rel="noopener">
                        <span class="video-link-icon">▶</span>
                        Ver vídeo en TikTok
                    </a>
                </div>`;
            }

            // Instagram
            if (type === 'instagram' || url.includes('instagram.com')) {
                // Instagram embeds need their embed.js script
                const match = url.match(/instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/);
                if (match) {
                    return `<div class="post-detail-video post-detail-video--ig">
                        <iframe src="https://www.instagram.com/p/${match[1]}/embed"
                                frameborder="0" scrolling="no"
                                allowfullscreen></iframe>
                    </div>
                    <div class="post-video-link" style="margin-top:0.5rem;">
                        <a href="${url}" target="_blank" rel="noopener">
                            Abrir en Instagram ↗
                        </a>
                    </div>`;
                }
                return `<div class="post-video-link">
                    <a href="${url}" target="_blank" rel="noopener">
                        <span class="video-link-icon">▶</span>
                        Ver en Instagram
                    </a>
                </div>`;
            }

            // Fallback: just link
            return `<div class="post-video-link">
                <a href="${url}" target="_blank" rel="noopener">
                    <span class="video-link-icon">▶</span>
                    Ver vídeo
                </a>
            </div>`;
        }
    };

    /* ============================================
       INIT
       ============================================ */
    initLoader();
    initNav();
    initHero();
    initBadge();
    renderBrands();
    renderServices();
    renderContact();

    // Reveal & parallax after DOM content loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initReveal();
            initParallax();
        });
    } else {
        initReveal();
        initParallax();
    }

})();
