import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

type Props = {
    isVentilation: boolean
}

const VentilationPanel: React.FC<Props> = ({isVentilation}) => {
    return (
        <PanelContainer isVentilation={isVentilation}>
            <MainTitle variant='h3'>
                {isVentilation ? '換気しましょう' : '空気が綺麗です'}
            </MainTitle>
        </PanelContainer>
    )
}

const PanelContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.isVentilation ? 'rgb(246, 105, 175)' : 'rgb(85, 205, 194)'};
    height: 300px;
    width: 400px;
    padding: 2em;
    -webkit-border-radius: 16px;-moz-border-radius: 16px;border-radius: 16px;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .3);-moz-box-shadow: 0 0 4px rgba(0, 0, 0, .3);box-shadow: 0 0 4px rgba(0, 0, 0, .3);
`

const MainTitle = styled(Typography)`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
`

export default VentilationPanel
