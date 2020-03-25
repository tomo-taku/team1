import Head from 'next/head'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Top from '../templates/Top'
import GlobalHeader from '../organisms/GlobalHeader'

const Index: React.FC = () => (
    <React.Fragment>
        <Head>
            <title>換気アプリ</title>
        </Head>

        <CssBaseline />
        <GlobalHeader/>
        <Top/>
    </React.Fragment>
)

export default Index
