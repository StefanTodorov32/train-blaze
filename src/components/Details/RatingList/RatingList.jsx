import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { rateWorkout } from "../../../services/rateService";

const RatingList = ({ id, setRatingArrays, setRenderBadge }) => {
  const [rating, setRating] = useState(0);
  const handleClick = (value) => {
    setRating(value);
  };

  const handleRate = async () => {
    const data = await rateWorkout(id, rating)
    setRatingArrays(state => [...state, data])
    setRenderBadge(true)

  };
  // const canRate = ratingsArray[0].
  return (
    <div>
      <ButtonGroup aria-label="Rating">
        {[1, 2, 3, 4, 5, 6].map((value) => (
          <Button
            key={value}
            variant={rating >= value ? "primary" : "light"}
            onClick={() => handleClick(value)}
          >
            {value}
          </Button>
        ))}
      </ButtonGroup>
      <Button variant="primary" onClick={handleRate} disabled={!rating}>
        Rate
      </Button>
    </div>
  );
};

export default RatingList;