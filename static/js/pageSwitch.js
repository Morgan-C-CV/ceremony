function initPageSwitch(currentPage, totalPages) {
    let startY;
    let endY;
    const threshold = 50; // 滑动阈值
    let isAnimating = false;

    document.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', function(e) {
        if (isAnimating) return;
        endY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', function() {
        if (isAnimating || !startY || !endY) return;

        const diffY = startY - endY;

        if (Math.abs(diffY) > threshold) {
            let nextPage;
            if (diffY > 0 && currentPage < totalPages) {
                // 向上滑动，切换到下一页
                nextPage = currentPage + 1;
            } else if (diffY < 0 && currentPage > 1) {
                // 向下滑动，切换到上一页
                nextPage = currentPage - 1;
            }

            if (nextPage) {
                isAnimating = true;
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.5s';
                
                setTimeout(() => {
                    window.location.href = '/p' + nextPage;
                }, 500);
            }
        }

        startY = null;
        endY = null;
    });
}