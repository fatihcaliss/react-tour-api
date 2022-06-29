import Tour from './Tour';
import React from 'react';
const Tours = ({ props, removeTour }) => {

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {props.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  )
};

export default Tours;
