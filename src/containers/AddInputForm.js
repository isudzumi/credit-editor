import { connect } from 'react-redux';
import InputList from '../components/InputList';
import { addInputList } from '../actions';

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  onChange: text => dispatch(addInputList(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputList);
