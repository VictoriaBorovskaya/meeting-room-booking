<h1>Бронирование переговорной</h1>
<p>Форма для бронирования свободной переговорной.</p>

<a href="https://victoriaborovskaya.github.io/meeting-room-booking/" target="_blank">Ссылка на проект на GitHub Pages</a>

<h3>Функциональность</h3>
<p>При бронировании переговорной необходимо указать башню, этаж, номер переговорной, временной интервал. Можно также оставить комментарий к бронированию. 
По умолчанию стоит дата, следующая за текущей, но ее можно изменить другую. TimePicker ограничен по времени (с 09:00 до 18:00), а datePicker интервалом в 40 дней начиная с дефолтной даты. 
Если время указано некорректно, то при попытке отправки формы появится соответствующее уведовление.

Если выбранная переговорная свободна, то открывается модальное окно с подтверждением бронирования, иначе появится уведомление о том, что переговорная уже забронирована.
Забронированные переговорные сохраняются в Local Storage для последующей фильтрации при новом бронировании.

Реализована валидация формы, поэтому отправить данные без заполнения обязательных полей невозможно.

</p>

<h2>Используемые технологии</h2>
<ul>
  <li>JavaScript</li>
  <li>HTML, CSS</li>
  <li>React</li>
  <li>Material UI</li>
  <li>Styled components</li>
  <li>Flexbox</li>
</ul>

<h2>Инструкция по развертыванию проекта</h2>
<ol>
  <li>git clone https://github.com/VictoriaBorovskaya/meeting-room-booking.git</li>
  <li>cd meeting-room-booking</li>
  <li>yarn install</li>
  <li>yarn start</li>
</ol>
