import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Style, Circle, Stroke, Fill, Text } from 'ol/style';

import type Mountains from '../../public/data/mountains.json'
import fragment from '../stores/fragment';

const styleCache = {};
let mountains: typeof Mountains = {} as any;

export default {
    title: "Mountains",
    description: "A list of mountains with routes from Climb NZ",
    source: "https://github.com/fallaciousreasoning/nz-mountains",
    view: "cluster",
    clusterDistance: 50,
    visible: false,
    style: feature => {
        const size = feature.get('features').length;
        if (!styleCache[size]) {
            styleCache[size] = new Style({
                image: new Circle({
                    radius: 20,
                    stroke: new Stroke({ color: 'white' }),
                    fill: new Fill({ color: '#FFFFFFC0' })
                }),
                text: new Text({
                    scale: size == 1 ? 2.5 : 1.5,
                    textAlign: 'center',
                    text: size === 1 ? `⛰️` : `${size} ⛰️`,
                    fill: new Fill({ color: 'black' })
                })
            })
        }
        return styleCache[size];
    },
    getFeatures: async () => {
        const url = "/data/mountains.json"
        const response = await fetch(url);
        mountains = await response.json() as typeof Mountains;
        const points = Object.values(mountains).filter(a => a.latlng);
        return points.map(mountain => {
            const coords = fromLonLat([mountain.latlng[1], mountain.latlng[0]]);
            const feature = new Feature(new Point(coords));
            feature.setId(mountain.link)
            return feature;
        })
    },
    onFeatureClicked: (feature: Feature) => {
        const features = feature.get('features');
        if (features.length > 1) return;

        const originalFeature = features[0] as Feature
        const mountain = mountains[originalFeature.getId()] as typeof Mountains[keyof typeof Mountains];

        fragment.update(value => ({
            ...value,
            label: {
                lat: mountain.latlng[0],
                lng: mountain.latlng[1],
                text: `${mountain.name} (${mountain.altitude})
${mountain.routes.length} Routes:
${mountain.routes.map(r => `- ${r.name} (${r.grade})`).join('\n')}`
            }
        }))

    }
}
