import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
    render() {
        const listOfFilms = this.props.films.map((film) => {
            return (
            <Film key={film.id} name={film.name}></Film>
            ); 
        });

        return(
            <>
            <h3>Upcoming Films:</h3>
            {listOfFilms}
            </>
        );
    }


}

export default FilmList;