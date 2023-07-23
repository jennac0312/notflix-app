import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import Profile from './Profile'

const ProfileList = () => {

    let { profiles } = useContext(AppContext)

  return (
    <div className=''>
        <h3 className='title'>Who's Watching?</h3>
        <p className='edit bold'>Edit</p>
        <div className='profileList'>
            { profiles.map((profile, index) => {
                return <Profile profile={profile} key={index}/>
            })}
        </div>
    </div>
  )
}

export default ProfileList