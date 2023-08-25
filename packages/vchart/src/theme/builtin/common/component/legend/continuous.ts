import type { IContinuousLegendTheme } from '../../../../../component/legend';
import { THEME_CONSTANTS } from '../../constants';

export const DEFAULT_CONTINUOUS_LEGEND_THEME: IContinuousLegendTheme = {
  orient: 'right',
  position: 'middle',
  padding: 30,
  title: {
    visible: false,
    padding: 0,
    textStyle: {
      fontSize: THEME_CONSTANTS.LABEL_FONT_SIZE,
      fontWeight: 'normal',
      fill: { type: 'palette', key: ['titleFontColor', 'primaryFontColor'] }
    },
    space: 12
  },
  handler: {
    visible: true
  },
  startText: {
    style: {
      fontSize: THEME_CONSTANTS.LABEL_FONT_SIZE,
      fontWeight: 'normal',
      fill: { type: 'palette', key: 'labelFontColor' }
    }
  },
  endText: {
    style: {
      fontSize: THEME_CONSTANTS.LABEL_FONT_SIZE,
      fontWeight: 'normal',
      fill: { type: 'palette', key: 'labelFontColor' }
    }
  },
  handlerText: {
    style: {
      fontSize: THEME_CONSTANTS.LABEL_FONT_SIZE,
      fontWeight: 'normal',
      fill: { type: 'palette', key: 'labelFontColor' }
    }
  }
};
