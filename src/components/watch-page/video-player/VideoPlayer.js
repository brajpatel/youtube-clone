import './VideoPlayer.css';

function WatchScreen(props) {
    const { state } = props;

    return (
        <div className='video-player'>
            <iframe
            src={`https://www.youtube.com/embed/${state.id}?autoplay=1&muted=1`}
            title="YouTube Video Player"
            allow='autoplay'
            allowFullScreen
            ></iframe>
        </div>
    )
}

export default WatchScreen;