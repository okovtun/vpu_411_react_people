import './Article.css';
import Card from './Card.js';

function Article(props)
{
    return(
        <div>
            {
                Object.keys(props.db).map
                (
                    elem =>
                    {
                        //console.log(elem);
                        return(<Card persone={props.db[elem]} />)
                    }
                )
            }
        </div>
    );
}
export default Article;