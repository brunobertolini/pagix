// Microbundle uses its own Babel config, so we need to make sure we use this only for tests
// see https://github.com/developit/microbundle/issues/554#issuecomment-739551618
module.exports =
	process.env.NODE_ENV === 'test'
		? {
			presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
		}
		: {}
