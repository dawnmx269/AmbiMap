import { useNavigate } from 'react-router-dom';
import { useSelection } from '../context/SelectionContext';
import { useState } from 'react';

function Generation() {
  const navigate = useNavigate();
  const { addSelection } = useSelection();
  const [selectedItems, setSelectedItems] = useState([]);

  const buttonValues = {
    '답답함': '답답',
    '무시당함': '무시',
    '단절감': '단절'
  };

  const handleSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(prev => prev.filter(i => i !== item));
    } else if (selectedItems.length < 2) {
      setSelectedItems(prev => [...prev, item]);
    }
  };

  const handleComplete = () => {
    if (selectedItems.length !== 2) {
      alert('감정어를 정확히 2개 선택해주세요.');
      return;
    }
    // 선택된 항목들을 context에 저장하고 결과 페이지로 이동
    selectedItems.forEach(item => {
      addSelection('generation', {
        feeling: item,
        message: buttonValues[item]
      });
    });
    navigate('/genresults');
  };

  const getButtonStyle = (item) => ({
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: selectedItems.includes(item) ? '#2E7D32' : '#4CAF50',
    color: 'white',
    border: selectedItems.includes(item) ? '2px solid #1B5E20' : 'none',
    borderRadius: '5px',
    cursor: selectedItems.length === 2 && !selectedItems.includes(item) ? 'not-allowed' : 'pointer',
    marginTop: '20px',
    width: '300px'
  });

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      padding: '20px'
    }}>
      <h1>세대 갈등에서 느끼는 애매함</h1>
      <p style={{
        fontSize: '16px',
        color: '#666',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        정확히 두개의 항목을 선택해주세요 ({selectedItems.length}/2 선택됨)
      </p>

      {Object.keys(buttonValues).map((item) => (
        <button
          key={item}
          onClick={() => handleSelection(item)}
          style={getButtonStyle(item)}
          disabled={selectedItems.length === 2 && !selectedItems.includes(item)}
        >
          {item}
        </button>
      ))}

      {selectedItems.length === 2 && (
        <button
          onClick={handleComplete}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '40px',
            width: '200px'
          }}
        >
          선택 완료
         </button>
      )}

      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#666',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        이전으로 돌아가기
      </button>
    </div>
  );
}

export default Generation; 