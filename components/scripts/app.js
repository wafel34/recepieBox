//IMPORT DEPENDENCIES
var $ = window.jQuery = require("jQuery"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    ReactBootsrap = require("react-bootstrap"),
    bootstrap = require("bootstrap-sass"),
    SingleRecepie = require("./singleRecepie"),
    AddNewRecepie = require("./addRecepie"),
    Heading = require("./heading");

//IMPORT REACT BOOTSTRAP COMPONENENTS
var Button = ReactBootsrap.Button,
    ListGroup = ReactBootsrap.ListGroup,
    Accordion = ReactBootsrap.Accordion;

//MAIN COMPONENT - HANDLES THE STATE OF RECEPIES
class ReciepiesContainer extends React.Component {
    constructor(props) {
        super(props);

        //INITIAL STATE: IF ANYTHING HAS BEEN SAVED TO LOCAL STORAGE TAKE IT, IF NOT TAKE DEFAULT DATA
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
    //SAVE STATE TO LOCAL STORAGE
    addToLocalStorage = (recepies) =>{
        if (window.localStorage) {
            localStorage.setItem('recepieData', JSON.stringify(recepies));
        } else {
            console.log("Sorry, local storage is not supported in this browser!");
        }
    }

    //TAKE DATA FROM LOCAL STORAGE, BUT FIRST CHECK IF LS IS AVAILALE
    getFromLocalStorage = () => {
        var item = localStorage.getItem("recepieData");
        return JSON.parse(item);
    }

    //REMOVE RECEPIE FROM THE SCREEN
    removeRecepie = (name) => {
        var tempData = this.state.data;
        tempData = tempData.filter( (item) => {
            return item.recepieName !== name;
        });

        this.setState({
            data: tempData
        });
    }

    // TAKE PROPERTIES AND UPDATE THE STATE
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

    //HANDLES ADDING NEW RECEPIE
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

        //MAP THROUGH DATA AND RETURN COMPONENT FOR EACH RECEPIE
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

        //CREATE AND ACCORDION AND PLACE RECEPIES INSIDE, ALSO ADD BUTTON FOR ADDING NEW RECEPIES
        return (
            <div>
                <Heading />
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
