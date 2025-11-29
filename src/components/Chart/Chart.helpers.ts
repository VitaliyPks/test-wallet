export const generateMockData = (
  intervalMs: number,
  count: number,
  isDaily: boolean
) => {
  const data = [];
  let price = 15000;
  const now = Date.now();

  for (let i = 0; i < count; i++) {
    const time = now - (count - i) * intervalMs;

    if (isDaily) {
      const timeStr = new Date(time).toISOString().slice(0, 10);
      data.push({ time: timeStr, value: price });
    } else {
      data.push({ time, value: price });
    }

    price += (Math.random() - 0.5) * 50;
  }

  return data;
};
