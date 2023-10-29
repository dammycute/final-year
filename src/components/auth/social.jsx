import google from '../../assets/images/google.svg'
import facebook from '../../assets/images/facebook.svg'
import PropTypes from 'prop-types';

const Social = (props ) => {
  return (
    <div>
        <div className="social-ctn">
            <div className="s ">
                <img src={google} alt="" />
                <p className='font-bold'>{props.msgG}</p>
            </div>
            <div className="s">
                <img src={facebook} alt="" />
                <p className='font-bold'>{props.msgF}</p>
            </div>
        </div>
    </div>
  )
}

Social.propTypes = {
    msgG: PropTypes.string.isRequired,
    msgF: PropTypes.string.isRequired,
  };

export default Social