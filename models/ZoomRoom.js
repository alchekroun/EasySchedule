export class ZoomRoom extends Room{
    constructor(idRoom,url) {
        super(idRoom);
        this._url = url;
        this._idRoom = idRoom;
    }


    get idRoom() {
        return this._idRoom;
    }

    set idRoom(value) {
        this._idRoom = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }
}