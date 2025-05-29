import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>나의 애매함 정의 지도</h1>
      <h2>Define your ambiguity</h2>
      <p>아래 버튼을 눌러 나만의 애매함 정의 지도를 만들어보세요</p>
      <button
        onClick={() => navigate('/category')}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Start
      </button>
    </div>
  );
}

export default Start; 