import { createStore, createHook, createSubscriber } from 'react-sweet-state';
import ThemeType from '../types/themeType';
import { app } from '../config/app';

const Store = createStore({
	initialState: {
		systemTheme: ThemeType.LIGHT,
		appName: app('APP_NAME'),
		screenType: null
	},
	actions: {
		setSystemTheme: (value) => ({ setState }) => {
			setState({ systemTheme: value });
		},
		setAppName: (value) => ({ setState }) => {
			setState({ appName: value});
			document.title = value;
		},
		setScreenType: (value) => ({ setState }) => {
			setState({ screenType: value});
		}
	}
});

const useUIStore = createHook(Store);

export const getUIStore = (state) => ({
	systemTheme: state.systemTheme
});


export const UIStore = createSubscriber(Store, {
	selector: getUIStore,
});



export default useUIStore;