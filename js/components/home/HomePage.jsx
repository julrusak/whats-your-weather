import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeatherIcon from './WeatherIcon';
import DocumentMeta from 'react-document-meta';
import actions from '../../actions';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            zipValue: '',
            weatherReceived: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        globals.initializeComponent();
    }
    componentWillUnmount(){
        globals.unmountComponent();
    }
    componentDidUpdate(prevProps, prevState) {
        prevProps.homePageData.currentWeather != this.props.homePageData.currentWeather && this.setState({weatherReceived: true })
    }
    handleChange(event) {
        this.setState({zipValue: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.getWeather(this.state.zipValue);
    }
    render() {
        console.log("this.props", this.props)
        let weatherInfo = this.props.homePageData.currentWeather;
        let temperature = (((weatherInfo.main.temp-273.15)*1.8)+32).toFixed()
        return (
            <div id="homepage">
                <DocumentMeta {...meta.home} />
                <h1>{this.props.homePageData.heroTitle}</h1>
                { this.props.homePageData.error && 
                    <div>{this.props.homePageData.error}</div>
                }
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="zip" 
                        autoComplete="postal-code" 
                        name='zip' id="zip" ref='zip' 
                        value={this.state.zipValue} 
                        onChange={this.handleChange} 
                        placeholder="Enter your zip code" 
                        maxLength={5}
                    />
                    <input type="submit" value="Submit" />
                </form>
                { this.state.weatherReceived &&
                    <div>
                        <h2 className="cityName">{weatherInfo.name}</h2>
                        <h2 className="cityTemp">{temperature}</h2> 
                        <div>
                            { weatherInfo.weather.map((w, i) =>
                                <div key={i}>
                                    <p>{w.main}</p>
                                    <WeatherIcon temp={w.id} />
                                </div>
                            )}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        homePageData: state.homePageData,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getWeather: (zip) => {
          dispatch(actions.loadHomePageData(zip));
        },
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);