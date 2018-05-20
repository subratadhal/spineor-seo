import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Helmet from "react-helmet";
import routes from "./routes";
import Layout from "./components/Layout";
import createStore, { initializeSession } from "./store";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const context = { };
    const store = createStore( );



    store.dispatch( initializeSession( ) );

    const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) )         // filter matching paths
            .map( route => route.component )                        // map to components
            .filter( comp => comp.serverFetch )                     // check if components have data requirement
            .map( comp => store.dispatch( comp.serverFetch( ) ) );  // dispatch data requirement

    Promise.all( dataRequirements ).then( ( ) => {
        const jsx = (
            <ReduxProvider store={ store }>
                <StaticRouter context={ context } location={ req.url }>
                    <Layout />
                </StaticRouter>
            </ReduxProvider>
        );
        const reactDom = renderToString( jsx );
        const reduxState = store.getState( );
        const helmetData = Helmet.renderStatic( );

        const mimeTypes = {
              "html": "text/html",
              "mp3":"audio/mpeg",
              "mp4":"video/mp4",
              "jpeg": "image/jpeg",
              "jpg": "image/jpeg",
              "png": "image/png",
              "js": "text/javascript",
              "css": "text/css"};

        res.writeHead( 200, { "Content-Type": mimeTypes } );
        res.end( htmlTemplate( reactDom, reduxState, helmetData ) );
    } );
} );

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on');
});

function htmlTemplate( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>React SSR</title>
            <link rel="icon" href="/images/favicon.ico" />
            <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <link href="/css/styles.css" rel="stylesheet" type="text/css" />
            <link href="/css/horizontal.css" rel="stylesheet" type="text/css" />
            
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
