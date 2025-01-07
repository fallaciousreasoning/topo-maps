import { useEffect } from "react"
import { useMap } from "../map/Map"

export const useClusterHandlers = (name: string) => {
    const {map} = useMap()

    // Zoom in to cluster handler
    useEffect(() => {
        const zoomClickHandler = async (e: mapboxgl.EventData) => {
            const feature = e.features?.[0] as GeoJSON.Feature<GeoJSON.Point>;
            const clusterId = feature?.properties?.cluster_id;
            const hutsSource = map.getSource(name)
            if (!hutsSource || !clusterId) return

            const zoom = await (hutsSource as any).getClusterExpansionZoom(clusterId)
            map.easeTo({
                center: feature.geometry.coordinates as [number, number],
                zoom,
                duration: 500
            });
        }

        map.on('click', `${name}-clusters`, zoomClickHandler)

        return () => {
            map.off('click', `${name}-clusters`, zoomClickHandler)
        }
    }, [name])
}