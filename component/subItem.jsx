import React from 'react';

class SubItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wvisible: false
        }
    }
    
    render() {
        return(
            <ul className="subitems">
                {this.props.data.map((item, index) => {
                    return <li key={index}><a href={item.url}>{item.title}</a></li>
                })}
            </ul>
        )
    }
}

export default SubItem;