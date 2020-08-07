import React from "react";
import {render} from "react-dom";
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import {mainRouter} from './routes'


import App from "./App";


render(
    <Router>
        <Switch>
            <Route path={"/admin"} render={(routerProps)=>{
                //需要登录才能访问
                return <App {...routerProps}/>
            }}/>
            {
                mainRouter.map(item => {
                    return <Route key={item.pathname} path={item.pathname} component={item.component}/>
                })
            }
        })
        </Switch>

    </Router>,
    document.querySelector('#root')
);
