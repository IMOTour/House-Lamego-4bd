var APP_DATA = {
  "scenes": [
    {
      "id": "0-gate",
      "name": "Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1960359802717981,
        "pitch": -0.2076256841546229,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -0.751937014858564,
          "pitch": -0.055257974485773076,
          "rotation": 0,
          "target": "1-outside---garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-outside---garage",
      "name": "Outside - garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2055463917673563,
        "pitch": -0.6510013555632508,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 2.4684741476240752,
          "pitch": 0.20027333253784896,
          "rotation": 3.141592653589793,
          "target": "0-gate"
        },
        {
          "yaw": -0.6916811428863596,
          "pitch": -0.18697090730617383,
          "rotation": 0,
          "target": "2-garage"
        },
        {
          "yaw": 2.880982691462642,
          "pitch": 0.19157327799200807,
          "rotation": 2.356194490192345,
          "target": "3-garden"
        },
        {
          "yaw": -2.364486721747946,
          "pitch": -0.0672837560943833,
          "rotation": 0,
          "target": "5-steps-1st-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9110094397962527,
        "pitch": 0.16941872559504034,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 1.8118782058617544,
          "pitch": 0.5052952683518992,
          "rotation": 7.0685834705770345,
          "target": "1-outside---garage"
        },
        {
          "yaw": -0.9503201270404169,
          "pitch": -0.23105875909270424,
          "rotation": 5.497787143782138,
          "target": "8-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9647916417497457,
        "pitch": -0.26483370916252724,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -2.8421838837885023,
          "pitch": 0.050107944740629407,
          "rotation": 3.141592653589793,
          "target": "1-outside---garage"
        },
        {
          "yaw": 2.4788430773436314,
          "pitch": -0.22055016589024845,
          "rotation": 0,
          "target": "5-steps-1st-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-front-patio",
      "name": "Front patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5377854941305564,
          "pitch": 0.09492608190606511,
          "rotation": 3.141592653589793,
          "target": "5-steps-1st-floor"
        },
        {
          "yaw": 2.517613611193476,
          "pitch": -0.07837547462297323,
          "rotation": 3.141592653589793,
          "target": "6-veranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-steps-1st-floor",
      "name": "Steps 1st floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.508645191761617,
        "pitch": -0.1544014384225072,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 0.9113150578535727,
          "pitch": 0.32911434070713597,
          "rotation": 3.141592653589793,
          "target": "4-front-patio"
        },
        {
          "yaw": -1.0272834372958677,
          "pitch": 0.45132221003810535,
          "rotation": 3.141592653589793,
          "target": "3-garden"
        },
        {
          "yaw": -1.2833653548858255,
          "pitch": 0.3378318974164305,
          "rotation": 3.141592653589793,
          "target": "0-gate"
        },
        {
          "yaw": -1.8030112931506146,
          "pitch": 0.4400382263056706,
          "rotation": 3.9269908169872414,
          "target": "2-garage"
        },
        {
          "yaw": 2.013579966526569,
          "pitch": -0.06749867343101457,
          "rotation": 2.356194490192345,
          "target": "6-veranda"
        },
        {
          "yaw": 2.6972089036860805,
          "pitch": -0.14540209432462348,
          "rotation": 0,
          "target": "8-hall"
        },
        {
          "yaw": 2.2339131793549933,
          "pitch": -0.21739256235353643,
          "rotation": 0,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-veranda",
      "name": "Veranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.219457995266648,
        "pitch": 0.1590944376055532,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -1.4269368726416758,
          "pitch": 0.33135895314337205,
          "rotation": 3.141592653589793,
          "target": "4-front-patio"
        },
        {
          "yaw": -2.7391854519777326,
          "pitch": 0.14459163036270795,
          "rotation": 8.63937979737193,
          "target": "5-steps-1st-floor"
        },
        {
          "yaw": 1.2994083959787481,
          "pitch": 0.07912208505555007,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": 2.680283926610257,
          "pitch": -0.05648228531655164,
          "rotation": 10.995574287564278,
          "target": "8-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4952600769576776,
        "pitch": 0.24742364314508336,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -0.4320625169918433,
          "pitch": -0.029841894537689484,
          "rotation": 1.5707963267948966,
          "target": "8-hall"
        },
        {
          "yaw": 0.7133628938925902,
          "pitch": 0.09950298421683357,
          "rotation": 0.7853981633974483,
          "target": "6-veranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6408415750365997,
        "pitch": 0.27110269745664084,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -1.956716222093224,
          "pitch": 0.30750324496381864,
          "rotation": 1.5707963267948966,
          "target": "6-veranda"
        },
        {
          "yaw": -2.3504643444766913,
          "pitch": 0.012082643346081667,
          "rotation": 2.356194490192345,
          "target": "5-steps-1st-floor"
        },
        {
          "yaw": 0.6322022620109387,
          "pitch": -0.06431022589510604,
          "rotation": 4.71238898038469,
          "target": "7-kitchen"
        },
        {
          "yaw": 1.6508945633745142,
          "pitch": -0.08355562536396022,
          "rotation": 10.210176124166829,
          "target": "2-garage"
        },
        {
          "yaw": 2.237395051206441,
          "pitch": 0.25140926237495265,
          "rotation": 3.141592653589793,
          "target": "9-sitting--dinner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sitting--dinner",
      "name": "Sitting / Dinner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.253856342916235,
        "pitch": 0.1375585332341025,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -1.5492894679758198,
          "pitch": 0.008645438465114452,
          "rotation": 0.7853981633974483,
          "target": "6-veranda"
        },
        {
          "yaw": -0.9535920571920098,
          "pitch": 0.042517371828591166,
          "rotation": 3.141592653589793,
          "target": "8-hall"
        },
        {
          "yaw": 0.03484944550789493,
          "pitch": 0.016444386072754114,
          "rotation": 5.497787143782138,
          "target": "13-steps---top-floor"
        },
        {
          "yaw": 2.1165434360876088,
          "pitch": 0.05209804606666424,
          "rotation": 3.141592653589793,
          "target": "10-bedroom-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-hall",
      "name": "Bedroom hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7309357071860596,
        "pitch": 0.2592728777485398,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 2.7063792126192867,
          "pitch": 0.2697121688885531,
          "rotation": 3.141592653589793,
          "target": "9-sitting--dinner"
        },
        {
          "yaw": 1.556041704947404,
          "pitch": 0.21443569102057936,
          "rotation": 5.497787143782138,
          "target": "12-bedroom-1"
        },
        {
          "yaw": -0.40159299889190514,
          "pitch": 0.13195736981359651,
          "rotation": 0.7853981633974483,
          "target": "11-wc-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-wc-1",
      "name": "WC 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3013463929736133,
        "pitch": 0.16157743876460628,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 1.8064899362213191,
          "pitch": -0.01443833400584893,
          "rotation": 0.7853981633974483,
          "target": "10-bedroom-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.902643908642979,
        "pitch": 0.027965921130899574,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 1.545642716056446,
          "pitch": 0.4171347149477036,
          "rotation": 9.42477796076938,
          "target": "10-bedroom-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-steps---top-floor",
      "name": "Steps - top floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5296713573923677,
        "pitch": 0.3049938205237481,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 1.7637347385177433,
          "pitch": 0.488334701762426,
          "rotation": 3.141592653589793,
          "target": "9-sitting--dinner"
        },
        {
          "yaw": 2.784442751282392,
          "pitch": -0.3049485455662069,
          "rotation": 5.497787143782138,
          "target": "14-top-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-top-floor-landing",
      "name": "Top floor landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.30215761586365986,
        "pitch": 0.18062940658693094,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -1.974008940453622,
          "pitch": 0.6408318357429366,
          "rotation": 2.356194490192345,
          "target": "13-steps---top-floor"
        },
        {
          "yaw": 2.391745352484353,
          "pitch": 0.0015382786877946586,
          "rotation": 0.7853981633974483,
          "target": "15-bedroom-2"
        },
        {
          "yaw": -0.46879896340705507,
          "pitch": 0.43555670331081764,
          "rotation": 3.141592653589793,
          "target": "16-upstairs-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5080717711675913,
        "pitch": 0.23501516909461095,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -2.430823732348646,
          "pitch": 0.3423944147070088,
          "rotation": 0,
          "target": "14-top-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-upstairs-sitting-room",
      "name": "Upstairs sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1222774288022004,
        "pitch": 0.2578905666974869,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -0.15326815021516182,
          "pitch": 0.46303002766408596,
          "rotation": 3.141592653589793,
          "target": "14-top-floor-landing"
        },
        {
          "yaw": -0.09301441301381885,
          "pitch": -0.043789136330442346,
          "rotation": 0.7853981633974483,
          "target": "15-bedroom-2"
        },
        {
          "yaw": -1.9063961759498778,
          "pitch": -0.07450610690830217,
          "rotation": 0.7853981633974483,
          "target": "17-bedroom-3"
        },
        {
          "yaw": -2.644256225798223,
          "pitch": 0.48338975750945146,
          "rotation": 3.141592653589793,
          "target": "18-hall-bd4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.920514644902231,
        "pitch": 0.42698539222400633,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -2.356972765748372,
          "pitch": 0.3706273791950174,
          "rotation": 3.9269908169872414,
          "target": "16-upstairs-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-hall-bd4",
      "name": "Hall bd4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.837117753087604,
        "pitch": 0.3109895595924854,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 3.0986442574752946,
          "pitch": 0.05634899358790513,
          "rotation": 4.71238898038469,
          "target": "21-bedroom-4"
        },
        {
          "yaw": -0.23742385255293996,
          "pitch": 0.4056242212055263,
          "rotation": 3.141592653589793,
          "target": "19-wc-2"
        },
        {
          "yaw": 1.0707099435184126,
          "pitch": 0.3319809297218761,
          "rotation": 3.141592653589793,
          "target": "20-wc-3"
        },
        {
          "yaw": -1.8815707698933437,
          "pitch": 0.4735382534634702,
          "rotation": 0,
          "target": "16-upstairs-sitting-room"
        },
        {
          "yaw": -2.0301597681862944,
          "pitch": 0.22034234578029555,
          "rotation": 3.141592653589793,
          "target": "14-top-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-wc-2",
      "name": "WC 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5813325949187522,
        "pitch": 0.31391437843289793,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -1.1205020281693798,
          "pitch": 0.00010764601479351654,
          "rotation": 3.141592653589793,
          "target": "18-hall-bd4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-wc-3",
      "name": "WC 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.831251231218717,
        "pitch": 0.1696629866098025,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": 1.0538703350113785,
          "pitch": 0.6960997275241674,
          "rotation": 3.141592653589793,
          "target": "18-hall-bd4"
        },
        {
          "yaw": 1.1969308983772642,
          "pitch": 0.2626085178384976,
          "rotation": 2.356194490192345,
          "target": "16-upstairs-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2839863221614607,
        "pitch": 0.2915819383926852,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -0.9013828827632544,
          "pitch": 0.3911289023064697,
          "rotation": 0,
          "target": "22-bedroom-4---view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-4---view",
      "name": "Bedroom 4 - view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6104473947263678,
        "pitch": 0.1704631895351092,
        "fov": 1.4395209886329685
      },
      "linkHotspots": [
        {
          "yaw": -0.7699072274862591,
          "pitch": 0.6542201369353862,
          "rotation": 3.141592653589793,
          "target": "0-gate"
        },
        {
          "yaw": -0.33162907923035334,
          "pitch": 0.6629909658866744,
          "rotation": 3.141592653589793,
          "target": "3-garden"
        },
        {
          "yaw": 2.3113078935654894,
          "pitch": 0.7009499179381837,
          "rotation": 3.141592653589793,
          "target": "21-bedroom-4"
        },
        {
          "yaw": 2.319966744326395,
          "pitch": 0.28228819337062205,
          "rotation": 0,
          "target": "18-hall-bd4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
