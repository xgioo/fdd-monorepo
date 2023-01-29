// 字符串：'-'连接命名转换成大驼峰命名
// 调用：_toBigCamel('hello-world') => HelloWorld
const _toBigCamel = (str) => {
  if (!str) return "";
  return str
    .replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
    .replace(/\S/, (code) => code.toUpperCase());
};

export { _toBigCamel };
