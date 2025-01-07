import React from "react";
import { usePromise } from "../hooks/usePromise";
import { OverlayDefinition } from "./config";
import Layer from "../map/Layer";
import Source from "../map/Source";

const fetchData = async () => {
    const url = "https://pub-36de1a8a322545b9bd6ef274d5f46c7c.r2.dev/tracks.json"
    const response = await fetch(url, {
        cache: 'force-cache'
    });
    const data = await response.json()
    return data
}
let fetchPromise: Promise<GeoJSON.GeoJSON>

const trackShadowColor = 'rgba(231, 231, 231, 0.4)'
const trackColor = 'rgba(25, 25, 25, 0.8)'

export default {
    id: 'tracks',
    name: 'Tracks',
    description: 'NZ Tracks',
    type: 'overlay',
    cacheable: false,
    source: () => {
        const { result } = usePromise(() => fetchPromise || (fetchPromise = fetchData()), [])

        if (!result) return null;
        return <Source id="tracks" spec={{ type: "geojson", data: result }}>
            <Layer layer={{
                id: "foot-track-shadow", type: "line",
                source: 'tracks',
                filter: [
                    "all",
                    ["==", "track_use", "foot"]
                ],
                layout: {
                    "visibility": "visible",
                    "line-cap": "butt",
                    "line-join": "bevel"
                },
                paint: {
                    "line-width": {
                        "stops": [
                            [
                                10,
                                1.5
                            ],
                            [
                                13,
                                1.5
                            ],
                            [
                                15,
                                2.5
                            ],
                            [
                                19,
                                5
                            ]
                        ]
                    } as any,
                    "line-color": trackShadowColor
                }
            }} />
            <Layer layer={{
                id: 'foot-track', type: "line",
                source: 'tracks',
                minzoom: 8,
                filter: [
                    "all",
                    ["==", "track_use", "foot"]
                ],
                layout: {
                    "visibility": "visible",
                    "line-cap": "butt",
                    "line-join": "bevel"
                },
                paint: {
                    "line-width": {
                        "stops": [
                            [
                                10,
                                2
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                19,
                                5
                            ]
                        ]
                    },
                    "line-color": trackColor,
                    "line-dasharray": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                [
                                    2.5,
                                    4
                                ]
                            ],
                            [
                                15,
                                [
                                    2.5,
                                    3
                                ]
                            ],
                            [
                                16,
                                [
                                    2.5,
                                    3
                                ]
                            ]
                        ]
                    }
                } as any
            }} />
            <Layer layer={{
                id: "cycle-track-shadow", type: "line",
                source: 'tracks',
                minzoom: 8,
                filter: [
                    "all",
                    ["==", "track_use", "cycle_only"]
                ],
                layout: {
                    "visibility": "visible",
                    "line-cap": "butt",
                    "line-join": "bevel"
                },
                paint: {
                    "line-width": {
                        "stops": [
                            [
                                10,
                                2
                            ],
                            [
                                13,
                                1.5
                            ],
                            [
                                15,
                                2.5
                            ],
                            [
                                19,
                                5
                            ]
                        ]
                    } as any,
                    "line-color": trackShadowColor
                }
            }} />
            <Layer layer={{
                id: "cycle-track", type: "line",
                source: 'tracks',
                minzoom: 8,
                filter: [
                    "all",
                    ["==", "track_use", "cycle_only"]
                ],
                layout: {
                    "visibility": "visible",
                    "line-cap": "butt",
                    "line-join": "bevel"
                },
                paint: {
                    "line-width": {
                        "stops": [
                            [
                                10,
                                2
                            ],
                            [
                                13,
                                3
                            ],
                            [
                                19,
                                5
                            ]
                        ]
                    },
                    "line-color": trackColor,
                    "line-dasharray": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                [
                                    2.5,
                                    4
                                ]
                            ],
                            [
                                15,
                                [
                                    2.5,
                                    3
                                ]
                            ],
                            [
                                16,
                                [
                                    2.5,
                                    3
                                ]
                            ]
                        ]
                    }
                } as any
            }} />
            <Layer layer={{
                id: "vehicle-track-shadow", type: "line",
                source: 'tracks',
                minzoom: 13,
                filter: [
                    "all",
                    ["==", "track_use", "vehicle"]
                ],
                layout: {
                    "visibility": "visible",
                    "line-cap": "butt",
                    "line-join": "bevel"
                },
                paint: {
                    "line-blur": 0.75,
                    "line-width": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                2
                            ],
                            [
                                15,
                                3
                            ],
                            [
                                19,
                                5
                            ]
                        ]
                    },
                    "line-dasharray": [
                        8
                    ],
                    "line-color": trackShadowColor
                } as any
            }} />
            <Layer layer={{
                id: "vehicle-track", type: "line",
                source: 'tracks',
                minzoom: 13,
                filter: [
                    "all",
                    ["==", "track_use", "vehicle"]
                ],
                layout: {
                    "visibility": "visible",
                    "line-cap": "butt",
                    "line-join": "bevel"
                },
                paint: {
                    "line-width": {
                        "base": 1,
                        "stops": [
                            [
                                13,
                                1.25
                            ],
                            [
                                15,
                                2
                            ],
                            [
                                19,
                                4
                            ]
                        ]
                    },
                    "line-color": trackColor,
                    "line-dasharray": {
                        "base": 1,
                        "stops": [
                            [
                                14,
                                [
                                    5,
                                    3
                                ]
                            ],
                            [
                                15,
                                [
                                    5,
                                    4
                                ]
                            ],
                            [
                                16,
                                [
                                    6,
                                    6
                                ]
                            ],
                            [
                                17,
                                [
                                    8,
                                    8
                                ]
                            ]
                        ]
                    }
                } as any
            }} />
        </Source>
    }
} as OverlayDefinition