// Nick Koutroubinis - Personal Website JavaScript

/**
 * Scroll-based navigation visibility
 */
function initScrollNav() {
    const nav = document.getElementById('siteNav');
    const hero = document.querySelector('.hero-section');
    if (!nav || !hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nav.classList.remove('visible');
            } else {
                nav.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    observer.observe(hero);
}

/**
 * Active nav link tracking
 */
function initActiveNavTracking() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        rootMargin: '-40% 0px -60% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

/**
 * Scroll-triggered reveal animations
 */
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Magic Wand Spark Animation
 */
function createSparks(event) {
    const sparkEmojis = ['\u2728', '\u2B50', '\uD83D\uDCAB', '\uD83C\uDF1F', '\u2726', '\u2605', '\u2606'];
    const numSparks = 12;

    const x = event.clientX;
    const y = event.clientY;

    for (let i = 0; i < numSparks; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.textContent = sparkEmojis[Math.floor(Math.random() * sparkEmojis.length)];

        const angle = (Math.PI * 2 * i) / numSparks;
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.setProperty('--tx', tx + 'px');
        spark.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 1000);
    }

    const wand = event.target;
    wand.style.animation = 'none';
    setTimeout(() => {
        wand.style.animation = '';
    }, 10);
}

/**
 * Money Signs Green Spark Animation
 */
function createMoneySparks(event) {
    const moneyEmojis = ['\uD83D\uDCB5', '\uD83D\uDCB8', '\uD83D\uDCB0', '\uD83D\uDCB2', '\uD83E\uDD11'];
    const numSparks = 15;

    const x = event.clientX;
    const y = event.clientY;

    for (let i = 0; i < numSparks; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.textContent = moneyEmojis[Math.floor(Math.random() * moneyEmojis.length)];

        const angle = (Math.PI * 2 * i) / numSparks - Math.PI / 2;
        const velocity = 60 + Math.random() * 120;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 30;

        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.setProperty('--tx', tx + 'px');
        spark.style.setProperty('--ty', ty + 'px');
        spark.style.filter = 'hue-rotate(90deg) brightness(1.2)';

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 1000);
    }

    const money = event.target;
    money.style.animation = 'none';
    setTimeout(() => {
        money.style.animation = '';
    }, 10);
}

/**
 * Blog/Article Modal Functions
 */
async function openArticle(articleId) {
    const modal = document.getElementById('articleModal');
    const articleBody = modal.querySelector('.article-body');

    articleBody.innerHTML = '<p>Loading article...</p>';

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);

    try {
        const response = await fetch(`blog_posts/${articleId}.md`);
        if (!response.ok) {
            throw new Error(`Failed to load article: ${response.status}`);
        }

        const markdownText = await response.text();

        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });

        const htmlContent = marked.parse(markdownText);

        articleBody.innerHTML = htmlContent;

        setTimeout(() => {
            if (typeof renderMathInElement !== 'undefined') {
                renderMathInElement(articleBody, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\[', right: '\\]', display: true},
                        {left: '\\(', right: '\\)', display: false}
                    ],
                    throwOnError: false,
                    errorColor: '#cc0000',
                    macros: {
                        "\\text": "\\textrm"
                    },
                    strict: false
                });
            }
        }, 100);

    } catch (error) {
        console.error('Error loading article:', error);
        articleBody.innerHTML = `
            <p><strong>Error loading article.</strong> The requested article could not be found or loaded.</p>
            <p>Please try again later or contact me if this problem persists.</p>
            <p>Error details: ${error.message}</p>
        `;
    }
}

function closeArticle(event) {
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('close-button')) {
        return;
    }

    const modal = document.getElementById('articleModal');
    modal.style.opacity = '0';
    document.body.style.overflow = 'auto';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

/**
 * Initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    initScrollNav();
    initActiveNavTracking();
    initRevealAnimations();
    initSmoothScroll();

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeArticle();
        }
    });
});

// Make functions globally available for inline event handlers
window.openArticle = openArticle;
window.closeArticle = closeArticle;
window.createSparks = createSparks;
window.createMoneySparks = createMoneySparks;
