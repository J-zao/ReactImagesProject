import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './imageList';

class App extends React.Component{
    state = { images: [] };

     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
            
        });
           this.setState({ images: response.data.results});
       
    }   
    render(){
        return <div className="ui container" style={{marginTop: '10px'}}>
             <div className="introText"><p><h1>Image finder</h1></p></div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        < ImageList images ={this.state.images} />
        </div>  
    }
}

export default App;
