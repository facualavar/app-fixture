import {
    Routes as RoutesReact,
    Route,
} from "react-router-dom"

import Group from "../sections/Group/Group"
import Groups from "../sections/Groups/Groups"
import Login from "../sections/Login/Login"

const Routes = () => {
    return (
        <RoutesReact>
            <Route path='/login' element={<Login />}/>
            <Route path='/groups' element={<Groups />}>
                <Route path=':groupId' element={<Group />}/>
            </Route>
        </RoutesReact>
    )
}

export default Routes