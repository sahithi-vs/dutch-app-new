// Sound effects utility for the Dutch learning app
// Provides audio feedback for user interactions

class SoundManager {
    constructor() {
        this.sounds = {
            correct: null,
            wrong: null,
            achievement: null,
            levelUp: null,
            click: null,
            streak: null
        };

        this.enabled = true;
        this.volume = 0.5;

        // Load sound enabled preference from localStorage
        const savedPreference = localStorage.getItem('soundsEnabled');
        if (savedPreference !== null) {
            this.enabled = savedPreference === 'true';
        }

        const savedVolume = localStorage.getItem('soundVolume');
        if (savedVolume !== null) {
            this.volume = parseFloat(savedVolume);
        }
    }

    // Create sound using Web Audio API or simple Audio element
    createSound(frequency, duration, type = 'sine') {
        if (!this.enabled) return;

        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = type;

            gainNode.gain.setValueAtTime(this.volume, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
        } catch (error) {
            console.warn('Sound playback not supported:', error);
        }
    }

    // Play correct answer sound
    playCorrect() {
        if (!this.enabled) return;

        // Pleasant ascending chime
        this.createSound(523.25, 0.1); // C5
        setTimeout(() => this.createSound(659.25, 0.15), 50); // E5
        setTimeout(() => this.createSound(783.99, 0.2), 100); // G5
    }

    // Play wrong answer sound
    playWrong() {
        if (!this.enabled) return;

        // Descending tone
        this.createSound(392, 0.15, 'square'); // G4
        setTimeout(() => this.createSound(329.63, 0.2, 'square'), 80); // E4
    }

    // Play achievement unlocked sound
    playAchievement() {
        if (!this.enabled) return;

        // Triumphant fanfare
        this.createSound(523.25, 0.1); // C5
        setTimeout(() => this.createSound(659.25, 0.1), 100); // E5
        setTimeout(() => this.createSound(783.99, 0.1), 200); // G5
        setTimeout(() => this.createSound(1046.5, 0.3), 300); // C6
    }

    // Play level up sound
    playLevelUp() {
        if (!this.enabled) return;

        // Ascending scale
        const notes = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25];
        notes.forEach((freq, i) => {
            setTimeout(() => this.createSound(freq, 0.1), i * 50);
        });
    }

    // Play click sound
    playClick() {
        if (!this.enabled) return;
        this.createSound(800, 0.05, 'square');
    }

    // Play streak milestone sound
    playStreak() {
        if (!this.enabled) return;

        // Exciting burst
        this.createSound(659.25, 0.1); // E5
        setTimeout(() => this.createSound(783.99, 0.1), 50); // G5
        setTimeout(() => this.createSound(987.77, 0.1), 100); // B5
        setTimeout(() => this.createSound(1174.66, 0.2), 150); // D6
    }

    // Toggle sound on/off
    toggleSound() {
        this.enabled = !this.enabled;
        localStorage.setItem('soundsEnabled', this.enabled.toString());
        return this.enabled;
    }

    // Set volume (0.0 to 1.0)
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        localStorage.setItem('soundVolume', this.volume.toString());
    }

    // Check if sounds are enabled
    isEnabled() {
        return this.enabled;
    }

    // Get current volume
    getVolume() {
        return this.volume;
    }
}

// Create singleton instance
const soundManager = new SoundManager();

// Export convenience functions
export const playCorrectSound = () => soundManager.playCorrect();
export const playWrongSound = () => soundManager.playWrong();
export const playAchievementSound = () => soundManager.playAchievement();
export const playLevelUpSound = () => soundManager.playLevelUp();
export const playClickSound = () => soundManager.playClick();
export const playStreakSound = () => soundManager.playStreak();
export const toggleSounds = () => soundManager.toggleSound();
export const setSoundVolume = (volume) => soundManager.setVolume(volume);
export const areSoundsEnabled = () => soundManager.isEnabled();
export const getSoundVolume = () => soundManager.getVolume();

export default soundManager;
