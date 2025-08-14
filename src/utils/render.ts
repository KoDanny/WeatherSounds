import { IWeatherData } from '../models';

export function render(root: HTMLElement, itemsData: IWeatherData[]) {
	const $buttonsContainer = document.createElement('div');
	$buttonsContainer.classList.add('buttons-container');

	const $volumeController = document.createElement('input');
	$volumeController.type = 'range';
	$volumeController.classList.add('volume-controller');

	itemsData.forEach(({ id, background, icon }) => {
		const $button = document.createElement('button');
		$button.classList.add('btn', 'weather-button');
		$button.id = id;
		$button.style.backgroundImage = `url(${background})`;

		const $icon = document.createElement('img');
		$icon.src = icon;
		$button.append($icon);

		$buttonsContainer.append($button);
	});

	root.append($buttonsContainer, $volumeController);
}
