export function useSound(soundPath: string) {
    let audio: HTMLAudioElement | null = null;
    let isPlaying = false;

    async function playSoundAsync() {
        return new Promise<void>((resolve) => {
            try {
                if (isPlaying) {
                    resolve();
                    return;
                }

                isPlaying = true;

                if (!audio) {
                    audio = new Audio(soundPath);
                }
                audio.currentTime = 0;
                audio.onended = () => {
                    isPlaying = false;
                    resolve();
                };
                audio.play().catch(() => {
                    isPlaying = false;
                    resolve();
                });
            } catch {
                isPlaying = false;
                resolve();
            }
        });
    }

    function playSound() {
        playSoundAsync();
    }

    return { playSound, playSoundAsync };
}
