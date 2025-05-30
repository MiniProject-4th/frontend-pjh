import React from 'react';

const BookDetailPage = () => {
  const dummyBook = {
    title: "책 제목",
    author: "책 저자",
    category: "카테고리",
    publishedAt: "2025.05.15",
    description: `모든 기억을 잃은 채 낯선 도서관에서 눈을 뜬 남자. 그의 곁에는 낡은 책 한 권과 ‘당신은 진실을 찾을 준비가 되었나요?’라는 쪽지가 놓여 있다.
그는 책 속에 숨겨진 단서를 따라 하나씩 조각난 기억을 되짚으며 자신이 누구인지, 왜 모든 기억을 잃었는지를 파헤쳐 나간다.
그 여정 속에서 만난 낯익은 듯 낯선 사람들, 그리고 반복해서 등장하는 한 여자의 이름.
모든 퍼즐이 맞춰질 때, 그는 과거에 감춰진 충격적인 진실과 마주하게 된다.
이 이야기는 잃어버린 시간과 사랑, 그리고 진실을 되찾는 한 남자의 미스터리한 여정을 그린다.`,
    coverImageUrl: "https://via.placeholder.com/240x340",
  };

  return (
    <div style={{ display: 'flex', padding: '80px', gap: '60px', alignItems: 'flex-start' }}>
      
      {/* 왼쪽: 표지 */}
      <div style={{ width: '280px' }}>
        <img
          src={dummyBook.coverImageUrl}
          alt="표지"
          style={{ width: '100%', border: '1px solid #ccc' }}
        />
      </div>

      {/* 오른쪽: 내용 */}
      <div style={{
        flex: 1,
        position: 'relative',
        border: '1px solid #eee',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        textAlign: 'left' // 💡 이 부분이 핵심!
      }}>
        {/* 버튼 */}
        <div style={{ position: 'absolute', top: '30px', right: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={{ padding: '6px 12px', cursor: 'pointer' }}>✏️ 수정하기</button>
          <button style={{ padding: '6px 12px', color: 'red', cursor: 'pointer' }}>🗑️ 삭제하기</button>
        </div>

        {/* 정보 출력 */}
        <p style={{ color: '#888', marginBottom: '8px' }}>{dummyBook.category}</p>
        <h2 style={{ margin: '0 0 10px' }}>{dummyBook.title}</h2>
        <p style={{ marginBottom: '5px' }}>{dummyBook.author}</p>
        <p style={{ marginBottom: '20px', color: '#555' }}>{dummyBook.publishedAt}</p>

        <h4 style={{ marginTop: '10px' }}>책 줄거리</h4>
        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', marginTop: '10px' }}>
          {dummyBook.description}
        </p>
      </div>
    </div>
  );
};

export default BookDetailPage;
