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
    }
    closeModal = () => {
        this.setState({
            showModal: false
        });
    }
    saveModal = (e) => {
        e.preventDefault();
        this.setState({
            showModal: false
        });
        var name = this.props.name,
            title = e.target.querySelector("#recepieNameForm").value,
            ingridients = e.target.querySelector("#ingridientsForm").value;
        this.props.onSave(name, title, ingridients);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.name);
    }
    render() {
        var ingridients = this.props.ingridients;
        ingridients = ingridients.map( (item, id) => {
            return (
                <ListGroupItem key={id}>{item}</ListGroupItem>
            );
        });
        return (
            <div>
                <Panel bsStyle="primary" collapsible header={this.props.name}>
                    <ListGroup>
                        {ingridients}
                    </ListGroup>
                    <Button bsStyle="primary" onClick={this.openModal}>Edit</Button>
                    <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
                </Panel>

                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <form onSubmit={this.saveModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>

                            <FormGroup name="dupa" controlId="recepieNameForm">
                                <ControlLabel>Recepie Name</ControlLabel>
                                <FormControl componentClass="textarea" defaultValue={this.props.name} />
                           </FormGroup>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="ingridientsForm">
                            <ControlLabel>Ingridients - sepparated by commas</ControlLabel>
                            <FormControl componentClass="textarea" defaultValue={this.props.ingridients.join(", ")} />
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
