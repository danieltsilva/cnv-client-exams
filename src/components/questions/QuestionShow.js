import React from 'react';
import { fetchQuestion } from '../../actions';

const Header = () => {
    return (
        <div className="ui header">UNIFAE 2015/1.1 [ANTIGUIDADE CLÁSSICA | ROMA]</div>
      );
}

const Statement = () => {
    return (
        <div className="ui content">
            <p>Mais de dois mil anos separam a instalação da República na Roma antiga e no Brasil de 1889. Apesar das diferenças, essas duas formas de governo, distantes no tempo e no espaço, apresentam algumas semelhanças.</p>
            <p>Dentre essas semelhanças, é correto mencionar</p>
        </div>
    );
}

const Alternatives = () => {
    return (
        <div className="ui list">
            <div className="item">(A) a instalação de um Estado oligárquico, dominado por proprietários de terras, que substituíra uma monarquia.</div>
            <div className="item">(B) a participação política ampla e igualitária: na Roma antiga, a cidadania se estendia a patrícios e plebeus; no Brasil, a homens e mulheres.</div>
            <div className="item">(C) a divisão de poderes independentes (Executivo, Legislativo e Judiciário) como forma de organização do Estado.</div>
            <div className="item">(D) o Senado, composto por membros vitalícios escolhidos por assembleias populares por meio de voto aberto.</div>
            <div className="item">(E) a eleição de cônsules e presidente, escolhidos para mandatos de quatro anos com funções correlatas em relação à administração e ao comando do Exército.</div>
        </div>
    );
}

class QuestionShow extends React.Component {

    componentDidMount() {
        console.log('[SHOW] FETCH QUESTION');
        //this.props.fetchQuestion();
    }

    render() {
        return (
            <div>
                <Header />
                <Statement />
                <Alternatives />
            </div>
        )
    }
}

export default QuestionShow;