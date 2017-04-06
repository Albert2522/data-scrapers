import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { fetchPostings } from '../actions/craigslist_actions';
import React from 'react';
import {AllPostings} from '../util/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    craigs_postings: state.craigsList
}};

const mapDispatchToProps = dispatch => ({
  fetchPostings: () => dispatch(fetchPostings())
});

class Craigslist extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPostings();
  }

  componentWillReceiveProps(newProps) {
  }



  render() {
    if (Object.keys(this.props.craigs_postings).length > 0) {
      console.log(this.props.craigs_postings);
      return (
        <div style={{backgroundColor: "#fafafa"}}>
          <div>instide postings</div>
          <div>
            <ul>
              {this.props.craigs_postings.map( (post) => (
                <li key={post.url}>
                  <br/>
                  <div>
                    {post.title}
                    {post.price}<br/>
                  {post.location}<br/>
                    {post.url}
                  </div><br/>
                </li>
              ))}
            </ul>
          </div>
          {this.props.chidren}
        </div>
      );
    } else {
      return (
        <h1>HIHIHIHIHI</h1>
      );
    }
  }


}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Craigslist));
