import './Preloader.css';

function Preloader() {
    return (
        <div>
            <div className='dot' style={{"--delay": 1}}></div>
            <div className='dot' style={{"--delay": 2}}></div>
            <div className='dot' style={{"--delay": 3}}></div>
            <div className='dot' style={{"--delay": 4}}></div>
            <div className='dot' style={{"--delay": 5}}></div>
        </div>
    )
}

export default Preloader;