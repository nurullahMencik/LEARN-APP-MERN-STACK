# 🎓 Eğitim Platformu (Udemy Klonu)

Bu proje, modern web teknolojilerini kullanarak geliştirilmiş kapsamlı bir eğitim platformudur. Kullanıcılara güvenli bir ortamda kurslara erişim, içerik yönetimi ve kişiselleştirilmiş öğrenme yol haritaları sunar.

---

## 🔗 Bağlantılar

* **Canlı Site:** ([https://www.nurullahmencik.com](https://portfolio-udemy-frontend.vercel.app/))
* **LinkedIn:** (https://www.linkedin.com/in/nurullah-mencik-6b692a216)
* **Portfolio:** (https://www.nurullahmencik.com/)
* **E-posta:** nurullahmencik42@gmail.com

---

## ✨ Özellikler

* **Güvenli Kullanıcı Kimlik Doğrulaması:** JWT (JSON Web Tokens) ile güvenli kayıt ve giriş sistemi.
* **Kurs İnceleme ve Detayları:** Detaylı inceleme, puanlama ve yorum yapabilme.
* **Sepete Ekleme ve Satın Alma:** Kursları sepete ekleme ve satın alma simülasyonu.
* **Admin Paneli:** Kurs, kullanıcı ve platform ayarları yönetimi.
* **İçerik Yönetimi:** Yeni kurs ekleme, güncelleme ve silme (CRUD).
* **Mobil Uyumlu Tasarım:** Responsive (duyarlı) tasarım.
* **Yapay Zeka Destekli Yol Haritası:** Kişiselleştirilmiş kurs önerileri simülasyonu.

---

## 🚀 Teknolojiler

### Frontend (Client)
React.js, Redux Toolkit, Tailwind CSS, Vite, Axios, React Router Dom

### Backend (Server)
Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Multer, CORS

---

## 📂 Proje Yapısı

```text
├── client/                     # Frontend Uygulaması (React.js, Redux, Tailwind CSS)
│   ├── dist/                   # Üretim için derlenmiş dosyalar
│   ├── node_modules/           # Frontend bağımlılıkları
│   ├── public/                 # Statik frontend dosyaları
│   ├── src/                    # Frontend kaynak kodları
│   │   ├── components/         # Tekrar kullanılabilir UI bileşenleri
│   │   │   ├── CourseCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── One2One.jsx
│   │   │   └── useToken.js
│   │   ├── hooks/              # Özel React Hook'ları
│   │   ├── pages/              # Uygulama sayfaları
│   │   │   ├── AdminCourseList.jsx
│   │   │   ├── AdminUserList.jsx
│   │   │   ├── AuthPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── CourseDetailPage.jsx
│   │   │   ├── CourseEditPage.jsx
│   │   │   ├── CoursePage.jsx
│   │   │   ├── CourseUploadPage.jsx
│   │   │   ├── ErrorPage.jsx
│   │   │   ├── FakePaymentPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── Love.jsx
│   │   │   ├── MyCourseDetailPage.jsx
│   │   │   ├── MyCreatedCourses.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── ProfileSettings.jsx
│   │   │   ├── ProjectDetailPage.jsx
│   │   │   └── RoadMapPage.jsx
│   │   ├── reducers/           # Redux slice'ları
│   │   │   ├── authSlice.js
│   │   │   ├── cartSlice.js
│   │   │   ├── courseSlice.js
│   │   │   ├── modalSlice.js
│   │   │   ├── myCourseSlice.js
│   │   │   ├── profileSlice.js
│   │   │   └── userSlice.js
│   │   ├── store.js            # Redux store yapılandırması
│   │   ├── App.jsx             # Ana React bileşeni
│   │   ├── index.css           # Genel CSS
│   │   └── main.jsx            # Giriş noktası
│   ├── .eslintrc.js
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/                     # Backend Uygulaması (Node.js, Express, MongoDB)
│   ├── config/                 # Yapılandırma dosyaları
│   │   └── database.js
│   ├── controllers/            # API kontrolcüleri
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   ├── profileController.js
│   │   ├── purchaseController.js
│   │   └── userController.js
│   ├── middleware/             # Express middleware'ları
│   │   └── verifyToken.js
│   ├── models/                 # Mongoose modelleri
│   │   ├── authModel.js
│   │   └── courseModel.js
│   ├── public/                 # Statik dosyalar
│   │   └── uploads/            # Yüklenen resimler
│   ├── routes/                 # API rotaları
│   │   ├── authRoute.js
│   │   ├── courseRoute.js
│   │   ├── profileRoute.js
│   │   └── purchaseRoute.js
│   ├── .env.example
│   ├── .gitignore
│   ├── index.js                # Sunucu giriş noktası
│   ├── package-lock.json
│   └── package.json
├── .gitignore                  # Kök dizin git yoksayma
└── README.md                   # Ana README dosyası
