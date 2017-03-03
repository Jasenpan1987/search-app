import React, { Component } from "react";
import { connect } from "react-redux";

import { searchAct } from "../actions/search";

class Search extends Component {
    constructor(props){
        super(props);

        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            keywords: "",
            url: "",
            error: []
        }
    }

    handleKeywordChange(e){
        this.setState({
            keywords: e.target.value,
            error: []
        });
    }

    handleUrlChange(e){
        this.setState({
            url: e.target.value,
            error: []
        });
    }

    handleSearch(e){
        // ToDo: 
        // move the validation logic into a separate function
        e.preventDefault();

        const { keywords, url } = this.state;
        
        const error = [];

        // the reason to do the validation here is because setState 
        // does not immidately set the state, which means when submit
        // the form, the error has not yet been set to the newest state
        if(this.state.keywords.length === 0){
            error.push("Please provide some keywords")
        }

        if(this.state.url.length === 0){
            error.push("Please prodide a url");
        }

        if(this.state.keywords.length >= 70){
            error.push("Too many keywords");
        }

        if(error.length>0){
            this.setState({
                error
            });
        }else{
            this.props.search(
                formatKeywords(keywords), 
                formatUrl(url)
            );
        }
    }

    render(){
        return (
            <div>
                <div className="mui-form">
                    
                    <form onSubmit={this.handleSearch}>
                        <div className="mui-textfield">
                            <input type="text" placeholder="Keywords"
                                onChange={this.handleKeywordChange}
                            />
                        </div>

                        <div className="mui-textfield">
                            <input type="text" placeholder="URL"
                                onChange={this.handleUrlChange}
                            />
                        </div>
                        { this.props.loading ? 
                            <div className="loader mui--text-center"></div>
                            :
                            <div className="form-group">
                                <input type="submit" value="GO" 
                                    className="mui-btn mui-btn--raised mui-btn--primary"/>
                            </div>
                        }
                    </form>
                    
                    <ul className="errorlist mui--text-title">
                        {this.state.error.map((err, idx) => (<li key={idx}>{err}</li>))}
                    </ul>
                </div>
            </div>
        )
    }
}

function formatUrl(url){
    // www.infotrack.com.au => infotrack
    // this will help to hit more results
    return url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0]
}

function formatKeywords(keywords){
    // change it into google search format (keyword1 + keyword2)
    return keywords.trim().replace(" ", "+");
}

const mapStateToProps = state => {
    return {
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: (keywords, url) => dispatch(searchAct(keywords, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);