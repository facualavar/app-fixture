import {
    Routes as RoutesReact,
    Route,
} from "react-router-dom"

import Group from "../sections/Group/Group"
import Login from "../sections/Login/Login"

const Routes = () => {
    return (
        <RoutesReact>
            <Route exact path='/' element={<Login />}/>
            <Route path='/groups/:groupId' element={<Group />}/>
        </RoutesReact>
    )
}

export default Routes