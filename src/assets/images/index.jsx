import { isMobile } from "react-device-detect"

const mobile = await import('./index.mobile')
const desktop = await import('./index.desktop')

export const images = isMobile ? mobile : desktop



