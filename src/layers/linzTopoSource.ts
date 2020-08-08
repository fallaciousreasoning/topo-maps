import { UrlFunction } from "ol/Tile";
import { pickRandom } from "../utils/random";

export const tileUrlFunction: UrlFunction = ([z, x, y]) => {
    const source = pickRandom('abc');
    const layer = z < 13 ? '50798' : '50767';
    return `http://tiles-${source}.data-cdn.linz.govt.nz/services;key=d0772bed2204423f87157f7fb1223389/tiles/v4/layer=${layer}/EPSG:3857/${z}/${x}/${y}.png`;
}