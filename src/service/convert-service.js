
class ConvertService {

    convertValMenu (menu) {
        switch(menu){
            case 'espresso' : menu = '에스프레소';
            break;
            case 'americano' : menu = '아메리카노';
            break;
            case 'coffee-latte' : menu = '카페라떼';
            break;
            case 'cappuccino' : menu = '카푸치노';
            break;
            case 'caramel-macchiato' : menu = '카라멜 마끼야또';
            break;
            case 'mocha-frappuccino' : menu = '모카 프라푸치노';
            break;
            case 'java-chip-frappuccino' : menu = '자바칩 프라푸치노';
            break;
            case 'mango-banana-blended' : menu = '망고 바나나 블렌디드';
            break;
            case 'cool-lime-fizzio' : menu = '쿨라임 피지오';
            break;
            case 'green-tea' : menu = '제주 유기 녹차';
            break;
            case 'mint-blend-tea' : menu = '민트 블렌디드티';
            break;
            default : return new Error('no menu val');
        }
        return menu;
    }

    convertValTemp(temp) {
        temp == 'hot' ? temp='따뜻한' : temp = '차가운';
        return temp;
    }

    convertValSize (size) {
        switch(size){
            case 'tall' : size = '톨(355ml)';
            break;
            case 'grande' : size = '그란데(473ml)';
            break;
            case 'venti' : size = '벤티(591ml)';
            break;
            default: return new Error('no size val');
        }
        return size;
    }

    convertValCup (cup) {
        switch(cup){
            case 'disposable' : cup = '일회용컵';
            break;
            case 'shop' : cup = '매장컵';
            break;
            case 'personal' : cup = '개인컵(환경 지킴이🌲💕)';
            break;
            default: return new Error('no cup val');
        }
        return cup;
    }

    convertValSyrup(syrup) {
        switch(syrup){
            case 'vanila' : syrup = '바닐라 시럽';
            break;
            case 'caramel' : syrup = '카라멜 시럽';
            break;
            case 'hazelnut' : syrup = '헤이즐넛 시럽';
            break;
            default: return new Error('no syrup val');
        }
        return syrup;
    }

    convertValIce(ice){
        switch(ice){
            case 'default' : ice = '보통';
            break;
            case 'full' : ice = '많이';
            break;
            case 'less' : ice = '적게';
            break;
            default: return new Error('no ice val');
        }
        return ice;
    }

}

export default ConvertService;