var React = require("react");

class Heading extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <header className="main-header">
                <h1>Welcome to Recepie Box!</h1>
                <p className="main-header--paragraph">
                    You can make a list of your recepies in here. Add new ones, modify existing ones.
                    Recepies are saved in a local browser storage so you will be able access them even after refreshing the page!
                </p>
            </header>
        )
    }
}

module.exports = Heading;
