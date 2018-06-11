import { connect } from 'react-redux';
import RowList from '../components/RowList';
import { addRowList } from '../actions';

const mapStateToProps = state => ({
  inputsList: state.id
});

const mapDispatchToProps = dispatch => ({
  addRowList: id => dispatch(addRowList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RowList);
