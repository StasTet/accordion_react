import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash'
import * as loadDataAction from '../../actions/slider/loadDataAction.js';
import Slide from './slide.jsx';
import FullPreview from './fullPreview.jsx';
import '../../../styles/slider.scss'
import { OPEN_SLIDE, CLOSE_SLIDE, PREV_SLIDE, NEXT_SLIDE } from '../../constants';

class Slider extends Component {

    componentDidMount() {
        const urlJson = '../../../files/slider.json';

        this.loadData(urlJson);
    }

    loadData(url) {
        this.props.loadDataAction.getData(url);
    }

    handleClick(current) {
        this.props.loadDataAction.setSlide(CLOSE_SLIDE, current.id);
        this.props.loadDataAction.setSlide(OPEN_SLIDE, current.id);
    }

    prevClick() {
        this.props.loadDataAction.setSlide(PREV_SLIDE);
    }

    nextClick() {
        this.props.loadDataAction.setSlide(NEXT_SLIDE);
    }

    setCurrentSlide() {
        let currentIndex = null;
        let currentSlide = null;

        this.props.slider.data.map((item, index) => {
            if (item.visible) {
                currentIndex = index;
            }
        });

        return currentSlide = this.props.slider.data[currentIndex]
    }

    render() {
        return (
            <div className="slider__container">
                <div className="big-image"><FullPreview data={this.setCurrentSlide()} /></div>
                <div className="row">
                    <div className="prev-btn btn" onClick={this.prevClick.bind(this)}></div>
                    <div className="row-image">
                        <div className="slides">
                            {this.props.slider.data.map((item) => {
                                return <Slide key={_.uniqueId()} data={item} onChildClick={this.handleClick.bind(this)} />
                            })}
                        </div>
                    </div>
                    <div className="next-btn btn" onClick={this.nextClick.bind(this)}></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        slider: state.slider
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataAction: bindActionCreators(loadDataAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);