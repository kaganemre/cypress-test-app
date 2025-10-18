# 🔐 Cypress Test Uygulaması

Bu proje, React ile geliştirilmiş bir login formunun uçtan uca testlerini Cypress kullanarak gerçekleştirmek için hazırlanmıştır. Form doğrulama, kullanıcı etkileşimi ve hata senaryoları gibi temel test senaryolarını kapsar.

## 🚀 Kullanılan Teknolojiler

| Katman     | Teknoloji               |
|------------|--------------------------|
| Arayüz     | React + Vite             |
| Stil       | Bootstrap + Reactstrap   |
| Test       | Cypress                  |

---

## 🧪 Test Senaryoları

Cypress ile aşağıdaki senaryolar test edilmiştir:

- ✅ Geçerli e-posta ve şifre ile başarılı giriş
- 📧 Geçersiz e-posta ile giriş denemesi
- ❌ Geçersiz e-posta ve şifre ile başarısız giriş
- 📋 Şartlar kutusu işaretlenmeden yapılan giriş denemesi

Bu testler, Login formunun doğru şekilde çalıştığından ve kullanıcı doğrulamalarının uygun şekilde yapıldığından emin olmayı amaçlamaktadır.

---

## 📁 Proje Yapısı

```text
cypress-test-app/
├── cypress/                  # Cypress test dosyaları
│   ├── e2e/                  # Uçtan uca testler (Login.cy.js)
│   ├── fixtures/             # Test verileri (example.json)
│   └── support/              # Cypress destek dosyaları (komutlar, yapılandırmalar)
├── src/                      # React bileşenleri
│   ├── components/           # Login ve Success bileşenleri (Login.jsx, Success.jsx)
│   ├── App.jsx               # Ana bileşen
│   ├── index.css             # Global stiller
│   └── main.js               # Uygulama giriş noktası
├── index.html                # HTML şablonu
├── package.json              # Bağımlılıklar ve script'ler
├── package-lock.json         
├── vite.config.js            
├── cypress.config.js         # Cypress yapılandırması
├── eslint.config.js        
├── .gitignore
├── LICENSE                
└── README.md                
```

---

## ⚙️ Kurulum ve Çalıştırma

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Uygulamayı başlatın:

```bash
npm run dev
```

3. Cypress test arayüzünü başlatın:

```bash
npx cypress open
```

---

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.
