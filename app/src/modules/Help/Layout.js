import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './Index/index';

const ModuleLayout = (props: Object): Object=>{
  return (
    <Switch>
      <Route path="/Help" component={ Index } exact />
    </Switch>
  );
};

export default ModuleLayout;