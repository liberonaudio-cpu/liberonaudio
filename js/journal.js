/* ============================================
   LIBERONAUDIO — JOURNAL JS
   ============================================
   Renders posts from SITE_DATA.posts
   Handles: tag filtering, pagination, detail view
   ============================================ */

(function() {
    'use strict';

    const POSTS_PER_PAGE = 6;
    let currentTag = 'all';
    let currentPage = 1;

    /* ============================================
       GET FILTERED POSTS
       ============================================ */
    function getPosts() {
        let posts = [...(SITE_DATA.posts || [])];

        // Filter by tag
        if (currentTag !== 'all') {
            posts = posts.filter(p =>
                p.tags && p.tags.some(t => t.toLowerCase() === currentTag.toLowerCase())
            );
        }

        // Sort newest first
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        return posts;
    }

    /* ============================================
       RENDER TAG FILTER BUTTONS
       ============================================ */
    function renderTagFilters() {
        const container = document.getElementById('tagFilters');
        if (!container || !SITE_DATA.posts) return;

        // Get all unique tags from all posts
        const tagsSet = new Set();
        SITE_DATA.posts.forEach(p => {
            if (p.tags) p.tags.forEach(t => tagsSet.add(t));
        });
        const tags = [...tagsSet].sort();

        tags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'filter-tag';
            btn.dataset.filter = tag.toLowerCase();
            btn.textContent = tag;
            btn.addEventListener('click', () => {
                currentTag = tag.toLowerCase();
                currentPage = 1;
                updateActiveTag(container);
                render();
            });
            container.appendChild(btn);
        });

        // "Todos" button
        container.querySelector('[data-filter="all"]').addEventListener('click', () => {
            currentTag = 'all';
            currentPage = 1;
            updateActiveTag(container);
            render();
        });
    }

    function updateActiveTag(container) {
        container.querySelectorAll('.filter-tag').forEach(btn => {
            btn.classList.toggle('active',
                btn.dataset.filter === currentTag ||
                (currentTag === 'all' && btn.dataset.filter === 'all')
            );
        });
    }

    /* ============================================
       RENDER POST CARDS (LIST VIEW)
       ============================================ */
    function renderPosts() {
        const grid = document.getElementById('postsGrid');
        const empty = document.getElementById('journalEmpty');
        const count = document.getElementById('filterCount');
        if (!grid) return;

        const posts = getPosts();
        const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

        // Count
        if (count) {
            count.textContent = `${posts.length} publicación${posts.length !== 1 ? 'es' : ''}`;
        }

        // Empty state
        if (posts.length === 0) {
            grid.style.display = 'none';
            if (empty) empty.style.display = 'block';
            renderPagination(0);
            return;
        }

        grid.style.display = '';
        if (empty) empty.style.display = 'none';

        // Clear and render
        grid.innerHTML = '';
        pagePosts.forEach((post, i) => {
            const card = document.createElement('article');
            card.className = 'post-card';
            card.style.animationDelay = `${i * 0.08}s`;

            const image = post.image ? `img/posts/${post.image}` : '';
            const dateFormatted = formatDate(post.date);
            const hasVideo = post.video && post.video.length > 0;

            card.innerHTML = `
                <div class="post-card-image">
                    ${image
                        ? `<img src="${image}" alt="${post.title}" loading="lazy">`
                        : `<div class="post-image-placeholder"></div>`
                    }
                    ${hasVideo ? '<div class="post-video-badge">Video</div>' : ''}
                </div>
                <div class="post-card-body">
                    <div class="post-card-meta">
                        <span class="post-date">${dateFormatted}</span>
                        ${post.tags ? `<span class="post-tag-inline">${post.tags[0]}</span>` : ''}
                    </div>
                    <h2 class="post-card-title">${post.title}</h2>
                    <p class="post-card-excerpt">${post.excerpt || ''}</p>
                    <span class="post-read-more">Leer más <span class="arrow-right-small"></span></span>
                </div>
            `;

            card.addEventListener('click', () => showPostDetail(post));
            grid.appendChild(card);
        });

        renderPagination(totalPages);

        // Re-trigger animation
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

        if (currentPage > 1) {
            const prev = document.createElement('button');
            prev.className = 'page-btn';
            prev.innerHTML = '&larr;';
            prev.addEventListener('click', () => { currentPage--; render(); scrollToTop(); });
            container.appendChild(prev);
        }

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentPage ? 'page-btn--active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => { currentPage = i; render(); scrollToTop(); });
            container.appendChild(btn);
        }

        if (currentPage < totalPages) {
            const next = document.createElement('button');
            next.className = 'page-btn';
            next.innerHTML = '&rarr;';
            next.addEventListener('click', () => { currentPage++; render(); scrollToTop(); });
            container.appendChild(next);
        }
    }

    function scrollToTop() {
        const el = document.getElementById('journalFilters');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ============================================
       POST DETAIL VIEW
       ============================================ */
    function showPostDetail(post) {
        const list = document.getElementById('journalList');
        const detail = document.getElementById('postDetail');
        const filters = document.getElementById('journalFilters');
        const header = document.getElementById('postDetailHeader');
        const body = document.getElementById('postDetailBody');
        const footer = document.getElementById('postDetailFooter');

        if (!detail || !list) return;

        // Hide list, show detail
        list.style.display = 'none';
        if (filters) filters.style.display = 'none';
        detail.style.display = 'block';

        const dateFormatted = formatDate(post.date);
        const image = post.image ? `img/posts/${post.image}` : '';

        // Header
        header.innerHTML = `
            <div class="post-detail-meta">
                <span class="post-date">${dateFormatted}</span>
                <span class="post-detail-author">${post.author || 'LiberonAudio'}</span>
            </div>
            <h1 class="post-detail-title">${post.title}</h1>
            ${post.tags ? `
                <div class="post-detail-tags">
                    ${post.tags.map(t => `<span class="filter-tag">${t}</span>`).join('')}
                </div>
            ` : ''}
        `;

        // Body
        let bodyHTML = '';

        if (image) {
            bodyHTML += `<div class="post-detail-hero-image"><img src="${image}" alt="${post.title}"></div>`;
        }

        // Embedded video
        if (post.video) {
            // Support YouTube URLs
            const videoId = extractYouTubeId(post.video);
            if (videoId) {
                bodyHTML += `
                    <div class="post-detail-video">
                        <iframe src="https://www.youtube.com/embed/${videoId}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                `;
            }
        }

        bodyHTML += `<div class="post-detail-content">${post.content || post.excerpt || ''}</div>`;
        body.innerHTML = bodyHTML;

        // Footer — next/prev navigation
        const allPosts = getPosts();
        const idx = allPosts.findIndex(p => p.id === post.id);
        let footerHTML = '<div class="post-nav">';

        if (idx < allPosts.length - 1) {
            const prev = allPosts[idx + 1];
            footerHTML += `<button class="post-nav-btn post-nav-prev" data-id="${prev.id}">
                <span class="post-nav-label">&larr; Anterior</span>
                <span class="post-nav-title">${prev.title}</span>
            </button>`;
        } else {
            footerHTML += '<div></div>';
        }

        if (idx > 0) {
            const next = allPosts[idx - 1];
            footerHTML += `<button class="post-nav-btn post-nav-next" data-id="${next.id}">
                <span class="post-nav-label">Siguiente &rarr;</span>
                <span class="post-nav-title">${next.title}</span>
            </button>`;
        }

        footerHTML += '</div>';
        footer.innerHTML = footerHTML;

        // Nav button handlers
        footer.querySelectorAll('.post-nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.dataset.id;
                const targetPost = SITE_DATA.posts.find(p => p.id === targetId);
                if (targetPost) {
                    showPostDetail(targetPost);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function hidePostDetail() {
        const list = document.getElementById('journalList');
        const detail = document.getElementById('postDetail');
        const filters = document.getElementById('journalFilters');

        if (list) list.style.display = '';
        if (detail) detail.style.display = 'none';
        if (filters) filters.style.display = '';

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ============================================
       HELPERS
       ============================================ */
    function formatDate(dateStr) {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }

    function extractYouTubeId(url) {
        if (!url) return null;
        const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
    }

    /* ============================================
       RENDER ALL
       ============================================ */
    function render() {
        renderPosts();
    }

    /* ============================================
       INIT
       ============================================ */
    function init() {
        renderTagFilters();
        render();

        // Back button
        document.getElementById('postBack')?.addEventListener('click', hidePostDetail);

        // Handle browser back from detail
        window.addEventListener('hashchange', () => {
            if (window.location.hash === '' || window.location.hash === '#') {
                hidePostDetail();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
