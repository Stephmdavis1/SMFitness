import smimage from '../../../Assets/IMG_2545.png'
import './BannerPage.css'

export default function BannerPage() {
    return (
        <>
        <div className='freebies'>
        <div className="freebies-copy">
            <p className="copy-title"><span style={{color: 'darkseagreen'}}>FREEBIES</span></p>
            <h3 className='copy-header'>Free Workouts & Guides</h3>
            <hr />
            <p className='freebies-copy-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quae inventore ad ex molestias ab temporibus? Nisi error temporibus doloremque consequatur amet nemo exercitationem. Quae consectetur necessitatibus illum sequi id?</p>
        </div>
        <div className="freebies-image">
            <img src={smimage} alt="" />
        </div>
        </div>

        
        </>
        
    )
}