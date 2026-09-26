# Quran (القرآن) 📖

Ayetler, ezan vakitleri, kıble pusulası ve hava durumu — sade, hızlı, reklamsız **PWA**.

🌐 **Canlı uygulama:** https://retro043.github.io/quran-app/
📱 **APK indir:** https://retro043.github.io/quran-app/Quran.apk
🔒 **Gizlilik politikası:** https://retro043.github.io/quran-app/privacy.html

## Özellikler

- 📖 **Sûre okuyucu** — açılır menüden 114 sûre seçimi + ▶ dinleme tuşu (Türkçe adlarla), Arapça + meal, **âyet âyet sesli dinleme**, kaldığınız yerden devam
- 🎲 **Rastgele ayet** — Arapça + Türkçe/İngilizce meal + sesli okuma
- 🔍 **Kelime araması** ve ★ **Favoriler** (cihazda saklanır)
- 📅 **Aylık vakit tablosu** — şehir/konumuna göre tam ay, hicri tarihli, çevrimdışı önbellek
- 📿 **Tesbih** — 6 zikir seçeneği, sayaç + titreşim, hedefte kutlama
- 🔢 **Zikirmatik** — serbest zikir metni + serbest hedef, büyük dokunma alanı, ilerleme çubuğu, günlük/Toplam istatistik
- 🤲 **Dualar** — ayet-i kerime ve günlük dualar (Türkçe meal + meal)
- ☪ **Esmaül Hüsna** — 99 isim (Tirmizî listesi), aramalı
- 💰 **Zekât hesaplayıcı** — 85 g altın nisâbı, %2,5
- 4 kâri seçeneği: Alafasy, Abdul Basit, Husary, Minshawi
- 🕌 **Ezan vakitleri** — Diyanet (TR) / MWL yöntemi, geri sayım, **vaktinde ses**
  - Gerçek ezan kaydı (durdurulabilir) veya bildirim sesi
- 🔔 **Vakit bildirimleri** — Web Push (ntfy.sh): uygulama kapalıyken 10 dk uyarı + ezan vakti
- 🧭 **Kıble bulucu pusula** — canlı yön + Kabe'ye mesafe
- 🌤 **Hava durumu** — şehir seçimi veya konum (10 günlük tahmin dahil)
- ☀️🌙 Tema, saat, hijri tarih, PWA (kurulum / çevrimdışı kabuk)
- 🕌 **Kabe arka planı**

## Teknik

- Tek dosya: `index.html` (vanilla JS, framework yok) — **3 sayfalı arayüz** (Kur'an · Rastgele · Araçlar)
- Tasarım: **zümrüt + altın** renk paleti (koyu/açık tema), Plus Jakarta Sans (başlık/arayüz) · Inter (metin) · Amiri Quran (Arapça) Google Fonts ile, `prefers-reduced-motion` desteği
- PWA: `manifest.json`, `sw.js` (kabuk: ağ-öncelikli → güncel sürüm her açılışta gelir; çevrimdışı yedek cache)
- Yerel sunucu: `npm start` → `http://localhost:5176` (PWA için http origin gerekir)

## API kaynakları (ücretsiz, anahtarsız)

| Kaynak | Kullanım |
|---|---|
| [AlQuran Cloud](https://alquran.cloud) | Ayet, meal, ses |
| [AlAdhan](https://aladhan.com) | Ezan vakitleri |
| [Countries Now](https://countriesnow.space) | Ülke/şehir listeleri |
| [goweather.xyz](https://github.com/robertoduessmann/weather-api) | Hava durumu |
| [ntfy.sh](https://ntfy.sh) | Web Push bildirimleri |

## Lisans & atıflar

- **Ezan sesi:** [Atcovi — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:The_Adhan_-_Muslim_Call_to_Prayer_-_Aaqib_Azeez.mp3), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Kabe fotoğrafı:** [Bjelica — Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kaaba_at_night_in_2024.jpg), CC0 (kamu malı)

## Google Play (TWA)

- Paket adı: `io.github.retro043.twa`
- APK/AAB/keystore çıktısı: PWABuilder ile üretilir (`signing-key-info.txt` + `signing.keystore` **güvenli saklanmalı** — güncellemeler için zorunlu)
- TWA olduğu için **içerik güncellemeleri APK'sızdır**: site güncellenir, kullanıcılar uygulamayı açtığında yeni sürümü otomatik alır
