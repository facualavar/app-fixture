import {
    Routes as RoutesReact,
    Route,
} from "react-router-dom"
import GroupResultsSection from "../sections/GroupResultsSection/GroupResultsSection"
import GroupSection from "../sections/GroupSection/GroupSection"
import GroupsSection from "../sections/GroupsSection/GroupsSection"
import Home from "../sections/Home/Home"
import Login from "../sections/Login/Login"
import NotFound from "../sections/NotFound/NotFound"

const Routes = () => {
    return (
        <RoutesReact>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/groups' element={<GroupsSection />}>
                <Route path=':groupId' element={<GroupSection />}>
                    <Route path='results' element={<GroupResultsSection />}/>
                </Route>
            </Route>
            <Route path='*' element={<NotFound />}/>
        </RoutesReact>
    )
}

export default Routes