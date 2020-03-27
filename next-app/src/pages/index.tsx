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

        <body>
        <CssBaseline/>
        <GlobalHeader/>
        <Top/>
        </body>

        <style jsx>{`
            body {
                background-color: rgba(255, 220, 44, .8);
                padding: 2em 0;
            }
        `}</style>
    </React.Fragment>
)

export default Index
