
var $ = window.jQuery = require("jQuery"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    ReactBootsrap = require("react-bootstrap"),
    bootstrap = require("bootstrap-sass"),
    SingleRecepie = require("./singleRecepie");

var Button = ReactBootsrap.Button,
    ListGroup = ReactBootsrap.ListGroup,
    Accordion = ReactBootsrap.Accordion;

class ReciepiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    removeRecepie = (name) => {
        var tempData = this.state.data;
        tempData = tempData.filter( (item) => {
            return item.recepieName !== name;
        });

        this.setState({
            data: tempData
        });
    }
    render () {
        var recepies = this.state.data;
        recepies = recepies.map( (item, id) => {
            return (
                <SingleRecepie
                    key={id}
                    id={id}
                    onDelete={this.removeRecepie}
                    name={item.recepieName}
                    ingridients={item.ingridients} />
            );
        });
        return (
            <Accordion>
                {recepies}
            </Accordion>
        );
    }
}

ReactDOM.render(<ReciepiesContainer />, document.getElementById("main-interface"));
