var React = require("react"),
    ReactBootsrap = require("react-bootstrap");

var Button = ReactBootsrap.Button,
    ListGroup = ReactBootsrap.ListGroup,
    ListGroupItem = ReactBootsrap.ListGroupItem,
    Panel = ReactBootsrap.Panel,
    Modal = ReactBootsrap.Modal,
    FormGroup = ReactBootsrap.FormGroup,
    FormControl = ReactBootsrap.FormControl,
    ControlLabel = ReactBootsrap.ControlLabel;

class SingleRecepie extends React.Component {
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
    saveModal = (e) => {
        e.preventDefault();
        this.setState({
            showModal: false
        });
        var name = this.props.name,
            title = this.inputTitle.value,
            ingridients = this.inputIngridients.value;
        this.props.onSave(name, title, ingridients);
    } //SAVE EDITED MODAL
    handleDelete = () => {
        this.props.onDelete(this.props.name);
    } //HANDLE DELETE
    render() {
        var ingridients = this.props.ingridients;
        ingridients = ingridients.map( (item, id) => {
            return (
                <ListGroupItem key={id}>{item}</ListGroupItem>
            );
        });
        return (
            <div>
                {/* THIS COMPONENT RENDER A BOX FOR EACH RECEPIE IN STATE.DATA */}
                <Panel bsStyle="primary" collapsible header={this.props.name}>
                    <ListGroup>
                        {ingridients} {/* MAP THROUGH ALL INGRIDIENTS AND RETRUN EACH AS A LIST GROUP ITEM */}
                    </ListGroup>
                    <Button bsStyle="primary" onClick={this.openModal}>Edit</Button>
                    <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
                </Panel>

                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <form onSubmit={this.saveModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>

                            <FormGroup controlId="recepieNameForm">
                                <ControlLabel>Recepie Name</ControlLabel>
                                <FormControl inputRef={(ref) => {this.inputTitle = ref}} componentClass="textarea" defaultValue={this.props.name} />
                           </FormGroup>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="ingridientsForm">
                            <ControlLabel>Ingridients - sepparated by commas</ControlLabel>
                            <FormControl inputRef={(ref) => {this.inputIngridients = ref}} componentClass="textarea" defaultValue={this.props.ingridients.join(",")} />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" bsStyle="primary">Save</Button>
                    </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}
module.exports = SingleRecepie;
