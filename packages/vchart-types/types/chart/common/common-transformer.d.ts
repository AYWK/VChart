import type { AdaptiveSpec } from '../../typings';
import { BaseChartSpecTransformer } from '../base';
import type { ICommonChartSpec } from './interface';
export declare class CommonChartSpecTransformer<T extends ICommonChartSpec = ICommonChartSpec> extends BaseChartSpecTransformer<AdaptiveSpec<T, 'series'>> {
    protected _getDefaultSeriesSpec(spec: AdaptiveSpec<T, 'series'>): any;
    transformSpec(spec: AdaptiveSpec<T, 'series'>): void;
}
