var React = require("react");

class SingleRecepie extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var ingridients = this.props.ingridients;
        ingridients = ingridients.map( (item, id) => {
            return (
                <li className="list-group-item" key={id}>{item}</li>
            )
        });
        return (
            <div className="panel panel-primary">
                <div className="panel-heading" role="tab" id={"heading" + this.props.id}>
                    <div className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse" + this.props.id} aria-expanded="true" aria-controls={"collapse" + this.props.id}>
                            {this.props.name}
                        </a>
                    </div>
                </div>
                <div id={"collapse" + this.props.id} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"#heading" + this.props.id}>
                    <div className="panel-body">
                        <ul className="list-group">
                            {ingridients}
                        </ul>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = SingleRecepie;
