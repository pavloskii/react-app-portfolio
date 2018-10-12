import { connect } from 'react-redux';
import actions from 'store/story/actions';
import { hasMoreStoriesSelector } from 'store/story/selectors';
import App from './App';

const mapStateToProps = state => ({
    stories: state.story.stories,
    page: state.story.storyIds,
    storyIds: state.story.storyIds,
    isFetching: state.story.isFetching,
    hasMoreStories: hasMoreStoriesSelector(state)
});

const mapDispatchProps = dispatch => ({
    fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
    fetchStories: ({ storyIds, page }) => dispatch(actions.fetchStories({ storyIds, page }))
});

export default connect(mapStateToProps, mapDispatchProps)(App);