function initPageSwitch(currentPage, totalPages) {
    let startY;
    let endY;
    const threshold = 50; // 滑动阈值
    let isAnimating = false;
    let lastWheelTime = 0;

    // 触摸事件处理
    document.addEventListener('touchstart', function(e) {
        if (isAnimating) return;
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', function(e) {
        if (isAnimating) return;
        endY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', function() {
        if (isAnimating || !startY || !endY) return;
        handlePageSwitch(startY - endY);
        startY = null;
        endY = null;
    });

    // 鼠标滚轮事件处理
    document.addEventListener('wheel', function(e) {
        if (isAnimating) return;
        
        const now = Date.now();
        if (now - lastWheelTime < 1000) return; // 防止连续滚动
        lastWheelTime = now;
        
        handlePageSwitch(e.deltaY);
    });

    // 页面切换处理函数
    function handlePageSwitch(delta) {
        if (Math.abs(delta) > threshold) {
            let nextPage;
            
            // 特殊处理p4页面
            const isPage4 = window.location.pathname.includes('/p4');
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            
            if (isPage4) {
                if (delta > 0 && !isAtBottom) {
                    return; // p4页面未滚动到底部时不允许向下切换
                }
                if (delta < 0 && window.scrollY > 0) {
                    return; // p4页面未滚动到顶部时不允许向上切换
                }
            }
            
            if (delta > 0 && currentPage < totalPages) {
                nextPage = currentPage + 1;
            } else if (delta < 0 && currentPage > 1) {
                nextPage = currentPage - 1;
            }

            if (nextPage) {
                isAnimating = true;
                const root = document.querySelector('.figma-root');
                if (root) {
                    root.style.transition = 'transform 0.5s, opacity 0.5s';
                    root.style.transform = `translateY(${delta > 0 ? '-' : ''}100%)`;
                    root.style.opacity = '0';
                }
                
                setTimeout(() => {
                    window.location.href = '/p' + nextPage;
                }, 500);
            }
        }
    }
}