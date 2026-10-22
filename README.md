# Portfolio — Đào Văn Huỳnh

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

- Màn hình chính hiển thị vai trò, tình trạng học tập và ba dự án. Từng dự án mở trực tiếp phần vai trò, đóng góp, công nghệ và mã nguồn.
- Giới thiệu và học vấn nằm chung một mục. Kỹ năng, liên hệ và GitHub có ô riêng; nút gửi email luôn ở thanh trên.
- Điều hướng bằng hash (`#about`, `#projects`, `#project/aurora`, ...), hỗ trợ đường dẫn trực tiếp và nút Back của trình duyệt.
- Nút Trang chính hoặc phím Escape đưa về màn hình chính. Trang dự án có nút quay lại danh sách.
- Bàn làm việc chỉ là hình trang trí trong phần giới thiệu, không có mục chọn riêng. `#education` và `#workspace` cũ mở phần giới thiệu.
- Nút sao chép email hiển thị thông báo kết quả. Link email/điện thoại dùng `mailto:`/`tel:`.
- Tôn trọng `prefers-reduced-motion`. Trang không tải Three.js hoặc chạy WebGL.

## Mã nguồn

- `index.html`: khung tablet và các ô thông tin trên màn hình chính.
- `styles.css`: bố cục ô ghép, các màn hình nội dung và responsive.
- `script.js`: dữ liệu dự án từ CV, định tuyến và nội dung từng mục.
- `desk-fallback.svg`: hình bàn làm việc dùng làm trang trí.
- `scene.js` và `vendor/three.min.js`: mã mô hình 3D trước đây, được giữ để tham khảo; không tải trong trang hiện tại.
- `assets/huynh-avatar.webp`: avatar tạo bằng ImageGen tích hợp, theo ảnh chân dung có sẵn trong repo và ảnh phong cách người dùng cung cấp. Prompt nằm trong `assets/avatar-notes.md`.

## Thứ tự nội dung

Ưu tiên câu hỏi của người xem: Huỳnh làm gì, đang tìm cơ hội nào, đã làm dự án gì và liên hệ ở đâu. Nhãn điều hướng dùng từ cụ thể; mô tả dự án nêu vai trò và phần đóng góp, không thêm số liệu hay kinh nghiệm công việc ngoài CV.

Tham khảo [GitHub: dùng hồ sơ cho ứng tuyển](https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume) và [NN/g: nội dung ngắn, dễ đọc lướt, khách quan](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/).

Ảnh giao diện Flight Booking lấy từ portfolio makenewline ban đầu. Các hình khối Aurora là minh họa cho logistics, không phải screenshot ứng dụng. Font Manrope và DM Sans tải qua Google Fonts, có font hệ thống dự phòng. Không có analytics hoặc biểu mẫu gửi dữ liệu.
