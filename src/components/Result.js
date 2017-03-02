import React from "react";
import { connect } from "react-redux";

const ResultList = (props) => {
    return (
        <div>
            <h3>Result</h3>
            <p>{props.searchResult.data}</p>   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResult: state.search
    }
}

export default connect(mapStateToProps)(ResultList)