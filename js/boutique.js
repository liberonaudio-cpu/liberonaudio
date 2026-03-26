/* ============================================
   LIBERONAUDIO — BOUTIQUE JS
   ============================================
   Renders products from SITE_DATA.products
   Handles: filtering, sorting, pagination, modal
   ============================================ */

(function() {
    'use strict';

    const PRODUCTS_PER_PAGE = 9;
    let currentFilter = 'all';
    let currentSort = 'newest';
    let currentPage = 1;

    /* ============================================
       GET FILTERED & SORTED PRODUCTS
       ============================================ */
    function getProducts() {
        let products = [...(SITE_DATA.products || [])];

        // Filter
        if (currentFilter !== 'all') {
            products = products.filter(p =>
                p.brand.toLowerCase() === currentFilter.toLowerCase()
            );
        }

        // Sort
        switch (currentSort) {
            case 'newest':
                products.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'price-asc':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                products.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return products;
    }

    /* ============================================
       RENDER BRAND FILTER BUTTONS
       ============================================ */
    function renderFilters() {
        const container = document.getElementById('brandFilters');
        if (!container || !SITE_DATA.products) return;

        // Get unique brands from products
        const brands = [...new Set(SITE_DATA.products.map(p => p.brand))].sort();

        brands.forEach(brand => {
            const btn = document.createElement('button');
            btn.className = 'filter-tag';
            btn.dataset.filter = brand.toLowerCase();
            btn.textContent = brand;
            btn.addEventListener('click', () => {
                currentFilter = brand.toLowerCase();
                currentPage = 1;
                updateActiveFilter(container);
                render();
            });
            container.appendChild(btn);
        });

        // "Todos" button click handler
        container.querySelector('[data-filter="all"]').addEventListener('click', () => {
            currentFilter = 'all';
            currentPage = 1;
            updateActiveFilter(container);
            render();
        });
    }

    function updateActiveFilter(container) {
        container.querySelectorAll('.filter-tag').forEach(btn => {
            btn.classList.toggle('active',
                btn.dataset.filter === currentFilter ||
                (currentFilter === 'all' && btn.dataset.filter === 'all')
            );
        });
    }

    /* ============================================
       RENDER PRODUCT GRID
       ============================================ */
    function renderProducts() {
        const grid = document.getElementById('productGrid');
        const empty = document.getElementById('boutiqueEmpty');
        const count = document.getElementById('filterCount');
        if (!grid) return;

        const products = getProducts();
        const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
        const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
        const pageProducts = products.slice(start, start + PRODUCTS_PER_PAGE);

        // Count
        if (count) {
            count.textContent = `${products.length} equipo${products.length !== 1 ? 's' : ''}`;
        }

        // Empty state
        if (products.length === 0) {
            grid.style.display = 'none';
            if (empty) empty.style.display = 'block';
            renderPagination(0);
            return;
        }

        grid.style.display = '';
        if (empty) empty.style.display = 'none';

        // Clear and render
        grid.innerHTML = '';
        pageProducts.forEach((product, i) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animationDelay = `${i * 0.06}s`;

            const mainImage = product.images && product.images[0]
                ? `img/products/${product.images[0]}`
                : '';

            const statusClass = product.status === 'vendido' ? 'status--sold' : 'status--available';
            const statusText = product.status === 'vendido' ? 'Vendido' : 'Disponible';

            card.innerHTML = `
                <div class="product-image">
                    ${mainImage
                        ? `<img src="${mainImage}" alt="${product.name}" loading="lazy">`
                        : `<div class="product-image-placeholder"></div>`
                    }
                    <div class="product-status ${statusClass}">${statusText}</div>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-short">${product.shortDescription || ''}</p>
                    <div class="product-bottom">
                        <div class="product-price">${product.currency || '€'}${product.price.toLocaleString('es-ES')}</div>
                        <button class="product-view" data-id="${product.id}">Ver detalle</button>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openModal(product));
            grid.appendChild(card);
        });

        renderPagination(totalPages);

        // Re-trigger stagger animation
        grid.classList.remove('visible');
        requestAnimationFrame(() => grid.classList.add('visible'));
    }

    /* ============================================
       PAGINATION
       ============================================ */
    function renderPagination(totalPages) {
        const container = document.getElementById('pagination');
        if (!container) return;
        container.innerHTML = '';

        if (totalPages <= 1) return;

        // Prev
        if (currentPage > 1) {
            const prev = document.createElement('button');
            prev.className = 'page-btn';
            prev.innerHTML = '&larr;';
            prev.addEventListener('click', () => { currentPage--; render(); scrollToGrid(); });
            container.appendChild(prev);
        }

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentPage ? 'page-btn--active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => { currentPage = i; render(); scrollToGrid(); });
            container.appendChild(btn);
        }

        // Next
        if (currentPage < totalPages) {
            const next = document.createElement('button');
            next.className = 'page-btn';
            next.innerHTML = '&rarr;';
            next.addEventListener('click', () => { currentPage++; render(); scrollToGrid(); });
            container.appendChild(next);
        }
    }

    function scrollToGrid() {
        const el = document.getElementById('boutiqueFilters');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ============================================
       PRODUCT MODAL
       ============================================ */
    function openModal(product) {
        const modal = document.getElementById('productModal');
        const gallery = document.getElementById('modalGallery');
        const mainImg = document.getElementById('modalMainImage');
        const thumbs = document.getElementById('modalThumbs');
        const info = document.getElementById('modalInfo');
        if (!modal) return;

        // Main image
        const images = (product.images || []).map(img => `img/products/${img}`);
        if (images.length > 0) {
            mainImg.innerHTML = `<img src="${images[0]}" alt="${product.name}">`;
        } else {
            mainImg.innerHTML = `<div class="modal-image-placeholder"></div>`;
        }

        // Thumbnails
        thumbs.innerHTML = '';
        if (images.length > 1) {
            images.forEach((img, i) => {
                const thumb = document.createElement('div');
                thumb.className = `modal-thumb ${i === 0 ? 'modal-thumb--active' : ''}`;
                thumb.innerHTML = `<img src="${img}" alt="${product.name} ${i + 1}">`;
                thumb.addEventListener('click', () => {
                    mainImg.innerHTML = `<img src="${img}" alt="${product.name}">`;
                    thumbs.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('modal-thumb--active'));
                    thumb.classList.add('modal-thumb--active');
                });
                thumbs.appendChild(thumb);
            });
        }

        // Info
        const statusClass = product.status === 'vendido' ? 'status--sold' : 'status--available';
        const statusText = product.status === 'vendido' ? 'Vendido' : 'Disponible';

        info.innerHTML = `
            <div class="modal-brand">${product.brand}</div>
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-price">${product.currency || '€'}${product.price.toLocaleString('es-ES')}</div>
            <div class="product-status ${statusClass}" style="display:inline-block; margin-bottom:1.5rem;">${statusText}</div>
            <div class="modal-description">${product.longDescription || product.shortDescription || ''}</div>
            ${product.tags ? `
                <div class="modal-tags">
                    ${product.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
                </div>
            ` : ''}
            <a href="mailto:${SITE_DATA.contact.email}?subject=Consulta: ${encodeURIComponent(product.name)}" class="cta-button" style="margin-top:2rem;">
                Consultar disponibilidad
                <span class="arrow-right"></span>
            </a>
        `;

        modal.classList.add('modal--open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        const modal = document.getElementById('productModal');
        if (modal) {
            modal.classList.remove('modal--open');
            document.body.style.overflow = '';
        }
    }

    /* ============================================
       SORT HANDLER
       ============================================ */
    function initSort() {
        const select = document.getElementById('sortSelect');
        if (!select) return;
        select.addEventListener('change', () => {
            currentSort = select.value;
            currentPage = 1;
            render();
        });
    }

    /* ============================================
       RENDER ALL
       ============================================ */
    function render() {
        renderProducts();
    }

    /* ============================================
       INIT
       ============================================ */
    function init() {
        renderFilters();
        initSort();
        render();

        // Modal close handlers
        document.getElementById('modalClose')?.addEventListener('click', closeModal);
        document.getElementById('productModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'productModal') closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
