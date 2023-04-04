import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { getAllRates } from "../../../services/rateService";

const RatingBadge = ({ workoutId, setRatingArrays, ratingsArray, workout, renderBadge, setCanRate, userId }) => {
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
                const a = ratingsArray.find(x => x._ownerId == userId)
                if (a) setCanRate(false); else setCanRate(true)
                // setCanRate(userId !== )
            })
    }, [workout, renderBadge])

    const variant = avgRating >= 4 ? "success" : "warning";
    return <Badge style={{ marginLeft: "10px" }} bg={variant}>Rating: {avgRating.toFixed(2)}</Badge>;
};

export default RatingBadge;