# PET 30-Day Study Planner Pro

Website cá nhân tĩnh để học Cambridge English: Preliminary for Schools trong 30 ngày.

## Bản Pro update có gì mới?

- **Grammar first**: mỗi ngày có bài dạy ngữ pháp trước khi làm bài, gồm công thức, ví dụ B1, lỗi dễ sai và bài làm có hướng dẫn.
- **Flashcard vocabulary**: flashcard lật thẻ, nghe phát âm bằng trình duyệt, ví dụ câu, mẹo phát âm và đánh dấu từ khó.
- **Quiz Pass**: mỗi ngày có quiz trắc nghiệm từ vựng + ngữ pháp, pass từ 80%, sai sẽ hiện giải thích.
- **Speaking guides**: mỗi câu Speaking có công thức trả lời, ý tưởng, model answer và cụm nên dùng.
- **Mistake Bank**: ghi lỗi học thật để cuối lộ trình sửa đúng vấn đề.
- **Exam Mode**: 5 ngày cuối chuyển sang làm đề và chữa lỗi.

## Cách chạy nhanh trên máy

Mở file `index.html` bằng trình duyệt.

## Cách đưa lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ các file: `index.html`, `styles.css`, `app.js`, `manifest.json`, `sw.js`, `README.md`.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn branch `main` và thư mục `/root`.
6. Mở link GitHub Pages trên điện thoại.
7. Trên Chrome/Safari, chọn **Add to Home Screen** để dùng như app học hằng ngày.

## Dữ liệu lưu ở đâu?

Checklist, điểm quiz, từ khó, Mistake Bank và ngày bắt đầu học được lưu trong `localStorage` của trình duyệt. Nếu đổi điện thoại/trình duyệt, hãy dùng nút **Xuất tiến độ** để lưu file JSON.

## Lưu ý về phát âm

Nút **Nghe phát âm** dùng Web Speech API của trình duyệt. Chrome/Edge trên điện thoại thường chạy ổn. Nếu không nghe được, hãy kiểm tra âm lượng hoặc thử mở bằng Chrome.
