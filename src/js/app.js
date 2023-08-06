  export default function orderByProps(ob, order) {
    const res1 = [];
    for (const item in ob) {
      res1.push({ key: item, value: ob[item] });
    }
    res1.sort((a, b) => {
      const j = (a.key > b.key) ? 1 : -1;
      return j;
    });
    let res = [];
    for (const item of order) {
      res.push({ key: item, value: ob[item] });
      res1.splice(res1.indexOf(item), 1);
    }
    res = res.concat(res1);
    return res;
  }