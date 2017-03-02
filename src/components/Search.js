import React, { Component } from "react";
import { connect } from "react-redux";

import { searchAct } from "../actions/search";

class Search extends Component {
    constructor(props){
        super(props);

        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.validate = this.validate.bind(this);

        this.state = {
            keywords: "",
            url: "",
            error: []
        }
    }

    validate(){
        const error = [];

        if(this.state.keywords.length === 0){
            console.log(1, this.state.error)
            error.push("Please provide some keywords")
        }

        if(this.state.url.length === 0){
            console.log(2, this.state.error)
            error.push("Please prodide a url");
        }

        if(this.state.keywords.length >= 70){
            console.log(3, this.state.error)
            error.push("Too many keywords");
        }

        if(error.length>0){
            this.setState({
                error
            });
        }else{
            this.props.search(
                formatKeywords(this.state.keywords), 
                formatUrl(this.state.url)
            );
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
        e.preventDefault();
        const { keywords, url } = this.state;
        
        this.validate(keywords, url);
        const formarttedUrl = formatUrl(url);

        console.log(this.state.keywords, formarttedUrl);
    }

    render(){
        return (
            <div>
                <div className="mui-form">
                    <h3>Search App</h3>
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
                            <div className="form-group pull-right">
                                <input type="submit" value="GO" className="btn submitbtn"/>
                            </div>
                        }
                    </form>
                    
                    <ul className="errorlist">
                        {this.state.error.map((err, idx) => (<li key={idx}>{err}</li>))}
                    </ul>
                </div>
            </div>
        )
    }
}

function formatUrl(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0]
}

function formatKeywords(keywords){
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