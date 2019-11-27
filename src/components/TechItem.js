import React from 'react';
import PropTypes from 'prop-types';
function TechItem({ tech, onDelete }) {
    return (
        <li>
            {tech}
            <button type="button" onClick={onDelete}>Remover</button>
        </li>
    );
}

/** Usamos o defautlProps, para preencher as propriedades caso não venha nada */
TechItem.defaultProps = {
    tech: 'Oculto'
};


/** Proptypes usados para definir os tipos de dados de nossas props, garantindo que, por exemplo,
 *  esperando receber uma função em determinada prop e o dev passe uma String ou qualquer coisa
 *  diferente de função. Conseguimos então sinalizar que esperamos receber uma função.
  */

TechItem.propTypes = {
    tech: PropTypes.string,
    /** isRequired torna obrigatório */
    onDelete: PropTypes.func.isRequired,
}
export default TechItem;