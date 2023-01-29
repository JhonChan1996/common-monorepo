// 此文件存储有关文件处理相关的方法

// const fs = require('fs'); // 用于文件操作
// const fg = require('fast-glob'); // 用于快速查找文件
import fg from 'fast-glob';
// 获取指定目录下的所有文件夹
export const getFoldersByPath = (path = '', exclude = []) => {
  const foldersArray = fg.sync('*', { cwd: path, onlyDirectories: true });
  if (!exclude.length) return foldersArray;
  return foldersArray.filter((item) => !exclude.includes(item));
  // return foldersArray.filter((item) => item !== 'node_modules');
};
