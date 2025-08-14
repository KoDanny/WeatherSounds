import { IWeatherData } from '../models';
import { isInputRange } from './isInputRange';

export function getWeatherAudioPlayer({
	volumeController,
}: {
	volumeController: HTMLElement;
}) {
	let soundId: null | string = null;
	const audio = new Audio();
	audio.loop = true;

	volumeController.addEventListener('input', ({ target }) => {
		if (isInputRange(target)) {
			const { value: volume } = target;
			audio.volume = Number(volume) / 100;
		}
	});

	return (weather: IWeatherData) => {
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
