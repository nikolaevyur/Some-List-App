import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import { AppRoute } from "../../const";
import NotFound from "../../pages/not found/not found";


const App = ({events}) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path={AppRoute.MAIN} events={events} exact component={Main} />
        <Route path={AppRoute.ARCHIVE} exact component={Archive} /> */}
        <Route path={AppRoute.MAIN} exact>
          <Main events={events}/>
        </Route>
        <Route path={AppRoute.ARCHIVE} exact>
          <Archive events={events}/>
        </Route>
        <Route path={AppRoute.EVENT} exact component={Form} />
        <Route component={NotFound} />
      </Switch> 
    </BrowserRouter>
   
  )
}

export default App;