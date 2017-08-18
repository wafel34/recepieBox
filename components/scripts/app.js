
var $ = window.jQuery = require("jQuery"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    ReactBootsrap = require("react-bootstrap"),
    bootstrap = require("bootstrap-sass"),
    SingleRecepie = require("./singleRecepie"),
    AddNewRecepie = require("./addRecepie");

var Button = ReactBootsrap.Button,
    ListGroup = ReactBootsrap.ListGroup,
    Accordion = ReactBootsrap.Accordion;

class ReciepiesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.getFromLocalStorage() || [
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
    addToLocalStorage = (recepies) =>{
        localStorage.setItem('data', JSON.stringify(recepies));
    }
    getFromLocalStorage = () => {
        var item = localStorage.getItem("data");
        return JSON.parse(item);
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
    saveRecepie = (name, title, ingrids) => {
        var tempData = this.state.data;

        tempData = tempData.map( (item) => {
            if (item.recepieName === name) {
                item.recepieName = title;
                item.ingridients = ingrids.split(",");
            }
            this.setState({
                data: tempData
            });
        });
    }
    addRecepie = (obj) => {
        var tempData = this.state.data;
        this.setState({
            data: [
                obj,
                ...tempData
            ]
        });
    }
    render () {
        var recepies = this.state.data;
        this.addToLocalStorage(recepies);
        recepies = recepies.map( (item, id) => {
            return (
                <SingleRecepie
                    key={id}
                    id={id}
                    onDelete={this.removeRecepie}
                    name={item.recepieName}
                    ingridients={item.ingridients}
                    onSave={this.saveRecepie}
                    onAddRecepie={this.addRecepie} />
            );
        });
        return (
            <div>
            <Accordion>
                {recepies}
            </Accordion>
            <AddNewRecepie
                onAddRecepie={this.addRecepie}/>
            </div>

        );
    }
}

ReactDOM.render(<ReciepiesContainer />, document.getElementById("main-interface"));
