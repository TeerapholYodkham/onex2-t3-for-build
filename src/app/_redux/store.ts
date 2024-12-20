// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { combineSlices } from '@reduxjs/toolkit'
// import logger from './middleware/logger'

// // import { authSlice } from './features/auth/authSlice'
// // import { filterSlice } from './features/filter/filterSlice'
// // import { navigatorSlice } from './features/navigator/navigatorSlice'
// // import { socketSlice } from './features/socket/socketSlice'
// import { translatorSlice } from './features/translator/translatorSlice'
// // import { ninjaSlice } from './features/ninja/ninjaSlice'
// // import { seekboxSlice } from './features/seekbox/seekboxSlice'
// // import { everythingSlice } from './features/everything/everythingSlice'
// // import { favoriteSlice } from './features/favorite/favoriteSlice'
// // import { balanceSlice } from './features/balance/balanceSlice'
// // import { registerSlice } from './features/register/registerSlice'

// export const rootReducer = combineSlices(
//   // socketSlice,
//   // authSlice,
//   // filterSlice,
//   // navigatorSlice,
//   translatorSlice,
//   // ninjaSlice,
//   // seekboxSlice,
//   // everythingSlice,
//   // favoriteSlice,
//   // balanceSlice,
//   // registerSlice
// )

// // The store setup is wrapped in `makeStore` to allow reuse
// // when setting up tests that need the same store config
// export const makeStore = preloadedState => {
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
//     preloadedState
//   })

//   // configure listeners using the provided defaults
//   // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
//   setupListeners(store.dispatch)

//   return store
// }

// export const store = makeStore()
