import React from 'react'
import { Component } from 'react';

export default class GetInfoFromAPI extends Component {
    
    constructor (props) {
        super(props)

        this.state = {
            titulo: '',
            filmes: '',
            mass: 0,
            height: 0
        }

        this.get();
    }

    get () {
    
        var url = 'https://swapi.dev/api/people/1/';
    
        fetch(url)
        .then(res => {return res.json()})
        .then(json => {
            
            let name = json['name'];

            let filmes = [];

            let filmesText = '';

            let filmLinks = json['films'];

            if(filmLinks.length > 0) {

                alert(filmLinks)
                
                filmLinks.forEach(element => {
                    fetch(element).then(res => {
                        return res.json()
                    }).then(json => {
                        filmes.push(json['title'])
                    })
                });

                for (let index = 0; index < filmLinks.length; index++) {
                    filmesText += filmLinks[index];

                    if(index < (filmLinks.length - 1)){
                        filmesText += ', ';
                    }
                }
            }

            let mass = json['mass'];
            let height = json['height'];

            this.setState({
                titulo: name,
                filmes: filmesText,
                mass: mass,
                height: height
            });
        });
    }

    render () {
        return (
            <div>
                <h3 className="">News</h3>
                <div className="option">
                    <h5>02/02/2020</h5>
                    <h2>{this.state.titulo}</h2>
                    <p>{this.state.filmes}</p>
                </div>
                <div className="option">
                    <h5>02/02/2020</h5>
                    <h2>{this.state.titulo}</h2>
                    <p>{this.state.filmes}</p>
                </div>
                <div className="option">
                    <h5>02/02/2020</h5>
                    <h2>{this.state.titulo}</h2>
                    <p>{this.state.filmes}</p>
                </div>
            </div>
            
        )
    }
} 