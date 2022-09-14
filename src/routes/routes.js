import {
    Routes as RoutesReact,
    Route,
} from "react-router-dom"

import Group from "../sections/Group/Group"
import Groups from "../sections/Groups/Groups"
import Home from "../sections/Home"
import Login from "../sections/Login/Login"
import NotFound from "../sections/NotFound/NotFound"

const Routes = () => {
    return (
        <RoutesReact>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/groups' element={<Groups />}>
                <Route path=':groupId' element={<Group />}/>
            </Route>
            <Route path='*' element={<NotFound />}/>
        </RoutesReact>
    )
}

export default Routes