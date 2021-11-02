// libraries
import React from "react";

// components
import Result from "./Result";

// utils
import { Matches } from "../../interfaces";

const Results = ({ matches }: { matches: Matches[] }) => {
  if (!matches.length) {
    return <p>No results found</p>;
  }

  const entries = matches.map((result: Matches, index: number) => {
    return <Result key={index} {...result} />;
  });

  return <>{entries}</>;
};

export default Results;
