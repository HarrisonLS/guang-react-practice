import { MouseEventHandler, useEffect, useState } from "react";
import { Component, useComponentsStore } from "../stores/component";
import { useComponentConfigStore } from "../stores/component-config";
import React from "react";
import HoverMask from "./HoverMask";

export function EditArea() {

    const { components, addComponent } = useComponentsStore();
    const { componentConfig } = useComponentConfigStore()

    const [hoverComponentId, setHoverComponentId] = useState<number>()

    function renderComponents(components: Component[]): React.ReactNode {
        return components.map((component: Component) => {
            const config = componentConfig?.[component.name]

            if (!config?.component) {
                return null;
            }

            return React.createElement(
                config.component,
                {
                    key: component.id,
                    id: component.id,
                    name: component.name,
                    ...config.defaultProps,
                    ...component.props
                },
                renderComponents(component.children || [])
            )
        })
    }

    const handleMouseOver: MouseEventHandler = (e) => {
        // 返回当事件被触发时，从事件触发的最内层节点一直到事件捕获的最外层节点的完整事件处理路径
        const path = e.nativeEvent.composedPath()
        console.log('path: ', path);

        for (let i = 0; i < path.length; i += 1) {
            const ele = path[i] as HTMLElement

            // ele.dataset是一个 dom 的属性，包含所有 data-xx 的属性的值
            const componentId = ele.dataset?.componentId
            if (componentId) {
                setHoverComponentId(+componentId)
                return;
            }
        }
    }

    return <div className="h-[100%] edit-area" onMouseOver={handleMouseOver} onMouseLeave={() => {
        setHoverComponentId(undefined);
    }}
    >
        {/* <pre>
            {JSON.stringify(components, null, 2)}
        </pre> */}
        {renderComponents(components)}
        {hoverComponentId && (
            <HoverMask
                portalWrapperClassName='portal-wrapper'
                containerClassName='edit-area'
                componentId={hoverComponentId}
            />
        )}
        <div className="portal-wrapper"></div>
    </div>
}
