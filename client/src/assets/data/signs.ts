export const signs = [
   {
      id: 0,
      name: 'Данные на автомобиль',
      part: 'car',
      type: 'input',
      fields: [
         { id: 1, name: 'Объем двигателя', type: 'number', placeholder: '1,7', required: true },
         { id: 2, name: 'Модель', placeholder: 'Лада' },
         { id: 3, name: 'Марка', placeholder: 'Гранта' },
         { id: 4, name: 'Год выпуска', placeholder: '2020', type: 'number' },
      ],
   },
   {
      id: 1,
      name: 'Пробег',
      part: 'engine',
      type: 'radio',
      fields: [
         { id: 5, name: 'До 100 000 км' },
         { id: 6, name: 'От 100 000 км',},
      ],
   },
   {
      id: 111,
      name: 'Неполадки',
      part: 'errors',
      type: 'checkbox',
      fields: [
         { id: 999,
            name: 'Работа двигателя не сопровождается никаким из ниже перечисленных признаков:'
         }
      ],
   },
   {
      id: 2,
      name: 'Повышенный расход масла',
      part: 'engine',
      type: 'radio',
      fields: [
         { id: 7, name: 'Расход масла до 100 мл на 1000 км' },
         { id: 8, name: 'Расход масла до 500 мл на 1000 км' },
         { id: 9, name: 'Расход масла более 500 мл на 1000 км' }
      ],
   },
   {
      id: 3,
      name: 'Дымление',
      part: 'engine',
      type: 'checkbox',
      fields: [
         { id: 10, name: 'Cизый дым при запуске' },
         { id: 11, name: 'Дымление во время движения' },
      ],
   },
   {
      id: 4,
      name: 'Прочие признаки',
      part: 'engine',
      type: 'checkbox',
      fields: [
         { id: 12, name: 'Повышенная вибрация' },
         { id: 13, name: 'Троение' },
         { id: 14, name: 'Стучат гидрокомпенсаторы' },
         { id: 15, name: 'Пониженная компрессия' },
         { id: 16, name: 'Посторонние звуки/стуки (не гидрокомпенсаторы)', exception: true },
      ],
   },
   {
      id: 5,
      name: 'Когда появились признаки неисправной работы',
      part: 'engine',
      type: 'radio',
      fields: [
         { id: 17, name: 'После последнего ТО',},
         { id: 18, name: 'Давно' },
      ],
   },
   {
      id: 11,
      name: 'Условия эксплуатации и обслуживания',
      part: 'service',
      type: 'radio',
      fields: [
         { id: 29, name: 'Агрессивный стиль езды, резкое переключение скоростей' },
         { id: 30, name: 'Редкое использование, раз-два раза в неделю' },
         { id: 31, name: 'Ежедневное использование по городу на малые расстояния' },
         { id: 32, name: 'Большая часть в пробках' },
         { id: 33, name: 'Регулярное использование, большие пробеги' },
         { id: 34, name: 'Работа в городском режиме, частые пробки' },
         { id: 35, name: 'Автопутешествия в периоды каникул' },
         { id: 36, name: 'Спокойный характер езды (до 3000 об/мин)' },
         { id: 37, name: 'Участвую в соревнованиях (трофи, автокросс, ралли, дрифт и т.п.)' },
         { id: 38, name: 'Сам провожу ТО' },
         { id: 39, name: 'Периодические или разовые долгие простои от 1 месяца и более', exception: true },
      ],
   },
   {
      id: 12,
      name: 'Цель применения',
      part: 'purpose',
      type: 'radio',
      fields: [
         {  id: 40, name: 'Продлить безремонтный срок эксплуатации (профилактика)' },
         {  id: 41, name: 'Снизить расход топлива' },
         {  id: 42, name: 'Повысить надежность' },
         {  id: 43, name: 'Повысить компрессию, мощность' },
         {  id: 44, name: 'Заменить ремонт' },
         {  id: 45, name: 'Подготовить к дальней поездке, сезону повышенной эксплуатации', }
      ],
   },
   {
      id: 6,
      name: 'Состояние АКПП',
      part: 'akpp',
      type: 'radio',
      fields: [
         { id: 19, name: 'работает ровно и без шума' },
         { id: 20, name: 'Рывки при переключении, шум, вибрация' },
      ],
   },
   {
      id: 7,
      name: 'Состояние МКПП',
      part: 'mkpp',
      type: 'radio',
      fields: [
         { id: 21, name: 'Работает ровно и без шума, переключение без усилий' },
         { id: 22, name: 'Трудности при переключении, шум, гул' },
      ],
   },
   {
      id: 8,
      name: 'Состояние ГУР',
      part: 'gur',
      type: 'radio',
      fields: [
         { id: 23, name: 'Работает ровно и без шума' },
         { id: 24, name: 'Трудно вращать, в движении ухудшается управление («отдает» на неровностях), шум/вой при работе' },
      ],
   },
   {
      id: 9,
      name: 'Состояние редукторов мостов',
      part: 'gearboxes',
      type: 'radio',
      fields: [
         { id: 25, name: 'Работает ровно и без шума' },
         { id: 26, name: 'Шум, гул в движении' },
      ],
   },
   {
      id: 10,
      name: 'Состояние раздаточной коробки',
      part: 'case',
      type: 'radio',
      fields: [
         { id: 27, name: 'Работает ровно и без шума' },
         { id: 28, name: 'Шум, повышенная вибрация, гул в движении' },
      ],
   },
]