import React, { useState } from "react";
import CountUp from "react-countup";

const Count = () => {
  return (
    <div>
      <CountUp start={0} end={1000000} duration={2} prefix="$">
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} onScroll={start} />
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Count;
