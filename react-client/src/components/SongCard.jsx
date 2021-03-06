import React from 'react';
import Player from './Player.jsx';
import Mood from './Mood.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styles from '../../dist/css/styles';
import CircularProgress from 'material-ui/CircularProgress';
import Lyrics from './Lyrics.jsx'

class SongCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ' ',
      artist: ' ',
      tone: ' ',
      expanded: false,
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleEmotionToggle = this.handleEmotionToggle.bind(this);
    this.handleSocialToggle = this.handleSocialToggle.bind(this);
    this.handleLanguageToggle = this.handleLanguageToggle.bind(this);
  }

  handleExpandChange(expanded) {
    this.setState({expanded: this.state.expanded});
  };

  handleEmotionToggle(event) {
    if (this.state.expanded && this.state.tone !== 'emotion') {
      this.setState({tone: 'emotion'});
    } else {
      this.setState({tone: 'emotion'});
      this.setState({expanded: !this.state.expanded});
    }
  };

  handleSocialToggle(event) {
    if (this.state.expanded && this.state.tone !== 'social') {
      this.setState({tone: 'social'});
    } else {
      this.setState({tone: 'social'});
      this.setState({expanded: !this.state.expanded});
    }
  };

  handleLanguageToggle(event) {
    if (this.state.expanded && this.state.tone !== 'language') {
      this.setState({tone: 'language'});
    } else {
      this.setState({tone: 'language'});
      this.setState({expanded: !this.state.expanded});
    }
  };

  componentDidMount(){
      this.setState({tone: 'language'});
      this.setState({expanded: !this.state.expanded});
      console.log('watson lyrics: ', this.props.watsonLyrics)
  }


  render() {
    if (this.props.loading) {
      return (
          <CircularProgress style={styles.loading} />
      );
    } else {
      return (
        <Card style={styles.cardStyle} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardMedia
            overlay={<CardTitle title={this.props.songNameAndArtist[0] + ' - ' + this.props.songNameAndArtist[1]}/>}
          >
            <img src={this.props.spotifyAlbumArt} style={styles.img}/>
          </CardMedia>
          <CardText>
            {this.props.showPlayer ?
            <Player spotifyURI={this.props.spotifyURI} loading={this.props.loading}/>
          : null }
            <Lyrics watsonLyrics={this.props.watsonLyrics} />
          </CardText>
          <CardText expandable={true}>
            <Mood watson={this.props.watson} tone={this.state.tone}/>
          </CardText>
          <CardActions>
            <FlatButton label="Language Analysis" onTouchTap={this.handleLanguageToggle} />
            <FlatButton label="Emotion Analysis" onTouchTap={this.handleEmotionToggle} />
            <FlatButton label="Social Analysis" onTouchTap={this.handleSocialToggle} />
          </CardActions>
        </Card>
      );
    }
  }
}

export default SongCard;
