import React, {CSSProperties, FC, PropsWithChildren, useCallback, useRef} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

export interface WatermarkProps extends PropsWithChildren {
    style?: CSSProperties
    className?: string
    width?: number
    height?: number
    inherit?: boolean
    rotate?: number
    zIndex?: number
    image?: string
    content: string | string[]
    fontStyle?: {
        color?: string;
        fontFamily?: string;
        fontSize?: number | string;
        fontWeight?: number | string;
    };
    gap: [number, number]
    offset: [number, number]
    getContainer: () => HTMLElement
}

const Watermark: FC<WatermarkProps> = (props) => {
    const {
        className,
        style,
        zIndex,
        width,
        height,
        rotate,
        image,
        content,
        fontStyle,
        gap,
        offset
    } = props;

    const containerRef = useRef<HTMLDivElement>(null)

    const getContainer = useCallback(() => {
        return props.getContainer ? props.getContainer() : containerRef.current!;
    }, [containerRef.current, props.getContainer])



    return props.children ? (
        <div ref={containerRef}
             className={className}
             style={style}
        >
            {props.children}
        </div>
    ) : null;
}

export default Watermark
