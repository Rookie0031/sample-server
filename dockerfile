FROM node:20-alpine

WORKDIR /app
# 먼저 의존성 설치에 필요한 파일들만 복사
COPY package*.json ./
COPY tsconfig.json ./
# 모든 의존성 설치 (빌드에 필요한 devDependencies 포함)
RUN npm ci
# 소스 코드 복사
COPY src ./src
# TypeScript 빌드
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]