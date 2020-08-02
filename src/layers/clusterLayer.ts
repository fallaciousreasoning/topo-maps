import type Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";
import { Cluster } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import { Style, Circle, Text, Stroke, Fill } from "ol/style";
import type Map from 'ol/Map';
import { zoomToFeature } from "../utils/zoomToFeature";

export const makeClusterLayer = async (map: Map, from: { getFeatures: () => Promise<Feature[]>, clusterDistance: number, name: string }) => {
    const features  = await from.getFeatures();
    const source = new VectorSource({
        features: features
    });

    const clusterSource = new Cluster({
        distance: from.clusterDistance,
        source: source
    });

    const styleCache = {};
    const clusters = new VectorLayer({
        title: from.name,
        source: clusterSource,
        style: feature => {
            const size = feature.get('features').length;
            if (!styleCache[size]) {
                styleCache[size] = new Style({
                    image: new Circle({
                        radius: 20,
                        stroke: new Stroke({ color: 'white' }),
                        fill: new Fill({ color: '#73afa4' })
                    }),
                    text: new Text({
                        text: `${size} 🏠`,
                        fill: new Fill({ color: 'white' })
                    })
                })
            }
            return styleCache[size];
        }
    } as any);

    map.on('click', e => {
        const feature = map
            .forEachFeatureAtPixel(e.pixel, feature => {
                const subfeatures = feature.get('features');
                if (!subfeatures)
                    return;
                return feature;
            });

        zoomToFeature(map, feature);

    });

    return clusters;
}