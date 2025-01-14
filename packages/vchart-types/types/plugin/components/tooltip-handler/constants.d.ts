import type { ITooltipLineActual } from '../../../typings';
import { escapeHTML } from './utils/common';
export declare const TOOLTIP_CONTAINER_EL_CLASS_NAME = "vchart-tooltip-container";
export declare const TOOLTIP_MAX_LINE_COUNT = 20;
export declare const TOOLTIP_EMPTY_STRING = "";
export declare const TOOLTIP_OTHERS_LINE: ITooltipLineActual;
export declare const DEFAULT_OPTIONS: {
    offsetX: number;
    offsetY: number;
    sanitize: typeof escapeHTML;
};
export type Options = typeof DEFAULT_OPTIONS;
