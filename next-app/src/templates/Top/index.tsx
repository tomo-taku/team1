import React from 'react'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import LineGraph from '../../organisms/LineGraph'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Top: React.FC = () => {
    return (
        <React.Fragment>
            <Container maxWidth='lg' component='main'>

                <GraphBox>
                    <GraphTitle variant='subtitle1'>ダストセンサ</GraphTitle>
                    <LineGraph />
                </GraphBox>

                <GraphBox>
                    <GraphTitle variant='subtitle1'>二酸化炭素センサ</GraphTitle>
                    <LineGraph />
                </GraphBox>

            </Container>
        </React.Fragment>
    )
}

const GraphTitle = styled(Typography)`
  margin-bottom: 8px;
  font-weight: bold;
`

const GraphBox = styled(Box)`
  margin-top: 4em;
  padding: 2em;
  border: 2px solid #d4d4d4;
  -webkit-border-radius: 16px;-moz-border-radius: 16px;border-radius: 16px;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .3);-moz-box-shadow: 0 0 4px rgba(0, 0, 0, .3);box-shadow: 0 0 4px rgba(0, 0, 0, .3);
`

export default Top
