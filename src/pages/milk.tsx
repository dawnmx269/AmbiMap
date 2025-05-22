import { useNavigate } from 'react-router-dom';
import '../App.css';

function Milk() {
  const navigate = useNavigate();

  return (
    <div 
      className="black-box" 
      onClick={() => navigate('/')}
    >
      Milk Page
    </div>
  );
}

export default Milk;
