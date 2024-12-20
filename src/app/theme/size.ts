const menuHeader = 50 // filter
const menuHeaderLabel = 48 // filter
// const menuHeaderLabel = 70 // filter

// const navbottom = 80
const navbottom = 60
const header = 55
const authBar = 50
const searchBar = 95
const totalBalance = 154
const datePicker = 46
const calenderBar = 53

//  ********* Wallet *********
const walletBalan = 192
const walletCalender = 78
const miniWalBalan = 80
const title = 29
const tabBank = 50

// ************ Favorite ***********
const eventBar = 37

interface DefaultSizeType {
  paddingcontent: string;
  authButton: string;
  menuHeader: number;
  menuHeaderLabel: number;
  foldSize: number;

  eleMixUnAuth: number;
  eleTranAuth: number;

  eleUnAuthSingFb: number;

  eleSettingAuth: number;
  eleSettingTop: number;

  eleSportUnAuth: number;
  eleSportAuth: number;

  eleMixparlayUnAuth: number;
  eleMixparlayAuth: number;

  eleWalletFullBalan: number;
  eleWalletMiniBalan: number;
  eleWalletRecordTop: number;
  eleWalletTopUnAuth: number;
  eleWalletTopAuth: number;

  elePromotion: number;

  eleCouponUnAuth: number;
  eleCouponAuth: number;
  eleCouponTop: number;
  eleCouponUnAuthTop: number;

  eleBanktranfer: number;

  eleFavoriteAuth: number;
  eleFavoriteUnAuth: number;

  eleSettingUnAuth: number;

  eleNavbottom: number;

  eleHeader: number;

  eleAuthBar: number;

  eleWithdraw: number;
  eleWithdrawTop: number;

  eleDeposit: number;
  eleDepositTop: number;

  eleHistory: number;

  eleContactAuth: number;
  eleContactAuthContainer: number;

  eleContactUnAuth: number;
  eleContactUnAuthContainer: number;

  eleProfileAuth: number;

  eleinviteFriend: number;

  eleSportDeail: number;
  eleSportDeailUnAuth: number;
}



const DefaultSize:DefaultSizeType = {
    paddingcontent: '0px 10px',
    authButton: `30px`,
    menuHeader: 50, // filter
    menuHeaderLabel: 70, // filter,
    foldSize: 480,

    eleMixUnAuth: menuHeader + authBar + header + searchBar + navbottom,
    eleTranAuth: header + totalBalance + datePicker + navbottom,

    // search
    eleUnAuthSingFb: menuHeader + header + navbottom + searchBar + 55,

    // Home => Setting
    eleSettingAuth: header + menuHeaderLabel + navbottom,
    eleSettingTop: header + menuHeaderLabel,

    // Home => Sports
    eleSportUnAuth: header + authBar + calenderBar + navbottom,
    eleSportAuth: header + calenderBar + navbottom,

    // Home => Mixparlay
    eleMixparlayUnAuth: header + authBar + calenderBar + navbottom,
    eleMixparlayAuth: header + calenderBar + navbottom,

    // wallet
    eleWalletFullBalan: header + menuHeaderLabel + walletBalan + walletCalender + navbottom,
    eleWalletMiniBalan: miniWalBalan + title + datePicker + navbottom + header,
    //wallet > Margin Top
    eleWalletRecordTop: header + menuHeaderLabel + walletBalan + walletCalender,
    eleWalletTopUnAuth: header + authBar + menuHeaderLabel,
    eleWalletTopAuth: header + menuHeaderLabel,

    // Promotion
    elePromotion: header + navbottom,

    // Coupon
    eleCouponUnAuth: header + navbottom + authBar,
    eleCouponAuth: header + navbottom + 10,
    eleCouponTop: header,
    eleCouponUnAuthTop: header + authBar,

    eleBanktranfer: header + navbottom + tabBank,

    // Menu Header => Favorite
    eleFavoriteAuth: header + eventBar + navbottom,
    eleFavoriteUnAuth: header + authBar + eventBar + navbottom,

    // Menu Header => Setting
    eleSettingUnAuth: header + navbottom + authBar,

    eleNavbottom: navbottom,

    eleHeader: header,

    eleAuthBar: authBar,

    // Withdraw
    eleWithdraw: header + navbottom,
    eleWithdrawTop: header,

    // Deposit
    eleDeposit: header + navbottom + menuHeaderLabel,
    eleDepositTop: header + menuHeaderLabel,

    // history
    eleHistory: header + menuHeaderLabel,

    // Contact
    eleContactAuth: header,
    eleContactAuthContainer: header + navbottom,

    eleContactUnAuth: header + authBar,

    eleContactUnAuthContainer: header + authBar + navbottom,

    // profile
    eleProfileAuth: header + menuHeaderLabel,

    // invite
    eleinviteFriend: header + menuHeaderLabel,

    // detail
    eleSportDeail: header + menuHeaderLabel,
    eleSportDeailUnAuth: header + menuHeaderLabel + authBar

}

export { DefaultSize }
