import { useEffect } from "react"
import { useMap } from "./Map"
import { AddLayerObject } from "maplibre-gl"

export default function Layer({ layer, beforeId }: { layer: AddLayerObject, beforeId?: string }) {
    const { map } = useMap()
    useEffect(() => {
        let cancelled = false
        let added = false
        const addLayer = () => {
            if (cancelled) return
            added = true
            map.addLayer(layer, beforeId)
        }
        addLayer()

        return () => {
            cancelled = true
            if (!map.getLayer(layer.id)) return
            map.removeLayer(layer.id)
        }
    }, [])
    return null
}