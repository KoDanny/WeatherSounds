import { weatherItemsData } from './weatherItemsData';
import { render, getWeatherAudioPlayer } from './utils';
import './styles/index.scss';

const root = document.querySelector('#app-container');
render(root, weatherItemsData);

const volumeController = document.querySelector('.volume-controller');
const player = getWeatherAudioPlayer({ volumeController });

const buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.addEventListener('click', (event) => {
	const { target } = event;
	const closestElem = target.closest('.weather-button');
	const closestElemId = closestElem?.id;
	if (!closestElemId) return;

	const weatherItem = weatherItemsData.find(({ id }) => id === closestElemId);
	if (!weatherItem) return;

	player(weatherItem);
	root.style.backgroundImage = `url(${weatherItem.background})`;
});
