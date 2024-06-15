class Astrologer {
    constructor(id, name, flow = 0, isTop = false) {
        this.id = id;
        this.name = name;
        this.flow = flow;
        this.isTop = isTop;
    }
}

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const astrologers = [
    new Astrologer(1, 'Astro1'),
    new Astrologer(2, 'Astro2', 0, true),
    new Astrologer(3, 'Astro3')
];

function distributeUsers(users) {
    let queue = [];
    let topAstrologers = astrologers.filter(a => a.isTop);
    let regularAstrologers = astrologers.filter(a => !a.isTop);

    users.forEach(user => {
        if (topAstrologers.length) {
            const astro = topAstrologers.shift();
            astro.flow++;
            topAstrologers.push(astro);
            queue.push({ user, astrologer: astro });
        } else {
            const astro = regularAstrologers.shift();
            astro.flow++;
            regularAstrologers.push(astro);
            queue.push({ user, astrologer: astro });
        }
    });

    return queue;
}

module.exports = { distributeUsers };
