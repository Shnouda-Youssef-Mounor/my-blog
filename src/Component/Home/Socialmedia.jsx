import './Socialmedia.css'
import github from '../Assets/Social/icons/R.png';
import insta from '../Assets/Social/icons/R2.png'
function Socialmedia(){
    return(
        <div className='root'>
            <a href="https://www.facebook.com/shnouda.youssef.3/" target="_blank" rel='noopener'>
                <div className="facebook textAlign marginRight duration borderRadius  colorFont">f</div>
            </a>
            <a href="https://github.com/Shnouda-Youssef-Mounor" target="_blank" rel='noopener'>
                <img className="github  borderRadius bgLight marginRight duration" src={github} alt="icon-github"/>
            </a> 
            <a href="https://www.linkedin.com/in/shnouda-youssef-287981263/" target="_blank" rel='noopener'>
                <div className="linkedin textAlign marginRight duration  borderRadius  colorFont">in</div>
            </a>
            <a href="https://www.instagram.com/shnoudayoussef" target="_blank" rel='noopener'>
                <img className="insta  borderRadius bgLight marginRight duration" src={insta} alt="icon-insta"/>
            </a>
        </div>
    )
}


export default Socialmedia;