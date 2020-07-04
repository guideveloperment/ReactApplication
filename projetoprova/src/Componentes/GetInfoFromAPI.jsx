import React from 'react'
import { Component } from 'react';
import DeathStar from './imagens/Death-Star.jpeg'

export default class GetInfoFromAPI extends Component {
    
    constructor (props) {
        super(props)

        this.state = {
            titulo: '',
            description: '',
            model: '',
            starshipClass: ''
        }

        this.get();
    }

    get () {
    
        var url = 'https://swapi.dev/api/starships/9/';
    
        fetch(url)
        .then(res => {return res.json()})
        .then(json => {
            
            let name = json['name'];
            let description = json['manufacturer'];
            let model = json['model'];
            let starship = json['starship_class'];

            this.setState({
                titulo: name,
                description: description,
                model: model,
                starshipClass: starship
            });
        });
    }

    render () {
        return (
            <div>
                <h4><i>{this.state.model}</i></h4>
                <h1 className="">
                    {this.state.titulo}
                </h1>
                <p>
                    {this.state.description}
                </p>
                <p>
                    {this.state.starshipClass}
                </p>
                <hr className="bg-white mt-5 mb-5"></hr>

                <div className="eventos-bottom">
                    <h1>{this.state.titulo}</h1>
                    <img className="death-imagem mt-4" src={DeathStar}></img>
                </div>
            </div>
            
        )
    }
} 