export class PhysicalRoom extends Room{
    constructor(idRoom,capacity,site,nbRoom) {
        super(idRoom);
        this._capacity=capacity;
        this._site=site;
        this._nbRoom= nbRoom;
        this._idRoom = idRoom;
    }


    get idRoom() {
        return this._idRoom;
    }

    set idRoom(value) {
        this._idRoom = value;
    }


    get site() {
        return this._site;
    }

    set site(value) {
        this._site = value;
    }


    get nbRoom() {
        return this._nbRoom;
    }

    set nbRoom(value) {
        this._nbRoom = value;
    }


    get capacity() {
        return this._capacity;
    }

    set capacity(value) {
        this._capacity = value;
    }
}