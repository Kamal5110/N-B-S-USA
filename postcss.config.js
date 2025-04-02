export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' || true) ? {
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          minifyFontValues: {
            removeQuotes: false
          },
          mergeLonghand: true,
          colormin: true,
          convertValues: true,
          discardEmpty: true,
          discardOverridden: true,
          mergeRules: true,
          minifyGradients: true,
          minifyParams: true,
          minifySelectors: true,
          normalizeCharset: true,
          normalizeDisplayValues: true,
          normalizePositions: true,
          normalizeRepeatStyle: true,
          normalizeUnicode: true,
          normalizeUrl: true,
          normalizeWhitespace: true,
          orderedValues: true,
          reduceInitial: true,
          reduceTransforms: true,
          svgo: true,
          uniqueSelectors: true
        }]
      }
    } : {}
  },
}
