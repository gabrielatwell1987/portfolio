let preloaderDone = $state<boolean>(false);

export function getPreloaderState() {
    return {
        get done() {
            return preloaderDone;
        },
        set done(value: boolean) {
            preloaderDone = value;
        },
    };
}
