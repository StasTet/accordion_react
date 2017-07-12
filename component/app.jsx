import React from 'react';
import axios from 'axios';
import MainItem from './mainItem.jsx';
import '../style/style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: [],
        };
    }

    componentDidMount() {
        const urlJson = '../src/data.json';

        axios
            .get(urlJson)
            .then(({data}) => {
                this.setState({
                    item: data
                });
            })
            .catch(console.error)
    }

    render() {
        return (
            <div>
                {this.state.item.map((item, index) => {
                    item.id = index
                    return <MainItem data={item} key={index}/>
                })}
            </div>
        );
    }
}

export default App;