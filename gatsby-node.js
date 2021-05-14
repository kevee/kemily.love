exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  const { setWebpackConfig } = actions

  if (stage === 'build-html') {
    setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
