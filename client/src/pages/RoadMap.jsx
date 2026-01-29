import React, { useState } from "react";
import axios from "axios";

function RoadMap() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError("Lütfen bir metin girin!");
      return;
    }

    setLoading(true);
    setOutput("");
    setError(null);

    try {
      console.log("📡 Yol haritası isteği gönderiliyor...", { content: input });
      const response = await axios.post("https://konya-backend.onrender.com/api/roadmap/generate", {
        content: input,
      });

      console.log("✅ Yanıt alındı:", response.data);
      if (response.data &&response.data.success) {
        setOutput(response.data.generatedContent);
      } else {
        setError("⚠️ Yanıt alınamadı.");
      }
    } catch (err) {
      console.error("❌ Roadmap hatası:", err);
      console.error("Error response:", err.response);
      
      let errorMessage = "";
      
      if (err.response) {
        // Backend'den gelen hata
        const status = err.response.status;
        const backendError = err.response.data?.message || err.response.data?.error || "";
        
        if (status === 500) {
          errorMessage = "⚠️ Backend servisi şu anda kullanılamıyor.\n\n";
          errorMessage += "Bu genellikle şu sebeplerden olabilir:\n";
          errorMessage += "• AI servisi (OpenAI, Gemini, vb.) API anahtarı eksik veya geçersiz\n";
          errorMessage += "• Backend sunucusunda bir hata var\n";
          errorMessage += "• Servis limitleri aşılmış olabilir\n\n";
          errorMessage += `Teknik Detay: ${backendError || "Internal Server Error"}`;
        } else {
          errorMessage = `Durum Kodu: ${status}\nHata: ${backendError}`;
        }
      } else if (err.request) {
        errorMessage = "Backend'e ulaşılamıyor. Sunucu çalışmıyor olabilir.";
      } else {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Yazılım Yol Haritası Asistanı
          </h1>
          <p className="text-gray-300 text-lg">
            Öğrenmek istediğiniz konuyu yazın, size özel bir yol haritası oluşturalım
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            placeholder="Örnek: Backend geliştirici olmak istiyorum, nereden başlamalıyım?"
            className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
            style={{ fontSize: '16px' }}
          />
          
          <button 
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className={`mt-4 w-full md:w-auto px-8 py-3 rounded-xl font-semibold text-lg transition-all transform ${
              loading || !input.trim()
                ? 'bg-gray-600 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 shadow-lg hover:shadow-purple-500/50'
            }`}
          >
            {loading ? '⏳ Hazırlanıyor...' : '🚀 Yol Haritasını Al'}
          </button>
        </div>

        {loading && (
          <div className="mt-8 bg-blue-500/20 border border-blue-500/50 rounded-xl p-6 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
            <p className="text-blue-200 text-lg">Yol haritanız hazırlanıyor...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 bg-red-500/20 border border-red-500/50 rounded-xl p-6">
            <h3 className="text-red-300 font-bold text-xl mb-3 flex items-center">
              <span className="mr-2">❌</span> Hata Oluştu
            </h3>
            <pre className="text-red-200 whitespace-pre-wrap text-sm leading-relaxed font-mono bg-red-900/30 p-4 rounded-lg">
              {error}
            </pre>
            <div className="mt-4 text-sm text-gray-400">
              💡 <strong>İpucu:</strong> Konsolu açarak (F12) daha detaylı hata bilgisi görebilirsiniz.
            </div>
          </div>
        )}

        {output && !error && (
          <div className="mt-8 bg-green-500/20 border border-green-500/50 rounded-xl p-6">
            <h3 className="text-green-300 font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">✅</span> Yol Haritanız Hazır!
            </h3>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <pre className="text-gray-100 whitespace-pre-wrap leading-relaxed">
                {output}
              </pre>
            </div>
          </div>
        )}


      </div>
    </div>
  );
}

export default RoadMap;
