export class Quote {
    // id!: number;
    // text!: string;
    // author!: string;
    showName: boolean;

    constructor(public id: number, public text: string, public author: string, public upvote: number=0, public downvote: number=0,) {
        this.showName = false;
    }
}
