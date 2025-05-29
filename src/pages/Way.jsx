import { useNavigate } from 'react-router-dom';
import { useSelection } from '../context/SelectionContext';
import { useState } from 'react';

function Way() {
  const navigate = useNavigate();
  const { addSelection } = useSelection();
  const [selectedItems, setSelectedItems] = useState([]);

  const buttonValues = {
    '막막함': '막막',
    '두려움': '두려',
    '방황함': '방황'
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
      addSelection('way', {
        feeling: item,
        message: buttonValues[item]
      });
    });
    navigate('/wayresults');
  };

  const getButtonStyle = (item) => ({
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: selectedItems.includes(item) ? '#2E7D32' : '#4CAF50',
    color: 'white',
    border: selectedItems.includes(item) ? '2px solid #1B5E20' : 'none',
    borderRadius: '5px',
    cursor: 'pointer',
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
      <h1>진로에서 느끼는 애매함</h1>
      <p style={{
        fontSize: '16px',
        color: '#666',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        정확히 두 개의 항목을 선택해주세요 ({selectedItems.length}/2 선택됨)
      </p>

      {Object.keys(buttonValues).map((item) => (
        <button
          key={item}
          onClick={() => handleSelection(item)}
          style={getButtonStyle(item)}
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

export default Way; 