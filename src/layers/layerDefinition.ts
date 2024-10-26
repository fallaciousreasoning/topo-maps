import React from "react";
import { MapStyle } from "react-map-gl/maplibre";
import linzVector from "./linzVector";
import topoRaster from "./topoRaster";
import linzAerial from "./linzAerial";
import hillshade from "./hillshade";
import contours from "./contours";
import openTopo from "./openTopo";
import osm from "./osm";
import huts from "./huts";
import mountains from "./mountains";
import ways from "./ways";
import tracks from "./tracks";

type LayerShared = {
    id: string,
    name: string,
    description: string,
    cacheable: boolean
}

export type BaseLayerDefinition = {
    version?: number,
    type: 'base',
} & Pick<MapStyle, 'layers' | 'sources'> & LayerShared

export interface OverlayDefinition extends LayerShared {
    type: 'overlay',
    source: React.ReactNode | (() => React.ReactNode)
}

export const extraData: Pick<MapStyle, 'glyphs' | 'sprite' | 'version'> = {
    version: 8,
    glyphs: "https://basemaps.linz.govt.nz/v1/fonts/{fontstack}/{range}.pbf",
    sprite: "https://basemaps.linz.govt.nz/v1/sprites/topographic"
}

export const baseLayers: BaseLayerDefinition[] = [
    linzVector,
    topoRaster,
    linzAerial,
    openTopo,
    osm
]

export const overlays: OverlayDefinition[] = [
    hillshade,
    contours,
    huts,
    mountains,
    tracks
]

export const getMapStyle = (definition: BaseLayerDefinition) => {
    const cachableSources = Object.entries(definition.sources)
        .reduce((prev, [source, value]) => {
            const cachableSource = 'tiles' in value ? {
                ...value,
                tiles: value.tiles!.map(t => t.replace('https://', 'maybe-cache://') + `#${definition.id}`)
            } : value
            return {
                ...prev,
                [source]: cachableSource
            }
        }, {})
    return {
        ...extraData,
        ...definition,
        sources: cachableSources
    } as MapStyle
}
