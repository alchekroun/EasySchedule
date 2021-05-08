export class Room {
    constructor(idRoom) {
        this._idRoom = idRoom;
    }

    get idRoom() {
        return this._idRoom;
    }

    set idRoom(value) {
        this._idRoom = value;
    }
}

