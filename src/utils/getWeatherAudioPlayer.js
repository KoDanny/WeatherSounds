export function getWeatherAudioPlayer({ volumeController }) {
	let soundId = null;
	const audio = new Audio();
	audio.loop = true;

	if (volumeController) {
		volumeController.addEventListener('input', (event) => {
			const { value: volume } = event.target;
			audio.volume = Number(volume) / 100;
		});
	}

	return (weather) => {
		if (soundId !== weather.id) {
			audio.pause();
			soundId = weather.id;
			audio.src = weather.sound;
			audio.play();
			return;
		}

		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	};
}
