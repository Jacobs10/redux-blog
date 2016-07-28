import React, { Component } from 'react'
import App from './components/app.js'
import { Route, IndexRoute} from 'react-router'
import PostIndex from './post_index.js'
import PostsNew

export default (
  <Route>
    <IndexRoute component={PostIndex} />
    <Route path='posts/new' component={PostsNew}
  </Route>
)
