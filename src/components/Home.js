import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

export default class Home extends React.Component {
    componentDidMount( ) {
        
    }

    render( ) {
        return (
            <div>
                <h2>F1 2018 Season Calendar</h2>
            </div>
        );
    }
}
;
// Home.serverFetch = fetchData; // static declaration of data requirements

// const mapStateToProps = ( state ) => ( {
//     circuits: state.data,
// } );

// const mapDispatchToProps = {
//     fetchData,
// };

// export default connect( mapStateToProps, mapDispatchToProps )( Home );
