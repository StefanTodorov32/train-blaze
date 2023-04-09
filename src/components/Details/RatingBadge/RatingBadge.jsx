import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { getAllRates } from "../../../services/rateService";

const RatingBadge = ({ workoutId, setRatingArrays, ratingsArray, workout, renderBadge, setCanRate, userId }) => {
    const [avgRating, setAvgRating] = useState(0)
    let ratingCount = 0
    useEffect(() => {
        getAllRates(workoutId)
            .then(r => {
<<<<<<< HEAD
=======
                console.log("🚀 ~ file: RatingBadge.jsx:27 ~ useEffect ~ workoutId:", workoutId)
                const a = ratingsArray.find(x => {
                    return x._ownerId == userId
                })
                console.log("🚀 ~ file: RatingBadge.jsx:13 ~ useEffect ~ a:", a)
                if (a) setCanRate(false); else setCanRate(true)
                if (workout._ownerId == userId) setCanRate(false)
                if (r.length === 0) return setAvgRating(0)
                if (isNaN(avgRating)) setAvgRating(0) 
                setRatingArrays(r)
                let ratingCount = 0
>>>>>>> parent of b8e7674 (updated)
                ratingsArray.map(r => {
                    ratingCount += r.rate
                })
                setAvgRating(ratingCount / ratingsArray.length)
            })
    }, [workout, renderBadge, workoutId, userId])

    const variant = avgRating >= 4 ? "success" : "warning";
    return <Badge style={{ marginLeft: "10px" }} bg={variant}>Rating: {avgRating.toFixed(2)}</Badge>;
};

export default RatingBadge;