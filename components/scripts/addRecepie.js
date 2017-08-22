var React = require("react"),
    ReactBootsrap = require("react-bootstrap");

var Button = ReactBootsrap.Button,
    Modal = ReactBootsrap.Modal,
    FormGroup = ReactBootsrap.FormGroup,
    FormControl = ReactBootsrap.FormControl,
    ControlLabel = ReactBootsrap.ControlLabel;

class AddNewRecepie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };
    }
    openModal = () => {
        this.setState({
            showModal: true
        });
    } //OPEN MODAL
    closeModal = () => {
        this.setState({
            showModal: false
        });
    } //CLOSED MODAL
    saveRecepie = (e) => {
        e.preventDefault();
        this.setState({
            showModal: false
        });
        var name = this.inputTitle.value,
            ingridients = this.inputIngridients.value,
            recepieObject = {
                recepieName: name,
                ingridients: ingridients.split(",")
            }
        this.props.onAddRecepie(recepieObject);
    } //SAVE EDITED MODAL
    render() {
        return (
            <div>
                <Button bsStyle="success" onClick={this.openModal}>Add new recepie</Button>
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <form onSubmit={this.saveRecepie}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <FormGroup controlId="recepieNameForm">
                                <ControlLabel>Recepie Name</ControlLabel>
                                <FormControl inputRef={(ref) => {this.inputTitle = ref}} required componentClass="textarea" placeholder="Type recepie name here" />
                           </FormGroup>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="ingridientsForm">
                            <ControlLabel>Ingridients - sepparated by commas</ControlLabel>
                            <FormControl inputRef={(ref) => {this.inputIngridients = ref}} required componentClass="textarea" placeholder="Ingridients separated by commas" />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" bsStyle="primary">Add</Button>
                    </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}

module.exports = AddNewRecepie;
