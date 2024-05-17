# URL Kısaltıcı

![URL Kısaltıcı](https://img.shields.io/badge/made%20with-React%20%26%20Node.js-blue.svg)

Bu proje, kullanıcıların uzun URL'leri kısaltmalarına olanak tanıyan bir web uygulamasıdır. React ve Node.js kullanılarak geliştirilmiştir.

## Özellikler

- **Kullanıcı Dostu Arayüz:** Kullanıcıların uzun URL'leri kolayca girebileceği ve kısaltılmış URL'leri alabileceği basit ve şık bir arayüz.
- **API Entegrasyonu:** Kısaltılmış URL'lerin oluşturulması ve yönetilmesi için güçlü bir arka uç API'si.
- **Veritabanı Desteği:** Kısaltılmış URL'lerin saklanması ve yönetilmesi için veritabanı entegrasyonu.
- **Mobil Uyumlu:** Hem masaüstü hem de mobil cihazlarda sorunsuz çalışır.

## Teknolojiler

- **Ön Uç:** React, HTML, CSS, JavaScript
- **Arka Uç:** Node.js, Express
- **Veritabanı:** MongoDB

## Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](/homepage.png)

### URL Kısaltma
![URL Kısaltma](/urlshortening.png)

### Kısaltılmış URL Listesi
![Kısaltılmış URL Listesi](url-list.png)

## Kurulum

Projenin yerel ortamınızda çalışması için aşağıdaki adımları izleyin.

### Gereksinimler

- Node.js
- npm veya yarn
- MongoDB

### Adımlar

1. **Depoyu klonlayın:**
    ```bash
    git clone https://github.com/kullanici-adi/url-kisaltici.git
    cd url-kisaltici
    ```

2. **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3. **Ortam değişkenlerini ayarlayın:**
    Proje kök dizininde bir `.env` dosyası oluşturun ve gerekli değişkenleri ekleyin:
    ```env
    MONGO_URI=your_mongodb_uri
    PORT=5000
    ```

4. **Uygulamayı başlatın:**
    ```bash
    npm run dev
    # veya
    yarn dev
    ```

    Bu komut hem ön uç hem de arka uç sunucusunu başlatacaktır.

## Kullanım

1. Tarayıcınızı açın ve `http://localhost:3000` adresine gidin.
2. Uzun bir URL girin ve "Kısalt" butonuna tıklayın.
3. Kısaltılmış URL'yi kopyalayın ve dilediğiniz yerde kullanın.

## Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Lütfen katkıda bulunmadan önce bir issue açın ve yapılacak değişiklikleri tartışalım.

1. Depoyu forklayın.
2. Yeni bir dal oluşturun (`git checkout -b yeni-ozellik`).
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni Özellik Eklendi'`).
4. Dalınıza push edin (`git push origin yeni-ozellik`).
5. Bir Pull Request oluşturun.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için [Lisans](LICENSE) dosyasına bakabilirsiniz.

## İletişim

Herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen benimle iletişime geçin:

- **Email:** kullanici@example.com
- **GitHub:** [kullanici-adi](https://github.com/kullanici-adi)
