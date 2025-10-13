module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"], // Chạy eslint với fix tự động trên các file JavaScript/TypeScript.
  "**/*.ts?(x)": () => "npm run check-types", // Chạy kiểm tra kiểu dữ liệu trên các file TypeScript.
  "*.{json,yaml}": ["prettier --write"], // Chạy prettier để định dạng các file JSON/YAML.
};
