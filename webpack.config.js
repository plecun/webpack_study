const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
	template: "./src/index.html",
	filename: "index.html",
});
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "./src/index.js"), //输入文件
	output: {
		path: path.join(__dirname, "./dist"), //输出文件的存放路径
		filename: "bundle.js", //输出文件的名称
	},
	plugins: [htmlPlugin, new VueLoaderPlugin()],
	module : {
		rules: [
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			// { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
			{
				test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
				use: {
					// 因webpack版本 所以写在里边
					loader: "url-loader",
					options: {
						esModule: false,
					},
				},
			},
			{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
			{ test: /\.vue$/, use: "vue-loader" },
		]
	},
}