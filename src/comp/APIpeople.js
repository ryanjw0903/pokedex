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
            {this.state.loading ? <div>loading</div> :
            (
            <div>
                <h1>{this.state.person.name.first}</h1>

            </div>
            )}
          </div>
      )
  }
}
export default APIpeople