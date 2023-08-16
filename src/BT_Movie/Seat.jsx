import React from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { btMovieActions } from "../store/BT_Movie/slice";
import cn from "classnames";

const Seat = ({ ghe }) => {
    const dispatch = useDispatch();

    const { seatBooking } = useSelector((state) => state.btMovie);


    return (
        <div
            className={cn("Seat d-flex" ,{booking: seatBooking.find(chair => chair.soGhe === ghe.soGhe)} )}
            key={ghe.soGhe}
            onClick={() => {
                dispatch(btMovieActions.setSeatBooking(ghe));
            }}
        >
            {ghe.soGhe}
        </div>
    );
};

export default Seat;
