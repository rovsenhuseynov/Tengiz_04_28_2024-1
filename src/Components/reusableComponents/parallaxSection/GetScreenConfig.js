export const getScreenConfig = (width, height) => {
  const screenConfig = [
    { minWidth: 1920,  speed: 0.2, offset: -90, backgroundSize: '120%'},
    { minWidth: 1280, speed: 0.15, offset: -70, backgroundSize: '130%' }, //  <====================

    { minWidth: 1440, minHeight: 900, speed: 0.15, offset: 185, backgroundSize: '100%' },    // <======= 15
    { minWidth: 1280, minHeight: 800, speed: 0.15, offset: 120, backgroundSize: '100%' },    // <======= 14
    { minWidth: 1024, minHeight: 1366, speed: 0.15, offset: -110, backgroundSize: '250%' },   // <======= 9
    { minWidth: 912, minHeight: 1368, speed: 0.12, offset: -110, backgroundSize: '260%' },    // <======= 10
    { minWidth: 853, minHeight: 1280, speed: 0.15, offset: -100, backgroundSize: '280%' },    // <======= 13
    { minWidth: 820, minHeight: 1180, speed: 0.15, offset: -90, backgroundSize: '265%' },    // <======= 8
    { minWidth: 768, minHeight: 1024, speed: 0.15, offset: -105, backgroundSize: '250%' },  // <======= 7
    { minWidth: 768, minHeight: 600, speed: 0.2, offset: 100, backgroundSize: 'cover' },
    { minWidth: 576, minHeight: 400, speed: 0.2, offset: 100, backgroundSize: 'cover' },
    { minWidth: 540, minHeight: 720, speed: 0.14, offset: -55, backgroundSize: '240%' },   // <======= 11
    { minWidth: 430, minHeight: 932, speed: 0.15, offset: -75, backgroundSize: '390%' },    // <======= 4
    { minWidth: 412, minHeight: 915, speed: 0.12, offset: -55, backgroundSize: '380%' },   // <======= 3
    { minWidth: 414, minHeight: 896, speed: 0.12, offset: -60, backgroundSize: '370%' },   // <======= 5
    { minWidth: 390, minHeight: 844, speed: 0.1, offset: -60, backgroundSize: '365%' },  // <======= 1
    { minWidth: 375, minHeight: 667, speed: 0.12, offset: -40, backgroundSize: '305%' },   // <======= 2
    { minWidth: 360, minHeight: 740, speed: 0.13, offset: -60, backgroundSize: '360%' },   // <======= 6
    { minWidth: 344, minHeight: 882, speed: 0.08, offset: -47, backgroundSize: '420%' },    // <======= 12
    // Другие конфигурации...
  ];

  // Находим конфигурацию, которая подходит для текущего размера экрана
  const config = screenConfig.find(config => width >= config.minWidth);

  // Возвращаем найденную конфигурацию или последнюю, если не нашли подходящую
  return config || screenConfig[screenConfig.length - 1];
};






