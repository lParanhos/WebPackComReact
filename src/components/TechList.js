import React, { Component } from 'react';
import TechItem from './TechItem';
class TechList extends Component {

    /** Para usar as default props em componentes de classe fazemos como o exemplo abaixo 
    *   static defaultProps = {
    *     tech: 'Oculto'
    *   }
    */

    state = {
        newTech: '',
        techs: []
    };

    //Cilo de vida

    //Executado assim que o componente aparece em tela
    componentDidMount() {
        let techs = localStorage.getItem('techs');
        if (techs) {
            this.setState({ techs })
        }
    }

    /** Executado sempre que houver alterações nas props ou estado
     * 
     *  prevProps -> são as propriedades antigas do componente
     *  prevState -> estado antigo do componente
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }

    //Executado assim que o componente deixa de existir
    componentWillUnmount() {
        //Mais usado para limpar eventListners
    }

    /**
     *  Em components de classe devemos sempre criar funções com arrow functions
     *  pois assim temos acesso ao "this" do nosso componente. Ao usar functions 
     *  no formato mais popular:
     *  handleInputChange(e){} 
     *  não conseguimos acesso ao this, teriamos que fazer um bind, para conseguir
     */
    handleInputChange = e => {
        /** Não podemos alterar o estado de um componente,
         * devemos sempre usar o this.setState(), para realizar essa atualização
         * O setState, cria uma cóṕia do estado e depois o atualiza com as informações
         * que já existiam no mesmo, acrescentando o que é novo, ou foi mudado.
         */
        this.setState({ newTech: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        });
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(r => r !== tech) })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.state.techs.map((tech) => (
                            <TechItem
                                key={tech}
                                tech={tech}
                                onDelete={() => this.handleDelete(tech)}
                            />
                        ))}
                    </ul>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newTech}
                    />
                    <button type="submit">Salvar</button>
                </form>
            </>
        );
    }
}

export default TechList;