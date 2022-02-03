import { Link } from 'react-router-dom';
import './SelectLoadProfiles.css'

function SelectLoadProfiles() {
  return (
        <div className="selectLoadProfiles">
            <div className="selectLoadProfiles__container">
                <div className="selectLoadProfiles__main">


                    <div className="selectLoadProfiles__one">
                        <div className="selectLoadProfiles__heading__container">
                            <div className='selectLoadProfiles__heading'>
                                <Link to='loadprofile1'>
                                    <h1>Load Profile 1</h1>
                                 </Link>
                            </div>

                            <div className='selectLoadProfiles__heading'>
                                 <Link to='loadprofile2'>
                                    <h1>Load Profile 2</h1>
                                 </Link>
                            </div>
                        </div>
                    </div>


                    <div className="selectLoadProfiles__two">
                        <div className="selectLoadProfiles__heading__container">
                            <div className='selectLoadProfiles__heading'>
                                <Link to='loadprofile3'>
                                    <h1>Load Profile 3</h1>
                                 </Link>
                            </div>

                            <div className='selectLoadProfiles__heading'>
                                <Link to='loadprofile4'>
                                    <h1>Load Profile 4</h1>
                                 </Link>
                            </div>
                        </div>
                    </div>

                    <div className="selectLoadProfiles__three">
                        <div className="selectLoadProfiles__heading__container">
                            <div className='selectLoadProfiles__heading'>
                                <Link to='loadprofile5'>
                                    <h1>Load Profile 5</h1>
                                 </Link>
                            </div>

                            <div className='selectLoadProfiles__heading'>
                                <Link to='loadprofile6'>
                                    <h1>Load Profile 6</h1>
                                 </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
  )
}

export default SelectLoadProfiles;
