module.exports = {
    module: {
        rules: [{
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: ["file-loader"]
        }, ]
    }
};
