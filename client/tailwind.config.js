// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        // Eğer daha çarpıcı bir monospace font isterseniz buraya ekleyebilirsiniz (örn: 'JetBrains Mono', 'Fira Code')
        // mono: ['"JetBrains Mono"', 'monospace'], 
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        heartbeat: "heartbeat 1s infinite",
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'gradient-text': 'gradient-text 3s ease infinite alternate', 
        'pulse-border': 'pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', 
        'blob': 'blob 7s infinite', 
        'typing-cursor': 'blink 0.75s step-end infinite', 
        'fadePulse': 'fadePulse 4s ease-in-out infinite',

        // YENİ EKLENEN ANİMASYONLAR
        'blob-small': 'blob-small 6s infinite ease-in-out', // Daha küçük blob animasyonu
        'bounce-subtle': 'bounce-subtle 3s infinite ease-in-out', // Kod dalı ikonu için
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'gradient-text': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
        'pulse-border': {
          '0%, 100%': { 'border-color': 'rgba(59, 130, 246, 0.5)' }, // blue-500/50
          '50%': { 'border-color': 'rgba(59, 130, 246, 1)' },     // blue-500
        },
        blob: { 
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        blink: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0' },
        },
        fadePulse: {
            '0%, 100%': { opacity: '0.5' },
            '50%': { opacity: '0.2' },
        },
        // YENİ KEYFRAMELER
        'blob-small': { // Daha küçük ve rastgele hareket eden blob
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(15px, -20px) scale(1.05)' },
          '50%': { transform: 'translate(-10px, 10px) scale(0.98)' },
          '75%': { transform: 'translate(20px, 5px) scale(1.02)' },
        },
        'bounce-subtle': { // Hafif yukarı-aşağı zıplama
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      colors: {
        love: "#ff69b4", 
        sweet: "#ffe4e1", 
      },
      backgroundImage: {
        'radial-gradient-to-center': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}