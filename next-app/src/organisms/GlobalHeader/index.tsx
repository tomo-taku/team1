import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const GlobalHeader: React.FC = () => {
    return (
        <React.Fragment>
            <HeaderContainer position='static'>
                <Toolbar component='div'>
                    <Title variant='h6'>
                        換気を促すアプリ
                    </Title>
                </Toolbar>
            </HeaderContainer>
        </React.Fragment>
    )
}

const Title = styled(Typography)`
    font-weight: bold;
    color: #fff;
`

const HeaderContainer = styled(AppBar)`
  background-color: rgb(85, 205, 194);
  border-radius: 16px;
  width: 90%;
  margin: 0 auto;
`

export default GlobalHeader
