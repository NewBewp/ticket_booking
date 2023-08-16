import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
    const { seatBooking } = useSelector((state) => state.btMovie);
    console.log("seatBooking: ", seatBooking);

    return (
        <div>
            <div>
                <h2 className="mt-5">Danh sách ghế đã chọn</h2>
                <div className="mt-3 d-flex gap-2">
                    <div className="Seat "></div>
                    <p>Ghế chưa chọn</p>
                </div>
                <div className="mt-3 d-flex gap-2">
                    <div className="Seat booking"></div>
                    <p>Ghế đã chọn</p>
                </div>
                <div className="mt-3 d-flex gap-2">
                    <div className="Seat "></div>
                    <p>Ghế đã đặt</p>
                </div>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seatBooking.map(chair =>(
                                <tr key={chair.soGhe}>
                                    <td>{chair.soGhe}</td>
                                    <td>{chair.gia}</td>
                                    <td><button className="btn btn-danger">X</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Result;
