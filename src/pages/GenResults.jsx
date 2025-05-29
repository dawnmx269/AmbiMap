import { useNavigate } from 'react-router-dom';
import { useSelection } from '../context/SelectionContext';
import { useState, useEffect } from 'react';

function GenResults() {
  const navigate = useNavigate();
  const { getSelections, moveToNextCategory, selectedCategories, currentCategoryIndex, setCategoryResult } = useSelection();
  const selections = getSelections();
  const genSelections = selections.filter(item => item.category === 'generation');
  const [selectedChars, setSelectedChars] = useState([]);
  const [availableChars, setAvailableChars] = useState([]);
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    // 선택된 감정어들의 message 값들을 한 글자씩 분리하여 배열로 만듦
    const chars = genSelections
      .map(item => item.selection.message.split(''))
      .flat();
    setAvailableChars(chars);

    const feelings = genSelections.map(item => item.selection.feeling);
    if (feelings.includes('답답함') && feelings.includes('무시당함')) {
      setResultMessage('혼란스러움과 소외감이 공존하는 당신은, 자신의 정체성을 찾아가는 과정에서 주변과의 거리감을 느끼고 있습니다. 이는 성장의 과정일 수 있으며, 당신만의 독특한 정체성을 만들어가는 시간입니다.');
    } else if (feelings.includes('답답함') && feelings.includes('단절감 ')) {
      setResultMessage('혼란스러움과 불완전함을 느끼는 당신은, 자신의 모습에 대해 깊이 고민하고 있습니다. 이러한 감정들은 당신이 더 나은 모습을 향해 나아가고 있다는 증거입니다.');
    } else if (feelings.includes('소외감') && feelings.includes('불완전함')) {
      setResultMessage('소외감과 불완전함을 경험하는 당신은, 자신의 가치를 재발견하는 과정에 있습니다. 이러한 감정들은 당신이 더 깊은 자기 이해를 향해 나아가고 있다는 의미입니다.');
    }
  }, [genSelections]);

  const handleCharSelection = (char) => {
    if (selectedChars.includes(char)) {
      // 이미 선택된 글자를 클릭하면 선택 해제
      setSelectedChars(prev => prev.filter(c => c !== char));
    } else if (selectedChars.length < 2) {
      // 최대 2개까지만 선택 가능
      setSelectedChars(prev => [...prev, char]);
    }
  };


  const handleNext = () => {
    if (selectedChars.length !== 2) {
      alert('정확히 2개의 글자를 선택해주세요.');
      return;
    }

    // 현재 카테고리의 최종 결과를 저장
    const categoryFinalResult = selectedChars.join('') + '단';
    setCategoryResult('generation', categoryFinalResult);

    // 마지막 카테고리인지 확인
    if (currentCategoryIndex === selectedCategories.length - 1) {
      navigate('/finalresult');
    } else {
      moveToNextCategory();
      const nextCategory = selectedCategories[currentCategoryIndex + 1];
      navigate(`/${nextCategory}`);
    }
  };

  const getButtonStyle = (char) => ({
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: selectedChars.includes(char) ? '#2E7D32' : '#4CAF50',
    color: 'white',
    border: selectedChars.includes(char) ? '2px solid #1B5E20' : 'none',
    borderRadius: '5px',
    cursor: selectedChars.length === 2 && !selectedChars.includes(char) ? 'not-allowed' : 'pointer',
    margin: '5px',
    width: '80px',
    opacity: selectedChars.length === 2 && !selectedChars.includes(char) ? 0.5 : 1
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
      <h1 style={{ marginBottom: '30px' }}>세대 갈등에서 느끼는 감정</h1>
      
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px 30px',
        borderRadius: '10px',
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        maxWidth: '600px'
      }}>
        {availableChars.map((char, index) => (
          <button
            key={`${char}-${index}`}
            onClick={() => handleCharSelection(char)}
            style={getButtonStyle(char)}
            disabled={selectedChars.length === 2 && !selectedChars.includes(char)}
          >
            {char}
          </button>
        ))}
      </div>

      {selectedChars.length === 2 && (
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '0'
        }}>
          <span style={{ color: '#000000' }}>{selectedChars.join('')}</span>
          <span style={{ color: '#2E7D32' }}>단</span>
        </div>
      )}

{resultMessage && (
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '20px 30px',
          borderRadius: '10px',
          marginBottom: '40px',
          maxWidth: '600px',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>
          {resultMessage}
        </div>
      )}

      <button
        onClick={handleNext}
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
        {currentCategoryIndex < selectedCategories.length - 1 ? '다음 카테고리의 감정어 선택하기' : '모든 선택 완료'}
      </button>
    </div>
  );
}

export default GenResults; 