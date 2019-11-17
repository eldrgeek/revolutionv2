import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'

import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

const themes = [
    {
        id: 'default',
        color: blue[400],
        source: {
            palette: { type: "dark"},
            
        }
    },
  {
        id: 'red',
        color: red[500],
        source: {
            palette: {
                primary: red,
                secondary: pink,
                error: red
            }
        }
    },
    {
        id: 'Black',
        color: grey[600],
        type: 'dark',
        source: {
            palette: {
                primary: grey,
                secondary: blue,
                error: red
            }
        },
        contrastThreshold: 5,
    tonalOffset: 0.4,
    },
    {
        id: 'green',
        color: green[500],
        source: {
            palette: {
                primary: green,
                secondary: red,
                error: red
            }
        }
    }
]

export default themes
