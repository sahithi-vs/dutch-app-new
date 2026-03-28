export const triggerFlowerCelebration = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        // Flowers falling from top
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: 0 },
            colors: ['#FF6B9D', '#FFC0CB', '#FFD700', '#FF1493', '#FF69B4'], // Pink/flower colors
            shapes: ['circle'],
            scalar: 1.2,
            drift: randomInRange(-0.5, 0.5)
        });

        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: 0 },
            colors: ['#FF6B9D', '#FFC0CB', '#FFD700', '#FF1493', '#FF69B4'],
            shapes: ['circle'],
            scalar: 1.2,
            drift: randomInRange(-0.5, 0.5)
        });
    }, 250);
};