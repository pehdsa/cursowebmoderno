import React from 'react'
//import Filho from './filho'
import { childrenWithProps } from '../utils/util'


export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>            
            {childrenWithProps(props)}
        </ul>
    </div>