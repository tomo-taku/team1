import React from 'react'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import LineGraph from '../../organisms/LineGraph'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ConditionPanel from '../../organisms/ConditionPanel'
import VentilationPanel from '../../organisms/VentilationPanel'

const dustData = [
    {date: '9:00', concentration: 5.74},
    {date: '10:00', concentration: 19.25},
    {date: '11:00', concentration: 7.91},
    {date: '12:00', concentration: 1.60},
    {date: '13:00', concentration: 3.34},
    {date: '14:00', concentration: 4.28},
    {date: '15:00', concentration: 6.88},
    {date: '16:00', concentration: 5.18},
    {date: '17:00', concentration: 11.50},
]

const co2Data = [
    {date: '9:00', concentration: 400},
    {date: '10:00', concentration: 600},
    {date: '11:00', concentration: 500},
    {date: '12:00', concentration: 1000},
    {date: '13:00', concentration: 300},
    {date: '14:00', concentration: 800},
    {date: '15:00', concentration: 700},
    {date: '16:00', concentration: 900},
    {date: '17:00', concentration: 1200},
]

const Top: React.FC = () => {
    // 最新のデータを取り出す
    const latestDustData = dustData.slice(-1)[0].concentration
    const latestCo2Data = co2Data.slice(-1)[0].concentration
    // 換気が必要かどうか
    const isVentilation = latestDustData > 100 || latestCo2Data > 1000

    return (
        <React.Fragment>
            <Container maxWidth='lg' component='main'>

                <InformationContainer>
                    <ConditionPanel
                        dustConcentration={latestDustData}
                        co2Concentration={latestCo2Data}
                    />
                    <VentilationPanel
                        isVentilation={isVentilation}
                    />
                </InformationContainer>

                <GraphBox>
                    <GraphTitle variant='subtitle1'>ダストセンサ</GraphTitle>
                    <LineGraph data={dustData}/>
                </GraphBox>

                <GraphBox>
                    <GraphTitle variant='subtitle1'>二酸化炭素センサ</GraphTitle>
                    <LineGraph data={co2Data}/>
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
    background-color: #fff;
    margin-top: 4em;
    padding: 2em;
    -webkit-border-radius: 16px;-moz-border-radius: 16px;border-radius: 16px;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .3);-moz-box-shadow: 0 0 4px rgba(0, 0, 0, .3);box-shadow: 0 0 4px rgba(0, 0, 0, .3);
`

const InformationContainer = styled(Box)`
    margin-top: 4em;
    display: flex;
    justify-content: space-around;
`

export default Top
