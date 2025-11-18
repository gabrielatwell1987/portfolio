export function playVid(video) {
	video?.play();
}

export function pauseVid(video) {
	video?.pause();
}

export function stopVid(video, currentTime) {
	if (!video) return currentTime;
	video.pause();
	video.currentTime = 0;
	return 0;
}

export function changeVol(event, video) {
	if (!video) return;
	video.volume = Number(event.target.value);
}

export function togglePlay(video) {
	if (!video) return;
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

export function handleKeydown(event, video) {
	if (event.code === 'Space' || event.key === ' ') {
		event.preventDefault();
		togglePlay(video);
	}
}

export function handleLoadedMetadata(video, duration) {
	if (!video) return duration;
	return video.duration || 0;
}

export function handleTimeUpdate(video, currentTime) {
	if (!video) return currentTime;
	return video.currentTime;
}

export function handleSeek(video, event, currentTime) {
	if (!video) return currentTime;
	const value = Number(event.target.value);
	video.currentTime = value;
	return value;
}
