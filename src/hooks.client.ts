if (navigator.storage?.persist) {
    navigator.storage.persist().catch(() => {
        console.debug('Persistent storage request denied');
    });
}
