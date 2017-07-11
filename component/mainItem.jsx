import React from 'react';
import axios from 'axios';

import SubItem from './subItem.jsx'

class MainItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // isToggle: false,
            item: []
        };
    }

    componentWillMount(){
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

    handleClick(event) {
        // this.setState(prevState => ({
        //     isToggle: !prevState.isToggle
        // }));
        console.log(event)
    }

    render() {
        return (
            <div>
                {this.state.item.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="main-item">{item.title}</div>
                            <SubItem data={item.subitems} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MainItem;