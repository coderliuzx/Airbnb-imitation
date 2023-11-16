import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"

// 总仓库store，统一使用一个store就好
const store = configureStore({
  // 合并所有reducer
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store


