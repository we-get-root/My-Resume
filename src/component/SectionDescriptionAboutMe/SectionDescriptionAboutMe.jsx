import React from 'react';
import './style.scss';

function SectionDescriptionAboutMe({ ...props }) {
  return (
    <section className="wrapper-for-about-me">
      <h3>Обо мне</h3>
      <div className="description-about-me">
        <div>
          <p>Вкратце о себе: начинал самостоятельное изучения веб-разработки 5 лет назад в ВУЗе. До этого момента это было больше как хобби, которым я занимался в свободно время от основной работы. Разрабатывал небольшие сайты для знакомых, иногда брал заказы на фриланс биржах. Сейчас я понимаю, что в моих знаниях есть пробелы, которые тяжело восполнить на домашних проектах. Хочу разрабатывать приложения в команде, развиваться и расти профессионально. Увлекался программирование еще в школе, создавал моды для различных игр, типа STALKER, СS, Generals и т.д. У вас наверное возникает вопрос, почему я не работал профильно?  И это справедливо. На тот момент так сложились обстоятельства, и я в них не был хозяином. Далее на странице вы можете ознакомится со всем подробнее. Спасибо за внимание, жду откликов)</p>
        </div>
        <div>
          <h6>Личные качества</h6>
          <p>Коммуникабелен. Стрессоустойчив. Общителен. Быстро разбираюсь в чем то новом, и главное этого не боюсь, наоборот вижу в этом личную выгоду. Не люблю стоять на месте, хочу знать все обо всем, и плевать что жизни не хватит) Об этом говорит моя жизненная позиция «Расширения границ». Умею слушать и прислушиваться. Проныра перфекционист во всем, люблю когда и внутри и снаружи все хорошо. Для меня нет слова “Не получается”, есть понимание что я просто этого не знаю, значит нужно узнать. Очень спокоен. Технический склад ума. Умею мыслить масштабно, и большие задачи разделать на много маленьких. Самоорганизован. Не говорю, а делаю, но если нужно могу и поговорить. Позитивен, и люблю печеньки!</p>
        </div>
        <div>
          <h6>Что это за страница?</h6>
          <p>Эта страница моего резюме, где есть все что бы показать и описать свои навыки. Сама реализация не самая лучшая, поскольку была сделана за несколько дней. Сделано все на React, с целью добавить немного интерактивности. Ну и конечно для своего удобства, поскольку эта страница изнутри использует удобный API, которые в дальнейшем позволит быстро подправить данные и держать информацию актуальной.</p>
        </div>

      </div>

    </section>
  )
}

export default SectionDescriptionAboutMe;