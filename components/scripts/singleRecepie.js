var React = require("react"),
    ReactBootsrap = require("react-bootstrap");

var Button = ReactBootsrap.Button,
    ListGroup = ReactBootsrap.ListGroup,
    ListGroupItem = ReactBootsrap.ListGroupItem,
    Panel = ReactBootsrap.Panel;

class SingleRecepie extends React.Component {
    constructor(props){
        super(props);
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
            <Panel bsStyle="primary" collapsible header={this.props.name}>
                <ListGroup>
                    {ingridients}
                </ListGroup>
                <Button bsStyle="primary">Edit</Button>
                <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
            </Panel>
        );
    }
}
module.exports = SingleRecepie;
