# Quiet Workspace — Đào Văn Huỳnh

Portfolio cá nhân theo hướng thiết kế Quiet Workspace đã được chọn: nền sage, mô hình bàn làm việc 3D tương tác, các dự án lập trình và thông tin liên hệ.

## Chạy tại máy

Không cần cài dependency hay build. Chạy `node server.mjs`, mở địa chỉ được in ra (mặc định `http://127.0.0.1:8781`). Các file website nằm ở thư mục gốc.

## Tương tác

- Kéo ngang mô hình hoặc dùng nút Xoay bàn / Đặt lại.
- Bật đèn để đổi ánh sáng góc làm việc.
- Bấm laptop để mở dự án Trello.
- Bấm dự án để xem mô tả, mã nguồn và demo. Escape hoặc nút Đóng để đóng hộp thoại.
- Khi WebGL không khả dụng, trang hiển thị hình bàn làm việc tĩnh. Nội dung và liên kết vẫn hoạt động.

## Nội dung và nguồn

Thông tin, mô tả và liên kết được đọc từ các repo công khai của https://github.com/daohuynh05 ngày 22/10/2026. 

- Trello: https://github.com/daohuynh05/trello-app và trello-api; ảnh từ `assets/Trello.png` trong makenewline.
- Chat & Video: https://github.com/daohuynh05/ChatAndVideoCall; ảnh từ `assets/Home.png` trong makenewline.
- Liptwo Movie: https://github.com/daohuynh05/liptwo-movie; ảnh từ `assets/movie.png` trong makenewline.
- AutoWash Pro: https://github.com/daohuynh05/FE-SmartWashCar và https://github.com/daohuynh05/Smart-Management-System-Car-Wash.
- Flight Booking: tên hiển thị cho bookvemaybayapp; ảnh từ `assets/BookingApp.png` trong makenewline.
- Email, LinkedIn: từ portfolio makenewline ban đầu.

Thư viện Three.js 0.160.1 được lưu ở `vendor/`; xem giấy phép đi kèm. Font Manrope và DM Sans tải từ Google Fonts; có font hệ thống dự phòng. Mô hình 3D được dựng bằng hình học trong mã, không cần tải file GLB. Render theo thao tác, không chạy animation liên tục. Không có analytics hoặc biểu mẫu thu thập dữ liệu.

## Chỉnh sửa

Nội dung trang: `index.html`. Phong cách và responsive: `styles.css`. Dữ liệu dự án / hộp thoại: `app.js`. Mô hình và ánh sáng: `scene.js`.
