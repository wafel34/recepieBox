var React = require("react"),
    ReactBootsrap = require("react-bootstrap");

var Button = ReactBootsrap.Button,
    ListGroup = ReactBootsrap.ListGroup,
    ListGroupItem = ReactBootsrap.ListGroupItem,
    Panel = ReactBootsrap.Panel,
    Modal = ReactBootsrap.Modal;

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
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                        <Modal.Body>{this.props.ingridients.join(", ")}</Modal.Body>
                    </Modal.Header>
                </Modal>
            </div>
        );
    }
}
module.exports = SingleRecepie;
