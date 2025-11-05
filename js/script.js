// Nick Koutroubinas - Personal Website JavaScript

/**
 * Navigation Functions
 */
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

/**
 * Fun Interactive Features
 */
const facts = [
    "I've been doing ML since Theano was the hot new framework! 🦕",
    "Completed 72 freelancing projects with 100% success rate - not a single unhappy client! 🎯",
    "Built a state-of-the-art Greek handwritten recognition model back in 2019! 🇬🇷",
    "Currently leading a team of 3 AI Engineers at Growth Shop! 👥",
    "Worked with major companies like Airbus during my freelancing days! ✈️",
    "I speak Greek, English, and a bit of German - plus Python fluently! 🗣️",
    "My ML journey spans from computer vision to LLMs and everything in between! 🔄",
    "I've seen ML evolve from 'Black Box Magic' to democratized AI tools! ✨",
    "Currently obsessed with MLOps and building scalable production pipelines! 🏗️",
    "Fun fact: I have a Developer Challenge Scholarship under my belt! 🏆"
];

const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
    "Why do machine learning engineers never get lost? They always find the global minimum! 🗺️",
    "What's a neural network's favorite type of music? Deep house! 🎵",
    "Why did the AI go to therapy? It had too many layers of issues! 🛋️",
    "How does a machine learning algorithm apologize? 'I'm sorry, I'll adjust my weights!' ⚖️"
];

function generateFact() {
    const factElement = document.getElementById('fact-text');
    const outputDiv = document.getElementById('random-output');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    factElement.textContent = randomFact;
    outputDiv.style.display = 'block';
    outputDiv.style.animation = 'none';
    setTimeout(() => {
        outputDiv.style.animation = 'bounceIn 0.8s ease-out';
    }, 10);
}

function showJoke() {
    const factElement = document.getElementById('fact-text');
    const outputDiv = document.getElementById('random-output');
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    
    factElement.textContent = randomJoke;
    outputDiv.style.display = 'block';
    outputDiv.style.animation = 'none';
    setTimeout(() => {
        outputDiv.style.animation = 'bounceIn 0.8s ease-out';
    }, 10);
}

function colorShift() {
    const colors = [
        'linear-gradient(-45deg, #2c3e50, #34495e, #4a6741, #5d4e75)',
        'linear-gradient(-45deg, #1e3c72, #2a5298, #34495e, #2c3e50)',
        'linear-gradient(-45deg, #0f3460, #0f4c75, #3282b8, #bbe1fa)',
        'linear-gradient(-45deg, #2c3e50, #4a6741, #7f8c8d, #34495e)',
        'linear-gradient(-45deg, #2c3e50, #34495e, #4a6741, #5d4e75)'
    ];
    
    const randomGradient = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomGradient;
    document.body.style.backgroundSize = '400% 400%';
}

/**
 * Form Handling
 */
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Website Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:nickos.mlmind@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show confirmation message
    alert('Opening your email client... If it doesn\'t open automatically, please email me directly at nickos.mlmind@gmail.com');
}

/**
 * Magic Wand Spark Animation
 */
function createSparks(event) {
    const sparkEmojis = ['✨', '⭐', '💫', '🌟', '✦', '★', '☆'];
    const numSparks = 12;
    
    // Get the click position
    const x = event.clientX;
    const y = event.clientY;
    
    // Create multiple sparks
    for (let i = 0; i < numSparks; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.textContent = sparkEmojis[Math.floor(Math.random() * sparkEmojis.length)];
        
        // Random direction
        const angle = (Math.PI * 2 * i) / numSparks;
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.setProperty('--tx', tx + 'px');
        spark.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(spark);
        
        // Remove spark after animation
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
    
    // Add a little shake to the wand
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
    const moneyEmojis = ['💵', '💸', '💰', '💲', '🤑'];
    const numSparks = 15;
    
    // Get the click position
    const x = event.clientX;
    const y = event.clientY;
    
    // Create multiple money sparks
    for (let i = 0; i < numSparks; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.textContent = moneyEmojis[Math.floor(Math.random() * moneyEmojis.length)];
        
        // Random direction with upward bias (money flies up!)
        const angle = (Math.PI * 2 * i) / numSparks - Math.PI / 2;
        const velocity = 60 + Math.random() * 120;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 30; // Upward bias
        
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.setProperty('--tx', tx + 'px');
        spark.style.setProperty('--ty', ty + 'px');
        spark.style.filter = 'hue-rotate(90deg) brightness(1.2)';
        
        document.body.appendChild(spark);
        
        // Remove spark after animation
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
    
    // Add bounce effect to money signs
    const money = event.target;
    money.style.animation = 'none';
    setTimeout(() => {
        money.style.animation = '';
    }, 10);
}

/**
 * Speaking Section Functions
 */
function handleImageUpload(event, index) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const placeholder = event.target.previousElementSibling;
            placeholder.innerHTML = `<img src="${e.target.result}" alt="Speaking engagement" class="speaking-image">`;
        };
        reader.readAsDataURL(file);
    }
}

function addSpeakingItem() {
    const gallery = document.querySelector('.speaking-gallery');
    const newIndex = gallery.children.length;
    
    const newItem = document.createElement('div');
    newItem.className = 'speaking-item';
    newItem.innerHTML = `
        <div class="speaking-image-container">
            <div class="speaking-image-placeholder">
                <span>📸</span>
                <p>Click to upload image</p>
            </div>
            <input type="file" class="speaking-image-upload" accept="image/*" onchange="handleImageUpload(event, ${newIndex})">
        </div>
        <div class="speaking-content">
            <div class="speaking-meta">
                <div class="speaking-badge">Conference</div>
            </div>
            <div class="speaking-title">
                <input type="text" class="speaking-title-input" placeholder="Conference/Event Name">
            </div>
            <div class="speaking-description">
                <textarea class="speaking-description-input" placeholder="Talk title and description..."></textarea>
            </div>
        </div>
    `;
    
    gallery.appendChild(newItem);
    
    // Add animation
    newItem.style.opacity = '0';
    newItem.style.transform = 'translateY(20px)';
    setTimeout(() => {
        newItem.style.transition = 'all 0.5s ease';
        newItem.style.opacity = '1';
        newItem.style.transform = 'translateY(0)';
    }, 10);
}

/**
 * Blog/Article Modal Functions
 */
async function openArticle(articleId) {
    const modal = document.getElementById('articleModal');
    const articleBody = modal.querySelector('.article-body');
    
    // Show loading state
    articleBody.innerHTML = '<p>Loading article...</p>';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade-in animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    try {
        // Load markdown file
        const response = await fetch(`blog_posts/${articleId}.md`);
        if (!response.ok) {
            throw new Error(`Failed to load article: ${response.status}`);
        }
        
        const markdownText = await response.text();
        
        // Configure marked options
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });
        
        // Parse markdown to HTML
        const htmlContent = marked.parse(markdownText);
        
        // Set the content
        articleBody.innerHTML = htmlContent;
        
        // Add a small delay to ensure DOM is updated
        setTimeout(() => {
            // Render LaTeX equations with more comprehensive delimiters
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
                console.log('KaTeX rendering completed');
            } else {
                console.error('renderMathInElement is not available');
            }
        }, 100);
        
    } catch (error) {
        console.error('Error loading article:', error);
        articleBody.innerHTML = `
            <p class="article-intro">
                <strong>Error loading article.</strong> The requested article could not be found or loaded.
            </p>
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
 * Event Listeners and Initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeArticle();
        }
    });

    // Add interactive hover effects to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
            setTimeout(() => {
                this.style.background = 'linear-gradient(45deg, #2c3e50, #34495e)';
            }, 1000);
        });
    });
});

// Make functions globally available for inline event handlers
window.showSection = showSection;
window.generateFact = generateFact;
window.showJoke = showJoke;
window.colorShift = colorShift;
window.handleSubmit = handleSubmit;
window.handleImageUpload = handleImageUpload;
window.addSpeakingItem = addSpeakingItem;
window.openArticle = openArticle;
window.closeArticle = closeArticle;
window.createSparks = createSparks;
window.createMoneySparks = createMoneySparks;