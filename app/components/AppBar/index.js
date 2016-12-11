import { themr } from 'react-css-themr';
import { APP_BAR } from '../identifiers';
import { appBarFactory } from './AppBar';
import { IconButton } from '../Buttont';
import theme from './theme.scss';

const AppBar = appBarFactory(IconButton);
const ThemedAppBar = themr(APP_BAR, theme)(AppBar);

export default ThemedAppBar;
export { ThemedAppBar as AppBar };
