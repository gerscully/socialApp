import _ from 'lodash';

class StubAPI {
    constructor() {
        this.posts = [
            {
                id: 0,
                title: '2019 Kick-Off Lunch',
                description: 'We will be having our 2019 Kick-Off Lunch on Thurs Jan 31st. A choice of lunches will be provided. All we ask is that you fill out the survey and let us know what events you would like to see this year',
                type: 'Internal',
                evtstatus: 'Past'
			},
            {
                id: 1,
                title: 'Restaurant Review',
                description: 'Everetts Restaurant, High St, Waterford on Thurs Feb 28th at 6pm.',
                type: 'External',
                evtstatus: 'Past'
            },
            {
                id: 2,
                title: 'Valentines Day Quiz & Bingo',
                description: 'Bingo at 1pm, Quiz throughout the afternoon. Valentines-themed prizes to be won!',
                type: 'Internal',
                evtstatus: 'Past'
            },
            {
                id: 3,
                title: 'Casual Night Out',
                description: 'You wanted alcohol and food. Here you go. The Reg on Fri Mar 15th at 8pm',
                type: 'External',
                evtstatus: 'Past'
            },
            {
                id: 4,
                title: 'Summer BBQ',
                description: 'Food & Drinks at River Cottage on Fri Jul 11th at 8pm',
                type: 'External',
                evtstatus: 'Upcoming'
            },
            {
                id: 5,
                title: 'Mystery Bus Tour',
                description: 'Sorry, its a secret!',
                type: 'External',
                evtstatus: 'Upcoming'
            }

        ];
    }

    getAll() {
        return this.posts;
    }

    add(title, description, type, evtstatus) {
        let id = 1;
        let last = _.last(this.posts);
        if (last) {
            id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
            id, title, 
            description,
            type, evtstatus
        });
        return newLen > len;
    }

    delete(k) {
        let elements = _.remove(this.posts,
            (post) => post.id === k
        );
        return elements;
    }

    update(key, ti, d, ty, es) {
        // let index = _.findIndex(this.posts,
        //     (post) => post.id === key
        // );
        let index = key;

        if (index !== -1) {
            this.posts.splice(index, 1,
                { id: index, title: ti, description: d, type: ty, evtstatus: es });
            return true;
        }
        return false;
    }

}

export default (new StubAPI());