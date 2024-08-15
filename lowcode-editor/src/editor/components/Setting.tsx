import { useComponentsStore } from "../stores/component";


export function Setting() {
    const { components } = useComponentsStore();

    return <div>
        <pre>
            {JSON.stringify(components, null, 2)}
        </pre>
    </div>
}
