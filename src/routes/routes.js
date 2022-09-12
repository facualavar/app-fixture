import {
    Routes as RoutesReact,
    Route,
} from "react-router-dom"

import Group from "../sections/Group/Group"

const Routes = () => {
    return (
        <RoutesReact>
            <Route exact path='/'/>
            <Route path='/groups/:groupId' element={<Group />}/>
        </RoutesReact>
    )
}

export default Routes