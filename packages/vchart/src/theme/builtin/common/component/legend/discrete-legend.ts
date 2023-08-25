import type { IDiscreteLegendTheme } from '../../../../../component/legend';
import { THEME_CONSTANTS } from '../../constants';

export const discreteLegend: IDiscreteLegendTheme = {
  orient: 'bottom',
  position: 'middle',
  padding: [16, 24],
  title: {
    visible: false,
    padding: 0,
    textStyle: {
      fontSize: THEME_CONSTANTS.LABEL_FONT_SIZE,
      fill: { type: 'palette', key: ['titleFontColor', 'primaryFontColor'] },
      fontWeight: 'normal'
    },
    space: 12
  },
  item: {
    visible: true,
    spaceCol: 10,
    spaceRow: 10,
    padding: 2,
    background: {
      state: {
        selectedHover: {
          fill: 'gray',
          fillOpacity: 0.7
        },
        unSelectedHover: {
          fill: 'gray',
          fillOpacity: 0.2
        }
      }
    },
    shape: {
      space: 6,
      state: {
        unSelected: {
          fillOpacity: 0.5
        }
      }
    },
    label: {
      space: 6,
      style: {
        fill: { type: 'palette', key: 'labelFontColor' },
        fontSize: THEME_CONSTANTS.LABEL_FONT_SIZE
      },
      state: {
        unSelected: {
          fill: { type: 'palette', key: 'disableFontColor' }
        }
      }
    }
  },
  allowAllCanceled: false
};
