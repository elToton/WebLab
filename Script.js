
(function () {
    window.startTime = (new Date).getTime();
    console.log((new Date).getTime() - window.startTime);
})();

var Songs = new Map();
var Comments = new Array();
var CommentNumber = 0;
var iLocal = 0;
var iSession = 0;

window.onload = function() {
    document.querySelector('.preloader-1').classList.add("preloader-1-remove");
};

window.addEventListener('load',function () {



    let timer = ((new Date).getTime() - window.startTime)/1000
    console.log(timer)
    document.getElementById("timer").innerHTML= "Load time: "+timer+"c";




    SongsSet()

    let seed = Math.floor(Math.random() * 10);

    let Photos = getPhoto(seed)
    console.log(Photos)
    Photos.then((Photos) =>{
        let url = Photos
        let a = document.getElementById('logo')
            a.src = url;

    } )


    if (document.location.href === 'http://localhost:63342/Letov/untitled9/Actor.html')
    {
        document.getElementById("ActorBase").style.background = 'red';
    }
    if (document.location.href === 'http://localhost:63342/Letov/untitled9/Song.html')
    {
        document.getElementById("SongBase").style.background = 'red';
    }
    if (document.location.href === 'http://localhost:63342/Letov/untitled9/NEWplayer.html')
    {
        document.getElementById("SongBase").style.background = 'red';
    }

    let songN = localStorage.getItem('SS');
    if (songN != null) {
        let url = Songs.get(songN)[0]

            Amplitude.init({
                "bindings": {
                    37: 'prev',
                    39: 'next',
                    32: 'play_pause'
                },
                "songs": [
                    {
                        "name": songN,
                        "artist": "Letov",
                        "url": url,
                    },

                ]
            });

    }
    window.onkeydown = function(e) {
        return !(e.keyCode === 32);
    };

    document.getElementById('song-played-progress').addEventListener('click', function( e ){
        var offset = this.getBoundingClientRect();
        var x = e.pageX - offset.left;

        Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
    });


},false)

    (function () {

        document.getElementById('ComInput').addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {
                    Com();
            }
        });

    })();

function ClearSearch()
{
    localStorage.clear();
    sessionStorage.clear();
    document.getElementById('localResults').innerHTML = null;
    document.getElementById('sessionResults').innerHTML = null;
}

function SongSearch()
{
    let input = document.getElementById('SongInput').value;
    let local;
    let session;
    if (Songs.get(input) != null)
    {
        choose_song(input);
        input = "<p>" + input + "</p> ";
        if (localStorage.length === 1) local = input;
        else local = localStorage.getItem('LastSearch') + input;

        if (sessionStorage.length === 0) session = input;
        else session = sessionStorage.getItem('LastSearch') + input;

        localStorage.setItem('LastSearch', local);
        document.getElementById('localResults').innerHTML = localStorage.getItem('LastSearch');

        sessionStorage.setItem('LastSearch', session);
        document.getElementById('sessionResults').innerHTML = sessionStorage.getItem('LastSearch');
    }
    else
    {
        alert('Такой песни мы не знаем');
        input = "<p>" + input + "</p> ";

        if (sessionStorage.length === 0) session = input;
        else session = sessionStorage.getItem('LastSearch') + input;

        sessionStorage.setItem('LastSearch', session);
        document.getElementById('sessionResults').innerHTML = sessionStorage.getItem('LastSearch');
    }
}
function Com()
{
    let c = document.getElementById('ComInput').value;
    console.log("1BBB " + c);
    c = "<p>" +(CommentNumber + 1) + "." + c + "</p> ";
    console.log("2BBB " + c);
    c = document.getElementById('comments').innerHTML + c;
    console.log("3BBB " + c);

    CommentNumber = CommentNumber + 1;

    console.log("BBB " + c);

    console.log(CommentNumber);
    console.log(Comments);

    console.log("AAA " + c);

    document.getElementById('comments').innerHTML = c;
}

function choose_song(song_name)
{
    SongsSet()
    localStorage.setItem('SS', song_name)
    if (Songs.get(song_name) != null)
    {
        document.getElementById('SongName').innerHTML = song_name
        document.getElementById('SongAudio').src = Songs.get(song_name)[0]
        document.getElementById('SongText').innerHTML = Songs.get(song_name)[1]

    }
    else
    {
        alert('Такой песни мы не знаем')
    }

}


function SongsSet()
{
    Songs.set("Всё идёт по плану", [
        'https://docs.google.com/uc?id=1MJz3Nf0zhecDOR03UWgN3ppnRw6OgdIH',

        "<p>Границы ключ переломлен пополам,\n" +
        "А наш батюшка Ленин совсем усоп,\n" +
        "Он разложился на плесень и на липовый мёд,\n" +
        "А перестройка все идёт и идёт по плану,\n" +
        "А вся грязь превратилась в голый лёд.\n" +
        "И всё идёт по плану.\n</p>" +
        "\n" +
        "<p>А моя душа захотела на покой,\n" +
        "Я обещал ей не участвовать в военной игре,\n" +
        "Но на фуражке на моей серп и молот и звезда,\n" +
        "Как это трогательно серп и молот и звезда,\n" +
        "Лихой фонарь ожидания мотается,\n</p>" +
        "\n" +
        "<p>И всё идёт по плану...\n" +
        "Всё идёт по плану...\n</p>" +
        "\n" +
        "<p>А моей женой накормили толпу,\n" +
        "Мировым кулаком растоптали ей грудь,\n" +
        "Всенародной свободой растерзали ей плоть,\n" +
        "Так закопайте ж её во Христе! Ведь\n</p>" +
        "\n" +
        "<p>Всё идёт по плану...\n" +
        "Всё идёт по плану...\n</p>" +
        "\n" +
        "<p>Один лишь дедушка Ленин хороший был вождь,\n" +
        "А все другие остальные такое дерьмо,\n" +
        "А все другие враги такие дураки,\n" +
        "Над родною над отчизной бесноватый снег шёл,\n" +
        "Я купил журнал Корея там тоже хорошо,\n" +
        "Там товарищ Ким Эр Сен, там тоже что у нас,\n" +
        "Я уверен что у них тоже самое\n</p>" +
        "\n" +
        "<p>И всё идёт по плану...\n" +
        "Всё идёт по плану...\n</p>" +
        "\n" +
        "<p>А при коммунизме все будет заебись,\n" +
        "Он наступит скоро, надо только подождать,\n" +
        "Там все будет бесплатно, там всё будет в кайф,\n" +
        "Там наверное вообще не надо будет умирать,\n" +
        "Я проснулся среди ночи и понял, что\n</p>" +
        "\n" +
        "<p>Всё идет по плану ...\n" +
        "Всё идет по плану ...</p>"])

    Songs.set("Всё как у людей", [
        'https://docs.google.com/uc?id=1iN9KJ1zu1cyqC9vfOdClHGgyxudKhjG-',
        "<p>Вот и всё что было-\n" +
        "Не было и нету.\n" +
        "Все слои размокли.  \n" +
        "Все слова истлели.\n</p>" +
        "      \n" +
        "           <p>Всё как у людей.\n</p>" +
        "\n" +
        "<p>В стоптанных ботинках\n" +
        "Годы и окурки\n" +
        "В стираных карманах \n" +
        "Паспорта и пальцы\n</p>" +
        "\n" +
        "           <p>Всё как у людей.\n</p>" +
        "\n" +
        "<p>Резвые колеса\n" +
        "Прочные постройки\n" +
        "Новые декреты \n" +
        "Братские могилы\n</p>" +
        "   \n" +
        "           <p>Всё как у людей.\n</p>" +
        "  \n" +
        "<p>Вот и всё что было-\n" +
        "Не было и нету.\n" +
        "Правильно и ясно. \n" +
        "Здорово и вечно.\n</p>" +
        "   \n" +
        "           Всё как у людей."])
    Songs.set("Долгая счастливая жизнь", [
        'https://docs.google.com/uc?id=1D0xg0NU8_bVxzSs-Z0lPYD4rjMOLHcUT',
        "<p>Потрясениям и праздникам-нет \n" +
        "Горизонтам и праздникам-нет\n" +
        "Вдохновениям и праздникам-нет,нет,нет,нет\n" +
        "         Безрыбье в золотой полынье\n" +
        "         Вездесущность мышиной возни\n" +
        "         Злые сумерки бессмертного дня\n</p>" +
        "\n" +
        "                          <p>ДОЛГАЯ СЧАСТЛИВАЯ ЖИЗНЬ\n" +
        "                          ТАКАЯ ДОЛГАЯ СЧАСТЛИВАЯ ЖИЗНЬ\n" +
        "                           ОТНЫНЕ ДОЛГАЯ СЧАСТЛИВАЯ ЖИЗНЬ\n" +
        "                                       КАЖДОМУ ИЗ НАС\n" +
        "                                       КАЖДОМУ ИЗ НАС\n</p>" +
        "\n" +
        "<p>Беспощадные глубины морщин\n" +
        "Марианские впадины глаз\n" +
        "Марсианские хроники нас,нас,нас\n" +
        "         Посреди одинаковых стен\n" +
        "         В гробовых отдалённых домах\n" +
        "         В непроглядной ледяной тишине \n</p>" +
        "\n" +
        "-*-*-*-*-*-*-*-*\n" +
        "\n" +
        "<p>Искушениям и праздникам-нет\n" +
        "Преступлениям и праздникам-нет \n" +
        "Исключениям и праздникам-нет,нет,нет.\n" +
        "         На семи продувных сквозняках\n" +
        "         По болотам,по пустыням,степям\n" +
        "         По сугробам,по грязи,по земле</p>"])
    Songs.set("Зоопарк",[
        'https://docs.google.com/uc?id=1fYHj8zkS6P8e2DkCA2bNfXCfwvWchNri',
        "<p>Hе надо помнить-не надо ждать\n" +
        "Hе надо верить-не надо лгать\n" +
        "Hе надо падать-не надо бить\n" +
        "Hе надо плакать-не надо жить\n</p>" +
        "\n" +
        "       <p>Я ищу таких,как я,\n" +
        "       Сумасшедших и смешных,\n" +
        "         сумасшедших и больных\n" +
        "       А когда я их найду-\n" +
        "       Мы уйдём отсюда прочь,\n" +
        "         мы уйдём отсюда в ночь-\n</p>" +
        "         \n" +
        "           <p>МЫ УЙДЁМ ИЗ ЗООПАРКА!                                  \n</p>" +
        "   \n" +
        "<p>Oh Baby Baby-ты просто мышь\n" +
        "Ты словно точка,когда молчишь\n" +
        "Hо вас так много-в глазах темно\n" +
        "Я так хотел бы разбить окно.\n</p>" +
        "\n" +
        "       <p>Я ищу таких,как я,\n" +
        "       Сумасшедших и смешных,\n" +
        "         сумасшедших и больных\n" +
        "       А когда я их найду-\n" +
        "       Мы уйдём отсюда прочь,\n" +
        "         мы уйдём отсюда в ночь-\n</p>" +
        "         \n" +
        "           <p>МЫ УЙДЁМ ИЗ ЗООПАРКА!         \n</p>" +
        "\n" +
        "<p>Пустые звуки-пустые дни\n" +
        "Вас слишком много-а мы одни\n" +
        "В руках ребёнка сверкает нож\n" +
        "Hо я надеюсь,что это ложь\n</p>" +
        "\n" +
        "       <p>Ведь я ищу таких как я\n" +
        "       Сумасшедших и смешных,\n" +
        "         сумасшедших и больных\n" +
        "       А когда я их найду-\n" +
        "       Мы уйдём отсюда прочь,\n" +
        "         мы уйдём отсюда в ночь-\n</p>" +
        "         \n" +
        "           <p>МЫ УЙДЁМ ИЗ ЗООПАРКА!</p>"])
    Songs.set("Моя оборона", [
        'https://docs.google.com/uc?id=11pmh576xQe_QtuU36xqB7QXD4wtaSBJJ',
        "<p>Пластмассовый мир победил\n" +
        "Макет оказался сильней\n" +
        "Последний кораблик остыл\n" +
        "Последний фонарик устал,\n" +
        "         а в горле сопят комья воспоминаний\n</p>" +
        "\n" +
        "         <p>Оо- моя оборона\n" +
        "         Солнечный зайчик стеклянного глаза\n" +
        "         Оо- моя оборона\n" +
        "         Траурный мячик нелепого мира\n" +
        "         Траурный мячик дешёвого мира\n</p>" +
        "\n" +
        "<p>Пластмассовый мир победил.\n" +
        "Ликует картонный набат-\n" +
        "          кому нужен ломтик июльского неба?\n</p>" +
        "\n" +
        "          <p>Оо- моя оборона\n" +
        "          Солнечный зайчик незрячего мира\n" +
        "          Оо- моя оборона\n" +
        "          Траурный мячик стеклянного глаза\n" +
        "          Траурный зайчик нелепого мира...\n</p>" +
        "\n" +
        "<p>Пластмассовый мир победил\n" +
        "Макет оказался сильней\n" +
        "Последний кораблик остыл\n" +
        "Последний фонарик устал,\n" +
        "          а в горле сопят комья воспоминаний.\n</p>" +
        "\n" +
        "          <p>Оо- моя оборона\n" +
        "          Траурный мячик незрячего мира\n" +
        "          Оо- моя оборона\n" +
        "          Солнечный зайчик стеклянного глаза.\n</p>" +
        "\n" +
        "          Оо- моя оборона!"])
    Songs.set("Пой, революция!",[
        'https://docs.google.com/uc?id=149flkl1YvfgOSLjWP0T7LZs5tKRRZFp-',
        "<p>В поле дождик бродил живой\n" +
        "Ковылял по щекам ледяным\n" +
        "Поднимал в последний неравный бой\n" +
        "Тех,кто погиб молодым.\n" +
        "Вырывал из несбыточных снов\n" +
        "Вырывал из некошенных трав\n" +
        "Поднимал горемычных своих сынов\n" +
        "Весел,печален и прав.\n</p>" +
        "\n" +
        "                  <p>Ветер зовёт\n" +
        "                  Пуля манит\n" +
        "                  Небо поёт \n" +
        "                  В небе пылает песня\n" +
        "                  Пой,революция!\n</p>" +
        "\n" +
        "<p>Дождик по миру брёл живой\n" +
        "За собой вёл свои войска\n" +
        "Вёл сквозь годы,снега и зной\n" +
        "Верил — победа близка.\n" +
        "Горизонты теснились в груди \n" +
        "Утопали в кровавых слезах\n" +
        "И сияли звёзды в земной грязи \n" +
        "И пьянила полынь в небесах.\n</p>" +
        "\n" +
        "                  <p>Ветер зовёт\n" +
        "                  Пуля манит\n" +
        "                  Небо поёт \n" +
        "                  В небе пылает песня\n" +
        "                  Пой,революция!</p>"])
    Songs.set("Про дурачка",[
        'https://docs.google.com/uc?id=1VJCKkRvjhVP9y6TGUbDuRvhkbanHEYRL',
        "<p>Ходит дурачок по лесу\n" +
        "Ищет дурачок глупее себя\n</p>" +
        "\n" +
        "<p>Идёт Смерть по улице,несёт блины на блюдце\n" +
        "Кому вынется — тому сбудется\n" +
        "Тронет за плечо,поцелует горячо\n" +
        "Полетят копейки из-за пазухи долой\n</p>" +
        "\n" +
        "                      <p>Ходит дурачок по лесу\n" +
        "                      Ищет дурачок глупее себя\n</p>" +
        "\n" +
        "<p>Зубчатые колёса завертелись в башке\n" +
        "В промокшей башке под бронебойным дождём\n" +
        "Закипела ртуть,замахнулся кулак -\n" +
        "Да только если крест на грудь,то на \n</p>" +
        "                                          <p>последний глаз — пятак\n</p>" +
        "\n" +
        "                      <p>Ходит дурачок по лесу\n" +
        "                      Ищет дурачок глупее себя\n</p>" +
        "\n" +
        "<p>Моя мёртвая мамка вчера ко мне пришла\n" +
        "Всё грозила кулаком,называла дураком\n" +
        "Предрассветный комар опустился в мой пожар\n" +
        "Захлебнулся кровью из моего виска\</p>" +
        "\n" +
        "                       <p>Ходит дурачок по миру\n" +
        "                       Ищет дурачок глупее себя\n</p>" +
        "\n" +
        "<p>А сегодня я воздушных шариков купил\n" +
        "Полечу на них над расчудесной страной\n" +
        "Буду пух глотать,буду в землю нырять\n" +
        "И на все вопросы отвечать: «ВСЕГДА ЖИВОЙ!»\n</p>" +
        "\n" +
        "                        <p>Ходит дурачок по небу\n" +
        "                        Ищет дурачок глупее себя\n</p>" +
        "\n" +
        "<p>Светило солнышко и ночью и днём\n" +
        "Не бывает атеистов в окопах под огнём\n" +
        "Добежит слепой,победит ничтожный\n" +
        "Такое вам и не снилось\n</p>" +
        "\n" +
        "                         <p>Ходит дурачок по лесу\n" +
        "                         Ищет дурачок глупее себя\n</p>" +
        "\n" +
        "<p>Ходит дурачок по лесу\n" +
        "Ищет дурачок глупее себя</p>"])

    Songs.set("Самоотвод",[
        'https://docs.google.com/uc?id=1A3cUvwJpVBJ9_LHhbXrTTQGGdjDe7PPX',
        "<p>Маяковский видел сон\n" +
        "В смутном поле зреет рис\n" +
        "В хищной чаще зреет зверь\n" +
        "Тише едешь — ярче спишь\n</p>" +
        "\n" +
        "     <p>Под нейтральным небом\n" +
        "     Под нейтральным знаком \n</p>" +
        "\n" +
        "         <p>Самоотвод\n</p>" +
        "\n" +
        "<p>Маяковский видел сон\n" +
        "Шаг за шагом — наутёк\n" +
        "Кто разбудит на заре\n" +
        "Кто поймает — кто поймёт\n</p>" +
        "\n" +
        "     <p>Под нейтральным снегом\n" +
        "     Под нейтральным страхом \n</p>" +
        "\n" +
        "         <p>Самоотвод\n</p>" +
        "\n" +
        "<p>Маяковский жал курок\n" +
        "Жёг окурок,лил струю\n" +
        "Покатилось колесо \n" +
        "Вот и собран урожай\n</p>" +
        "\n" +
        "     <p>Под нейтральным небом\n" +
        "     Под нейтральным флагом \n</p>" +
        "\n" +
        "         Самоотвод"])
    Songs.set("Свобода",[
        'https://docs.google.com/uc?id=1A4P8TEVHIA6Ab3-pZkS6m8EOSFRCAg9m',
        "<p>Как платил Незнайка за свои вопросы\n" +
        "Что скрывал последний злой патрон\n" +
        "И чему посмеивался Санька Матросов\n" +
        "Перед тем как Шишел-Мышел — пёрнул — вышел вон?\n</p>" +
        "\n" +
        "<p>Как бежал за солнышком слепой Ивашка\n" +
        "Как садился ангел на плечо\n" +
        "Как рвалась и плавилась последняя рубашка\n" +
        "Как и что обрёл — обнял летящий Башлачёв?\n</p>" +
        "\n" +
        "<p>Партизан спалил в пизду родную хату\n" +
        "Завязался в узел ремешок\n" +
        "Эх,распирает изнутри весёлую гранату!..\n" +
        "Так чем всегда кончается вот такой стишок?\n</p>" +
        "\n" +
        "<p>-Это знает моя Свобода\n" +
        "-Это знает моя Свобода\n" +
        "-Это знает моё Поражение\n" +
        "-Это знает моё Торжество!</p>"])
    Songs.set("Сияние",[
        'https://docs.google.com/uc?id=1-mzIUTNH-zpBoEsJ4XvB-ylgi1AFDkdK',
        "<p>Спят леса и селения\n" +
        "Небеса и сомнения\n</p>" +
        "        \n" +
        "      <p>Но сиянье обрушится вниз\n" +
        "      Станет твоей судьбой\n</p>" +
        "\n" +
        "<p>Спят планеты и яблоки\n" +
        "Спят тревоги и радуги\n</p>" +
        "\n" +
        "      <p>Но сиянье обрушится вниз\n" +
        "      Станет твоей душой\n</p>" +
        "\n" +
        "<p>Спят зверьки и растения\n" +
        "Небеса и сомнения\n</p>" +
        "\n" +
        "     <p>Но сиянье обрушится вниз\n" +
        "     Станет твоей землёй\n" +
        "     Но сиянье обрушится вниз\n" +
        "     Станет самим тобой.</p>"])

}

async function getPhoto(num) {

    const url = "https://jsonplaceholder.typicode.com/photos/"+num;

    try {
        const response = await fetch(url);
        let data = await response.json()
        console.log(data.url)

        return data.url;
    } catch (error) {
        alert('Ошибка при получении фото');
    }
}
async function getComment(num) {

    const url = "https://jsonplaceholder.typicode.com/comments?id=1";

    try {
        const response = await fetch(url);
        let data =  await response.json();
        console.log(data[0].body);

        return data[0].body;
    } catch (error) {
        alert('Ошибка при получении коммента');
    }
}
