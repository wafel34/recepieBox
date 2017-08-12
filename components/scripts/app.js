
var $ = window.jQuery = require("jQuery"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    bootstrap = require("bootstrap-sass");

class ReciepiesContainer extends React.Component {
    render () {
        return (
            <div clasName="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-primary">
                    <div className="panel-heading" role="tab" id="heading1">
                        <div className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapseOne">
                                Collapse 1
                            </a>
                        </div>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item">List item 1</li>
                                <li className="list-group-item">List item 2</li>
                                <li className="list-group-item">List item 3</li>
                            </ul>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ReciepiesContainer />, document.getElementById("main-interface"));
