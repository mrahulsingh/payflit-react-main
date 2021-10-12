import React from 'react'
import {
    Route,
} from 'react-router-dom'
const AppRoute = (route) => {
    return (
        <Route 
            path={route.path} 
            exact={route.exact} 
            render={(props) => <route.component {...props} />}
        />
    )
}

export default AppRoute;
