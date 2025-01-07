import { useEffect } from "react"
import { useMap } from "../map/Map"

export const useLayerHandler = (event: string, layer: string, handler: (e: mapboxgl.EventData) => void) => {
    const { map } = useMap()

    useEffect(() => {
        map.on(event as any, layer, handler);
        return () => {
            map.off(event as any, layer, handler)
        }
    }, [event, layer, handler])
}