import React from 'react';

class SubItem extends React.Component {
    
    render() {
        return(
            <ul className={"main__subitems " + (this.props.style ? "show" : "hidden")}>
                {this.props.data.map((item, index) => {
                    return <li key={index}><a href={item.url}>{item.title}</a></li>
                })}
            </ul>
        )
    }
}

export default SubItem;