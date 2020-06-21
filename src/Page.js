import React, { useState } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import styled from "styled-components";

import { generateData } from "./source";

const Box = styled.div`
  height: 500px;
  width: 500px;
  border: 5px solid black;
  overflow: scroll;
`;

const Text = styled.div`
  color: red;
`;

const Page = () => {
  const [data, setData] = useState([]);

  const handleBottomScroll = () => {
    // fetch New Data
    onGenerate();
  };

  const onGenerate = () => {
    const GenedData = generateData(15);
    setData([...data, ...GenedData]);
  };

  const resetData = () => {
    setData([]);
  };

  const containerRef = useBottomScrollListener(handleBottomScroll);

  return (
    <div>
      <div>Testing Scrolling Bottom fetch</div>
      <button onClick={() => onGenerate()}>Generate data </button>
      <button onClick={() => resetData()}>Reset data </button>
      <Box ref={containerRef}>
        {data.map((d, idx) =>
          idx % 10 === 0 ? <Text>{d.name}</Text> : <div>{d.name}</div>
        )}
      </Box>
    </div>
  );
};

export default Page;
