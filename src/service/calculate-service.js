
class CalculateService {
    calculateMenuPrice(menu){
        let menuPrice = 0;
        switch(menu){
            case 'espresso' : menuPrice = 4000;
            break;
            case 'americano' : menuPrice = 4500;
            break;
            case 'coffee-latte' : menuPrice = 5000;
            break;
            case 'cappuccino' : menuPrice = 5000;
            break;
            case 'caramel-macchiato' : menuPrice = 5900;
            break;
            case 'mocha-frappuccino' : menuPrice = 5900;
            break;
            case 'java-chip-frappuccino' : menuPrice = 6300;
            break;
            case 'mango-banana-blended' : menuPrice = 6300;
            break;
            case 'cool-lime-fizzio' : menuPrice = 5900;
            break;
            case 'green-tea' : menuPrice = 5300;
            break;
            case 'mint-blend-tea' : menuPrice = 4500;
            break;
            default :
            menuPrice = 0;
        }
        return menuPrice;
    }

    calculateSizePrice(size) {
        let sizePrice = 0;
        switch(size){
            case 'tall' : sizePrice = 0;
            break;
            case 'grande' : sizePrice = 500;
            break;
            case 'venti' : sizePrice = 1000;
            break;
            default :
            sizePrice = 0;
        }
        return sizePrice;
    }

    calculateShotPrice(shot) {
        return shot * 500;
    }

    calculateSyrupPrice(syrup_count) {
       return syrup_count != '' ? 500 : 0;
    }
}


export default CalculateService;
