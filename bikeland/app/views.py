from django.shortcuts import render


def home(request):
    data = {
        'nav': [
            {'title': 'МОТОЦИКЛЫ', 'link': '#'},
            {'title': 'СКУТЕРЫ', 'link': '#'},
            {'title': 'МОПЕДЫ', 'link': '#'},
            {'title': 'ЭЛЕКТРОСКУТЕРЫ', 'link': '#'},
            {'title': 'ТРИЦИКЛЫ', 'link': '#'},
            {'title': 'МИНИ БАЙКИ', 'link': '#'},
            {'title': 'КВАДРОЦИКЛЫ', 'link': '#'},
            {'title': 'ДВИГАТЕЛИ', 'link': '#'},
            {'title': 'ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ', 'link': '#'},
            {'title': 'ДИЛЕРЫ', 'link': '#'},
            {'title': 'ДОСТАВКА', 'link': '#'},
        ],
        'mainConfidence': [
            {
                'img': '../static/images/mainConfidence/handshake.svg',
                'title': 'Опыт',
                'mainSubtitle':'10',
                'subtitle': 'лет На рынке Узбекистана'
            },
            {
                'img': '../static/images/mainConfidence/bike.svg',
                'title': 'Профессионализм',
                'mainSubtitle':'40+',
                'subtitle': 'Моделей Мото-техники в наличии'
            },
            {
                'img': '../static/images/mainConfidence/shade.svg',
                'title': 'Доверие',
                'mainSubtitle':'3000+',
                'subtitle': 'Счастливых обладателей нашей Мото-техники'
            },

        ]
    }
    return render(request, "home.html", data)
