import PropTypes from 'prop-types';

const HomeList = ({ movie }) => {
    return (
        <div className='w-[400px] bg-white p-2 rounded-lg text-black'>
            <p>{movie?.title}</p>
        </div>
    );
};

HomeList.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired
};

export default HomeList;
