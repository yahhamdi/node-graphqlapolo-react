export const entry = './src/server.js';
const newLocal = '/public';
export const output = {
	path: __dirname + newLocal,
	filename: 'bundle.js'
};
export const module = {
	loaders: [
		{
			test: /\.js$/,
			loader: 'babel-loader'
		}
	]
};
