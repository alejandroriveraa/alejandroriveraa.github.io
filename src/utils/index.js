import i18n from "../i18n"

export const LANGUAGES = [
  {label: "Spanish", code: "es", img: "/images/icon-flag-es.svg"}, 
  {label: "English", code: "en", img: "/images/icon-flag-en.svg"}
]

export const SEAL_ITEMS = [
  {src: "/images/item-cafe-cubano.jpg", header: i18n.t('seals.cafeCubano'), path: "/seals/cafe-cubano"},
  {src: "/images/item-tueste-cubano.jpg", header: i18n.t('seals.tuesteCubano'), path: "/seals/tueste-cubano"},
]

export const BRAND_ITEMS = [
  {src: "/images/item-arriero.jpg", header: i18n.t('brands.arriero'), path: "/brands/arriero"},
  {src: "/images/item-cohiba.jpg", header: i18n.t('brands.cohiba'), path: "/brands/cohiba"},
  {src: "/images/item-guantanamera.jpg", header: i18n.t('brands.guantanamera'), path: "/brands/guantanamera"},
  {src: "/images/item-montecristo.jpg", header: i18n.t('brands.montecristo'), path: "/brands/montecristo"},
  {src: "/images/item-prodigio.jpg", header: i18n.t('brands.prodigio'), path: "/brands/prodigio"},
  {src: "/images/item-serrano.jpg", header: i18n.t('brands.serrano'), path: "/brands/serrano"},
  {src: "/images/item-turquino.jpg", header: i18n.t('brands.turquino'), path: "/brands/turquino"},
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
