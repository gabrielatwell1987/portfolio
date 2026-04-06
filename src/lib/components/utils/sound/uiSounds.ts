export function useSound(soundPath: string) {
    let audio: HTMLAudioElement | null = null;
    let lastPlayTime = 0;
    const debounceTime = 100;

    function playSound() {
        try {
            const now = Date.now();
            if (now - lastPlayTime < debounceTime) return;
            lastPlayTime = now;

            if (!audio) {
                audio = new Audio(soundPath);
            }
            audio.currentTime = 0;
            audio
                .play()
                .catch((err) => console.warn('Sound play failed:', err));
        } catch (err) {
            console.warn('Error playing sound:', err);
        }
    }

    async function playSoundAsync() {
        return new Promise<void>((resolve) => {
            try {
                const now = Date.now();
                if (now - lastPlayTime < debounceTime) {
                    resolve();
                    return;
                }
                lastPlayTime = now;

                if (!audio) {
                    audio = new Audio(soundPath);
                }
                audio.currentTime = 0;
                audio.onended = () => resolve();
                audio.play().catch(() => resolve());
            } catch {
                resolve();
            }
        });
    }

    return { playSound, playSoundAsync };
}
