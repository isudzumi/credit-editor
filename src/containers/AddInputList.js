import { connect } from 'react-redux';
import InputList from '../components/InputList';
import { addInputList } from '../actions';

const mapStateToProps = state => ({ inputs: state.inputs });

const mapDispatchToProps = dispatch => ({
  addInputList: id => dispatch(addInputList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputList);
