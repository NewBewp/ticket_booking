import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    seatBooking: [] // ghế đang đặt mảng rỗng vì user chưa chọn
    
}

const btMovieSlice = createSlice({
    name: 'btMovie',
    initialState: initialState,
    reducers: {
        //action
        setSeatBooking: (state, action)=>{
            console.log("action: ", action);
            const index =   state.seatBooking.findIndex(item => item.soGhe === action.payload.soGhe)

            if (index !== -1 ){
                state.seatBooking.splice(index, 1)
            }
            else{
                state.seatBooking.push(action.payload)
            }

        }// nơi xử lý, thay đổi state và reducer
    }, //nơi xử lý action đồng bộ
    //externalReducer:()=>{},//xử lý bất đồng bộ (callAPI)
})

export const { 
    reducer: btMovieReducer,  // đổi tên Reducer
    actions: btMovieActions, // đổi tên Actions
} = btMovieSlice //bóc tách reducer, action từ btMovieSlice

