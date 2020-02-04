import React from 'react';
import './Jogo.css';

class Jogo extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			planet: {},
			qtdPlanets: 0,
			loading: false
		};
	}

	getPlanet(){
		this.setState({loading:true});
		let rand = Math.ceil(Math.random() * (this.state.qtdPlanets - 1 ) + 1);
		fetch('https://swapi.co/api/planets/'+rand)
		.then(res => res.json())
		.then((data)=>{
			data.films = data.films.length;
			this.setState({planet:data,loading:false});
		})
		.catch(console.log)

	}

	componentDidMount(){
		this.setState({loading:true});
		fetch('https://swapi.co/api/planets/')
		.then(res => res.json())
		.then((data)=>{
			this.setState({qtdPlanets:data.count});
			this.getPlanet();
		})
		.catch(console.log)
	}

	render(){
		if (this.state.loading)
			return (<div className="loader"></div>)
		return (<div>
			<div id="container">

				<h1>{this.state.planet.name}</h1>
				<p><span className="bold">Population:</span> {!parseInt(this.state.planet.population) ? this.state.planet.population : parseInt(this.state.planet.population).toLocaleString('pt-BR') }</p>
				<p><span className="bold">Climate: </span>{this.state.planet.climate}</p>
				<p><span className="bold">Terrain: </span>{this.state.planet.terrain}</p>
				<p className="center">Featured in <span className="bold">{this.state.planet.films}</span> films </p>
				
			</div><button onClick={()=>this.getPlanet()}>Next</button></div>);
	}
}

export default Jogo;