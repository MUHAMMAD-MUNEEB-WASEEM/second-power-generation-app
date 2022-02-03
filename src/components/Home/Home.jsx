import './Home.css';
import { Link } from 'react-router-dom';
function Home() {

  return (
    
        <div className="home">
            <div className='home__container'>
                <div className='home__heading'>
                    <h1>LOAD PROFILE ANALYSIS</h1>
                </div>
                <div className='home__button'>
                    <Link to='/loadprofiles'>
                        <button>Click to Select Load Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
