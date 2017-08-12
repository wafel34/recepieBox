
var $ = window.jQuery = require("jQuery"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    bootstrap = require("bootstrap-sass"),
    SingleRecepie = require("./singleRecepie");

class ReciepiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data : [
                {
                    recepieName: "spaghetti",
                    ingridients: ["pasta","meat","sauce"]
                },
                {
                    recepieName: "ravioli cake",
                    ingridients: ["ravioli","meat","sauce", "cheese"]
                }
            ]
        };
    }
    render () {
        return (
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <SingleRecepie />
            </div>
        );
    }
}

ReactDOM.render(<ReciepiesContainer />, document.getElementById("main-interface"));
