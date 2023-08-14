import React from "react";
import Seat from "./Seat";

const SeatList = ({ seatData }) => {
  console.log("seatData: ", seatData);

  return (
    <div>
      {seatData.map((hangGhe) => {
        return (
          <div
            key={hangGhe.hang}
            className="d-flex gap-3 mt-3"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p className="hangGhe mt-2">{hangGhe.hang}</p>
            {hangGhe.danhSachGhe.map((ghe) => {
              return <Seat key={ghe.soGhe} ghe={ghe} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SeatList;
