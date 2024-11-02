import { StyleSpecification, TerrainControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as React from 'react';
import { GeolocateControl, Map, MapRef, NavigationControl, ScaleControl } from 'react-map-gl/maplibre';
import './caches/cachingProtocol';
import MapLabel from './components/MapLabel';
import LayersControl from './controls/LayersControl';
import LongPressLookup from './controls/LongPressLookup';
import PositionSyncer from './controls/PositionSyncer';
import SearchControl from './controls/SearchControl';
import { baseLayers, getMapStyle, overlays } from './layers/layerDefinition';
import linzVector from './layers/linzVector';
import { useParams } from './routing/router';
import MountainSection from './sections/MountainSection';
import MountainsSection from './sections/MountainsSection';
import SearchSection from './sections/SearchSection';
import Terrain from './layers/terrain';
import SettingsSection from './sections/SettingsSection';
import MenuSection from './sections/MenuSection';
import MenuControl from './controls/MenuControl';
import JMap, { useMap } from './map/Map'
import Layer from './map/Layer';
import Source from './map/Source';

const sources = baseLayers.flatMap(b => Object.entries(b.sources).map(([key, spec]) => <Source key={key} id={key} spec={spec as any} />))
const terrain = {
    source: 'dem',
    exaggeration: 1
}
function Layers() {

    const routeParams = useParams();
    const { map } = useMap()
    const basemap = baseLayers.find(r => r.id === routeParams.basemap) ?? linzVector

    // Swap to/from 3d mode when the view changes
    React.useEffect(() => {
        const t = routeParams.pitch === 0 ? null : terrain;
        if (map?.getTerrain() !== t) {
            map.on('idle', () => {
                map?.setTerrain(t)
            })
        }
    }, [routeParams.pitch])

    return <>
        <Terrain />
        {basemap.layers.map(l => <Layer key={l.id} layer={l as any} />)}
        {overlays.filter(e => routeParams.overlays.includes(e.id)).map(o => typeof o.source === 'function' ? <o.source key={o.id} /> : o.source)}
    </>
}

export default function TopoMap() {

    return <JMap>
        {sources}

        <SearchSection />
        <MountainsSection />
        <MountainSection />
        <SettingsSection />

        <PositionSyncer />
        <MenuSection />
        <LayersControl />
        <MenuControl />
        <SearchControl />

        <Layers />
    </JMap>
    // return <Map
    //     ref={mapRef as any}
    // // scrollZoom
    // // boxZoom={false}
    // // doubleClickZoom
    // // pitchWithRotate={true}
    // // dragRotate
    // // touchPitch
    // // maxPitch={75}
    // // terrain={routeParams.pitch === 0 ? undefined : terrain}
    // // initialViewState={{
    // //     latitude: routeParams.lat,
    // //     longitude: routeParams.lon,
    // //     zoom: routeParams.zoom,
    // //     bearing: routeParams.rotation,
    // // }}
    // // mapStyle={mapStyle}
    // // style={style}
    // >
    //     <MapLabel />
    //     {/* <ScaleControl maxWidth={150} position='bottom-left' unit='metric' /> */}
    //     <LongPressLookup />

    //     <Terrain />
    //     {overlays.filter(e => routeParams.overlays.includes(e.id)).map(o => typeof o.source === 'function' ? <o.source key={o.id} /> : o.source)}
    // </Map>
}
