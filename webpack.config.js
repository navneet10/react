// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your application
   output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle file name
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply this rule to .js files
                exclude: /node_modules/, // Exclude node_modules directory
                use: {
                    loader: 'babel-loader', // Use Babel to transpile .js files
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // React and ES6+ support
                    },
                },
            },
            {
                test: /\.css$/, // Apply this rule to .css files
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
            {
                test: /\.svg$/, // Apply this rule to .svg files
                use: [
                    {
                        loader: 'file-loader', // Use file-loader
                        options: {
                            name: '[name].[ext]', // Output file name
                            outputPath: 'images/', // Output directory
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i, // Apply this rule to image files
                type: 'asset/resource', // Use file-loader for handling images
            },
            // Add more rules for handling CSS, images, etc. if needed
        ],
    },
};
