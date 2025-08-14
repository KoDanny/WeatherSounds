import sunIcon from '../public/assets/icons/sun.svg';
import rainIcon from '../public/assets/icons/rain.svg';
import snowIcon from '../public/assets/icons/snow.svg';
import sunBg from '../public/assets/summer-bg.jpg';
import rainBg from '../public/assets/rainy-bg.jpg';
import snowBg from '../public/assets/winter-bg.jpg';
import sunSound from '../public/assets/sounds/summer.mp3';
import rainSound from '../public/assets/sounds/rain.mp3';
import snowSound from '../public/assets/sounds/winter.mp3';
import { IWeatherData } from './models';

export const weatherItemsData: IWeatherData[] = [
	{
		id: 'sun',
		icon: sunIcon,
		background: sunBg,
		sound: sunSound,
	},
	{
		id: 'rain',
		icon: rainIcon,
		background: rainBg,
		sound: rainSound,
	},
	{
		id: 'snow',
		icon: snowIcon,
		background: snowBg,
		sound: snowSound,
	},
];
