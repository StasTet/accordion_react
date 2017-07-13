import React from 'react';
import * as mainItemsAction from '../actions/mainItemsAction.js'
import MainItem from './mainItem.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const urlJson = '../../files/data.json';
        this.props.mainItemsAction.getData(urlJson);
    }

    render() {
        const { data } = this.props.stateApp;

        return (
            <div>
                {
                    data.map((item, index) => {
                        item.id = index;
                        item.visible = false;
                        return <MainItem data={item} key={index}/>
                    })
                }
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        stateApp: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mainItemsAction: bindActionCreators(mainItemsAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);