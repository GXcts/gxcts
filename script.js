/**
 * GX_cts Official Script
 * Focus: Performance, Readability, Visual Impact
 */

/* ==========================================================================
   1. Configuration & Data
   ========================================================================== */

const CONFIG = {
    typingSpeed: 150,
    backspaceSpeed: 100,
    scrollThreshold: 50,
    backToTopThreshold: 300
};

const I18N_DATA = {
    'zh-TW': {
        'nav_about': '關於我們',
        'nav_expertise': '核心服務',
        'nav_work': '精選案例',
        'nav_start': '專案諮詢',
        'hero_title': '打破 <br><span class="gradient-text">數位疆界</span>',
        'hero_desc': '以美學為皮，邏輯為骨。我們專注打造不僅好看，更極具深度的客製化系統，為您的品牌注入數位靈魂。',
        'btn_consult': '開始合作',
        'btn_view': '探索作品',
        'about_title': '創意技術工作室',
        'about_p1': 'GX – Creative Technology Studio (GX_cts) 一個在藝術與工程之間探索可能性的數位實驗室。',
        'about_p2': '我們不只是寫程式碼，我們編織數位維度。從極簡的互動網頁到高負載的運算系統，我們以「精準」與「速度」，將抽象概念轉化為品牌的數位資產。',
        'services_title': '技術與美學',
        'service_design_title': '沉浸式體驗設計',
        'service_design_desc': '拒絕平庸的模板。我們引入次世代視覺標準，為使用者創造過目難忘的「神級」互動體驗。',
        'service_uiux': 'UI/UX 使用者體驗策略',
        'service_identity': 'CIS 企業識別系統',
        'service_proto': '高保真互動原型',
        'service_dev_title': '高複雜度系統開發',
        'service_dev_desc': '從物理模擬引擎到高邏輯運算核心。我們擅長建構穩健、可擴展且效能極致的後端與前端架構。',
        'service_arch': '前端架構工程',
        'service_logic': '客製化商業邏輯',
        'service_perf': '極限效能優化',
        'work_title': '成果部署',
        'cat_commerce': '電子商務',
        'proj_ec_title': 'EC_T1 旗艦重構',
        'proj_ec_desc': '突破傳統購物車限制，導入全域狀態持久化技術與流暢的轉場動畫，重新定義線上購物流程。',
        'cat_sys': '邏輯演算',
        'proj_sys_title': '數獨 / 矩陣運算',
        'proj_sys_desc': '純粹的邏輯展示。不依賴肥大的外部框架，直接運用 Web 技術底層力量，展現高效能運算之美。',
        'contact_title': '開啟新專案',
        'contact_desc': '告訴我們您的構想。GX_cts 團隊將在 24 小時內與您聯繫，進行初步需求評估。',
        'contact_addr': 'GX_cts 數位研發中心',
        'label_name': '聯絡人姓名',
        'label_email': '企業信箱 / Email',
        'label_type': '諮詢項目',
        'opt_design': '網頁視覺與體驗設計',
        'opt_dev': '網頁系統開發與架構',
        'opt_other': '其他合作洽談',
        'label_msg': '專案需求描述',
        'btn_send': '送出諮詢',
        'msg_success': '<p style="color: #00ff88; margin-top: 10px;">感謝您的諮詢，{name}。我們已收到您的 {type} 需求，將會有專人與您聯繫。</p>'
    },
    'en': {
        'nav_about': 'About GX',
        'nav_expertise': 'Expertise',
        'nav_work': 'Selected Work',
        'nav_start': 'Start Project',
        'hero_title': 'Breaking <br><span class="gradient-text">Digital Boundaries</span>',
        'hero_desc': 'Aesthetics as skin, Logic as bone. We build bespoke systems that are not just visually stunning but deeply engineered, injecting a digital soul into your brand.',
        'btn_consult': 'Consult With Us',
        'btn_view': 'View Portfolio',
        'about_title': 'Creative Technology Studio',
        'about_p1': 'GX – Creative Technology Studio (GX_cts) is a digital lab exploring the possibilities between Art and Engineering.',
        'about_p2': 'We don’t just write code; we weave digital dimensions. From minimalist interactive sites to high-load computational systems, we translate abstract concepts into reliable digital assets with precision and speed.',
        'services_title': 'Tech & Aesthetics',
        'service_design_title': 'Immersive Experience Design',
        'service_design_desc': 'Reject mediocre templates. We introduce next-gen visual standards to create unforgettable "God-Tier" interactive experiences for users.',
        'service_uiux': 'UI/UX Strategy',
        'service_identity': 'CIS Brand Identity',
        'service_proto': 'Hi-Fi Interactive Prototypes',
        'service_dev_title': 'High-Complexity System Dev',
        'service_dev_desc': 'From physics simulation engines to core logic algorithms. We specialize in building robust, scalable, and ultra-performant backend and frontend architectures.',
        'service_arch': 'Frontend Architecture',
        'service_logic': 'Custom Business Logic',
        'service_perf': 'Extreme Performance Opt',
        'work_title': 'Deployment Results',
        'cat_commerce': 'Commerce',
        'proj_ec_title': 'EC_T1 Evolution',
        'proj_ec_desc': 'Breaking traditional cart limits. Introducing global state persistence and fluid transitions to redefine the online shopping flow.',
        'cat_sys': 'Logic & Calcs',
        'proj_sys_title': 'Sudoku / Matrix Ops',
        'proj_sys_desc': 'Pure logic demonstration. Relying on no bloated external frameworks, utilizing the raw power of underlying Web tech to showcase high-performance computing beauty.',
        'contact_title': 'Initiate Project',
        'contact_desc': 'Tell us your vision. The GX_cts team will contact you within 24 hours for a preliminary requirement assessment.',
        'contact_addr': 'GX_cts R&D Center',
        'label_name': 'Identity / Name',
        'label_email': 'Corporate Email',
        'label_type': 'Inquiry Item',
        'opt_design': 'Visual & Experience Design',
        'opt_dev': 'System Dev & Architecture',
        'opt_other': 'Other Collaboration',
        'label_msg': 'Project Requirements',
        'btn_send': 'Send Inquiry',
        'msg_success': '<p style="color: #00ff88; margin-top: 10px;">Thank you for your inquiry, {name}. We have received your {type} request and a specialist will contact you shortly.</p>'
    }
};

/* ==========================================================================
   2. Core Application Logic
   ========================================================================== */

const App = {
    state: {
        currentLang: 'zh-TW',
        isTicking: false
    },

    elements: {
        navbar: null,
        cursorDot: null,
        cursorOutline: null,
        serviceCards: null,
        backToTopBtn: null,
        langBtn: null,
        form: null,
        customSelect: null
    },

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.initIntroAnimation();
        this.initVisualEffects();
    },

    cacheDOM() {
        this.elements.navbar = document.querySelector('.navbar');
        this.elements.cursorDot = document.getElementById('cursor-dot');
        this.elements.cursorOutline = document.getElementById('cursor-outline');
        this.elements.serviceCards = document.querySelectorAll('.service-card');
        this.elements.backToTopBtn = document.getElementById('btn-back-to-top');
        this.elements.langBtn = document.getElementById('langToggle');
        this.elements.form = document.getElementById('inquiryForm');
        this.elements.customSelect = document.querySelector('.custom-select-container');
    },

    bindEvents() {
        // Optimized Scroll Handler
        window.addEventListener('scroll', () => {
            // Basic throttle via simple checking, or use requestAnimationFrame if highly complex
            this.handleScroll();
        }, { passive: true });

        // Optimized Mouse Handler
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e), { passive: true });

        // Feature Handlers
        if (this.elements.langBtn) this.elements.langBtn.addEventListener('click', () => this.toggleLanguage());
        if (this.elements.backToTopBtn) this.elements.backToTopBtn.addEventListener('click', () => this.scrollToTop());
        if (this.elements.form) this.initFormHandler();
        if (this.elements.customSelect) this.initCustomSelect();
    },

    /* --- 3. Animation & Visual Effects --- */

    handleScroll() {
        const scrollY = window.scrollY;

        // Navbar Effect
        if (scrollY > CONFIG.scrollThreshold) {
            this.elements.navbar.classList.add('scrolled');
        } else {
            this.elements.navbar.classList.remove('scrolled');
        }

        // Back to Top Button
        if (this.elements.backToTopBtn) {
            if (scrollY > CONFIG.backToTopThreshold) {
                this.elements.backToTopBtn.classList.add('visible');
            } else {
                this.elements.backToTopBtn.classList.remove('visible');
            }
        }
    },

    handleMouseMove(e) {
        if (!this.state.isTicking) {
            window.requestAnimationFrame(() => {
                const { clientX: x, clientY: y } = e;

                // 1. Custom Cursor
                if (this.elements.cursorDot) {
                    this.elements.cursorDot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
                    // Note: Outline uses CSS transition/animation for lag, so we just set position? 
                    // Actually, previously it used .animate() which is expensive if called every frame.
                    // Better to use direct style update with CSS transition on the element itself.
                    // For now, retaining original logic but ensuring efficiency.
                    if (this.elements.cursorOutline) {
                        this.elements.cursorOutline.animate({
                            left: `${x}px`,
                            top: `${y}px`
                        }, { duration: 500, fill: "forwards" });
                    }
                }

                // 2. Service Cards Tilt/Glow
                if (this.elements.serviceCards) {
                    this.elements.serviceCards.forEach(card => {
                        const rect = card.getBoundingClientRect();
                        // Optimization: Only update if close to viewport or mouse is over?
                        // For simplicity, lightweight calc is fine.
                        const mouseX = x - rect.left;
                        const mouseY = y - rect.top;
                        card.style.setProperty('--mouse-x', `${mouseX}px`);
                        card.style.setProperty('--mouse-y', `${mouseY}px`);
                    });
                }

                this.state.isTicking = false;
            });
            this.state.isTicking = true;
        }
    },

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    /* --- 4. Intro Sequence --- */

    async initIntroAnimation() {
        // Pre-check
        const techGate = document.getElementById('techGate');
        const preloader = document.getElementById('preloader');
        const preloaderLogo = document.querySelector('.preloader-logo');
        const navbarLogo = document.querySelector('.navbar .logo');

        if (document.readyState !== 'complete') {
            await new Promise(r => window.addEventListener('load', r));
        }

        // 0. Setup
        if (preloaderLogo) preloaderLogo.innerHTML = '<span id="logo-text"></span><span class="typing-cursor">_</span>';
        const logoTextSpan = document.getElementById('logo-text');

        await this.delay(500);

        // 1. Open Gate
        if (techGate) {
            techGate.classList.add('open');
            techGate.classList.remove('locked');
        }
        await this.delay(800);

        // 2. Typing
        await this.typeText(logoTextSpan, "GXcts", 150);
        await this.delay(400);
        await this.backspaceText(logoTextSpan, 3, 100);
        await this.delay(200);
        await this.typeText(logoTextSpan, "_cts", 150);
        await this.delay(600);

        // 3. FLIP Transistion
        preloaderLogo.innerHTML = 'GX<span class="blink-cursor">_</span><span class="highlight">cts</span>';
        // Force layout
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

        if (!preloaderLogo || !navbarLogo) return;

        const startRect = preloaderLogo.getBoundingClientRect();
        const endRect = navbarLogo.getBoundingClientRect();
        const dx = endRect.left - startRect.left;
        const dy = endRect.top - startRect.top;
        const scale = endRect.height / startRect.height;

        const anim = preloaderLogo.animate([
            { transform: 'none', fontSize: '5rem' },
            { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, fontSize: '5rem', transformOrigin: 'top left' }
        ], {
            duration: 1200,
            easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
            fill: 'forwards'
        });

        anim.onfinish = () => {
            navbarLogo.classList.add('visible');
            preloader.classList.add('fade-out');
            setTimeout(() => {
                if (preloader) preloader.remove();
                if (techGate) techGate.remove();
            }, 500);
        };
    },

    initVisualEffects() {
        // Any other static inits
    },

    /* --- 5. Features & Interactions --- */

    toggleLanguage() {
        this.state.currentLang = this.state.currentLang === 'zh-TW' ? 'en' : 'zh-TW';
        this.elements.langBtn.innerText = this.state.currentLang === 'zh-TW' ? 'EN' : '繁中';
        this.updateLanguageDOM();
    },

    updateLanguageDOM() {
        document.documentElement.lang = this.state.currentLang;
        const data = I18N_DATA[this.state.currentLang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) el.innerHTML = data[key];
        });

        // Update Placeholders
        const msgInput = document.getElementById('message');
        if (msgInput) {
            msgInput.placeholder = this.state.currentLang === 'zh-TW'
                ? "請簡述您的專案需求與預算範圍..."
                : "Briefly describe your project requirements and budget...";
        }
    },

    initCustomSelect() {
        const container = this.elements.customSelect;
        const trigger = container.querySelector('.select-trigger');
        const options = container.querySelectorAll('.option');
        const display = container.querySelector('.selected-text');
        const nativeSelect = document.getElementById('type');

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            container.classList.toggle('open');
        });

        options.forEach(opt => {
            opt.addEventListener('click', () => {
                const { value } = opt.dataset;
                const text = opt.innerText;

                // Update UI
                display.innerText = text;
                display.dataset.value = value;
                if (opt.hasAttribute('data-i18n')) {
                    display.setAttribute('data-i18n', opt.getAttribute('data-i18n'));
                }

                // Update Active Class
                options.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');

                // Update Native Select
                if (nativeSelect) nativeSelect.value = value;

                container.classList.remove('open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) container.classList.remove('open');
        });
    },

    initFormHandler() {
        const form = this.elements.form;
        const submitBtn = form.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('span');
        const loader = submitBtn.querySelector('.btn-loader');
        const messageDiv = document.getElementById('formMessage');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // UI Loading State
            btnText.style.display = 'none';
            loader.style.display = 'block';
            submitBtn.disabled = true;

            const name = document.getElementById('name').value;
            const type = document.getElementById('type').value;

            // Anti-Spam: Rate Limiting (10 Minutes)
            const COOLDOWN_TIME = 1 * 60 * 1000; // 1 minutes in ms
            const lastSubmit = localStorage.getItem('gx_last_submit');

            if (lastSubmit && (Date.now() - parseInt(lastSubmit)) < COOLDOWN_TIME) {
                // Determine remaining time
                const remaining = Math.ceil((COOLDOWN_TIME - (Date.now() - parseInt(lastSubmit))) / 60000);

                loader.style.display = 'none';
                btnText.style.display = 'block';
                submitBtn.disabled = false;

                const warningMsg = this.state.currentLang === 'zh-TW'
                    ? `<p style="color: #ffaa00;">發送過於頻繁，請於 ${remaining} 分鐘後再試。</p>`
                    : `<p style="color: #ffaa00;">Too many requests. Please try again in ${remaining} mins.</p>`;

                messageDiv.innerHTML = warningMsg;
                return; // Stop execution
            }

            // Real Netlify Form Submission
            const formData = new FormData(form);

            // Convert to URLSearchParams to ensure proper encoding
            const params = new URLSearchParams(formData);

            // Critical: Netlify needs to know WHICH form this is
            // Even though we have a hidden input, let's force it here to be safe
            if (!params.has('form-name')) {
                params.append('form-name', 'contact');
            }

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Server status: ${response.status}`);
                    }

                    // Set Cooldown Timestamp only on success
                    localStorage.setItem('gx_last_submit', Date.now().toString());

                    loader.style.display = 'none';
                    btnText.style.display = 'block';
                    btnText.innerText = this.state.currentLang === 'zh-TW' ? '傳輸已送出' : 'Transmission Sent';
                    submitBtn.style.backgroundColor = '#00ff88';

                    const rawMsg = I18N_DATA[this.state.currentLang]['msg_success'];
                    messageDiv.innerHTML = rawMsg.replace('{name}', name).replace('{type}', type);

                    form.reset();

                    // Reset Button State
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.style.backgroundColor = '';
                        btnText.innerText = I18N_DATA[this.state.currentLang]['btn_send'];
                        messageDiv.innerHTML = '';
                    }, 5000);
                })
                .catch((error) => {
                    console.error('Form submission error:', error);
                    loader.style.display = 'none';
                    btnText.style.display = 'block';
                    submitBtn.disabled = false;
                    messageDiv.innerHTML = `<p style="color: #ff4444;">Sending failed (${error.message}). Please try again.</p>`;
                });
        });
    },

    initMobileScrollHints() {
        const grid = document.querySelector('.services-grid');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');

        if (!grid || !leftArrow || !rightArrow) return;

        const checkScroll = () => {
            const tolerance = 5; // buffer

            // Show Left Arrow if scrolled right
            if (grid.scrollLeft > tolerance) {
                leftArrow.classList.add('visible');
            } else {
                leftArrow.classList.remove('visible');
            }

            // Show Right Arrow if there is scrollable content remaining
            if (grid.scrollLeft + grid.clientWidth < grid.scrollWidth - tolerance) {
                rightArrow.classList.add('visible');
            } else {
                rightArrow.classList.remove('visible');
            }
        };

        grid.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);

        // Check initially
        setTimeout(checkScroll, 100);
    },

    /* --- Utilities --- */
    delay(ms) { return new Promise(r => setTimeout(r, ms)); },

    async typeText(element, text, speed) {
        for (let char of text) {
            element.textContent += char;
            await this.delay(speed);
        }
    },

    async backspaceText(element, count, speed) {
        for (let i = 0; i < count; i++) {
            element.textContent = element.textContent.slice(0, -1);
            await this.delay(speed);
        }
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    App.init();
    App.initMobileScrollHints();
});
