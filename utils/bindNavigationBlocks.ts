const bindNavigationBlocks = (blocks: any) => {
  const result = [];
  let temp = [];
  for (const block of blocks) {
    if (block.type === 'heading_2') {
      // FIXME: heading_3으로 시작하는 경우 처리
      if (temp.length) {
        result.at(-1).children = [...temp];
      }
      result.push(block);
      temp = [];
    } else if (block.type === 'heading_3') {
      temp.push(block);
    }
  }
  if (temp.length) {
    result.at(-1).children = [...temp];
  }
  return result;
};

export default bindNavigationBlocks;
