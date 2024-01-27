import {Link} from 'react-router-dom';


function MovieCard({movieTitle}) {
  console.log(movieTitle);
  return (
    <article>
        <h2>{movieTitle}</h2>
        {/* What should go here? */}
    </article>
  );
};

export default MovieCard;