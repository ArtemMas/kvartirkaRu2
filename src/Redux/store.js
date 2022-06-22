let state = {
    flats: {
        longTerm: [
            { nameOfAd: 'Студия, 30м^2',
                price: '21 000 ₽/мес'},
            { nameOfAd: 'Однокомнатная квартира, 36м^2',
                price: '27 000 ₽/мес'},
            { nameOfAd: 'Двухкомнатная квартира, 59м^2',
                price: '35 000 ₽/мес'},
            { nameOfAd: 'Двухкомнатная квартира, 78м^2',
                price: '44 000 ₽/мес'}
        ],
        daily: [
            { nameOfAd: 'Студия, 28м^2',
                price: '1 900 ₽/сут'},
            { nameOfAd: 'Студия, 32м^2',
                price: '2 000 ₽/сут'},
            { nameOfAd: 'Однокомнатная квартира, 40м^2',
                price: '2 500 ₽/сут'},
            { nameOfAd: 'Двухкомнатная квартира, 67м^2',
                price: '3 000 ₽/сут'}
        ],
        newFlatName: ''
    },
    houses: {
        longTerm: [
            { nameOfAd: 'Дом, 90м^2',
                price: '45 000 ₽/мес'},
            { nameOfAd: 'Дом, 105м^2',
                price: '240 000 ₽/мес'},
            { nameOfAd: 'Коттедж, 178м^2',
                price: '75 000 ₽/мес'},
            { nameOfAd: 'Коттедж, 209м^2',
                price: '150 000 ₽/мес'}
        ],
        daily: [
            { nameOfAd: 'Дом, 63м^2',
                price: '5 000 ₽/сут'},
            { nameOfAd: 'Дом, 150м^2',
                price: '6 000 ₽/сут'},
            { nameOfAd: 'Дом, 120м^2',
                price: '8 000 ₽/сут'},
            { nameOfAd: 'Коттедж, 300м^2',
                price: '18 000 ₽/сут'}
        ],
        newHouseName: '',
        newHousePrice: '',
    },
    best: {
        longTerm: [
            { nameOfAd: 'Дом, 90м^2',
                price: '45 000 ₽/мес'},
            { nameOfAd: 'Однокомнатная квартира, 36м^2',
                price: '27 000 ₽/мес'},
            { nameOfAd: 'Двухкомнатная квартира, 78м^2',
                price: '44 000 ₽/мес'},
            { nameOfAd: 'Коттедж, 209м^2',
                price: '150 000 ₽/мес'}
        ],
        daily: [
            { nameOfAd: 'Студия, 32м^2',
                price: '2 000 ₽/сут'},
            { nameOfAd: 'Дом, 150м^2',
                price: '6 000 ₽/сут'},
            { nameOfAd: 'Двухкомнатная квартира, 67м^2',
                price: '3 000 ₽/сут'},
            { nameOfAd: 'Коттедж, 300м^2',
                price: '18 000 ₽/сут'}
        ]
    },
}

export default state