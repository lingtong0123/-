const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/:date?', (req, res) => {
  let date;
  const dateParam = req.params.date;
  
  // 处理空参数情况（测试7、8）
  if (!dateParam) {
    date = new Date();
    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
  
  // 检查是否是Unix时间戳（数字字符串）（测试4）
  if (/^\d+$/.test(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else {
    date = new Date(dateParam);
  }
  
  // 处理无效日期（测试6）
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }
  
  // 返回有效日期的响应（测试2、3、5）
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
