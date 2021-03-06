import React from 'react';
class APIpeople extends React.Component{
    state = {
        loading: true,
        person: null,
    }
    async componentDidMount(){
        const url = "https://api.randomuser.me/"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false})
        console.log(data)
  }
  render(){
      return( 
          <div>
            <h1>First time practice with API before doing Pokedex</h1>
            {this.state.loading ? <div>loading</div> :
            (
            <div>
                <h1>{this.state.person.name.first}</h1>
                <h1>{this.state.person.name.last}</h1>
                <img src = {this.state.person.picture.large}/>

            </div>
            )}
          </div>
      )
  }
}
export default APIpeople