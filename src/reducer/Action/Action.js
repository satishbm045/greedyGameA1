import axios from 'axios';

const postLoading = () => {
    return {
        type: "POST_LOADING"
    }
}

const postSuccess = () => {
    return {
        type: "POST_SUCCESS",
        data: [{
                    "timestamp": "2019-04-10",
                    "game": "Callbreak Multiplier",
                    "revenue": 25,
                    "impressions": 1040555
                },
                {
                    "timestamp": "2019-04-10",
                    "game": "World Cricket Championship",
                    "revenue": 150,
                    "impressions": 1140555
                },
                {
                    "timestamp": "2019-04-11",
                    "game": "Callbreak Multiplier",
                    "revenue": 140,
                    "impressions": 1240000
                },
                {
                    "timestamp": "2019-04-11",
                    "game": "World Cricket Championship",
                    "revenue": 130,
                    "impressions": 1100666
                },
                {
                    "timestamp": "2019-04-12",
                    "game": "Callbreak Multiplier",
                    "revenue": 150,
                    "impressions": 1345222
                },
                {
                    "timestamp": "2019-04-12",
                    "game": "World Cricket Championship",
                    "revenue": 76,
                    "impressions": 1000111
                },
                {
                    "timestamp": "2019-04-13",
                    "game": "Callbreak Multiplier",
                    "revenue": 50,
                    "impressions": 1046123
                },
                {
                    "timestamp": "2019-04-13",
                    "game": "World Cricket Championship",
                    "revenue": 300,
                    "impressions": 5280000
                },
                {
                    "timestamp": "2019-04-14",
                    "game": "Callbreak Multiplier",
                    "revenue": 50,
                    "impressions": 1111222
                },
                {
                    "timestamp": "2019-04-14",
                    "game": "World Cricket Championship",
                    "revenue": 110,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-15",
                    "game": "Callbreak Multiplier",
                    "revenue": 95,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-15",
                    "game": "World Cricket Championship",
                    "revenue": 75,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-16",
                    "game": "Callbreak Multiplier",
                    "revenue": 85,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-16",
                    "game": "World Cricket Championship",
                    "revenue": 150,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-17",
                    "game": "Callbreak Multiplier",
                    "revenue": 100,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-17",
                    "game": "World Cricket Championships",
                    "revenue": 200,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-18",
                    "game": "Callbreak Multiplier",
                    "revenue": 500,
                    "impressions": 5940555
                },
                {
                    "timestamp": "2019-04-18",
                    "game": "World Cricket Championship",
                    "revenue": 120,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-19",
                    "game": "Callbreak Multiplier",
                    "revenue": 150,
                    "impressions": 1240555
                },
                {
                    "timestamp": "2019-04-19",
                    "game": "World Cricket Championship",
                    "revenue": 100,
                    "impressions": 1240555
                }
            ]
    }
}

const postError = (err) => {
    return {
        type: "POST_ERROR",
        err: err
    }
}

export const GetData = () => {
    return (dispatch) => {
       dispatch(postSuccess())
    }
}
