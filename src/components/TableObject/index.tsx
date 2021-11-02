// libraries
import React from "react";

// components
import TableObjectRows from "./TableObjectRows";

// utils
import { MatchResult } from "../../interfaces";

// constants
import "./table-object.scss";

const TableObject = ({ rows }: { rows: MatchResult | undefined }) => {
  return (
    <table className="table-object">
      <tbody>
        <TableObjectRows rows={rows} />
      </tbody>
    </table>
  );
};

export default TableObject;
