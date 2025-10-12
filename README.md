# Website Đặt Vé Xe Buýt - Bus Ticket Booking Web

Dự án này là một ứng dụng web hiện đại được xây dựng bằng Next.js, cho phép người dùng tìm kiếm, đặt và quản lý vé xe buýt trực tuyến. Hệ thống hỗ trợ hai vai trò người dùng riêng biệt: **Khách hàng (Customer)** và **Nhân viên (Staff)**, với các giao diện và chức năng được phân quyền rõ ràng.

*This project is a modern web application built with Next.js for searching, booking, and managing bus tickets online. The system supports two distinct user roles: **Customer** and **Staff**, with clearly defined interfaces and functionalities.*

## ✨ Tính Năng Nổi Bật (Key Features)

- **Xác thực & Phân quyền:**
    - Đăng ký và Đăng nhập cho cả hai vai trò.
    - Phân quyền truy cập dựa trên vai trò (Role-Based Access Control).
    - Middleware bảo vệ các trang riêng tư, tự động chuyển hướng người dùng.
- **Dành cho Khách hàng (Customer):**
    - Giao diện trang chủ (`/home`) riêng biệt.
    - Tìm kiếm chuyến đi theo điểm đi, điểm đến và ngày khởi hành.
    - Xem chi tiết chuyến đi, sơ đồ ghế ngồi và chọn ghế.
    - Thực hiện quy trình đặt vé và thanh toán.
    - Xem lại lịch sử các vé đã đặt.
    - Quản lý thông tin cá nhân.
- **Dành cho Nhân viên (Staff):**
    - Trang quản trị (`/dashboard`) chuyên dụng.
    - Quản lý các tuyến xe, lịch trình và thông tin xe.
    - Quản lý tất cả các đơn đặt vé của khách hàng.
    - Xác nhận và cập nhật trạng thái vé.
    - Xem báo cáo, thống kê.

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** [Next.js](https://nextjs.org/) (sử dụng App Router)
- **Ngôn ngữ:** [TypeScript](https://www.typescriptlang.org/)
- **Thư viện UI:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Quản lý Trạng thái:** React Context API
- **Backend:** Kết nối đến một hệ thống backend API riêng biệt.

## 📂 Cấu Trúc Dự Án (Project Structure)

Dự án sử dụng **Route Groups** của Next.js App Router để tổ chức các luồng người dùng một cách logic mà không ảnh hưởng đến URL.

```
src/
├── app/
│   ├── (auth)/                  # Nhóm các trang xác thực (login, signup)
│   ├── (customer)/              # Nhóm các trang dành cho Customer
│   │   ├── home/
│   │   └── layout.tsx           # Layout riêng của Customer
│   ├── (staff)/                 # Nhóm các trang dành cho Staff
│   │   ├── dashboard/
│   │   └── layout.tsx           # Layout riêng của Staff
│   └── layout.tsx               # Layout gốc của toàn bộ ứng dụng
│
├── contexts/
│   └── AuthContext.tsx          # Context quản lý trạng thái đăng nhập
│
└── middleware.ts                # Bảo vệ và chuyển hướng route
```

## 🚀 Bắt Đầu (Getting Started)

Làm theo các bước sau để thiết lập và chạy dự án trên máy của bạn.

### 1. Yêu cầu (Prerequisites)

- [Node.js](https://nodejs.org/) (phiên bản 18.17.0 trở lên)
- `npm`, `yarn`, hoặc `pnpm`

### 2. Cài đặt (Installation)

1. **Clone the repository:**

    ```bash
    git clone (https://github.com/your-username/bus-ticket-booking-web.git)
    cd bus-ticket-booking-web
    ```

2. **Cài đặt các dependencies:**

    ```bash
    npm install
    ```

3. **Thiết lập Biến Môi Trường (Environment Variables):**
   Tạo một tệp `.env.local` ở thư mục gốc của dự án và thêm các biến cần thiết.

    ```
    # URL trỏ đến API backend của bạn
    NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
    
    # (Thêm các biến khác nếu cần)
    ```


### 3. Chạy Dự Án (Running the Project)

- **Chạy ở chế độ development:**
  Lệnh này sẽ khởi động server tại `http://localhost:3000` với tính năng Hot-Reload.

    ```bash
    npm run dev
    ```

- **Build dự án cho production:**
  Lệnh này sẽ tối ưu hóa và build ứng dụng của bạn để sẵn sàng triển khai.

    ```bash
    npm run build
    ```

- **Chạy ở chế độ production:**
  Lệnh này sẽ khởi động server từ phiên bản đã được build.

    ```bash
    npm run start
    ```


## 📜 Các Lệnh Hữu Ích (Available Scripts)

- `npm run dev`: Khởi động server development.
- `npm run build`: Build ứng dụng cho môi trường production.
- `npm run start`: Chạy ứng dụng đã được build.
- `npm run lint`: Chạy ESLint để kiểm tra lỗi và định dạng code.

## 🔐 Luồng Xác Thực (Authentication Flow)

1. Người dùng truy cập vào trang `/login` hoặc `/signup`.
2. Sau khi điền thông tin, frontend sẽ gọi API tới backend để xác thực.
3. Nếu thành công, backend sẽ tạo một session/token và set vào `HttpOnly` cookie.
4. Frontend sẽ chuyển hướng người dùng.
5. `middleware.ts` sẽ chạy trước mỗi request, kiểm tra cookie và vai trò của người dùng:
    - Nếu là **Customer**, người dùng sẽ được truy cập các trang trong nhóm `(customer)` (ví dụ: `/home`) và bị chặn khỏi các trang của Staff.
    - Nếu là **Staff**, người dùng sẽ được truy cập các trang trong nhóm `(staff)` (ví dụ: `/dashboard`) và bị chặn khỏi các trang của Customer.
    - Nếu chưa đăng nhập, người dùng sẽ bị chuyển hướng về `/login` khi cố gắng truy cập các trang cần bảo vệ.
