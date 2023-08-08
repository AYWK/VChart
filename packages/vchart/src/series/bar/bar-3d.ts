/* eslint-disable no-duplicate-imports */
import { MarkTypeEnum } from '../../mark/interface';
import { BaseSeries } from '../base/base-series';
import type { SeriesMarkMap } from '../interface';
import { SeriesTypeEnum, SeriesMarkNameEnum } from '../interface';
import { BarSeries } from './bar';
import { VChart } from '../../core/vchart';
import { Rect3dMark } from '../../mark/rect-3d';
import { TextMark } from '../../mark/text';
import type { IBar3dSeriesSpec } from './interface';
import type { AdaptiveSpec } from '../../typings';

VChart.useMark([Rect3dMark, TextMark]);

export class Bar3dSeries<T extends IBar3dSeriesSpec = IBar3dSeriesSpec> extends BarSeries<AdaptiveSpec<T, 'type'>> {
  static readonly type: string = SeriesTypeEnum.bar3d;
  type = SeriesTypeEnum.bar3d;

  static readonly mark: SeriesMarkMap = {
    ...BaseSeries.mark,
    [SeriesMarkNameEnum.bar3d]: { name: SeriesMarkNameEnum.bar3d, type: MarkTypeEnum.rect3d }
  };

  protected _barMarkName: SeriesMarkNameEnum = SeriesMarkNameEnum.bar3d;
  protected _barMarkType: MarkTypeEnum = MarkTypeEnum.rect3d;
}
