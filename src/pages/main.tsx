import { useNavigate } from 'react-router-dom';
import '../App.css'

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="black-box"
      onClick={() => navigate('/milk')}
    >
      Hello World wowowo
    </div>
  );
}

export default HomePage;