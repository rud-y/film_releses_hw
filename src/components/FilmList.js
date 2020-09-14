import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
    render() {
        const listOfFilms = this.props.films.map((film) => {
            return (
                <Film name={film.name} url={film.url}></Film>
            ); 
        });

        return(
            <>
                <h4>Upcoming Film Release for UK</h4>
                <hr></hr>
                {listOfFilms}
                <hr></hr>
                <div id="moreReleases">
                    <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a>
                </div>
            
            </>
        );
    }


}

export default FilmList;