import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const GlobalHeader: React.FC = () => {
    return (
        <React.Fragment>
            <AppBar position='static'>
                <Toolbar component='div'>
                    <Title variant='h6'>
                        換気を促すアプリ
                    </Title>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

const Title = styled(Typography)`
    font-weight: bold;
`

export default GlobalHeader
