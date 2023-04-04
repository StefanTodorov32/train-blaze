import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { getAllRates } from "../../../services/rateService";

const RatingBadge = ({ workoutId, setRatingArrays, ratingsArray, workout }) => {
    const [avgRating, setAvgRating] = useState(0)

    useEffect(() => {
        getAllRates(workoutId)
            .then(r => {
                setRatingArrays(r)
                let ratingCount = 0
                ratingsArray.map(r => {
                    ratingCount += r.rate
                })
                setAvgRating(ratingCount / ratingsArray.length)
            })
    }, [workout, ratingsArray])

    const variant = avgRating >= 4 ? "success" : "warning";
    return <Badge style={{marginLeft: "10px"}} bg={variant}>Rating: {avgRating.toFixed(2)}</Badge>;
};

export default RatingBadge;