import { weatherItemsData } from './weatherItemsData';
import { render, getWeatherAudioPlayer } from './utils';
import './styles/index.scss';

const root = document.querySelector('#app-container')! as HTMLElement;
render(root, weatherItemsData);

const volumeController = document.querySelector(
	'.volume-controller'
)! as HTMLElement;

const player = getWeatherAudioPlayer({ volumeController });

const buttonsContainer = document.querySelector(
	'.buttons-container'
) as HTMLElement;

buttonsContainer.addEventListener('click', ({ target }) => {
	if (target instanceof HTMLElement) {
		const closestElem = target.closest('.weather-button');
		const closestElemId = closestElem?.id;
		if (!closestElemId) return;

		const weatherItem = weatherItemsData.find(({ id }) => id === closestElemId);
		if (!weatherItem) return;

		player(weatherItem);
		root.style.backgroundImage = `url(${weatherItem.background})`;
	}
});
