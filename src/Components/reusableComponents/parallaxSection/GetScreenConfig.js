export const getScreenConfig = (width, height) => {
  const screenConfig = [
    { minWidth: 1440, minHeight: 900, speed: 0.2, offset: 100, backgroundSize: 'cover' },
    { minWidth: 1280, minHeight: 800, speed: 0.2, offset: 120, backgroundSize: 'cover' },
    { minWidth: 1024, minHeight: 768, speed: 0.2, offset: 100, backgroundSize: 'cover' },
    { minWidth: 1024, minHeight: 600, speed: 0.2, offset: 90, backgroundSize: 'cover' },

    { minWidth: 1024, minHeight: 1366, speed: 0.2, offset: 0, backgroundSize: 'cover' },

    { minWidth: 912, minHeight: 1368, speed: 0.2, offset: 170, backgroundSize: 'cover' },
    { minWidth: 853, minHeight: 1280, speed: 0.2, offset: 180, backgroundSize: 'cover' },
    { minWidth: 820, minHeight: 1180, speed: 0.2, offset: 130, backgroundSize: 'cover' },
    { minWidth: 768, minHeight: 1024, speed: 0.2, offset: 100, backgroundSize: '250%' },
    { minWidth: 768, minHeight: 600, speed: 0.2, offset: 100, backgroundSize: 'cover' },
    { minWidth: 576, minHeight: 400, speed: 0.2, offset: 100, backgroundSize: 'cover' },
    { minWidth: 540, minHeight: 720, speed: 0.2, offset: 110, backgroundSize: 'cover' },
    { minWidth: 430, minHeight: 932, speed: 0.2, offset: 110, backgroundSize: 'cover' },
    { minWidth: 412, minHeight: 914, speed: 0.2, offset: 120, backgroundSize: 'cover' },
    { minWidth: 390, minHeight: 844, speed: 0.2, offset: 100, backgroundSize: 'cover' },
    { minWidth: 360, minHeight: 740, speed: 0.2, offset: 100, backgroundSize: 'cover' },
    { minWidth: 375, minHeight: 667, speed: 0.2, offset: 80, backgroundSize: 'cover' },
    { minWidth: 344, minHeight: 882, speed: 0.2, offset: 100, backgroundSize: '350%' },
    // Добавляем другие конфигурации по мере необходимости
  ];

  const config = screenConfig.find(
    (config) => width >= config.minWidth && height >= config.minHeight
  );
  console.log("Screen config:", config); // Лог для проверки параметров конфигурации
  return config || screenConfig[screenConfig.length - 1];
};