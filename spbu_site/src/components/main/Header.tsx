import './Header.scss'


function Header(){
    return (
        <div className='header'>
            <div className='header-item'><a href="university">Университет</a></div>
            <div className='header-item'><a href="applicants">Поступающим</a></div>
            <div className='header-item'><a href="education">Образование</a></div>
            <div className='header-item'><a href="students">Студентам</a></div>
            <div className='header-item'><a href="TRKI">ТРКИ</a></div>
            <div className='header-item'><a href="documents">Документы</a></div>
        </div>

)
    
}

export default Header