// export const getScreenConfig = (width, height) => {
//   const screenConfig = [
//     {
//       minWidth: 1920,
//       maxWidth: Infinity,
//       minHeight: 0,
//       maxHeight: Infinity,
//       speed: 0.2,
//       offset: -350,
//       backgroundSize: "120%",
//     },
//     {
//       minWidth: 1280,
//       maxWidth: 1919,
//       minHeight: 0,
//       maxHeight: Infinity,
//       speed: 0.17,
//       offset: -80,
//       backgroundSize: "135%",
//     },

//     // Условия для экранов шириной 1440 пикселей и выше
//     {
//       minWidth: 1440,
//       maxWidth: 1919,
//       minHeight: 900,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: 185,
//       backgroundSize: "100%",
//     },

//     // Условия для экранов шириной 1280 пикселей и выше
//     {
//       minWidth: 1280,
//       maxWidth: 1439,
//       minHeight: 800,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: 120,
//       backgroundSize: "100%",
//     },

//     // Условия для экранов шириной 1024 пикселя и высотой от 1366 пикселей
//     {
//       minWidth: 1024,
//       maxWidth: 1279,
//       minHeight: 1366,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "245%",
//     },

//     // Условия для экранов шириной 1024 пикселя и высотой до 1365 пикселей
//     {
//       minWidth: 1024,
//       maxWidth: 1279,
//       minHeight: 600,
//       maxHeight: 1365,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "120%",
//     },

//     // Остальные конфигурации
//     {
//       minWidth: 912,
//       maxWidth: 1023,
//       minHeight: 1368,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -105,
//       backgroundSize: "260%",
//     },
//     {
//       minWidth: 853,
//       maxWidth: 911,
//       minHeight: 1280,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "280%",
//     },
//     {
//       minWidth: 820,
//       maxWidth: 852,
//       minHeight: 1180,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -90,
//       backgroundSize: "265%",
//     },
//     {
//       minWidth: 768,
//       maxWidth: 819,
//       minHeight: 1024,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -105,
//       backgroundSize: "250%",
//     },
//     {
//       minWidth: 540,
//       maxWidth: 767,
//       minHeight: 720,
//       maxHeight: Infinity,
//       speed: 0.14,
//       offset: -55,
//       backgroundSize: "240%",
//     },
//     {
//       minWidth: 430,
//       maxWidth: 539,
//       minHeight: 932,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -75,
//       backgroundSize: "390%",
//     },
//     {
//       minWidth: 412,
//       maxWidth: 429,
//       minHeight: 915,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -55,
//       backgroundSize: "380%",
//     },
//     {
//       minWidth: 414,
//       maxWidth: 411,
//       minHeight: 896,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -60,
//       backgroundSize: "370%",
//     },
//     {
//       minWidth: 390,
//       maxWidth: 413,
//       minHeight: 844,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -60,
//       backgroundSize: "365%",
//     },
//     {
//       minWidth: 375,
//       maxWidth: 389,
//       minHeight: 667,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -40,
//       backgroundSize: "305%",
//     },
//     {
//       minWidth: 360,
//       maxWidth: 374,
//       minHeight: 740,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -38,
//       backgroundSize: "340%",
//     },
//     {
//       minWidth: 344,
//       maxWidth: 359,
//       minHeight: 882,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -47,
//       backgroundSize: "420%",
//     },
//   ];

//   // Находим конфигурацию, которая подходит для текущего размера экрана
//   const config = screenConfig.find((config) => {
//     return (
//       width >= config.minWidth &&
//       width <= config.maxWidth &&
//       height >= config.minHeight &&
//       height <= config.maxHeight
//     );
//   });

//   // Возвращаем найденную конфигурацию или последнюю, если не нашли подходящую
//   return config || screenConfig[screenConfig.length - 1];
// };





// export const getScreenConfig = (width, height) => {
//   const screenConfig = [
//     { minWidth: 1920, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity, speed: 0.2, offset: -350, backgroundSize: "120%" },
//     { minWidth: 1280, maxWidth: 1919, minHeight: 0, maxHeight: Infinity, speed: 0.17, offset: -75, backgroundSize: "135%" },

//     // Условия для экранов шириной 1440 пикселей и выше
//     {
//       minWidth: 1440,
//       maxWidth: 1919,
//       minHeight: 900,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: 185,
//       backgroundSize: "100%",
//     },

//     // Условия для экранов шириной 1280 пикселей и выше
//     {
//       minWidth: 1280,
//       maxWidth: 1439,
//       minHeight: 800,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: 120,
//       backgroundSize: "100%",
//     },

//     // Условия для экранов шириной 1024 пикселя и высотой от 1366 пикселей
//     {
//       minWidth: 1024,
//       maxWidth: 1279,
//       minHeight: 1366,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "245%",
//     },

//     // Условия для экранов шириной 1024 пикселя и высотой до 1365 пикселей
//     {
//       minWidth: 1024,
//       maxWidth: 1279,
//       minHeight: 600,
//       maxHeight: 1365,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "120%",
//     },

//     // Условия для экранов шириной 1080 пикселей и высотой 1920 пикселей
//     {
//       minWidth: 1080,
//       maxWidth: 1080,
//       minHeight: 1920,
//       maxHeight: 1920,
//       speed: 0.15,
//       offset: -50,
//       backgroundSize: "250%",
//     },

//     // Остальные конфигурации
//     {
//       minWidth: 912,
//       maxWidth: 1023,
//       minHeight: 1368,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -105,
//       backgroundSize: "260%",
//     },
//     {
//       minWidth: 853,
//       maxWidth: 911,
//       minHeight: 1280,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "280%",
//     },
//     {
//       minWidth: 820,
//       maxWidth: 852,
//       minHeight: 1180,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -90,
//       backgroundSize: "265%",
//     },
//     {
//       minWidth: 768,
//       maxWidth: 819,
//       minHeight: 1024,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -105,
//       backgroundSize: "250%",
//     },
//     {
//       minWidth: 540,
//       maxWidth: 767,
//       minHeight: 720,
//       maxHeight: Infinity,
//       speed: 0.14,
//       offset: -55,
//       backgroundSize: "240%",
//     },
//     {
//       minWidth: 430,
//       maxWidth: 539,
//       minHeight: 932,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -75,
//       backgroundSize: "390%",
//     },
//     {
//       minWidth: 412,
//       maxWidth: 429,
//       minHeight: 915,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -55,
//       backgroundSize: "380%",
//     },
//     {
//       minWidth: 414,
//       maxWidth: 411,
//       minHeight: 896,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -60,
//       backgroundSize: "370%",
//     },
//     {
//       minWidth: 390,
//       maxWidth: 413,
//       minHeight: 844,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -60,
//       backgroundSize: "365%",
//     },
//     {
//       minWidth: 375,
//       maxWidth: 389,
//       minHeight: 667,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -40,
//       backgroundSize: "305%",
//     },
//     {
//       minWidth: 360,
//       maxWidth: 374,
//       minHeight: 740,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -38,
//       backgroundSize: "340%",
//     },
//     {
//       minWidth: 344,
//       maxWidth: 359,
//       minHeight: 882,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -47,
//       backgroundSize: "420%",
//     },
//   ];

//   // Находим конфигурацию, которая подходит для текущего размера экрана
//   const config = screenConfig.find((config) => {
//     return width >= config.minWidth && width <= config.maxWidth && height >= config.minHeight && height <= config.maxHeight;
//   });

//   // Возвращаем найденную конфигурацию или последнюю, если не нашли подходящую
//   return config || screenConfig[screenConfig.length - 1];
// };





// export const getScreenConfig = (width, height) => {
//   const screenConfig = [
//     { minWidth: 1920, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity, speed: 0.2, offset: -350, backgroundSize: "120%" },
//     { minWidth: 1280, maxWidth: 1919, minHeight: 0, maxHeight: Infinity, speed: 0.17, offset: -75, backgroundSize: "135%" },
    
//     {
//       minWidth: 1440,
//       maxWidth: 1919,
//       minHeight: 900,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: 185,
//       backgroundSize: "100%",
//     },
//     {
//       minWidth: 1280,
//       maxWidth: 1439,
//       minHeight: 800,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: 120,
//       backgroundSize: "100%",
//     },
//     {
//       minWidth: 1024,
//       maxWidth: 1279,
//       minHeight: 1366,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "245%",
//     },
//     {
//       minWidth: 1024,
//       maxWidth: 1279,
//       minHeight: 600,
//       maxHeight: 1365,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "120%",
//     },
//     {
//       minWidth: 1080,
//       maxWidth: 1080,
//       minHeight: 1920,
//       maxHeight: 1920,
//       speed: 0.15,
//       offset: -0,
//       backgroundSize: "250%",
//     },
//     {
//       minWidth: 912,
//       maxWidth: 1023,
//       minHeight: 1368,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -105,
//       backgroundSize: "260%",
//     },
//     {
//       minWidth: 853,
//       maxWidth: 911,
//       minHeight: 1280,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -100,
//       backgroundSize: "280%",
//     },
//     {
//       minWidth: 820,
//       maxWidth: 852,
//       minHeight: 1180,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -90,
//       backgroundSize: "265%",
//     },
//     {
//       minWidth: 768,
//       maxWidth: 819,
//       minHeight: 1024,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -105,
//       backgroundSize: "250%",
//     },
//     {
//       minWidth: 540,
//       maxWidth: 767,
//       minHeight: 720,
//       maxHeight: Infinity,
//       speed: 0.14,
//       offset: -55,
//       backgroundSize: "240%",
//     },
//     {
//       minWidth: 430,
//       maxWidth: 539,
//       minHeight: 932,
//       maxHeight: Infinity,
//       speed: 0.15,
//       offset: -75,
//       backgroundSize: "390%",
//     },
//     {
//       minWidth: 412,
//       maxWidth: 429,
//       minHeight: 915,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -55,
//       backgroundSize: "380%",
//     },
//     {
//       minWidth: 414,
//       maxWidth: 411,
//       minHeight: 896,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -60,
//       backgroundSize: "370%",
//     },
//     {
//       minWidth: 390,
//       maxWidth: 413,
//       minHeight: 844,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -60,
//       backgroundSize: "365%",
//     },
//     {
//       minWidth: 375,
//       maxWidth: 389,
//       minHeight: 667,
//       maxHeight: Infinity,
//       speed: 0.12,
//       offset: -40,
//       backgroundSize: "305%",
//     },
//     {
//       minWidth: 360,
//       maxWidth: 374,
//       minHeight: 740,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -38,
//       backgroundSize: "340%",
//     },
//     {
//       minWidth: 344,
//       maxWidth: 359,
//       minHeight: 882,
//       maxHeight: Infinity,
//       speed: 0.1,
//       offset: -47,
//       backgroundSize: "420%",
//     },
//   ];

//   // Находим конфигурацию, которая подходит для текущего размера экрана
//   const config = screenConfig.find((config) => {
//     return width >= config.minWidth && width <= config.maxWidth && height >= config.minHeight && height <= config.maxHeight;
//   });

//   // Выводим конфигурацию в консоль для отладки
//   console.log("Screen width:", width, "Screen height:", height);
//   console.log("Selected configuration:", config);

//   // Возвращаем найденную конфигурацию или последнюю, если не нашли подходящую
//   return config || screenConfig[screenConfig.length - 1];
// };






export const getScreenConfig = (width, height) => {
  const screenConfig = [
    { minWidth: 1920, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity, speed: 0.2, offset: -350, backgroundSize: "120%" },
    { minWidth: 1280, maxWidth: 1919, minHeight: 0, maxHeight: Infinity, speed: 0.17, offset: -75, backgroundSize: "135%" },
    {
      minWidth: 1440,
      maxWidth: 1919,
      minHeight: 900,
      maxHeight: Infinity,
      speed: 0.15,
      offset: 185,
      backgroundSize: "100%",
    },
    {
      minWidth: 1280,
      maxWidth: 1439,
      minHeight: 800,
      maxHeight: Infinity,
      speed: 0.15,
      offset: 120,
      backgroundSize: "100%",
    },
    {
      minWidth: 1080,
      maxWidth: 1080,
      minHeight: 1920,
      maxHeight: 1920,
      speed: 0.15,
      offset: -150,
      backgroundSize: "320%",
    },
    {
      minWidth: 1024,
      maxWidth: 1279,
      minHeight: 1366,
      maxHeight: Infinity,
      speed: 0.15,
      offset: -100,
      backgroundSize: "245%",
    },
    {
      minWidth: 1024,
      maxWidth: 1279,
      minHeight: 600,
      maxHeight: 1365,
      speed: 0.15,
      offset: -100,
      backgroundSize: "120%",
    },
    {
      minWidth: 912,
      maxWidth: 1023,
      minHeight: 1368,
      maxHeight: Infinity,
      speed: 0.12,
      offset: -105,
      backgroundSize: "260%",
    },
    {
      minWidth: 853,
      maxWidth: 911,
      minHeight: 1280,
      maxHeight: Infinity,
      speed: 0.15,
      offset: -100,
      backgroundSize: "280%",
    },
    {
      minWidth: 820,
      maxWidth: 852,
      minHeight: 1180,
      maxHeight: Infinity,
      speed: 0.15,
      offset: -90,
      backgroundSize: "265%",
    },
    {
      minWidth: 768,
      maxWidth: 819,
      minHeight: 1024,
      maxHeight: Infinity,
      speed: 0.15,
      offset: -105,
      backgroundSize: "250%",
    },
    {
      minWidth: 540,
      maxWidth: 767,
      minHeight: 720,
      maxHeight: Infinity,
      speed: 0.14,
      offset: -55,
      backgroundSize: "240%",
    },
    {
      minWidth: 430,
      maxWidth: 539,
      minHeight: 932,
      maxHeight: Infinity,
      speed: 0.15,
      offset: -75,
      backgroundSize: "390%",
    },
    {
      minWidth: 412,
      maxWidth: 429,
      minHeight: 915,
      maxHeight: Infinity,
      speed: 0.12,
      offset: -55,
      backgroundSize: "380%",
    },
    {
      minWidth: 414,
      maxWidth: 411,
      minHeight: 896,
      maxHeight: Infinity,
      speed: 0.12,
      offset: -60,
      backgroundSize: "370%",
    },
    {
      minWidth: 390,
      maxWidth: 413,
      minHeight: 844,
      maxHeight: Infinity,
      speed: 0.1,
      offset: -60,
      backgroundSize: "365%",
    },
    {
      minWidth: 375,
      maxWidth: 389,
      minHeight: 667,
      maxHeight: Infinity,
      speed: 0.12,
      offset: -40,
      backgroundSize: "305%",
    },
    {
      minWidth: 360,
      maxWidth: 374,
      minHeight: 740,
      maxHeight: Infinity,
      speed: 0.1,
      offset: -38,
      backgroundSize: "340%",
    },
    {
      minWidth: 344,
      maxWidth: 359,
      minHeight: 882,
      maxHeight: Infinity,
      speed: 0.1,
      offset: -47,
      backgroundSize: "420%",
    },
  ];

  // Находим конфигурацию, которая подходит для текущего размера экрана
  const config = screenConfig.find((config) => {
    return (
      width >= config.minWidth &&
      width <= config.maxWidth &&
      height >= config.minHeight &&
      height <= config.maxHeight
    );
  });

  // Выводим конфигурацию в консоль для отладки
  console.log("Screen width:", width, "Screen height:", height);
  console.log("Selected configuration:", config);

  // Возвращаем найденную конфигурацию или последнюю, если не нашли подходящую
  return config || screenConfig[screenConfig.length - 1];
};