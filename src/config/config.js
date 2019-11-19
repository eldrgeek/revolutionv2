import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading
})

const config = {
  firebase_config: {
   apiKey: "AIzaSyC9O-Cnnm5sBDGlcfGPc0oWQjA2-pMOrwg",
  authDomain: "revolution-1x1.firebaseapp.com",
  databaseURL: "https://revolution-1x1.firebaseio.com",
  projectId: "revolution-1x1",
  storageBucket: "revolution-1x1.appspot.com",
  messagingSenderId: "779744556471",
  appId: "1:779744556471:web:28e6cd98d83fc44aabe432",
  measurementId: "G-X2X53JN2LF"
  },
  firebase_config_dev: {
    apiKey: "AIzaSyA_oU-_G6ThUQY7ki9KDra794oksaDPfC8",
    authDomain: "revolution1x1dev.firebaseapp.com",
    databaseURL: "https://revolution1x1dev.firebaseio.com",
    projectId: "revolution1x1dev",
    storageBucket: "revolution1x1dev.appspot.com",
    messagingSenderId: "500287466116",
    appId: "1:500287466116:web:d9e6d336436de6c86430d1",
    measurementId: "G-D2QZ6R9DN1"
  },
  firebase_providers: ['google.com',
   'facebook.com', 
    'password', 'phone'],
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'dark'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync
}

export default config
