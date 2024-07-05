import {WatermarkProps} from "../main.tsx";
import {useEffect, useState} from "react";
import {isNumber, merge} from 'lodash-es'

export type WatermarkOptions = Omit<WatermarkProps, 'className' | 'style' | 'children'>

const toNumber = (value?: string | number, defaultValue?: number) => {
    if (value === undefined) {
        return defaultValue;
    }
    if (isNumber(value)) {
        return value;
    }
    const numberVal = parseFloat(value);
    return isNumber(numberVal) ? numberVal : defaultValue;
};


const defaultOptions = {
    rotate: -20,
    zIndex: 1,
    width: 100,
    gap: [100, 100],
    fontStyle: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.15)',
        fontFamily: 'sans-serif',
        fontWeight: 'normal'
    },
    getContainer: () => document.body
}

const getMergedOptions = (o: Partial<WatermarkOptions>) => {
    const options = o || {};

    const mergeOptions = {
        ...options,
        rotate: options.rotate || defaultOptions.rotate,
        zIndex: options.zIndex || defaultOptions.zIndex,
        fontStyle: {...defaultOptions.fontStyle, ...options.fontStyle},
        width: toNumber(options.width, options.image ? defaultOptions.width : undefined),
        height: toNumber(options.height, undefined),
        getContainer: options.getContainer,
        gap: [
            toNumber(options.gap?.[0], defaultOptions.gap[0]),
            toNumber(options.gap?.[1] || options.gap?.[0], defaultOptions.gap[1]),
        ]
    }

    const mergedOffsetX = toNumber(mergeOptions.offset?.[0], 0)!;
    const mergedOffsetY = toNumber(mergeOptions.offset?.[1] || mergeOptions.offset?.[0], 0)!;
    mergeOptions.offset = [mergedOffsetX, mergedOffsetY]

    return mergeOptions
}

export default function useWatermark(params: WatermarkOptions) {
    const [options, setOptions] = useState(params || {});

    function drawWatermark() {

    }

    useEffect(() => {
        drawWatermark()
    }, [options])

    return {
        generateWatermark: (newOptions: Partial<WatermarkOptions>) => {
            setOptions(merge({}, options, newOptions));
        },
        destroy: () => {
        },
    };
}