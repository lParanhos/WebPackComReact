/**
 *  preset-env
 *  R   esponsavel por converter todo o js  que não são conhecidos pelo browser,
 *      para algo que o browser possa entender.
 * 
 *  preset-react
 *      transforma as coisas que o navegador não conhece do React,
 *      como por exemplo o JSX.
 * 
 *  babel/plugin-proposal-class-properties
 *      Normalmente o babel não entende propriedades dentro de nosso ClassComponent
 *      Então usamos esse plugin para poder escrever o estado da nossa aplicação
 *      de maneira simplifcada:
 *          state = {};
 *      Caso contrário teriamos que usar um contrutor:
 *          constructor(){
 *            this.state = {} ;
 *          }
 */


module.exports = {
    presets: [
        "@babel/preset-env", 
        "@babel/preset-react"
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
};