import { animationConfig } from './animations';
import { responsivePlugin } from './responsive';
import { themeConfig } from './theme';
import { utilitiesPlugin } from './utilities';

const mergeConfigs = () => {
  return {
    theme: {
      extend: {
        ...themeConfig.extend,
        ...animationConfig.extend
      }
    },
    plugins: [
      utilitiesPlugin,
      responsivePlugin
    ]
  };
};

export default mergeConfigs();
