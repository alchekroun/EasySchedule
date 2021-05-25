class ZoomRoom extends Room{
    constructor(idRoom,url) {
        super(idRoom);
        this._url = url;
        this._idRoom = idRoom;
    }


    getIdRoom() {
        return this._idRoom;
    }

    setIdRoom(value) {
        this._idRoom = value;
    }

    getUrl() {
        return this._url;
    }

    setUrl(value) {
        this._url = value;
    }
}