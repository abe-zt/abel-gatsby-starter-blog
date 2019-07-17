import Typography from "typography"
import stowLakeTheme from "typography-theme-stow-lake"

stowLakeTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete stowLakeTheme.googleFonts

const typography = new Typography(stowLakeTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
