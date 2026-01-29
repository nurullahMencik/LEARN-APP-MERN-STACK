import { useEffect, useState } from 'react';
import axios from 'axios';

const TestAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const testFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('🧪 Test başlatılıyor...');
      const response = await axios.get('https://konya-backend.onrender.com/api/courses/getCourses');
      console.log('✅ Response:', response);
      console.log('✅ Data:', response.data);
      setData(response.data);
    } catch (err) {
      console.error('❌ Error:', err);
      console.error('❌ Error Message:', err.message);
      console.error('❌ Error Response:', err.response);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testFetch();
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#1a202c', color: 'white', minHeight: '100vh' }}>
      <h1>🧪 Axios Test Sayfası</h1>
      
      <button 
        onClick={testFetch}
        style={{
          padding: '10px 20px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Tekrar Test Et
      </button>

      {loading && <p>⏳ Yükleniyor...</p>}
      
      {error && (
        <div style={{ backgroundColor: '#991b1b', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h2>❌ Hata Oluştu:</h2>
          <p>{error}</p>
          <p style={{ fontSize: '12px', color: '#fca5a5' }}>Konsolu kontrol edin (F12)</p>
        </div>
      )}
      
      {data && (
        <div style={{ backgroundColor: '#065f46', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h2>✅ Başarılı!</h2>
          <p>Toplam Kurs Sayısı: {data.courses?.length || 0}</p>
          <details>
            <summary style={{ cursor: 'pointer', marginTop: '10px' }}>Tüm veriyi gör</summary>
            <pre style={{ 
              backgroundColor: '#1f2937', 
              padding: '10px', 
              borderRadius: '5px',
              overflow: 'auto',
              maxHeight: '400px',
              fontSize: '12px'
            }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default TestAxios;
