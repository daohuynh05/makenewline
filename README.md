# Huỳnh’s Space

Portfolio cá nhân của Đào Văn Huỳnh, theo giao diện máy tính bảng với các ô chữ nhật kích thước khác nhau. Trang chính vừa trong màn hình desktop; bấm một ô để mở riêng nội dung tương ứng. Trên màn hình hẹp, các ô cuộn bên trong khung ứng dụng.

Website: https://daohuynh05.github.io/makenewline/

## Nội dung

Thông tin được cập nhật theo CV do Huỳnh cung cấp ngày 22/10/2026:

- Hồ sơ: sinh viên CNTT, dự kiến tốt nghiệp 2027, định hướng Software Engineer entry-level; tập trung Backend & Full-stack.
- Aurora Logistics Platform: Backend Developer trong nhóm 4 người. Billing, tính toán tài chính, đàm phán/hỗ trợ và thông báo thời gian thực.
- AutoWash Pro: Full-stack Developer. Đặt lịch, quản lý khách hàng, loyalty và các luồng theo vai trò.
- Flight Booking: Frontend Developer. Giao diện User/Admin, tích hợp API, điều hướng phân quyền và chat Socket.IO.
- Kỹ năng, học vấn, ngôn ngữ và thông tin liên hệ theo CV. Tệp PDF CV gốc không nằm trong website hoặc repository.

## Chạy tại máy

Không cần cài dependency hoặc build. Chạy `node server.mjs`, mở địa chỉ được in ra (mặc định `http://127.0.0.1:8781`). Các file web nằm ở thư mục gốc và hoạt động trên GitHub Pages. `.nojekyll` giữ việc xuất bản dưới dạng static.

## Điều hướng và tương tác

- Các ô mở: Về mình, dự án nổi bật, danh sách dự án, kỹ năng, học vấn, liên hệ, góc làm việc 3D.
- Điều hướng bằng hash (`#about`, `#projects`, `#project/aurora`, ...), hỗ trợ đường dẫn trực tiếp và nút Back của trình duyệt.
- Nút Trang chính hoặc phím Escape đưa về màn hình chính. Trang dự án có nút quay lại danh sách.
- Trong góc làm việc 3D: kéo ngang để xoay, dùng nút Xoay bàn / Đặt lại / Bật đèn; bấm laptop để mở Aurora.
- Khi WebGL không khả dụng, hiển thị hình bàn làm việc dự phòng và vẫn truy cập được các phần khác.
- Nút sao chép email hiển thị thông báo kết quả. Link email/điện thoại dùng `mailto:`/`tel:`.
- Tôn trọng `prefers-reduced-motion`; mô hình 3D render theo thao tác, không có vòng lặp animation liên tục.

## Mã nguồn

- `index.html`: khung tablet, màn hình chính và góc 3D.
- `styles.css`: bố cục ô ghép, các màn hình nội dung và responsive.
- `script.js`: dữ liệu dự án từ CV, định tuyến và nội dung từng mục.
- `scene.js`: mô hình bàn làm việc, ánh sáng và tương tác Three.js.
- `assets/huynh-avatar.webp`: avatar tạo bằng ImageGen tích hợp, theo ảnh chân dung có sẵn trong repo và ảnh phong cách người dùng cung cấp. Prompt nằm trong `assets/avatar-notes.md`.
- `vendor/three.min.js`: Three.js 0.160.1; giấy phép MIT kèm theo trong `vendor/THREE-LICENSE.txt`.

Ảnh giao diện Flight Booking lấy từ portfolio makenewline ban đầu. Các hình khối Aurora là minh họa cho logistics, không phải screenshot ứng dụng. Font Manrope và DM Sans tải qua Google Fonts, có font hệ thống dự phòng. Không có analytics hoặc biểu mẫu gửi dữ liệu.
