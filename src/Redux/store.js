const FLATS = 'FLATS'
const ROOMS = 'ROOMS'
const SITE = 'SITE'
const BED_PLACE = 'BED-PLACE'
const HOUSES = 'HOUSES'
const SEARCH_PATH = 'SEARCH-PATH'

let store = {
    _state: {
        flats: {
            longTerm: [
                { id: 1, nameOfAd: 'Студия, 30м^2',
                    price: '21 000 ₽/мес', amountOfRooms: 'Студия'},
                { id: 2, nameOfAd: 'Однокомнатная квартира, 36м^2',
                    price: '27 000 ₽/мес', amountOfRooms: '1'},
                { id: 3, nameOfAd: 'Двухкомнатная квартира, 59м^2',
                    price: '35 000 ₽/мес', amountOfRooms: '2'},
                { id: 4, nameOfAd: 'Двухкомнатная квартира, 78м^2',
                    price: '44 000 ₽/мес', amountOfRooms: '2'},
                { id: 1, nameOfAd: 'Студия, 30м^2',
                    price: '21 000 ₽/мес', amountOfRooms: 'Студия'},
                { id: 2, nameOfAd: 'Однокомнатная квартира, 36м^2',
                    price: '27 000 ₽/мес', amountOfRooms: '1'},
                { id: 3, nameOfAd: 'Двухкомнатная квартира, 59м^2',
                    price: '35 000 ₽/мес', amountOfRooms: '2'},
                { id: 4, nameOfAd: 'Двухкомнатная квартира, 78м^2',
                    price: '44 000 ₽/мес', amountOfRooms: '2'},
            ],
            daily: [
                { id: 1, nameOfAd: 'Студия, 28м^2',
                    price: '1 900 ₽/сут', amountOfRooms: 'Студия'},
                { id: 2, nameOfAd: 'Студия, 32м^2',
                    price: '2 000 ₽/сут', amountOfRooms: 'Студия'},
                { id: 3, nameOfAd: 'Однокомнатная квартира, 40м^2',
                    price: '2 500 ₽/сут', amountOfRooms: '1'},
                { id: 4, nameOfAd: 'Двухкомнатная квартира, 67м^2',
                    price: '3 000 ₽/сут', amountOfRooms: '2'},
                { id: 1, nameOfAd: 'Студия, 28м^2',
                    price: '1 900 ₽/сут', amountOfRooms: 'Студия'},
                { id: 2, nameOfAd: 'Студия, 32м^2',
                    price: '2 000 ₽/сут', amountOfRooms: 'Студия'},
                { id: 3, nameOfAd: 'Однокомнатная квартира, 40м^2',
                    price: '2 500 ₽/сут', amountOfRooms: '1'},
                { id: 4, nameOfAd: 'Двухкомнатная квартира, 67м^2',
                    price: '3 000 ₽/сут', amountOfRooms: '2'},
            ],
            buy: [
                { id: 1, nameOfAd: 'Студия, 32,3м^2',
                    price: '5 100 000 ₽', amountOfRooms: 'Студия'},
                { id: 2, nameOfAd: 'Студия, 21,2м^2',
                    price: '3 150 000 ₽', amountOfRooms: 'Студия'},
                { id: 3, nameOfAd: 'Однокомнатная квартира, 44,5м^2',
                    price: '7 700 000 ₽', amountOfRooms: 'Студия'},
                { id: 4, nameOfAd: 'Двухкомнатная квартира, 47м^2',
                    price: '8 200 000 ₽', amountOfRooms: 'Студия'},
                { id: 1, nameOfAd: 'Студия, 32,3м^2',
                    price: '5 100 000 ₽', amountOfRooms: 'Студия'},
                { id: 2, nameOfAd: 'Студия, 21,2м^2',
                    price: '3 150 000 ₽', amountOfRooms: 'Студия'},
                { id: 3, nameOfAd: 'Однокомнатная квартира, 44,5м^2',
                    price: '7 700 000 ₽', amountOfRooms: 'Студия'},
                { id: 4, nameOfAd: 'Двухкомнатная квартира, 47м^2',
                    price: '8 200 000 ₽', amountOfRooms: 'Студия'},
            ],
            newFlatName: '',
            newHousePrice: '',
        },
        houses: {
            longTerm: [
                { id: 1, nameOfAd: 'Дом, 90м^2',
                    price: '45 000 ₽/мес'},
                { id: 2, nameOfAd: 'Дом, 105м^2',
                    price: '240 000 ₽/мес'},
                { id: 3, nameOfAd: 'Коттедж, 178м^2',
                    price: '75 000 ₽/мес'},
                { id: 4, nameOfAd: 'Коттедж, 209м^2',
                    price: '150 000 ₽/мес'},
                { id: 1, nameOfAd: 'Дом, 90м^2',
                    price: '45 000 ₽/мес'},
                { id: 2, nameOfAd: 'Дом, 105м^2',
                    price: '240 000 ₽/мес'},
                { id: 3, nameOfAd: 'Коттедж, 178м^2',
                    price: '75 000 ₽/мес'},
                { id: 4, nameOfAd: 'Коттедж, 209м^2',
                    price: '150 000 ₽/мес'},
            ],
            daily: [
                { id: 1, nameOfAd: 'Дом, 63м^2',
                    price: '5 000 ₽/сут'},
                { id: 2, nameOfAd: 'Дом, 150м^2',
                    price: '6 000 ₽/сут'},
                { id: 3, nameOfAd: 'Дом, 120м^2',
                    price: '8 000 ₽/сут'},
                { id: 4, nameOfAd: 'Коттедж, 300м^2',
                    price: '18 000 ₽/сут'},
                { id: 1, nameOfAd: 'Дом, 63м^2',
                    price: '5 000 ₽/сут'},
                { id: 2, nameOfAd: 'Дом, 150м^2',
                    price: '6 000 ₽/сут'},
                { id: 3, nameOfAd: 'Дом, 120м^2',
                    price: '8 000 ₽/сут'},
                { id: 4, nameOfAd: 'Коттедж, 300м^2',
                    price: '18 000 ₽/сут'},
            ],
            buy: [
                { id: 1, nameOfAd: 'Дом, 190м^2',
                    price: '12 000 000 ₽'},
                { id: 2, nameOfAd: 'Дом, 105м^2',
                    price: '3 900 000 ₽'},
                { id: 3, nameOfAd: 'Коттедж, 200м^2',
                    price: '8 300 000 ₽'},
                { id: 4, nameOfAd: 'Дом, 180м^2',
                    price: '15 750 000 ₽'},
                { id: 1, nameOfAd: 'Дом, 190м^2',
                    price: '12 000 000 ₽'},
                { id: 2, nameOfAd: 'Дом, 105м^2',
                    price: '3 900 000 ₽'},
                { id: 3, nameOfAd: 'Коттедж, 200м^2',
                    price: '8 300 000 ₽'},
                { id: 4, nameOfAd: 'Дом, 180м^2',
                    price: '15 750 000 ₽'},
            ],
            newHouseName: '',
            newHousePrice: '',
        },
        room: {
            longTerm: [
                { id: 1, nameOfAd: 'Комната, 16м^2',
                    price: '17 000 ₽/мес'},
                { id: 2, nameOfAd: 'Комната, 22м^2',
                    price: '13 500 ₽/мес'},
                { id: 3, nameOfAd: 'Комната, 15м^2',
                    price: '16 000 ₽/мес'},
                { id: 4, nameOfAd: 'Комната, 44м^2',
                    price: '60 000 ₽/мес'},
                { id: 1, nameOfAd: 'Комната, 16м^2',
                    price: '17 000 ₽/мес'},
                { id: 2, nameOfAd: 'Комната, 22м^2',
                    price: '13 500 ₽/мес'},
                { id: 3, nameOfAd: 'Комната, 15м^2',
                    price: '16 000 ₽/мес'},
                { id: 4, nameOfAd: 'Комната, 44м^2',
                    price: '60 000 ₽/мес'},
            ],
            daily: [
                { id: 1, nameOfAd: 'Комната, 16м^2',
                    price: '1 350 ₽/сут'},
                { id: 2, nameOfAd: 'Комната, 12м^2',
                    price: '1 590 ₽/сут'},
                { id: 3, nameOfAd: 'Комната, 18м^2',
                    price: '2 000 ₽/сут'},
                { id: 4, nameOfAd: 'Комната, 28м^2',
                    price: '2 300 ₽/сут'},
                { id: 1, nameOfAd: 'Комната, 16м^2',
                    price: '1 350 ₽/сут'},
                { id: 2, nameOfAd: 'Комната, 12м^2',
                    price: '1 590 ₽/сут'},
                { id: 3, nameOfAd: 'Комната, 18м^2',
                    price: '2 000 ₽/сут'},
                { id: 4, nameOfAd: 'Комната, 28м^2',
                    price: '2 300 ₽/сут'},
            ],
            buy: [
                { id: 1, nameOfAd: 'Комната, 12,7м^2',
                    price: '2 700 000 ₽'},
                { id: 2, nameOfAd: 'Комната, 11,6м^2',
                    price: '2 250 000 ₽'},
                { id: 3, nameOfAd: 'Комната, 17,4м^2',
                    price: '3 550 000 ₽'},
                { id: 4, nameOfAd: 'Комната, 16,6м^2',
                    price: '2 190 000 ₽'},
                { id: 1, nameOfAd: 'Комната, 12,7м^2',
                    price: '2 700 000 ₽'},
                { id: 2, nameOfAd: 'Комната, 11,6м^2',
                    price: '2 250 000 ₽'},
                { id: 3, nameOfAd: 'Комната, 17,4м^2',
                    price: '3 550 000 ₽'},
                { id: 4, nameOfAd: 'Комната, 16,6м^2',
                    price: '2 190 000 ₽'},
            ],
        },
        bedPlace: {
            longTerm: [
                { id: 1, nameOfAd: 'Койка-место, 20м^2',
                    price: '8 000 ₽/мес'},
                { id: 2, nameOfAd: 'Койка-место, 15м^2',
                    price: '5 500 ₽/мес'},
                { id: 3, nameOfAd: 'Койка-место, 25м^2',
                    price: '6 000 ₽/мес'},
                { id: 4, nameOfAd: 'Койка-место, 10м^2',
                    price: '10 000 ₽/мес'},
                { id: 1, nameOfAd: 'Койка-место, 20м^2',
                    price: '8 000 ₽/мес'},
                { id: 2, nameOfAd: 'Койка-место, 15м^2',
                    price: '5 500 ₽/мес'},
                { id: 3, nameOfAd: 'Койка-место, 25м^2',
                    price: '6 000 ₽/мес'},
                { id: 4, nameOfAd: 'Койка-место, 10м^2',
                    price: '10 000 ₽/мес'},
            ],
            daily: [
                { id: 1, nameOfAd: 'Койка-место, 24м^2',
                    price: '350 ₽/сут'},
                { id: 2, nameOfAd: 'Койка-место, 25м^2',
                    price: '300 ₽/сут'},
                { id: 3, nameOfAd: 'Койка-место, 18м^2',
                    price: '180 ₽/сут'},
                { id: 4, nameOfAd: 'Койка-место, 18м^2',
                    price: '250 ₽/сут'},
                { id: 1, nameOfAd: 'Койка-место, 24м^2',
                    price: '350 ₽/сут'},
                { id: 2, nameOfAd: 'Койка-место, 25м^2',
                    price: '300 ₽/сут'},
                { id: 3, nameOfAd: 'Койка-место, 18м^2',
                    price: '180 ₽/сут'},
                { id: 4, nameOfAd: 'Койка-место, 18м^2',
                    price: '250 ₽/сут'},
            ],
        },
        site: {
            buy: [
                { id: 1, nameOfAd: 'Участок, 12,98сот.',
                    price: '389 400 ₽'},
                { id: 2, nameOfAd: 'Участок, 11,6сот.',
                    price: '62 250 000 ₽'},
                { id: 3, nameOfAd: 'Участок, 24,4сот.',
                    price: '8 000 000 ₽'},
                { id: 4, nameOfAd: 'Участок, 12сот.',
                    price: '72 000 000 ₽'},
                { id: 1, nameOfAd: 'Участок, 12,58сот.',
                    price: '45 288 000 ₽'},
                { id: 2, nameOfAd: 'Участок, 15,91сот.',
                    price: '1 095 000 ₽'},
                { id: 3, nameOfAd: 'Участок, 15,93сот.',
                    price: '87 615 000 ₽'},
                { id: 4, nameOfAd: 'Участок, 115,84сот.',
                    price: '521 280 000 ₽'},
            ],
        },
        best: {
            ads: [
                { nameOfAd: 'Дом, 90м^2',
                    price: '45 000 ₽/мес', variant: 'longTerm'},
                { nameOfAd: 'Однокомнатная квартира, 36м^2',
                    price: '27 000 ₽/мес', variant: 'longTerm'},
                { nameOfAd: 'Двухкомнатная квартира, 78м^2',
                    price: '44 000 ₽/мес', variant: 'longTerm'},
                { nameOfAd: 'Коттедж, 209м^2',
                    price: '150 000 ₽/мес', variant: 'longTerm'},
                { nameOfAd: 'Студия, 32м^2',
                    price: '2 000 ₽/сут', variant: 'daily'},
                { nameOfAd: 'Дом, 150м^2',
                    price: '6 000 ₽/сут', variant: 'daily'},
                { nameOfAd: 'Двухкомнатная квартира, 67м^2',
                    price: '3 000 ₽/сут', variant: 'daily'},
                { nameOfAd: 'Коттедж, 300м^2',
                    price: '18 000 ₽/сут', variant: 'daily'}
            ],
        },
        flatsCheck: 'false',
        roomsCheck: 'false',
        siteCheck: 'false',
        bedPlaceCheck: 'false',
        housesCheck: 'false',
        truePath: '',
        lastObj: '',
    },
    getState() {
      return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    _callSubscriber(){
        console.log('State changed')
    },

    dispatch (action) {
        debugger
        if (action.type === FLATS) {
            this._state.truePath = ''
            this._state.lastObj = ''
            if (this._state.flatsCheck === 'true') {
                this._state.flatsCheck = 'false'
            } else if (this._state.flatsCheck === 'false'){
                this._state.flatsCheck = 'true'
                this._state.lastObj = 'flats/'
                this._state.truePath = action.pathName
            }
        } else if(action.type === ROOMS) {
            this._state.truePath = ''
            this._state.lastObj = ''
            if (this._state.roomsCheck === 'true') {
                this._state.roomsCheck = 'false'
            } else if (this._state.roomsCheck === 'false'){
                this._state.roomsCheck = 'true'
                this._state.lastObj = 'rooms/'
                this._state.truePath = action.pathName
            }
        } else if(action.type === SITE) {
            this._state.truePath = ''
            this._state.lastObj = ''
            if (this._state.siteCheck === 'true') {
                this._state.siteCheck = 'false'
            } else if (this._state.siteCheck === 'false'){
                this._state.siteCheck = 'true'
                this._state.lastObj = 'site/'
                this._state.truePath = action.pathName
            }
        } else if(action.type === BED_PLACE) {
            this._state.truePath = ''
            this._state.lastObj = ''
            if (this._state.bedPlaceCheck === 'true') {
                this._state.bedPlaceCheck = 'false'
            } else if (this._state.bedPlaceCheck === 'false'){
                this._state.bedPlaceCheck = 'true'
                this._state.lastObj = 'bed-place/'
                this._state.truePath = action.pathName
            }
        } else if(action.type === HOUSES) {
            this._state.truePath = ''
            this._state.lastObj = ''
            if (this._state.housesCheck === 'true') {
                this._state.housesCheck = 'false'
            } else if (this._state.housesCheck === 'false'){
                this._state.housesCheck = 'true'
                this._state.lastObj = 'houses/'
                this._state.truePath = action.pathName
            }
        } else if (action.type === SEARCH_PATH) {
            if (this._state.flatsCheck === 'true') {
                window.location.assign('http://localhost:3000/'
                    + this._state.lastObj + this._state.truePath)
            } else if (this._state.roomsCheck === 'true') {
                window.location.assign('http://localhost:3000/'
                    + this._state.lastObj + this._state.truePath)
            } else if (this._state.siteCheck === 'true') {
                window.location.assign('http://localhost:3000/'
                    + this._state.lastObj + this._state.truePath)
            } else if (this._state.bedPlaceCheck === 'true') {
                window.location.assign('http://localhost:3000/'
                    + this._state.lastObj + this._state.truePath)
            } else if (this._state.housesCheck === 'true') {
                window.location.assign('http://localhost:3000/'
                    + this._state.lastObj + this._state.truePath)
            } else {window.location.assign('http://localhost:3000/')}
        }
    },
}


export default store
window.store = store