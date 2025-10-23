# --- Stage 1: Build (Xây dựng) ---
# Sử dụng Node.js 18 (như trong README của bạn)
FROM node:18-alpine AS builder
WORKDIR /app

# Copy file package.json và cài đặt dependencies
# Điều này tận dụng cache của Docker
COPY package.json package-lock.json* ./
RUN npm install

# Copy toàn bộ source code (bao gồm cả file .env.local của bạn)
COPY . .

# Build ứng dụng. Lệnh này sẽ đọc NEXT_PUBLIC_BACKEND_URL từ .env.local
RUN npm run build

# --- Stage 2: Production (Chạy) ---
# Sử dụng một image nhỏ gọn hơn
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy các file cần thiết từ stage 'builder'
# Chúng ta copy thư mục .next/standalone được tối ưu
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Mở cổng 3000 (cổng mặc định của Next.js)
EXPOSE 3000

# Lệnh để khởi động server Next.js
# server.js được tạo tự động bởi 'output: standalone'
CMD ["node", "server.js"]
