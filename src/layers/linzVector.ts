import { LINZ_BASEMAPS_KEY } from "./config";
import { BaseLayerDefinition } from "./layerDefinition";

export default {
    id: 'topoVector',
    name: 'Topographic Vector',
    sources: {
        "LINZ Basemaps": {
            "attribution": "© 2022 Toitū Te Whenua - CC BY 4.0",
            "type": "vector",
            "tiles": [
                `https://basemaps.linz.govt.nz/v1/tiles/topographic/WebMercatorQuad/{z}/{x}/{y}.pbf?api=${LINZ_BASEMAPS_KEY}`
            ],
            "minzoom": 0,
            "maxzoom": 15
        }
    },
    layers: [
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "dock"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": "rgba(184, 220, 242, 1)"
            },
            "id": "Background",
            "type": "background",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "sand"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(226, 226, 226, 0.75)"
            },
            "id": "Landcover-Sand",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rock"
                ],
                [
                    "!=",
                    "rock_feature",
                    "embankment"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-opacity": {
                    "stops": [
                        [
                            14,
                            0.01
                        ],
                        [
                            15,
                            0.75
                        ]
                    ]
                },
                "line-width": 30,
                "line-pattern": "rock_narrow_poly_thin",
                "line-color": "rgba(0, 0, 0, 1)"
            },
            "id": "Landcover-Rock-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 14
        },
        {
            "filter": [
                "all"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            1,
                            "rgba(228, 234, 228, 1)"
                        ],
                        [
                            10,
                            "rgba(232, 232, 232, 1)"
                        ],
                        [
                            20,
                            "rgba(232, 232, 232, 1)"
                        ]
                    ]
                },
                "fill-antialias": true
            },
            "id": "Coastline2",
            "source": "LINZ Basemaps",
            "source-layer": "coastline",
            "type": "fill",
            "minzoom": 0
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "mine"
                ],
                [
                    "==",
                    "class",
                    "quarry"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(205, 205, 205, 1)",
                "fill-opacity": 0.5
            },
            "id": "Poi-Mine-Quarry-Poly",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "grass"
                ],
                [
                    "==",
                    "natural",
                    "scrub"
                ],
                [
                    "==",
                    "distribution",
                    "scattered"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(204, 222, 195, 1)",
                "fill-antialias": false,
                "fill-outline-color": "rgba(210, 210, 210, 0.27)"
            },
            "id": "Vegetation-Scatteredscrub",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "grass"
                ],
                [
                    "==",
                    "natural",
                    "scrub"
                ],
                [
                    "!has",
                    "distribution"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(199, 228, 183, 1)",
                "fill-outline-color": {
                    "stops": [
                        [
                            6,
                            "rgba(255, 255, 255, 0.27)"
                        ],
                        [
                            10,
                            "rgba(255, 255, 255, 0.20)"
                        ],
                        [
                            19,
                            "rgba(255, 255, 255, 0.11)"
                        ]
                    ]
                }
            },
            "id": "Vegetation-Scrub",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "tree",
                    "exotic"
                ],
                [
                    "==",
                    "landuse",
                    "wood"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            6,
                            "rgba(157, 201, 139, 1)"
                        ],
                        [
                            11,
                            "rgba(194, 222, 171, 1)"
                        ]
                    ]
                },
                "fill-outline-color": "rgba(210, 210, 210, 0.27)"
            },
            "id": "Vegetation-Exotic",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "tree",
                    "exotic"
                ],
                [
                    "==",
                    "landuse",
                    "wood"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "fill-pattern": "exotic_con_poly_random_dense_quarter",
                "fill-opacity": {
                    "stops": [
                        [
                            1,
                            0.2
                        ],
                        [
                            6,
                            0.3
                        ],
                        [
                            15,
                            0.35
                        ],
                        [
                            19,
                            0.4
                        ]
                    ]
                },
                "fill-antialias": true,
                "fill-translate-anchor": "viewport"
            },
            "id": "Vegetation-Exotic-Random-Dense-Quarter",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "tree",
                    "exotic"
                ],
                [
                    "==",
                    "landuse",
                    "wood"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 16,
            "paint": {
                "fill-pattern": "exotic_con_poly_random_dense_half",
                "fill-opacity": {
                    "stops": [
                        [
                            1,
                            0.2
                        ],
                        [
                            6,
                            0.3
                        ],
                        [
                            15,
                            0.35
                        ],
                        [
                            19,
                            0.4
                        ]
                    ]
                },
                "fill-antialias": true,
                "fill-translate-anchor": "viewport"
            },
            "id": "Vegetation-Exotic-Random-Dense-Half",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "tree",
                    "exotic"
                ],
                [
                    "==",
                    "landuse",
                    "wood"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-pattern": "exotic_con_poly_random_dense",
                "fill-opacity": {
                    "stops": [
                        [
                            1,
                            0.1
                        ],
                        [
                            6,
                            0.15
                        ],
                        [
                            11,
                            0.25
                        ],
                        [
                            19,
                            0.4
                        ]
                    ]
                },
                "fill-antialias": true,
                "fill-translate-anchor": "viewport"
            },
            "id": "Vegetation-Exotic-Random-Dense",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 16
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "tree",
                    "native"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            6,
                            "rgba(153, 191, 140, 1)"
                        ],
                        [
                            9,
                            "rgba(150, 185, 136, 1)"
                        ],
                        [
                            11,
                            "rgba(144, 183, 125, 1)"
                        ],
                        [
                            14,
                            "rgba(154, 191, 133, 1)"
                        ]
                    ]
                },
                "fill-outline-color": "rgba(210, 210, 210, 0.27)"
            },
            "id": "Vegetation-Native",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "ice"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [

                        [
                            8,
                            "rgba(212, 232, 255, 0.8)"
                        ],
                        [
                            10,
                            "rgba(232, 252, 255, 0.8)"
                        ]
                    ]
                },
                "fill-outline-color": {
                    "stops": [
                        [
                            8,
                            "rgba(255, 255, 255, 0.5)"
                        ],
                        [
                            10,
                            "rgba(211, 249, 249, 0.5)"
                        ],
                        [
                            11,
                            "rgba(57, 158, 158, 0.5)"
                        ]
                    ]
                }
            },
            "id": "Landcover-Ice",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "landuse",
                    "orchard"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(27, 127, 36, 0.1)",
                "fill-translate-anchor": "viewport",
                "fill-outline-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Landcover-Orchard-Fill",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "landuse",
                    "vineyard"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(27, 127, 36, 0.2)",
                "fill-antialias": false,
                "fill-translate-anchor": "viewport",
                "fill-outline-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Landcover-Vineyard-Fill",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wetland"
                ],
                [
                    "==",
                    "wetland_type",
                    "swamp"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            6,
                            "rgba(205, 232, 230, 1)"
                        ],
                        [
                            14,
                            "rgba(224, 236, 238, 1)"
                        ]
                    ]
                }
            },
            "id": "Landcover-Swamp-Fill",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wetland"
                ],
                [
                    "==",
                    "wetland_type",
                    "swamp"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-pattern": "swamp_poly_sparse",
                "fill-color": "rgba(156, 156, 156, 1)",
                "fill-opacity": 0.5,
                "fill-antialias": true
            },
            "id": "Landcover-Swamp-sparse",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 16
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wetland"
                ],
                [
                    "==",
                    "wetland_type",
                    "swamp"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 16,
            "paint": {
                "fill-pattern": "swamp_poly_sparse_half",
                "fill-color": "rgba(156, 156, 156, 1)",
                "fill-opacity": 0.5,
                "fill-antialias": true
            },
            "id": "Landcover-Swamp-sparse-half",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wetland"
                ],
                [
                    "==",
                    "wetland_type",
                    "swamp"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 0.5,
                "line-color": {
                    "stops": [
                        [
                            10,
                            "rgba(0, 140, 204, 0.1)"
                        ],
                        [
                            11,
                            "rgba(0, 140, 204, 0.8)"
                        ]
                    ]
                },
                "line-dasharray": [
                    6,
                    6,
                    4,
                    4
                ]
            },
            "id": "Landcover-Swamp-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "none",
                [
                    "==",
                    "parcel_intent",
                    "Road"
                ],
                [
                    "==",
                    "parcel_intent",
                    "Hydro"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            16,
                            0.75
                        ],
                        [
                            24,
                            1.5
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            16,
                            "rgba(220, 220, 220, 1)"
                        ],
                        [
                            24,
                            "rgba(147, 147, 147, 1)"
                        ]
                    ]
                }
            },
            "id": "Parcels-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "parcel_boundaries",
            "type": "line",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "shingle"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            10,
                            "rgba(216, 213, 213, 0.5)"
                        ],
                        [
                            19,
                            "rgba(216, 213, 213, 0.75)"
                        ]
                    ]
                },
                "fill-antialias": false
            },
            "id": "Landcover-Shingle-pattern-shade",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "aerodrome"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(211, 211, 211, 1)"
            },
            "id": "Aeroway-Aerodrome",
            "source": "LINZ Basemaps",
            "source-layer": "aeroway",
            "type": "fill",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "runway"
                ],
                [
                    "==",
                    "surface",
                    "sealed"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(193, 193, 193, 0.5)",
                "fill-antialias": false
            },
            "id": "Aeroway-Runway-Sealed",
            "source": "LINZ Basemaps",
            "source-layer": "aeroway",
            "type": "fill",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "runway"
                ],
                [
                    "!has",
                    "surface"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(125, 125, 125, 1)",
                "line-dasharray": [
                    5,
                    5
                ]
            },
            "id": "Aeroway-Runway-Grass-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "aeroway",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "runway"
                ],
                [
                    "==",
                    "surface",
                    "sealed"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            2,
                            1
                        ],
                        [
                            10,
                            0.7
                        ],
                        [
                            19,
                            0.5
                        ]
                    ]
                },
                "line-color": "rgba(125, 125, 125, 1)"
            },
            "id": "Aeroway-Runway-Sealed-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "aeroway",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "lake"
                ],
                [
                    "==",
                    "class",
                    "river"
                ],
                [
                    "==",
                    "class",
                    "canal"
                ],
                [
                    "==",
                    "class",
                    "lagoon"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-offset": 0,
                "line-width": {
                    "stops": [
                        [
                            9,
                            1
                        ],
                        [
                            15,
                            2.5
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            6,
                            "rgba(184, 220, 242, 1)"
                        ],
                        [
                            13,
                            "rgba(0, 140, 204, 0.3)"
                        ],
                        [
                            19,
                            "rgba(0, 140, 204, 1)"
                        ]
                    ]
                }
            },
            "id": "Water-Polys-Outline",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "line",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "canal"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "fill-color": "rgba(204, 232, 245, 1)",
                "fill-opacity": 1,
                "fill-antialias": true,
                "fill-translate-anchor": "map",
                "fill-outline-color": {
                    "stops": [
                        [
                            6,
                            "rgba(184, 220, 242, 1)"
                        ],
                        [
                            13,
                            "rgba(0, 140, 204, 0.3)"
                        ],
                        [
                            19,
                            "rgba(0, 140, 204, 1)"
                        ]
                    ]
                }
            },
            "id": "Water-Canal-Poly-Named",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "fill",
            "minzoom": 9
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "lagoon"
                ]
            ],
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-antialias": true
            },
            "id": "Water-Lagoon",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "lake"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-opacity": 1,
                "fill-antialias": true,
                "fill-translate-anchor": "map"
            },
            "id": "Water-Lake",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "fill",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "lake"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-opacity": 1,
                "fill-antialias": true,
                "fill-translate-anchor": "map"
            },
            "id": "Water-Lake-Named",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "fill",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "river"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-opacity": 1,
                "fill-antialias": true,
                "fill-translate-anchor": "map"
            },
            "id": "Water-River-Poly-Named",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "fill",
            "minzoom": 8
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "canal"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-opacity": 1,
                "fill-antialias": true,
                "fill-translate-anchor": "map"
            },
            "id": "Water-Canal-Poly",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "fill",
            "minzoom": 13
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "river"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-opacity": 1,
                "fill-antialias": true,
                "fill-translate-anchor": "map"
            },
            "id": "Water-River-Poly",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "fill",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "sand"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "fill-color": "rgba(135, 122, 122, 1)",
                "fill-opacity": 0.8,
                "fill-pattern": "sand_land_poly_quarter"
            },
            "id": "Landcover-Sand-pattern",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "sand"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(135, 122, 122, 1)",
                "fill-opacity": 0.45,
                "fill-pattern": "sand_land_poly_half"
            },
            "id": "Landcover-Sand-land-pattern-half",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "scree"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 15,
            "paint": {
                "fill-opacity": 0.25,
                "fill-pattern": "gravel_poly_half"
            },
            "id": "Landcover-Scree-poly-half",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "scree"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-opacity": 0.25,
                "fill-pattern": "gravel_poly"
            },
            "id": "Landcover-Scree-poly",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "shingle"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 15,
            "paint": {
                "fill-pattern": "sand_land_poly_quarter",
                "fill-color": "rgba(211, 207, 207, 0.75)",
                "fill-opacity": 0.85,
                "fill-antialias": false
            },
            "id": "Landcover-Shingle-poly-quarter",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "shingle"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-pattern": "sand_land_poly_half",
                "fill-color": "rgba(211, 207, 207, 0.75)",
                "fill-opacity": 0.85,
                "fill-antialias": false
            },
            "id": "Landcover-Shingle-poly",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "moraine"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 15,
            "paint": {
                "fill-opacity": 0.6,
                "fill-pattern": "moraine_poly_half"
            },
            "id": "Landcover-Moraine-poly-half",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "moraine"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-opacity": 0.8,
                "fill-pattern": "moraine_poly"
            },
            "id": "Landcover-Moraine-poly",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "moraine_wall"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-opacity": 1,
                "fill-pattern": {
                    "stops": [
                        [
                            12,
                            "moraine_poly_half"
                        ],
                        [
                            15,
                            "moraine_poly"
                        ]
                    ]
                }
            },
            "id": "Landcover-Moraine-Wall-pattern",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "reef"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            2,
                            0.5
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                },
                "line-color": "rgba(0, 140, 204, 1)",
                "line-dasharray": [
                    12,
                    2
                ]
            },
            "id": "Water-Reef",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "canal"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-opacity": 1,
                "line-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            0.75
                        ],
                        [
                            18,
                            0.5
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            11,
                            "rgba(167, 209, 232, 0.75)"
                        ],
                        [
                            13,
                            "rgba(76, 147, 226, 0.75)"
                        ],
                        [
                            20,
                            "rgba(0, 140, 204, 0.75)"
                        ]
                    ]
                }
            },
            "id": "Waterway-Canal-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "canal"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "line-opacity": 1,
                "line-width": {
                    "stops": [
                        [
                            12,
                            1.5
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            9,
                            "rgba(125, 198, 215, 0.01)"
                        ],
                        [
                            10,
                            "rgba(125, 198, 215, 0.75)"
                        ],
                        [
                            11,
                            "rgba(167, 209, 232, 0.75)"
                        ],
                        [
                            12,
                            "rgba(167, 209, 232, 0.75)"
                        ],
                        [
                            13,
                            "rgba(76, 147, 226, 0.75)"
                        ]
                    ]
                }
            },
            "id": "Waterway-Canal-Ln-Named",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "drain"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-opacity": 1,
                "line-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            0.75
                        ],
                        [
                            18,
                            0.5
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            11,
                            "rgba(167, 209, 232, 0.75)"
                        ],
                        [
                            13,
                            "rgba(76, 147, 226, 0.75)"
                        ],
                        [
                            20,
                            "rgba(0, 140, 204, 0.75)"
                        ]
                    ]
                }
            },
            "id": "Waterway-Drain-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "drain"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "line-opacity": 1,
                "line-width": {
                    "stops": [
                        [
                            12,
                            1.5
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            9,
                            "rgba(125, 198, 215, 0.01)"
                        ],
                        [
                            10,
                            "rgba(125, 198, 215, 0.75)"
                        ],
                        [
                            11,
                            "rgba(167, 209, 232, 0.75)"
                        ],
                        [
                            12,
                            "rgba(167, 209, 232, 0.75)"
                        ],
                        [
                            13,
                            "rgba(76, 147, 226, 0.75)"
                        ]
                    ]
                }
            },
            "id": "Waterway-Drain-Ln-Named",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "river"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-opacity": 1,
                "line-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            18,
                            0.75
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            13,
                            "rgba(76, 147, 226, 0.75)"
                        ],
                        [
                            20,
                            "rgba(0, 140, 204, 0.75)"
                        ]
                    ]
                }
            },
            "id": "Waterway-River-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "river"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "line-opacity": 1,
                "line-width": {
                    "stops": [
                        [
                            12,
                            1.5
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            9,
                            "rgba(125, 198, 215, 0.01)"
                        ],
                        [
                            10,
                            "rgba(125, 198, 215, 0.75)"
                        ],
                        [
                            11,
                            "rgba(167, 209, 232, 0.75)"
                        ],
                        [
                            12,
                            "rgba(167, 209, 232, 0.75)"
                        ],
                        [
                            13,
                            "rgba(76, 147, 226, 0.75)"
                        ]
                    ]
                }
            },
            "id": "Waterway-River-Ln-Named",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "dock"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.75
                        ],
                        [
                            14,
                            1.5
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-color": "rgba(73, 73, 73, 1)"
            },
            "id": "Water-Dry-Dock-ln",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "line",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "shoal"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(0, 140, 204, 1)",
                "line-dasharray": [
                    10,
                    4
                ]
            },
            "id": "Water-Shoal-ln",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "line",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "waterfall"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(63, 117, 150, 1)",
                "fill-antialias": true
            },
            "id": "Waterway-Waterfall-Poly",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "channel"
                ],
                [
                    "==",
                    "channel_type",
                    "flume_cl"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 0.75,
                "line-color": "rgba(73, 71, 71, 1)"
            },
            "id": "Waterway-Flume",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "stream"
                ],
                [
                    "==",
                    "stream_feature",
                    "rapid_cl"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            15,
                            10
                        ]
                    ]
                },
                "line-color": "rgba(0, 140, 204, 1)",
                "line-dasharray": [
                    0.15,
                    12
                ]
            },
            "id": "Waterway-Rapid",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "stream"
                ],
                [
                    "==",
                    "stream_feature",
                    "rapid"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-antialias": false,
                "fill-pattern": "moraine_poly_half"
            },
            "id": "Waterway-Rapid-Poly",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "spillway"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 1.5,
                "line-color": "rgba(78, 78, 78, 1)"
            },
            "id": "Waterway-Spillway-Edge",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "waterfall_edge"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            15,
                            1.25
                        ]
                    ]
                },
                "line-color": "rgba(0, 140, 204, 1)"
            },
            "id": "Waterway-Waterfall-Edge",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "waterfall_ln"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            12,
                            6
                        ],
                        [
                            15,
                            14
                        ]
                    ]
                },
                "line-color": "rgba(0, 140, 204, 1)",
                "line-dasharray": [
                    0.1,
                    2.5
                ]
            },
            "id": "Waterway-Waterfall-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "waterfall_ln"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(0, 140, 204, 1)"
            },
            "id": "Waterway-Waterfall-Ln-lines",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "channel"
                ],
                [
                    "==",
                    "channel_type",
                    "water_race"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 0.5,
                "line-color": {
                    "stops": [
                        [
                            13,
                            "rgba(0, 140, 204, 0.3)"
                        ],
                        [
                            19,
                            "rgba(0, 140, 204, 1)"
                        ]
                    ]
                }
            },
            "id": "Waterway-WaterRace",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "cemetery"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(187, 179, 159, 0.75)",
                "fill-opacity": 0.5,
                "fill-pattern": "cemetery_poly_half"
            },
            "id": "Landuse-Cemetery-poly-half",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "gravel_pit"
                ]
            ],
            "paint": {
                "fill-color": "rgba(216, 213, 213, 0.75)"
            },
            "id": "Landuse-GravelPit-shade",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "gravel_pit"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 13,
            "paint": {
                "fill-pattern": "gravel_poly_quarter"
            },
            "id": "Landuse-GravelPit-poly-quarter",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "gravel_pit"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 15,
            "paint": {
                "fill-pattern": "gravel_poly_half"
            },
            "id": "Landuse-GravelPit-poly-half",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "gravel_pit"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-pattern": "gravel_poly"
            },
            "id": "Landuse-GravelPit-poly",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "landfill"
                ]
            ],
            "paint": {
                "fill-color": "rgba(247, 165, 66, 0.65)",
                "fill-antialias": true
            },
            "id": "Landuse-Landfill",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "wetland_feature",
                    "mangrove"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-pattern": "mangrove_poly_sparse"
            },
            "id": "Landuse-Mangrove-poly-sparse",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "wetland_feature",
                    "mangrove"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 15,
            "paint": {
                "fill-pattern": "mangrove_poly_sparse_half"
            },
            "id": "Landuse-Mangrove-poly-sparse-half",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "wetland_feature",
                    "mangrove"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(96, 154, 101, 0.34)"
            },
            "id": "Landuse-Mangrove",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "marine_farm"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 15,
            "paint": {
                "fill-color": "rgba(25, 114, 242, 0.45)",
                "fill-opacity": 0.5,
                "fill-pattern": "marine_farm_poly_half"
            },
            "id": "Landuse-MarineFarm-half",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "marine_farm"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(25, 114, 242, 0.45)",
                "fill-opacity": 0.5,
                "fill-pattern": "marine_farm_poly"
            },
            "id": "Landuse-MarineFarm",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wetland"
                ],
                [
                    "==",
                    "wetland_feature",
                    "pond"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-outline-color": {
                    "stops": [
                        [
                            6,
                            "rgba(184, 220, 242, 1)"
                        ],
                        [
                            13,
                            "rgba(0, 140, 204, 0.3)"
                        ],
                        [
                            19,
                            "rgba(0, 140, 204, 1)"
                        ]
                    ]
                }
            },
            "id": "Landuse-Pond",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "pumice_pit"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(185, 172, 172, 1)",
                "fill-pattern": "gravel_poly_quarter"
            },
            "id": "Landuse-PumicePit",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "reservoir"
                ],
                [
                    "==",
                    "lid_type",
                    "covered"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(148, 148, 148, 1)",
                "fill-outline-color": "rgba(18, 18, 18, 1)"
            },
            "id": "Landuse-Reservoir-Covered",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "reservoir"
                ],
                [
                    "!=",
                    "lid_type",
                    "covered"
                ]
            ],
            "paint": {
                "fill-color": "rgba(184, 220, 242, 1)",
                "fill-outline-color": "rgba(18, 18, 18, 1)"
            },
            "id": "Landuse-Reservoir-Empty",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "residential"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 15,
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            1,
                            "rgba(164, 164, 164, 1)"
                        ],
                        [
                            10,
                            "rgba(164, 164, 164, 0.95)"
                        ],
                        [
                            13,
                            "rgba(164, 164, 164, 0.75)"
                        ],
                        [
                            15,
                            "rgba(164, 164, 164, 0.1)"
                        ],
                        [
                            16,
                            "rgba(164, 164, 164, 0.01)"
                        ],
                        [
                            20,
                            "rgba(164, 164, 164, 0.01)"
                        ]
                    ]
                },
                "fill-outline-color": "rgba(164, 164, 164, 0.01)"
            },
            "id": "Landuse-Residential",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "fill",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "relief"
                ],
                [
                    "==",
                    "sand_feature",
                    "cliff"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-opacity": 0.7,
                "line-pattern": "cliff_edge",
                "line-width": 20
            },
            "id": "Landcover-Cliff-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "relief"
                ],
                [
                    "==",
                    "sand_feature",
                    "cutting"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 20,
                "line-pattern": "cutting_edge",
                "line-offset": -3,
                "line-color": "rgba(81, 79, 79, 1)"
            },
            "id": "Landcover-Cutting-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rock"
                ],
                [
                    "==",
                    "rock_feature",
                    "embankment"
                ],
                [
                    "!=",
                    "embkmt_use",
                    "stopbank"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-opacity": 1,
                "line-pattern": "embankment_gap_cl_thick",
                "line-width": 30
            },
            "id": "Landcover-Embankment",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "grass"
                ],
                [
                    "==",
                    "grass_type",
                    "golf_course"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(121, 195, 128, 0.2)"
            },
            "id": "Landcover-GolfCourse",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "relief"
                ],
                [
                    "==",
                    "sand_feature",
                    "slip"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": 15,
                "line-pattern": "cliff_edge",
                "line-offset": 0,
                "line-color": "rgba(81, 79, 79, 1)"
            },
            "id": "Landcover-Slip-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rock"
                ],
                [
                    "==",
                    "rock_feature",
                    "embankment"
                ],
                [
                    "==",
                    "embkmt_use",
                    "stopbank"
                ]
            ],
            "paint": {
                "line-opacity": 1,
                "line-width": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            15,
                            14
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                },
                "line-dasharray": [
                    0.1,
                    0.5
                ],
                "line-color": "rgba(61, 58, 58, 1)"
            },
            "id": "Landcover-Stopbank",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "barrier",
                    "fence"
                ],
                [
                    "==",
                    "class",
                    "farmland"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 1,
                "line-color": {
                    "stops": [
                        [
                            15,
                            "rgba(100, 100, 100, 0.4)"
                        ],
                        [
                            19,
                            "rgba(100, 100, 100, 0.8)"
                        ]
                    ]
                }
            },
            "id": "Fence-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "barrier",
                    "fence"
                ],
                [
                    "==",
                    "class",
                    "farmland"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 1.5,
                "line-dasharray": [
                    1,
                    7
                ],
                "line-offset": 1,
                "line-color": {
                    "stops": [
                        [
                            15,
                            "rgba(160, 90, 26, 0.4)"
                        ],
                        [
                            19,
                            "rgba(160, 90, 26, 0.6)"
                        ]
                    ]
                }
            },
            "id": "Fence-Posts",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 16.5
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "natural",
                    "tree_row"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": 4,
                "line-color": "rgba(148, 199, 111, 0.75)"
            },
            "id": "Vegetation-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "line",
            "minzoom": 14
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            10,
                            0.55
                        ],
                        [
                            15,
                            1.25
                        ],
                        [
                            20,
                            3.5
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            1,
                            "rgba(9, 132, 186, 1)"
                        ],
                        [
                            6,
                            "rgba(9, 132, 186, 1)"
                        ],
                        [
                            10,
                            "rgba(27, 152, 193, 1)"
                        ],
                        [
                            16,
                            "rgba(34, 164, 212, 1)"
                        ]
                    ]
                }
            },
            "id": "Coastline-Ln-2",
            "source": "LINZ Basemaps",
            "source-layer": "coastline",
            "type": "line",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "fish_farm"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgb(112,172,242)"
            },
            "id": "Poi-FishFarm",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rifle_range"
                ]
            ],
            "paint": {
                "fill-color": "rgba(208, 208, 208, 0.85)"
            },
            "id": "Poi-RifleRange-Fill",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rifle_range"
                ]
            ],
            "paint": {
                "line-width": 1.5,
                "line-color": "rgba(55, 54, 54, 0.85)",
                "line-dasharray": [
                    5,
                    3
                ]
            },
            "id": "Poi-RifleRange-Outline",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "showground"
                ]
            ],
            "paint": {
                "fill-color": "rgba(121, 195, 128, 0.2)"
            },
            "id": "Poi-Showground",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "sports_field"
                ]
            ],
            "paint": {
                "fill-color": "rgba(121, 195, 128, 0.2)"
            },
            "id": "Poi-SportsField",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "storage_tank"
                ],
                [
                    "!has",
                    "store_item"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            6,
                            "rgba(240, 240, 240, 0.85)"
                        ],
                        [
                            10,
                            "rgba(240, 240, 240, 0.85)"
                        ]
                    ]
                },
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            0.2
                        ]
                    ]
                },
                "fill-antialias": true,
                "fill-outline-color": "rgba(67, 67, 67, 1)"
            },
            "id": "Poi-Storage-Tank-Empty",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "storage_tank"
                ],
                [
                    "==",
                    "store_item",
                    "fuel"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(67, 67, 67, 1)",
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            0.2
                        ]
                    ]
                },
                "fill-antialias": false,
                "fill-outline-color": "rgba(67, 67, 67, 1)"
            },
            "id": "Poi-Storage-Tank-Fuel",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "storage_tank"
                ],
                [
                    "==",
                    "store_item",
                    "water"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(110, 167, 205, 1)",
                "fill-opacity": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            0.2
                        ]
                    ]
                },
                "fill-antialias": true,
                "fill-outline-color": "rgba(67, 67, 67, 1)"
            },
            "id": "Poi-Storage-Tank-Water",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "siphon"
                ]
            ],
            "id": "Poi-Siphon",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "fill",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "storage_tank_pt"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "circle-stroke-color": "rgba(67, 67, 67, 1)",
                "circle-opacity": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            0.2
                        ]
                    ]
                },
                "circle-radius": {
                    "stops": [
                        [
                            12,
                            2
                        ],
                        [
                            15,
                            5
                        ]
                    ]
                },
                "circle-pitch-alignment": "map"
            },
            "id": "Poi-Tank-Pt-Background",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "circle",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "storage_tank_pt"
                ],
                [
                    "!has",
                    "store_item"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "circle-opacity": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            0.2
                        ]
                    ]
                },
                "circle-radius": {
                    "stops": [
                        [
                            12,
                            1.5
                        ],
                        [
                            15,
                            3.5
                        ]
                    ]
                },
                "circle-color": "rgba(255, 255, 255, 1)",
                "circle-pitch-alignment": "map"
            },
            "id": "Poi-Tank-Pt-Fill-Empty",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "circle",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "storage_tank_pt"
                ],
                [
                    "==",
                    "store_item",
                    "fuel"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "circle-opacity": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            0.2
                        ]
                    ]
                },
                "circle-radius": {
                    "stops": [
                        [
                            12,
                            1.5
                        ],
                        [
                            15,
                            3.5
                        ]
                    ]
                },
                "circle-color": "rgba(67, 67, 67, 1)",
                "circle-pitch-alignment": "map"
            },
            "id": "Poi-Tank-Pt-Fill-Fuel",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "circle",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "storage_tank_pt"
                ],
                [
                    "==",
                    "store_item",
                    "water"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "circle-opacity": {
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            20,
                            0.2
                        ]
                    ]
                },
                "circle-radius": {
                    "stops": [
                        [
                            12,
                            1.5
                        ],
                        [
                            15,
                            3.5
                        ]
                    ]
                },
                "circle-color": "rgba(110, 167, 205, 1)",
                "circle-pitch-alignment": "map"
            },
            "id": "Poi-Tank-Pt-Fill-Water",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "circle",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "boatramp"
                ]
            ],
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            2
                        ],
                        [
                            15,
                            5
                        ],
                        [
                            19,
                            8
                        ]
                    ]
                },
                "line-color": "rgba(78, 78, 78, 1)"
            },
            "id": "Poi-Boatramp-Casing",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "boatramp"
                ]
            ],
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.4
                        ],
                        [
                            15,
                            2.5
                        ],
                        [
                            19,
                            6.5
                        ]
                    ]
                },
                "line-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Poi-Boatramp-Fill",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "dredge_tailing"
                ]
            ],
            "paint": {
                "line-opacity": 0.9,
                "line-width": 10,
                "line-pattern": "dredge_tailing_pnt",
                "line-color": "rgba(55, 55, 55, 1)"
            },
            "id": "Poi-Dredge-Tailing",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line",
            "minzoom": 12
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "mine"
                ],
                [
                    "==",
                    "class",
                    "quarry"
                ]
            ],
            "paint": {
                "line-width": 1.5,
                "line-color": "rgba(59, 59, 59, 1)",
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "id": "Poi-Mine-Quarry-Outline",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "pipeline"
                ]
            ],
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            6,
                            0.75
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            19,
                            1.5
                        ]
                    ]
                },
                "line-color": "rgb(235,137,133)"
            },
            "id": "Poi-Pipeline",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "racetrack"
                ],
                [
                    "==",
                    "class",
                    "racetrack_ln"
                ]
            ],
            "paint": {
                "line-width": 0.75,
                "line-color": "rgba(84, 84, 84, 1)"
            },
            "id": "Poi-Racetrack",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "slipway"
                ]
            ],
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            16,
                            4
                        ]
                    ]
                },
                "line-color": "rgba(64, 64, 64, 1)"
            },
            "id": "Poi-Slipway-Symbol-Dash",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "slipway"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            12,
                            4
                        ],
                        [
                            16,
                            18
                        ]
                    ]
                },
                "line-color": "rgba(64, 64, 64, 1)",
                "line-dasharray": [
                    0.15,
                    0.4
                ]
            },
            "id": "Poi-Slipway-Symbol-Line",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wharf_edge"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 1.3,
                "line-color": "rgba(73, 73, 73, 1)"
            },
            "id": "Poi-Wharf-Edge",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wharf"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.75
                        ],
                        [
                            14,
                            1.5
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-color": "rgba(73, 73, 73, 1)"
            },
            "id": "Poi-Wharf-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "line",
            "minzoom": 10
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 18,
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            15,
                            "rgba(199, 199, 199, 0.75)"
                        ],
                        [
                            19,
                            "rgba(125, 125, 125, 1)"
                        ]
                    ]
                },
                "fill-opacity": 1,
                "fill-antialias": true,
                "fill-translate": {
                    "base": 1,
                    "stops": [
                        [
                            17,
                            [
                                1,
                                1
                            ]
                        ],
                        [
                            19,
                            [
                                3,
                                3
                            ]
                        ]
                    ]
                }
            },
            "id": "Buildings-Shadow",
            "source": "LINZ Basemaps",
            "source-layer": "building",
            "type": "fill",
            "minzoom": 17
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "stops": [
                        [
                            14,
                            "rgba(148, 148, 148, 0.1)"
                        ],
                        [
                            15,
                            "rgba(148, 148, 148, 1)"
                        ],
                        [
                            17,
                            "rgba(190, 190, 190, 1)"
                        ],
                        [
                            18,
                            "rgba(190, 190, 190, 1)"
                        ],
                        [
                            19,
                            "rgba(190, 190, 190, 0.7)"
                        ]
                    ]
                },
                "fill-opacity": 1,
                "fill-antialias": true
            },
            "id": "Buildings",
            "source": "LINZ Basemaps",
            "source-layer": "building",
            "type": "fill",
            "minzoom": 14
        },
        {
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 18,
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            17,
                            0.5
                        ],
                        [
                            24,
                            1
                        ]
                    ]
                },
                "line-color": "rgba(152, 145, 145,0.75)"
            },
            "id": "Buildings-Outline",
            "source": "LINZ Basemaps",
            "source-layer": "building",
            "type": "line",
            "minzoom": 17
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "peak"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 18,
            "paint": {
                "circle-radius": 2,
                "circle-color": "rgba(47, 47, 46, 1)"
            },
            "id": "Height-Point",
            "source": "LINZ Basemaps",
            "source-layer": "contours",
            "type": "circle",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "peak"
                ]
            ],
            "layout": {
                "icon-pitch-alignment": "auto",
                "text-optional": false,
                "text-variable-anchor": [
                    "bottom-left",
                    "bottom-right"
                ],
                "text-justify": "auto",
                "visibility": "visible",
                "text-field": "{elevation}",
                "text-offset": [
                    0.2,
                    -0.2
                ],
                "text-anchor": "bottom-left",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            15,
                            11
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-ignore-placement": false,
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "maxzoom": 18,
            "paint": {
                "text-halo-blur": 0.5,
                "text-halo-color": "rgba(243, 243, 242, 0.75)",
                "text-halo-width": 1,
                "text-translate-anchor": "map"
            },
            "id": "Height-Point-Labels",
            "source": "LINZ Basemaps",
            "source-layer": "contours",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "ferry"
                ]
            ],
            "paint": {
                "line-color": "rgba(0, 140, 204, 1)",
                "line-dasharray": [
                    15,
                    10
                ]
            },
            "id": "Transport-FerryCrossing",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "track_use",
                    "cycle only"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
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
                },
                "line-color": "rgba(231, 231, 231, 0.4)"
            },
            "id": "Transport-CycleTracks-Shadow",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "track_use",
                    "foot"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
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
                },
                "line-color": "rgba(231, 231, 231, 0.4)"
            },
            "id": "Transport-FootTracks-Shadow",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "subclass",
                    "foot_route_closed"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
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
                },
                "line-color": "rgba(205, 53, 53, 0.4)"
            },
            "id": "Transport-ClosedFootRouteTracks-Shadow",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "subclass",
                    "foot_closed"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
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
                },
                "line-color": "rgba(205, 53, 53, 0.4)"
            },
            "id": "Transport-ClosedFootTracks-Shadow",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "track_use",
                    "cycle only"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            15,
                            1.5
                        ],
                        [
                            19,
                            3
                        ]
                    ]
                },
                "line-color": "rgba(78, 78, 78, 0.8)",
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
            },
            "id": "Transport-CycleTracks",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "track_use",
                    "foot"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
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
                "line-color": "rgba(78, 78, 78, 0.8)",
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
            },
            "id": "Transport-FootTracks",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "track_use",
                    "vehicle"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
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
                "line-color": "rgba(231, 231, 231, 0.4)"
            },
            "id": "Transport-VehicleTracks-Shadow",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "track_use",
                    "vehicle"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
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
                "line-color": "rgba(78, 78, 78, 0.8)",
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
            },
            "id": "Transport-VehicleTracks",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "lane_count",
                    1
                ],
                [
                    "!=",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.5
                        ],
                        [
                            12,
                            3
                        ],
                        [
                            13,
                            4.5
                        ],
                        [
                            15,
                            5.5
                        ],
                        [
                            18,
                            11
                        ],
                        [
                            19,
                            40
                        ],
                        [
                            22,
                            200
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            10,
                            "rgba(78, 78, 78, 1)"
                        ],
                        [
                            17,
                            "rgba(78, 78, 78, 1)"
                        ],
                        [
                            18,
                            "rgba(96, 96, 96, 1)"
                        ]
                    ]
                }
            },
            "id": "Transport-1Casing",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "in",
                    "lane_count",
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                [
                    "!=",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            3.25
                        ],
                        [
                            12,
                            4.5
                        ],
                        [
                            13,
                            6.5
                        ],
                        [
                            15,
                            10
                        ],
                        [
                            18,
                            17
                        ],
                        [
                            19,
                            60
                        ],
                        [
                            22,
                            400
                        ]
                    ]
                },
                "line-color": {
                    "stops": [
                        [
                            10,
                            "rgba(78, 78, 78, 1)"
                        ],
                        [
                            17,
                            "rgba(78, 78, 78, 1)"
                        ],
                        [
                            18,
                            "rgba(96, 96, 96, 1)"
                        ]
                    ]
                }
            },
            "id": "Transport-2Casing",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "in",
                    "lane_count",
                    1
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            8,
                            1.5
                        ],
                        [
                            10,
                            1.75
                        ],
                        [
                            12,
                            3.25
                        ],
                        [
                            13,
                            5
                        ],
                        [
                            15,
                            7
                        ],
                        [
                            18,
                            13
                        ],
                        [
                            19,
                            50
                        ],
                        [
                            22,
                            220
                        ]
                    ]
                },
                "line-color": "rgba(120, 120, 120, 1)"
            },
            "id": "Transport-1HWY-Casing-14",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "in",
                    "lane_count",
                    2,
                    3
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            8,
                            3.25
                        ],
                        [
                            10,
                            4.5
                        ],
                        [
                            12,
                            6.5
                        ],
                        [
                            13,
                            8.5
                        ],
                        [
                            15,
                            12
                        ],
                        [
                            18,
                            19
                        ],
                        [
                            19,
                            70
                        ],
                        [
                            22,
                            450
                        ]
                    ]
                },
                "line-color": "rgba(120, 120, 120, 1)"
            },
            "id": "Transport-2HWY-Casing-14",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "in",
                    "lane_count",
                    4,
                    5,
                    6,
                    7
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            8,
                            3.5
                        ],
                        [
                            10,
                            5
                        ],
                        [
                            12,
                            7.5
                        ],
                        [
                            13,
                            9
                        ],
                        [
                            15,
                            13
                        ],
                        [
                            18,
                            21
                        ],
                        [
                            19,
                            80
                        ],
                        [
                            22,
                            470
                        ]
                    ]
                },
                "line-color": "rgba(120, 120, 120, 1)"
            },
            "id": "Transport-HWY-Casing-14",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "surface",
                    "unmetalled"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            13,
                            2
                        ],
                        [
                            15,
                            3
                        ],
                        [
                            18,
                            8
                        ],
                        [
                            19,
                            35
                        ],
                        [
                            22,
                            180
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": "rgba(255, 254, 252, 1)"
            },
            "id": "Transport-UnMetalled",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "surface",
                    "metalled"
                ],
                [
                    "==",
                    "lane_count",
                    1
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            13,
                            2
                        ],
                        [
                            15,
                            3
                        ],
                        [
                            18,
                            8
                        ],
                        [
                            19,
                            35
                        ],
                        [
                            22,
                            180
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": "rgba(255, 254, 252, 1)"
            },
            "id": "Transport-1Metalled-White",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "surface",
                    "metalled"
                ],
                [
                    "==",
                    "lane_count",
                    1
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            13,
                            2
                        ],
                        [
                            15,
                            3
                        ],
                        [
                            18,
                            8
                        ],
                        [
                            19,
                            35
                        ],
                        [
                            22,
                            180
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-dasharray": [
                    8,
                    5
                ],
                "line-color": {
                    "stops": [
                        [
                            10,
                            "rgba(210, 162, 84, 1)"
                        ],
                        [
                            17,
                            "rgba(210, 162, 84, 1)"
                        ],
                        [
                            19,
                            "rgba(217, 184, 127, 1)"
                        ]
                    ]
                }
            },
            "id": "Transport-1Metalled-Orange",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "lane_count",
                    1
                ],
                [
                    "!=",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "status",
                    "under construction"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            13,
                            2
                        ],
                        [
                            15,
                            3
                        ],
                        [
                            18,
                            8
                        ],
                        [
                            19,
                            35
                        ],
                        [
                            22,
                            180
                        ]
                    ]
                },
                "line-color": "rgba(133, 130, 130, 1)",
                "line-dasharray": [
                    1,
                    5
                ]
            },
            "id": "Transport-1-UnderCons",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "surface",
                    "sealed"
                ],
                [
                    "==",
                    "lane_count",
                    1
                ],
                [
                    "!=",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            11,
                            1
                        ],
                        [
                            13,
                            2
                        ],
                        [
                            15,
                            3
                        ],
                        [
                            18,
                            8
                        ],
                        [
                            19,
                            35
                        ],
                        [
                            22,
                            180
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": {
                    "stops": [
                        [
                            10,
                            "rgba(210, 162, 84, 1)"
                        ],
                        [
                            17,
                            "rgba(210, 162, 84, 1)"
                        ],
                        [
                            19,
                            "rgba(217, 184, 127, 1)"
                        ]
                    ]
                }
            },
            "id": "Transport-1Sealed",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "surface",
                    "unmetalled"
                ],
                [
                    "in",
                    "lane_count",
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.35
                        ],
                        [
                            11,
                            1.75
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            16,
                            7.5
                        ],
                        [
                            18,
                            14
                        ],
                        [
                            19,
                            55
                        ],
                        [
                            22,
                            380
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Transport-2UnMetalled",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "surface",
                    "metalled"
                ],
                [
                    "in",
                    "lane_count",
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.35
                        ],
                        [
                            11,
                            1.75
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            15,
                            7.5
                        ],
                        [
                            18,
                            14
                        ],
                        [
                            19,
                            55
                        ],
                        [
                            22,
                            380
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Transport-2Metalled-White",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "in",
                    "lane_count",
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                [
                    "!=",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "status",
                    "under construction"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.35
                        ],
                        [
                            11,
                            1.75
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            16,
                            7.5
                        ],
                        [
                            18,
                            14
                        ],
                        [
                            19,
                            55
                        ],
                        [
                            22,
                            380
                        ]
                    ]
                },
                "line-color": "rgba(133, 130, 130, 1)"
            },
            "id": "Transport-2-UnderCons",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "status",
                    "under construction"
                ],
                [
                    "in",
                    "lane_count",
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.35
                        ],
                        [
                            11,
                            1.75
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            16,
                            7.5
                        ],
                        [
                            18,
                            14
                        ],
                        [
                            19,
                            55
                        ],
                        [
                            22,
                            380
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-dasharray": [
                    5,
                    1
                ],
                "line-color": "rgba(255, 254, 252, 1)"
            },
            "id": "Transport-2UnderContruction",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "surface",
                    "metalled"
                ],
                [
                    "in",
                    "lane_count",
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.35
                        ],
                        [
                            11,
                            1.75
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            15,
                            7.5
                        ],
                        [
                            18,
                            14
                        ],
                        [
                            19,
                            55
                        ],
                        [
                            22,
                            380
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-dasharray": [
                    8,
                    5
                ],
                "line-color": {
                    "stops": [
                        [
                            10,
                            "rgba(210, 162, 84, 1)"
                        ],
                        [
                            17,
                            "rgba(210, 162, 84, 1)"
                        ],
                        [
                            19,
                            "rgba(217, 184, 127, 1)"
                        ]
                    ]
                }
            },
            "id": "Transport-2Metalled-Orange",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "surface",
                    "sealed"
                ],
                [
                    "in",
                    "lane_count",
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                [
                    "!=",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.35
                        ],
                        [
                            11,
                            1.75
                        ],
                        [
                            13,
                            4
                        ],
                        [
                            15,
                            7.5
                        ],
                        [
                            18,
                            14
                        ],
                        [
                            19,
                            55
                        ],
                        [
                            22,
                            380
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": {
                    "stops": [
                        [
                            10,
                            "rgba(210, 162, 84, 1)"
                        ],
                        [
                            17,
                            "rgba(210, 162, 84, 1)"
                        ],
                        [
                            19,
                            "rgba(217, 184, 127, 1)"
                        ]
                    ]
                }
            },
            "id": "Transport-2+Sealed",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "cable_car"
                ],
                [
                    "==",
                    "feature_type",
                    "people"
                ]
            ],
            "paint": {
                "line-width": 1.25,
                "line-color": "rgba(24, 23, 23, 0.80)"
            },
            "id": "Transport-Cable-Car-People",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "cable_car"
                ],
                [
                    "==",
                    "feature_type",
                    "industrial"
                ]
            ],
            "paint": {
                "line-width": 2.5,
                "line-color": "rgba(24, 23, 23, 0.80)"
            },
            "id": "Transport-Cable-Car-Industrial",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "ski_tow"
                ]
            ],
            "paint": {
                "line-width": 1.25,
                "line-color": "rgba(24, 23, 23, 0.80)"
            },
            "id": "Transport-Ski-Tow",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "ski_lift"
                ]
            ],
            "paint": {
                "line-width": 2.5,
                "line-color": "rgba(24, 23, 23, 0.80)"
            },
            "id": "Transport-Ski-Lift",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rail"
                ],
                [
                    "has",
                    "rway_use"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": 1,
                "line-color": "rgba(67, 61, 61, 0.95)"
            },
            "id": "Transport-Railway-Siding",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rail"
                ],
                [
                    "==",
                    "track_type",
                    "single"
                ],
                [
                    "!has",
                    "rway_use"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": 2,
                "line-color": "rgba(67, 61, 61, 0.95)"
            },
            "id": "Transport-Railway-Single",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rail"
                ],
                [
                    "==",
                    "track_type",
                    "multiple"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            11,
                            2.5
                        ],
                        [
                            19,
                            4
                        ],
                        [
                            20,
                            4
                        ]
                    ]
                },
                "line-color": "rgba(67, 61, 61, 0.95)"
            },
            "id": "Transport-Railway-Multiple",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rail"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "round"
            },
            "maxzoom": 11,
            "paint": {
                "line-width": 2,
                "line-color": {
                    "stops": [
                        [
                            8,
                            "rgba(158, 153, 153, 1)"
                        ],
                        [
                            10,
                            "rgba(96, 90, 90, 0.95)"
                        ]
                    ]
                }
            },
            "id": "Transport-Railway-High",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "in",
                    "lane_count",
                    1
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "maxzoom": 13,
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            8,
                            1.5
                        ],
                        [
                            10,
                            1.75
                        ],
                        [
                            12,
                            3.25
                        ],
                        [
                            13,
                            5
                        ],
                        [
                            15,
                            7
                        ],
                        [
                            18,
                            13
                        ],
                        [
                            19,
                            50
                        ],
                        [
                            22,
                            220
                        ]
                    ]
                },
                "line-color": "rgba(120, 120, 120, 1)"
            },
            "id": "Transport-1HWY-Casing",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "in",
                    "lane_count",
                    2,
                    3
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "maxzoom": 13,
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            8,
                            3.25
                        ],
                        [
                            10,
                            4.5
                        ],
                        [
                            12,
                            6.5
                        ],
                        [
                            13,
                            8.5
                        ],
                        [
                            15,
                            12
                        ],
                        [
                            18,
                            19
                        ],
                        [
                            19,
                            70
                        ],
                        [
                            22,
                            450
                        ]
                    ]
                },
                "line-color": "rgba(120, 120, 120, 1)"
            },
            "id": "Transport-2HWY-Casing",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "in",
                    "lane_count",
                    4,
                    5,
                    6,
                    7
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "maxzoom": 13,
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            8,
                            3.5
                        ],
                        [
                            10,
                            5
                        ],
                        [
                            12,
                            7.5
                        ],
                        [
                            13,
                            9
                        ],
                        [
                            15,
                            13
                        ],
                        [
                            18,
                            21
                        ],
                        [
                            19,
                            80
                        ],
                        [
                            22,
                            470
                        ]
                    ]
                },
                "line-color": "rgba(120, 120, 120, 1)"
            },
            "id": "Transport-HWY-Casing",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "maxzoom": 9,
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            1,
                            0.2
                        ],
                        [
                            6,
                            0.8
                        ],
                        [
                            7,
                            2
                        ],
                        [
                            8,
                            3.5
                        ]
                    ]
                },
                "line-color": "rgba(120, 120, 120, 1)"
            },
            "id": "Transport-Roads-9-Casing",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "lane_count",
                    1
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            8,
                            0.75
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            11,
                            1.25
                        ],
                        [
                            13,
                            2.5
                        ],
                        [
                            15,
                            4
                        ],
                        [
                            18,
                            9
                        ],
                        [
                            19,
                            40
                        ],
                        [
                            22,
                            200
                        ]
                    ]
                },
                "line-color": "rgba(240, 164, 82, 1)"
            },
            "id": "Transport-1HWY",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "in",
                    "lane_count",
                    2,
                    3
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-blur": 0,
                "line-width": {
                    "stops": [
                        [
                            8,
                            1.35
                        ],
                        [
                            10,
                            1.75
                        ],
                        [
                            11,
                            2.25
                        ],
                        [
                            13,
                            5.25
                        ],
                        [
                            15,
                            8.5
                        ],
                        [
                            18,
                            15
                        ],
                        [
                            19,
                            60
                        ],
                        [
                            22,
                            420
                        ]
                    ]
                },
                "line-color": "rgba(240, 164, 82, 1)"
            },
            "id": "Transport-2HWY",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "in",
                    "lane_count",
                    4,
                    5,
                    6,
                    7
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            8,
                            1.5
                        ],
                        [
                            10,
                            2
                        ],
                        [
                            11,
                            3
                        ],
                        [
                            13,
                            5.75
                        ],
                        [
                            15,
                            9
                        ],
                        [
                            18,
                            16.5
                        ],
                        [
                            19,
                            70
                        ],
                        [
                            22,
                            440
                        ]
                    ]
                },
                "line-color": "rgba(240, 164, 82, 1)"
            },
            "id": "Transport-HWY",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "maxzoom": 9,
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            1,
                            0.1
                        ],
                        [
                            5,
                            0.4
                        ],
                        [
                            7,
                            1.4
                        ],
                        [
                            8,
                            2.5
                        ]
                    ]
                },
                "line-color": "rgba(210, 162, 84, 1)"
            },
            "id": "Transport-Roads-9",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 0
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "brunnel",
                    "bridge"
                ],
                [
                    "==",
                    "use_1",
                    "foot traffic"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            15,
                            4
                        ],
                        [
                            19,
                            6
                        ]
                    ]
                },
                "line-color": "rgba(78, 78, 78, 1)"
            },
            "id": "Transport-Bridge-Foot",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "brunnel",
                    "bridge"
                ],
                [
                    "in",
                    "use_1",
                    "train",
                    "vehicle"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            12,
                            8
                        ],
                        [
                            15,
                            10
                        ],
                        [
                            18,
                            18
                        ],
                        [
                            19,
                            75
                        ],
                        [
                            22,
                            450
                        ]
                    ]
                },
                "line-color": "rgba(78, 78, 78, 1)"
            },
            "id": "Transport-Bridge-VT",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "brunnel",
                    "ford"
                ]
            ],
            "paint": {
                "circle-translate-anchor": "map",
                "circle-pitch-scale": "map",
                "circle-radius": {
                    "stops": [
                        [
                            12,
                            3
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                "circle-color": "rgba(0, 140, 204, 1)",
                "circle-pitch-alignment": "map"
            },
            "id": "Transport-Fords",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "circle",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "has",
                    "name"
                ],
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "in",
                    "subclass",
                    "foot_route_closed"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-allow-overlap": false,
                "icon-pitch-alignment": "auto",
                "visibility": "visible",
                "text-field": "{name} {status}",
                "text-anchor": "top",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            15,
                            11
                        ],
                        [
                            18,
                            10
                        ],
                        [
                            19,
                            30
                        ],
                        [
                            22,
                            140
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-text-fit": "none",
                "symbol-placement": "point",
                "icon-ignore-placement": false,
                "icon-image": "track_walking_pnt_fill",
                "text-font": [
                    "Open Sans Regular"
                ],
                "symbol-spacing": 100,
                "text-transform": "none",
                "text-pitch-alignment": "viewport",
                "text-justify": "center",
                "text-max-width": 4,
                "icon-anchor": "bottom",
                "icon-offset": [
                    0,
                    -3
                ],
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "paint": {
                "text-halo-width": 2.5,
                "text-opacity": 0.9,
                "text-halo-color": "rgba(205, 53, 53, 0.4)"
            },
            "id": "All-ClosedFootRouteTrack-Labels",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "has",
                    "name"
                ],
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "in",
                    "subclass",
                    "foot_closed"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-allow-overlap": false,
                "icon-pitch-alignment": "auto",
                "visibility": "visible",
                "text-field": "{name} {status}",
                "text-anchor": "top",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            15,
                            11
                        ],
                        [
                            18,
                            10
                        ],
                        [
                            19,
                            30
                        ],
                        [
                            22,
                            140
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-text-fit": "none",
                "symbol-placement": "point",
                "icon-ignore-placement": false,
                "icon-image": "track_walking_pnt_fill",
                "text-font": [
                    "Open Sans Regular"
                ],
                "symbol-spacing": 100,
                "text-transform": "none",
                "text-pitch-alignment": "viewport",
                "text-justify": "center",
                "text-max-width": 4,
                "icon-anchor": "bottom",
                "icon-offset": [
                    0,
                    -3
                ],
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "paint": {
                "icon-halo-width": 10,
                "text-halo-color": "rgba(205, 53, 53, 0.4)",
                "icon-halo-blur": 0.5,
                "icon-halo-color": "rgba(205, 53, 53, 0.4)",
                "text-halo-width": 2.5,
                "text-opacity": 0.9
            },
            "id": "All-ClosedFootTrack-Labels",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "has",
                    "name"
                ],
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "track_use",
                    "cycle only"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-allow-overlap": false,
                "icon-pitch-alignment": "auto",
                "visibility": "visible",
                "text-field": "{name}",
                "text-anchor": "top",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            15,
                            11
                        ],
                        [
                            18,
                            10
                        ],
                        [
                            19,
                            30
                        ],
                        [
                            22,
                            140
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-text-fit": "none",
                "icon-size": {
                    "stops": [
                        [
                            10,
                            1
                        ],
                        [
                            17,
                            1.3
                        ]
                    ]
                },
                "symbol-placement": "point",
                "icon-ignore-placement": false,
                "icon-image": "racetrack_cycle_pnt",
                "text-font": [
                    "Open Sans Regular"
                ],
                "symbol-spacing": 100,
                "text-transform": "none",
                "text-pitch-alignment": "viewport",
                "text-justify": "center",
                "text-max-width": 4,
                "icon-anchor": "bottom",
                "icon-offset": [
                    0,
                    -3
                ],
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "paint": {
                "text-halo-width": 2.5,
                "text-opacity": 0.9,
                "text-halo-color": "rgba(243, 243, 242, 0.9)"
            },
            "id": "All-CycleTrack-Labels",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "has",
                    "name"
                ],
                [
                    "==",
                    "class",
                    "track"
                ],
                [
                    "==",
                    "track_use",
                    "foot"
                ],
                [
                    "!=",
                    "subclass",
                    "foot_route_closed"
                ],
                [
                    "!=",
                    "subclass",
                    "foot_closed"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-allow-overlap": false,
                "icon-pitch-alignment": "auto",
                "visibility": "visible",
                "text-field": "{name} {status}",
                "text-anchor": "top",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            15,
                            11
                        ],
                        [
                            18,
                            10
                        ],
                        [
                            19,
                            30
                        ],
                        [
                            22,
                            140
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-text-fit": "none",
                "symbol-placement": "point",
                "icon-ignore-placement": false,
                "icon-image": "track_walking_pnt_fill",
                "text-font": [
                    "Open Sans Regular"
                ],
                "symbol-spacing": 100,
                "text-transform": "none",
                "text-pitch-alignment": "viewport",
                "text-justify": "center",
                "text-max-width": 4,
                "icon-anchor": "bottom",
                "icon-offset": [
                    0,
                    -3
                ],
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "paint": {
                "text-halo-width": 2.5,
                "text-opacity": 0.9,
                "text-halo-color": "rgba(243, 243, 242, 0.9)"
            },
            "id": "All-FootTrack-Labels",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "boom"
                ]
            ],
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.5
                        ],
                        [
                            13,
                            2
                        ],
                        [
                            15,
                            4
                        ]
                    ]
                },
                "line-color": "rgba(73, 73, 73, 1)"
            },
            "id": "Landuse-Boom",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "breakwater"
                ]
            ],
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            1.5
                        ],
                        [
                            13,
                            2
                        ],
                        [
                            15,
                            4
                        ]
                    ]
                },
                "line-color": "rgba(73, 73, 73, 1)"
            },
            "id": "Landuse-Breakwater",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "dam_ln"
                ]
            ],
            "paint": {
                "line-width": {
                    "stops": [
                        [
                            10,
                            4
                        ],
                        [
                            15,
                            8.5
                        ],
                        [
                            19,
                            14.5
                        ]
                    ]
                },
                "line-color": "rgba(78, 78, 78, 1)"
            },
            "id": "Landuse-Dam",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "ladder"
                ]
            ],
            "paint": {
                "line-color": "rgba(65, 63, 63, 1)"
            },
            "id": "Landuse-Ladder",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "marine_farm_ln"
                ]
            ],
            "paint": {
                "line-width": 3,
                "line-color": "rgba(25, 114, 242, 0.45)"
            },
            "id": "Landuse-MarineFarm-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "beacon"
                ],
                [
                    "!has",
                    "type"
                ]
            ],
            "layout": {
                "text-justify": "right",
                "visibility": "visible",
                "icon-anchor": "right",
                "text-field": "{name}",
                "text-anchor": "left",
                "text-size": 8,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1.3
                        ],
                        [
                            15,
                            1.6
                        ]
                    ]
                },
                "icon-image": "beacon_beacon_water_pnt",
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(224, 168, 33, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": 0.9,
                "text-halo-width": 2
            },
            "id": "Poi-Beacon",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "beacon"
                ],
                [
                    "==",
                    "type",
                    "lighthouse"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "text-justify": "right",
                "icon-anchor": "center",
                "text-field": "{name}",
                "text-anchor": "left",
                "text-size": 12,
                "text-allow-overlap": true,
                "icon-size": 1.3,
                "icon-image": "beacon_lighthouse_land_pnt",
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(131, 82, 19, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 2,
                "text-translate": [
                    15,
                    0
                ]
            },
            "id": "Poi-Beacon-Lighthouse",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "bivouac_pt"
                ],
                [
                    "==",
                    "materials",
                    "rock"
                ]
            ],
            "layout": {
                "text-max-width": 3,
                "text-field": "{name}",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 10,
                "icon-size": 1,
                "icon-image": "cave_pnt",
                "text-font": [
                    "Roboto Light"
                ]
            },
            "paint": {
                "text-halo-width": 1.5,
                "text-halo-blur": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Poi-Bivouac-Rock",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "bivouac_pt"
                ],
                [
                    "!=",
                    "materials",
                    "rock"
                ]
            ],
            "layout": {
                "text-max-width": 3,
                "text-field": "{name} {status}",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 10,
                "icon-size": 1,
                "icon-image": "building_pnt_hut",
                "text-font": [
                    "Roboto Light"
                ]
            },
            "paint": {
                "text-halo-width": 1.5,
                "text-halo-blur": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Poi-Bivouac",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "buoy"
                ]
            ],
            "layout": {
                "icon-size": 0.7,
                "icon-image": "circle_pnt_line",
                "text-field": "Buoy",
                "text-offset": [
                    1.5,
                    -1
                ],
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": 12
            },
            "id": "Poi-Buoy",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "cave"
                ]
            ],
            "layout": {
                "text-justify": "left",
                "text-max-width": 4,
                "visibility": "visible",
                "text-field": "{name}",
                "text-anchor": "left",
                "text-size": 10,
                "icon-image": "cave_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1.5,
                "text-translate": [
                    15,
                    0
                ]
            },
            "id": "Poi-Cave-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "cemetery"
                ]
            ],
            "layout": {
                "text-field": {
                    "stops": [
                        [
                            12,
                            ""
                        ],
                        [
                            13,
                            "{class}"
                        ]
                    ]
                },
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 10,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            0.8
                        ],
                        [
                            18,
                            1.2
                        ]
                    ]
                },
                "icon-image": "grave_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": {
                    "stops": [
                        [
                            12,
                            0.2
                        ],
                        [
                            13,
                            0.9
                        ]
                    ]
                },
                "text-halo-width": 1.5,
                "text-opacity": {
                    "stops": [
                        [
                            13,
                            0.1
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            },
            "id": "Poi-Cemetery-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "chimney"
                ]
            ],
            "layout": {
                "text-justify": "right",
                "text-field": "",
                "text-offset": [
                    1,
                    0
                ],
                "text-anchor": "left",
                "icon-size": 1.5,
                "icon-image": "chimney_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "id": "Poi-Chimney",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "dredge"
                ]
            ],
            "layout": {
                "icon-size": 0.8,
                "text-justify": "left",
                "icon-image": "square_pnt_fill",
                "text-field": "",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-anchor": "bottom-left"
            },
            "id": "Poi-Dredge",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "fish_farm"
                ]
            ],
            "layout": {
                "text-field": "{species}",
                "text-font": [
                    "Roboto Bold Italic"
                ],
                "text-size": 10
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 1)",
                "text-halo-width": 1.5
            },
            "id": "Poi-FishFarm-Label",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 16
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "flare"
                ]
            ],
            "layout": {
                "text-field": "{class}",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 12,
                "icon-size": 0.8,
                "icon-image": "square_pnt_fill",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": 0.9,
                "text-halo-width": 1,
                "text-opacity": {
                    "stops": [
                        [
                            14,
                            0.2
                        ],
                        [
                            15,
                            1
                        ]
                    ]
                }
            },
            "id": "Poi-Flare",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "floodgate"
                ]
            ],
            "layout": {
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            15,
                            1.5
                        ]
                    ]
                },
                "icon-image": "gate_pnt",
                "text-field": {
                    "stops": [
                        [
                            12,
                            ""
                        ],
                        [
                            16,
                            "floodgate"
                        ]
                    ]
                },
                "text-offset": [
                    2.5,
                    -0.8
                ],
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": {
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            16,
                            18
                        ]
                    ]
                }
            },
            "id": "Poi-Floodgate",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "gas_valve"
                ]
            ],
            "layout": {
                "icon-image": "circle_pnt_line",
                "text-field": "{class}",
                "text-offset": [
                    0,
                    1
                ],
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": {
                    "stops": [
                        [
                            12,
                            8
                        ],
                        [
                            14,
                            10
                        ]
                    ]
                }
            },
            "id": "Poi-GasValve",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "gate"
                ]
            ],
            "layout": {
                "icon-allow-overlap": false,
                "icon-pitch-alignment": "map",
                "text-field": "",
                "text-allow-overlap": true,
                "icon-rotate": 0,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            16,
                            1.5
                        ]
                    ]
                },
                "icon-image": "gate_pnt",
                "text-font": []
            },
            "paint": {
                "icon-opacity": {
                    "stops": [
                        [
                            12,
                            0.3
                        ],
                        [
                            13,
                            0.9
                        ]
                    ]
                }
            },
            "id": "Poi-Gate",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "geo_bore"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "icon-size": 0.85,
                "icon-image": "geobore_pnt_thick",
                "text-font": []
            },
            "paint": {
                "icon-opacity": {
                    "stops": [
                        [
                            12,
                            0.25
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                },
                "text-opacity": 1
            },
            "id": "Poi-GeoBore",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "geo_bore"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "visibility": "visible",
                "text-field": "{class}",
                "text-offset": [
                    0,
                    1
                ],
                "text-size": 10,
                "icon-size": 1,
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "id": "Poi-GeoBore-Label",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 19
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "grave"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "icon-image": "grave_pnt",
                "icon-size": {
                    "stops": [
                        [
                            12,
                            0.9
                        ],
                        [
                            18,
                            1.2
                        ]
                    ]
                }
            },
            "paint": {
                "icon-opacity": 0.9
            },
            "id": "Poi-Grave-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "historic_site"
                ]
            ],
            "layout": {
                "text-justify": "left",
                "text-field": "{ref}",
                "text-offset": [
                    1,
                    0
                ],
                "text-anchor": "left",
                "text-size": 10,
                "icon-image": "historic_site_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(203, 12, 12, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": {
                    "stops": [
                        [
                            12,
                            0.1
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "text-halo-width": 1.5,
                "text-opacity": {
                    "stops": [
                        [
                            16,
                            0.1
                        ],
                        [
                            17,
                            1
                        ]
                    ]
                }
            },
            "id": "Poi-Historic-Site",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "hut"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "text-justify": "left",
                "text-max-width": 5,
                "text-field": {
                    "stops": [
                        [
                            6,
                            ""
                        ],
                        [
                            12,
                            "{name}"
                        ]
                    ]
                },
                "text-offset": [
                    1,
                    0
                ],
                "text-anchor": "left",
                "text-size": 10,
                "icon-size": 1,
                "icon-image": "building_pnt_hut",
                "text-font": [
                    "Roboto Bold"
                ]
            },
            "paint": {
                "text-color": "rgba(73, 68, 68, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1.5,
                "text-opacity": 1
            },
            "id": "Poi-Hut-Label",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "kiln"
                ]
            ],
            "layout": {
                "text-justify": "right",
                "text-field": "{class}",
                "text-offset": [
                    1,
                    0
                ],
                "text-anchor": "left",
                "text-size": 10,
                "icon-size": 0.75,
                "icon-image": "circle_pnt_line",
                "text-font": [
                    "Roboto Light"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1.5
            },
            "id": "Poi-Kiln",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "ladder"
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "text-field": "ladder",
                "text-font": [
                    "Roboto Light"
                ],
                "text-anchor": "top"
            },
            "id": "Poi-Ladder",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "ladder_pt"
                ]
            ],
            "layout": {
                "text-field": "ladder",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 13,
                "text-allow-overlap": true,
                "icon-size": 0.5,
                "icon-image": "circle_pnt_fill",
                "text-font": [
                    "Roboto Light"
                ]
            },
            "paint": {
                "text-halo-width": 1.5,
                "text-halo-blur": 1,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Poi-Ladder-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "mast"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "visibility": "visible",
                "text-field": "",
                "text-offset": [
                    0,
                    1
                ],
                "text-size": 10,
                "text-allow-overlap": false,
                "icon-size": 1.1,
                "icon-image": "mast_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "icon-opacity": 0.85
            },
            "id": "Poi-Mast-Label-Triangle",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "mine"
                ]
            ],
            "layout": {
                "text-justify": "left",
                "text-max-width": 4,
                "visibility": "visible",
                "icon-anchor": "center",
                "text-field": "{name} {substance} {visibility} {status} ",
                "text-offset": [
                    1,
                    0
                ],
                "text-anchor": "left",
                "text-size": 10,
                "icon-size": 0.7,
                "icon-image": "square_pnt_fill",
                "text-font": [
                    "Open Sans Bold Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.75,
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": 0.8,
                "text-halo-width": 0.75,
                "text-opacity": 0.9
            },
            "id": "Poi-Mine-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "monument"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "text-radial-offset": 0,
                "visibility": "visible",
                "text-field": "{name}",
                "text-anchor": "left",
                "text-size": 9,
                "text-allow-overlap": true,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1.2
                        ],
                        [
                            16,
                            1.6
                        ]
                    ]
                },
                "icon-image": "monument_pnt",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-justify": "left",
                "text-max-width": 5,
                "icon-anchor": "center",
                "text-offset": [
                    1.5,
                    0
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(98, 53, 0, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": 0.85,
                "text-halo-width": 2
            },
            "id": "Poi-Monument",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "pa"
                ]
            ],
            "layout": {
                "text-ignore-placement": true,
                "icon-allow-overlap": true,
                "icon-image": "pa_pnt",
                "text-anchor": "center"
            },
            "paint": {
                "icon-opacity": {
                    "stops": [
                        [
                            6,
                            0.6
                        ],
                        [
                            11,
                            0.7
                        ],
                        [
                            15,
                            0.8
                        ],
                        [
                            19,
                            1
                        ]
                    ]
                }
            },
            "id": "Poi-Pa",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "pylon"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "auto",
                "icon-pitch-alignment": "map",
                "text-pitch-alignment": "map",
                "icon-image": "square_pnt_line",
                "text-font": [],
                "text-rotation-alignment": "map"
            },
            "paint": {
                "icon-opacity": {
                    "stops": [
                        [
                            15,
                            0.01
                        ],
                        [
                            16,
                            0.6
                        ]
                    ]
                }
            },
            "id": "Poi-Pylon",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "quarry"
                ],
                [
                    "!has",
                    "name"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "text-justify": "center",
                "text-max-width": 4,
                "visibility": "visible",
                "icon-anchor": "center",
                "text-field": "{class} {substance} {status}",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 10,
                "icon-size": 0.6,
                "icon-image": "square_pnt_fill",
                "text-font": [
                    "Open Sans Bold Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.75,
                "text-color": "rgba(47, 47, 47, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": 0.65,
                "text-halo-width": 1
            },
            "id": "Poi-Quarry-Poly-NoName",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "quarry"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "visibility": "visible",
                "text-field": "{name} {substance} {status}",
                "text-anchor": "left",
                "text-size": 10,
                "text-allow-overlap": true,
                "icon-size": 0.6,
                "icon-image": "square_pnt_fill",
                "text-font": [
                    "Open Sans Bold Italic"
                ],
                "text-justify": "left",
                "text-max-width": 4,
                "icon-anchor": "center",
                "text-offset": [
                    1,
                    0
                ],
                "icon-offset": [
                    0,
                    0
                ]
            },
            "paint": {
                "icon-translate-anchor": "viewport",
                "text-halo-blur": 0.75,
                "text-color": "rgba(47, 47, 47, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": 0.65,
                "text-halo-width": 0.75
            },
            "id": "Poi-Quarry-Poly-Name",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "racetrack"
                ],
                [
                    "==",
                    "class",
                    "racetrack_ln"
                ]
            ],
            "layout": {
                "text-pitch-alignment": "viewport",
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Bold"
                ],
                "text-rotation-alignment": "viewport",
                "text-size": 10
            },
            "paint": {
                "icon-translate-anchor": "viewport",
                "text-halo-blur": 0.5,
                "text-color": "rgba(129, 123, 123, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1,
                "text-translate-anchor": "viewport"
            },
            "id": "Poi-Racetrack-Label",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "radar_dome"
                ]
            ],
            "layout": {
                "icon-image": "circle_pnt_fill",
                "icon-size": 0.5
            },
            "id": "Poi-Radar-Dome",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "railway"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "visibility": "visible",
                "text-field": {
                    "stops": [
                        [
                            12,
                            "{name}"
                        ],
                        [
                            13,
                            "{name}"
                        ]
                    ]
                },
                "text-anchor": "left",
                "text-size": {
                    "stops": [
                        [
                            13,
                            10
                        ],
                        [
                            16,
                            10
                        ],
                        [
                            17,
                            16
                        ],
                        [
                            18,
                            19
                        ]
                    ]
                },
                "icon-size": {
                    "stops": [
                        [
                            12,
                            0.4
                        ],
                        [
                            13,
                            1
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "icon-image": {
                    "stops": [
                        [
                            12,
                            "rail_station_pnt_red"
                        ],
                        [
                            13,
                            "rail_station_train_diesel_pnt_red"
                        ]
                    ]
                },
                "icon-optional": true,
                "text-font": [
                    "Open Sans Bold Italic"
                ],
                "text-justify": "left",
                "text-max-width": 5,
                "icon-anchor": "center",
                "text-offset": [
                    1.25,
                    1.5
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(94, 94, 94, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1.5,
                "text-translate": [
                    0,
                    -15
                ]
            },
            "id": "Poi-Railway-Symbol",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "redoubt"
                ]
            ],
            "layout": {
                "icon-image": "redoubt_pnt"
            },
            "id": "Poi-Redoubt",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rifle_range"
                ]
            ],
            "layout": {
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1.2
                        ],
                        [
                            15,
                            1.5
                        ]
                    ]
                },
                "icon-image": "rifle_range_pnt",
                "text-field": "",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": 9
            },
            "paint": {
                "icon-opacity": {
                    "stops": [
                        [
                            12,
                            0.25
                        ],
                        [
                            13,
                            0.9
                        ]
                    ]
                }
            },
            "id": "Poi-RifleRange-Label",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "satellite_pt"
                ]
            ],
            "layout": {
                "icon-allow-overlap": false,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1.2
                        ],
                        [
                            15,
                            1.5
                        ],
                        [
                            17,
                            1.7
                        ]
                    ]
                },
                "visibility": "visible",
                "icon-image": "satellite_station_pnt"
            },
            "id": "Poi-Satellite-Station-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "shaft"
                ]
            ],
            "layout": {
                "icon-image": "shaft_pnt",
                "icon-size": 0.85
            },
            "paint": {
                "icon-opacity": 0.9
            },
            "id": "Poi-Shaft",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "sinkhole"
                ]
            ],
            "layout": {
                "icon-image": "sinkhole_pnt"
            },
            "id": "Poi-Sinkhole",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "siphon_pt"
                ]
            ],
            "layout": {
                "icon-image": "circle_pnt_fill",
                "icon-size": 0.8
            },
            "paint": {
                "icon-opacity": 0.85
            },
            "id": "Poi-Siphon-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "showground"
                ]
            ],
            "layout": {
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1.2
                        ],
                        [
                            15,
                            1.5
                        ]
                    ]
                },
                "icon-image": "showground_pnt",
                "text-field": "",
                "text-font": [
                    "Open Sans Bold Italic"
                ],
                "text-size": 9
            },
            "paint": {
                "text-color": "rgba(121, 195, 128, 0.2)",
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Poi-Showground-Symbol",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "soakhole"
                ]
            ],
            "layout": {
                "icon-size": {
                    "stops": [
                        [
                            12,
                            0.25
                        ],
                        [
                            14,
                            0.5
                        ],
                        [
                            19,
                            1
                        ]
                    ]
                },
                "visibility": "visible",
                "icon-image": "well_pnt_small_fill",
                "text-field": "",
                "text-font": [],
                "text-size": 10
            },
            "paint": {
                "icon-opacity": 0.8
            },
            "id": "Poi-Soakhole",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "sports_field"
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Bold Italic"
                ],
                "text-size": 9
            },
            "paint": {
                "text-halo-width": 1,
                "text-color": "rgba(37, 108, 41, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Poi-SportsField-Label",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "stockyard"
                ]
            ],
            "layout": {
                "icon-image": "stockyard_pnt",
                "icon-size": {
                    "stops": [
                        [
                            12,
                            0.9
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            },
            "paint": {
                "icon-opacity": {
                    "stops": [
                        [
                            12,
                            0.25
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "id": "Poi-Stockyard",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "trig"
                ]
            ],
            "layout": {
                "text-justify": "center",
                "visibility": "visible",
                "text-field": "{elevation} m",
                "text-offset": [
                    0,
                    1.3
                ],
                "text-anchor": "top",
                "text-size": 9,
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-halo-width": 0.75,
                "text-halo-blur": 0.75,
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Poi-Trig-Elevation",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "trig"
                ]
            ],
            "layout": {
                "text-justify": "left",
                "visibility": "visible",
                "text-field": "{name}",
                "text-offset": [
                    0,
                    -0.7
                ],
                "text-anchor": "bottom",
                "text-size": 10,
                "icon-size": 0.75,
                "icon-image": "triangle_pnt_fill",
                "text-font": [
                    "Open Sans Bold Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.75,
                "text-color": "rgba(69, 50, 50, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": 0.6,
                "text-halo-width": 0.75,
                "text-opacity": {
                    "stops": [
                        [
                            12,
                            0.2
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                }
            },
            "id": "Poi-Trig-Symbol",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "well"
                ]
            ],
            "layout": {
                "text-justify": "left",
                "icon-anchor": "center",
                "text-field": "{status}",
                "text-offset": [
                    0.75,
                    0
                ],
                "text-anchor": "left",
                "text-size": 10,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1
                        ],
                        [
                            14,
                            1.4
                        ],
                        [
                            15,
                            1
                        ],
                        [
                            17,
                            1.4
                        ]
                    ]
                },
                "icon-image": {
                    "stops": [
                        [
                            12,
                            "well_pnt_small_line"
                        ],
                        [
                            14,
                            "well_pnt_small_line"
                        ],
                        [
                            15,
                            "well_pnt_large_line"
                        ],
                        [
                            16,
                            "well_pnt_large_line"
                        ]
                    ]
                },
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.75,
                "text-color": "rgba(133, 112, 112, 1)",
                "text-halo-color": "rgba(242, 242, 242, 1)",
                "text-halo-width": 0.75
            },
            "id": "Poi-Well",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "power"
                ],
                [
                    "==",
                    "power_source",
                    "wind_turbine"
                ]
            ],
            "layout": {
                "text-justify": "center",
                "visibility": "visible",
                "icon-anchor": "bottom",
                "text-field": "",
                "text-offset": [
                    0,
                    0
                ],
                "icon-offset": [
                    0,
                    0
                ],
                "text-anchor": "top",
                "text-size": 8.5,
                "icon-size": {
                    "stops": [
                        [
                            11,
                            1.2
                        ],
                        [
                            15,
                            1.5
                        ],
                        [
                            18,
                            1.8
                        ]
                    ]
                },
                "icon-image": "windmill_pnt",
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-color": "rgba(63, 44, 44, 1)",
                "text-halo-color": "rgba(252, 249, 249, 1)",
                "icon-opacity": {
                    "stops": [
                        [
                            12,
                            0.25
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                },
                "text-halo-width": 1
            },
            "id": "Poi-Windmill",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wreck"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-allow-overlap": true,
                "text-justify": "left",
                "text-max-width": 7,
                "icon-anchor": "center",
                "text-field": "{name}",
                "text-anchor": "left",
                "text-size": 11,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1.3
                        ],
                        [
                            14,
                            1.5
                        ]
                    ]
                },
                "icon-image": "wreck_ship_pnt",
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-color": "rgba(69, 50, 50, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1,
                "text-translate": [
                    10,
                    0
                ]
            },
            "id": "Poi-Wreck",
            "source": "LINZ Basemaps",
            "source-layer": "poi",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "landuse",
                    "orchard"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "icon-pitch-alignment": "viewport",
                "text-justify": "auto",
                "visibility": "visible",
                "icon-anchor": "center",
                "text-field": {
                    "stops": [
                        [
                            6,
                            ""
                        ],
                        [
                            16,
                            "{landuse}"
                        ]
                    ]
                },
                "text-anchor": "top",
                "text-size": {
                    "stops": [
                        [
                            14,
                            10
                        ],
                        [
                            20,
                            16
                        ]
                    ]
                },
                "icon-image": "orchard_pnt_dual",
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-halo-color": "rgba(255, 255, 255, 0.59)",
                "text-translate-anchor": "viewport",
                "text-halo-blur": 0.5,
                "text-color": "rgba(27, 77, 29, 1)",
                "icon-opacity": 0.9,
                "text-halo-width": 1,
                "text-translate": [
                    0,
                    6
                ]
            },
            "id": "Orchard-Label",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "landuse",
                    "vineyard"
                ]
            ],
            "layout": {
                "icon-pitch-alignment": "viewport",
                "text-justify": "auto",
                "visibility": "visible",
                "icon-anchor": "center",
                "text-field": {
                    "stops": [
                        [
                            6,
                            ""
                        ],
                        [
                            16,
                            "{landuse}"
                        ]
                    ]
                },
                "text-anchor": "top",
                "text-size": {
                    "stops": [
                        [
                            14,
                            10
                        ],
                        [
                            20,
                            16
                        ]
                    ]
                },
                "icon-image": "vineyard_pnt_dual",
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-halo-color": "rgba(255, 255, 255, 0.59)",
                "text-translate-anchor": "viewport",
                "text-halo-blur": 0.5,
                "text-color": "rgba(17, 63, 29, 0.85)",
                "icon-opacity": 0.9,
                "text-halo-width": 1,
                "text-translate": [
                    0,
                    6
                ]
            },
            "id": "Vineyard-Label",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol",
            "minzoom": 14
        },
        {
            "filter": [
                "none"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-extrusion-height": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            1.5
                        ],
                        [
                            14,
                            2.5
                        ]
                    ]
                },
                "fill-extrusion-vertical-gradient": true,
                "fill-extrusion-opacity": 0.5,
                "fill-extrusion-translate-anchor": "viewport",
                "fill-extrusion-color": "rgba(190, 190, 190, 1)"
            },
            "id": "Building3D",
            "source": "LINZ Basemaps",
            "source-layer": "building",
            "type": "fill-extrusion",
            "minzoom": 18
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "brunnel",
                    "tunnel"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "bevel"
            },
            "paint": {
                "line-opacity": 1,
                "line-blur": 0,
                "line-width": {
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            15,
                            1.5
                        ],
                        [
                            19,
                            4
                        ]
                    ]
                },
                "line-gap-width": 8,
                "line-dasharray": [
                    4,
                    2.5
                ],
                "line-color": "rgba(98, 88, 13, 1)"
            },
            "id": "Transport-Tunnel-VT",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "line",
            "minzoom": 10
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "powerline"
                ],
                [
                    "has",
                    "support_ty"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-blur": 0.75,
                "line-width": {
                    "stops": [
                        [
                            9,
                            0.75
                        ],
                        [
                            12,
                            1
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": "rgba(57, 57, 57, 1)"
            },
            "id": "Landuse-Powerline",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "powerline"
                ],
                [
                    "==",
                    "support_ty",
                    "pylon"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter"
            },
            "maxzoom": 14,
            "paint": {
                "line-translate-anchor": "map",
                "line-blur": 0.75,
                "line-width": {
                    "stops": [
                        [
                            9,
                            0.75
                        ],
                        [
                            12,
                            1
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": "rgba(57, 57, 57, 1)"
            },
            "id": "Landuse-Powerline-Pylon",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "telephone"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-blur": 0.75,
                "line-width": {
                    "stops": [
                        [
                            9,
                            0.75
                        ],
                        [
                            12,
                            1
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": "rgba(57, 57, 57, 1)"
            },
            "id": "Landuse-Telephone",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "walkwire"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "butt",
                "line-join": "miter"
            },
            "paint": {
                "line-translate-anchor": "map",
                "line-blur": 0.75,
                "line-width": {
                    "stops": [
                        [
                            9,
                            0.75
                        ],
                        [
                            12,
                            3
                        ],
                        [
                            18,
                            5
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-color": "rgba(57, 57, 57, 1)"
            },
            "id": "Landuse-Walkwire",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "line",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "dam_ln"
                ]
            ],
            "layout": {
                "text-pitch-alignment": "viewport",
                "text-justify": "center",
                "text-field": "{name}",
                "text-offset": [
                    0,
                    0
                ],
                "icon-offset": [
                    0,
                    0
                ],
                "text-rotation-alignment": "auto",
                "text-anchor": "bottom",
                "icon-keep-upright": false,
                "symbol-placement": "line",
                "text-font": [
                    "Roboto Black Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.75,
                "text-color": "rgba(78, 78, 78, 1)",
                "text-halo-color": "rgba(252, 252, 252, 1)",
                "text-halo-width": 0.75
            },
            "id": "Landuse-Dam-Label",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "gravel_pit"
                ]
            ],
            "layout": {
                "icon-size": 0.8,
                "text-field": "",
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": {
                    "stops": [
                        [
                            12,
                            6
                        ],
                        [
                            15,
                            10
                        ]
                    ]
                }
            },
            "id": "Landuse-GravelPit-Label",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "grave"
                ]
            ],
            "layout": {
                "icon-size": 1,
                "visibility": "visible",
                "icon-image": "grave_pnt",
                "text-field": "",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "id": "Landuse-Grave-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "landfill"
                ]
            ],
            "layout": {
                "text-justify": "left",
                "text-max-width": 4,
                "visibility": "visible",
                "icon-anchor": "right",
                "text-field": "{name}",
                "text-offset": [
                    0.5,
                    0
                ],
                "text-anchor": "left",
                "text-size": 12,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            1.2
                        ],
                        [
                            16,
                            1.5
                        ]
                    ]
                },
                "icon-image": "landfill_pnt",
                "text-font": [
                    "Roboto Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(28, 25, 17, 1)",
                "text-halo-color": "rgba(247, 165, 66, 0.75)",
                "text-halo-width": 1.5
            },
            "id": "Landuse-Landfill-Symbol",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "wetland_feature",
                    "mangrove"
                ]
            ],
            "layout": {
                "icon-image": "mangrove_pnt",
                "text-font": []
            },
            "maxzoom": 14,
            "paint": {
                "icon-opacity": 0.8
            },
            "id": "Landuse-Mangrove-Symbol",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "marine_farm"
                ]
            ],
            "layout": {
                "text-field": "{species}",
                "text-font": [
                    "Roboto Bold Italic"
                ],
                "text-size": 10
            },
            "paint": {
                "text-halo-width": 1.5,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 1)"
            },
            "id": "Landuse-MarineFarm-Label",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "pumice_pit"
                ]
            ],
            "layout": {
                "text-field": {
                    "stops": [
                        [
                            6,
                            ""
                        ],
                        [
                            15,
                            "{class}"
                        ]
                    ]
                },
                "text-font": [
                    "Open Sans Regular"
                ],
                "text-size": {
                    "stops": [
                        [
                            12,
                            6
                        ],
                        [
                            15,
                            10
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-width": 1.5,
                "text-color": "rgba(34, 34, 34, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)"
            },
            "id": "Landuse-PumicePit-Label",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "tower"
                ]
            ],
            "layout": {
                "icon-size": 1,
                "icon-image": "tower_pnt",
                "text-field": "",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "id": "Landuse-Tower",
            "source": "LINZ Basemaps",
            "source-layer": "landuse",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "tree_pt"
                ]
            ],
            "paint": {
                "circle-radius": {
                    "stops": [
                        [
                            8,
                            1.5
                        ],
                        [
                            12,
                            2.5
                        ]
                    ]
                },
                "circle-color": "rgba(121, 160, 72, 0.4)"
            },
            "id": "Landcover-Tree-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "circle",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "fumarole"
                ]
            ],
            "layout": {
                "text-field": {
                    "stops": [
                        [
                            15,
                            ""
                        ],
                        [
                            16,
                            "{class}"
                        ],
                        [
                            17,
                            "{class}"
                        ]
                    ]
                },
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 12,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            0.4
                        ],
                        [
                            13,
                            0.65
                        ],
                        [
                            14,
                            0.7
                        ]
                    ]
                },
                "icon-image": "fumarole_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "icon-opacity": {
                    "stops": [
                        [
                            12,
                            0.25
                        ],
                        [
                            13,
                            1
                        ]
                    ]
                },
                "text-opacity": {
                    "stops": [
                        [
                            16,
                            0.2
                        ],
                        [
                            17,
                            1
                        ]
                    ]
                },
                "text-color": "rgba(176, 0, 0, 1)"
            },
            "id": "Landcover-Fumarole",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "grass"
                ],
                [
                    "==",
                    "grass_type",
                    "golf_course"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name}",
                "text-anchor": "left",
                "text-size": 9,
                "icon-size": 1.2,
                "icon-image": "golf_course_pnt_dual",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-justify": "left",
                "text-max-width": 6,
                "icon-anchor": "right",
                "text-offset": [
                    0.5,
                    0
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(27, 77, 29, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1.5
            },
            "id": "Landcover-GolfCourse-Symbol",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rock_pt"
                ]
            ],
            "layout": {
                "icon-image": "rock_pnt_dual",
                "icon-size": 1
            },
            "id": "Landcover-Rock-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "rock_outcrop"
                ]
            ],
            "layout": {
                "icon-allow-overlap": false,
                "visibility": "visible",
                "text-field": "{name}",
                "icon-offset": [
                    -3,
                    -6
                ],
                "text-anchor": "top",
                "text-size": 12,
                "icon-image": "rock_outcrop_large_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-halo-color": "rgb(255,255,255)"
            },
            "id": "Landcover_RockOutcrop",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wetland"
                ],
                [
                    "==",
                    "wetland_type",
                    "swamp"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "text-justify": "center",
                "visibility": "visible",
                "icon-anchor": "center",
                "text-field": "{name}",
                "text-anchor": "center",
                "text-size": 12,
                "text-allow-overlap": true,
                "text-font": [
                    "Open Sans Light Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(2, 46, 39, 1)",
                "text-halo-color": "rgba(252, 252, 252, 1)",
                "text-halo-width": 0.5,
                "text-translate": [
                    8,
                    0
                ]
            },
            "id": "Landcover-Swamp-Name",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol",
            "minzoom": 14
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wetland"
                ],
                [
                    "==",
                    "wetland_type",
                    "swamp"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "text-justify": "right",
                "visibility": "visible",
                "icon-anchor": "center",
                "text-field": "{name}",
                "text-anchor": "left",
                "text-size": 12,
                "text-allow-overlap": true,
                "icon-image": "swamp_pnt",
                "text-font": [
                    "Open Sans Light Italic"
                ]
            },
            "maxzoom": 14,
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(2, 46, 39, 1)",
                "text-halo-color": "rgba(252, 252, 252, 1)",
                "text-halo-width": 0.5,
                "text-translate": [
                    8,
                    0
                ]
            },
            "id": "Landcover-Swamp-Symbol",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "wetland"
                ],
                [
                    "==",
                    "wetland_type",
                    "swamp_pt"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "icon-image": "swamp_pnt",
                "icon-size": {
                    "stops": [
                        [
                            6,
                            0.4
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            15,
                            1
                        ],
                        [
                            19,
                            1.3
                        ]
                    ]
                }
            },
            "id": "Landcover-Swamp-pt",
            "source": "LINZ Basemaps",
            "source-layer": "landcover",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "layout": {
                "text-allow-overlap": false,
                "text-field": "{housenumber}",
                "text-font": [
                    "Roboto Bold Italic"
                ],
                "text-anchor": "bottom",
                "text-size": {
                    "stops": [
                        [
                            17,
                            8
                        ],
                        [
                            19,
                            10
                        ]
                    ]
                }
            },
            "paint": {
                "icon-color": "rgba(0, 0, 0, 1)",
                "text-halo-blur": 20,
                "text-color": "rgba(47, 47, 47, 1)",
                "text-halo-color": "rgba(255, 255, 255, 0.7)",
                "text-halo-width": 0.25
            },
            "id": "Housenumber",
            "source": "LINZ Basemaps",
            "source-layer": "housenumber",
            "type": "symbol",
            "minzoom": 17
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "channel"
                ],
                [
                    "==",
                    "channel_type",
                    "flume_cl"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "map",
                "icon-pitch-alignment": "map",
                "visibility": "visible",
                "text-field": "",
                "text-anchor": "center",
                "text-size": 14,
                "icon-text-fit": "none",
                "symbol-placement": "line-center",
                "icon-image": "flume_pnt_blue",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-pitch-alignment": "auto",
                "text-justify": "center",
                "icon-anchor": "center",
                "text-offset": [
                    0,
                    0.015
                ],
                "text-rotation-alignment": "auto",
                "symbol-z-order": "auto"
            },
            "paint": {
                "text-color": "rgba(44, 44, 44, 1)",
                "text-halo-color": "rgba(239, 239, 239, 0.80)"
            },
            "id": "Waterway-Flume-Name",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "stream"
                ],
                [
                    "==",
                    "stream_feature",
                    "rapid_cl"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "symbol-spacing": 750,
                "visibility": "visible",
                "icon-anchor": "center",
                "text-field": "{name}",
                "text-anchor": "bottom",
                "text-size": 12,
                "symbol-placement": "line",
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-halo-blur": 1,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 0.80)",
                "text-halo-width": 1.5
            },
            "id": "Waterway-Rapid-Names",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "spring"
                ],
                [
                    "==",
                    "temp",
                    "cold"
                ]
            ],
            "layout": {
                "text-justify": "center",
                "text-max-width": 8,
                "text-field": {
                    "stops": [
                        [
                            13,
                            ""
                        ],
                        [
                            16,
                            "{name}"
                        ],
                        [
                            17,
                            "{name} (cold spring)"
                        ]
                    ]
                },
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 12,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            0.3
                        ],
                        [
                            15,
                            0.7
                        ]
                    ]
                },
                "icon-image": "spring_cold_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "icon-color": "rgba(5, 0, 168, 1)",
                "text-halo-blur": 0.5,
                "text-color": "rgba(20, 125, 228, 1)",
                "text-halo-color": "rgb(255,255,255)",
                "text-halo-width": 1.5
            },
            "id": "Water-Spring-Cold",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "spring"
                ],
                [
                    "==",
                    "temp",
                    "hot"
                ]
            ],
            "layout": {
                "text-max-width": 8,
                "visibility": "visible",
                "text-field": {
                    "stops": [
                        [
                            13,
                            ""
                        ],
                        [
                            14,
                            "{name}"
                        ],
                        [
                            16,
                            "{name} (hot spring)"
                        ]
                    ]
                },
                "text-offset": [
                    0,
                    0.5
                ],
                "text-anchor": "top",
                "text-size": 12,
                "icon-size": {
                    "stops": [
                        [
                            12,
                            0.4
                        ],
                        [
                            15,
                            0.7
                        ]
                    ]
                },
                "icon-image": "spring_hot_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(141, 0, 3, 1)",
                "text-halo-color": "rgb(255,255,255)",
                "text-halo-width": 1.5
            },
            "id": "Water-Spring-Hot",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "in",
                    "hway_num",
                    "25A",
                    "20A",
                    "20B",
                    "29A",
                    "30A",
                    "74A",
                    "67A"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{hway_num}",
                "text-size": {
                    "stops": [
                        [
                            8,
                            9
                        ],
                        [
                            11,
                            10
                        ],
                        [
                            15,
                            14
                        ]
                    ]
                },
                "icon-text-fit": "none",
                "icon-size": {
                    "stops": [
                        [
                            8,
                            1.2
                        ],
                        [
                            12,
                            1.5
                        ],
                        [
                            15,
                            1.7
                        ]
                    ]
                },
                "symbol-placement": "line",
                "icon-image": "highway_pnt_wide",
                "text-font": [
                    "Open Sans Bold"
                ],
                "icon-padding": 2,
                "symbol-spacing": {
                    "stops": [
                        [
                            6,
                            500
                        ],
                        [
                            13,
                            400
                        ]
                    ]
                },
                "text-pitch-alignment": "viewport",
                "icon-text-fit-padding": [
                    1,
                    4,
                    3,
                    3
                ],
                "text-justify": "center",
                "icon-anchor": "center",
                "icon-offset": [
                    0,
                    1
                ],
                "text-keep-upright": true,
                "text-rotation-alignment": "viewport",
                "icon-keep-upright": false,
                "icon-rotate": 0
            },
            "paint": {
                "text-translate-anchor": "map",
                "icon-translate-anchor": "map",
                "text-color": "rgba(255, 255, 255, 1)"
            },
            "id": "All-Highway-Labels-three",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "has",
                    "hway_num"
                ],
                [
                    "!in",
                    "hway_num",
                    "6,94",
                    "2,50",
                    "1,3",
                    "12,15",
                    "14,15",
                    "6,96",
                    "25A",
                    "20A",
                    "20B",
                    "29A",
                    "30A",
                    "74A",
                    "67A"
                ],
                [
                    "!=",
                    "lane_count",
                    1
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{hway_num}",
                "text-size": {
                    "stops": [
                        [
                            8,
                            9
                        ],
                        [
                            11,
                            10
                        ],
                        [
                            15,
                            14
                        ]
                    ]
                },
                "icon-text-fit": "none",
                "icon-size": {
                    "stops": [
                        [
                            8,
                            1.2
                        ],
                        [
                            12,
                            1.5
                        ],
                        [
                            15,
                            1.7
                        ]
                    ]
                },
                "symbol-placement": "line",
                "icon-image": "highway_pnt_standard",
                "text-font": [
                    "Open Sans Bold"
                ],
                "icon-padding": 2,
                "symbol-spacing": {
                    "stops": [
                        [
                            6,
                            500
                        ],
                        [
                            13,
                            400
                        ]
                    ]
                },
                "text-pitch-alignment": "viewport",
                "icon-text-fit-padding": [
                    1,
                    4,
                    3,
                    3
                ],
                "text-justify": "center",
                "icon-anchor": "center",
                "icon-offset": [
                    0,
                    1
                ],
                "text-keep-upright": true,
                "text-rotation-alignment": "viewport",
                "icon-keep-upright": false,
                "icon-rotate": 0
            },
            "paint": {
                "text-translate-anchor": "map",
                "icon-translate-anchor": "map",
                "text-color": "rgba(255, 255, 255, 1)"
            },
            "id": "All-Highway-Labels-standard",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 8
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "ferry"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-allow-overlap": false,
                "text-pitch-alignment": "auto",
                "text-justify": "center",
                "icon-text-fit": "none",
                "symbol-z-order": "auto",
                "icon-size": 0.5,
                "symbol-placement": "line-center",
                "icon-ignore-placement": false,
                "icon-image": "star_pnt_fill",
                "text-font": []
            },
            "id": "Transport-Ferry-Symbol",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "brunnel",
                    "tunnel"
                ]
            ],
            "layout": {
                "symbol-spacing": 100,
                "visibility": "visible",
                "text-field": "{brunnel}",
                "text-offset": {
                    "stops": [
                        [
                            15,
                            [
                                0,
                                -1.25
                            ]
                        ],
                        [
                            17,
                            [
                                0,
                                -1.75
                            ]
                        ],
                        [
                            19,
                            [
                                0,
                                -6
                            ]
                        ],
                        [
                            20,
                            [
                                0,
                                -9
                            ]
                        ],
                        [
                            22,
                            [
                                0,
                                -16
                            ]
                        ]
                    ]
                },
                "text-size": 10,
                "symbol-placement": "line",
                "text-font": [
                    "Roboto Black"
                ]
            },
            "paint": {
                "text-halo-width": 2,
                "text-color": "rgba(80, 75, 75, 1)",
                "text-halo-color": "rgba(230, 230, 230, 0.5)"
            },
            "id": "Transport-Tunnel-Label",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "has",
                    "name"
                ],
                [
                    "!=",
                    "subclass",
                    "foot_route_closed"
                ],
                [
                    "!=",
                    "subclass",
                    "foot_closed"
                ]
            ],
            "layout": {
                "icon-pitch-alignment": "auto",
                "symbol-spacing": 250,
                "text-transform": "none",
                "text-justify": "center",
                "visibility": "visible",
                "text-field": "{name}",
                "text-anchor": "center",
                "text-size": {
                    "stops": [
                        [
                            13,
                            8
                        ],
                        [
                            15,
                            11
                        ],
                        [
                            18,
                            10
                        ],
                        [
                            19,
                            30
                        ],
                        [
                            22,
                            140
                        ]
                    ]
                },
                "icon-text-fit": "both",
                "symbol-placement": "line",
                "icon-ignore-placement": false,
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-width": 2.5,
                "text-opacity": 0.9,
                "text-halo-color": "rgba(243, 243, 242, 0.9)"
            },
            "id": "All-Road-Labels",
            "source": "LINZ Basemaps",
            "source-layer": "transportation",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "layout": {
                "icon-rotation-alignment": "viewport",
                "icon-pitch-alignment": "viewport",
                "visibility": "visible",
                "text-field": "{name}",
                "text-anchor": "top",
                "text-size": 10,
                "text-allow-overlap": false,
                "icon-text-fit": "none",
                "icon-size": 1.2,
                "icon-ignore-placement": false,
                "icon-image": "airport_airport_pnt_fill",
                "text-font": [
                    "Open Sans Bold Italic"
                ],
                "symbol-spacing": 250,
                "text-pitch-alignment": "auto",
                "text-justify": "center",
                "text-max-width": 5,
                "icon-anchor": "bottom",
                "icon-offset": [
                    0,
                    0
                ],
                "text-rotation-alignment": "auto",
                "text-padding": 2
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(129, 123, 123, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "icon-opacity": 0.8,
                "text-halo-width": 1
            },
            "id": "Aeroway-Aerodrome-Label",
            "source": "LINZ Basemaps",
            "source-layer": "aerodrome_label",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "runway"
                ],
                [
                    "!has",
                    "surface"
                ]
            ],
            "layout": {
                "text-justify": "left",
                "text-field": "airstrip",
                "text-font": [
                    "Roboto Light"
                ],
                "text-anchor": "left",
                "text-size": 10
            },
            "paint": {
                "text-halo-width": 1.5,
                "text-halo-blur": 0.5,
                "text-halo-color": "rgba(246, 246, 246, 1)"
            },
            "id": "Aeroway-Runway-Grass-Label",
            "source": "LINZ Basemaps",
            "source-layer": "aeroway",
            "type": "symbol",
            "minzoom": 15
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "helipad"
                ]
            ],
            "layout": {
                "icon-image": "helipad_pnt_fill",
                "text-font": [
                    "Open Sans Regular"
                ],
                "icon-size": 1.25
            },
            "paint": {
                "icon-opacity": 0.8
            },
            "id": "Aeroway-Helipads",
            "source": "LINZ Basemaps",
            "source-layer": "aeroway",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "reef"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "text-max-width": 4,
                "visibility": "visible",
                "text-field": "{name}",
                "text-offset": [
                    0,
                    1
                ],
                "text-anchor": "center",
                "text-size": 12,
                "text-font": [
                    "Open Sans Italic"
                ]
            },
            "paint": {
                "text-halo-width": 2,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 1)"
            },
            "id": "All-Reef-Names",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "lake"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "text-max-width": 4,
                "visibility": "visible",
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-size": 12
            },
            "paint": {
                "text-halo-width": 2,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 1)"
            },
            "id": "All-Lake-Names",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "symbol",
            "minzoom": 11
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "canal"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "icon-allow-overlap": false,
                "visibility": "visible",
                "text-field": "{name}",
                "text-anchor": "bottom",
                "text-size": 12,
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "icon-ignore-placement": false,
                "text-font": [
                    "Open Sans Italic"
                ],
                "symbol-spacing": 1000,
                "text-justify": "center",
                "icon-anchor": "center",
                "text-ignore-placement": true,
                "text-max-angle": 35
            },
            "paint": {
                "text-halo-blur": 1,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 0.80)",
                "text-halo-width": 1.5
            },
            "id": "All-Canal-Names",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "river"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "icon-allow-overlap": false,
                "visibility": "visible",
                "text-field": "{name}",
                "text-anchor": "bottom",
                "text-size": 12,
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "icon-ignore-placement": false,
                "text-font": [
                    "Open Sans Italic"
                ],
                "symbol-spacing": 1000,
                "text-justify": "center",
                "icon-anchor": "center",
                "text-ignore-placement": true,
                "text-max-angle": 35
            },
            "paint": {
                "text-halo-blur": 1,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 0.80)",
                "text-halo-width": 1.5
            },
            "id": "All-River-Names",
            "source": "LINZ Basemaps",
            "source-layer": "water",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "canal"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "symbol-spacing": 1000,
                "text-field": "{name}",
                "text-anchor": "bottom",
                "text-size": 12,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "symbol-placement": "line",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-max-angle": 35
            },
            "paint": {
                "text-halo-blur": 1,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 0.80)",
                "text-halo-width": 1.5
            },
            "id": "All-Waterway-Canal-Names",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "drain"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "symbol-spacing": 1000,
                "text-field": "{name}",
                "text-anchor": "bottom",
                "text-size": 12,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "symbol-placement": "line",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-max-angle": 35
            },
            "paint": {
                "text-halo-blur": 1,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 0.80)",
                "text-halo-width": 1.5
            },
            "id": "All-Waterway-Drain-Names",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "river"
                ],
                [
                    "has",
                    "name"
                ]
            ],
            "layout": {
                "symbol-spacing": 1000,
                "text-field": "{name}",
                "text-anchor": "bottom",
                "text-size": 12,
                "text-allow-overlap": true,
                "text-ignore-placement": true,
                "symbol-placement": "line",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-max-angle": 35
            },
            "paint": {
                "text-halo-blur": 1,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 0.80)",
                "text-halo-width": 1.5
            },
            "id": "All-Waterway-River-Names",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "waterfall_edge"
                ],
                [
                    "==",
                    "class",
                    "waterfall_ln"
                ]
            ],
            "layout": {
                "text-max-width": 3,
                "text-field": "{name} {height}m",
                "text-anchor": "bottom",
                "text-size": 13,
                "text-allow-overlap": true,
                "symbol-placement": "line",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(239, 239, 239, 1)",
                "text-halo-width": 1.5
            },
            "id": "Waterway-Waterfall-Label",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "symbol"
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "waterfall_pt"
                ]
            ],
            "layout": {
                "icon-allow-overlap": true,
                "visibility": "visible",
                "text-field": "",
                "text-anchor": "bottom",
                "text-size": {
                    "stops": [
                        [
                            12,
                            8
                        ],
                        [
                            16,
                            14
                        ]
                    ]
                },
                "icon-size": 1.5,
                "icon-image": "rapid_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "maxzoom": 14,
            "paint": {
                "text-color": "rgba(0, 140, 204, 1)"
            },
            "id": "Waterway-Waterfall-Pt-Ln",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "symbol",
            "minzoom": 12
        },
        {
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "waterfall_pt"
                ]
            ],
            "layout": {
                "text-rotate": 0,
                "icon-allow-overlap": true,
                "text-max-width": 3,
                "visibility": "visible",
                "text-field": "{name} {height}m",
                "text-offset": [
                    0,
                    1
                ],
                "text-anchor": "top",
                "text-size": {
                    "stops": [
                        [
                            12,
                            8
                        ],
                        [
                            16,
                            12
                        ]
                    ]
                },
                "icon-size": 1.5,
                "icon-image": "waterfall_pnt",
                "text-font": [
                    "Open Sans Regular"
                ]
            },
            "paint": {
                "text-halo-blur": 0.5,
                "text-color": "rgba(0, 140, 204, 1)",
                "text-halo-color": "rgba(232, 232, 232, 1)",
                "text-halo-width": 1.5
            },
            "id": "Waterway-Waterfall-Pt",
            "source": "LINZ Basemaps",
            "source-layer": "waterway",
            "type": "symbol",
            "minzoom": 14
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "water",
                    "bay"
                ],
                [
                    "==",
                    "water",
                    "lagoon"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "auto",
                "text-optional": true,
                "text-variable-anchor": [
                    "top",
                    "bottom-left"
                ],
                "visibility": "visible",
                "text-field": "{name}",
                "text-size": {
                    "stops": [
                        [
                            2,
                            10
                        ],
                        [
                            5,
                            14
                        ],
                        [
                            8,
                            14
                        ],
                        [
                            10,
                            16
                        ],
                        [
                            12,
                            14
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-text-fit": "both",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-pitch-alignment": "viewport",
                "text-letter-spacing": {
                    "stops": [
                        [
                            10,
                            0.08
                        ],
                        [
                            13,
                            0.04
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "text-max-width": 7,
                "text-offset": {
                    "stops": [
                        [
                            4,
                            [
                                0,
                                1.75
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                1.25
                            ]
                        ]
                    ]
                },
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "paint": {
                "icon-halo-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "text-halo-color": "rgba(255, 252, 252, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)",
                "text-translate-anchor": "viewport",
                "icon-color": {
                    "stops": [
                        [
                            6,
                            "rgba(53, 53, 53, 1)"
                        ],
                        [
                            10,
                            "rgba(53, 53, 53, 1)"
                        ]
                    ]
                },
                "text-halo-blur": 1,
                "text-color": "rgba(0, 140, 204, 1)",
                "icon-halo-blur": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            0.5
                        ]
                    ]
                },
                "icon-opacity": 1,
                "text-halo-width": {
                    "stops": [
                        [
                            4,
                            1.5
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            },
            "id": "Place-Names-13-Water",
            "source": "LINZ Basemaps",
            "source-layer": "place",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "natural",
                    "cape"
                ],
                [
                    "==",
                    "natural",
                    "peak"
                ],
                [
                    "==",
                    "natural",
                    "peninsula"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "auto",
                "text-optional": true,
                "text-variable-anchor": [
                    "top",
                    "bottom-left"
                ],
                "visibility": "visible",
                "text-field": "{name}",
                "text-size": {
                    "stops": [
                        [
                            2,
                            10
                        ],
                        [
                            5,
                            14
                        ],
                        [
                            8,
                            14
                        ],
                        [
                            10,
                            16
                        ],
                        [
                            12,
                            14
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-text-fit": "both",
                "text-font": [
                    "Roboto Regular"
                ],
                "text-pitch-alignment": "viewport",
                "text-letter-spacing": {
                    "stops": [
                        [
                            10,
                            0.08
                        ],
                        [
                            13,
                            0.04
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "text-max-width": 7,
                "text-offset": {
                    "stops": [
                        [
                            4,
                            [
                                0,
                                1.75
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                1.25
                            ]
                        ]
                    ]
                },
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "paint": {
                "icon-halo-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "text-halo-color": "rgba(255, 252, 252, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)",
                "text-translate-anchor": "viewport",
                "icon-color": {
                    "stops": [
                        [
                            6,
                            "rgba(53, 53, 53, 1)"
                        ],
                        [
                            10,
                            "rgba(53, 53, 53, 1)"
                        ]
                    ]
                },
                "text-halo-blur": 1,
                "text-color": {
                    "stops": [
                        [
                            6,
                            "rgba(35, 34, 34, 1)"
                        ],
                        [
                            19,
                            "rgba(111, 111, 111, 1)"
                        ]
                    ]
                },
                "icon-halo-blur": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            0.5
                        ]
                    ]
                },
                "icon-opacity": 1,
                "text-halo-width": {
                    "stops": [
                        [
                            4,
                            1.5
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            },
            "id": "Place-Names-13-Natural",
            "source": "LINZ Basemaps",
            "source-layer": "place",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "place",
                    "suburb"
                ],
                [
                    "==",
                    "place",
                    "island"
                ],
                [
                    "==",
                    "place",
                    "village"
                ]
            ],
            "layout": {
                "icon-rotation-alignment": "auto",
                "text-optional": true,
                "text-variable-anchor": [
                    "top",
                    "bottom-left"
                ],
                "visibility": "visible",
                "text-field": "{name}",
                "text-size": {
                    "stops": [
                        [
                            2,
                            10
                        ],
                        [
                            5,
                            16
                        ],
                        [
                            8,
                            16
                        ],
                        [
                            10,
                            17
                        ],
                        [
                            12,
                            16
                        ],
                        [
                            14,
                            16
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-text-fit": "both",
                "text-font": [
                    "Roboto Regular"
                ],
                "text-pitch-alignment": "viewport",
                "text-letter-spacing": {
                    "stops": [
                        [
                            10,
                            0.08
                        ],
                        [
                            13,
                            0.04
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "text-max-width": 7,
                "text-offset": {
                    "stops": [
                        [
                            4,
                            [
                                0,
                                1.75
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                1.25
                            ]
                        ]
                    ]
                },
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "paint": {
                "icon-halo-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "text-halo-color": "rgba(255, 252, 252, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)",
                "text-translate-anchor": "viewport",
                "icon-color": {
                    "stops": [
                        [
                            6,
                            "rgba(53, 53, 53, 1)"
                        ],
                        [
                            10,
                            "rgba(53, 53, 53, 1)"
                        ]
                    ]
                },
                "text-halo-blur": 1,
                "text-color": {
                    "stops": [
                        [
                            6,
                            "rgba(35, 34, 34, 1)"
                        ],
                        [
                            19,
                            "rgba(111, 111, 111, 1)"
                        ]
                    ]
                },
                "icon-halo-blur": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            0.5
                        ]
                    ]
                },
                "icon-opacity": 1,
                "text-halo-width": {
                    "stops": [
                        [
                            4,
                            1.5
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            },
            "id": "Place-Names-13-Place",
            "source": "LINZ Basemaps",
            "source-layer": "place",
            "type": "symbol",
            "minzoom": 13
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "place",
                    "lake"
                ],
                [
                    "==",
                    "water",
                    "seachannel"
                ],
                [
                    "==",
                    "water",
                    "sea"
                ],
                [
                    "==",
                    "water",
                    "bay"
                ],
                [
                    "==",
                    "water",
                    "lagoon"
                ],
                [
                    "==",
                    "water",
                    "seacanyon"
                ],
                [
                    "==",
                    "water",
                    "seamount"
                ],
                [
                    "==",
                    "water",
                    "searidge"
                ]
            ],
            "layout": {
                "icon-pitch-alignment": "auto",
                "text-optional": true,
                "text-variable-anchor": [
                    "center"
                ],
                "visibility": "visible",
                "text-field": "{name}",
                "text-size": {
                    "stops": [
                        [
                            2,
                            10
                        ],
                        [
                            5,
                            12
                        ],
                        [
                            8,
                            14
                        ],
                        [
                            10,
                            15
                        ],
                        [
                            12,
                            16
                        ],
                        [
                            14,
                            16
                        ]
                    ]
                },
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-pitch-alignment": "viewport",
                "text-letter-spacing": {
                    "stops": [
                        [
                            10,
                            0.08
                        ],
                        [
                            13,
                            0.04
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "text-max-width": 6,
                "text-offset": [
                    0,
                    1.75
                ],
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "maxzoom": 13,
            "paint": {
                "icon-halo-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "text-halo-color": "rgba(255, 252, 252, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)",
                "icon-color": "rgba(53, 53, 53, 1)",
                "icon-translate-anchor": "viewport",
                "text-halo-blur": 1,
                "text-color": "rgba(0, 140, 204, 1)",
                "icon-halo-blur": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            0.5
                        ]
                    ]
                },
                "icon-opacity": 1,
                "text-halo-width": {
                    "stops": [
                        [
                            4,
                            1.5
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            },
            "id": "Place-Names-3-12-Water",
            "source": "LINZ Basemaps",
            "source-layer": "place",
            "type": "symbol",
            "minzoom": 3
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "natural",
                    "peak"
                ],
                [
                    "==",
                    "natural",
                    "peninsula"
                ],
                [
                    "==",
                    "natural",
                    "cape"
                ]
            ],
            "layout": {
                "icon-pitch-alignment": "auto",
                "text-optional": true,
                "text-variable-anchor": [
                    "top",
                    "bottom-left"
                ],
                "visibility": "visible",
                "text-field": "{name}",
                "text-size": {
                    "stops": [
                        [
                            2,
                            10
                        ],
                        [
                            5,
                            14
                        ],
                        [
                            8,
                            14
                        ],
                        [
                            10,
                            16
                        ],
                        [
                            12,
                            16
                        ],
                        [
                            14,
                            16
                        ]
                    ]
                },
                "text-font": [
                    "Roboto Regular"
                ],
                "text-pitch-alignment": "viewport",
                "text-letter-spacing": {
                    "stops": [
                        [
                            10,
                            0.08
                        ],
                        [
                            13,
                            0.04
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "text-max-width": 6,
                "text-offset": {
                    "stops": [
                        [
                            4,
                            [
                                0,
                                1.75
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                1.25
                            ]
                        ]
                    ]
                },
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "maxzoom": 13,
            "paint": {
                "icon-halo-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "text-halo-color": "rgba(255, 252, 252, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)",
                "icon-color": "rgba(53, 53, 53, 1)",
                "icon-translate-anchor": "viewport",
                "text-halo-blur": 1,
                "text-color": {
                    "stops": [
                        [
                            6,
                            "rgba(35, 34, 34, 1)"
                        ],
                        [
                            19,
                            "rgba(111, 111, 111, 1)"
                        ]
                    ]
                },
                "icon-halo-blur": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            0.5
                        ]
                    ]
                },
                "icon-opacity": 1,
                "text-halo-width": {
                    "stops": [
                        [
                            4,
                            1.5
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            },
            "id": "Place-Names-3-12-Natural",
            "source": "LINZ Basemaps",
            "source-layer": "place",
            "type": "symbol",
            "minzoom": 3
        },
        {
            "filter": [
                "any",
                [
                    "==",
                    "place",
                    "city"
                ],
                [
                    "==",
                    "place",
                    "town"
                ],
                [
                    "==",
                    "place",
                    "archipalego"
                ],
                [
                    "==",
                    "place",
                    "island"
                ],
                [
                    "==",
                    "place",
                    "archipelago"
                ]
            ],
            "layout": {
                "icon-pitch-alignment": "auto",
                "text-optional": true,
                "text-variable-anchor": [
                    "top",
                    "bottom-left"
                ],
                "visibility": "visible",
                "text-field": "{name}",
                "text-size": {
                    "stops": [
                        [
                            2,
                            10
                        ],
                        [
                            5,
                            16
                        ],
                        [
                            8,
                            16
                        ],
                        [
                            10,
                            17
                        ],
                        [
                            12,
                            17
                        ],
                        [
                            14,
                            17
                        ]
                    ]
                },
                "text-font": [
                    "Roboto Regular"
                ],
                "text-pitch-alignment": "viewport",
                "text-letter-spacing": {
                    "stops": [
                        [
                            10,
                            0.08
                        ],
                        [
                            13,
                            0.04
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "text-max-width": 6,
                "text-offset": {
                    "stops": [
                        [
                            4,
                            [
                                0,
                                1.75
                            ]
                        ],
                        [
                            6,
                            [
                                0,
                                1.25
                            ]
                        ]
                    ]
                },
                "text-rotation-alignment": "viewport",
                "text-ignore-placement": false
            },
            "maxzoom": 13,
            "paint": {
                "icon-halo-width": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "text-halo-color": "rgba(255, 252, 252, 1)",
                "icon-halo-color": "rgba(255, 255, 255, 1)",
                "icon-color": "rgba(53, 53, 53, 1)",
                "icon-translate-anchor": "viewport",
                "text-halo-blur": 1,
                "text-color": {
                    "stops": [
                        [
                            6,
                            "rgba(35, 34, 34, 1)"
                        ],
                        [
                            19,
                            "rgba(111, 111, 111, 1)"
                        ]
                    ]
                },
                "icon-halo-blur": {
                    "stops": [
                        [
                            13,
                            1
                        ],
                        [
                            14,
                            0.5
                        ]
                    ]
                },
                "icon-opacity": 1,
                "text-halo-width": {
                    "stops": [
                        [
                            4,
                            1.5
                        ],
                        [
                            9,
                            2
                        ]
                    ]
                }
            },
            "id": "Place-Names-3-12-Place",
            "source": "LINZ Basemaps",
            "source-layer": "place",
            "type": "symbol",
            "minzoom": 3
        }
    ]
} as BaseLayerDefinition
