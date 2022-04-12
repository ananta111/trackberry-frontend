export default function getSample() {
    const data = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.0348144,
                        34.0007104
                    ]
                },
                "properties": {
                    "object": "TrackingDetail",
                    "message": "Arrived at USPS Regional Facility",
                    "description": "June 4 12:06 am Arrived at USPS Regional Facility in COLUMBIA SC PROCESSING CENTER",
                    "status": "in_transit",
                    "status_detail": "arrived_at_facility",
                    "datetime": "2020-06-04T00:06:00Z",
                    "source": "USPS",
                    "carrier_code": "10",
                    "tracking_location": {
                        "object": "TrackingLocation",
                        "city": "COLUMBIA SC PROCESSING CENTER",
                        "state": null,
                        "country": null,
                        "zip": null
                    }
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.0348144,
                        34.0007104
                    ]
                },
                "properties": {
                    "object": "TrackingDetail",
                    "message": "Departed USPS Regional Facility",
                    "description": "June 4 12:28 am Departed USPS Regional Facility in COLUMBIA SC PROCESSING CENTER",
                    "status": "in_transit",
                    "status_detail": "departed_facility",
                    "datetime": "2020-06-04T00:28:00Z",
                    "source": "USPS",
                    "carrier_code": "10",
                    "tracking_location": {
                        "object": "TrackingLocation",
                        "city": "COLUMBIA SC PROCESSING CENTER",
                        "state": null,
                        "country": null,
                        "zip": null
                    }
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -95.7048514,
                        37.2268149
                    ]
                },
                "properties": {
                    "object": "TrackingDetail",
                    "message": "In Transit to Next Facility",
                    "description": "June 8 In Transit to Next Facility",
                    "status": "in_transit",
                    "status_detail": "in_transit",
                    "datetime": "2020-06-08T00:00:00Z",
                    "source": "USPS",
                    "carrier_code": "NT",
                    "tracking_location": {
                        "object": "TrackingLocation",
                        "city": null,
                        "state": null,
                        "country": null,
                        "zip": null
                    }
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -75.2351442,
                        39.90476
                    ]
                },
                "properties": {
                    "object": "TrackingDetail",
                    "message": "Arrived at USPS Regional Facility",
                    "description": "June 9 4:23 am Arrived at USPS Regional Facility in PHILADELPHIA PA DISTRIBUTION CENTER",
                    "status": "in_transit",
                    "status_detail": "arrived_at_facility",
                    "datetime": "2020-06-09T04:23:00Z",
                    "source": "USPS",
                    "carrier_code": "10",
                    "tracking_location": {
                        "object": "TrackingLocation",
                        "city": "PHILADELPHIA PA DISTRIBUTION CENTER",
                        "state": null,
                        "country": null,
                        "zip": null
                    }
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -75.2362381,
                        39.8781725
                    ]
                },
                "properties": {
                    "object": "TrackingDetail",
                    "message": "Arrived at Post Office",
                    "description": "June 9 8:20 am Arrived at Post Office in PHILADELPHIA, PA",
                    "status": "in_transit",
                    "status_detail": "arrived_at_facility",
                    "datetime": "2020-06-09T08:20:00Z",
                    "source": "USPS",
                    "carrier_code": "07",
                    "tracking_location": {
                        "object": "TrackingLocation",
                        "city": "PHILADELPHIA",
                        "state": "PA",
                        "country": null,
                        "zip": "19153"
                    }
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -75.2362381,
                        39.8781725
                    ]
                },
                "properties": {
                    "object": "TrackingDetail",
                    "message": "Out for Delivery, Expected Delivery by 8:00pm",
                    "description": "June 9 8:31 am Out for Delivery, Expected Delivery by 8:00pm in PHILADELPHIA, PA",
                    "status": "out_for_delivery",
                    "status_detail": "out_for_delivery",
                    "datetime": "2020-06-09T08:31:00Z",
                    "source": "USPS",
                    "carrier_code": "OF",
                    "tracking_location": {
                        "object": "TrackingLocation",
                        "city": "PHILADELPHIA",
                        "state": "PA",
                        "country": null,
                        "zip": "19153"
                    }
                }
            }
        ]
    }

    return data;
}