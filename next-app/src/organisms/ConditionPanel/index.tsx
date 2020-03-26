import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

type Props = {
    dustConcentration: number
    co2Concentration: number
}

const ConditionPanel: React.FC<Props> = ({dustConcentration, co2Concentration}) => {
    return (
        <PanelContainer>
            <Box>
                <Title variant='subtitle1'>
                    現在のダスト濃度
                </Title>
                <Numeric variant='subtitle1' display='inline' isRed={dustConcentration > 100}>
                    {dustConcentration}
                </Numeric>
                <Unit variant='caption' display='inline'>[μg/ m3]</Unit>
            </Box>

            <Box mt={4}>
                <Title variant='subtitle1'>
                    現在の二酸化炭素濃度
                </Title>
                <Numeric variant='subtitle1' display='inline' isRed={co2Concentration > 1000}>
                    {co2Concentration}
                </Numeric>
                <Unit variant='caption' display='inline'>[ppm]</Unit>
            </Box>
        </PanelContainer>
    )
}

const PanelContainer = styled(Box)`
    background-color: #fff;
    height: 300px;
    width: 400px;
    padding: 2em;
    -webkit-border-radius: 16px;-moz-border-radius: 16px;border-radius: 16px;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .3);-moz-box-shadow: 0 0 4px rgba(0, 0, 0, .3);box-shadow: 0 0 4px rgba(0, 0, 0, .3);
`

const Title = styled(Typography)`
    font-weight: bold;
    font-size: 20px;
`

const Numeric = styled(Typography)`
    font-weight: bold;
    font-size: 32px;
    margin-left: 1em;
    color: ${props => props.isRed ? 'rgb(246, 105, 175)' : 'rgb(85, 205, 194)'};
`

const Unit = styled(Typography)`
    font-weight: 500;
    margin-left: 1em;
`

export default ConditionPanel
