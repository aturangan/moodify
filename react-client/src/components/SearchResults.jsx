import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import styles from '../../dist/css/styles';
import {List, ListItem} from 'material-ui/List';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let index = e.target.getAttribute('value');
    this.props.process(this.props.results.track_list[index].track);
  }

  render() {
    if (this.props.searchResultsLoading) {
      return (
          <CircularProgress style={styles.loading} />
      );
    } else if (this.props.results.errorMessage) {
      return (
        <div className="errorMessage">{this.props.results.errorMessage}</div>
      );
    } else {
      return (
        <div style={styles.list}>
        <List>
          {this.props.results.track_list.map((trackObj, i) => (
            <ListItem key={i}><div value={i} onClick={this.handleClick} >{trackObj.track.track_name} - {trackObj.track.artist_name}</div></ListItem>
          ))}
        </List>
        </div>
      );
    }
  }
}

export default SearchResults;
