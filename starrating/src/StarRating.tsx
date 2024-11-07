import React, { useState } from 'react'

export interface StarRatingProps {
    starCount: number;
}

const StarRating:React.FC<StarRatingProps> = (props) => {
    const {starCount} = props;

    const [selectedStarIndex, setSelectedStarIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(0);

    const starArray: number[] = Array.from({length: starCount}, () => 0);

    const handleStarClick = (index: number) => {
        setSelectedStarIndex(index);
    }

    const handleMouse = (index: number) => {
        setHoverIndex(index);
    }
  return (
    <div>
        {
            starArray.map((_, index: number) => {
                return (
                    <span key={index} className={
                        (hoverIndex===0 && index < selectedStarIndex) || index < hoverIndex ? 'colored-star' : ''
                    }
                    onClick={() => handleStarClick(index+1)}
                    onMouseEnter={() => handleMouse(index+1)}
                    onMouseLeave={() => handleMouse(0)}
                    >&#9733;</span>
                );
            })
        }
    </div>
  )
}

export default StarRating