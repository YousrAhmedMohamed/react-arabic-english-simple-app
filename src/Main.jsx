import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter , Link } from 'react-router-dom';
 import Home from './Home';
import Second from './Second';
import Third from './Third';
import { getList } from './APIs/api';
import { languageChanged, basedNumberChanged } from './actions';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getList();
    dispatch(basedNumberChanged(Math.floor(Math.random() * 1996)));
  }, [dispatch]);

  return (
    <BrowserRouter>
        <React.Fragment>
          <div>
          <button onClick={() => dispatch(languageChanged(false))}>English</button>
          <button style={{ marginLeft: '10px' }} onClick={() => dispatch(languageChanged(true))}>العربية</button>
        </div>
        <br/><br/>
        <div>
            <Link to="/">Home </Link><br/>
            <Link to="/second"> Second Page </Link><br/>
            <Link to="/third"> third page </Link><br/>
        </div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
    );
}
export default Main;