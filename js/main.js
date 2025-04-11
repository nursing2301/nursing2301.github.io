// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// 移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 页面切换
const navLinksAll = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinksAll.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有active类
        navLinksAll.forEach(l => l.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
        
        // 添加active类到当前点击的链接和对应的页面
        this.classList.add('active');
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
        
        // 如果是移动端，关闭菜单
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
        
        // 滚动到顶部
        window.scrollTo(0, 0);
    });
});

// 动画效果 - 当元素进入视口时触发
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 简单的图表模拟
document.addEventListener('DOMContentLoaded', function() {
    const charts = document.querySelectorAll('.chart');
    
    charts.forEach((chart, index) => {
        if (index === 0) {
            // 学习成绩分布图表
            chart.innerHTML = `
                <svg width="100%" height="100%" viewBox="0 0 400 300">
                    <rect x="50" y="50" width="300" height="200" fill="#f9f9f9" stroke="#ddd" stroke-width="1"/>
                    <text x="200" y="30" text-anchor="middle" font-family="Arial" font-size="16" fill="#666">学习成绩分布</text>
                    <line x1="50" y1="250" x2="350" y2="250" stroke="#999" stroke-width="1"/>
                    <line x1="50" y1="250" x2="50" y2="50" stroke="#999" stroke-width="1"/>
                    <text x="30" y="240" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">0</text>
                    <text x="30" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">20</text>
                    <text x="30" y="140" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">40</text>
                    <text x="30" y="90" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">60</text>
                    <text x="30" y="40" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">80</text>
                    <rect x="80" y="150" width="40" height="100" fill="#94070A"/>
                    <rect x="140" y="100" width="40" height="150" fill="#94070A"/>
                    <rect x="200" y="70" width="40" height="180" fill="#94070A"/>
                    <rect x="260" y="120" width="40" height="130" fill="#94070A"/>
                    <text x="100" y="270" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">80-89</text>
                    <text x="160" y="270" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">90-94</text>
                    <text x="220" y="270" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">95-99</text>
                    <text x="280" y="270" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">100</text>
                </svg>
            `;
        } else if (index === 1) {
            // 活动参与情况图表
            chart.innerHTML = `
<svg width="100%" height="100%" viewBox="0 0 400 300">
    <!-- 基础框架 -->
    <rect x="50" y="50" width="300" height="200" fill="#f9f9f9" stroke="#ddd" stroke-width="1"/>
    <text x="200" y="30" text-anchor="middle" font-family="Arial" font-size="16" fill="#666">活动参与情况</text>
    <line x1="50" y1="250" x2="350" y2="250" stroke="#999" stroke-width="1"/>
    <line x1="50" y1="250" x2="50" y2="50" stroke="#999" stroke-width="1"/>
    <text x="30" y="240" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">0%</text>
    <text x="30" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">25%</text>
    <text x="30" y="140" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">50%</text>
    <text x="30" y="90" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">75%</text>
    <text x="30" y="40" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">100%</text>

    <!-- 学术活动 (85%) -->
    <circle cx="100" cy="180" r="30" fill="none" stroke="#94070A" stroke-width="10" 
            stroke-dasharray="160.14, 28.26" transform="rotate(-90 100 180)"/>
    <text x="100" y="180" text-anchor="middle" font-family="Arial" font-size="14" fill="#94070A">85%</text>
    <text x="100" y="210" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">学术活动</text>

    <!-- 文体活动 (82%) -->
    <circle cx="200" cy="180" r="30" fill="none" stroke="#94070A" stroke-width="10" 
            stroke-dasharray="154.5, 33.9" transform="rotate(-90 200 180)"/>
    <text x="200" y="180" text-anchor="middle" font-family="Arial" font-size="14" fill="#94070A">82%</text>
    <text x="200" y="210" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">文体活动</text>

    <!-- 志愿服务 (90%) -->
    <circle cx="300" cy="180" r="30" fill="none" stroke="#94070A" stroke-width="10" 
            stroke-dasharray="169.56, 18.84" transform="rotate(-90 300 180)"/>
    <text x="300" y="180" text-anchor="middle" font-family="Arial" font-size="14" fill="#94070A">90%</text>
    <text x="300" y="210" text-anchor="middle" font-family="Arial" font-size="12" fill="#666">志愿服务</text>
</svg>
            `;
        }
    });
});

// 获取模态框元素
const modal = document.getElementById("qrModal");
const btn = document.getElementById("followBtn");
const btn1 = document.getElementById("followBtn1");
const btn2 = document.getElementById("followBtn2");
const span = document.getElementsByClassName("close")[0];

// 点击按钮打开模态框
btn.onclick = function() {
    modal.style.display = "block";
}

// 点击按钮打开模态框
btn1.onclick = function() {
    modal.style.display = "block";
}

// 点击按钮打开模态框
btn2.onclick = function() {
    modal.style.display = "block";
}

// 点击关闭按钮关闭模态框
span.onclick = function() {
    modal.style.display = "none";
}

// 点击模态框外部也关闭
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
