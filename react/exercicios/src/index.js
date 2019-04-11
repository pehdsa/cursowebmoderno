import React from 'react';
import ReactDom from 'react-dom';

//import Primeiro from './componentes/primeiro'
//ReactDom.render(<h1>React</h1>, document.getElementById('root'))
//ReactDom.render(<Primeiro />, document.getElementById('root')) 

//import BomDia from './componentes/bomDia'
//ReactDom.render(<BomDia nome="Pedro" />, document.getElementById('root')) 

/*
import { BoaTarde, BoaNoite } from './componentes/multiplos'
ReactDom.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <Multi.BoaNoite nome="Bia" />
    </div>
, document.getElementById('root')) */

/*
import Multi, { BoaNoite } from './componentes/multiplos'
ReactDom.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <Multi.BoaNoite nome="Bia" />
    </div>
, document.getElementById('root')) 
*/

/*
import Saudacao from './componentes/saudacao'
ReactDom.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Pedro" />
    </div>
, document.getElementById('root')) 
*/

import Pai from './componentes/pai'
import Filhos from './componentes/filho'
ReactDom.render(
    <div>
        <Pai nome="João" sobrenome="Silva">            
            <Filhos nome="Pedro" />
            <Filhos nome="João" />
            <Filhos nome="Marcos" />
        </Pai>

    </div>
, document.getElementById('root')) 
