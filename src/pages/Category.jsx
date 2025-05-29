import { useNavigate } from 'react-router-dom';
import { useSelection } from '../context/SelectionContext';

function Category() {
  const navigate = useNavigate();
  const { addCategory, selectedCategories, resetCategories } = useSelection();

  const categories = [
    { id: 'identity', name: '정체성', path: '/identity' },
    { id: 'study', name: '학업', path: '/study' },
    { id: 'way', name: '진로', path: '/way' },
    { id: 'real', name: '현실과의 괴리', path: '/real' },
    { id: 'economy', name: '경제적 상황', path: '/economy' },
    { id: 'relation', name: '인간관계', path: '/relation' },
    { id: 'social', name: '사회적 압박', path: '/social' },
    { id: 'competition', name: '경쟁 심화', path: '/competition' },
    { id: 'time', name: '시간적 압박', path: '/time' },
    { id: 'generation', name: '세대 갈등', path: '/generation' },
    { id: 'future', name: '미래 계획', path: '/future' }
  ];

  const handleCategoryClick = (categoryId) => {
    addCategory(categoryId);
  };

  const handleStart = () => {
    if (selectedCategories.length > 0) {
      navigate(`/${selectedCategories[0]}`);
    }
  };

  const getButtonStyle = (categoryId) => ({
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: selectedCategories.includes(categoryId) ? '#2E7D32' : '#4CAF50',
    color: 'white',
    border: selectedCategories.includes(categoryId) ? '2px solid #1B5E20' : 'none',
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
      <h1>애매함을 느끼는 영역 선택하기</h1>
      <p style={{
        fontSize: '16px',
        color: '#666',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        원하는 카테고리를 모두 선택해주세요 ({selectedCategories.length}개 선택됨)
      </p>

      {categories.map((category) => (
      <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          style={getButtonStyle(category.id)}
      >
          {category.name}
      </button>
      ))}

      {selectedCategories.length > 0 && (
      <button
          onClick={handleStart}
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
    </div>
  );
}

export default Category; 