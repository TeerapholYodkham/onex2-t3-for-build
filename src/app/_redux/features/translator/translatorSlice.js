// import { createAppSlice } from '~/_redux/createAppSlice'
// import { getRawLanguageData } from './translatorAPI'

// const initialState = {
//   lang: null,
//   caption: {},
//   status: 'idle'
// }

// export const translatorSlice = createAppSlice({
//   name: 'translator',
//   initialState,
//   reducers: create => ({
//     fetchCaption: create.asyncThunk(
//       async () => {
//         return JSON.parse(await getRawLanguageData())
//       },
//       {
//         pending: state => {
//           state.status = 'loading'
//         },
//         fulfilled: (state, action) => {
//           state.status = 'idle'
//           state.caption = action.payload
//           console.log('caption:', action.payload)
//         },
//         rejected: state => {
//           state.status = 'failed'
//         }
//       }
//     ),
//     setLanguage: create.reducer((state, action) => {
//       state.lang = action.payload
//     }),
//     setCaption: create.reducer((state, action) => {
//       state.caption = action.payload
//     })
//   }),
//   selectors: {
//     selectLanguage: translator => translator.lang,
//     selectCaption: translator => translator.caption,
//     selectLangStatus: translator => translator.status
//   }
// })

// export const { fetchCaption, setLanguage, setCaption } = translatorSlice.actions

// export const { selectLanguage, selectCaption, selectLangStatus } = translatorSlice.selectors

// export const refreshTranslator = newLanguage => (dispatch, getState) => {
//   dispatch(setLanguage(newLanguage))
//   dispatch(fetchCaption(newLanguage))
// }
