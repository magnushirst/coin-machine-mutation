const COINS = {
    twoPounds: {
        value: 200,
        decoratedValue: '£2'
    },
    onePound: {
        value: 100,
        decoratedValue: '£1'
    },
    twentyPence: {
        value: 20,
        decoratedValue: '20p'
    },
    twoPence: {
        value: 2,
        decoratedValue: '2p'
    },
    onePence: {
        value: 1,
        decoratedValue: '1p'
    }
}

function coinMachine(totalChange) {
    if(totalChange.toString().startsWith('£')) {
        totalChange = totalChange.replace('£', '');
        totalChange = totalChange.replace('.', '');
    }

    totalChange = Number(totalChange);
    let changeCoins = [];

    for(const i in COINS) {
        if(totalChange >= COINS[i].value) {
            const numberOfCoins = parseInt(totalChange / COINS[i].value)
            changeCoins.push(`${numberOfCoins}x${COINS[i].decoratedValue}`)
            totalChange -= numberOfCoins * COINS[i].value;
        }
    }

    return changeCoins.join(' ');
}

module.exports = { coinMachine }