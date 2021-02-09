
import RecipeList from './RecipeList';

const Content = ({isAuthenticated}) => {
    return ( 
        <section>
            <RecipeList preparedBy = {"All dishes"} isAuthenticated={isAuthenticated}/> 
        </section>
       
     );
}
 
export default Content;