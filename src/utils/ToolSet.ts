import { Color } from "../math/Color";

export type Constructor<T = {}> = new (...args: any[]) => T;

const s_color = new Color();

export function convertToHtmlColor(rgb: number): string {
    s_color.setRGB(rgb);
    return s_color.toStyleString();
}

export function clamp(value: number, min: number, max: number): number {
    if (value < min)
        value = min;
    else if (value > max)
        value = max;
    return value;
}

export function clamp01(value: number): number {
    if (isNaN(value))
        value = 0;
    else if (value > 1)
        value = 1;
    else if (value < 0)
        value = 0;
    return value;
}

export function lerp(start: number, end: number, percent: number): number {
    return (start + percent * (end - start));
}

export function repeat(t: number, length: number): number {
    return t - Math.floor(t / length) * length;
}

export function distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}