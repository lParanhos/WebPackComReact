/** Webpack
 *  a propriedade entry, se refere ao arquivo de entrada, nosso arquivo principal,
 *  que vai conter "toda" a nossa aplicação.
 *  Por padrão criamos a pasta src e dentro dela o arquivo index.js
 * 
 *  output 
 *  Local de saída do meu código
 * 
 *  module
 *  Nele colocamos regras em nossa app, por exemplo quem é o responsável por
 *  ler os arquivos js, css, imagens e etc.
 */

/**
 * Usamos o path, pois pode ser que o windows não entenda a barra -> 'src/index.js'
 * A propriedade __dirname, pega como referencia onde o arquivo do webpack está,
 *  e as seguintes são o caminho até o arquivo.
 */
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public') // Onde vai encontrar o index.html
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Expressão regular que pega apenas os arquivos que terminam com .js
                exclude: /node_modules/, //Ignora tudo que está dentro de node_modules
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    /* Style-loader
                    * Pega o meu css, e coloca ele dentro de uma tag <style></style>
                    * no meu index.html 
                    */
                    { loader: 'style-loader' },  
                    /** css-loader
                     *  Usado para entender as importações dentro do meu arquivo css
                     * seja ela de imagem ou outro arquivo css por exemplo.
                     */
                    { loader: 'css-loader' }
                ]
            },
            {
                /** Configuração para imagens */
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}