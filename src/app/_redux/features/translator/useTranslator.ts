// 'use client'
// import { useAppSelector } from '~/_redux/hooks'
// import { selectCaption, selectLanguage } from '~/_redux/features/translator/translatorSlice'
// import { useCreation, useMemoizedFn } from 'ahooks'
// import { get as _get } from 'lodash-es'
// import { selectNavigatorPrefixCaption } from '~/_redux/features/navigator/navigatorSlice'
// import useAuth from '../auth/useAuth'

// interface Translator {
//   _t: (key: string, description?: string | { [key: string]: string }, component?: string, layout?: string) => string;
//   language: string | null; // Allow 'null' as a valid type
// }

// /**
//  * A custom hook that provides text translation based on a given key.
//  *
//  * @returns {Object} Contains the `_t` translation function and the current language.
//  *
//  * @example
//  * // Basic usage
//  * const { _t } = useTranslator();
//  * _t('login', 'Tab Login');
//  *
//  * @example
//  * // Usage in a component
//  * _t('Enter captcha', 'TextField enter captcha', 'LoginForm');
//  *
//  * @example
//  * // Multiple translations in a component
//  * _t(
//  *   'Today',
//  *   {
//  *     'single.FootballDetail': 'Today text in calendar bar',
//  *     'mixparlay.FootballDetail': 'Today text in calendar bar'
//  *   },
//  *   'FootballDetail'
//  * );
//  *
//  * @example
//  * // Usage in an alert component
//  * _t('Your Account Is Under Suspended.', 'Alert account suspended', 'LoginForm');
//  */
// export default function useTranslator(): Translator {
//   const caption = useAppSelector(selectCaption)
//   const xCaption = useCreation(() => caption, [caption])
//   const lang = useAppSelector(selectLanguage)
//   const xLanguage = useCreation(() => lang, [lang])
//   const user = useAuth()
//   const navigate = { prefix: useAppSelector(selectNavigatorPrefixCaption) }

//   const _t = useMemoizedFn(
//     (key, description = '', component = '', layout = '') => {
//       if (!key) return ''
//       if (typeof xCaption !== 'object') return key
//       if (!Object.keys(xCaption).length || !xLanguage) return 'Loading...'
//       const auth = user ? '#auth.authen' : '#auth.unauthen'
//       const root = !layout ? `#root.page` : `#root.layout`
//       const main = !layout ? `#main.${navigate.prefix}` : `#main.${layout}`
//       const sub = (component && component !== '@') || (component && layout) ? `.#sub.${component}` : ''
//       const xkey = `#key.${key.toLowerCase().replace(/ /g, '_').replace(/\./g, '')}`

//       const allStrKey = `${auth}.${root}.${main}${sub}.${xkey}.${xLanguage}`
//       return _get(xCaption, allStrKey) || key.replace(/_/g, ' ')
//     },
//     // @ts-ignore
//     [xLanguage, xCaption]
//   )

//   return { _t, language: xLanguage }
// }
