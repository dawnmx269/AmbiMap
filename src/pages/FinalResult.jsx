import { useNavigate } from 'react-router-dom';
import { useSelection } from '../context/SelectionContext';

function FinalResult() {
  const navigate = useNavigate();
  const { getCategoryResults, selectedCategories } = useSelection();
  const categoryResults = getCategoryResults();

  const handleRestart = () => {
    navigate('/');
  };

  // 모든 카테고리의 결과를 하나의 문자열로 결합
  const combinedResult = selectedCategories
    .map(category => categoryResults[category] || '')
    .join('');

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      padding: '20px'
    }}>
      <h1 style={{ marginBottom: '30px' }}>최종 결과</h1>
      
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px 30px',
        borderRadius: '10px',
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        maxWidth: '600px'
      }}>
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#2E7D32',
          letterSpacing: '2px'
        }}>
          {combinedResult || '결과가 없습니다'}
        </div>
      </div>

      <button
        onClick={handleRestart}
        style={{
          padding: '15px 30px',
          fontSize: '16px',
          backgroundColor: '#666',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        다시 시작하기
      </button>
    </div>
  );
}

export default FinalResult; 