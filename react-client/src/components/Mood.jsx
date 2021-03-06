import React from 'react';
import {Polar, Doughnut, Bar} from 'react-chartjs-2';
import data from '../../../sampleWatsonData.js';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionData: {
        labels: ["Anger", "Joy", "Disgust", "Sadness", "Fear"],
        datasets: [{
            data: [
              props.watson.anger,
              props.watson.joy,
              props.watson.disgust,
              props.watson.fear,
              props.watson.sadness
              ],
            backgroundColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
                'rgba(20, 126, 251, 1)',
                'rgba(193, 53, 132, 1)',
            ],
            borderColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
                'rgba(20, 126, 251, 1)',
                'rgba(193, 53, 132, 1)',
            ],
            borderWidth: 3
        }]
      },
      emotionOptions: {
        title: {
          display: false,
          fontSize: 24
        },
      },
      languageData: {
        labels: ["Analytical", "Confident", "Tentative"],
        datasets: [{
            data: [props.watson.analytical, props.watson.confident, props.watson.tentative, ],
            backgroundColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)'
            ],
            borderColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)'
            ],
            borderWidth: 3
        }]
      },
      languageOptions: {
        title: {
          display: false,
          fontSize: 24
        }
      },
      socialData: {
        labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional Range"],
        datasets: [{
            data: [
              props.watson.openness,
              props.watson.conscientiousness,
              props.watson.extraversion,
              props.watson.agreeableness,
              props.watson.emotionalrange
              ],
            backgroundColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
                'rgba(20, 126, 251, 1)',
                'rgba(193, 53, 132, 1)',
            ],
            borderColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
                'rgba(20, 126, 251, 1)',
                'rgba(193, 53, 132, 1)',
            ],
            borderWidth: 3
        }]
      },
      socialOptions: {
        title: {
          display: false,
          fontSize: 24
        }
      },
    };
  }
componentWillReceiveProps(props) {
  this.setState({
      emotionData: {
        labels: ["Anger", "Joy", "Disgust", "Sadness", "Fear"],
        datasets: [{
            data: [
              props.watson.anger,
              props.watson.joy,
              props.watson.disgust,
              props.watson.fear,
              props.watson.sadness
              ],
            backgroundColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
                'rgba(20, 126, 251, 1)',
                'rgba(193, 53, 132, 1)',
            ],
            borderColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
                'rgba(20, 126, 251, 1)',
                'rgba(193, 53, 132, 1)',
            ],
            borderWidth: 3
        }]
      },
      emotionOptions: {
        title: {
          display: false,
          fontSize: 24
        },
      },
      languageData: {
        datasets: [{
            labels: ["Analytical", "Confident", "Tentative"],
            data: [props.watson.analytical, props.watson.confident, props.watson.tentative],
            backgroundColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
            ],
            borderColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
            ],
            borderWidth: 3
        }]
      },
      languageOptions: {
        title: {
          display: false,
          fontSize: 24
        }
      },
      socialData: {
        labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional Range"],
        datasets: [{
            data: [
              props.watson.openness,
              props.watson.conscientiousness,
              props.watson.extraversion,
              props.watson.agreeableness,
              props.watson.emotionalrange
              ],
            backgroundColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
                'rgba(20, 126, 251, 1)',
                'rgba(193, 53, 132, 1)',
            ],
            borderColor: [
                'rgba(252, 61, 57, 1)',
                'rgba(254, 203, 46, 1)',
                'rgba(83, 215, 105, 1)',
                'rgba(20, 126, 251, 1)',
                'rgba(193, 53, 132, 1)',
            ],
            borderWidth: 3
        }]
      },
      socialOptions: {
        title: {
          display: false,
          fontSize: 24
        }
      }
  })
}
  render() {   
    if (this.props.tone === 'language') {
      return (
        <div className="language">
          <h3>Language</h3>
          <Doughnut data={this.state.languageData} options={this.state.languageOptions} width={600}/>
          <pre>courtesy of IBM Watson</pre>
        </div>
      )
    } else if(this.props.tone === 'emotion') {
      return (
        <div className="emotion">
          <h3>Emotion</h3>
          <Doughnut data={this.state.emotionData} options={this.state.emotionOptions} width={600}/>
          <pre>courtesy of IBM Watson</pre>
        </div>
      )
    } else if (this.props.tone === 'social') {
      return (
        <div className="social">
          <h3>Social</h3>
          <Doughnut data={this.state.socialData} options={this.state.socialOptions} width={600}/>
          <pre>courtesy of IBM Watson</pre>
        </div>
      )
    } 
  }
}

export default Mood;
