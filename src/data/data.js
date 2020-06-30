import avatar from './photo.jpg';
import creditplusV2 from './subdata/creditplusv2.gif';
import creditplus from './subdata/creditplus.gif';
import spincircle from './subdata/spincircle.gif';
import creativia from './subdata/creativia.gif';
import webmaster from './subdata/webmaster.gif';
import sknebo from './subdata/sknebo.gif';
import gif from './subdata/gif.gif';


const data = {
  hederData: {
    firstName: 'дмитрий',
    lastName: 'третьяков',
    avatar: avatar,
    dataContact: [
      { nameNetwork: 'vk', href: 'https://vk.com/we_get' },
      { nameNetwork: 'github', href: 'https://github.com/we-get-root' },
      { nameNetwork: 'instagram', href: 'https://www.instagram.com/?hl=ru' },
      { nameNetwork: 'google-plus', href: 'https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faboutme.google.com%2Fu%2F0%2F%3Freferer%3Dgplus&followup=https%3A%2F%2Faboutme.google.com%2Fu%2F0%2F%3Freferer%3Dgplus&flowName=GlifWebSignIn&flowEntry=ServiceLogin' },
    ],
    descProp: [
      { subtitle: 'Город', description: 'Москва' },
      { subtitle: 'Год рождения', description: '15.03.1998 (22 года)' },
      { subtitle: 'Опыт работы', description: '5 лет(не профильный)' },
      { subtitle: 'Желаемая должность', description: 'Front-end developer' },
      { subtitle: 'Гражданство', description: 'Украина' },
    ]
  },
  containData: [
    {
      titleSection: 'Образование',
      iconType: 'fa-graduation-cap',
      typeSection: { containerContent: true, containerGallery: false },
      dataProperty: [
        {
          titleRow: 'ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ДУБНЫ',
          descProp: [
            { subtitle: 'Год начала/окончания', description: '2014/2015' },
            { subtitle: 'Факультет', description: 'информатика и вычислительные технологии' },
            { subtitle: 'Статус', description: 'отчислен' },
            { subtitle: 'Причина', description: 'пришлось идти работать, упала успеваемость' },
          ],
        }
      ]
    },
    {
      titleSection: 'Опыт работы',
      iconType: 'fa-briefcase',
      typeSection: { containerContent: true, containerGallery: false },
      dataProperty: [
        {
          titleRow: 'OOO HELPYOUMOSKOW',
          descProp: [
            { subtitle: 'Дата', description: '2015/2018' },
            { subtitle: 'О компании', description: 'Компания представляет услуги в сфере отделки и строительства. (квартиры, дома, кафе, рестораны и т.д) Услуги, предоставляемые по методику all inclusive, клиент дал ключи, клиент забрал ключи от готовой квартиры. На момент 2018 / 2019 находилась а рейтинге лучших компаний данной отрасли.' },
            { subtitle: 'Должность', description: 'ответственный по части организации работы на объектах компании.' },
            {
              subtitle: 'Обязанности', description: [
                'Обязанности Работы с ТЗ инженеркой и дизайн  проектом',
                'Корректировка ТЗ проходила только через меня',
                'Контроль качества выполненных работ',
              ]
            },
            { subtitle: 'Опыт', description: 'в данной компании я получил опыт по организации работы с командой, опыт профессионального общений с деловыми людьми. Опыт и понимание ответственности, когда вся логистика зависит от тебя.' },
            { subtitle: 'Причина увольнения', description: 'компания закрылась' },
          ]
        },
        {
          titleRow: 'СЦ ДОКТОР SMART тц ЯНТАРНЫЙ',
          descProp: [
            { subtitle: 'Дата', description: '2018/2019' },
            { subtitle: 'О компании', description: ' обслуживание, диагностика, ремонт ПК, ноутбуков и смартфонов. Переустановка софта и всякая мелкая работа, типа чистки и замены термо-пасты. А так же сборка компьютеров под заказ.' },
            { subtitle: 'Должность', description: 'мастер' },
            {
              subtitle: 'Обязанности', description: [
                'Диагностика и выявление причины поломки',
                'Настройка и установка ПО',
                'Перепрошивка смартфонов',
                'Консультирование клиентов, и сборка СБ под их требования'
              ]
            },
            { subtitle: 'Опыт', description: 'понимание что вообще такое компьютер и как он работает изнутри более тонко.' },
            { subtitle: 'Причина увольнения', description: 'несвоевременная выплата зарплаты и необоснованные штрафы' },
          ],
        },
      ]
    },
    {
      titleSection: 'Навыки',
      iconType: 'fa-cogs',
      typeSection: { containerContent: true, containerGallery: false },
      dataProperty: [
        {
          titleRow: 'Основные навыки',
          descProp: [
            { subtitle: 'HTML', description: 'современные стандарты HTML5. Построение валидного HTML каркаса. Работа с таблицами, списками, формами.' },
            { subtitle: 'CSS', description: 'современные стандарты CSS3. Позиционирование. Построение адаптивных Grid и Subgrid сеток. Пропись вендорных свойств. Комбинация селекторов. Обращение к псевдоклассам и псевдоэлементам. Функции attr and calc. Создание классов по BEM-методологии. CSS анимация @keyframe, transform, transition, cubic-bezier. Обработка медиа запросов с правилом @media.' },
            { subtitle: 'JavaScript (JS)', description: 'современные стандарты ES6. Модульность кода, динамические импорты. Работа с асинхронным кодом через async/await. Использование Promise (обожаю промисы!!), построение цепочки промисов. Понимания принципов, замыкания, рекурсия, делегирование вызова, callback. Обработка ошибок. Понимание прототипного наследование, использование современных свойств прототипа геттеров/сеттеров get/setPropertyOf. Понимание контекста this и привязка через call/apply. Работа с сетевыми запросами Fetch API.' },
            { subtitle: 'Нативная работа с DOM', description: 'Обработка встроенных браузерных событий мыши, клавиатуры, клики и т.д. Планирование задач. Делегирование событий. Робота с формами submit.' },
            { subtitle: 'Система контроля версии GIT', description: 'Работа через консолью. Знание основных методов. Ветвление проекта. Откат версии.' },
            {
              subtitle: 'Библиотеки и фрейворки', description: [
                'React JS',
                'Redux JS',
                'Redux Thunk',
                'antDesign',
                'Material UI',
                'React Router DOM',
                'Formik for validation and submit forms',
              ]
            },
            { subtitle: 'ReactJS', description: 'Уверенная работа с этой библиотекой. Создание, переиспользование компонент. Работа с локальным состоянием компоненты из функций и классов. Методы жизненного цикла. Передача контекста. Оптимизация компонент. Создание управляемых компонент. Динамические импорты и ленивая загрузка компонент.'  },
            { subtitle: 'Препроцессор SASS', description: 'Создание миксинов. Использование возможностей SCSS таких как циклы и условия. Создание переменных. Привязка контекста &.' },
            { subtitle: 'Система управления контентом', description: 'React admin. Построение гибкого и удобного интерфейса. Привязка к API.' },
            { subtitle: 'Разработка', description: 'Адаптивная кросбраузерная (использование BABEL для компиляция JS в ES5) разработка. Использование mathMedia для обработки медиа запросов.' },
            { subtitle: 'CSS Align', description: 'CSS-Grid, Flex-box' },
            { subtitle: 'English', description: 'Elementary' },
            {
              subtitle: 'Программы', description: [
                'AdobePhotoshop 2019',
                'Figma',
                'Avacode',
                'Postman',
              ]
            },
            { subtitle: 'Дополнительные умения', description: 'Умею пользоваться гуглом, и строить грамотные вопросы для поиска решения. Понимание принципов создания масштабируемых приложение. Умение пользоваться документацией (я считаю одно из важных качеств любого разработчика)' },
          ]
        },
        {
          titleRow: 'Дополнительно',
          descProp: [
            { subtitle: 'Back-end', description: 'Есть не большой опыт работы с Back-end частью. Работал с Node js, Express, MongoDB, Mongoose. CORS CRUD маршрутизация. Работа с токенами авторизации. Я не скажу что я Back-end разработчик, просто разбирался как это работает для понимание и расширения кругозора' },
            { subtitle: 'Front-end', description: 'Есть не большой опыт работы с Vue и Angular' }
          ]
        },
      ]
    },
    {
      titleSection: 'Портфолио',
      iconType: 'fa-picture-o',
      typeSection: { containerContent: false, containerGallery: true },
      dataProperty: [
        { subtitle: 'Creativia', description: 'Сайт Creativia для команды верстальщиков.', backCard: creativia },
        { subtitle: 'CreditPlus', description: 'Первая версия сайта банка', backCard: creditplus },
        { subtitle: 'SpinCircle', description: 'Бесполезная штука но прикольная)', backCard: spincircle },
        { subtitle: 'WebMaster', description: 'Просто сайт, верстал по чужому макуту, от безделия', backCard: webmaster },
        { subtitle: 'CreditPlus', description: 'Вторая версия сайта, уже с редизайном', backCard: creditplusV2 },
        { subtitle: 'СК Небо', description: 'Сайт строительной компании НЕБО', backCard: sknebo },
        { subtitle: 'Project7', description: 'Project', backCard: gif },
        { subtitle: 'Project8', description: 'Project', backCard: gif },
        { subtitle: 'Project9', description: 'Project', backCard: gif },
      ],
    },
  ]
}


export default data;




