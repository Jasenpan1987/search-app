import React, { Component } from "react";

class Search extends Component {
    constructor(props){
        super(props);

        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            keyword: "online title search",
            url: "www.infotrack.com.au"
        }
    }

    handleKeywordChange(e){
        this.setState({
            keyword: e.target.value
        });
    }

    handleUrlChange(e){
        this.setState({
            url: e.target.value
        });
    }

    handleSearch(e){
        e.preventDefault();
        console.log(this.state.keyword, this.state.url)
    }

    render(){
        return (
            <div className="col s6 offset-s3">
                <div className="mui-form">
                    <legend>Title</legend>
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
                        
                        <div className="form-group pull-right">
                            <input type="submit" value="GO" className="btn"/>
                        </div>

                    </form>
                </div>
            </div>
            
        )
    }
}

export default Search;