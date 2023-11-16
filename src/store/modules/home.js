// @reduxjs/toolkit   rtk
import { createSlice } from "@reduxjs/toolkit"  //创建reducerSlice

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    productList: []
  },
  reducers: {

  }
})

export default homeSlice.reducer

