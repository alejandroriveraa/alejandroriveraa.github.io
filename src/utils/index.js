import i18n from "../i18n"
import {images} from '../assets/images'

const { bannerArriero, bannerCafeCubano, bannerCohiba, bannerGuantanamera, bannerMontecristo, bannerOurCoffee, bannerProdigio, bannerSerrano, bannerTuesteCubano, bannerTurquino, bannerWhoAreWe, carouselImage01, carouselImage02, carouselImage03, homeOurCoffee, homeTuesteCubano, homeCafeCubano, itemArriero, itemCafeCubano, itemCohiba, itemGuantanamera, itemMontecristo, itemProdigio, itemSerrano, itemTuesteCubano, itemTurquino, iconArrowDownWhite, iconFlagEn, iconFlagEs, logoArriero, logoCohiba, logoCubacafe, logoFooter, logoGroup, logoGuantanamera, logoHeader, logoInstagram, logoIslaGrande, logoMontecristo, logoProdigio, logoRegil, logoSerrano, logoTurquino } = images

export const LANGUAGES = [
  {label: "Spanish", code: "es", img: iconFlagEs}, 
  {label: "English", code: "en", img: iconFlagEn}
]

export const SEAL_ITEMS = [
  {src: itemCafeCubano, header: i18n.t('seals.cafeCubano'), path: "/seals/cafe-cubano"},
  {src: itemTuesteCubano, header: i18n.t('seals.tuesteCubano'), path: "/seals/tueste-cubano"},
]

export const BRAND_ITEMS = [
  {src: itemArriero, header: i18n.t('brands.arriero'), path: "/brands/arriero"},
  {src: itemCohiba, header: i18n.t('brands.cohiba'), path: "/brands/cohiba"},
  {src: itemGuantanamera, header: i18n.t('brands.guantanamera'), path: "/brands/guantanamera"},
  {src: itemMontecristo, header: i18n.t('brands.montecristo'), path: "/brands/montecristo"},
  {src: itemProdigio, header: i18n.t('brands.prodigio'), path: "/brands/prodigio"},
  {src: itemSerrano, header: i18n.t('brands.serrano'), path: "/brands/serrano"},
  {src: itemTurquino, header: i18n.t('brands.turquino'), path: "/brands/turquino"},
]

export const SEAL_LINKS = [
  {to: "/seals/tueste-cubano", text: i18n.t("seals.tuesteCubano")},
  {to: "/seals/cafe-cubano", text: i18n.t("seals.cafeCubano")},
]

export const BRAND_LINKS = [
  {to: "/brands/cohiba", text: i18n.t("brands.cohiba")},
  {to: "/brands/montecristo", text: i18n.t("brands.montecristo")},
  {to: "/brands/guantanamera", text: i18n.t("brands.guantanamera")},
  {to: "/brands/serrano", text: i18n.t("brands.serrano")},
  {to: "/brands/turquino", text: i18n.t("brands.turquino")},
  {to: "/brands/arriero", text: i18n.t("brands.arriero")},
  {to: "/brands/prodigio", text: i18n.t("brands.prodigio")},
]

export const IMAGE_PRELOAD = [iconArrowDownWhite, iconFlagEn, iconFlagEs, logoArriero, logoCohiba, logoCubacafe, logoFooter, logoGroup, logoGuantanamera, logoHeader, logoIslaGrande, logoMontecristo, logoProdigio, logoRegil, logoSerrano, logoInstagram, logoTurquino, carouselImage01, carouselImage02, carouselImage03, homeCafeCubano, homeOurCoffee, homeTuesteCubano, bannerArriero, bannerCafeCubano, bannerCohiba, bannerGuantanamera, bannerMontecristo, bannerOurCoffee, bannerProdigio, bannerSerrano, bannerTuesteCubano, bannerTurquino, bannerWhoAreWe, itemArriero, itemCafeCubano, itemCohiba, itemGuantanamera, itemMontecristo, itemProdigio, itemSerrano, itemTuesteCubano, itemTurquino]

// Randomly sorts a given array using Fisher-Yates sorting algorithm.
// These approach have drawbacks, but it's fine for the size of the given array in this case.
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let aux = array[i]
    array[i] = array[j]
    array[j] = aux
  }
  return array;
}
